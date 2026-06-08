import { ArrowDownToDotIcon } from "lucide-react"
import { about } from "../constants"

const About = () => {
    return (
        <section id='about' className='flex flex-col gap-18 mt-[5%] pt-20 items-center'>
            <h3 className='text-3xl mt flex flex-col items-center gap-10 text-orange-600'>
                More About Me
                <ArrowDownToDotIcon size='3.25rem' />
            </h3>
            <p className='text-neutral-200 text-lg/9 max-w-[500px] text-left break-keep px-5 pt-3 pb-5
                shadow-sm shadow-amber-600/35'>
                {about.summary}
            </p>
        </section>
    )
}

export default About
