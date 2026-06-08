import FFDataRepo from '../assets/FFDataRepo.webp'
import LunarFantasy from '../assets/LunarFantasy.png'
import AIUpscale from '../assets/AIUpscale.png'
import OctopathTeamBuilder from '../assets/OctopathTeamBuilder.png'
import Freelance from '../assets/DataAnnotation.webp'
import AAFC from '../assets/AAFC.jpg'
import Carleton from '../assets/Carleton.jpg'

export const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About Me', href: '#about' },
]

export const projectItems = [
    {
        title: 'Final Fantasy Data Repository',
        desc: `Data repository for popular video games using Python, JupyterLab, Pandas, and NumPy to scrape, clean, and organize game data across multiple titles. Published the project on Kaggle with clear documentation. Project created to increase knowledge of the various data processing and automation tools provided by the Python ecosystem.`,
        image: FFDataRepo,
        tech: [
            'Python',
            'Pandas',
            'NumPy',
            'Jupyter Notebook',
            'JupyterLab',
            'Kaggle',
        ],
    },
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
        desc: `Built a web application that allows users to upload and enhance images using AI-powered upscaling. Designed a microservice architecture with Flask as the backend, integrating both relational (MySQL) and document-based (MongoDB) databases for flexibility in data storage.Used RabbitMQ to queue and manage image processing tasks efficiently. The system is fully containerized with Docker and orchestrated using Kubernetes, ensuring scalability, resilience, and efficient resource management in production environments.`,
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
        desc: `Created a fan-focused web platform dedicated to Final Fantasy IV, offering a comprehensive database of character lore, abilities, and equipment options. Developed with a React frontend and Express backend, the app delivers fast and organized access to game data. Implemented CI/CD pipelines via GitHub Actions and containerized the application with Docker for seamless deployment to Google Cloud Platform.`,
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
        title: 'QA Analyst',
        org: 'Data Annotation',
        desc: 'Performed quality assurance and evaluation of AI-generated content, identifying inaccuracies, inconsistencies, and edge cases to improve model performance. Reviewed outputs against project guidelines, documented findings, and provided detailed feedback to support the development of reliable and accurate AI systems.',
        timeRange: 'Jan 2025 - Present',
        image: Freelance,
        tech: [
            'Python',
            'Java',
            'JavaScript',
            'React',
            'Git',
            'Docker',
        ],
    },
    {
        title: 'Programmer Analyst',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Developed interactive Proof of Concept (PoC) solutions using Microsoft Power Platform, .NET, and JavaScript to showcase technical feasibility, drive stakeholder engagement, and support iterative requirements gathering. Collaborated cross-functionally to align business needs with scalable technical approache.`,
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
        title: 'Full-Stack Developer',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Contributed to the development of a migration tool to modernize system architecture. Collaborated with the System Designer to architect and implement a comprehensive suite of integration and load tests via Web API calls, ensuring data integrity, reliability, and performance.`,
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
        title: 'Full-Stack Developer',
        org: 'Agriculture and Agri-Food Canada',
        desc: `Maintained and enhanced legacy web applications through bug fixes, codebase modernization, test suite improvements, and implementation of custom client-requested features. Actively collaborated with clients to gather requirements, streamline their workflows, and deliver tailored solutions.`,
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
        desc: `Facilitated student learning by leading tutorial sessions focused on core computing concepts, including algorithmic complexity, correctness, and problem-solving techniques. Provided individualized support through email and scheduled meetings, and evaluated student performance by grading assignments with clear, constructive feedback.`,
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

export const about = {
    summary: "I'm a Software Engineering graduate with a passion for technology, problem-solving, and continuous learning. Throughout my academic and professional experiences, I've developed strong analytical skills through software development, quality assurance, tutoring, and technical projects. I enjoy breaking down complex problems, finding practical solutions, and creating experiences that are both reliable and user-focused. Whether I'm testing software, analyzing data, or building applications, I take pride in being detail-oriented, adaptable, and committed to delivering high-quality results. I'm currently seeking opportunities where I can continue growing my technical skills while contributing to meaningful projects and helping teams succeed.",
}
