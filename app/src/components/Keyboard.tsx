// import { stopGame } from "../slicers/gameDataSlicer"

// import { useAppDispatch } from "../hooks/useReduxHooks"

export const Keyboard = () => {
    // const dispatch = useAppDispatch()
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return(<div className="flex flex-wrap items-center justify-center gap-5 text-violet-950 ">
        {
            letters.map((letter,i) =>
            <div key={i} className="flex items-center justify-center w-1/12 py-4 text-5xl bg-gray-200 shadow-sm cursor-pointer rounded-3xl hover:bg-blue-700 hover:text-white hover:shadow-violet-950">
                {letter}
            </div>)
        }
    </div>)
}