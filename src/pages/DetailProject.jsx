import { useState } from "react";
import { FaMailBulk, FaPen, FaPhone, FaTrash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailProject = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div className="border-[2px] rounded-md w-[50%] mx-auto p-10">
        <div className="flex justify-end">
          <button className="bg-gray-100 py-2 px-4 rounded">
            <Link to={"/"}>Back</Link>
          </button>
        </div>
        <h1 className="font-medium text-3xl">Lorem ipsum dolor sit.</h1>
        <p className="py-3">This is Description</p>
        <div className="py-5">
          <h2 className="font-semibold text-xl">Project Status</h2>
          <p>In Progress</p>
        </div>
        <div className="pt-10">
          <h2 className="font-semibold text-xl">Client Information</h2>
          <ul className="mt-3">
            <li className="flex gap-2 items-center border-[1px] p-2 rounded">
              <FaUser /> <span>Alexander Rengkat</span>
            </li>
            <li className="flex gap-2 items-center border-[1px] p-2 rounded">
              <FaMailBulk /> <span>alex@gmail.com</span>
            </li>
            <li className="flex gap-2 items-center border-[1px] p-2 rounded">
              <FaPhone /> <span>08067581175</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-end my-5">
          <button
            onClick={() => setIsEdit((prev) => !prev)}
            className="flex gap-2 justify-center items-center bg-green-600 p-2 rounded shadow text-white">
            <FaPen />
            <span>Edit Project</span>
          </button>
        </div>
        {isEdit && (
          <div className="py-5">
            <h2 className="font-semibold text-xl">Update Project Details</h2>
            <div>Name</div>
            <input
              className="w-full border-[1px] p-2 mt-2"
              type="text"
              value={"Alexander Rengkat"}
            />
            <div>Description</div>
            <textarea className="w-full border-[1px] p-2 mt-2" name="" id="">
              This is Description
            </textarea>
            <div>Status</div>
            <select className="w-full border-[1px] p-2 mt-2 capitalize" name="" id="">
              <option value="pending">pending</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>
            <div className="flex justify-end my-5">
              <button className="flex gap-2 justify-center items-center bg-red-600 p-2 rounded shadow text-white">
                <FaTrash />
                <span>Delete Project</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProject;
