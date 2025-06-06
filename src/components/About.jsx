import { ArrowDownToDotIcon } from "lucide-react"

const About = () => {
    return (
        <section id='about' className='flex flex-col gap-18 mt-[5%] pt-20 items-center'>
            <h3 className='text-3xl mt flex flex-col items-center gap-10 text-orange-600'>
                More About Me
                <ArrowDownToDotIcon size='3.25rem' />
            </h3>
            <p className='text-md text-neutral-300 text-base/8 max-w-[500px]'>
                I'm a Software Engineering graduate with a passion for building thoughtful, scalable applications—from web tools that support gaming communities to backend systems that solve real-world challenges. I enjoy working across in both front and backend develoment environments, with experience in technologies like React, Java, Spring Boot, Go, Python, Docker, and cloud platforms such as Google Cloud and Microsoft Azure.
                <br />
                <br />
                My personal projects often blend technical problem-solving with creativity, whether it's designing a lore-driven game database, building AI-powered image tools, or streamlining complex data migrations. I value clean code, maintainable architecture, and always look for opportunities to learn and grow through collaboration and continuous improvement.
                <br />
                <br />
                Outside of coding, I’m an RPG enthusiast with a soft spot for systems-rich titles like Octopath Traveler and the Final Fantasy series. I strive to bring the same analytical mindset and curiosity I apply in games to the work I do in tech.
            </p>
        </section>
    )
}

export default About
