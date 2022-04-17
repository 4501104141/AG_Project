import { orderApi } from "apis/orderApi";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

export default function Feedback() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState("");
    return (
        <section className="container px-2 md:pt-32 min-h-[700px] bg-quaternary-500">
            <div className="py-10 md:pt-0">
                <div className="text-white tracking-wide ">
                    <div className="bg-primary-500 p-5 rounded-xl">
                        <div className="p-5">
                            <h1 className="font-bold text-2xl">Feedback</h1>
                            <div className="mt-4">
                                <div className="px-20 sm:px-0">
                                    <textarea
                                        placeholder="Your message"
                                        className="h-52 w-full p-6 border-none outline-none bg-secondary-500 rounded-xl"
                                        onChange={e => setFeedback(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex-center py-5 space-x-10">
                            <Button
                                name="Cancel"
                                className="bg-secondary-500"
                                link
                                href="/"
                            />
                            <Button
                                name="Submit"
                                className="bg-secondary-500"
                                onclick={async () => {
                                    try {
                                        await orderApi.feedbackOrder(id, { feedback });
                                        alert("Thank you");
                                        navigate("/");
                                    } catch (error) {
                                        console.log(error);
                                    }

                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
