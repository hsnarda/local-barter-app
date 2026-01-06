import { Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

export default function TradeChat() {
    const messages = [
        { id: 1, sender: 'them', text: 'Hi! Is the jacket still available?', time: '10:00 AM' },
        { id: 2, sender: 'me', text: 'Yes it is! Are you interested in trading?', time: '10:05 AM' },
        { id: 3, sender: 'them', text: 'I have a near-mint electric guitar I am looking to part with.', time: '10:10 AM' },
    ];

    return (
        <div className="max-w-3xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <Card className="flex-grow flex flex-col overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-gray-900">Trade with Mike Ross</h2>
                        <p className="text-xs text-gray-500">Regarding: Vintage Leather Jacket</p>
                    </div>
                    <Button variant="outline" className="text-xs h-8">View Offer</Button>
                </div>

                {/* Messages */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-white">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.sender === 'me'
                                        ? 'bg-indigo-600 text-white rounded-tr-none'
                                        : 'bg-gray-100 text-gray-900 rounded-tl-none'
                                    }`}
                            >
                                <p>{msg.text}</p>
                                <p className={`text-[10px] mt-1 ${msg.sender === 'me' ? 'text-indigo-200' : 'text-gray-400'}`}>
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <form className="flex gap-2">
                        <Input
                            placeholder="Type a message..."
                            className="flex-grow border-0 focus:ring-0 bg-white"
                        />
                        <Button type="submit" className="px-3 rounded-full">
                            <Send size={18} />
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
