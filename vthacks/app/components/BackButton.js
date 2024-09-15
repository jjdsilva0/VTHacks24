"use client"

import Link from "next/link";

const EmbarkButton = ({url}) => {
    return (
        <Link href={url} className="bg-transparent">
            <button className="btn btn-primary text-lg">
                ←
            </button>
        </Link>
    )
}

export default EmbarkButton;