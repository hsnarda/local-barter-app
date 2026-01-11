import { useState } from 'react';
import { Save } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Settings() {
    const [loading, setLoading] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Account Settings</h1>

            <Card className="p-6 space-y-6">
                <form onSubmit={handleSave} className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Profile Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Full Name" defaultValue="User Name" />
                        <Input label="Location" defaultValue="San Francisco, CA" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            rows={4}
                            defaultValue="Avid collector of vintage electronics and outdoor gear. Love sustainable living!"
                        />
                    </div>

                    <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 pt-4">Preferences</h2>
                    <div className="space-y-3">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" defaultChecked />
                            <span className="text-gray-700">Email Notifications for new offers</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" defaultChecked />
                            <span className="text-gray-700">Show location on map</span>
                        </label>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" className="flex items-center gap-2" disabled={loading}>
                            <Save size={18} />
                            {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
