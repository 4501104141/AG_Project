import React from "react";
import { Link } from "react-router-dom";
export default function Button({
    active,
    className,
    name,
    Icon,
    onclick,
    link,
    href,
}) {
    return link ? (
        <Link
            className={`${className} ${active ? "bg-quaternary-500 text-black" : "bg-primary-500 text-white"
                }  py-2 px-5 font-semibold outline-none border-none 
                rounded-md inline-block
                shadow-md transition-all hover:bg-quaternary-500 
                hover:text-black ${Icon ? "flex-center-y justify-between" : "text-center"
                }`}
            to={href}
        >
            <p>{name}</p>
            {Icon && <Icon size={24} />}
        </Link>
    ) : (
        <button
            className={`${className} ${active ? "bg-quaternary-500 text-black" : "bg-primary-500 text-white"
                }  py-2 px-5 font-semibold 
                 outline-none border-none 
                 rounded-md shadow-md transition-all hover:bg-quaternary-500 
                hover:text-black ${Icon ? "flex-center-y justify-between" : "text-center"
                }`}
            onClick={onclick}
        >
            <p>{name}</p>
            {Icon && <Icon size={24} />}
        </button>
    );
}
