import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useEffect, useState } from "react";

import { DisplayWord } from "../components/DisplayWord";
import { FaHeart } from "react-icons/fa";
import { Keyboard } from "../components/Keyboard";
import { MenuBar } from "../components/MenuBar";
import { Navigate } from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";
import { Result } from "../components/Result";
import menu from "../assets/images/icon-menu.svg"
import { useAppSelector } from "../hooks/useReduxHooks";
import { useTimer } from 'react-timer-hook';

export default function Play () {
    console.log('Render: Play');
    type Result = 'None' | 'Win' | 'Lose'
    const state = useAppSelector(state => state.gameData)
    const [result, setResult] = useState<Result>('None')
    const [isTimed, setIsTimed] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    if (state.status === 'Inactive') {
        return <Navigate to="/" replace={true} />
    }

    const time = new Date()
    time.setMinutes(time.getMinutes() + state.timeLimit)

    const { totalSeconds, start, pause, resume, isRunning } =  useTimer({expiryTimestamp: time, autoStart: false, onExpire() {
        if (isTimed) {
            setResult('Lose')
        }
    },})

    useEffect(()=>{
        if (state.timeLimit !== 0) {
            start()
            setIsTimed(true)
        }
    }, [])

    useEffect(() => {
        console.log('Changes in State');
        console.log(state);
        if (state.health.currentHealth === 0) {
            setResult('Lose')
        } else if (state.word.requiredLetters.length === 0 && state.status === 'Active') {
            setResult('Win')
        }
    }, [state])


    const handleOpenMenu = () => {
        if (isTimed) {
            pause()
        }
        setIsMenu(true)
    }
    const handleCloseMenu = () => {
        if (isTimed) {
            resume()
        }
        setIsMenu(false)
    }

    return(<main className="flex flex-col justify-between min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        {
            isMenu &&
            <MenuBar handleCloseMenu={handleCloseMenu} />
        }
        {
            result !== 'None' &&
            <Result result={result} />
        }
        <section className="flex items-center gap-10 px-10 py-5">
            <button onClick={handleOpenMenu} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={menu} alt="menu" className="w-[32px]" />
            </button>
            <h1 className="flex items-center gap-5 font-bold text-blue-100 select-none text-7xl grow">
                {state.category}
            </h1>
            {
                isTimed &&
                <>
                    <div className="flex items-center gap-2 text-xl text-white">
                        <div className={`${ isRunning ? 'bg-green-500' : 'bg-red-500'} w-5 h-5 rounded-full`}>
                        </div>
                        { isRunning ? 'Running' : totalSeconds === 0 ? 'Stopped' : 'Paused' }
                    </div>
                    <div className='w-20 h-20 text-right text-white'>
                        < CircularProgressbar className='text-white' value={totalSeconds} counterClockwise maxValue={state.timeLimit*60} minValue={0} strokeWidth={30} text={`${totalSeconds}`} styles={buildStyles({strokeLinecap: "butt", pathColor: 'white', trailColor: 'transparent', textColor: 'white'})}/>
                    </div>
                </>
            }
            <div className="flex items-center gap-5">
                <ProgressBar completed={state.health.currentHealth} maxCompleted={state.health.maxHealth} className="bg-white border-8 border-white rounded-full select-none w-60" baseBgColor="#d1d5db" bgColor="#dc2626" customLabel=" " />
                <FaHeart className="text-6xl text-pink-500"/>
            </div>
        </section>
        <section className="flex flex-wrap items-center justify-center gap-5 py-10 grow">
            <DisplayWord />
        </section>
        <section className="p-8">
            <Keyboard />
        </section>
    </main>)
}
