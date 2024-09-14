"use client";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-base-200 text-base-content px-2 py-4 flex">
        <BackButton url="/" />
        {/* Left Section: Title and Description */}
        <div className="carousel carousel-vertical h-[99dvh] w-full flex items-center">
          <div className=" carousel-item h-full w-5/6 flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
              Welcome to the Cretaceous Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
              A world of recovery and rebirth, where new life emerged, and the
              first dinosaurs began their rise to dominance amid vast deserts
              and shallow seas.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            The Beginning of the Cretaceous Period
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The Cretaceous Period began around 145 million years ago, following the Jurassic Period. 
            By this time, dinosaurs were well-established as the dominant land animals. The world was 
            experiencing a warmer climate, and the supercontinent Pangaea continued to break apart, f
            orming separate landmasses that would become today&apos;s continents. The opening of new oceans and the development of distinct ecosystems set the stage for the dramatic evolution and diversification of dinosaurs during this period.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Early Cretaceous Dinosaur Diversification
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            In the Early Cretaceous, dinosaurs continued to diversify into new forms. Theropods, 
            including large predators like Acrocanthosaurus, became more varied, and early members 
            of groups like tyrannosaurs and dromaeosaurs (raptors) began to emerge. At the same time,
             the ornithopods, including Iguanodon, were developing advanced chewing mechanisms, 
             allowing them to exploit new plant food sources. Meanwhile, sauropods continued to thrive, 
             particularly in the southern continents like Gondwana.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            The Rise of Ankylosaurs and Ceratopsians
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            By around 130 million years ago, heavily armored dinosaurs like ankylosaurs and nodosaurs 
            began to rise in prominence. These herbivores, with their protective bony plates and clubbed 
            tails, were well-suited to defending against the large predators of the time. At the same time, 
            the early ceratopsians (horned dinosaurs) started to appear in Asia, with species like Psittacosaurus, 
            marking the beginning of a lineage that would later produce the famous Triceratops.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Mid-Cretaceous: The Apex of Theropod Predators
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The mid-Cretaceous (around 120 million years ago) saw the rise of some of the largest and most 
            formidable carnivorous dinosaurs, including Spinosaurus and Carcharodontosaurus. These massive 
            theropods, particularly in Gondwana (modern-day Africa and South America), were top predators, 
            capable of hunting large prey, including sauropods. Spinosaurus, with its unique adaptations like a 
            sail on its back and semi-aquatic lifestyle, stood out as one of the most specialized dinosaurs of the time.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Herbivorous Giants and the Spread of Flowering Plants
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            By around 115 million years ago, sauropods remained among the largest land animals, with species 
            like Argentinosaurus reaching incredible sizes. These giant herbivores coexisted with smaller 
            herbivorous dinosaurs, like hadrosaurs (duck-billed dinosaurs) and ceratopsians, which continued to 
            evolve. During this time, flowering plants (angiosperms) began to appear and spread rapidly. These new 
            plants provided a rich and diverse food source, which herbivorous dinosaurs exploited, leading to further 
            diversification of plant-eating dinosaurs.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Late Cretaceous: The Dominance of Tyrannosaurs 
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            In the Late Cretaceous, around 80 million years ago, the tyrannosaurids became apex predators 
            in North America and Asia. Species like Tyrannosaurus rex, which appeared closer to the end of the 
            Cretaceous, were some of the largest and most powerful predators to ever walk the Earth. With massive jaws, 
            strong teeth, and an enhanced sense of smell, T. rex ruled the ecosystems of North America, while other 
            large theropods dominated other parts of the world.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            The Explosion of Ceratopsians and Hadrosaurs
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            By around 75 million years ago, two major groups of herbivorous dinosaurs—ceratopsians and hadrosaurs—reached 
            their peak in diversity and numbers. Ceratopsians, like Triceratops and Torosaurus, evolved large frills and 
            horns for display and defense, while hadrosaurs became highly successful, with species like Parasaurolophus 
            featuring elaborate crests. These dinosaurs often lived in large herds, suggesting complex social behaviors, and 
            were some of the most successful herbivores of the Cretaceous.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Coastal Ecosystems and Marine Dinosaurs
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            During the Late Cretaceous, rising sea levels created vast inland seas, 
            which gave rise to unique coastal and marine ecosystems. Marine reptiles, 
            such as mosasaurs, became the dominant predators in these environments. 
            Although not true dinosaurs, these giant sea-dwelling reptiles were closely 
            related and often reached enormous sizes. Meanwhile, pterosaurs, the flying reptiles, 
            also flourished, with species like Quetzalcoatlus having wingspans larger than small planes.
            </h2>
          </div>

          <div className="carousel-item w-5/6 h-full flex-col justify-center text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-700 via-lime-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            The Cretaceous-Paleogene
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md mt-4 px-4">
            The Cretaceous Period ended around 66 million years ago with the Cretaceous-Paleogene (K-Pg) 
            extinction event, one of the most catastrophic events in Earth's history. Likely triggered by 
            a massive asteroid impact near modern-day Chicxulub, Mexico, combined with volcanic activity 
            and climate shifts, this event wiped out about 75% of all species on Earth, including all 
            non-avian dinosaurs. This extinction event marked the end of the age of dinosaurs, allowing 
            mammals to eventually rise as the dominant land animals in the following Paleogene Period.
            </h2>
          </div>
          
        </div>
      </div>
      <div className="w-1/6 fixed right-1 top-2">
      </div>
    </div>
  );
}
