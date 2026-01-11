import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const MOCK_OFFERS = [
    {
        id: 1,
        type: 'received',
        item: 'Vintage Leather Jacket', // Item user owns
        offeredItem: 'Electric Guitar', // Item being offered
        from: 'Mike Ross',
        status: 'pending',
        date: '2 hours ago'
    },
    {
        id: 2,
        type: 'sent',
        item: 'Mountain Bike', // Item user wants
        offeredItem: 'Gaming Console', // Item user offered
        to: 'Sarah Chen',
        status: 'accepted',
        date: '1 day ago'
    },
    {
        id: 3,
        type: 'received',
        item: 'Espresso Machine',
        offeredItem: 'Cash + Coffee Beans',
        from: 'Tom Hardy',
        status: 'rejected',
        date: '3 days ago'
    }
];

export default function MyOffers() {
    const [offers, setOffers] = useState(() => {
        const saved = localStorage.getItem('barter_offers');
        return saved ? JSON.parse(saved) : MOCK_OFFERS;
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('barter_offers', JSON.stringify(offers));
    }, [offers]);

    const handleAccept = (id) => {
        setOffers(offers.map(offer =>
            offer.id === id ? { ...offer, status: 'accepted' } : offer
        ));
    };

    const handleDecline = (id) => {
        setOffers(offers.map(offer =>
            offer.id === id ? { ...offer, status: 'rejected' } : offer
        ));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <ArrowRightLeft className="text-indigo-600" />
                My Trade Offers
            </h1>

            <div className="space-y-4">
                {offers.map((offer) => (
                    <Card key={offer.id} className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${offer.type === 'received' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                        }`}>
                                        {offer.type}
                                    </span>
                                    <span className="text-sm text-gray-500">{offer.date}</span>
                                </div>

                                <div className="flex items-center gap-4 text-gray-900">
                                    <div className="font-semibold">{offer.offeredItem}</div>
                                    <ArrowRightLeft size={16} className="text-gray-400" />
                                    <div className="font-semibold">{offer.item}</div>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">
                                    {offer.type === 'received'
                                        ? `Offer from ${offer.from}`
                                        : `Offer sent to ${offer.to}`
                                    }
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                {offer.status === 'pending' && offer.type === 'received' && (
                                    <>
                                        <Button className="bg-green-600 hover:bg-green-700" onClick={() => handleAccept(offer.id)}>Accept</Button>
                                        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => handleDecline(offer.id)}>Decline</Button>
                                    </>
                                )}

                                {offer.status === 'pending' && offer.type === 'sent' && (
                                    <span className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full text-sm font-medium">
                                        <Clock size={16} /> Pending
                                    </span>
                                )}

                                {offer.status === 'accepted' && (
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                                            <CheckCircle size={16} /> Accepted
                                        </span>
                                        <Button size="sm" variant="outline" onClick={() => navigate('/messages')}>Open Chat</Button>
                                    </div>
                                )}

                                {offer.status === 'rejected' && (
                                    <span className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
                                        <XCircle size={16} /> Rejected
                                    </span>
                                )}
                            </div>

                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
