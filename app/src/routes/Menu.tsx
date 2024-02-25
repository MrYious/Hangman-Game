import { Link, useNavigate } from "react-router-dom"
import { setInitialGameData, setSettings } from "../slicers/gameDataSlicer"
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"

import Button from "../components/Button"
import back from "../assets/images/icon-back.svg"
import data from '../data/data.json'

export default function Menu () {
    const navigate = useNavigate()
    const categories: string[] = ['Movies', 'Countries', 'Animals', 'Foods', 'Sports', 'Technology']
    const state = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch()


    const handleStartGame = (category: string) => {
        // Generate a random word based on category

        const list = data[state.difficulty].filter(word => word.category === category )
        const randomWord = list[Math.floor(Math.random() * list.length)].word

        dispatch(
            setSettings({difficulty: state.difficulty, timeLimit: state.timeLimit, health: state.health})
        )
        dispatch(
            setInitialGameData({word: randomWord.toUpperCase(), category})
        )
        navigate('/play', {replace: true})
    }

    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        <section className="flex items-center justify-between p-10">
            <Link to={"/"} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={back} alt="back" className="w-[40px]" />
            </Link>
            <h1 className="text-blue-200 select-none text-9xl">
                Pick a Category
            </h1>
        </section>
        <section className="flex grow">
            <div className="flex flex-col items-center justify-center w-1/3 gap-10 p-5">
                <div className="flex flex-col w-full gap-5 p-5 bg-gray-200 shadow-md rounded-3xl shadow-black">
                    <div className="flex justify-between text-5xl">
                        <div className="text-violet-900">
                            Time Limit:
                        </div>
                        <div className="text-blue-700">
                            {state.timeLimit === 0 ? 'None' : state.timeLimit + ' mins'}
                        </div>
                    </div>
                    <div className="flex justify-between text-5xl">
                        <div className="text-violet-900">
                            Health:
                        </div>
                        <div className="text-blue-700">
                            {state.health}
                        </div>
                    </div>
                    <div className="flex justify-between text-5xl">
                        <div className="text-violet-900">
                            Difficulty:
                        </div>
                        <div className="text-blue-700">
                            {state.difficulty}
                        </div>
                    </div>
                </div>
                <Button
                    text={'CUSTOMIZE'}
                    type="primary"
                    to="settings"
                    replace={false}
                />
            </div>
            <div className="grid w-2/3 grid-cols-3 gap-5 p-5 ">
                {
                    categories.map((category, i) =>
                    <button onClick={()=>handleStartGame(category)} key={i} className="text-6xl tracking-wide text-white bg-blue-700 border-t-2 border-b-8 border-blue-950 border-x-2 hover:border-blue-200 rounded-2xl hover:bg-blue-800">
                        {category}
                    </button>)
                }
            </div>
        </section>
    </main>)
}
