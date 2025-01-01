const Project = () => {
  return (
    <div className="border-[1px] rounded-md p-5 shadow">
      <div className="flex justify-between py-2">
        <h1 className="font-semibold capitalize">This is the Title</h1>
        <button className="bg-gray-100 py-2 px-4 rounded">View</button>
      </div>
      <div className="py-2">
        Status <span className="font-semibold">Completed</span>
      </div>
    </div>
  );
};

export default Project;
