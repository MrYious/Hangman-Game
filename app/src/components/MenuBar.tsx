import { stopGame } from "../slicers/gameDataSlicer"
import { useAppDispatch } from "../hooks/useReduxHooks"
import { useNavigate } from "react-router-dom"

export const MenuBar = (props: {handleCloseMenu: () => void}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleNewGame = () => {
        dispatch(stopGame())
        sessionStorage.removeItem('gameData')
        navigate('/menu', {replace: true})
    }

    const handleQuitGame = () => {
        dispatch(stopGame())
        sessionStorage.removeItem('gameData')
        navigate('/', {replace: true})
    }

    return(<section className="absolute flex items-center justify-center w-full min-h-screen bg-gray-900 bg-opacity-50">
        <div className="relative flex flex-col items-center justify-center w-1/3 gap-5 py-10 bg-blue-700 border-t-8 border-blue-500 select-none bg-opacity-80 border-x-4 rounded-3xl">
            <div className="text-white text-7xl">
                Paused
            </div>
            <button
                onClick={props.handleCloseMenu}
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
    </section>)
}