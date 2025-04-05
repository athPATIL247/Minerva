import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Suggestions from "../components/Suggestions";
import CreateOptions from "../components/CreateOptions";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        {/* Main Section */}
        <div className="flex flex-col justify-center items-center p-6 h-[100vh]">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">What can I help you today?</h1>
            <p className="text-gray-400">Get answers with references to your materials.</p>
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Suggestions */}
          <Suggestions />

          {/* Create Options */}
          <CreateOptions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
