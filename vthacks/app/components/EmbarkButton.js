"use client"

const EmbarkButton = () => {
    return (
        <button 
            className="btn btn-primary" 
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