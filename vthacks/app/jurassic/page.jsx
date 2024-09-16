"use client";
import AudioPlayer from "../components/AudioPlayer";
import BackButton from "../components/BackButton";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import EmbarkButton from "../components/EmbarkButton";

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
      <AudioPlayer audioSrc="/audio/jurassic_greeting.mp3" />
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
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Welcome to the Jurassic Period
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              a time of dramatic growth and diversification for life on Earth.
              This era saw the rise of giant sauropods, powerful theropods, and
              a wide variety of herbivorous dinosaurs that flourished in lush
              forests and evolving ecosystems.
            </h2>
            <div className="mt-5 text-center">
              <EmbarkButton id="1"/>
            </div>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left" id="1">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Post-Triassic Recovery
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The Jurassic Period began around 201 million years ago, following
              the Triassic-Jurassic extinction event. This extinction wiped out
              many large reptiles and competitors, allowing dinosaurs to rise as
              the dominant land animals. Early in the Jurassic, dinosaur species
              were smaller and less specialized, with early representatives of
              major dinosaur groups just beginning to emerge in this recovery
              phase.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Early Jurassic: Emergence of Sauropodomorphs
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Around 195 million years ago, during the Early Jurassic,
              sauropodomorphs began to thrive. Early sauropods like Vulcanodon
              and Barapasaurus evolved from smaller, bipedal ancestors into
              massive, quadrupedal herbivores. Their long necks and gigantic
              bodies allowed them to feed on tall vegetation, establishing them
              as the primary large herbivores of the time, while also developing
              unique adaptations for their enormous size.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../jurassicSauropodomorphs.jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A Jurassic Sauropodomorph towers over prehistoric vegetation,
              showcasing its massive size and long neck in its natural habitat.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              First Major Theropod Dinosaurs
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              By around 190 million years ago, the first large theropods—bipedal
              carnivores—began to dominate as apex predators. Dinosaurs like
              Dilophosaurus emerged as agile hunters, preying on smaller
              dinosaurs and early reptiles. These early theropods were
              medium-sized compared to later Jurassic predators, but they marked
              the start of theropods’ evolutionary trajectory toward larger and
              more specialized carnivores.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Middle Jurassic: Sauropods Reach New Heights
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Around 175 million years ago, in the Middle Jurassic, sauropods
              grew to even larger sizes. Dinosaurs like Brachiosaurus and
              Apatosaurus dominated the landscape, with their enormous size
              allowing them to access plant material high in trees. This period
              marked a crucial evolutionary moment for sauropods, as they
              developed longer necks and greater size, making them more
              efficient herbivores and safer from predators.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              New Herbivores: Stegosaurs and Ornithopods
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Around 170 million years ago, new groups of herbivorous dinosaurs
              evolved and diversified. Stegosaurs, like Stegosaurus, developed
              distinctive bony plates and tail spikes, which may have been used
              for both display and defense. Ornithopods, like Camptosaurus,
              became smaller but highly mobile herbivores. These new herbivores
              filled different ecological niches, contributing to the changing
              landscape of the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../stegosaur.jpg"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              This herbivorous dinosaur, known for its distinctive double row of
              bony plates and tail spikes called thagomizers, used these
              features for display, thermoregulation, or defense against
              predators.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Large Theropods Dominate the Food Chain
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              By 160 million years ago, large theropod predators such as
              Allosaurus became dominant in the ecosystems of North America and
              Europe. These theropods were much larger than their Early Jurassic
              predecessors, using their size, strength, and sharp teeth to hunt
              the growing populations of herbivorous dinosaurs like sauropods
              and stegosaurs. Allosaurus became one of the most powerful hunters
              of the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Jurassic Skies and Seas
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Around 155 million years ago, pterosaurs dominated the skies while
              large marine reptiles ruled the oceans. Pterosaurs, flying
              reptiles like Pterodactylus and later Pteranodon, were the first
              vertebrates to develop powered flight, filling aerial niches long
              before birds. In the oceans, ichthyosaurs and plesiosaurs preyed
              on marine life, though they were not true dinosaurs, they
              coexisted and often interacted with the coastal ecosystems of
              Jurassic dinosaurs.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../JurrasicSkiesAndSeas.png"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              155 million years ago, pterosaurs like Pterodactylus and
              Pteranodon soared above, while ichthyosaurs and plesiosaurs ruled
              the oceans, coexisting with coastal Jurassic dinosaurs.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Late Jurassic: Peak of Sauropod Evolution
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Around 150 million years ago, sauropods reached the peak of their
              evolution, with some species like Diplodocus and Brontosaurus
              achieving record-breaking sizes. These enormous herbivores had
              incredibly long necks, which allowed them to feed on plant
              material high up in coniferous trees. Their herd behavior and
              colossal size provided protection from most predators, securing
              their dominance as the largest animals on land.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../e74e2cd9-1331-44d8-86f1-6c67b8c76a23.webp"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              Diplodocus and Brontosaurus, towering over the landscape as they
              feed from the tall coniferous trees.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-xl  md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              End of the Jurassic and Transition to the Cretaceous
            </h2>
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The Jurassic Period ended around 145 million years ago,
              transitioning into the Cretaceous Period. As Pangaea continued to
              break apart, creating new landmasses, dinosaur species began to
              diversify further. The end of the Jurassic marked a shift in the
              types of dinosaurs that dominated, with tyrannosaurids,
              ceratopsians, and hadrosaurs set to rise in the Cretaceous. The
              Jurassic laid the foundation for the incredible dinosaur diversity
              that would characterize the next era.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-center">
            <img
              src="../61c1b2dc-5dc8-49cb-baf2-f7e290cd41f7.webp"
              className="h-1/2 w-full object-contain"
            />
            <h2 className="text-sm md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              The landscape showcases the breakup of Pangaea and the early
              diversification of dinosaurs like sauropods, theropods,
              tyrannosaurids, ceratopsians, and hadrosaurs in a lush, dynamic
              world.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-1/6 fixed right-1 top-2"></div>
    </div>
  );
}
