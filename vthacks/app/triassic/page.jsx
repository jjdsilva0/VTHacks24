"use client";
import AudioPlayer from "../components/AudioPlayer";
import BackButton from "../components/BackButton";

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ObjModel = dynamic(() => import('../components/Model'), {
  ssr: false,  // This ensures WebGL only runs on the client-side
});

import Chatbubble from "../components/Chatbubble";

export default function Home() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <div>
      <AudioPlayer audioSrc="/audio/triassic_greeting.mp3" />
      <div className="fixed z-10 top-3 left-3">
        <BackButton url="/" />
      </div>

      <div className="fixed z-10 right-3 bottom-0 h-[8rem] w-[15rem] flex">
        <div className={`chat chat-end w-1/2 items-start mt-5 transition-all duration-500 ${!isComponentVisible ? 'fade-in opacity-100' : 'fade-out opacity-0'}`}>
            <div className="chat-bubble hover:bg-secondary hover:cursor-pointer" onClick={handleClick}>
              Ask me more!
            </div>
        </div>
        <div className={`transition-all duration-500 ${isComponentVisible ? 'fade-in opacity-100' : 'fade-out opacity-0 pointer-events-none'}`}>
          <Chatbubble />
        </div>
        <div className="w-1/2" onClick={handleClick}>
          <ObjModel modelPath={"triceratops.glb"} />
        </div>
      </div>

      <div className="w-full bg-base-200 text-base-content">
        {/* Left Section: Title and Description */}
        <div className="carousel carousel-vertical h-[99dvh] w-full flex items-center">
          <div className=" carousel-item h-full w-[90dvw] flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Welcome to the Triassic Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A world of recovery and rebirth, where new life emerged, and the
              first dinosaurs began their rise to dominance amid vast deserts
              and shallow seas.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Archosaur Dominance and Early Dinosaur Origins
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              In the early and middle Triassic, the world was dominated by
              archosaurs, a group of reptiles that included ancestors of
              crocodiles, pterosaurs, and dinosaurs. In the aftermath of the
              Permian-Triassic extinction, archosaurs quickly diversified and
              adapted to new environments. The first true dinosaurs began to
              evolve from small, bipedal archosaurs around 230 million years
              ago, during the late Triassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../Pancrocodylia_diversity (1).jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Examples of how archosaurs could have looked.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              The First Dinosaurs Emerge
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The earliest known dinosaurs, such as Herrerasaurus, Eoraptor, and
              Staurikosaurus, appeared in what is now South America. These
              small, agile creatures were fast and bipedal, with early
              carnivorous species leading the way. The appearance of these
              dinosaurs marks a key evolutionary moment, as they were among the
              first to show traits that would define the group, such as upright
              posture and specialized teeth.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Theropods: Early Dinosaur Predators
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Theropods, which would later include fearsome predators like
              Tyrannosaurus rex, had humble beginnings in the Triassic. Early
              theropods, such as Coelophysis, were small, bipedal carnivores
              that preyed on small animals and possibly scavenged. These
              dinosaurs set the evolutionary foundation for future apex
              predators in the Jurassic and Cretaceous periods.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../Chindesaurus.jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The Chindesaurus was among this group of early Triassic theropods.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Sauropodomorphs: Herbivores Evolve
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              At the same time as theropods, another group of dinosaurs called
              sauropodomorphs emerged. Plateosaurus, one of the best-known
              sauropodomorphs from this period, was an herbivore that walked on
              two legs but could also use all four. These early sauropodomorphs
              were relatively small compared to their later descendants, but
              they began to experiment with large body sizes and long necks,
              trends that would define their lineage in the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../sauropodomorphs.jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A sauropodomorph explores the lush, green forests of the Triassic
              Period, surrounded by ferns and towering trees.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Dinosaur Competition with Other Reptiles
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              In the Triassic, dinosaurs were not yet the dominant land animals.
              They faced stiff competition from large predatory reptiles like
              rauisuchians (crocodile relatives) and herbivorous dicynodonts
              (therapsid reptiles). These groups shared many ecosystems with
              early dinosaurs, and it was a time of evolutionary experimentation
              as dinosaurs vied for survival and dominance against these larger,
              established species.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Dinosaur Adaptability and Evolutionary Success
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              As the late Triassic progressed, dinosaurs began to show greater
              adaptability than their reptilian competitors. Their upright
              posture, efficient breathing systems, and bipedal locomotion gave
              them advantages in mobility and endurance. These traits allowed
              dinosaurs to exploit new ecological niches, slowly increasing
              their numbers and diversity.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="https://i.natgeofe.com/n/74cf2c2c-83e8-4bd3-9969-f603de95746a/992.jpg?w=2560&h=1922"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A Herrerasaurus hunts for its next meal in a forest in modern day
              South America.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              The Rise of Herbivorous Dinosaurs
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              In parallel with the growth of carnivorous theropods, herbivorous
              dinosaurs also became more diverse. Early sauropodomorphs, such as
              Massospondylus, began to dominate certain environments. Their long
              necks allowed them to reach higher vegetation, giving them a
              competitive edge in resource-poor environments. Over time, their
              size increased, further establishing their role in ecosystems.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              The End-Triassic Extinction
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The Triassic ended with a massive extinction event, caused by
              volcanic eruptions linked to the break-up of Pangaea and
              subsequent climate change. This event, known as the
              Triassic-Jurassic extinction, wiped out many dominant groups,
              including rauisuchians and many large therapsids. Dinosaurs,
              however, survived and capitalized on the extinction of their
              competitors, becoming the dominant land animals in the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Dinosaur Dominance After the Extinction
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              With many of their competitors gone, dinosaurs quickly filled the
              vacant ecological niches after the extinction. Both carnivorous
              theropods and herbivorous sauropodomorphs diversified and spread
              across the supercontinent of Pangaea. The Triassic-Jurassic
              transition marked the beginning of the Age of Dinosaurs, as they
              rose to prominence and spread across the globe, setting the stage
              for their dominance in the Jurassic and Cretaceous periods.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="https://i.pinimg.com/originals/5e/11/2f/5e112f6a0655c786229a4494a044e992.jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The mass extinction event marking the end of the period.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-1/6 fixed right-1 top-2"></div>
    </div>
  );
}
