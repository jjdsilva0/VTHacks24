"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content px-2 py-4 flex">
      {/* Left Section: Title and Description */}
      <div className="w-full md:w-3/4 flex items-center">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Welcome to the Triassic Period
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            A world of recovery and rebirth, where new life emerged, and the
            first dinosaurs began their rise to dominance amid vast deserts
            and shallow seas.
          </h2>
        </div>
      </div>

      {/* Right Section: Dark Grey Box with Rounded Corners */}
      <div className="hidden md:flex md:w-1/4 bg-gray-800 h-screen rounded-l-lg">
        <div className="flex justify-center items-center w-full text-white">
          <h2 className="text-xl">User Input Box</h2>
        </div>
      </div>
    </div>
  );
}
