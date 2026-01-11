import { useNavigate } from 'react-router-dom';
import { Monitor, Armchair, Shirt, Bike, Music, Book, Wrench, Sprout } from 'lucide-react';
import Card from '../components/ui/Card';

const CATEGORIES = [
    { id: 1, name: 'Electronics', icon: Monitor, color: 'bg-blue-100 text-blue-600', count: 120 },
    { id: 2, name: 'Furniture', icon: Armchair, color: 'bg-orange-100 text-orange-600', count: 85 },
    { id: 3, name: 'Clothing', icon: Shirt, color: 'bg-pink-100 text-pink-600', count: 230 },
    { id: 4, name: 'Sports', icon: Bike, color: 'bg-green-100 text-green-600', count: 45 },
    { id: 5, name: 'Music', icon: Music, color: 'bg-purple-100 text-purple-600', count: 32 },
    { id: 6, name: 'Books', icon: Book, color: 'bg-yellow-100 text-yellow-600', count: 156 },
    { id: 7, name: 'Tools', icon: Wrench, color: 'bg-gray-100 text-gray-600', count: 64 },
    { id: 8, name: 'Garden', icon: Sprout, color: 'bg-emerald-100 text-emerald-600', count: 28 },
];

export default function Categories() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {CATEGORIES.map(({ id, name, icon: Icon, color, count }) => (
                    <Card key={id} className="p-6 hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/')}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                            <Icon size={24} />
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{count} items</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
