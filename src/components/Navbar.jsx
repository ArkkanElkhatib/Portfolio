import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/AE.png'
import { navItems } from '../constants'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3
            backdrop-blur-lg border-b border-neutral-700/80'
        >
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <a href='/' className='h-10 w-10 mr-2' onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo(0, 0)
                        }}>
                            <img className='w-full h-full' src={logo} alt='Logo' />
                        </a>
                    </div>
                    <ul className='hidden lg:flex ml-14 gap-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}
                                    className='w-full h-full p-2 px-3 hover:bg-neutral-700 rounded-md'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:block'>
                        <a href='#contact'
                            className='bg-orange-600/80
                            hover:bg-neutral-700 p-2 px-3 rounded-md'
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col'>
                        <button onClick={toggleMenu} className='cursor-pointer'>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                    {menuOpen && (
                        <div className='fixed top-0 right-0 z-20 bg-neutral-900 w-full
                            flex flex-col justify-center p-12 items-center lg:hidden
                            gap-12 shadow-lg accent-black/25'>
                            <div className='absolute top-0 right-0 p-4'>
                                <button onClick={toggleMenu} className='cursor-pointer'>
                                    {menuOpen ? <X /> : <Menu />}
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <a href='/' className='h-8 w-8' onClick={(e) => {
                                    e.preventDefault()
                                    window.scrollTo(0, 0)
                                    toggleMenu()
                                }}>
                                    <img className='w-full h-full' src={logo} alt='Logo' />
                                </a>
                            </div>
                            <ul className='flex flex-col gap-8'>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}
                                            className='hover:bg-neutral-700 p-2 px-3 rounded-md'
                                            onClick={() => toggleMenu()}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a href='#contact' className='p-2 px-3 border rounded-md
                                    bg-orange-600/80 hover:bg-neutral-700 border-none'
                                    onClick={() => toggleMenu()}
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav >
    )
}

export default Navbar
