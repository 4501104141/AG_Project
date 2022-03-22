import { Link } from "react-router-dom";
import Products from "components/Products";
import Button from "components/Button";
import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useState, useCallback } from "react";

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
                                <Menu>
                                    <Menu.Button as="div">
                                        <Button
                                            className="w-64 lg:w-48 md:w-32 sm:w-24 text-left h-14 hover:text-black"
                                            name="Filter"
                                        />
                                    </Menu.Button>
                                    <Menu.Items className="flex flex-col absolute w-64 sm:w-36 top-[calc(100%+40px)] right-0 lg:left-0 md:left-0 bg-secondary-500 rounded-md shadow-popup font-bold overflow-hidden">
                                        <Menu.Item>
                                            <button className="text-left font-bold w-full px-3 py-3 hover:bg-primary-500 text-white">
                                                Hot
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button className="text-left font-bold w-full px-3 py-3 hover:bg-primary-500 text-white">
                                                New
                                            </button>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                            <Button
                                className="w-32 h-14 md:w-24 hover:color-white sm:hidden "
                                name="Hot"
                            />
                            <Button
                                className="w-32 h-14 md:w-24 absolute lg:static sm:hidden left-48 hover:color-white"
                                name="New"
                            />
                            <div className="relative flex-row cursor-pointer">
                                <Menu>
                                    <Menu.Button as="div">
                                        <Button
                                            className="w-64 lg:w-48 md:w-32 sm:w-28 sm:mx-2 text-left h-14 hover:text-black"
                                            name="Price"
                                            Icon={BiChevronDown}
                                        />
                                    </Menu.Button>
                                    <Menu.Items className="flex flex-col absolute w-64 sm:w-44 top-[calc(100%+16px)] right-0 lg:left-0 md:left-0 bg-secondary-500 rounded-md shadow-popup font-bold overflow-hidden">
                                        <Menu.Item>
                                            <a href="/account-settings">
                                                <button className="text-left font-bold w-full sm:px-1 px-3 py-3 hover:bg-primary-500 text-white">
                                                    Price: low to high
                                                </button>
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a href="/account-settings">
                                                <button className="text-left font-bold w-full px-3 py-3 hover:bg-primary-500 text-white">
                                                    Price: high to low
                                                </button>
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                            <div className="text-white ">
                                <input
                                    type="text"
                                    placeholder="Find"
                                    maxLength={15}
                                    className="relative text-base bg-primary-500 md:w-48 sm:w-full sm:px-5 px-9 py-3 rounded-full"
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
