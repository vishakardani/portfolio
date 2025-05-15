import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'kardanivisha@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Visha, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/vishakardani' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/vishakardani' },
];

export const MY_STACK = {
    frontend: [
        // {
        //     name: 'Flutter',
        //     icon: '/logo/flutter.svg',
        // },
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        // {
        //     name: 'Next.js',
        //     icon: '/logo/next.png',
        // },
        // {
        //     name: 'Redux',
        //     icon: '/logo/redux.png',
        // },
        // {
        //     name: 'Tailwind CSS',
        //     icon: '/logo/tailwind.png',
        // },
        
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        // {
        //     name: 'Express.js',
        //     icon: '/logo/express.png',
        // },
        {
            name: 'PHP',
            icon: '/logo/php.svg',
        },
         {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: '.Net',
            icon: '/logo/dotnet.png'
        },
        {
            name: 'Java',
            icon: '/logo/java.png'
        },
        {
            name: 'Python',
            icon: '/logo/python.png'
        }
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        // {
        //     name: 'PostgreSQL',
        //     icon: '/logo/postgreSQL.png',
        // },
        // {
        //     name: 'MongoDB',
        //     icon: '/logo/mongodb.svg',
        // },
        // {
        //     name: 'Firebase',
        //     icon: '/logo/firebase.png',
        // },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Arduino',
            icon: '/logo/arduino.png',
        },
        // {
        //     name: 'Docker',
        //     icon: '/logo/docker.svg',
        // },
        // {
        //     name: 'AWS',
        //     icon: '/logo/aws.png',
        // },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Food Delivery Web App',
        slug: 'food-delivery',
        liveUrl: 'https://food-delivery-app-b69e3.web.app/',
        year: 2024,
        description: `
      <ul>
        <li> Created a food delivery app interface using React.js with a clean and mobile-friendly design.</li>
        <li> Built pages for browsing restaurants, viewing menus, and managing a shopping cart. </li>
        <li> Used local data and React state to show how orders and cart updates work without a backend. </li>
        <li> Fully Responsive: Optimized for all device sizes</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      `,
        techStack: [
            'React.js',
        ],
        thumbnail: '/projects/thumbnail/food-delivery.png',
        longThumbnail: '/projects/long/food-delivery.png',
        images: [
            '/projects/images/food-delivery-1.png',
            '/projects/images/food-delivery-2.png',
            '/projects/images/food-delivery-3.png',
            '/projects/images/food-delivery-4.png',
            '/projects/images/food-delivery-5.png',
        ],
    },
    {
        title: 'Colour Mixing Lamp',
        slug: 'color-mixing-lamp',
        techStack: [
            'Arduino',
            'C++',
        ],
        thumbnail: '/projects/thumbnail/color-mixing-lamp.jpg',
        longThumbnail: '/projects/long/color-mixing-lamp.jpg',
        images: [
          '/projects/images/color-mixing-lamp.jpg'
        ],
        liveUrl: 'https://github.com/vishakardani/Color-mixing-lamp',
        year: 2023,
        description: `
        <li>Built an interactive colour-changing lamp using Arduino, RGB LEDs, and photoresistors to respond dynamically to ambient light conditions. </li>
        <li>Implemented analog sensing and pulse-width modulation (PWM) to control RGB LED output based on filtered light intensity. </li>
        <li>Designed and assembled a functional prototype demonstrating real-time colour mixing using voltage divider circuits and light sensors. </li>
        `,
        role: `<li>Arduino Programmer</li>`,
    }
];

export const MY_EXPERIENCE = [
    {
        company: 'Binary Geckos (Internship)',
        duration: 'May 2024 – June 2024',
        description: `Completed an internship where I built a food delivery web app using React.js, focusing on 
        responsive design anduser-friendly interfaces. Gained hands-on experience in frontend development, 
        component-based architecture,and state management using React`,
        companyWeb:'https://binarygeckos.com/'
    },
    {
        company: 'Content Hammering (Internship)',
        duration: 'January 2025 – March 2025',
        description: `Completed an internship covering full-stack web development fundamentals including HTML, CSS, JavaScript,
                    PHP, MySQL, and basic Laravel. Gained hands-on experience through practical tasks like login systems, REST APIs,
                    web scraping, and real-world debugging projects.`,
        companyWeb:'https://contenthammering.com/'
    },
];
