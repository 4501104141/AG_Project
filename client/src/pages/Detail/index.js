import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import TabSize from "./components/TabSize";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import pro111 from "../../assets/images/bg.jpg";
import Button from "../../components/Button";
import LineY from "./components/LineY";
export default function Details() {
    const produc1 = [
        {
            id: 1,
            img: pro111,
        },
    ];
    const { id, img } = useParams();
    const [quality, setQuality] = useState(1);
    const handleMinus = () => {
        setQuality(quality - 1);
    };
    const handleAdd = () => {
        setQuality(quality + 1);
    };
    return (
        <section>
            <div className="container bg-quaternary-500">
                <div className="min-h-[720px] bg-detail-bg bg-cover bg-center bg-fixed bg-no-repeat flex-center gap-y-4"></div>
                <div className="w-5/6 my-0 mx-auto py-20">
                    <div className="flex-center-y text-4xl pl-32 pb-6 tracking-wide">
                        <Link to="/drinks" className="font-bold ">
                            Drinks
                        </Link>
                        <IconContext.Provider
                            value={{
                                color: "black",
                                className: "text-5xl mx-5",
                            }}
                        >
                            <BsArrowRight />
                        </IconContext.Provider>
                        <p className="leading-10">{id}</p>
                    </div>
                    <div className="flex-center gap-40 my-0 mx-auto">
                        {produc1.map((product) => (
                            <div className="h-full">
                                <img
                                    src={product.img}
                                    alt={product.id}
                                    className="flex h-[550px] w-[450px] object-cover rounded-xl"
                                />
                            </div>
                        ))}
                        <div className="mx-0 my-auto">
                            <h1 className="text-7xl leading-10 font-bold tracking-wide">
                                {id}
                            </h1>
                            <div className="py-4 px-2 text-2xl font-bold">
                                <div className="py-5 flex-center-y">
                                    <h3 className="tracking-widest pr-8">
                                        Size
                                    </h3>
                                    <div className="">
                                        <TabSize />
                                    </div>
                                </div>
                                <div className="py-5 flex-center-y justify-between">
                                    <h3 className="pr-11 tracking-widest">
                                        Quality
                                    </h3>
                                    <div className="flex-center-y justify-between text-white w-[240px] h-10 bg-secondary-500 rounded-2xl">
                                        <button
                                            className="relative w-1/3 flex-center-x"
                                            onClick={handleMinus}
                                        >
                                            <AiOutlineMinus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 right-0"></div>
                                        </button>
                                        <p className="w-1/3 text-center">
                                            {quality}
                                        </p>
                                        <button
                                            className="relative w-1/3 flex-center-x"
                                            onClick={handleAdd}
                                        >
                                            <AiOutlinePlus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 left-0"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h3 className="tracking-widest pr-8 mb-5">
                                        Milk
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] h-1 relative">
                                        <LineY />
                                        <div className="w-[30px] h-[30px] absolute -top-3 -right-3 bg-black rounded-full z-20"></div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h3 className="tracking-widest pr-8 mb-5">
                                        Sweetnees
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] h-1 relative">
                                        <LineY />
                                        <div className="w-[30px] h-[30px] absolute -top-3 -right-3 bg-black rounded-full z-20"></div>
                                    </div>
                                </div>
                                <div className="py-4 flex justify-between">
                                    <h3 className="tracking-widest pr-8 mb-5">
                                        Price
                                    </h3>
                                    <h3 className="tracking-widest pr-8 mb-5">
                                        6.40$
                                    </h3>
                                </div>
                            </div>
                            <div className="flex px-10 justify-between">
                                <Button name="Order now" />
                                <Button name="Add to cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
