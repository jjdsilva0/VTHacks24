"use client";
import BackButton from "../components/BackButton";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-base-200 text-base-content px-2 py-4 flex">
        <BackButton url="/" />
        {/* Left Section: Title and Description */}
        <div className="carousel carousel-vertical h-[99dvh] w-full flex items-center">
          <div className=" carousel-item h-full w-[90dvw] flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
              Welcome to the Jurassic Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            a time of dramatic growth and diversification for life on Earth. This era saw the 
            rise of giant sauropods, powerful theropods, and a wide variety of herbivorous 
            dinosaurs that flourished in lush forests and evolving ecosystems. 
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Post-Triassic Recovery
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The Jurassic Period began around 201 million years ago, following the Triassic-Jurassic extinction event. 
            This extinction wiped out many large reptiles and competitors, allowing dinosaurs to rise as the dominant 
            land animals. Early in the Jurassic, dinosaur species were smaller and less specialized, with early 
            representatives of major dinosaur groups just beginning to emerge in this recovery phase.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Early Jurassic: Emergence of Sauropodomorphs
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            Around 195 million years ago, during the Early Jurassic, sauropodomorphs began to thrive. 
            Early sauropods like Vulcanodon and Barapasaurus evolved from smaller, bipedal ancestors into 
            massive, quadrupedal herbivores. Their long necks and gigantic bodies allowed them to feed on 
            tall vegetation, establishing them as the primary large herbivores of the time, while also developing 
            unique adaptations for their enormous size.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            First Major Theropod Dinosaurs
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            By around 190 million years ago, the first large theropods—bipedal carnivores—began to dominate as 
            apex predators. Dinosaurs like Dilophosaurus emerged as agile hunters, preying on smaller dinosaurs 
            and early reptiles. These early theropods were medium-sized compared to later Jurassic predators, but 
            they marked the start of theropods’ evolutionary trajectory toward larger and more specialized carnivores.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Middle Jurassic: Sauropods Reach New Heights
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            Around 175 million years ago, in the Middle Jurassic, sauropods grew to even larger sizes. 
            Dinosaurs like Brachiosaurus and Apatosaurus dominated the landscape, with their enormous 
            size allowing them to access plant material high in trees. This period marked a crucial 
            evolutionary moment for sauropods, as they developed longer necks and greater size, making 
            them more efficient herbivores and safer from predators.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            New Herbivores: Stegosaurs and Ornithopods
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            Around 170 million years ago, new groups of herbivorous dinosaurs evolved and diversified. 
            Stegosaurs, like Stegosaurus, developed distinctive bony plates and tail spikes, which may 
            have been used for both display and defense. Ornithopods, like Camptosaurus, became smaller 
            but highly mobile herbivores. These new herbivores filled different ecological niches, 
            contributing to the changing landscape of the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Large Theropods Dominate the Food Chain
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            By 160 million years ago, large theropod predators such as Allosaurus became dominant in the ecosystems 
            of North America and Europe. These theropods were much larger than their Early Jurassic predecessors, 
            using their size, strength, and sharp teeth to hunt the growing populations of herbivorous dinosaurs 
            like sauropods and stegosaurs. Allosaurus became one of the most powerful hunters of the Jurassic.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Jurassic Skies and Seas
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            Around 155 million years ago, pterosaurs dominated the skies while large marine reptiles ruled the oceans. 
            Pterosaurs, flying reptiles like Pterodactylus and later Pteranodon, were the first vertebrates to develop 
            powered flight, filling aerial niches long before birds. In the oceans, ichthyosaurs and plesiosaurs preyed 
            on marine life, though they were not true dinosaurs, they coexisted and often interacted with the coastal 
            ecosystems of Jurassic dinosaurs.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            Late Jurassic: Peak of Sauropod Evolution
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            Around 150 million years ago, sauropods reached the peak of their evolution, 
            with some species like Diplodocus and Brontosaurus achieving record-breaking sizes. 
            These enormous herbivores had incredibly long necks, which allowed them to feed on 
            plant material high up in coniferous trees. Their herd behavior and colossal size 
            provided protection from most predators, securing their dominance as the largest animals on land.
            </h2>
          </div>

          <div className="carousel-item w-[90dvw] h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg py-3">
            End of the Jurassic and Transition to the Cretaceous
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The Jurassic Period ended around 145 million years ago, transitioning into the Cretaceous Period. 
            As Pangaea continued to break apart, creating new landmasses, dinosaur species began to diversify 
            further. The end of the Jurassic marked a shift in the types of dinosaurs that dominated, with 
            tyrannosaurids, ceratopsians, and hadrosaurs set to rise in the Cretaceous. The Jurassic laid the 
            foundation for the incredible dinosaur diversity that would characterize the next era.
            </h2>
          </div>
          
        </div>
      </div>
      <div className="w-1/6 fixed right-1 top-2">
      </div>
    </div>
  );
}
