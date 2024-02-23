import { Navigate, useNavigate } from "react-router-dom"

import { FaHeart } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import menu from "../assets/images/icon-menu.svg"
import { useAppSelector } from "../hooks/useReduxHooks";
import { useState } from "react";

export default function Play () {
    const navigate = useNavigate()
    const state = useAppSelector(state => state.gameData)
    console.log(state);

    if (state.status === 'Inactive') {
        return <Navigate to="/" replace={true} />
    } else if (state.status === 'Active') {
        sessionStorage.setItem('savedData', JSON.stringify(state))
    }

    const [isMenu, setIsMenu] = useState(false)

    const handleOpenMenu = () => {
        setIsMenu(true)
    }

    const handleContinue = () => {
        setIsMenu(false)
    }

    const handleNewGame = () => {
        navigate('/menu', {replace: true})
    }

    const handleQuitGame = () => {
        navigate('/', {replace: true})
    }

    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        {
            isMenu &&
            <section className="absolute flex items-center justify-center w-full min-h-screen bg-gray-900 bg-opacity-50">
                <div className="relative flex flex-col items-center justify-center w-1/3 gap-5 py-10 bg-blue-700 border-t-8 border-blue-500 select-none bg-opacity-80 border-x-4 rounded-3xl">
                    <div className="text-white text-7xl">
                        Paused
                    </div>
                    <button
                        onClick={handleContinue}
                        className="py-2 text-4xl font-bold tracking-wide text-center text-white bg-blue-700 border-t-2 border-b-4 border-blue-300 rounded-full select-none hover:bg-blue-800 w-60"
                    >
                        CONTINUE
                    </button>
                    <button
                        onClick={handleNewGame}
                        className="py-2 text-4xl font-bold tracking-wide text-center text-white bg-blue-700 border-t-2 border-b-4 border-blue-300 rounded-full select-none hover:bg-blue-800 w-60"
                    >
                        NEW GAME
                    </button>
                    <button
                        onClick={handleQuitGame}
                        className="py-2 text-4xl font-bold tracking-wide text-center text-white border-t-2 border-b-4 border-blue-300 rounded-full select-none bg-violet-700 hover:bg-violet-800 w-60"
                    >
                        QUIT GAME
                    </button>
                </div>
            </section>
        }
        <section className="flex items-center gap-10 px-10 py-5 border-2 border-black">
            <button onClick={handleOpenMenu} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={menu} alt="menu" className="w-[32px]" />
            </button>
            <h1 className="font-bold text-blue-100 select-none text-7xl grow">
                Animals
            </h1>
            <div className="flex items-center gap-5">
                <ProgressBar completed={33} maxCompleted={100} className="bg-white border-8 border-white rounded-full select-none w-60" baseBgColor="#d1d5db" bgColor="#dc2626" customLabel=" " />
                <FaHeart className="text-6xl text-pink-700"/>
            </div>
        </section>
    </main>)
}
