import LunarFantasy from '../assets/LunarFantasy.png'
import AIUpscale from '../assets/AIUpscale.png'
import OctopathTeamBuilder from '../assets/OctopathTeamBuilder.png'
import Freelance from '../assets/Freelance.jpg'
import AAFC from '../assets/AAFC.jpg'
import Carleton from '../assets/Carleton.jpg'

export const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Me', href: '#about' },
]

export const projectItems = [
    {
        title: 'Octopath Team Builder',
        desc: `Developed a full- stack web application and compa ion CLI tool to assist players in building optimized teams for Octopath Traveler I & II.The platform enables users to explore character synergies, compare roles, and plan party compositions.Implemented using modern technologies with a Go backend, PostgreSQL database, and React / Next.js frontend.Deployed on Google Cloud with automated CI / CD pipelines and containerized infrastructure via Docker for scalability and ease of maintenance.`,
        image: OctopathTeamBuilder,
        tech: [
            'React',
            'NextJS',
            'Go',
            'TypeScript',
            'Docker',
            'PostgreSQL',
            'Google Cloud Platform',
            'CI/CD',
        ],
    },
    {
        title: 'AI Image Upscaler',
        desc: `Built a web application that allows users to upload and enhance images using AI-powered upscaling.Designed a microservice architecture with Flask as the backend, integrating both relational(MySQL) and document - based(MongoDB) databases for flexibility in data storage.Used RabbitMQ to queue and manage image processing tasks efficiently.The system is fully containerized with Docker and orchestrated using Kubernetes, ensuring scalability, resilience, and efficient resource management in production environments.`,
        image: AIUpscale,
        tech: [
            'Python',
            'Flask',
            'MySQL',
            'MongoDB',
            'RabbitMQ',
            'Docker',
            'Kubernetes',
        ],
    },
    {
        title: 'Lunar Fantasy',
        desc: `Created a fan - focused web platform dedicated to Final Fantasy IV, offering a comprehensive database of character lore, ability descriptions, level - up abilities, and equipment options.Developed with a React frontend and Express backend, the app delivers fast and organized access to game data.Implemented CI / CD pipelines via GitHub Actions and containerized the application with Docker for seamless deployment to Google Cloud Platform.Designed with scalability and maintainability in mind to support long - term content expansion.`,
        image: LunarFantasy,
        tech: [
            'React',
            'Express',
            'JavaScript',
            'Docker',
            'Google Cloud Platform',
            'Github Actions',
            'CI/CD',
        ],
    },
]

export const experienceItems = [
    {
        title: 'Freelance Developer',
        org: 'Self-Employed',
        desc: 'Developed custom software solutions for small businesses and individual clients, focusing on web applications, automation tools, and business workflows. Collaborate directly with clients to gather requirements, design and develop scalable solutions, and provide ongoing maintenance and support. Manage all aspects of the development cycle, from planning and UI/UX to deployment and client training.',
        timeRange: 'Jan 2025 - Present',
        image: Freelance,
        tech: [
            'Python',
            'React',
            'JavaScript',
            'HTML/CSS',
            'Docker',
            'GCP',
            'Figma',
        ],
    },
    {
        title: 'Programmer Analyst - 3-Month Term',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Developed interactive Proof of Concept(PoC) solutions using Microsoft Power Platform, .NET, and JavaScript to showcase technical feasibility, drive stakeholder engagement, and support iterative requirements gathering.Collaborated cross-functionally to align business needs with scalable technical approaches, accelerating decision - making and solution design.`,
        timeRange: 'Aug 2024 - Nov 2024',
        image: AAFC,
        tech: [
            'Microsoft 365 Tools',
            'Power Apps',
            'Power Automate',
            'Power BI',
            'C#',
            '.NET',
            'JavaScript',
            'OracleDB',
        ],
    },
    {
        title: 'Web Developer',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Contributed to the development of a migration tool to transition data from a legacy Spring Boot platform to a modern microservices - based Spring Boot architecture.Collaborated with the System Designer to architect and implement a comprehensive suite of integration and load tests via Web API calls, ensuring data integrity, reliability, and performance under high - throughput conditions.`,
        timeRange: 'May 2022 - Aug 2023',
        image: AAFC,
        tech: [
            'Python',
            'OpenAPI',
            'ReactJS',
            'Docker',
            'PostgreSQL',
            'Azure',
            'CI/CD',
            'DevOps',
            'Java',
            'Spring Boot',
            'Apache JMeter',
            'Linux',
        ],
    },
    {
        title: 'Java Web Developer',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Maintained and enhanced legacy web applications through bug fixes, codebase modernization, test suite improvements, and implementation of custom client - requested features.Actively collaborated with clients to gather requirements, streamline their workflows, and deliver tailored solutions—including program scripts, proprietary user guides, and detailed documentation of application functionality.`,
        timeRange: 'May 2021 - Dec 2021',
        image: AAFC,
        tech: [
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'JSP',
            'AngularJS',
            'JUnit',
            'Mockito',
            'Python',
            'JSP',
            'AsciiDoc',
        ],
    },
    {
        title: 'Teaching Assistant',
        org: 'Carleton University',
        desc: `Facilitated student learning by leading tutorial sessions focused on core computing concepts, including algorithmic complexity, correctness, and problem - solving techniques.Provided individualized support through email and scheduled meetings, and evaluated student performance by grading assignments with clear, constructive feedback.`,
        timeRange: 'Jan 2021 - Apr 2021',
        image: Carleton,
        tech: [
            'Microsoft 365 Tools',
            'LaTeX',
            'Java',
            'Python',
            'Discord',
        ],
    },
]
