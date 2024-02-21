import { Link } from "react-router-dom"
import back from "../assets/images/icon-back.svg"

export default function Menu () {
    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        <section className="flex items-center justify-between p-10 border-2 border-black">
            <Link to={"/"} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={back} alt="back" className="w-[40px]" />
            </Link>
            <h1 className="text-blue-200 text-9xl">
                Pick a Category
            </h1>
        </section>
        <section className="flex ">
            <div className="">
                
            </div>
        </section>
    </main>)
}