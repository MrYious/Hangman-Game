import { useAppSelector } from "../hooks/useReduxHooks";

export const DisplayWord = () => {

    const state = useAppSelector(state => state.gameData)

    return(<>
        {
            state.word.selectedWord.split('').map((letter,i) =>
                <div key={i} className={`${state.word.correctLetters.includes(letter) ? 'border-gray-200' : 'border-white opacity-30'} ${letter === ' ' ? ' opacity-0' : 'px-8 '} text-7xl bg-blue-700 py-5 rounded-3xl text-white border-2 border-t-[1px] `}>
                    {state.word.correctLetters.includes(letter) ? letter : '-'}
                </div>
            )
        }
    </>)
}