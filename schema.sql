-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  bio text,
  location text,
  rating numeric default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Items table
create table items (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  description text,
  category text,
  condition text,
  image_url text,
  status text default 'available' check (status in ('available', 'traded', 'archived')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Offers/Trades table
create table offers (
  id uuid default uuid_generate_v4() primary key,
  initiator_id uuid references profiles(id) on delete cascade not null,
  receiver_id uuid references profiles(id) on delete cascade not null,
  item_id uuid references items(id) on delete cascade not null, -- The item being asked for
  offered_item_id uuid references items(id), -- Optional: item offered in exchange
  status text default 'pending' check (status in ('pending', 'accepted', 'rejected', 'completed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Messages for trade chat
create table messages (
  id uuid default uuid_generate_v4() primary key,
  offer_id uuid references offers(id) on delete cascade not null,
  sender_id uuid references profiles(id) on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Favorites
create table favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  item_id uuid references items(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, item_id)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;
alter table items enable row level security;
alter table offers enable row level security;
alter table messages enable row level security;
alter table favorites enable row level security;

-- Policies (Simplified for MVP)
-- Profiles: Public read, owner update
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- Items: Public read, owner insert/update/delete
create policy "Items are viewable by everyone." on items for select using (true);
create policy "Users can insert their own items." on items for insert with check (auth.uid() = user_id);
create policy "Users can update their own items." on items for update using (auth.uid() = user_id);

-- Offers: Participants can read/update
create policy "Users can see offers involved in." on offers for select using (auth.uid() = initiator_id or auth.uid() = receiver_id);
create policy "Users can create offers." on offers for insert with check (auth.uid() = initiator_id);
create policy "Users can update offers involved in." on offers for update using (auth.uid() = initiator_id or auth.uid() = receiver_id);

-- Messages: Participants of the offer can read/insert
create policy "Users can read messages of their offers." on messages for select using (
  exists (select 1 from offers where id = offer_id and (initiator_id = auth.uid() or receiver_id = auth.uid()))
);
create policy "Users can send messages to their offers." on messages for insert with check (
  exists (select 1 from offers where id = offer_id and (initiator_id = auth.uid() or receiver_id = auth.uid()))
);

-- Favorites: Owner only
create policy "Users can see own favorites." on favorites for select using (auth.uid() = user_id);
create policy "Users can add favorites." on favorites for insert with check (auth.uid() = user_id);
create policy "Users can delete favorites." on favorites for delete using (auth.uid() = user_id);
