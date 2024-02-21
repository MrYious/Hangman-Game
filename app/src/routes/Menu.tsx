import Button from "../components/Button"
import { Link } from "react-router-dom"
import back from "../assets/images/icon-back.svg"

export default function Menu () {

    const categories: string[] = ['Movies', 'Countries', 'Animals', 'Foods', 'Sports', 'Technology']

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
                        <div>
                            Time Limit:
                        </div>
                        <div>
                            NONE
                        </div>
                    </div>
                    <div className="flex justify-between text-5xl">
                        <div>
                            Lives:
                        </div>
                        <div>
                            8
                        </div>
                    </div>
                    <div className="flex justify-between text-5xl">
                        <div>
                            Difficulty:
                        </div>
                        <div>
                            Normal
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
                    <button key={i} className="text-6xl tracking-wide text-white bg-blue-700 border-t-2 border-b-8 border-blue-950 border-x-2 hover:border-blue-200 rounded-2xl hover:bg-blue-800">
                        {category}
                    </button>)
                }
            </div>
        </section>
    </main>)
}
