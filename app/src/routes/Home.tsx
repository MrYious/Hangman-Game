import Button from '../components/Button'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import play from '../assets/images/icon-play.svg'

export default function Home () {
    return (
        <main className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop ">
            {/* Menu */}
            <section className="relative flex flex-col items-center justify-center w-1/2 gap-5 pt-32 pb-20 bg-blue-700 border-t-8 border-blue-500 select-none border-x-4 bg-opacity-40 rounded-3xl">
                <img
                    src={logo}
                    alt="logo"
                    className='absolute -top-20'
                />
                <Link to={'menu'} replace className='p-10 border-b-4 border-black rounded-full select-none bg-violet-600 hover:bg-violet-800'>
                    <img src={play} alt="play" className='w-[120px]' />
                </Link>
                <Button
                    text={'HOW TO PLAY'}
                    to={'/instructions'}
                    type={'primary'}
                    replace={false}
                />
            </section>
            <footer className='absolute bottom-0 right-0 tracking-wider text-white select-none'>
                <a href="https://markrosario.vercel.app/">Made with ❤️ by Mark Edison Rosario</a>
            </footer>
        </main>
    )
}