export default function Home() {
  return (
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
  );
}
