"use client";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-base-200 text-base-content px-2 py-4 flex">
        {/* Left Section: Title and Description */}
        <div className="carousel carousel-vertical h-[99dvh] w-full flex items-center">
          <div className=" carousel-item h-full w-5/6 flex-col justify-center text-left">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
              Welcome to the Cretaceous Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The last era of dinosaurs, featuring iconic species like T. rex and Triceratops, warm climates, diverse ecosystems, and flowering plants.
            </h2>
          </div>
          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
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
      </div>
    </div>
  );
}
