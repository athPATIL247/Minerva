const Navbar = () => {
    return (
      <div className="flex items-center justify-between p-4 bg-black text-white">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-gray-800 text-white p-2 rounded w-1/2 focus:ring-2 focus:ring-purple-400"
        />
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">🔔</button>
          <div className="w-10 h-10 rounded-full bg-gray-700"></div> {/* Profile Icon */}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  