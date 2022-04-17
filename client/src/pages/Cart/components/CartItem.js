import Button from "components/Button";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CartItem({
    item,
    onChange,
    index, onDelete
}) {
    const [data, setData] = useState(item);
    const handleChangeAmount = (type) => {
        switch (type) {
            case 1:
                setData({ ...data, option: { ...data.option, amount: data.option.amount + 1 }, priceAfter: (data.option.amount + 1) * data.priceBefore });
                break;
            case 0:
                data.option.amount > 1 && setData({ ...data, option: { ...data.option, amount: data.option.amount - 1 }, priceAfter: (data.option.amount - 1) * data.priceBefore });
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        onChange(data, index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return (
        <div
            key={data._id}
            className="flex-center-y sm:flex-col text-white p-10 md:p-5 sm:p-2 justify-between"
        >
            <div className="flex md:flex-col">
                <div className="flex">
                    <img
                        src={data.image}
                        alt="product"
                        className="w-36 h-48 object-cover rounded-xl"
                    />
                </div>
                <div className="flex-center lg:px-0 px-10 md:px-0 md:py-5">
                    <div className="flex flex-col space-y-2 md:px-4 text-right pr-2">
                        <span>Name:</span>
                        <span>Size:</span>
                        <span>Sweetness:</span>
                        <span>Milk:</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>{data.name}</span>
                        <span>{data.option.size}</span>
                        <span>{data.option.sweetness} %</span>
                        <span>{data.option.milk} %</span>
                    </div>
                </div>
            </div>
            <div className="flex-center-y md:px-0 gap-x-20 md:gap-x-1">
                <h1 className="text-white">{data.priceBefore} $</h1>
                <div className="flex-center-y px-3 space-x-5">
                    <AiOutlineMinus
                        className="text-white cursor-pointer"
                        onClick={() => handleChangeAmount(0)}
                    />
                    <h1 className="text-white">{data.option.amount}</h1>
                    <AiOutlinePlus
                        className="text-white cursor-pointer"
                        onClick={() => handleChangeAmount(1)}
                    />
                </div>
                <h1 className="text-white pr-5 md:px-3 md:pr-10 sm:px-0">
                    {data.priceAfter} $
                </h1>
                <div>
                    <Button
                        className="text-white"
                        Icon={AiOutlineClose}
                        onclick={() => onDelete(index)}
                    />
                </div>
            </div>
        </div>
    );
}
