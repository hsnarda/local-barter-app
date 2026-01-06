import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Upload } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

export default function AddItem() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        condition: '',
        imageUrl: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        console.log('Submitting item:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // For MVP, we're not actually uploading files to storage yet, just taking URLs
        // In a real app we'd upload to Supabase Storage here.

        setLoading(false);
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">List an Item</h1>

            <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="What are you trading?"
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            placeholder="Describe your item..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Electronics"
                        />

                        <Input
                            label="Condition"
                            name="condition"
                            value={formData.condition}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Like New"
                        />
                    </div>

                    <div>
                        <Input
                            label="Image URL"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://..."
                            required
                        />
                        {formData.imageUrl && (
                            <div className="mt-4 aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-contain" onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        )}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button type="button" variant="secondary" className="w-1/3" onClick={() => navigate(-1)}>
                            Cancel
                        </Button>
                        <Button type="submit" className="w-2/3" disabled={loading}>
                            {loading ? 'Posting...' : 'Post Item'}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
