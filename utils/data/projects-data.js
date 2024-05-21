import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'EverEsate - a real estate marketplace ',
        description: "This real estate marketplace website allows users to list properties for rent or sale, featuring JWT and Google OAuth-based authentication, advanced search functionality, and personalized recommendations. It includes a duration-based bidding system and real-time chat functionality powered by Socket.IO. The frontend is built with React, utilizing React Query for efficient query handling, caching, and invalidation, while the backend is developed using Node.js with Express and MongoDB for data storage.",
        tools: ["ReactJS", "NodeJS", "MongoDB", "Spring Boot"],
        // role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'ProgPal',
        description: 'ProgPal is a learning platform built with Flutter, Firebase, and Get State management, enabling users to learn programming effectively. It offers module-wise theoretical content and code snippets for both conceptual understanding and practical knowledge. The application features mind maps, Cron job notifications, and daily coding streak tracking to enhance the learning experience.',
        tools: ["Flutter", "Firebase", "Get State management"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'RecepieNook',
        description: 'RecepieNook is a website developed using HTML, CSS, JavaScript, and ASP.NET MVC, featuring an easy-to-use homepage where users can find popular recipes and utilize helpful search tools to discover the perfect dish. The site includes Web APIs for user and admin operations, detailed ingredient lists, and suggestions for seamless recipe exploration, along with printer-friendly recipe description formats for convenience.',
        tools: ["HTML", "CSS", "JavaScript", "ASP.NET MVC"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Art-Gallery Management System',
        description: "The Art-Gallery Management System is a web portal developed using HTML, Tailwind CSS, JavaScript, PHP, and MySQL, designed to manage and maintain data for artifacts, sculptures, and paintings. It features a responsive design to ensure compatibility across all devices and provides insights into monthly and yearly sales, auctions, and exhibitions. The portal is connected to a MySQL database to link all data seamlessly and ensure smooth performance.",
        tools: [ "HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },