import { Link } from "react-router-dom"
import back from "../assets/images/icon-back.svg"

export default function Settings () {

    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        <section className="flex items-center justify-between p-10 ">
            <div className="flex gap-5">
                <Link to={"/menu"} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                    <img src={back} alt="back" className="w-[40px]" />
                </Link>
                <button
                    className={`bg-blue-700 hover:bg-blue-800 py-2 w-60 border-b-2 border-blue-400 hover:border-blue-600 tracking-wide rounded-full text-white text-4xl font-bold select-none text-center`}
                >
                    SAVE CHANGES
                </button>
            </div>
            <h1 className="text-blue-200 select-none text-9xl">
                Settings
            </h1>
        </section>
        <section className="flex gap-10 p-10 border-2 border-black grow">
            <div className="w-1/3 bg-white shadow-md rounded-3xl grow shadow-black">

            </div>
            <div className="w-1/3 bg-white shadow-md rounded-3xl grow shadow-black">

            </div>
            <div className="w-1/3 bg-white shadow-md rounded-3xl grow shadow-black">

            </div>
        </section>
    </main>)
}