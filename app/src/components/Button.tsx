import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Type = 'primary' | 'secondary'

interface ButtonProps {
    text: ReactNode,
    to: string,
    type: Type,
    replace: boolean,
}

const Button = (props: ButtonProps) => {

    return  <>
        <Link
            to={props.to}
            replace={props.replace}
            className={`${props.type === "primary" ? "bg-blue-700 hover:bg-blue-800" : "bg-violet-600 hover:bg-violet-800"} py-2 w-60 border-b-4 border-blue-950 tracking-wide rounded-full text-white text-4xl font-bold select-none text-center`}
        >
            {props.text}
        </Link>
    </>
}

export default Button;