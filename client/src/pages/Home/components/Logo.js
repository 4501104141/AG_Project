import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";

export default function Logo() {
    const logo = [
        {
            name: "Starbucks",
            img: logo1,
        },
        {
            name: "NesCoffee",
            img: logo2,
        },
        {
            name: "Tim Hortons",
            img: logo3,
        },
        {
            name: "Dunkin Dounuts",
            img: logo4,
        },
    ];
    return (
        <div>
            <div className="grid grid-cols-4 md:grid-cols-2 md:h-full sm:grid-cols-1 h-80 cursor-pointer mx-auto my-0 max-w-[1200px]">
                {logo.map((item, index) => {
                    return (
                        <div key={index} className="h-full w-full">
                            <div className="h-full bg-no-repeat bg-center w-full flex justify-center items-center">
                                <img
                                    className="mb-9 sm:mb-5"
                                    src={item.img}
                                    alt={item.name}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
