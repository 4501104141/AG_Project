import React, { useEffect } from "react";
import { useState } from "react";
import products1 from "../../../assets/images/cappacino.png";
import Button from "../../../components/Button";
import { useLocation } from "react-router-dom";
import { compareLocation } from "utils";
import { orderApi } from "apis/orderApi";
import OrderItem from "./OrderItem";
export default function Purchase() {
    const [data, setData] = useState([]);
    const Product = [
        {
            id: 1,
            img: products1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: "20%",
            Milk: "20%",
            Price: 6,
        },
        {
            id: 2,
            img: products1,
            Name: "Coffee Big",
            Size: "M",
            Sweetness: "20%",
            Milk: "20%",
            Price: 8,
        },
    ];
    let Total = Product.reduce((Price, i) => {
        return (Price += i.Price);
    }, 0);
    useEffect(() => {
        async function fetchData() {
            const response = await orderApi.getOrder();
            console.log("response: ", response);
            setData(response.data.order);
        }
        fetchData();
    }, []);
    return (
        <div className="bg-secondary-500 text-white rounded-xl divide-y-4 divide-black">
            <div className="flex-center-y justify-between px-10 sm:px-5 pt-8 pb-10">
                <p className="text-3xl tracking-wider font-black italic">
                    Purchase
                </p>
            </div>
            {data.map((i) => {
                return (
                    <OrderItem key={i._id} data={i} />
                );
            })}
        </div>
    );
}
