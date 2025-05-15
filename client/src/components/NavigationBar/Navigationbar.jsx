import React from 'react'
import { assets, Menus } from "../../utils.js";
import DesktopMenu from './DesktopMenu.jsx';
import MobMenu from './MobMenu.jsx';
const Navigationbar = () => {
    return (
        <div>
            <header className="h-20 text-[15px] z-[1999] text-white fixed inset-0 flex-center bg-[#12721d] ">
                <nav className=" px-3.5 py-5 flex-center-between w-full max-w-7xl mx-auto">
                    <div className="flex-center gap-x-3 z-[999] relative ">
                        <img src={assets.logo} alt="" className="size-12 rounded-full" />
                        <h3 className="text-3xl font-bold">G.C.C</h3>
                    </div>

                    <ul className="gap-x-1 lg:flex-center hidden">
                        {Menus.map((menu) => (
                            <DesktopMenu menu={menu} key={menu.name} />
                        ))}
                    </ul>
                    <div className="flex-center gap-x-5">
                        <button
                            aria-label="sign-in"
                            className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
                        >
                            Sign In
                        </button>
                        <div className="lg:hidden">
                            <MobMenu Menus={Menus} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navigationbar