const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-[#1c1c1e] p-3 rounded-lg flex items-center border border-transparent ring-1 ring-inset ring-purple-500 focus-within:ring-2 focus-within:ring-purple-400 transition">
        <input
          type="text"
          className="bg-transparent flex-grow outline-none text-white placeholder-gray-400 px-2 text-sm"
          placeholder="Type a question, topic, or keyword..."
        />
        <button className="text-purple-400 text-lg hover:text-purple-300 transition">
          🔍
        </button>
      </div>

      {/* Horizontal line separator */}
      <div className="h-px bg-gray-700 mt-4 mx-auto w-full" />
    </div>
  );
};

export default SearchBar;
