"use client"

const EmbarkButton = ({ id }) => {
    return (
        <button 
            className="btn btn-primary text-white hover:font-bold py-2 px-4" 
            onClick={
                () => {
                    const triassicSection = document.getElementById(id);
                    triassicSection.scrollIntoView({ behavior: "smooth" });
                }
            }
            >
                Embark
        </button>
    )
}

export default EmbarkButton;