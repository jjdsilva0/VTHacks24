"use client"

const EmbarkButton = () => {
    return (
        <button 
            className="btn btn-primary text-white hover:font-bold py-2 px-4" 
            onClick={
                () => {
                    const triassicSection = document.getElementById("triassic");
                    triassicSection.scrollIntoView({ behavior: "smooth" });
                }
            }
            >
                Embark
        </button>
    )
}

export default EmbarkButton;