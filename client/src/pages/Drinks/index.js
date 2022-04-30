import Button from "components/Button";
import { useState, useEffect } from "react";
import Price from "./components/Price";
import Filter from "./components/Filter";
import { productApi } from "apis/productApi";
import { Link } from "react-router-dom";
export default function Drinks() {
    const [products, setProducts] = useState([]);
    const [productsRender, setProductsRender] = useState([]);
    const [sort, setSort] = useState(0);
    const [search,setSearch]= useState("");
    const handlePriceSort = (value) => {
        setSort({
            ...sort, secondSort: value,
        });
    };
    useEffect(() => {
        let temp = [...products];
        // products[0]&& console.log(products[0].name.toLowerCase().has("a"))
        if(search){
            temp = temp.filter(item=> item.name.toLowerCase().includes(search));
        }
        if (sort.firstSort === 1) {
            temp = temp.sort((a, b) => b.purchases - a.purchases);
        }
        if (sort.firstSort === 2) {
            temp = temp.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
        }
        if (sort.secondSort === 3) {
            temp = temp.sort((a, b) => a.price - b.price);
        }
        if (sort.secondSort === 4) {
            temp = temp.sort((a, b) => b.price - a.price);
        }
        setProductsRender(temp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort,search]);
    useEffect(() => {
        async function fetchAllProducts() {
            const response = await productApi.getProducts();
            setProducts(response.data);
            setProductsRender(response.data);
        }
        fetchAllProducts();
        return () => {
            setProducts([]);
        };
    }, []);
    return (
        <section className="text-center">
            <div className="container bg-quaternary-500">
                <div
                    className="min-h-[720px] bg-drinks-pattern bg-cover bg-center bg-fixed 
                    bg-no-repeat flex-center flex-col gap-y-4 relative"
                >
                    <div className="flex w-full max-w-[1250px] lg:max-w-[1000px] md:max-w-[750px] h-24 bottom-[-50px] z-10 absolute">
                        <div className="absolute inset-0 bg-tertiary-500 opacity-50 -z-10 lg:mx-2 rounded-md"></div>
                        <div className="flex-center-y justify-between w-full px-4 py-6">
                            <Filter />
                            <Button
                                className="px-8 h-full hover:color-white sm:hidden "
                                name="Hot"
                                active={sort.firstSort === 1}
                                onclick={() => {
                                    setSort({
                                        ...sort, firstSort: 1,
                                    });
                                }
                                }
                            />
                            <Button
                                className="px-8 h-full sm:hidden left-48 hover:color-white"
                                name="New"
                                active={sort.firstSort === 2}
                                onclick={() => {
                                    setSort({
                                        ...sort, firstSort: 2,
                                    });
                                }
                                }
                            />
                            <Price onChange={handlePriceSort} />
                            <input
                                type="text"
                                placeholder="Find"
                                maxLength={20}
                                onChange={(e)=>setSearch(e.target.value)}
                                value={search}
                                className="outline-none bg-primary-500 md:w-48 sm:w-full sm:px-4 px-4 h-full rounded-md text-white font-bold placeholder:font-normal"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="grid grid-cols-4 mx-auto lg:px-5 md:px-5 pb-10 max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
                        {productsRender.map((product) => (
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
                </div>
            </div>
        </section>
    );
}