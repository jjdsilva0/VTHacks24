"use client";

export default function Home() {
  return (
    <div>
      <div className="carousel carousel-vertical h-[99dvh] w-full bg-base-200 text-base-content px-2 py-4 flex">
        {/* Left Section: Title and Description */}
        <div className="carousel carousel-vertical h-full w-5/6 flex items-center">
          <div className=" carousel item text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
              Welcome to the Triassic Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A world of recovery and rebirth, where new life emerged, and the
              first dinosaurs began their rise to dominance amid vast deserts
              and shallow seas.
            </h2>
          </div>
          <div className="carousel carousel-vertical h-full text-left md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
              Empty
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              empty
            </h2>
          </div>
        </div>
      </div>
      <div className="w-1/6 fixed right-1 top-2">
        HERE
      </div>
    </div>
    
  );
}
