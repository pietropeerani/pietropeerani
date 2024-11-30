import DropCard from '../../components/dropCard/dropCard';
import DinamicSlot, { DinamicSlotProp } from '../../components/dinamicSlot/dinamicSlot';

const frontendTabsData: DinamicSlotProp[] = [
    { title: 'CSS', content: 'I use CSS to craft visually stunning and responsive designs, ensuring seamless user experiences across all devices.' },
    { title: 'Javascript', content: 'I leverage JavaScript to add interactivity and dynamic features, enhancing the functionality and engagement of web applications.' },
    { title: 'HTML', content: 'I build the foundation of every web project with HTML, structuring content to ensure clarity and accessibility.' },
    { title: 'React', content: 'With React, I develop efficient, component-based user interfaces, allowing for scalable and maintainable web applications.' },
];

const backendTabsData: DinamicSlotProp[] = [
    { title: 'Node.js', content: 'I use Node.js for building fast, scalable server-side applications, leveraging JavaScript for both the frontend and backend.' },
    { title: 'Databases', content: 'I work with both relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases to ensure efficient data storage and retrieval.' },
    { title: 'APIs', content: 'I design and implement RESTful APIs to enable seamless communication between the server and the client, ensuring smooth data transfer.' },
    { title: 'Authentication', content: 'I implement secure authentication methods, such as OAuth and JWT, to protect user data and ensure safe access to the application.' },
];

export default function Skills() {
    return (
        <>
            <DropCard title='Frontend'>
                The frontend of a website is the visible and interactive part that users directly experience. Using technologies like HTML, CSS, and JavaScript, the frontend is responsible for the structure, styling, and behavior of the site. The main goal is to create a smooth and engaging user experience, ensuring the website is visually appealing, easy to navigate, and responsive, meaning it adapts to various devices and screen sizes. A well-designed frontend is essential for making the site intuitive and functional, thereby enhancing the interaction between the user and the online content.
                <DinamicSlot data={frontendTabsData} />
            </DropCard>

            <DropCard title='Backend'>
                The backend of a website refers to the server-side part that manages data, handles requests, and ensures smooth communication between the frontend and databases. It typically involves server technologies like Node.js, Python, Ruby, PHP, and databases like MySQL or MongoDB. The backend's primary role is to process user requests, manage data storage and retrieval, and ensure security and performance. A strong backend is critical for handling business logic, user authentication, and delivering dynamic content efficiently and securely to users.
                <DinamicSlot data={backendTabsData} />
            </DropCard>
        </>
    )
};