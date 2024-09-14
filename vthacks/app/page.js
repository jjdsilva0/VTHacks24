import EmbarkButton from "./components/EmbarkButton";

export default function Home() {
  return (
    <div className="carousel carousel-vertical h-full w-full">
      <div className="carousel-item h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-5xl font-bold">Dinologue</h1>
              <h2 className="mb-5 text-2xl">
              The ultimate dinosaur knowledge hub.
              </h2>
              <EmbarkButton />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full" id="triassic">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.natgeofe.com/n/5c048a29-390c-4664-8100-01efe5ca01b5/955.jpg?w=1436&h=1078)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-5xl font-bold">Triassic</h1>
              <h2 className="mb-5 text-2xl">
                Filler
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.natgeofe.com/n/5c7fabf3-edbc-4956-af56-15dc547371b7/810.jpg?w=1436&h=1078)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-5xl font-bold">Jurassic</h1>
              <h2 className="mb-5 text-2xl">
                Filler
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.natgeofe.com/n/9c56eafe-8285-4eef-b0d4-e12473098742/907.jpg?w=1436&h=1078)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-5xl font-bold">Cretacious</h1>
              <h2 className="mb-5 text-2xl">
                Filler
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
