import { ArrowDownToDotIcon } from 'lucide-react'
import { experienceItems } from '../constants'


const Experience = () => {
    return (
        <section id='experience' className='flex flex-col gap-18 mt-[5%] pt-20'>
            <h3 className='text-3xl mt-2 flex flex-col items-center gap-10 text-orange-600'>
                View My Experience
                <ArrowDownToDotIcon size='3.25rem' />
            </h3>
            <div className='flex flex-col gap-15'>
                {experienceItems.map((item, index) => {
                    let experienceClass = index % 2 == 0 ?
                        'flex flex-col-reverse lg:flex-row gap-10 lg:gap-5' :
                        'flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-5'

                    return (
                        <div className={experienceClass} key={index}>
                            <div className='flex flex-col justify-center items-center w-full lg:w-[50%] gap-5 lg:gap-10 break-keep'>
                                <div className=''>
                                    <h4 className='text-3xl bg-gradient-to-br from-orange-500 to-red-700
                                    text-transparent bg-clip-text tracking-wide hyphens-auto w-[95vw]'>
                                        {item.org}
                                    </h4>
                                    <h5 className='text-xl bg-gradient-to-br from-orange-500 to-red-700
                                    text-transparent bg-clip-text tracking-wide hyphens-auto pb-2'>
                                        {item.title}
                                    </h5>
                                    <span className='text-lg text-neutral-400'>{item.timeRange}</span>
                                </div>
                                <p className='text-sm/7 lg:leading-8 lg:text-xl text-neutral-200 w-[90vw] lg:w-[90%] text-left'>
                                    {item.desc}
                                </p>
                                <div className='flex flex-wrap gap-2 text-sm justify-center w-[80vw] lg:w-[85%] mt-2'>
                                    {item.tech.map((tech, techIndex) => {
                                        return (
                                            <span key={techIndex}
                                                className='py-1 p-2 bg-gradient-to-br
                                                rounded-lg shadow-md shadow-amber-500/25 text-md text-neutral-200
                                                from-orange-500/60 to-red-500/80'>
                                                {tech}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <img src={item.image} className='rounded-lg m-auto max-w-[500px] w-full lg:w-[50%] shadow-lg shadow-orange-800/20 brightness-90' />
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default Experience
