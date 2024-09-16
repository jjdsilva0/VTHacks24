import Link from "next/link";
import EmbarkButton from "./components/EmbarkButton";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <div className="carousel carousel-vertical h-[99dvh] w-full">
      <div className="carousel-item h-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3839557/pexels-photo-3839557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-3 text-6xl font-extrabold">Dinologue</h1>
              <h2 className="mb-5 text-3xl font-semibold text-gray-300 tracking-wider animate-fadeIn">
                An interactive journey into dinosaur history
              </h2>

              <AudioPlayer audioSrc="/audio/intro_greeting.mp3" />
              <EmbarkButton id="triassic"/>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full" id="triassic">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/5c048a29-390c-4664-8100-01efe5ca01b5/955.jpg?w=1436&h=1078)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <Link href="/triassic">
              <div className="max-w-md text-left bg-black bg-opacity-40 p-5 rounded-lg hover:bg-opacity-60">
                <h1 className="mb-3 text-5xl font-bold">Triassic</h1>
                <p className="mb-5">
                  The Triassic Period (252-201 million years ago) marked the
                  start of the Mesozoic Era. Following a massive extinction, it
                  saw the rise of early dinosaurs, mammals, and marine reptiles.
                  The climate was hot and dry, with vast deserts. The period
                  ended with a significant extinction event.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/5c7fabf3-edbc-4956-af56-15dc547371b7/810.jpg?w=1436&h=1078)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <Link href="/jurassic">
              <div className="max-w-md text-left bg-black bg-opacity-40 p-5 rounded-lg hover:bg-opacity-60">
                <h1 className="mb-3 text-5xl font-bold">Jurassic</h1>
                <p className="mb-5">
                  The Jurassic Period (201-145 million years ago) was a time of
                  significant dinosaur dominance and diversification. It saw the
                  rise of iconic species like Stegosaurus and Brachiosaurus. The
                  climate was warm and humid, fostering lush vegetation. Marine
                  life thrived with the presence of large reptiles like
                  plesiosaurs. The period ended with a minor extinction event.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="carousel-item h-full">
        {/* TODO: Create a link to the triassic page. */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/9c56eafe-8285-4eef-b0d4-e12473098742/907.jpg?w=1436&h=1078)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <Link href="/cretaceous">
              <div className="max-w-md text-left bg-black bg-opacity-40 p-5 rounded-lg hover:bg-opacity-60">
                <h1 className="mb-3 text-5xl font-bold">Cretaceous</h1>
                <p className="mb-5">
                  The Cretaceous Period (145-66 million years ago) was the final
                  era of the dinosaurs. It saw the rise of famous species like
                  Tyrannosaurus rex and Triceratops. The climate was warm,
                  supporting diverse ecosystems. Flowering plants emerged, and
                  marine life flourished with creatures like mosasaurs. The
                  period ended with a massive extinction event.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
