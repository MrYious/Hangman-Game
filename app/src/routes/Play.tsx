import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { Keyboard } from "../components/Keyboard";
import { MenuBar } from "../components/MenuBar";
import { Navigate } from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";
import { loadGameData } from "../slicers/gameDataSlicer";
import menu from "../assets/images/icon-menu.svg"

export default function Play () {
    console.log('Render');

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.gameData)

    const sessionData = sessionStorage.getItem('gameData')

    if (state.status === 'Inactive' && !sessionData) {
        return <Navigate to="/" replace={true} />
    }

    useEffect(() => {
        console.log('Initial State', state);
        if (sessionData) {
            const gameData = sessionStorage.getItem('gameData')
            const parsedGameData = JSON.parse(gameData ? gameData : '')
            console.log('Parsed Game Data', parsedGameData);
            dispatch(loadGameData(parsedGameData))
        } else {
            sessionStorage.setItem('gameData', JSON.stringify(state))
        }
    }, [])

    useEffect(() => {
        console.log('Changes in State');
        console.log(state);
        if (state.health.currentHealth === 0) {
            alert('You lose!')
        } else if (!state.word.requiredLetters.length) {
            alert('You win!')
        }
    }, [state])

    const [isMenu, setIsMenu] = useState(false)

    const handleOpenMenu = () => {
        setIsMenu(true)
    }
    const handleCloseMenu = () => {
        setIsMenu(false)
    }

    return(<main className="flex flex-col justify-between min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        {
            isMenu &&
            <MenuBar handleCloseMenu={handleCloseMenu} />
        }
        <section className="flex items-center gap-10 px-10 py-5 border-2 border-black">
            <button onClick={handleOpenMenu} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={menu} alt="menu" className="w-[32px]" />
            </button>
            <h1 className="font-bold text-blue-100 select-none text-7xl grow">
                {state.category}
            </h1>
            <div className="flex items-center gap-5">
                <ProgressBar completed={state.health.currentHealth} maxCompleted={state.health.maxHealth} className="bg-white border-8 border-white rounded-full select-none w-60" baseBgColor="#d1d5db" bgColor="#dc2626" customLabel=" " />
                <FaHeart className="text-6xl text-pink-500"/>
            </div>
        </section>
        <section className="flex items-center justify-center border-2 border-black">
            
        </section>
        <section className="p-8 border-2 border-black">
            <Keyboard />
        </section>
    </main>)
}
