const Suggestions = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {["Key Concepts in DSA", "Database Normalization", "AI Model Basics"].map((topic) => (
        <button
          key={topic}
          className="border border-gray-600 rounded-md px-4 py-1 text-sm text-gray-300 hover:bg-white/5 transition"
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
