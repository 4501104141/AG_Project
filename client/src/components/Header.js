import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Menu, Popover, Transition } from "@headlessui/react";
import GoogleLogin from "react-google-login";
import { AiOutlineMenu } from "react-icons/ai";
import { Fragment, useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function Header() {
    const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
    const responseGoogle = (response) => {
        console.log(response);
        alert("Hi! " + response.profileObj.givenName);
    };
    const handleLogOut = () => {
        alert("Log out");
    };
    return (
        <header>
            <div className="bg-primary-500 container px-2 text-white flex-center-y justify-between min-h-[72px] md:fixed md:top-0 md:z-50">
                <Link to="/" className="flex-center font-bold italic text-2xl ">
                    Soffee
                </Link>
                <ul className="flex-center-y gap-x-5 lg:hidden">
                    <li>
                        <NavLinkStyle to="/">Home</NavLinkStyle>
                    </li>
                    <li>
                        <NavLinkStyle to="/drinks">Drinks</NavLinkStyle>
                    </li>
                    <li>
                        <NavLinkStyle to="/about-us">About</NavLinkStyle>
                    </li>
                    <li>
                        <NavLinkStyle to="/about-us">Help</NavLinkStyle>
                    </li>
                </ul>
                <div className="flex gap-x-4 items-stretch h-full">
                    <Menu as="div" className="relative">
                        <Menu.Button as="div">
                            <button className="transition-all py-2 flex-center-y gap-x-2 px-4 rounded-md bg-secondary-500 font-bold shadow-md hover:bg-secondary-400">
                                <FaUserAlt />
                                <span>Võ Hoài Nam</span>
                            </button>
                        </Menu.Button>
                        <Menu.Items className="absolute top-[calc(100%+16px)] z-10 right-0 bg-secondary-500 rounded-md shadow-popup flex flex-col min-w-[200px] font-bold overflow-hidden">
                            <Menu.Item>
                                <a
                                    className={`text-left font-bold px-4 py-2 hover:bg-primary-500`}
                                    href="/account-settings"
                                >
                                    Thông tin tài khoản
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <GoogleLogin
                                    clientId={
                                        process.env.REACT_APP_GOOGLE_CLIENT_ID
                                    }
                                    render={(renderProps) => (
                                        <button
                                            className={`text-left font-bold px-4 py-2 hover:bg-primary-500`}
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            Đăng nhập với Google
                                        </button>
                                    )}
                                    onSuccess={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                />
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    className={`text-left font-bold px-4 py-2 hover:bg-primary-500`}
                                    onClick={handleLogOut}
                                >
                                    Đăng xuất
                                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>

                    <Link
                        to="/cart"
                        className="transition-all py-2 flex-center-y gap-x-2 px-4 rounded-md bg-secondary-500 font-bold shadow-md hover:bg-secondary-400 relative block"
                    >
                        <div className="relative">
                            <FaShoppingCart />
                            <span className="absolute -top-[10px] -right-[10px] w-5 h-5 bg-primary-600 rounded-full flex-center text-xs">
                                2
                            </span>
                        </div>
                    </Link>
                    <Popover>
                        <Popover.Button className="h-full transition-all py-2 gap-x-2 px-4 rounded-md bg-secondary-500 font-bold shadow-md hover:bg-secondary-400 hidden lg:flex-center">
                            <AiOutlineMenu />
                        </Popover.Button>
                        <Popover.Overlay className="bg-black opacity-30 fixed inset-0" />
                        <Transition
                            as={Fragment}
                            enter="transition-all duration-500"
                            leave="transition-all duration-500"
                            enterFrom="translate-x-full opacity-0"
                            enterTo="translate-x-0 opacity-100"
                            leaveFrom="translate-x-0 opacity-100"
                            leaveTo="translate-x-full opacity-0"
                        >
                            <Popover.Panel className="fixed z-10 w-full max-w-[400px] right-0 top-0 h-full bg-white shadow-popup overflow-y-auto p-4 space-y-4">
                                <div className="flex justify-end">
                                    <button className="text-white p-2 bg-secondary-500 rounded-md shadow-md">
                                        <IoMdClose size={20} />
                                    </button>
                                </div>
                                <div className="flex flex-col text-black gap-y-2">
                                    <Link
                                        to="/"
                                        className="shadow-md py-4 px-6 bg-tertiary-500 text-primary-700 font-bold rounded-md"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/"
                                        className="shadow-md py-4 px-6 bg-tertiary-500 text-primary-700 font-bold rounded-md"
                                    >
                                        Drinks
                                    </Link>
                                    <Link
                                        to="/"
                                        className="shadow-md py-4 px-6 bg-tertiary-500 text-primary-700 font-bold rounded-md"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/"
                                        className="shadow-md py-4 px-6 bg-tertiary-500 text-primary-700 font-bold rounded-md"
                                    >
                                        Help
                                    </Link>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </header>
    );
}
const NavLinkStyle = ({ active = false, children, to = "/" }) => (
    <Link
        to={to}
        className={`font-sans font-bold block px-6 py-6 hover:underline underline-offset-1 text-base`}
    >
        {children}
    </Link>
);
