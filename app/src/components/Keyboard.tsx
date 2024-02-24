import { correctGuess, incorrectGuess } from "../slicers/gameDataSlicer"
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"

export const Keyboard = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.gameData.word)
    console.log(state);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const handleAttempt = (letter: string) => {
        if (state.requiredLetters.includes(letter)) {
            console.log('Correct');
            dispatch(correctGuess(letter))
        } else{
            console.log('Incorrect');
            dispatch(incorrectGuess(letter))
        }
    }

    return(<div className="flex flex-wrap items-center justify-center gap-5 ">
        {
            letters.map((letter,i) =>
            <button
                key={i}
                onClick={()=>{handleAttempt(letter)}}
                disabled={state.attemptedLetters.includes(letter) || state.correctLetters.includes(letter) }
                className={` ${state.correctLetters.includes(letter) ? ' bg-green-700 text-white  opacity-80' : state.attemptedLetters.includes(letter) ? ' bg-gray-200 opacity-30' : 'bg-gray-200 hover:bg-blue-700 hover:text-white hover:shadow-violet-950 ' }
                flex items-center justify-center w-1/12 py-4 text-5xl shadow-sm rounded-3xl text-violet-950`}
            >
                {letter}
            </button>)
        }
    </div>)
}