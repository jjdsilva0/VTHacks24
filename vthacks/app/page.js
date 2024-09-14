export default function Home() {
  return (
    <div className="carousel carousel-vertical h-full w-full">
      <div className="carousel-item h-full">
        {/* TODO: Make button actually do something */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-5xl font-bold">Era Explorer</h1>
              <h2 className="mb-5 text-2xl">
                Prehistoric Pathways
              </h2>
              <button className="btn btn-primary">Embark</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
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
            backgroundImage: "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
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
            backgroundImage: "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
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
