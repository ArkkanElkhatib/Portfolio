const Hero = () => {
    return (
        <section id='hero' className='flex flex-col items-center mt-20'>
            <h1 className='text-4xl sm:text-6xl 
                lg:text-7xl text-center tracking-wide hyphens-auto'>
                Arkkan El&#8209;Khatib
            </h1>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl bg-gradient-to-br from-orange-500 to-red-800
                    text-transparent bg-clip-text'>
                Software Developer
            </h2>
            <h4 className='text-lg text-neutral-400/80 mt-6'>
                Creating modern solutions for modern problems.
            </h4>
            <div className='mt-8 flex justify-between items-center cursor-pointer'>
                <a href='/resume/Arkkan_El-Khatib_Resume.pdf' className='bg-gradient-to-br from-orange-500 to-red-800
                    text-white p-2 px-3 rounded-md shadow-md shadow-orange-500/25 cursor-pointer
                    hover:from-orange-700 hover:to-red-950 hover:shadow-orange-700/25'>
                    Download my resume to go
                </a>
            </div>
        </section>
    )
}

export default Hero
