import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import product1 from "../../assets/images/cappacino.png";
import Button from "../../components/Button";
import PaymentMethod from "../Payment/components/PaymentMethod";
import ShipMethod from "./components/ShipMethod";
import { useLocation } from "react-router-dom";
import { compareLocation } from "utils";
export default function Payment() {
    const location = useLocation();
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
                    <div className="flex-center-y text-2xl sm:px-6 sm:text-xl py-6">
                        <Link to="/cart" className="font-bold ">
                            Cart
                        </Link>
                        <BsArrowRight className="text-black text-5xl mx-5" />
                        <p>Checkout</p>
                    </div>
                    <div className="min-h-screen text-white tracking-wide font-bold">
                        <div className="bg-primary-500 grid sm:flex sm:flex-col grid-cols-12 rounded-xl">
                            <div className="col-span-6 p-5 ">
                                <ShipMethod />
                                <PaymentMethod />
                            </div>
                            <div className="col-span-6 p-5 sm:order-first relative">
                                <div className="absolute bg-black w-1 inset-y-0 left-0 sm:hidden"></div>
                                <div className="">
                                    <h1 className=" text-xl pb-5">Summary</h1>
                                    {orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="flex items-center justify-between md:px-3 px-10 py-5"
                                        >
                                            <div className="flex-center">
                                                <img
                                                    src={order.img}
                                                    alt="product"
                                                    className="w-6/12 rounded-xl mr-6"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-lg">
                                                        {order.Name}
                                                    </p>
                                                    <p className="">
                                                        Size:
                                                        <span className=" pl-8 font-thin">
                                                            {order.Size}
                                                        </span>
                                                    </p>
                                                    <p className=" ">
                                                        Amount:
                                                        <span className=" pl-2.5 font-thin">
                                                            {order.Amount}
                                                        </span>
                                                    </p>
                                                    <div className="flex">
                                                        Note:
                                                        <div className="flex font-thin">
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
                                            <p className=" text-lg">
                                                {order.Price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-10">
                            <div className="bg-primary-500 text-center">
                                <div className="flex sm:flex-col sm:items-center py-5 justify-around px-5 rounded-xl">
                                    <div className="pt-5 tracking-widest">
                                        <h1 className="pl-14 text-2xl">
                                            Coupon
                                        </h1>
                                        <div className="flex px-9 py-5  ">
                                            <div className=" pr-5">
                                                <input
                                                    type="text"
                                                    placeholder="Coupon Code"
                                                    maxLength={15}
                                                    className="bg-primary-500 rounded-md px-5 py-3"
                                                />
                                            </div>
                                            <Button
                                                name="Apply"
                                                className="px-8 bg-secondary-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="py-5 tracking-wider">
                                        <div className="flex">
                                            <div className="flex flex-col text-right space-y-2 md:px-5 px-10">
                                                <p className="">Sub Total:</p>
                                                <p className="">Shipping:</p>
                                                <p className="">Discount:</p>
                                                <p className="">Total:</p>
                                            </div>
                                            <div className="flex flex-col  space-y-2">
                                                <p className="">{subPrice} $</p>
                                                <p className="">1$</p>
                                                <p className="">
                                                    1$
                                                    {/* {coupon} */}
                                                </p>
                                                <p className="">
                                                    {totalPrice} $
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className="bg-secondary-500"
                                    name="Purchase"
                                    link
                                    href="/feedback"
                                    active={compareLocation(
                                        location.pathname,
                                        "/feedback"
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
