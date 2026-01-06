import { User, MapPin, Calendar, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function UserProfile() {
    const { user } = useAuth();

    // Mock profile data
    const profile = {
        name: user?.email?.split('@')[0] || 'User', // Fallback name
        email: user?.email,
        location: 'San Francisco, CA',
        joined: 'January 2024',
        rating: 4.8,
        bio: 'Avid collector of vintage electronics and outdoor gear. Love sustainable living!',
        listings: 12,
        trades: 8
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-3xl font-bold text-indigo-700">
                        {profile.name[0].toUpperCase()}
                    </div>

                    <div className="flex-grow text-center md:text-left space-y-2">
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                            <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-semibold">Pro Trader</span>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><MapPin size={16} /> {profile.location}</span>
                            <span className="flex items-center gap-1"><Calendar size={16} /> Joined {profile.joined}</span>
                            <span className="flex items-center gap-1 text-yellow-600"><Star size={16} fill="currentColor" /> {profile.rating} Rating</span>
                        </div>

                        <p className="text-gray-600 max-w-xl">{profile.bio}</p>
                    </div>

                    <Button variant="secondary" onClick={() => window.location.href = '/settings'}>Edit Profile</Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-gray-100 pt-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{profile.listings}</div>
                        <div className="text-sm text-gray-500">Active Listings</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{profile.trades}</div>
                        <div className="text-sm text-gray-500">Completed Trades</div>
                    </div>
                    {/* More stats can go here */}
                </div>
            </Card>

            <h2 className="text-xl font-bold text-gray-900">Your Active Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for listings grid, reusing Home.jsx cards logic */}
                <Card className="p-8 text-center text-gray-500 bg-gray-50 border-dashed">
                    No active listings found.
                    <div className="mt-4">
                        <Button onClick={() => window.location.href = '/add-item'}>Create New Listing</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
