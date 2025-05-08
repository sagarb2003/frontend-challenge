import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`w-full px-6 py-4 shadow-md ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'} border-b-2`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">Frontend Challenges</p>
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 rounded-md ${theme === 'light'
                                ? 'bg-gray-200  text-gray-800'
                                : 'bg-gray-700  text-white'
                            }`}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;