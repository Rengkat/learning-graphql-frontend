import { Fragment } from "react";
import Project from "./Project";

const projects = [1, 2, 3];
const ProjectList = () => {
  return (
    <div className="py-5 grid grid-cols-3 gap-5 border-b-[1px]">
      {projects.map((project) => {
        return (
          <Fragment key={project}>
            <Project />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProjectList;
