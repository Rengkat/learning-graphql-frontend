import { FaFile, FaPlus } from "react-icons/fa";
import ClientList from "../components/ClientList";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div className="py-5">
      <div className="flex gap-5">
        <button className="border-2 border-gray-400 p-2 rounded flex items-center gap-2 bg-slate-200">
          <FaPlus />
          <span>Add Client</span>
        </button>
        <button className="border-2 border-gray-400 p-2 rounded flex items-center gap-2 bg-slate-200">
          <FaFile /> <span>New Project</span>
        </button>
      </div>
      <ProjectList />
      <ClientList />
    </div>
  );
};

export default Home;
