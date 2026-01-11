import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ItemDetail from './pages/ItemDetail';
import NearbyMap from './pages/NearbyMap';
import AddItem from './pages/AddItem';
import Favorites from './pages/Favorites';
import MyOffers from './pages/MyOffers';
import TradeChat from './pages/TradeChat';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="categories" element={<Categories />} />
        <Route path="items/:id" element={<ItemDetail />} />
        <Route path="map" element={<NearbyMap />} />
        <Route path="add-item" element={<AddItem />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="my-offers" element={<MyOffers />} />
        <Route path="messages" element={<TradeChat />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
