import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Corrected useNavigate usage

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white flex flex-col items-center justify-center relative">
      {/* Hero Section */}
      <main className="text-center mt-10">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Re-imagine Learning with AI.
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto mb-6">
          Organize your learning materials, create personalized study plans, and explore smarter ways to learn—all in one platform.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")} // Fixed navigation issue
            className="bg-black border border-white text-white px-6 py-3 rounded-full hover:bg-gray-800 text-lg"
          >
            Get Started
          </button>
          <button className="bg-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-400 text-lg">
            Learn More
          </button>
        </div>
      </main>

      {/* Bottom Navbar - Perfectly Styled */}
      <footer className="absolute bottom-5 w-[70%] flex items-center justify-between bg-black px-6 py-3 rounded-2xl shadow-lg">
        <span className="text-xl font-semibold italic text-white">Minerva</span>
        <div className="flex gap-3">
          <Link
            to="/signup"
            className="border border-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all"
            style={{
              borderImage: "linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4) 1",
            }}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-all"
          >
            Login
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
