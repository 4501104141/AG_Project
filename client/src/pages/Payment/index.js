import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../components/Button";
import ShipMethod from "./components/ShipMethod";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { PayPalButton } from "react-paypal-button-v2";
import { couponApi } from "apis/couponApi";
import { resetCart, setCouponStore, setShipping } from "reducers/cartSlice";
import { orderApi } from "apis/orderApi";
export default function Payment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const [plan, setPlan] = useState("Cash on Delivery");
    const [coupon, setCoupon] = useState(cart.coupon.code);
    const [couponData, setCouponData] = useState(null);
    const [discount, setDiscount] = useState(cart.coupon.discount);
    const [shippingMethod, setShippingMethod] = useState("Pick up");
    const [timePickup, setTimePickup] = useState(null);
    const [address, setAddress] = useState(user.data.addresses[0]);
    const [note, setNote] = useState("");
    // console.log(cart);
    const handleSubmitCoupon = async () => {
        if (coupon === "") {
            alert("Please enter a coupon code");
            return;
        }
        try {
            const response = await (await couponApi.getCoupon(coupon)).data;
            if (response.type === "Percentage") {
                setDiscount(cart.totalPrice * response.value / 100);
                dispatch(setCouponStore({ _id: response._id, code: response.code, discount: cart.totalPrice * response.value / 100 }));
            }
            else if (response.type === "Fixed") {
                dispatch(setCouponStore({ _id: response._id, code: response.code, discount: response.value }));
                setDiscount(response.value);
            }

            setCouponData(response.value);
        } catch (error) {
            dispatch(setCouponStore({
                _id: "",
                code: "",
                discount: 0,
            }));
            alert("Coupon not found");
        }
    };
    useEffect(() => {
        if (shippingMethod === "Pick up") {
            dispatch(setShipping(false));
        }
        else {
            dispatch(setShipping(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shippingMethod]);
    const handleSubmit = async () => {
        if (address === null) {
            alert("Please select an address");
            return;
        }
        if (timePickup === null && shippingMethod === "Pick up") {
            alert("Please select a time");
            return;
        }
        if (timePickup && isInThePast(new Date(timePickup)) && shippingMethod === "Pick up") {
            alert("Please select a time in the future");
            return;
        }
        try {
            let dataSend = {
                products: cart.items.map(item => ({
                    _id: item._id,
                    option: item.option,
                    price: item.priceAfter
                })),
                time: timePickup || Date.now().toString(),
                address: shippingMethod === "Pick up" ? null : address,
                method: shippingMethod,
                paymentMethod: plan,
                totalBefore: cart.totalPrice,
                totalAfter: cart.totalPriceAfter,
                shippingFee: cart.shippingFee,
                note,
            };
            if (cart.coupon._id) {
                dataSend.coupon = cart.coupon._id;
                dataSend.discount = cart.coupon.discount;
            };
            const response = await orderApi.createOrder(dataSend);
            dispatch(resetCart());
            navigate("/account-settings/purchase");
        } catch (error) {
            console.log("error: ", error);
        }
    };
    function isInThePast(date) {
        const today = new Date();
        // today.setHours(0, 0, 0, 0);
        return date < today;
    }
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
                                <ShipMethod price={cart.totalPrice} require={5} value={shippingMethod} onChange={setShippingMethod} />
                                {
                                    shippingMethod === "Pick up" ? <div className="flex-center"><input className="text-black mx-auto" type="datetime-local" onChange={(e) => setTimePickup(e.target.value)} /></div> : (
                                        user?.data.addresses.length > 0 ? (
                                            <>
                                                <div className="mt-4">
                                                    <h1 className="text-xl">Address</h1>
                                                    <select className="text-black" name="add" id="add" onChange={(e) => setAddress(JSON.parse(e.target.value))}>
                                                        {
                                                            user?.data.addresses.map(item => {
                                                                return (
                                                                    <option key={item._id} value={JSON.stringify(item)}>{item.address} - {item.phone}</option>
                                                                );
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </>) : (
                                            <div className="flex-center">
                                                <Link to="/account-settings/address" className="text-white">
                                                    <p className="text-xl">You don't have any address. Please add one.</p>
                                                </Link>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <div className="col-span-6 p-5 sm:order-first relative">
                                <div className="absolute bg-black w-1 inset-y-0 left-0 sm:hidden"></div>
                                <div className="max-h-96 overflow-y-auto">
                                    <h1 className=" text-xl pb-5">Summary</h1>
                                    {cart?.items?.map((item, index) => (
                                        <div
                                            key={item._id + index}
                                            className="flex items-center justify-between md:px-3 px-10 py-5"
                                        >
                                            <div className="flex-center">
                                                <img
                                                    src={item.image}
                                                    alt="product"
                                                    className="w-[200px] h-[200px] object-cover rounded-xl mr-6"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-lg">
                                                        {item.Name}
                                                    </p>
                                                    <p className="">
                                                        Size:
                                                        <span className=" pl-8 font-thin">
                                                            {item.option.size}
                                                        </span>
                                                    </p>
                                                    <p className=" ">
                                                        Amount:
                                                        <span className=" pl-2.5 font-thin">
                                                            {item.option.amount}
                                                        </span>
                                                    </p>
                                                    <div className="flex">
                                                        Note:
                                                        <div className="flex font-thin">
                                                            <ul className="pl-2">
                                                                <li className="flex space-x-1">
                                                                    <p>
                                                                        {
                                                                            item.option.sweetness
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        Sweetness
                                                                    </p>
                                                                </li>
                                                                <li className="flex space-x-1">
                                                                    <p>
                                                                        {
                                                                            item.option.milk
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
                                                {item.priceAfter} $
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
                                                    value={coupon}
                                                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                                                />
                                            </div>
                                            <Button
                                                name="Apply"
                                                className="px-8 bg-secondary-500"
                                                onclick={handleSubmitCoupon}
                                            />
                                        </div>
                                    </div>
                                    <div className="py-5 tracking-wider">
                                        <div className="flex">
                                            <div className="flex flex-col text-right space-y-2 md:px-5 px-10">
                                                <p className="">Sub Total:</p>
                                                {
                                                    cart.shippingFee !== 0 &&
                                                    <p className="">Shipping:</p>
                                                }

                                                {discount !== 0 && <p className="">Discount:</p>}
                                                <p className="">Total:</p>
                                            </div>
                                            <div className="flex flex-col  space-y-2">
                                                <p className="">{cart.totalPrice} $</p>
                                                {
                                                    cart.shippingFee !== 0 &&
                                                    <p className="">{cart.shippingFee}$</p>
                                                }
                                                {
                                                    discount !== 0 &&
                                                    <p className="">
                                                        {discount}$
                                                    </p>
                                                }
                                                <p className="">
                                                    {cart.totalPriceAfter} $
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-primary-500 text-center">
                            <div>
                                <h1 className="text-xl">Note</h1>
                                <textarea defaultValue={note} onChange={(e) => setNote(e.target.value)} className="text-black p-4" maxLength={200} name="" id="" cols="30" rows="3"></textarea>
                            </div>

                            <div className="py-10">
                                <h1 className="text-xl">Payment</h1>
                                <RadioGroup
                                    value={plan}
                                    onChange={setPlan}
                                    className="px-5 sm:mb-4 py-8 md:p-2 md:pt-5 flex-center-y text-center px-18 justify-around"
                                >
                                    <RadioGroup.Option value="Cash on Delivery">
                                        {({ checked }) => (
                                            <button
                                                className={
                                                    checked
                                                        ? "bg-quaternary-500 py-2 px-5 font-bold outline-none border-none rounded-md block text-black"
                                                        : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                                }
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Cash
                                            </button>
                                        )}
                                    </RadioGroup.Option>
                                    <RadioGroup.Option value="Paypal">
                                        {({ checked }) => (
                                            <button
                                                className={
                                                    checked
                                                        ? "bg-quaternary-500 py-2 px-5 font-bold outline-none border-none rounded-md block text-black"
                                                        : "bg-secondary-500 py-2 px-5 shadow-md font-bold transition-all rounded-md hover:bg-quaternary-500 hover:text-black"
                                                }
                                                onClick={() => setIsOpen(true)}
                                            >
                                                Paypal
                                            </button>
                                        )}
                                    </RadioGroup.Option>
                                </RadioGroup>
                            </div>
                            {
                                isOpen && (
                                    <div>
                                        <PayPalButton
                                            options={{
                                                clientId: process.env.REACT_APP_PRODUCTION_CLIENT_ID,
                                            }}
                                            shippingPreference="NO_SHIPPING"
                                            amount={+cart.totalPriceAfter}
                                            onSuccess={() => {
                                                alert("Transaction completed");
                                                handleSubmit();
                                            }}
                                        />
                                    </div>
                                )
                            }
                            {
                                !isOpen && (
                                    <Button
                                        className="bg-secondary-500 mb-5"
                                        name="Purchase"
                                        onclick={handleSubmit}
                                    />
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
