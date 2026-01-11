import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import vintageJacketImg from '../assets/vintage_leather_jacket.png';
import espressoMachineImg from '../assets/espresso_machine.png';

const MOCK_FAVORITES = [
    {
        id: 1,
        title: 'Vintage Leather Jacket',
        category: 'Clothing',
        image: vintageJacketImg,
        addedDate: '2 days ago'
    },
    {
        id: 3,
        title: 'Espresso Machine',
        category: 'Electronics',
        image: espressoMachineImg,
        addedDate: '1 week ago'
    }
];

export default function Favorites() {
    const [favorites, setFavorites] = useState(MOCK_FAVORITES);
    const navigate = useNavigate();

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="text-red-500 fill-current" />
                My Favorites
            </h1>

            <div className="space-y-4">
                {favorites.map((item) => (
                    <Card key={item.id} className="flex gap-4 p-4 items-center group">
                        <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-grow min-w-0">
                            <h3 className="font-semibold text-lg text-gray-900 truncate">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.category} • Added {item.addedDate}</p>
                        </div>

                        <div className="flex gap-2">
                            <Button onClick={() => navigate(`/items/${item.id}`)}>View</Button>
                            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => removeFavorite(item.id)}>
                                <Trash2 size={18} />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
