import { useState, useRef } from "react";
import {
  FaFileUpload,
  FaComments,
  FaBook,
  FaVideo,
  FaFileAlt,
  FaCog,
  FaPlus,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    studyGuides: false,
    videos: false,
    files: false,
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedSize, setUploadedSize] = useState(0);
  const totalSize = 1800; // Simulated total size in MB
  const fileInputRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    try {
      setUploading(true);
      setUploadProgress(0);
      setUploadedSize(0);
  
      const formData = new FormData();
      formData.append("file", file);
  
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
  
      const response = await fetch("http://localhost:5000/api/files/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Send token for auth
        },
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }
  
      // Optionally update state/UI based on response
      console.log("✅ Upload successful:", data);
    } catch (error) {
      console.error("❌ Upload error:", error.message);
    } finally {
      setUploadProgress(100);
      setTimeout(() => setUploading(false), 1000);
    }
  };
  

  return (
    <div className="w-72 h-screen bg-black text-white p-4 flex flex-col border-r border-gray-800">
      {/* Logo and Title */}
      <div className="text-2xl font-bold mb-6 text-center">
        <span className="text-purple-400 italic">Minerva</span>
      </div>

      {/* Upload Button */}
      <div
        onClick={handleButtonClick}
        className="flex items-center space-x-3 p-10 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer mb-4"
      >
        <FaFileUpload className="text-purple-400 text-3xl" />
        <p className="text-lg font-semibold">Upload Files</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* Uploading Status */}
      {uploading && (
        <div className="bg-gray-900 p-4 rounded-lg mb-4 animate-fadeIn">
          <div className="flex items-center space-x-3">
            <FaFileUpload className="text-purple-400 text-xl" />
            <div>
              <p className="text-sm font-semibold">Uploading Files</p>
              <p className="text-xs text-gray-400">
                {uploadProgress}% - {((totalSize - uploadedSize) / 100).toFixed(1)} minutes left
              </p>
            </div>
          </div>
          <div className="mt-2 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-400"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {uploadedSize} MB of {totalSize / 10} GB
          </p>
        </div>
      )}

      {/* Sidebar Items */}
      <nav className="flex flex-col space-y-2">
        <SidebarItem icon={<FaComments />} title="Chats" subtitle="Ask anything about your files" />
        <SidebarDropdown
          icon={<FaBook />}
          title="Study Guides"
          subtitle="Learn and review course content"
          isOpen={openSections.studyGuides}
          toggle={() => toggleSection("studyGuides")}
        >
          <DropdownItem title="Chapter3 (1).pdf" />
        </SidebarDropdown>
        <SidebarDropdown
          icon={<FaVideo />}
          title="Videos"
          subtitle="Watch your course materials"
          isOpen={openSections.videos}
          toggle={() => toggleSection("videos")}
        >
          <DropdownItem title="No videos" action={<FaPlus className="text-gray-400" />} />
        </SidebarDropdown>
        <SidebarDropdown
          icon={<FaFileAlt />}
          title="1 File"
          subtitle="Learn about your course files"
          isOpen={openSections.files}
          toggle={() => toggleSection("files")}
        >
          <DropdownItem title="Private Files" />
          <DropdownItem title="Textbook" />
          <DropdownItem title="Chapter3 (1).pdf" />
        </SidebarDropdown>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
    <div className="text-purple-400 text-lg">{icon}</div>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  </div>
);

const SidebarDropdown = ({ icon, title, subtitle, isOpen, toggle, children }) => (
  <div>
    <div
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
      onClick={toggle}
    >
      <div className="flex items-center space-x-3">
        <div className="text-purple-400 text-lg">{icon}</div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      {isOpen ? <IoIosArrowDown className="text-gray-400" /> : <IoIosArrowForward className="text-gray-400" />}
    </div>
    {isOpen && <div className="ml-6 mt-2 space-y-2">{children}</div>}
  </div>
);

const DropdownItem = ({ title, action }) => (
  <div className="flex justify-between items-center text-sm bg-gray-900 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
    <p className="text-gray-300">{title}</p>
    {action && <div>{action}</div>}
  </div>
);

export default Sidebar;