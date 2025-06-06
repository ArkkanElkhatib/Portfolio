import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {

    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto pt-20 px-6'>
                <Hero />
                <Projects />
                <Experience />
                <About />
                <Contact />
            </div>
        </>
    )
}

export default App
