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
                        <div className="absolute inset-0 bg-tertiary-500 opacity-50 -z-10 lg:mx-2 rounded-md"></div>
                        <div className="flex-center-y justify-between w-full px-4 py-6">
                            <Filter />
                            <Button
                                className="px-8 h-full hover:color-white sm:hidden "
                                name="Hot"
                            />
                            <Button
                                className="px-8 h-full sm:hidden left-48 hover:color-white"
                                name="New"
                            />
                            <Price />
                            <input
                                type="text"
                                placeholder="Find"
                                maxLength={20}
                                className="outline-none bg-primary-500 md:w-48 sm:w-full sm:px-4 px-4 h-full rounded-md text-white font-bold placeholder:font-normal"
                            />
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
