"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollTop = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Link
            href={"#beranda"}
            className={`fixed bottom-10 right-10 bg-slate-800 text-white w-12 h-12 rounded-full text-center hover:bg-slate-700 cursor-pointer transition-all ${
                active ? "opacity-100" : "opacity-0"
            }`}
        >
            <i className="ri-arrow-up-line ri-2x"></i>
        </Link>
    );
};

export default ScrollTop;