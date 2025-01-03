import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="border-[1px] rounded-md p-5 shadow">
      <div className="flex justify-between py-2">
        <h1 className="font-semibold capitalize">{project.name}</h1>
        <button className="bg-gray-100 py-2 px-4 rounded">
          <Link to={`/project/${project.id}`}>View</Link>
        </button>
      </div>
      <div className="py-2">
        Status <span className="font-semibold capitalize">{project.status}</span>
      </div>
    </div>
  );
};

export default Project;
