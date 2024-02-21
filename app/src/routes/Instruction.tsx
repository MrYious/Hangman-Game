import { Link } from "react-router-dom"
import back from "../assets/images/icon-back.svg"

export default function Instruction () {
    interface Item {
        number: string,
        title: string,
        text: string,
    }

    const data: Item[] = [
        {
            number: '01',
            title: 'CHOOSE A CATEGORY',
            text: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.'
        },
        {
            number: '02',
            title: 'CUSTOMIZE YOUR GAME',
            text: 'By default, you play with 8 lives, no time limit and normal difficulty. You can spice things up by adjusting these options. Wanna take your game to the next level?'
        },
        {
            number: '03',
            title: 'GUESS LETTERS',
            text: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it is wrong, you lose some health, which empties after eight incorrect guesses."
        },
        {
            number: '04',
            title: 'WIN OR LOSE',
            text: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.'
        }
    ]

    return(<main className="flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-bg-desktop">
        <section className="flex items-center justify-between p-10 border-2 border-black">
            <Link to={"/"} className="p-5 border-b-2 rounded-full select-none border-violet-700 bg-violet-600 hover:bg-violet-800">
                <img src={back} alt="back" className="w-[40px]" />
            </Link>
            <h1 className="text-blue-200 text-9xl">
                Instructions
            </h1>
        </section>
        <section className="flex gap-10 p-10 border-2 border-black grow">
            {
                data.map((data) => <div className="flex flex-col justify-around w-1/4 p-5 text-center bg-gray-200 rounded-xl">
                    <div className="text-6xl font-bold text-blue-700">
                        {data.number}
                    </div>
                    <div className="text-4xl font-semibold text-violet-900">
                        {data.title}
                    </div>
                    <div className="text-xl opacity-70 h-36 text-violet-900">
                        {data.text}
                    </div>
                </div>)
            }
        </section>
    </main>)
}