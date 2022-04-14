import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { productApi } from "apis/productApi";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchAllProducts() {
            const response = await productApi.getProducts();
            setProducts(response.data);
        }
        fetchAllProducts();
        return () => {
            setProducts([]);
        };
    }, []);
    return (
        <div className="grid grid-cols-4 mx-auto lg:px-5 md:px-5 pb-10 max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
            {products.map((product) => (
                <Link key={product._id} to={`/drinks/${product._id}`}>
                    <div className="my-0 bg-secondary-500 rounded-2xl relative h-[440px] lg:h-full">
                        <div className=" h-full bg-no-repeat bg-center w-full p-4 flex flex-col">
                            <div className="flex-center flex-col">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[150px] lg:h-full md:h-full object-cover rounded-md"
                                />
                            </div>
                            <div className="text-left text-white flex flex-col h-full">
                                <h1 className="my-2 font-bold text-3xl ">
                                    {product.name}
                                </h1>
                                <p className="font-light line-clamp-5 text-[#FFFADA]">
                                    {product.description}
                                </p>
                                <h1 className="mt-auto text-right font-bold text-3xl">
                                    {product.price}$
                                </h1>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
