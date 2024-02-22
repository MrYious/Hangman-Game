import { FaMinus, FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import back from "../assets/images/icon-back.svg"
import { updateSettings } from "../slicers/settingsSlicer"

export default function Settings () {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.settings)
    const [isUpdated, setIsUpdated] = useState(false);

    const [changes, setChanges] = useState({
        timeLimit: 0,
        health: 0,
        difficulty: state.difficulty
    })

    useEffect(() => {
        if(changes.difficulty === state.difficulty && changes.health === 0 && changes.timeLimit === 0)
            setIsUpdated(false)
        else
            setIsUpdated(true)
    }, [changes])

    const handleSaveChanges = () => {
        console.log(changes);
        dispatch(updateSettings(changes))
        setChanges({
            timeLimit: 0,
            health: 0,
            difficulty: changes.difficulty
        })
    }

    const handleReset = () => {
        setChanges({
            timeLimit: 0 - state.timeLimit,
            health: 8 - state.health ,
            difficulty: 'Normal'
        })
    }

    const handleDecrementTimeLimit = () => {
        setChanges({...changes, timeLimit: changes.timeLimit - 1 })
    }

    const handleIncrementTimeLimit = () => {
        setChanges({...changes, timeLimit: changes.timeLimit + 1 })
    }

    const handleDecrementHealth = () => {
        setChanges({...changes, health: changes.health - 1 })
    }

    const handleIncrementHealth = () => {
        setChanges({...changes, health: changes.health + 1 })
    }

    const handleChangeDifficulty = (event: any) => {
        setChanges({...changes, difficulty: event.target.value })
    }

    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        <section className="flex items-center justify-between p-10 ">
            <div className="flex gap-5">
                <Link to={"/menu"} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                    <img src={back} alt="back" className="w-[40px]" />
                </Link>
                <button
                    onClick={handleSaveChanges}
                    disabled={!isUpdated}
                    className={`${!isUpdated ? 'bg-gray-600' : 'bg-blue-700 hover:bg-blue-800 border-blue-400 hover:border-blue-600'} border-b-2 py-2 w-60 tracking-wide rounded-full text-white text-4xl font-bold select-none text-center`}
                >
                    SAVE CHANGES
                </button>
                <button
                    onClick={handleReset}
                    className={`bg-blue-700 hover:bg-blue-800 py-2 w-32 border-b-2 border-blue-400 hover:border-blue-600 tracking-wide rounded-full text-white text-4xl font-bold select-none text-center`}
                >
                    RESET
                </button>
            </div>
            <h1 className="text-blue-200 select-none text-9xl">
                Settings
            </h1>
        </section>
        <section className="flex gap-10 p-10 border-2 border-black ">
            <div className="flex flex-col items-center w-1/3 p-10 bg-white shadow-md select-none justify-evenly rounded-3xl shadow-black">
                <h1 className="text-5xl text-blue-700">Time Limit</h1>
                <div className="flex items-center justify-center gap-5">
                    <button
                        onClick={handleDecrementTimeLimit}
                        disabled={state.timeLimit + changes.timeLimit === 0}
                        className={`${state.timeLimit + changes.timeLimit === 0 ? 'text-gray-600' : 'text-blue-700 hover:bg-blue-200'} p-2  rounded-full`}
                    >
                        <FaMinus className="text-4xl"/>
                    </button>
                    <div className=" text-9xl text-violet-900">
                        {state.timeLimit + changes.timeLimit}
                    </div>
                    <button
                        onClick={handleIncrementTimeLimit}
                        disabled={state.timeLimit + changes.timeLimit === state.maxTimeLimit}
                        className={`${state.timeLimit + changes.timeLimit === state.maxTimeLimit ? 'text-gray-600' : 'text-blue-700 hover:bg-blue-200'} p-2  rounded-full`}
                    >
                        <FaPlus className="text-4xl"/>
                    </button>
                </div>
                <div className="text-2xl opacity-70 text-violet-950">
                    Minutes
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3 p-10 bg-white shadow-md select-none justify-evenly rounded-3xl shadow-black">
                <h1 className="text-5xl text-blue-700">Difficulty</h1>
                <div className="flex flex-col text-4xl">
                    <label htmlFor="easy" className="flex gap-2">
                        <input type="radio" value={"Easy"} checked={changes.difficulty === 'Easy'} onChange={handleChangeDifficulty} name="difficulty" id="easy" className="scale-150 "/>
                        Easy
                    </label>
                    <label htmlFor="normal" className="flex gap-2">
                        <input type="radio" value={"Normal"} checked={changes.difficulty === 'Normal'} onChange={handleChangeDifficulty} name="difficulty" id="normal" className="scale-150 "/>
                        Normal
                    </label>
                    <label htmlFor="hard" className="flex gap-2">
                        <input type="radio" value={"Hard"} checked={changes.difficulty === 'Hard'} onChange={handleChangeDifficulty} name="difficulty" id="hard" className="scale-150 "/>
                        Hard
                    </label>
                </div>
            </div>
            <div className="flex flex-col items-center w-1/3 p-10 bg-white shadow-md select-none justify-evenly rounded-3xl shadow-black">
                <h1 className="text-5xl text-blue-700">Health</h1>
                <div className="flex items-center justify-center gap-5">
                    <button
                        onClick={handleDecrementHealth}
                        disabled={state.health + changes.health === 1}
                        className={`${state.health + changes.health === 1 ? 'text-gray-600' : 'text-blue-700 hover:bg-blue-200'} p-2  rounded-full`}
                    >
                        <FaMinus className="text-4xl"/>
                    </button>
                    <div className=" text-9xl text-violet-900">
                        {state.health + changes.health}
                    </div>
                    <button
                        onClick={handleIncrementHealth}
                        disabled={state.health + changes.health === state.maxHealth}
                        className={`${state.health + changes.health === state.maxHealth ? 'text-gray-600' : 'text-blue-700 hover:bg-blue-200'} p-2  rounded-full`}
                    >
                        <FaPlus className="text-4xl"/>
                    </button>
                </div>
            </div>
        </section>
    </main>)
}