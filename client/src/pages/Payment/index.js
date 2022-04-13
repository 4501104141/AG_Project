import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import product1 from "../../assets/images/cappacino.png";
import Button from "../../components/Button";
import PaymentMethod from "../Payment/components/PaymentMethod";
import ShipMethod from "./components/ShipMethod";
export default function Payment() {
    const orders = [
        {
            id: 1,
            img: product1,
            Name: "Coffee Big",
            Size: "M",
            Amount: 1,
            Sweetness: "20%",
            Milk: "20%",
            Price: 6.4,
        },
        {
            id: 2,
            img: product1,
            Name: "Coffee Big",
            Size: "M",
            Amount: 1,
            Sweetness: "20%",
            Milk: "20%",
            Price: 6.4,
        },
    ];
    let subPrice = orders.reduce((Price, order) => {
        return (Price += order.Price);
    }, 0);
    let totalPrice = subPrice + 1 + 1;
    return (
        <section className="container px-2 bg-quaternary-500">
            <div className="min-h-[720px] gap-y-4">
                <div className="py-14">
                    <div className="flex-center-y text-2xl pl-48 sm:px-6 sm:text-xl md:pt-10 lg:pl-11 pb-4 lg:pb-0 tracking-wide">
                        <Link to="/cart" className="font-bold ">
                            Cart
                        </Link>
                        <BsArrowRight className="text-black text-5xl mx-5" />
                        <p>Checkout</p>
                    </div>
                    <div className="px-48 min-h-screen tracking-wide font-bold">
                        <div className="bg-primary-500 grid relative grid-cols-12 rounded-xl">
                            <div className="col-span-6 p-5 text-white">
                                <ShipMethod />
                                <PaymentMethod />
                            </div>
                            <div className="col-span-6 p-5 relative">
                                <div className="absolute bg-black w-1 inset-y-0 left-0"></div>
                                <div className="">
                                    <h1 className="text-white text-xl pb-5">
                                        Summary
                                    </h1>
                                    {orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="flex items-center justify-between px-10 py-5"
                                        >
                                            <div className="flex items-center">
                                                <img
                                                    src={order.img}
                                                    alt="product"
                                                    className="w-5/12 rounded-xl mr-4"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-white text-lg">
                                                        {order.Name}
                                                    </p>
                                                    <p className="text-white text-sm">
                                                        Size:
                                                        <span className="text-white pl-8 text-sm font-thin">
                                                            {order.Size}
                                                        </span>
                                                    </p>
                                                    <p className="text-white text-sm">
                                                        Amount:
                                                        <span className="text-white pl-2.5 text-sm font-thin">
                                                            {order.Amount}
                                                        </span>
                                                    </p>
                                                    <div className="flex text-white text-sm">
                                                        Note:
                                                        <div className="flex text-white text-sm font-thin">
                                                            <ul className="pl-2">
                                                                <li className="flex space-x-1">
                                                                    <p>
                                                                        {
                                                                            order.Sweetness
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        Sweetness
                                                                    </p>
                                                                </li>
                                                                <li className="flex space-x-1">
                                                                    <p>
                                                                        {
                                                                            order.Milk
                                                                        }
                                                                    </p>
                                                                    <p> Milk</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-white text-lg">
                                                {order.Price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 ">
                            <div className="bg-primary-500 text-center">
                                <div className=" justify-around space-x-10 flex rounded-xl">
                                    <div className="">
                                        <div className="pt-5">
                                            <h1 className="pl-14 text-white text-2xl tracking-widest">
                                                Coupon
                                            </h1>
                                        </div>
                                        <div className="flex px-9 py-5 tracking-widest text-white">
                                            <div className="text-white pr-5">
                                                <input
                                                    type="text"
                                                    placeholder="Coupon Code"
                                                    maxLength={15}
                                                    className="text-base bg-primary-500 rounded-md px-5 py-3"
                                                />
                                            </div>
                                            <Button
                                                name="Apply"
                                                className="px-8"
                                            />
                                        </div>
                                    </div>
                                    <div className="py-5 tracking-wider text-white">
                                        <div className="flex">
                                            <div className="flex flex-col text-right sm:text-sm sm:px-5 px-10">
                                                <p className="py-2">
                                                    Sub Total:
                                                </p>
                                                <p className="py-2">
                                                    Shipping:
                                                </p>
                                                <p className="py-2">
                                                    Discount:
                                                </p>
                                                <p className="py-2">Total:</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="py-2">
                                                    {subPrice} $
                                                </p>
                                                <p className="py-2">1$</p>
                                                <p className="py-2">
                                                    1$
                                                    {/* {coupon} */}
                                                </p>
                                                <p className="py-2">
                                                    {totalPrice} $
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-5">
                                    <Button
                                        className="bg-secondary-500"
                                        name="Purchase"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
