"use server";

const projects = [
  {
    image: "assets/images/installations/inverter-1",
    location: "kubwa",
    title: "Installation of 75KVA Inverter system in Kubwa",
    state: "abia",
  },
];

export async function fetchProjects(state) {
  const selection = projects;
  if (!selection) return { success: false, message: "No project found" };
  return { success: true, data: selection };
}
