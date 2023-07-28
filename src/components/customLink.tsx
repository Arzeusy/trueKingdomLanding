"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IcustomLink {
    href: string,
    title: string,
    className?: string;
    target?: string;
};

export default function CustomLink({ title, href, target="_self", className = "" }: IcustomLink) {
    const router = usePathname();
    return (
        <Link href={href} className={`${className} relative group`} target={`${target}`}>
            {title}
            <span
                className={`
                    h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router === href ? 'w-full':'w-0' }
                    `}>
                &nbsp;
            </span>
        </Link>
    )
};

/*
Migrating from the pages directory:

The new useRouter hook should be imported from next/navigation and not next/router
The pathname string has been removed and is replaced by usePathname()
The query object has been removed and is replaced by useSearchParams() router.events is not currently supported.
*/