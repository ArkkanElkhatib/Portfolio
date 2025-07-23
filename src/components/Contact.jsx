import { ArrowDownToDotIcon } from "lucide-react"

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col gap-15'>
            <h3 className='text-3xl mt-15 flex flex-col items-center gap-10 text-orange-600'>
                Reach Out to Me
                <ArrowDownToDotIcon size='3.25rem' />
            </h3>
            <div className='flex flex-col gap-15 lg:gap-0 lg:flex-row justify-center w-full'>
                <div className='w-full lg:w-[50%] flex flex-col gap-10 text-base/8'>
                    {
                        //<h4 className='text-2xl text-orange-500'>Contact Me Directly</h4>
                    }
                    <p className='text-lg lg:text-xl text-neutral-400 m-auto max-w-[30ch]'>
                        via email at &nbsp;
                        <br />
                        <i><u>
                            <a className='text-orange-400/80 text-shadow-xs text-shadow-orange-400/40'
                                href='mailto:arkkanito@gmail.com'>arkkanito@gmail.com</a>
                        </u></i>
                        <br />
                        <br />
                        via cell at &nbsp;
                        <br />
                        <i><u>
                            <a className='text-orange-400/80 text-shadow-xs text-shadow-orange-400/40'
                                href='tel:arkkanito@gmail.com'>(613) 501-1308</a>
                        </u></i>
                        <br />
                        <br />
                        {
                            //Alternatively fill out the form and I'll get back to you as soon as possible
                        }
                        <span className='text-orange-400 text-shadow-xs text-shadow-orange-400/20'>
                            Looking forward to hearing from you!
                        </span>
                    </p>
                </div>
                { /*
                <div className='w-full md:w-[70%] lg:w-[50%] m-auto'>
                    <form className='flex flex-col items-center gap-5 border border-neutral-500/70 w-full
                    p-8 px-5 md:p-10 md:px-15 text-sm lg:text-md rounded-lg'
                        <input type='text' placeholder='Your Name' name='name'
                            className='border-2 border-orange-600 w-full focus:border-orange-400
                        p-2 px-3 focus:outline focus:outline-orange-400'
                            required />
                        <input type='text' placeholder='Your Organization (Optional)' name='organization'
                            className='border-2 border-orange-600 w-full focus:border-orange-400
                        p-2 px-3 focus:outline focus:outline-orange-400'
                        />
                        <input type='email' placeholder='Your Email' name='email'
                            className='border-2 border-orange-600 w-full focus:border-orange-400
                        p-2 px-3 focus:outline focus:outline-orange-400'
                        />
                        <input type='tel' placeholder='Your Phone Number (Optional)' name='phone'
                            className='border-2 border-orange-600 w-full focus:border-orange-400
                        p-2 px-3 focus:outline focus:outline-orange-400'
                        />

                        <textarea placeholder='Your Message' name='message'
                            className='border-2 border-orange-600 w-full focus:border-orange-400
                        p-2 px-3 focus:outline focus:outline-orange-400 min-w-auto max-w-auto max-h-[500px]'
                            rows='8'
                            required
                        />
                        <button type='submit' value='submit' className='bg-gradient-to-br from-orange-500 to-red-700 p-2 px-3 hover:cursor-pointer
                        hover:from-orange-700 hover:to-red-950 hover:shadow-orange-700/25
                        rounded-md shadow-md shadow-orange-400/20 mt-2'>
                            Send Message
                        </button>
                    </form>
                </div>
                */}
            </div>
        </section >
    )
}



export default Contact
