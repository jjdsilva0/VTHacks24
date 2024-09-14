"use client"

import Link from "next/link";

const EmbarkButton = ({url}) => {
    return (
        <Link href={url}>
            <button className="btn btn-primary">
                &9756;
            </button>
        </Link>
    )
}

export default EmbarkButton;