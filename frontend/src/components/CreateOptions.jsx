import { FileVideo, FileText, ListChecks, Share2 } from "lucide-react"; // Icons for visual enhancement

const options = [
  {
    label: "Quiz",
    color: "border-green-600 text-green-500",
    icon: <ListChecks className="w-4 h-4 mr-2" />,
  },
  {
    label: "Study Guide",
    color: "border-yellow-500 text-yellow-400",
    icon: <FileText className="w-4 h-4 mr-2" />,
  },
  {
    label: "Video",
    color: "border-cyan-500 text-cyan-400",
    icon: <FileVideo className="w-4 h-4 mr-2" />,
  },
  {
    label: "Mindmaps",
    color: "border-indigo-500 text-indigo-400",
    icon: <Share2 className="w-4 h-4 mr-2" />,
  },
];

const CreateOptions = () => {
  return (
    <>
    <p className="mt-10 text-xl">Create a..</p>
    <div className="flex flex-wrap justify-center gap-10 mt-5">
      {options.map((option) => (
        <button
          key={option.label}
          className={`flex items-center border rounded-md px-5 py-2 text-sm font-medium hover:bg-white/5 transition ${option.color}`}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
    </>
  );
};

export default CreateOptions;
