import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Grid, PlusCircle, MessageCircle, User, LogOut, MapPin, Heart, ArrowRightLeft } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
    const { user, signOut } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Barter<span className="font-extralight text-black">Loop</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavLink to="/" icon={Home} active={isActive('/')}>Feed</NavLink>
                        <NavLink to="/categories" icon={Grid} active={isActive('/categories')}>Categories</NavLink>
                        <NavLink to="/map" icon={MapPin} active={isActive('/map')}>Nearby</NavLink>

                        {user ? (
                            <>
                                <NavLink to="/my-offers" icon={ArrowRightLeft} active={isActive('/my-offers')}>Offers</NavLink>
                                <NavLink to="/favorites" icon={Heart} active={isActive('/favorites')}>Favorites</NavLink>
                                <NavLink to="/messages" icon={MessageCircle} active={isActive('/messages')}>Chat</NavLink>
                                <NavLink to="/profile" icon={User} active={isActive('/profile')}>Profile</NavLink>
                                <Link to="/add-item">
                                    <Button variant="primary" className="flex items-center gap-2">
                                        <PlusCircle size={18} />
                                        Post Item
                                    </Button>
                                </Link>
                                <button
                                    onClick={signOut}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                    title="Sign Out"
                                >
                                    <LogOut size={20} />
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login">
                                    <Button variant="outline" className="border-0">Log in</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button>Sign up</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ to, children, icon: Icon, active }) {
    return (
        <Link
            to={to}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${active ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
        >
            {Icon && <Icon size={18} />}
            {children}
        </Link>
    );
}
