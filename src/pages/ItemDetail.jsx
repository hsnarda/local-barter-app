import { useParams } from 'react-router-dom';
import { MapPin, User, Shield, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function ItemDetail() {
    const { id } = useParams();

    // Mock data - normally fetched via ID
    const item = {
        title: 'Vintage Leather Jacket',
        price: 'Trade / Barter',
        description: 'Beautiful vintage leather jacket in great condition. Size M. Recently conditioned the leather. Looking to trade for some musical instruments or camping gear.',
        images: ['https://images.unsplash.com/photo-1551028919-ac7bcb7d7162?w=1200&q=80'],
        location: 'Downtown, 2.5 km away',
        owner: {
            name: 'Sarah Chen',
            rating: 4.9,
            joined: '2024'
        },
        condition: 'Good',
        category: 'Clothing'
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Images */}
            <div className="lg:col-span-2 space-y-4">
                <Card className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                </Card>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                    <p className="text-xl font-semibold text-indigo-600 mt-2">{item.price}</p>
                </div>

                <Card className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
                            {item.owner.name[0]}
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{item.owner.name}</h3>
                            <div className="flex items-center text-sm text-yellow-500">
                                {'★'.repeat(Math.round(item.owner.rating))}
                                <span className="text-gray-400 ml-1">({item.owner.rating})</span>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full flex items-center justify-center gap-2">
                        <MessageCircle size={20} />
                        Make an Offer
                    </Button>
                </Card>

                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-500 block">Condition</span>
                            <span className="font-medium">{item.condition}</span>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-500 block">Category</span>
                            <span className="font-medium">{item.category}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={16} />
                        {item.location}
                    </div>
                </div>
            </div>
        </div>
    );
}
