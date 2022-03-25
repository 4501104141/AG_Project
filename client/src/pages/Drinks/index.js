import Products from "components/Products";
import Button from "components/Button";
import { useState, useCallback } from "react";
import Price from "./components/Price";
import Filter from "./components/Filter";
export default function Drinks() {
    return (
        <section className="text-center">
            <div className="container bg-quaternary-500">
                <div
                    className="min-h-[720px] bg-drinks-pattern bg-cover bg-center bg-fixed 
                    bg-no-repeat flex-center flex-col gap-y-4 relative"
                >
                    <div className="flex w-full max-w-[1250px] lg:max-w-[1000px] md:max-w-[750px] h-24 bottom-[-50px] z-10 absolute">
                        <div className="absolute inset-0 bg-secondary-500 opacity-60 -z-10 lg:mx-2 rounded-full"></div>
                        <div className="flex-center-y mx-3 lg:mx-2 justify-between absolute inset-y-2/4 left-5 right-5">
                            <div className="hidden sm:block">
                                <Filter />
                            </div>
                            <Button
                                className="w-32 h-14 md:w-24 hover:color-white sm:hidden "
                                name="Hot"
                            />
                            <Button
                                className="w-32 h-14 md:w-24 absolute lg:static sm:hidden left-48 hover:color-white"
                                name="New"
                            />
                            <Price />
                            <div className="text-white ">
                                <input
                                    type="text"
                                    placeholder="Find"
                                    maxLength={20}
                                    className="relative outline-none text-base bg-primary-500 md:w-48 sm:w-full sm:px-5 px-9 py-3 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <Products />
                </div>
            </div>
        </section>
    );
}
