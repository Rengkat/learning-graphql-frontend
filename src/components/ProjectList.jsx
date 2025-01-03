import { Fragment } from "react";
import Project from "./Project";
import { gql, useQuery } from "@apollo/client";
const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;
const ProjectList = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  console.log(data);
  return (
    <div className="py-5 grid grid-cols-3 gap-5 border-b-[1px]">
      {data.projects.map((project) => {
        return (
          <Fragment key={project.id}>
            <Project project={project} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProjectList;
