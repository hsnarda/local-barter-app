import { Search, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

// Temporary mock data until we fetch from Supabase
const SAMPLE_ITEMS = [
    {
        id: 1,
        title: 'Vintage Leather Jacket',
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1551028919-ac7bcb7d7162?w=800&q=80',
        distance: '2.5 km away',
        condition: 'Good'
    },
    {
        id: 2,
        title: 'Mountain Bike',
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80',
        distance: '5.0 km away',
        condition: 'Excellent'
    },
    {
        id: 3,
        title: 'Espresso Machine',
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=800&q=80',
        distance: '1.2 km away',
        condition: 'Like New'
    },
    {
        id: 4,
        title: 'Acoustic Guitar',
        category: 'Music',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
        distance: '3.8 km away',
        condition: 'Fair'
    },
];

export default function Home() {
    return (
        <div>
            {/* Hero / Search Section */}
            <section className="mb-8 text-center sm:text-left sm:flex sm:items-end sm:justify-between">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-3xl font-bold text-gray-900">Discover Local Treasures</h1>
                    <p className="text-gray-500 mt-2">Trade, barter, and give away items in your community.</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative w-full max-w-xs sm:w-64">
                        <Input placeholder="Search items..." className="pl-10" />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                    <Button variant="secondary" className="px-3">
                        <Filter size={20} />
                    </Button>
                </div>
            </section>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SAMPLE_ITEMS.map((item) => (
                    <Card key={item.id} className="group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                            <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                                <span>{item.distance}</span>
                                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{item.condition}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
