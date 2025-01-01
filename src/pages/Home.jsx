import ClientList from "../components/ClientList";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div className="py-5">
      <div className="flex gap-5">
        <button className="border-2 border-gray-400 p-2 rounded">Add Client</button>
        <button className="border-2 border-gray-400 p-2 rounded">New Project</button>
      </div>
      <ProjectList />
      <ClientList />
    </div>
  );
};

export default Home;
