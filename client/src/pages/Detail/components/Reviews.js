import reviewPerson from "../../../assets/images/person.png";
import { useEffect, useLayoutEffect, useState } from "react";
import Button from "components/Button";
export default function Review() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Iron Man",
            img: reviewPerson,
            description:
                "Tôi chưa bao giờ uống cốc cà phê nào ngon như vậy, tuyệt vời",
        },
        {
            id: 2,
            name: "Moon Knight",
            img: reviewPerson,
            description:
                "Tôi chưa bao giờ uống cốc cà phê nào ngon như vậy, tuyệt vời",
        },
    ]);

    // theo khuyến cáo thì nên lấy dữ liệu của user đưa vào name và ảnh
    const [name, setName] = useState("");
    // const [image, setImage] = useState("");

    const [review, setReview] = useState("");
    const [description, setDescription] = useState("");
    const handleAdd = () => {
        if (!name || !description) {
            alert("Nhap du thong tin di!");
            return;
        }
        setName("");
        setDescription("");
        const newReview = {
            id: reviews.length + 1,
            name,
            img: reviewPerson,
            description,
        };
        setReviews([...reviews, newReview]);
    };
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-7 pt-5">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-secondary-500 rounded-2xl relative lg:h-full"
                    >
                        <div className="bg-no-repeat bg-center p-4">
                            <div className="flex items-center">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-1/12 lg:w-2/12 object-cover bg-center rounded-full"
                                />
                                <h1 className="my-4 px-5 font-bold text-white lg:text-2xl text-2xl ">
                                    {review.name}
                                </h1>
                            </div>
                            <p className="font-light text-sm line-clamp-2 text-[#FFFADA]">
                                {review.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <div className="py-5">
                    <h1 className="text-2xl"> WRITE YOUR REVIEW</h1>
                    <form action="">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Tôi tên là"
                            className="bg-quaternary-500 w-full pl-5 pr-32 py-4 focus:outline-black focus:rounded-xl border-0"
                        />
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Something about this product"
                            className="bg-quaternary-500 w-full pl-5 pr-32 py-4 focus:outline-black focus:rounded-xl border-0"
                        />
                    </form>
                    <Button
                        onclick={handleAdd}
                        name="Submit"
                        className="mt-5 float-right"
                    />
                </div>
            </div>
        </div>
    );
}
