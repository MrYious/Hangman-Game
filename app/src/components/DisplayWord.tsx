import { useAppSelector } from "../hooks/useReduxHooks";

export const DisplayWord = () => {

    const state = useAppSelector(state => state.gameData)

    return(<>
        {
            state.word.selectedWord.split('').map(letter =>
                <div className={`${state.word.correctLetters.includes(letter) ? 'border-gray-200' : 'border-white opacity-30'} text-7xl px-8 py-5 bg-blue-700 rounded-3xl text-white border-4 border-t-2 `}>
                    {state.word.correctLetters.includes(letter) ? letter : '-'}
                </div>
            )
        }
    </>)
}