// GLOBALS
let userButton = document.getElementById('user-button')
let userInput = document.getElementById('user-input')
let letter = userInput.innerText
userButton.addEventListener('click', letterCheck)
let thumbUp = document.getElementsByClassName("fa-thumbs-up");
let thumbDown = document.getElementsByClassName("fa-thumbs-down");
let trash = document.getElementsByClassName("fa-trash");

// FUNCTIONS
function letterCheck() {
    const animals = {
        a: [
            {
                name: "Arctic Fox",
                class: "Mammal",
                biome: "Tundra",
                diet: "Carnivore",
                description: "The Arctic Fox is a small, fluffy mammal that lives in the tundra biome. They have thick fur that helps them survive the harsh cold temperatures. They are carnivorous and feed on small mammals, birds, and fish.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/800px-Iceland-1979445_%28cropped_3%29.jpg"
            },
            {
                name: "Anaconda",
                class: "Reptile",
                biome: "Rainforest",
                diet: "Carnivore",
                description: "The Anaconda is a large, non-venomous snake that lives in the rainforest biome. They are carnivorous and feed on a variety of prey including fish, birds, and mammals. They are known for their ability to constrict their prey.",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Brooding_female_Python_molurus_bivittatus.jpg"
            },
            {
                name: "African Penguin",
                class: "Bird",
                biome: "Coastal",
                diet: "Carnivore",
                description: "The African Penguin is a small, flightless bird that lives in coastal areas of southern Africa. They are carnivorous and feed on small fish such as anchovies and sardines. They are an endangered species due to habitat loss and overfishing.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/African_penguin_side_profile.jpg/800px-African_penguin_side_profile.jpg"
            }
        ],
        b: [
            {
                name: "Buffalo",
                class: "Mammal",
                biome: "Grasslands, forests",
                diet: "Herbivore",
                description: "The Buffalo, also known as the American Bison, is a large mammal found in North America. They are known for their massive, shaggy bodies, curved horns, and distinctive hump on their shoulders. They are herbivores, feeding on grasses and other vegetation, and were once an important resource for Native American tribes and early settlers in North America. Today, they are an iconic symbol of the American West and can be found in protected areas such as national parks.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1024px-American_bison_k5680-1.jpg"
            },
            {
                name: "Bee",
                class: "Insect",
                biome: "Various",
                diet: "Nectar, pollen",
                description: "The Bee is a flying insect found all over the world. They are known for their role as important pollinators, helping to fertilize flowers and crops by transferring pollen between plants. They are social insects, living in hives or nests with a queen and worker bees. They feed on nectar and pollen from flowers, and produce honey as a food source for the colony. Bees are also known for their painful stings, which they use to defend the hive from predators.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg/800px-Bombus_lapidarius_-_Melilotus_officinalis_-_Tallinn.jpg"
            },
            {
                name: "Blue Whale",
                class: "Mammal",
                biome: "Ocean",
                diet: "Carnivore",
                description: "The Blue Whale is the largest mammal on Earth and lives in the open ocean. They are carnivorous and feed on small crustaceans called krill. They are an endangered species due to commercial whaling and climate change.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Blue_Whale_001_body_bw.jpg/800px-Blue_Whale_001_body_bw.jpg"
            }
        ],

        c: [
            {
                name: "Cheetah",
                class: "Mammal",
                biome: "Grassland",
                diet: "Carnivore",
                description: "The Cheetah is a fast and agile carnivorous mammal that lives in the grasslands of Africa. They are known for their distinctive spotted coat and can run up to 70 mph in short bursts. They are an endangered species due to habitat loss and poaching.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/399px-TheCheethcat.jpg"
            },
            {
                name: "Crocodile",
                class: "Reptile",
                biome: "Freshwater",
                diet: "Carnivore",
                description: "The Crocodile is a large, semi-aquatic reptile that lives in freshwater habitats such as rivers and swamps. They are carnivorous and feed on a variety of prey including fish, mammals, and birds. They are also known for their strong jaws and sharp teeth.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/NileCrocodile-SRG001c.jpg/800px-NileCrocodile-SRG001c.jpg"
            },
            {
                name: "Chimpanzee",
                class: "Mammal",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Chimpanzee is a highly intelligent primate that lives in the forests of Africa. They are omnivorous and eat a variety of foods including fruit, leaves, insects, and even small mammals. They are endangered due to habitat loss and hunting.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Common_chimpanzee_%28Pan_troglodytes_schweinfurthii%29_feeding.jpg/800px-Common_chimpanzee_%28Pan_troglodytes_schweinfurthii%29_feeding.jpg"
            }
        ],
        d: [
            {
                name: "Dolphin",
                class: "Mammal",
                biome: "Ocean",
                diet: "Carnivore",
                description: "The Dolphin is a highly intelligent and social mammal that lives in the ocean. They are carnivorous and feed on fish and squid. They are known for their playful behavior and communication skills.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bottlenose_dolphin_mother_and_juvenile.jpg/800px-Bottlenose_dolphin_mother_and_juvenile.jpg"
            },
            {
                name: "Deer",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Deer is a herbivorous mammal that lives in forests and grasslands around the world. They are known for their antlers, which are used for mating rituals and defense against predators. They eat a variety of plants, including leaves, twigs, and grasses.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Red_deer_portrait.jpg/800px-Red_deer_portrait.jpg"
            },
            {
                name: "Dingo",
                class: "Mammal",
                biome: "Grassland",
                diet: "Carnivore",
                description: "The Dingo is a wild dog that lives in the grasslands of Australia. They are carnivorous and feed on small mammals, birds, and reptiles. They are believed to have been introduced to Australia by humans thousands of years ago.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Look_at_me_dad.jpg/800px-Look_at_me_dad.jpg"
            }
        ],

        e: [
            {
                name: "Elephant",
                class: "Mammal",
                biome: "Grassland",
                diet: "Herbivore",
                description: "The Elephant is a large herbivorous mammal that lives in the grasslands and forests of Africa and Asia. They are known for their long trunks, large ears, and tusks. They eat a variety of plants, including grasses, leaves, and bark.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg"
            },
            {
                name: "Emperor Penguin",
                class: "Bird",
                biome: "Antarctica",
                diet: "Carnivore",
                description: "The Emperor Penguin is a large bird that lives in Antarctica. They are carnivorous and feed mainly on fish and krill. They are known for their distinctive black and white plumage and their ability to survive in extremely cold temperatures.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/220px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
            },
            {
                name: "Eagle",
                class: "Bird",
                biome: "Various",
                diet: "Carnivore",
                description: "The Eagle is a large bird of prey that lives in various habitats around the world. They are carnivorous and feed on a variety of prey including small mammals, birds, and fish. They are known for their keen eyesight and powerful talons.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bald_Eagle_Plumage.jpg/800px-Bald_Eagle_Plumage.jpg"
            }
        ],
        f: [
            {
                name: "Fennec Fox",
                class: "Mammal",
                biome: "Desert",
                diet: "Omnivore",
                description: "The Fennec Fox is a small fox that lives in the desert regions of North Africa. They are omnivorous and feed on a variety of foods including insects, rodents, and fruit. They are known for their large ears, which help them regulate their body temperature.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/800px-Fennec_Fox_Vulpes_zerda.jpg"
            },
            {
                name: "Flamingo",
                class: "Bird",
                biome: "Wetland",
                diet: "Omnivore",
                description: "The Flamingo is a large bird that lives in wetland habitats around the world. They are omnivorous and feed on algae, shrimp, and other small organisms. They are known for their distinctive pink plumage and long, thin legs.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flamant_rose_Salines_de_Thyna.jpg/800px-Flamant_rose_Salines_de_Thyna.jpg"
            },
            {
                name: "Frog",
                class: "Amphibian",
                biome: "Various",
                diet: "Carnivore",
                description: "Frogs are amphibious animals that live in various habitats around the world. They are carnivorous and feed on insects, spiders, and other small invertebrates. They are known for their unique life cycle, which involves metamorphosis from tadpoles to adults.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Laubfrosch_cropped.jpg/800px-Laubfrosch_cropped.jpg"
            }
        ],

        g: [
            {
                name: "Giraffe",
                class: "Mammal",
                biome: "Savanna",
                diet: "Herbivore",
                description: "The Giraffe is a tall, herbivorous mammal that lives in the savannas of Africa. They are known for their long necks, which they use to reach leaves on tall trees. They eat a variety of plants, including leaves, flowers, and fruits.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg/800px-Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg"
            },
            {
                name: "Gorilla",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Gorilla is a large, herbivorous primate that lives in the forests of Africa. They are known for their strength and intelligence, and are considered one of the closest living relatives to humans. They eat a variety of plants, including leaves, stems, and fruits.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/800px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg"
            },
            {
                name: "Gray Wolf",
                class: "Mammal",
                biome: "Various",
                diet: "Carnivore",
                description: "The Gray Wolf is a carnivorous mammal that lives in various habitats around the world. They are social animals that live in packs and are known for their hunting prowess. They feed on a variety of prey, including small mammals, birds, and even other wolves.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Front_view_of_a_resting_Canis_lupus_ssp.jpg/800px-Front_view_of_a_resting_Canis_lupus_ssp.jpg"
            }
        ],
        h: [
            {
                name: "Hippopotamus",
                class: "Mammal",
                biome: "Riverine",
                diet: "Herbivore",
                description: "The Hippopotamus is a large, herbivorous mammal that lives in riverine habitats in sub-Saharan Africa. They are known for their massive size, aggressive behavior, and ability to stay submerged underwater for long periods of time. They feed on a variety of plants, including grasses and aquatic vegetation.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Hippo_fight.jpg"
            },
            {
                name: "Honey Badger",
                class: "Mammal",
                biome: "Various",
                diet: "Omnivore",
                description: "The Honey Badger is a small, omnivorous mammal that lives in various habitats across Africa and Asia. They are known for their tough, fearless nature and are often referred to as the 'world's most fearless animal.' They eat a variety of foods, including insects, small mammals, and fruit.",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Honey_Badger_Mellivora_capensis_Jerusalem_Al_Quds_by_Prof_Dr_Norman_Ali_Khalaf_2013.jpg"
            },
            {
                name: "Hummingbird",
                class: "Bird",
                biome: "Tropical",
                diet: "Nectarivore",
                description: "The Hummingbird is a small, colorful bird that lives in tropical habitats in North and South America. They are known for their ability to hover in mid-air and their incredibly fast wing beats. They feed primarily on nectar from flowers, but also eat insects and spiders.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Violet-tailed_Sylph_2_JCB.jpg/800px-Violet-tailed_Sylph_2_JCB.jpg"
            }
        ],

        i: [
            {
                name: "Ibex",
                class: "Mammal",
                biome: "Mountain",
                diet: "Herbivore",
                description: "The Ibex is a wild goat that lives in mountainous regions of Europe, Asia, and Africa. They are known for their impressive climbing abilities and are able to navigate steep, rocky terrain with ease. They feed on a variety of plants, including grasses and shrubs.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nubian_ibex_Capra_nubiana_%283497827720%29.jpg/800px-Nubian_ibex_Capra_nubiana_%283497827720%29.jpg"
            },
            {
                name: "Iguana",
                class: "Reptile",
                biome: "Tropical",
                diet: "Herbivore",
                description: "The Iguana is a large, herbivorous reptile that lives in tropical habitats in Central and South America, as well as some Caribbean islands. They are known for their distinctive scales and spines, as well as their ability to change color. They feed primarily on leaves, fruits, and flowers.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Green_Iguana_In_Florida.jpg/800px-Green_Iguana_In_Florida.jpg"
            },
            {
                name: "Impala",
                class: "Mammal",
                biome: "Savanna",
                diet: "Herbivore",
                description: "The Impala is a medium-sized antelope that lives in the savannas of sub-Saharan Africa. They are known for their impressive jumping ability, with some individuals able to leap over 10 feet in a single bound. They feed on a variety of plants, including grasses and leaves.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ImpalaSerengetiNationalParkMar2011.jpg/800px-ImpalaSerengetiNationalParkMar2011.jpg"
            }
        ],
        j: [
            {
                name: "Jaguar",
                class: "Mammal",
                biome: "Rainforest",
                diet: "Carnivore",
                description: "The Jaguar is a large, carnivorous mammal that lives in the rainforests of Central and South America. They are known for their distinctive black spots and powerful jaws. They are apex predators, feeding on a variety of animals, including deer, monkeys, and fish.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg"
            },
            {
                name: "Jackal",
                class: "Mammal",
                biome: "Grassland",
                diet: "Omnivore",
                description: "The Jackal is a medium-sized mammal that lives in grasslands and savannas across Africa and Asia. They are known for their distinctive howling calls and scavenging behavior. They feed on a variety of foods, including small mammals, birds, and insects.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CANIS_ADUSTUS_dans_le_park_zoologique_de_kinshasa_%28cropped%29.jpg/800px-CANIS_ADUSTUS_dans_le_park_zoologique_de_kinshasa_%28cropped%29.jpg"
            },
            {
                name: "Jellyfish",
                class: "Invertebrate",
                biome: "Ocean",
                diet: "Carnivore",
                description: "The Jellyfish is a type of invertebrate that lives in oceans around the world. They are known for their gelatinous bodies and stinging tentacles. They feed primarily on small fish and plankton, and can be both predators and prey in marine food webs.",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Largelionsmanejellyfish.jpg"
            }
        ],

        k: [
            {
                name: "Kangaroo",
                class: "Mammal",
                biome: "Grassland",
                diet: "Herbivore",
                description: "The Kangaroo is a marsupial that lives in grassland and savanna habitats in Australia. They are known for their distinctive hopping gait and powerful hind legs. They feed primarily on grasses and other vegetation.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kangaroo_and_joey03.jpg/800px-Kangaroo_and_joey03.jpg"
            },
            {
                name: "Koala",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Koala is a small, arboreal marsupial that lives in eucalyptus forests in Australia. They are known for their fluffy ears and fuzzy appearance. They feed almost exclusively on eucalyptus leaves, and can sleep for up to 20 hours per day.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
            },
            {
                name: "Kingfisher",
                class: "Bird",
                biome: "Various",
                diet: "Carnivore",
                description: "The Kingfisher is a small, colorful bird that lives in a variety of habitats around the world, including forests, wetlands, and savannas. They are known for their distinctive bills, which are used to catch fish and other small prey. They feed on a variety of animals, including fish, insects, and small mammals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Brown-headed_Paradise-Kingfisher.jpg/800px-Brown-headed_Paradise-Kingfisher.jpg"
            }
        ],
        l: [
            {
                name: "Lion",
                class: "Mammal",
                biome: "Grassland",
                diet: "Carnivore",
                description: "The Lion is a large, carnivorous mammal that lives in grasslands and savannas across Africa. They are known for their distinctive manes and loud roars. Lions are apex predators, feeding on a variety of animals, including zebras, antelopes, and buffalo.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/800px-Lion_%28Panthera_leo%29_male_6y.jpg"
            },
            {
                name: "Lemur",
                class: "Mammal",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Lemur is a type of primate that lives in forests on the island of Madagascar. They are known for their distinctive eyes and long, furry tails. They feed on a variety of foods, including fruit, insects, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lepilemur_sahamalazensis_c.png"
            },
            {
                name: "Lynx",
                class: "Mammal",
                biome: "Forest",
                diet: "Carnivore",
                description: "The Lynx is a medium-sized wild cat that lives in forests and tundra habitats across North America and Eurasia. They are known for their short tails, tufted ears, and distinctive spotted fur. They feed on a variety of small mammals, including rabbits, rodents, and birds.",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Lynx_lynx2.jpg"
            }
        ],

        m: [
            {
                name: "Moose",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Moose is a large, herbivorous mammal that lives in forests across North America and Eurasia. They are known for their distinctive antlers and massive size. They feed on a variety of vegetation, including leaves, bark, and twigs.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/800px-Moose_superior.jpg"
            },
            {
                name: "Mongoose",
                class: "Mammal",
                biome: "Various",
                diet: "Carnivore",
                description: "The Mongoose is a small carnivorous mammal found in Africa, Asia, and southern Europe. They are known for their long, slender bodies and pointed noses. They are quick and agile predators, feeding on a variety of small animals including insects, rodents, and reptiles. Some species of mongoose are known for their ability to kill venomous snakes, using their speed and agility to avoid being bitten. They are also popular as pets, particularly in their native regions.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Galerella_sanguinea_Zoo_Praha_2011-2.jpg/800px-Galerella_sanguinea_Zoo_Praha_2011-2.jpg"
            },
            {
                name: "Manatee",
                class: "Mammal",
                biome: "Aquatic",
                diet: "Herbivore",
                description: "The Manatee is a large, aquatic mammal that lives in shallow, warm waters around the world, including the Caribbean, West Africa, and the Amazon. They are known for their gentle nature and slow movement. They are herbivores, feeding primarily on seagrass and aquatic vegetation.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Mother_manatee_and_calf.jpg/1024px-Mother_manatee_and_calf.jpg"
            }
        ],
        n: [
            {
                name: "Narwhal",
                class: "Mammal",
                biome: "Aquatic",
                diet: "Carnivore",
                description: "The Narwhal is a medium-sized, toothed whale that lives in the Arctic waters of Canada, Greenland, Norway, and Russia. They are known for their long, spiral tusks and distinctive spotted skin. They feed mainly on fish and squid.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB_%D0%B2_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg/1024px-%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB_%D0%B2_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg"
            },
            {
                name: "Newt",
                class: "Amphibian",
                biome: "Aquatic",
                diet: "Carnivore",
                description: "The Newt is a small, aquatic amphibian that lives in freshwater ponds, streams, and rivers across Europe, North America, and Asia. They are known for their bright colors and rough skin. They feed on a variety of small invertebrates, including insects and crustaceans.",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Taricha_torosa%2C_Napa_County%2C_CA.jpg/800px-Taricha_torosa%2C_Napa_County%2C_CA.jpg"
            },
            {
                name: "Nightingale",
                class: "Bird",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Nightingale is a small, songbird that lives in forests and shrublands across Europe, Asia, and Africa. They are known for their beautiful songs, which are often heard at night. They feed on a variety of insects, spiders, and berries.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Luscinia_megarhynchos_-_01.jpg/800px-Luscinia_megarhynchos_-_01.jpg"
            }
        ],

        o: [
            {
                name: "Ocelot",
                class: "Mammal",
                biome: "Forest",
                diet: "Carnivore",
                description: "The Ocelot is a small, wild cat that lives in forests and grasslands across South and Central America. They are known for their distinctive spotted fur and long tails. They feed on a variety of small mammals, including rodents, rabbits, and birds.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/800px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg"
            },
            {
                name: "Octopus",
                class: "Mollusk",
                biome: "Aquatic",
                diet: "Carnivore",
                description: "The Octopus is a soft-bodied, eight-limbed mollusk that lives in all of the world's oceans. They are known for their intelligence, ability to change color and texture, and unique body shape. They feed mainly on crustaceans, fish, and other mollusks.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Octopus3.jpg/800px-Octopus3.jpg"
            },
            {
                name: "Orangutan",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Orangutan is a large, gentle primate that lives in the rainforests of Borneo and Sumatra. They are known for their distinctive reddish-brown fur and intelligent behavior. They are herbivores, feeding mainly on fruit, leaves, and bark.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/800px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG"
            }
        ],
        p: [
            {
                name: "Platypus",
                class: "Mammal",
                biome: "Rivers, streams, and lakes in eastern Australia",
                diet: "Carnivore",
                description: "The Platypus is a unique mammal found only in eastern Australia. They are known for their unusual appearance, with a duck-like bill, webbed feet, and a beaver-like tail. They are semi-aquatic, spending much of their time in rivers, streams, and lakes, where they feed on small invertebrates and crustaceans. Platypuses are one of the few mammals that lay eggs instead of giving birth to live young, and they are also one of the few venomous mammals, with males possessing a spur on their hind legs that can deliver a painful venom to predators or rivals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Schnabeltier_1.jpg/1024px-Schnabeltier_1.jpg"
            },
            {
                name: "Porcupine",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Porcupine is a medium-sized, spiny mammal that lives in forests and grasslands across North and South America, Europe, and Asia. They are known for their sharp quills, which they use for self-defense. They feed on a variety of plants, including leaves, bark, and roots.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Crazy_eyes_the_porcupine.jpg/800px-Crazy_eyes_the_porcupine.jpg"
            },
            {
                name: "Puma",
                class: "Mammal",
                biome: "Forest",
                diet: "Carnivore",
                description: "The Puma, also known as the cougar or mountain lion, is a large wild cat that lives in the Americas. They are known for their stealthy hunting abilities and powerful physique. They feed mainly on deer, elk, and other mammals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/CMM_MountainLion.jpg"
            }
        ],

        q: [
            {
                name: "Quetzal",
                class: "Bird",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Quetzal is a colorful bird that lives in the cloud forests of Central and South America. They are known for their long, iridescent tail feathers and vibrant green and red plumage. They feed on a variety of fruits, insects, and small vertebrates.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Golden-headed_Quetzal.jpg"
            },
            {
                name: "Quokka",
                class: "Mammal",
                biome: "Grassland",
                diet: "Herbivore",
                description: "The Quokka is a small marsupial that lives on islands off the coast of Western Australia. They are known for their friendly, curious demeanor and smiling facial expression. They feed on a variety of plants, including leaves, bark, and grasses.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RottnestQuokka.jpg/1024px-RottnestQuokka.jpg"
            },
            {
                name: "Quail",
                class: "Bird",
                biome: "Grasslands, forests",
                diet: "Omnivore",
                description: "The Quail is a small bird found in grasslands and forests around the world. They are known for their plump bodies, short necks, and distinctive patterns on their feathers. They are omnivores, feeding on a variety of seeds, insects, and small animals. Some species of quail are kept as game birds for hunting, while others are popular as pets due to their gentle nature.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Brown_Quail.jpg/800px-Brown_Quail.jpg"
            }
        ],
        r: [
            {
                name: "Raccoon",
                class: "Mammal",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Raccoon is a medium-sized mammal that is native to North America. They are known for their distinctive black and white facial markings and their ability to manipulate objects with their front paws. They feed on a variety of foods, including fruit, insects, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/800px-Raccoon_in_Central_Park_%2835264%29.jpg"
            },
            {
                name: "Red Panda",
                class: "Mammal",
                biome: "Forest",
                diet: "Herbivore",
                description: "The Red Panda is a small, arboreal mammal that lives in the forests of the Himalayas and southern China. They are known for their distinctive reddish-brown fur and bushy tail. They feed mainly on bamboo, but also eat fruit, berries, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1024px-Red_Panda_%2824986761703%29.jpg"
            },
            {
                name: "Rhinoceros",
                class: "Mammal",
                biome: "Grassland",
                diet: "Herbivore",
                description: "The Rhinoceros is a large, armored mammal that is native to Africa and Asia. They are known for their distinctive horn on their snout, which is used for defense and fighting. They feed mainly on grasses, but also eat leaves, shoots, and fruits.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ceratotherium_simum_%2821922261908%29.jpg/1024px-Ceratotherium_simum_%2821922261908%29.jpg"
            }
        ],

        s: [
            {
                name: "Sloth",
                class: "Mammal",
                biome: "Rainforest",
                diet: "Herbivore",
                description: "The Sloth is a slow-moving mammal that lives in the rainforests of Central and South America. They are known for their distinctive slow movements and their tendency to sleep for up to 15 hours a day. They feed mainly on leaves, but also eat fruit and insects.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Two-toed_sloth_Costa_Rica_-_cropped.jpg/800px-Two-toed_sloth_Costa_Rica_-_cropped.jpg"
            },
            {
                name: "Spider",
                class: "Arachnid",
                biome: "Various",
                diet: "Carnivore",
                description: "Spiders are a group of arachnids that are found in a variety of biomes around the world. They are known for their ability to spin silk webs, which they use for hunting and shelter. They feed mainly on insects, but some species also eat other spiders or small vertebrates.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Australian_orb_weaver_spinning_web.jpg/800px-Australian_orb_weaver_spinning_web.jpg"
            },
            {
                name: "Squirrel",
                class: "Mammal",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Squirrel is a small to medium-sized mammal that is found in forests and other wooded areas around the world. They are known for their bushy tails and their ability to climb trees and store food in the winter. They feed on a variety of foods, including nuts, seeds, fruits, and insects.",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Callosciurus_prevostii_2zz.jpg"
            }
        ],

        t: [
            {
                name: "Tiger",
                class: "Mammal",
                biome: "Forest",
                diet: "Carnivore",
                description: "The Tiger is a large carnivorous mammal that is native to Asia. They are known for their distinctive orange fur with black stripes and their ability to swim. They feed mainly on large mammals, such as deer and wild boar.",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tiger_facial_marking_Sultan_%28T72%29_Ranthambhore_India_12.10.2014.jpg"
            },
            {
                name: "Toucan",
                class: "Bird",
                biome: "Rainforest",
                diet: "Omnivore",
                description: "The Toucan is a colorful bird that is found in the rainforests of Central and South America. They are known for their large, colorful bills, which they use for feeding and attracting mates. They feed on a variety of foods, including fruit, insects, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/04/-_panoramio_-_Basa_Roland.jpg"
            },
            {
                name: "Turkey",
                class: "Bird",
                biome: "Forest",
                diet: "Omnivore",
                description: "The Turkey is a large bird that is native to North America. They are known for their distinctive fan-shaped tail and their use in Thanksgiving dinners. They feed on a variety of foods, including seeds, insects, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg/600px-Male_wild_turkey_%28Meleagris_gallopavo%29_strutting.jpg"
            }
        ],

        u: [
            {
                name: "Uakari",
                class: "Mammal",
                biome: "Rainforest",
                diet: "Omnivore",
                description: "The Uakari is a medium-sized monkey that is found in the Amazon rainforest of South America. They are known for their distinctive bald head and their bright red face. They feed on a variety of foods, including fruit, seeds, and insects.",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Uakari_male.jpg"
            },
            {
                name: "Umbrellabird",
                class: "Bird",
                biome: "Rainforest",
                diet: "Omnivore",
                description: "The Umbrellabird is a large, black bird that is found in the rainforests of Central and South America. They are known for their distinctive umbrella-shaped crest on their head and their deep, booming call. They feed on a variety of foods, including fruit, insects, and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Cotingidae_-_Cephalopterus_penduliger.jpg"
            },
            {
                name: "Ulysses Butterfly",
                class: "Insect",
                biome: "Rainforests of northeastern Australia",
                diet: "Nectar",
                description: "The Ulysses Butterfly is a large, strikingly beautiful butterfly found in the rainforests of northeastern Australia. They are known for their bright blue wings, which shimmer in the sunlight. They feed on the nectar of various flowers and are important pollinators in their habitat. The Ulysses Butterfly is named after the hero of Homer's epic poem, The Odyssey.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/CSIRO_ScienceImage_3831_Ulysses_Butterfly.jpg/1024px-CSIRO_ScienceImage_3831_Ulysses_Butterfly.jpg"
            }
        ],
        v: [
            {
                name: "Vampire bat",
                class: "Mammal",
                biome: "Tropical and subtropical regions",
                diet: "Carnivore",
                description: "The Vampire bat is a small mammal that feeds on the blood of other animals. They are found in the tropical and subtropical regions of the Americas. They are the only mammals that feed exclusively on blood. They use their sharp teeth to make a small incision in the skin of their prey and then lap up the blood with their tongue.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Desmodus_rotundus_A_Catenazzi.jpg/800px-Desmodus_rotundus_A_Catenazzi.jpg"
            },
            {
                name: "Vulture",
                class: "Bird",
                biome: "Various",
                diet: "Carrion",
                description: "The Vulture is a bird of prey that feeds on the carcasses of dead animals. They are found in various regions around the world, from deserts to forests. They have a bald head and a sharp beak that they use to tear apart the tough skin of dead animals. Vultures play an important role in their ecosystem by cleaning up dead animals that could otherwise attract disease and pests.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Coragyps-atratus-001.jpg/800px-Coragyps-atratus-001.jpg"
            },
            {
                name: "Vicuna",
                class: "Mammal",
                biome: "High Andes Mountains in South America",
                diet: "Herbivore",
                description: "The Vicuna is a small, slender mammal found in the high Andes mountains of South America. They are known for their soft, woolly coats, which are highly prized for their warmth and softness. They are herbivores, feeding on a variety of grasses and other vegetation. Vicunas are closely related to llamas and alpacas and are an important part of the Andean ecosystem. They were once threatened with extinction due to overhunting for their wool, but conservation efforts have helped their populations recover in recent years.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg/1024px-Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg"
            }
        ],

        w: [
            {
                name: "Walrus",
                class: "Mammal",
                biome: "Arctic and Subarctic regions",
                diet: "Carnivore",
                description: "The Walrus is a large marine mammal that is found in the Arctic and Subarctic regions of the world. They are known for their long tusks and their ability to use them to haul themselves out of the water onto ice. They feed on a variety of foods, including clams, mussels, and other small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg/1024px-Pacific_Walrus_-_Bull_%288247646168%29.jpg"
            },
            {
                name: "Wombat",
                class: "Mammal",
                biome: "Grasslands and forests",
                diet: "Herbivore",
                description: "The Wombat is a small, burrowing marsupial that is found in Australia. They are known for their sturdy build and their powerful legs, which they use to dig burrows. They feed on a variety of plants, including grasses and roots.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/1024px-Vombatus_ursinus_-Maria_Island_National_Park.jpg"
            },
            {
                name: "Wildebeest",
                class: "Mammal",
                biome: "Savannas, grasslands",
                diet: "Herbivore",
                description: "The Wildebeest, also known as the Gnu, is a large mammal found in the savannas and grasslands of Africa. They are known for their distinctive appearance, with a broad, flat snout, curved horns, and a shaggy mane. They are herbivores, feeding on grasses and other vegetation, and are an important prey species for large predators like lions and hyenas. During their annual migration, herds of wildebeest can number in the millions.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg/1024px-Blue_Wildebeest%2C_Ngorongoro.jpg"
            }
        ],
        x: [
            {
                name: "Xerus",
                class: "Mammal",
                biome: "Savannas and grasslands",
                diet: "Omnivore",
                description: "The Xerus is a type of ground squirrel that is found in the savannas and grasslands of Africa. They are known for their long, sharp claws and their ability to climb trees. They are omnivores, feeding on a variety of plants and small animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Xerus_rutilus.jpg/1024px-Xerus_rutilus.jpg"
            },
            {
                name: "Xeme",
                class: "Bird",
                biome: "Arctic regions",
                diet: "Carnivore",
                description: "The Xeme, also known as the Sabine's Gull, is a bird found in the Arctic regions of Europe, Asia, and North America. They are known for their striking black and white plumage and their sharp, pointed wings. They are carnivores, feeding on small fish and invertebrates that they catch by diving into the water from the air.",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Xema_sabini_-Iceland_-swimming-8_%281%29.jpg"
            },
            {
                name: "X-ray Tetra",
                class: "Fish",
                biome: "Amazon Basin",
                diet: "Omnivore",
                description: "The X-ray Tetra is a small, freshwater fish found in the Amazon Basin in South America. They are named for their transparent bodies, which allow their internal organs to be seen, including their backbone and beating heart. They are omnivores, feeding on small invertebrates and plant matter in the wild. They are popular aquarium fish due to their striking appearance and peaceful nature.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pristella_maxillaris.jpg/800px-Pristella_maxillaris.jpg"
            }
        ],

        y: [
            {
                name: "Yellowtail",
                class: "Fish",
                biome: "Various",
                diet: "Carnivore",
                description: "The Yellowtail is a type of fish that is found in various regions around the world, including the Pacific Ocean and the Indian Ocean. They are known for their yellow tail and their strong, streamlined body. They are carnivorous, feeding on smaller fish and other marine animals.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Yellowtail_snapper_seen_from_Underwater_Tunnel_Atlantis.jpg/1024px-Yellowtail_snapper_seen_from_Underwater_Tunnel_Atlantis.jpg"
            },
            {
                name: "Yak",
                class: "Mammal",
                biome: "Mountains",
                diet: "Herbivore",
                description: "The Yak is a large, shaggy-haired mammal that is found in the mountainous regions of central Asia. They are known for their long, curved horns and their ability to survive in harsh, cold environments. They are herbivores, feeding on a variety of plants, including grasses and shrubs.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%E5%9B%9B%E5%B7%9D_%E9%98%BF%E5%9D%9D_%E7%99%BD%E7%89%A6%E7%89%9B_-_panoramio.jpg/1024px-%E5%9B%9B%E5%B7%9D_%E9%98%BF%E5%9D%9D_%E7%99%BD%E7%89%A6%E7%89%9B_-_panoramio.jpg"
            },
            {
                name: "Yellow-billed Oxpecker",
                class: "Bird",
                biome: "Savannas",
                diet: "Parasite",
                description: "The Yellow-billed Oxpecker is a bird found in the savannas of sub-Saharan Africa. They are known for their bright yellow bill and their relationship with large mammals, which they perch on and feed off of ticks and other parasites. They are considered mutualistic because they help the mammals by keeping them free of parasites.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Yellow-billed_oxpeckers_%28Buphagus_africanus_africanus%29_on_zebra.jpg/1024px-Yellow-billed_oxpeckers_%28Buphagus_africanus_africanus%29_on_zebra.jpg"
            }
        ],
        z: [
            {
                name: "Zebra",
                class: "Mammal",
                biome: "Grasslands",
                diet: "Herbivore",
                description: "The Zebra is a horse-like mammal that is found in the grasslands of Africa. They are known for their distinctive black and white striped coat, which helps them to blend into their surroundings and confuse predators. They are herbivores, feeding on a variety of grasses and other vegetation.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/399px-Plains_Zebra_Equus_quagga.jpg"
            },
            {
                name: "Zorilla",
                class: "Mammal",
                biome: "Grasslands, savannas, and forests",
                diet: "Carnivore",
                description: "The Zorilla, also known as the striped polecat, is a small mammal that is found in grasslands, savannas, and forests in Africa. They are known for their black and white striped fur and their ability to emit a strong, musky odor as a defense mechanism. They are carnivores, feeding on small mammals, birds, insects, and reptiles.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ictonyx_striatus_-_Museo_Civico_di_Storia_Naturale_Giacomo_Doria_-_Genoa%2C_Italy_-_DSC02633.JPG/1280px-Ictonyx_striatus_-_Museo_Civico_di_Storia_Naturale_Giacomo_Doria_-_Genoa%2C_Italy_-_DSC02633.JPG"
            },
            {
                name: "Zebra Shark",
                class: "Fish",
                biome: "Tropical and subtropical waters",
                diet: "Carnivore",
                description: "The Zebra Shark is a type of shark that is found in tropical and subtropical waters around the world. They are known for their black and white striped pattern, which fades as they mature. They are bottom-dwelling carnivores, feeding on a variety of small fish, crustaceans, and mollusks.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Zebra_Shark_at_Dallas_Children%27s_Aquarium.jpg/800px-Zebra_Shark_at_Dallas_Children%27s_Aquarium.jpg"
            }
        ],
        notALetter: [
            {
                name: 'unknown',
                class: 'unknown',
                biome: 'unknown',
                diet: 'unknown',
                description: "Unknown, probably because you did not enter a letter.",
                image: "https://em-content.zobj.net/thumbs/120/apple/354/thinking-face_1f914.png"
            }
        ]
    }
    let letter = userInput.value.toLowerCase()
    let animalList = document.getElementById('animal-results')
    animalList.className = ''
    animalList.innerHTML = ''

    if (animals.hasOwnProperty(letter)) {
        // loop through each animal object in the array
        for (let i = 0; i < animals[letter].length; i++) {
            let animal = animals[letter][i]

            // create a new div for the animal
            let animalDiv = document.createElement('div')
            animalDiv.classList.add('animal')

            // create a heading element for the animal name
            let animalName = document.createElement('h2')
            animalName.innerText = animal.name
            animalDiv.appendChild(animalName)

            // create an image element for the animal image
            let animalImg = document.createElement('img')
            animalImg.src = animal.image
            animalImg.alt = animal.name
            animalDiv.appendChild(animalImg)

            // create a h2 element for the animal biome
            let animalBiome = document.createElement('h2')
            animalBiome.innerText = 'Biome: ' + animal.biome
            animalDiv.appendChild(animalBiome)

            // create a h2 element for the animal biome
            let animalDiet = document.createElement('h2')
            animalDiet.innerText = 'Diet: ' + animal.diet
            animalDiv.appendChild(animalDiet)

            // create a paragraph element for the animal description
            let animalDesc = document.createElement('p')
            animalDesc.innerText = 'Description: ' + animal.description
            animalDiv.appendChild(animalDesc)

            // append the animal div to the animal list
            animalList.appendChild(animalDiv)
        }
    }
}
Array.from(thumbUp).forEach(function (element) {
    element.addEventListener('click', function (e) {
        const _id = e.target.dataset.id
        console.log(_id)
        fetch('like', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id
            })
        })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(data => {
                console.log(data)
                window.location.reload(true)
            })

    });
});
Array.from(thumbDown).forEach(function (element) {
    element.addEventListener('click', function (e) {
        const _id = e.target.dataset.id
        console.log(_id)
        fetch('unlike', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id
            })
        })
            .then(response => {
                if (response.ok) return response.json()
            })
            .then(data => {
                console.log(data)
                window.location.reload(true)
            })

    });
});

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(e){
      const _id = e.target.dataset.id
      fetch('delete', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _id
        })
      }).then(function (response) {
        window.location.reload();
      });
    });
  });