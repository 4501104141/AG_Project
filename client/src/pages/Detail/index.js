import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Size from "./components/Size";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import products1 from "../../assets/images/cappacino.png";
import Button from "../../components/Button";
import LineY from "./components/LineY";
export default function Details() {
    const products = [
        {
            id: 1,
            name: "Cappacino",
            img: products1,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
            price: "6.40",
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
                <div className="w-full my-0 mx-auto py-20">
                    <div className="flex-center-y text-4xl pl-60 md:text-2xl sm:px-6 sm:text-xl lg:pl-9 pb-6 tracking-wide">
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
                    <div className="flex-center-y justify-between px-28 sm:px-6 w-10/12 lg:w-full lg:gap-5 my-0 mx-auto lg:px-10">
                        {products.map((product) => (
                            <div key={product.id} className="w-full h-full">
                                <img
                                    src={product.img}
                                    alt={product.id}
                                    className="flex h-[550px] md:h-[400px] lg:h-[500px] w-[400px] sm:h-[390px] md:mb-16 object-center object-cover rounded-xl"
                                />
                            </div>
                        ))}
                        <div className="mx-0 my-auto lg:pl-5">
                            <h1 className="text-7xl lg:text-5xl md:text-4xl sm:text-3xl leading-10 font-bold tracking-wide">
                                {id}
                            </h1>
                            <div className="py-4 px-2 md:px-0 text-2xl md:text-xl sm:text-base font-bold">
                                <div className="py-5 flex-center-y sm:justify-between">
                                    <h3 className="tracking-widest md:pr-14 pr-8">
                                        Size
                                    </h3>
                                    <Size />
                                </div>
                                <div className="py-5 flex-center-y md:justify-start sm:justify-between justify-between">
                                    <h3 className="pr-11 md:pr-6 tracking-widest">
                                        Quality
                                    </h3>
                                    <div className="flex-center-y justify-between text-white py-2 bg-secondary-500 rounded-2xl">
                                        <button
                                            className="relative w-1/3 flex-center-x sm:px-5 px-6"
                                            onClick={handleMinus}
                                        >
                                            <AiOutlineMinus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 right-0"></div>
                                        </button>
                                        <p className="text-center sm:px-5 px-8">
                                            {quality}
                                        </p>
                                        <button
                                            className="relative px-6 sm:px-5 flex-center-x"
                                            onClick={handleAdd}
                                        >
                                            <AiOutlinePlus size={30} />
                                            <div className="absolute bg-white h-full w-1 top-0 left-0"></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="py-4 md:flex-center-y justify-between">
                                    <h3 className="tracking-widest pr-8 md:mb-0 mb-5">
                                        Mike
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] md:w-6/12 h-1 relative">
                                        <LineY />
                                        <div className="w-[30px] h-[30px] absolute -top-3 -right-3 bg-black rounded-full z-20"></div>
                                    </div>
                                </div>
                                <div className="py-4 md:flex-center-y justify-between">
                                    <h3 className="tracking-widest pr-8 md:mb-0 mb-5">
                                        Sweetnees
                                    </h3>
                                    <div className="bg-primary-500 w-[400px] md:w-6/12 h-1 relative">
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
                            <div className="flex px-10 md:px-4 sm:px-0 justify-between">
                                <Button name="Order now" className="sm:px-3" />
                                <Button
                                    name="Add to cart"
                                    onClick="handleAddToCart"
                                    className="sm:px-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
