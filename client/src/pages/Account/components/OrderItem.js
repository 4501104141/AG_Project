import { orderApi } from "apis/orderApi";
import Button from "components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "reducers/cartSlice";

export default function OrderItem({ data }) {
    const dispatch = useDispatch();
    const [dataRender, setdataRender] = useState(data);
    const [isShow, setIsShow] = useState(false);
    return (
        <div key={dataRender._id} className="p-5 ">
            <div className="flex justify-between text-lg px-10 sm:px-3 ">
                <div className="space-y-5">
                    <p>Status:</p>
                    <p>Type:</p>
                    <p>Shipping fee:</p>
                    <p>Total:</p>
                </div>
                <div className="space-y-5 text-right">
                    <p>{dataRender.status}</p>
                    <p>{dataRender.method}</p>
                    <p>{dataRender.shippingFee || 0}$</p>
                    <p>{dataRender.totalAfter}$</p>
                </div>
            </div>
            <div className="flex justify-end sm:justify-center pt-5 px-10 space-x-5 sm:text-sm sm:px-0 sm:space-x-3 text-white">
                {
                    (!dataRender.feedback && dataRender.status === "Delivered") && <Button
                        name="Feed Back"
                        link
                        href={`/feedback/${dataRender._id}`}
                    />
                }
                {
                    (dataRender.status === "Processing") && <Button
                        name="Cancel"
                        onclick={async () => {
                            try {
                                await orderApi.cancelOrder(dataRender._id);
                                setdataRender({
                                    ...dataRender,
                                    status: "Cancelled"
                                });
                            } catch (error) {
                                console.log("error: ", error);
                            }
                        }}
                    />
                }

                <Button
                    name="Buy Again"
                    onclick={() => {
                        const { products } = dataRender;
                        console.log("products: ", products);
                        products.forEach(product => {
                            dispatch(add({
                                _id: product._id._id,
                                name: product._id.name,
                                image: product._id.image,
                                option: {
                                    size: product.option.size,
                                    milk: product.option.milk,
                                    sweetness: product.option.sweetness,
                                    amount: product.option.amount,
                                },
                                priceBefore: product.option.size === "S" ? product._id.price : product.option.size === "M" ? product._id.price + 1 : product._id.price + 2,
                                priceAfter: product.option.size === "S" ? product.option.amount * product._id.price : product.option.size === "M" ? product.option.amount * product._id.price + 1 : product.option.amount * product._id.price + 2,
                            }));
                        });
                        alert("Add to cart succesfully!");
                    }}
                />
                <Button
                    onclick={() => setIsShow((pre) => !pre)}
                    name="More Info"
                />
            </div>
            {isShow ? (
                <div className="">
                    <div className="px-10 sm:px-5 pt-5 ">
                        <h1 className="font-bold text-xl pb-5">
                            Shipping Detail
                        </h1>
                        <div className="px-3 sm:px-0 flex text-lg sm:text-base justify-between">
                            <div className="space-y-3">
                                <p className="">
                                    Method of payment:
                                </p>
                                <p className="">Product:</p>
                            </div>
                            <p className="">{dataRender.paymentMethod}</p>
                        </div>
                    </div>

                    {dataRender.products.map((product) => (
                        <div key={product._id._id} className="py-5">
                            <div className="text-white px-10 md:px-5 sm:px-3 tracking-wide">
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={product._id.image}
                                            alt={product._id.name}
                                            className="w-[300px] h-[200px] object-cover pr-10 md:pr-5 sm:pr-0 rounded-2xl"
                                        />
                                        <div className="flex-center sm:text-sm">
                                            <div className="flex flex-col space-y-3 pr-3 md:px-4 text-right">
                                                <span className="">
                                                    Name:
                                                </span>
                                                <span className="">
                                                    Size:
                                                </span>
                                                <span className="">
                                                    Sweetness:
                                                </span>
                                                <span className="">
                                                    Milk:
                                                </span>
                                            </div>
                                            <div className="flex flex-col space-y-3">
                                                <span className="">
                                                    {product._id.name}
                                                </span>
                                                <span className="">
                                                    {product.option.size}
                                                </span>
                                                <span className="">
                                                    {product.option.sweetness}
                                                </span>
                                                <span className="">
                                                    {product.option.milk}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-center-y sm:pt-5 text-xl text-right">
                                        <span className="">
                                            {product.price}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
