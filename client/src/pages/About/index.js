import ImagePerson from "../../assets/images/person.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import { HiBookmark } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const persons = [
    {
        id: 1,
        name: "Nguyễn Nhật Linh",
        img: ImagePerson,
        description: "Developer, Designer",
        fb: "https://www.facebook.com/lays.linh.96/",
        github: "https://github.com/NhatLinh2405",
    },
    {
        id: 2,
        name: "Võ Hoài Nam",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/havaem",
        github: "https://github.com/havaem",
    },
    {
        id: 3,
        name: "Nguyễn Lê Anh Quốc",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp",
        github: "https://github.com/CouqDeWiT",
    },
    {
        id: 4,
        name: "Nguyễn Minh Nhựt",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/nhutngm",
        github: "",
    },
    {
        id: 5,
        name: "Võ Phương thắm",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/phuongtham.vo.5648",
        github: "",
    },
    {
        id: 6,
        name: "Lê Tấn Dương",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/profile.php?id=100013987743598",
        github: "",
    },
    {
        id: 7,
        name: "Đinh Nhật Minh",
        img: ImagePerson,
        description: "Developer, Designer.",
        fb: "https://www.facebook.com/profile.php?id=100039291463486",
        github: "https://github.com/4501104141",
    },
];
export default function About() {
    return (
        <section>
            <div className="container bg-quaternary-500">
                <div className="min-h-[720px] bg-about-bg bg-cover bg-center bg-fixed bg-no-repeat flex-center gap-y-4">
                    <div className="mx-auto grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-10 justify-center md:pt-28 px-[9%] py-10">
                        {persons.map((person) => {
                            return (
                                <div
                                    className="relative max-w-[320px] mx-auto px-20 md:px-16 py-10 rounded-3xl even:bg-secondary-500 odd:bg-primary-500"
                                    key={person.id}
                                >
                                    <HiBookmark className="text-white text-6xl absolute -top-2 left-8" />
                                    <div className="py-5">
                                        <img
                                            src={person.img}
                                            className="rounded-full h-40 w-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" text-center pb-10 text-white font-medium tracking-wide">
                                        <h3 className="py-2">{person.name}</h3>
                                        <p className="py-2">
                                            {person.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-between mb-10 px-5">
                                        <a href={person.fb} target="_blank">
                                            <BsFacebook className="text-white text-2xl" />
                                        </a>
                                        <a href={person.github} target="_blank">
                                            <AiFillGithub className="text-white text-2xl" />
                                        </a>
                                    </div>
                                    <Button
                                        name="Hire me"
                                        className=" absolute right-5 bottom-5"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
