import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function NearbyMap() {
    const navigate = useNavigate();

    return (
        <div className="h-[calc(100vh-8rem)] relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700"></div>

            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-sm">
                <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="text-indigo-600" />
                    Nearby Items
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                    Showing items within <strong>5 km</strong> of your location.
                </p>
                <div className="mt-4 flex gap-2">
                    <Button className="text-xs py-1 h-8" onClick={() => navigate('/')}>List View</Button>
                    <Button variant="secondary" className="text-xs py-1 h-8" onClick={() => navigate('/')}>Filter Area</Button>
                </div>
            </div>

            {/* Mock Pins */}
            {[
                { x: '20%', y: '30%', user: 'Sarah', item: 'Vintage Lamp' },
                { x: '50%', y: '45%', user: 'Mike', item: 'Bike' },
                { x: '70%', y: '20%', user: 'Jessica', item: 'Books' },
                { x: '40%', y: '60%', user: 'Tom', item: 'Guitar' },
            ].map((pin, i) => (
                <div
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: pin.x, top: pin.y }}
                    onClick={() => navigate('/items/1')}
                >
                    <div className="relative">
                        <MapPin size={40} className="text-indigo-600 drop-shadow-lg group-hover:-translate-y-1 transition-transform" fill="currentColor" />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded-lg shadow-xl text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {pin.item}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
