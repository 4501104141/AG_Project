import Button from "components/Button";
import { Link, Outlet, useLocation } from "react-router-dom";
import { compareLocation } from "utils";

export default function Account() {
    const location = useLocation();

    return (
        <section>
            <div className="container px-2 bg-quaternary-500 min-h-screen">
                <div className="grid grid-cols-12 sm:grid-cols-none md:pt-32 py-10 gap-x-4 gap-y-5 ">
                    <div className="md:col-span-3 col-span-2 sm:flex-1 bg-secondary-500 h-[200px] p-10 sm:flex-row flex-center-y flex-col gap-5">
                        <Button
                            name="Purchase"
                            className="py-3"
                            link
                            href="/account-settings/purchase"
                            active={compareLocation(
                                location.pathname,
                                "/account-settings/purchase"
                            )}
                        />
                        <Button
                            name="Address"
                            className="py-3"
                            link
                            href="/account-settings/address"
                            active={compareLocation(
                                location.pathname,
                                "/account-settings/address"
                            )}
                        />
                    </div>
                    <div className="col-span-10 md:col-span-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
}