import Table, { DataRow } from "../../components/table/table";

const data: DataRow[] = [
  {
    title: "Automation Olympics",
    date: "04-06-2024",
    description: "The project team leader for a system that simulates the operation of a hydroelectric dam, utilizing two real Pelton and Francis turbines within the school to reproduce the energy generation process in a controlled and safe environment. The system includes a data collection mechanism. The process is automated through an S7-1200 PLC, which communicates via pressure and volume sensors over a Modbus-TCP network. The data sent to the web server is analyzed by a Machine Learning system and then displayed on a web app. Finally, the system, with the help of a second algorithm, is capable of self-managing by autonomously adjusting the speed of the motors.",
    links: {
      href: "https://press.siemens.com/it/it/comunicatostampa/proclamati-i-vincitori-dei-campionati-di-automazione-siemens-2024-tecnologie",
    },
  },
  {
    title: "Robotics Olympics",
    date: "22-03-2024",
    description: "This NAO-powered e-commerce system ranked second at the 2024 Italian National Robotics Olympics for its innovative approach to combining human-robot interaction with online shopping. Designed to enhance accessibility, it enables people with disabilities to achieve greater independence and inclusion in society.",
    links: {
      github: "https://github.com/GalileiIsNao-2024",
    },
  },
  {
    title: "Robotics Olympics",
    date: "23-05-2023",
    description: "Team leader of a project focused on recycling. A bin was built using a LEGO structure, equipped with a camera that could detect the material type of an object. The project was then presented as a game for children within the context of education on waste separation.",
    links: {
      github: "https://github.com/GalileiIsNao-2023",
    },
  },
];

export default function Projects() {
    return (
        <Table data={data} />
    )
}