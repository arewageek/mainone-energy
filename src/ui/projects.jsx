import { fetchProjects } from "@/actions/projects.actions";
import React from "react";

const ProjectsGrid = () => {
  //   const projects = await fetchProjects(location);

  const projects = [
    {
      image: "assets/images/installations/inverter-1",
      location: "Ahaodao, Rivers State",
      title: "Installation of 75KVA Inverter system",
      category: "installation",
    },
    {
      image: "assets/images/installations/panel-roof-1",
      location: "Ahaodao, Rivers State",
      title: "Installation of 75KVA Inverter system",
      category: "installation",
    },
    {
      image: "assets/images/installations/panel-roof-2",
      location: "Omoku, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
    {
      image: "assets/images/installations/project-1",
      location: "Ahaodao, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
    {
      image: "assets/images/installations/project-2",
      location: "Ahaodao, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
    {
      image: "assets/images/installations/project-3",
      location: "Omaku, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
    {
      image: "assets/images/installations/project-4",
      location: "Omaku, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
    {
      image: "assets/images/installations/project-5",
      location: "Omaku, Rivers State",
      title: "Solar Inverter System Installation",
      category: "installation",
    },
  ];

  return (
    <div className="w-full lg:w-4/5 mx-auto mt-10 flex flex-wrap">
      {projects ? (
        projects.map((project, index) => (
          <div
            key={index}
            className="w-full lg:w-1/4 rounded-t-2xl p-4 group overflow-hidden cursor-pointer"
          >
            <div className="max-w-full overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                className="h-[200pt] lg:h-[250pt] object-cover w-full rounded-t-2xl group-hover:scale-105 transition group-hover:grayscale-[100]"
              />
              <div className="pt-3 flex flex-col gap-y-1">
                <h3 className="text-lg font-medium text-gray-800 pr-3">
                  {project.title}
                </h3>
                <address className="text-sm font-semibold">
                  {project.location}
                </address>
              </div>
              <div className="flex justify-between">
                <p className="text-xs text-gray-400 font-medium">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="text-center font-medium text-lg">
            No project found for this location
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
