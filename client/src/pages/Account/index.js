import Button from "components/Button";
import { Outlet, useLocation } from "react-router-dom";
import { compareLocation } from "utils";

export default function Account() {
    const location = useLocation();

    return (
        <section>
            <div className="container px-2 bg-quaternary-500 min-h-[620px]">
                <div className="grid grid-cols-12 md:pt-28 py-12 gap-x-4 gap-y-5 ">
                    <div className="md:col-span-3 sm:col-span-12 col-span-2 bg-primary-500 sm:h-0 h-[200px] rounded-xl p-10 flex-center sm:flex-row flex-col gap-5">
                        <Button
                            name="Purchase"
                            className="py-3 bg-secondary-500"
                            link
                            href="/account-settings/purchase"
                            active={compareLocation(
                                location.pathname,
                                "/account-settings/purchase"
                            )}
                        />
                        <Button
                            name="Address"
                            className="py-3 bg-secondary-500"
                            link
                            href="/account-settings/address"
                            active={compareLocation(
                                location.pathname,
                                "/account-settings/address"
                            )}
                        />
                    </div>
                    <div className="col-span-10 md:col-span-9 sm:col-span-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
}
