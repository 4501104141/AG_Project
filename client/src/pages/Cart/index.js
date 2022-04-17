import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import { setItems } from "reducers/cartSlice";
export default function Cart() {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart);
    const [cart, setCart] = useState({});
    const handleChangeItem = (item, index) => {
        let newCart = {
            ...cart, items: cart.items.map((cartItem, i) => {
                if (index === i) {
                    return item;
                }
                return cartItem;
            }
            )
        };
        setCart(newCart);
        dispatch(setItems(newCart));
    };
    const handleRemoveItem = (index) => {
        let newCart = {
            ...cart, items: cart.items.filter((cartItem, i) => {
                return index !== i;
            }
            )
        };
        dispatch(setItems(newCart));
        setCart({ ...newCart });
    };
    useEffect(() => {
        setCart(cartState);
    }, [cartState]);
    return (
        <section className="container bg-quaternary-500 px-2 pt-10 md:pt-32 min-h-[700px]">
            <div className="bg-secondary-500  rounded-xl ">
                <div className="text-white divide-y-4  divide-black">
                    <div className="p-5">
                        <div className="flex-center-y sm:text-sm sm:px-0 md:px-5 px-10 font-bold tracking-wide justify-between">
                            <p className="">Products</p>
                            <div className="flex space-x-20 md:space-x-5">
                                <p>Unit Price</p>
                                <p>Amount</p>
                                <p>Total Price</p>
                                <p>Action</p>
                            </div>
                        </div>
                    </div>

                    {cart?.items?.map((item, index) => (
                        <CartItem key={item.name + item.option.size + item.option.sweetness + item.option.milk + index} index={index} item={item} onChange={handleChangeItem} onDelete={handleRemoveItem} />
                    ))}
                </div>
                <div className="flex px-10 py-10 float-right sm:space-x-1 space-x-10 text-white">
                    <div className="px-5 flex-center-y rounded-md bg-primary-500 ">
                        <span className="pr-3">Total:</span>
                        {cart.totalPrice} USD
                    </div>
                    <Button
                        name="Check out"
                        className="py-3"
                        link
                        href="/cart/payment"
                    />
                </div>
            </div>
        </section>
    );
};
