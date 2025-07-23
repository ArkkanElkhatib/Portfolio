import { ArrowDownToDotIcon } from "lucide-react"
import { projectItems } from "../constants"

const Projects = () => {
    return (
        <section id='projects' className='flex flex-col gap-18 mt-[15%] pt-20'>
            <h3 className='text-3xl mt flex flex-col items-center gap-10 text-orange-600'>
                See My Projects
                <ArrowDownToDotIcon size='3.25rem' />
            </h3>
            <div className='flex flex-col gap-15'>
                {projectItems.map((item, index) => {
                    let projectClass = index % 2 == 0 ?
                        'flex flex-col-reverse lg:flex-row gap-10 lg:gap-5' :
                        'flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-5'

                    return (
                        <div className={projectClass} key={index}>
                            <div className='flex flex-col justify-center items-center w-full lg:w-[50%] gap-5 lg:gap-10'>
                                <h4 className='text-2xl p-3 bg-gradient-to-br from-orange-500 to-red-700
                                    text-transparent bg-clip-text tracking-wide hyphens-auto'>
                                    {item.title}
                                </h4>
                                <p className='text-sm/7 lg:leading-8 lg:text-lg text-neutral-300 w-full lg:w-[75%]'>
                                    {item.desc}
                                </p>
                                <div className='flex flex-wrap gap-2 text-sm justify-center lg:w-[75%] mt-8'>
                                    {item.tech.map((tech, techIndex) => {
                                        return (
                                            <span key={techIndex}
                                                className='p-px px-2 bg-gradient-to-br 
                                                rounded-sm shadow-md shadow-amber-500/25 
                                                from-orange-500/60 to-red-500/80'>
                                                {tech}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <img src={item.image} className='rounded-lg w-full m-auto max-w-[500px] lg:max-w-auto lg:w-[50%] shadow-lg shadow-orange-800/20 brightness-90 max-h-' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
