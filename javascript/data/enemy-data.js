const enemyData = {
  enemies: [
    // 237 enemies
    {
      name: "Mossgrub",
      health: 10,
      lore: {
        huntersnote:
          "Fur covered crawler with a series of sharp spikes along its back.",
        hornetnote: "If not for the spikes, I would think it an appealing bug.",
      },
      drops: {
        shards: [2, 3],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mossgrub.png",
      image: "../images/Enemies/enemy/mossgrub.png",
    },
    {
      name: "Massive Mossgrub",
      health: 80,
      lore: {
        huntersnote:
          "Unnaturally overgrown Mossgrub, bred within the Citadel's Memorium.",
        hornetnote:
          "So close to a perfect furred form... If only they'd been able to breed out the spines.",
      },
      drops: {
        shards: 7,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/massivemossgrub.png",
      image: "../images/Enemies/enemy/massivemossgrub.png",
    },
    {
      name: "Mossmir",
      health: 12,
      lore: {
        huntersnote:
          "Small fluttering creature capable of defending itself with its small stinger.",
        hornetnote:
          "This bug is soft and clumsy, but to its fortune its home caves seem relatively free of effective predators. I wonder why that is.",
      },
      drops: {
        shards: [2, 3],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mossmir.png",
      image: "../images/Enemies/enemy/mossmir.png",
    },
    {
      name: "Moss Mother",
      health: 120,
      lore: {
        huntersnote:
          "Adult Mossmir with fully developed stinger and hardened hide.",
        hornetnote:
          "Motherhood is an instinct that can push creatures beyond what seems their normal limits. It turns even weaker beasts like these into formidable foes.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mossmother.png",
      image: "../images/Enemies/enemy/mossmother.png",
    },
    {
      name: "Aknid",
      health: 15,
      lore: {
        huntersnote:
          "Winged insect that feeds upon moss and lichen in the caves above Bone Bottom.",
        hornetnote:
          "In its natural state it would avoid potential predators, but Pharloom's Haunting now compels it to aggression. Fortunately, its jaws are ill-suited for combat.",
      },
      drops: {
        shards: [2, 3],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/aknid.png",
      image: "../images/Enemies/enemy/aknid.png",
    },
    {
      name: "Skull Scuttler",
      health: 15,
      lore: {
        huntersnote:
          "Small, soft bug that uses the hard skulls of the Marrow for protection and disguise.",
        hornetnote:
          "In every land, creatures find new and surprising ways to disguise themselves. One must be wary always.",
      },
      drops: {
        shards: [2, 3],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skullscuttler.png",
      image: "../images/Enemies/enemy/skullscuttler.png",
    },
    {
      name: "Skull Wing",
      health: 15,
      lore: {
        huntersnote:
          "Airborne relative of the grounded Skull Scuttler, found only in the Marrow's deepest, hottest caves.",
        hornetnote:
          "Such feeble creatures could only survive thanks to the rarity of predators in these super-heated caverns.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skullwing.png",
      image: "../images/Enemies/enemy/skullwing.png",
    },
    {
      name: "Skull Brute",
      health: 30,
      lore: {
        huntersnote:
          "Soft bug beneath a huge, horned skull. Charges at intruders to protect its territory and its smaller companions.",
        hornetnote:
          "Either its size has made it fearless or the Haunting has removed its sense of self-preservation.",
      },
      drops: {
        shards: [7, 11],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skullbrute.png",
      image: "../images/Enemies/enemy/skullbrute.png",
    },
    {
      name: "Skull Tyrant",
      health: 450,
      lore: {
        huntersnote:
          "Rare, enormous Skull Scuttler. The Marrow's largest predator, and the most feared for its ferocious temperament.",
        hornetnote:
          "Though surely fierce, the skull it bears looks taken from an even larger beast. If not for the bones as proof, I would scarcely believe bugs could grow to such scale.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skulltyrant.png",
      image: "../images/Enemies/enemy/skulltyrant.png",
    },
    {
      name: "Kilik",
      health: 20,
      lore: {
        huntersnote:
          "Small bony bug that favours dark tunnels. Can expand its spiked carapace to ward against attacking predators.",
        hornetnote:
          "I am fond of simple, effective traps such as this bug's extendable spikes. An unwary predator would be skewered clean through.",
      },
      drops: {
        shards: [4, 5],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/kilik.png",
      image: "../images/Enemies/enemy/kilik.png",
    },
    {
      name: "Beastfly",
      health: 15,
      lore: {
        huntersnote:
          "Aggressive fly of Pharloom's lowlands. Rams prey with its hardbone mask.",
        hornetnote:
          "Dancing around this simple creature as it charges back and forth is the sort of game I delighted in as a child. Alas, I now have more pressing matters to attend to.",
      },
      drops: {
        shards: [4, 5],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/beastfly.png",
      image: "../images/Enemies/enemy/beastfly.png",
    },
    {
      name: "Savage Beastfly",
      health: 550,
      lore: {
        huntersnote:
          "Angered, adult Beastfly with a weighty body and a thickened hardshell mask.",
        hornetnote:
          "Civilisation encroaches from this kingdom's crown, but the lowlands are still ruled by great beasts. Its roar stirs something deep within me, some primal instinct.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/savagebeastfly.png",
      image: "../images/Enemies/enemy/savagebeastfly.png",
    },
    {
      name: "Caranid",
      health: 14,
      lore: {
        huntersnote:
          "Common winged bug of the lowlands. Generally docile, but will attack if threats come close.",
        hornetnote:
          "Their plump, round shape makes them well-suited for target practice. Difficult to resist testing my aim on them...",
      },
      drops: {
        shards: [4, 5],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/caranid.png",
      image: "../images/Enemies/enemy/caranid.png",
    },
    {
      name: "Vicious Caranid",
      health: 27,
      lore: {
        huntersnote:
          "Aggressively winged bug of the lowlands. When angered, it rapidly whips its bladed tail as a weapon.",
        hornetnote:
          "Its wings are quite small compared to its bulk. Perhaps it uses the warm air of these fiery lands to help stay airborne. Clever, if so.",
      },
      drops: {
        shards: [7, 8],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/viciouscaranid.png",
      image: "../images/Enemies/enemy/viciouscaranid.png",
    },
    {
      name: "Hardbone Hopper",
      health: 20,
      lore: {
        huntersnote:
          "Grazing creature with sharp senses that nimbly retreats from danger.",
        hornetnote:
          "Despite the Haunting of its shell, it has not been overcome with aggression. Its desire to flee remains too strong.",
      },
      drops: {
        shards: [4, 5],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/hardbonehopper.png",
      image: "../images/Enemies/enemy/hardbonehopper.png",
    },
    {
      name: "Hardbone Elder",
      health: 110,
      lore: {
        huntersnote:
          "Tall creature with sharp senses. Defends its herd with powerful legs and a sharp tipped mask.",
        hornetnote:
          "There is surprising strength hidden in their thin, elegant limbs. It would be a pleasure to ride upon it...",
      },
      drops: {
        shards: [6, 9],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/hardboneelder.png",
      image: "../images/Enemies/enemy/hardboneelder.png",
    },
    {
      name: "Tarmite",
      health: 25,
      lore: {
        huntersnote:
          "Flying bone mite that lives near magma. Roasts its prey by spitting scorching tar.",
        hornetnote:
          "Its sticky spit would no doubt make a useful crafting material if moulded fresh. Unfortunately, I cannot stop to experiment.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/tarmite.png",
      image: "../images/Enemies/enemy/tarmite.png",
    },
    {
      name: "Mawling",
      health: 15,
      lore: {
        huntersnote: "Young, bony bug that can curl its body to form a ball.",
        hornetnote:
          "Their rough, ridged shell grips tight to any surface. Even walls and roofs become pathways for these nimble bugs.",
      },
      drops: {
        shards: 3,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mawling.png",
      image: "../images/Enemies/enemy/mawling.png",
    },
    {
      name: "Marrowmaw",
      health: 50,
      lore: {
        huntersnote:
          "Giant roller of the lowlands. Its ridged hide will crush smaller creatures beneath it.",
        hornetnote:
          "Sheer bulk makes for an effective weapon, but requires much sustenance. This creature would have spent most of its time eating. An acceptable life for some.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/marrowmaw.png",
      image: "../images/Enemies/enemy/marrowmaw.png",
    },
    {
      name: "Hoker",
      health: 15,
      lore: {
        huntersnote: "Spine-shooting drifter of the lowlands.",
        hornetnote:
          "Whatever admiration I had for its fleecy down is spoilt by its disturbing mask... and its steely spines.",
      },
      drops: {
        shards: [4, 6],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/hoker.png",
      image: "../images/Enemies/enemy/hoker.png",
    },
    {
      name: "Flintbeetle",
      health: 95,
      lore: {
        huntersnote:
          "Rarely seen beetle that spends most of its life nestled deep in bone and rock. The flintgems on its shell excrete an explosive powder.",
        hornetnote:
          "Its bright gems could be used to make beautiful, but short-lived jewellery. An amusing idea for a gift... or a trap.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/flintbeetle.png",
      image: "../images/Enemies/enemy/flintbeetle.png",
    },
    {
      name: "Rhinogrund",
      health: 150,
      lore: {
        huntersnote:
          "Long-Horned beast of Pharloom's lowlands. Relies on its horn to both impale and to wrench the ground beneath it, flinging dangerous debris.",
        hornetnote:
          "Certain tools and skills can pierce its defences. I should adjust my strategy as needed.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/rhinogrund.png",
      image: "../images/Enemies/enemy/rhinogrund.png",
    },
    {
      name: "Gromling",
      health: 30,
      lore: {
        huntersnote:
          "Young masked worm that delights in ambushing intruders within its tunnels.",
        hornetnote:
          "A frustrating fiend. They flee beneath the bone whenever I try to strike them down.",
      },
      drops: {
        shards: [3, 4],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/gromling.png",
      image: "../images/Enemies/enemy/gromling.png",
    },
    {
      name: "Grom",
      health: 30,
      lore: {
        huntersnote:
          "Burrowing worm that uses its many blunted teeth to dig through even the hardest bone.",
        hornetnote:
          "They ceaselessly churn through rock and bone without ever seeming to rest. Do they have a destination? Or are they compelled to dig forever deeper?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/grom.png",
      image: "../images/Enemies/enemy/grom.png",
    },
    {
      name: "Bell Beast",
      health: 150,
      lore: {
        huntersnote:
          "Huge, hardbone bug that lives within and travels through the veins of old bells across Pharloom.",
        hornetnote:
          "This one has allied themself with me, either as thanks for their saving or respect for one judged as equal. Whichever the reason, their fellowship is welcome.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/bellbeast.png",
      image: "../images/Enemies/enemy/bellbeast.png",
    },
    {
      name: "Pilgrim Groveller",
      health: 20,
      lore: {
        huntersnote: "Basic bug of Pharloom, laid low upon the ground.",
        hornetnote:
          "Taken by Pharloom's Haunting, the bug is now capable of little more than prayer and aggression.",
      },
      drops: {
        shards: [2, 3],
        beads: 5,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimgroveller.png",
      image: "../images/Enemies/enemy/pilgrimgroveller.png",
    },
    {
      name: "Pilgrim Pouncer",
      health: 20,
      lore: {
        huntersnote:
          "Agile bug of Pharloom, its higher functions have been lost to the Haunting.",
        hornetnote:
          "With a softer shell than most, they would have relied on their athleticism to survive.",
      },
      drops: {
        shards: [2, 3],
        beads: 5,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimpouncer.png",
      image: "../images/Enemies/enemy/pilgrimpouncer.png",
    },
    {
      name: "Pilgrim Hornfly",
      health: 20,
      lore: {
        huntersnote:
          "Short pilgrim that uses their long horn to launch upon threats.",
        hornetnote:
          "Birth equipped this one well. In its assault it becomes its own projectile.",
      },
      drops: {
        shards: 2,
        beads: 8,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimhornfly.png",
      image: "../images/Enemies/enemy/pilgrimhornfly.png",
    },
    {
      name: "Pilgrim Hulk",
      health: 30,
      lore: {
        huntersnote:
          "Sturdy bug lost to the Haunting. Rolls at threats with no care for its own discomfort.",
        hornetnote:
          "A rare built bug within these ailing lands. Most pilgrims' shells seem small by comparison. What nourishment did they discover to grow so large?",
      },
      drops: {
        shards: 5,
        beads: 6,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimhulk.png",
      image: "../images/Enemies/enemy/pilgrimhulk.png",
    },
    {
      name: "Pilgrim Bellbearer",
      health: 20,
      lore: {
        huntersnote:
          "Common bug wielding a set of old bells. The bug will fling the bells at anyone it deems still free.",
        hornetnote:
          "Their bells would once have rung with hope and mirth, lifting the spirits of any climbing companions. Sadly, those instruments have turned purely to combative use.",
      },
      drops: {
        shards: 4,
        beads: 9,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimbellbearer.png",
      image: "../images/Enemies/enemy/pilgrimbellbearer.png",
    },
    {
      name: "Winged Pilgrim",
      health: 20,
      lore: {
        huntersnote: "Short-horned bug born with underdeveloped wings.",
        hornetnote:
          "Flight it possesses, but only just. It may lift from the stone, but those wings would never carry it far.",
      },
      drops: {
        shards: 3,
        beads: 6,
      },
      thumbnail: "../images/Enemies/thumbnail/wingedpilgrim.png",
      image: "../images/Enemies/enemy/wingedpilgrim.png",
    },
    {
      name: "Elder Pilgrim",
      health: 30,
      lore: {
        huntersnote:
          "Thick-set bug consumed by haunted thread. Uses their solid frame to crush others.",
        hornetnote:
          "A lucky bug to be able to grow old. Pharloom's roads take most much earlier.",
      },
      drops: {
        shards: 6,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/elderpilgrim.png",
      image: "../images/Enemies/enemy/elderpilgrim.png",
    },
    {
      name: "Winged Pilgrim Bellbearer",
      health: 25,
      lore: {
        huntersnote:
          "Pilgrim endowed with large wings, carrying a brace of iron bells.",
        hornetnote:
          "On uneven terrain their union of flight and range can provide a challenge even for me.",
      },
      drops: {
        shards: 2,
        beads: 6,
      },
      thumbnail: "../images/Enemies/thumbnail/wingedpilgrimbellbearer.png",
      image: "../images/Enemies/enemy/wingedpilgrimbellbearer.png",
    },
    {
      name: "Pilgrim Hiker",
      health: 50,
      lore: {
        huntersnote:
          "Hard-Shelled bug with a climber's pin. Their pin, once aid, has become a weapon, though the bug is unrefined in its use.",
        hornetnote:
          "A bug once frail, pushed by twisted thread beyond its mortal limits.",
      },
      drops: {
        shards: 4,
        beads: 14,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimhiker.png",
      image: "../images/Enemies/enemy/pilgrimhiker.png",
    },
    {
      name: "Pilgrim Guide",
      health: 24,
      lore: {
        huntersnote: "Old pilgrim carrying a heavy iron bell staff.",
        hornetnote:
          "The large bell seems to signify them as once leader of a climbing troupe, though the Haunting has erased that former authority.",
      },
      drops: {
        shards: 5,
        beads: 15,
      },
      thumbnail: "../images/Enemies/thumbnail/pilgrimguide.png",
      image: "../images/Enemies/enemy/pilgrimguide.png",
    },
    {
      name: "Overgrown Pilgrim",
      health: 23,
      lore: {
        huntersnote: "Aged pilgrim, overgrown with lichen and moss.",
        hornetnote:
          "The moss looks to grow even inside their stomach, which the pilgrim spits at foes in compressed gobs. A foul form of offence.",
      },
      drops: {
        shards: [3, 5],
        beads: 13,
      },
      thumbnail: "../images/Enemies/thumbnail/overgrownpilgrim.png",
      image: "../images/Enemies/enemy/overgrownpilgrim.png",
    },
    {
      name: "Covetous Pilgrim",
      health: 85,
      lore: {
        huntersnote:
          "Strong bug replete with rosaries. If angered they will whip their strings in a ceaseless onslaught.",
        hornetnote:
          "Is this abundance a sign of purity or greed? The way faith is measured in this land is curious indeed.",
      },
      drops: {
        shards: 0,
        beads: 60,
      },
      thumbnail: "../images/Enemies/thumbnail/covetouspilgrim.png",
      image: "../images/Enemies/enemy/covetouspilgrim.png",
    },
    {
      name: "Snitchfly",
      health: 35,
      lore: {
        huntersnote: "Pernicious looter found all over Pharloom.",
        hornetnote:
          "While these bothersome bugs are left free to forage, no loose rosary or trinket is safe.",
      },
      drops: {
        shards: 0,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/snitchfly.png",
      image: "../images/Enemies/enemy/snitchfly.png",
    },
    {
      name: "Lavalug",
      health: 15,
      lore: {
        huntersnote:
          "Sticky mollusc that defends itself by spraying burning fluid from growths on its back.",
        hornetnote:
          "What seems at first a purely defensive mechanism may also be necessary to rid this creature of excess heat.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lavalug.png",
      image: "../images/Enemies/enemy/lavalug.png",
    },
    {
      name: "Lavalarga",
      health: 85,
      lore: {
        huntersnote:
          "Fully grown mollusc able to unleash a gushing torrent of burning fluid from its back.",
        hornetnote:
          "To survive while storing so much searing fluid within... Before I would have believed it impossible, but Pharloom is home to many marvels.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lavalarga.png",
      image: "../images/Enemies/enemy/lavalarga.png",
    },
    {
      name: "Smelt Shoveller",
      health: 30,
      lore: {
        huntersnote:
          "Low level worker lost to Pharloom's haunting. Instinct keeps them at their task, though in much simpler fashion than before.",
        hornetnote:
          "This kingdom appears more advanced in metalwork than my own ever was, in great part due to the natural heat source at its base. Working in such an environment is an impressive feat.",
      },
      drops: {
        shards: [3, 5],
        beads: 7,
      },
      thumbnail: "../images/Enemies/thumbnail/smeltshoveller.png",
      image: "../images/Enemies/enemy/smeltshoveller.png",
    },
    {
      name: "Flintstone Flyer",
      health: 30,
      lore: {
        huntersnote:
          "Aerial worker lost to Pharloom's Haunting. Bears a pouch full with flintstone which they will fling at intruders.",
        hornetnote:
          "That incendiary material they carry is a natural wonder, with many potential applications. What a waste to carelessly throw it at me whenever I pass by.",
      },
      drops: {
        shards: 0,
        beads: 8,
      },
      thumbnail: "../images/Enemies/thumbnail/flintstoneflyer.png",
      image: "../images/Enemies/enemy/flintstoneflyer.png",
    },
    {
      name: "Flintflame Flyer",
      health: 60,
      lore: {
        huntersnote:
          "Brave worker carrying unstable flintflame and wearing a heavy bell to protect against potential ignition.",
        hornetnote:
          "Theirs would be a high risk life, followed by a short, searing end.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/flintflameflyer.png",
      image: "../images/Enemies/enemy/flintflameflyer.png",
    },
    {
      name: "Smokerock Sifter	",
      health: 40,
      lore: {
        huntersnote:
          "Cymbal bearing worker of the Deep Docks. Pans the hauls of smokerock to find traces of more precious minerals.",
        hornetnote:
          "The Haunting has stolen some important part of these bugs, yet still they attempt their former task. Until, that is, they sense my presence...",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/smokerocksifter.png",
      image: "../images/Enemies/enemy/smokerocksifter.png",
    },
    {
      name: "Deep Diver",
      health: 90,
      lore: {
        huntersnote:
          "Bell-clad bug responsible for mining the deeper, treacherous depths below their docks.",
        hornetnote:
          "Their heavier bells armour them well against my strikes, but against that oppressive heat... can they help at all?",
      },
      drops: {
        shards: 10,
        beads: 20,
      },
      thumbnail: "../images/Enemies/thumbnail/deepdiver.png",
      image: "../images/Enemies/enemy/deepdiver.png",
    },
    {
      name: "Forebrothers Signis and Gron",
      health: 1240,
      lore: {
        huntersnote:
          "Elder overseers of the Deep Docks, responsible for the oversight and punishment of lesser workers.",
        hornetnote:
          "Lost in the madness of the Haunting, they still commanded the endless excavation of their caves.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/forebrotherssignisandgron.png",
      image: "../images/Enemies/enemy/forebrotherssignisandgron.png",
    },
    {
      name: "Cragglite",
      health: 20,
      lore: {
        huntersnote: "Infant form of the more formidable Craggler.",
        hornetnote:
          "If left to grow, these young bugs will fight for dominance until only one remains.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cragglite.png",
      image: "../images/Enemies/enemy/cragglite.png",
    },
    {
      name: "Craggler",
      health: 200,
      lore: {
        huntersnote: "Thick-plated scuttler that prefers high places.",
        hornetnote:
          "Holds an extensive supply of searing acid in a layered sack within its shell. The acid rains from its mouth upon any creature it sees as food.",
      },
      drops: {
        shards: 25,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/craggler.png",
      image: "../images/Enemies/enemy/craggler.png",
    },
    {
      name: "Brushflit",
      health: 1,
      lore: {
        huntersnote:
          "Tiny, timid creatures that huddle in flocks and flee at the first hint of danger.",
        hornetnote:
          "They call out to their fellows at the smallest sense of threat. A successful hunt here means staying silent and hidden right up until the decisive strike.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/brushflit.png",
      image: "../images/Enemies/enemy/brushflit.png",
    },
    {
      name: "Fertid",
      health: 15,
      lore: {
        huntersnote:
          "Skittish scrambler of the Far Fields. Its antennae resemble stalks of grass to aid in camouflage.",
        hornetnote:
          "It has no means to defend itself. Its only hope for survival is to be mistaken for a plant.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/fertid.png",
      image: "../images/Enemies/enemy/fertid.png",
    },
    {
      name: "Flapping Fertid",
      health: 15,
      lore: {
        huntersnote:
          "Docile bugs whose wings mimic the grasses of the Far Fields. A common snack for larger predators.",
        hornetnote:
          "When roosting, it would look convincingly plant-like. In flight, its bulbous body quickly ruins the ruse.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/flappingfertid.png",
      image: "../images/Enemies/enemy/flappingfertid.png",
    },
    {
      name: "Fourth Chorus",
      health: 500,
      lore: {
        huntersnote: "Towering iron automaton, driven by rotor and cog.",
        hornetnote:
          "A terrifying achievement of Pharloom, to build a construct so large and yet so nimble.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/fourthchorus.png",
      image: "../images/Enemies/enemy/fourthchorus.png",
    },
    {
      name: "Skarrlid",
      health: 20,
      lore: {
        huntersnote: "Small burrowing ant, servant to the larger Skarr.",
        hornetnote:
          "These bugs work mainly as finders and foragers for the warriors of their tribe. Combat has not long been their nature.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrlid.png",
      image: "../images/Enemies/enemy/skarrlid.png",
    },
    {
      name: "Skarrwing",
      health: 20,
      lore: {
        huntersnote:
          "Darting predator that clings fast to roofs and outcrops, often summoned to aid its larger companions.",
        hornetnote:
          "They would make effective hunting companions, though even without the Haunting I suspect their loyalty would always remain to their clan.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrwing.png",
      image: "../images/Enemies/enemy/skarrwing.png",
    },
    {
      name: "Skarr Scout",
      health: 30,
      lore: {
        huntersnote:
          "Young ant hunter wielding sickles carved from teeth. Will often call for aid if danger comes close.",
        hornetnote:
          "Despite their youth, they are impressive opponents. It seems likely their tribe were trained for combat from birth.",
      },
      drops: {
        shards: 0,
        beads: 13,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrscout.png",
      image: "../images/Enemies/enemy/skarrscout.png",
    },
    {
      name: "Skarr Stalker",
      health: 75,
      lore: {
        huntersnote:
          "Skilled ant hunter bearing blade and armour fashioned from bone.",
        hornetnote:
          "Fierce, strong and disciplined... yet these qualities do not protect them from the Haunting. Is such a fate inevitable in these lands?",
      },
      drops: {
        shards: 0,
        beads: 25,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrstalker.png",
      image: "../images/Enemies/enemy/skarrstalker.png",
    },
    {
      name: "Spear Skarr",
      health: 75,
      lore: {
        huntersnote:
          "Winged ant hunter that strikes from the air with its bone lance.",
        hornetnote:
          "In my youth, I envied all bugs with wings. I even fancied I might grow a pair... I have since learned better. Accept the limitations of one's body... and augment with tools as needed.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/spearskarr.png",
      image: "../images/Enemies/enemy/spearskarr.png",
    },
    {
      name: "Skarrgard",
      health: 150,
      lore: {
        huntersnote:
          "Huge ant hunter tasked to protect the stores and passages of its tribe.",
        hornetnote:
          "Theirs is the perfect shell for their duty, a wall of a warrior and an adept fighter. If I hope to claim their treasures, I must bring my best.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrgard.png",
      image: "../images/Enemies/enemy/skarrgard.png",
    },
    {
      name: "Gurr the Outcast",
      health: 1000,
      lore: {
        huntersnote:
          "Huge, yet stealthy Skarr. An expert trapper and master of the undergrowth.",
        hornetnote:
          "His tracks and traps... It should have been obvious from the start, this old hunter sought to draw me in. But what reason drove him to test himself so brutally? That answer I suspect I shall never know.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/gurrtheoutcast.png",
      image: "../images/Enemies/enemy/gurrtheoutcast.png",
    },
    {
      name: "Last Claw",
      health: 130,
      lore: {
        huntersnote:
          "Elite former hunter acting as the final line of defence before their mother.",
        hornetnote:
          "Their skill once saw them chosen, and I can plainly see why. They would have lived and trained only for this duty.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lastclaw.png",
      image: "../images/Enemies/enemy/lastclaw.png",
    },
    {
      name: "Skarrsinger Karmelita",
      health: 1500,
      lore: {
        huntersnote: "Song queen of the Skarr and their most talented warrior.",
        hornetnote:
          "This graceful ruler once possessed skill to rival my own. At her youthful peak, her voice united all Skarr in her service.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skarrsingerkarmelita.png",
      image: "../images/Enemies/enemy/skarrsingerkarmelita.png",
    },
    {
      name: "Mite",
      health: 15,
      lore: {
        huntersnote:
          "Verminous pest, common throughout the dark corners of Greymoor.",
        hornetnote:
          "Individually they offer little challenge, but their numbers are surely vast, and most remain hidden.",
      },
      drops: {
        shards: 3,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mite.png",
      image: "../images/Enemies/enemy/mite.png",
    },
    {
      name: "Fluttermite",
      health: 15,
      lore: {
        huntersnote:
          "Airborne pest, less common than its grounded siblings. Attacks with sharp fangs if agitated.",
        hornetnote:
          "Similar bugs would gnaw away at unguarded food supplies in my homeland. As a child, I would hunt them, eager to make use of myself and test my skills.",
      },
      drops: {
        shards: 3,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/fluttermite.png",
      image: "../images/Enemies/enemy/fluttermite.png",
    },
    {
      name: "Mitemother",
      health: 60,
      lore: {
        huntersnote:
          "Aged female mite, grown larger and stronger than most of its kin.",
        hornetnote:
          "Poor of sight but possessing a keen sense of smell, it uses its bulk to charge at foreign scents. Remaining fierce so far into old age is an admirable trait.",
      },
      drops: {
        shards: 10,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mitemother.png",
      image: "../images/Enemies/enemy/mitemother.png",
    },
    {
      name: "Dreg Catcher",
      health: 21,
      lore: {
        huntersnote:
          "Bug charged to catch dregs of Silk that fall from the Citadel. Will attack with its staff if provoked.",
        hornetnote:
          "These bugs look to have spent every waking moment at their work. Grim, endless labour in service of the unseen Citadel above.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/dregcatcher.png",
      image: "../images/Enemies/enemy/dregcatcher.png",
    },
    {
      name: "Silk Snipper",
      health: 29,
      lore: {
        huntersnote:
          "Scissor-wielding bug charged to cut and spool fallen dregs of Silk for return to the Citadel above.",
        hornetnote:
          "Is it the Haunting that drove them to cackling madness, or was their unending toil the cause even before that?",
      },
      drops: {
        shards: 5,
        beads: 18,
      },
      thumbnail: "../images/Enemies/thumbnail/silksnipper.png",
      image: "../images/Enemies/enemy/silksnipper.png",
    },
    {
      name: "Thread Raker",
      health: 50,
      lore: {
        huntersnote:
          "Tall bug charged to pile Silk dregs in preparation for respooling. Their sharp rake now doubles equally well as a stabbing weapon.",
        hornetnote:
          "Theirs seems a sad, grueling task, serving their lifetime for a Citadel unseen.",
      },
      drops: {
        shards: 8,
        beads: 19,
      },
      thumbnail: "../images/Enemies/thumbnail/threadraker.png",
      image: "../images/Enemies/enemy/threadraker.png",
    },
    {
      name: "Moorwing",
      health: 600,
      lore: {
        huntersnote:
          "Winged mite-beast, bred large to catch workers who once tried to flee their tasks.",
        hornetnote:
          "With its wranglers long dead, the Moorwing stalked the towers of Greymoor, feasting on passing pilgrims and tenders alike.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/moorwing.png",
      image: "../images/Enemies/enemy/moorwing.png",
    },
    {
      name: "Wisp",
      health: 0,
      lore: {
        huntersnote: "Short-lived sprite born of flickering flame.",
        hornetnote:
          "To live only a single, bright moment... What would one feel? Is it glorious, or only despair? Or could it be both, mixed equal?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/wisp.png",
      image: "../images/Enemies/enemy/wisp.png",
    },
    {
      name: "Burning Bug",
      health: 90,
      lore: {
        huntersnote: "Many-legged insect fanatically obsessed with flame.",
        hornetnote:
          "These ones somehow learnt to call and guide the scorching Wisps that share their thicket. Whether through dominance or reverence is unclear.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/burningbug.png",
      image: "../images/Enemies/enemy/burningbug.png",
    },
    {
      name: "Father of the Flame",
      health: 640,
      lore: {
        huntersnote: "Totem and god, built and worshipped by the Burning Bugs.",
        hornetnote:
          "The remains of an aged bug were housed at the pyre's heart. The structure suggested they wished for immolation. If so, I have seen their wish granted.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/fatheroftheflame.png",
      image: "../images/Enemies/enemy/fatheroftheflame.png",
    },
    {
      name: "Craw",
      health: 20,
      lore: {
        huntersnote:
          "Screeching scavenger that roosts high in caverns and preys on passing pilgrims.",
        hornetnote:
          "By this swooping menace, a simple bug could be easily overcome. More dangerous still, they rarely attack alone.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/craw.png",
      image: "../images/Enemies/enemy/craw.png",
    },
    {
      name: "Tallcraw",
      health: 50,
      lore: {
        huntersnote: "Rag-winged adult crawbug bearing a scavenged pin.",
        hornetnote:
          "Far more hostile than their younger companions but seemingly less likely to roam far from their nest.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/tallcraw.png",
      image: "../images/Enemies/enemy/tallcraw.png",
    },
    {
      name: "Squatcraw",
      health: 50,
      lore: {
        huntersnote: "Stout adult crawbug bearing several short pins.",
        hornetnote:
          "A cowardly sort. They will try to remain at range to throw their sharp weapons. Best to rush them down and cut quick.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/squatcraw.png",
      image: "../images/Enemies/enemy/squatcraw.png",
    },
    {
      name: "Craw Juror",
      health: 50,
      lore: {
        huntersnote:
          "Screeching scavenger dyed black in mourning at their land's collapse.",
        hornetnote:
          "Weak, afraid, and aware of the imminent end. I understand their desperation, but my death will not prevent the coming fall.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/crawjuror.png",
      image: "../images/Enemies/enemy/crawjuror.png",
    },
    {
      name: "Tallcraw Juror",
      health: 60,
      lore: {
        huntersnote: "Elder crawbug serving in a sacred ceremony.",
        hornetnote:
          "Curiosity saw me answer their summons, but I shall not allow them to stall me long. I must work fast to fix my grand mistake.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/tallcrawjuror.png",
      image: "../images/Enemies/enemy/tallcrawjuror.png",
    },
    {
      name: "Squatcraw Juror",
      health: 60,
      lore: {
        huntersnote: "Short elder crawbug eagerly serving in their court.",
        hornetnote:
          "They seek to slay their only chance at survival. Alas, any words would fall useless. I have only my blade to offer response.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/squatcrawjuror.png",
      image: "../images/Enemies/enemy/squatcrawjuror.png",
    },
    {
      name: "Crawfather",
      health: 1300,
      lore: {
        huntersnote:
          "Lord and justice of Pharloom's craws. Delivers death to condemned bugs with his steel-plated beak.",
        hornetnote:
          "Did he recognise my part played in this land's void-strung state? If so, perhaps his judgment was not unfair. To these bugs I have brought much destruction.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/crawfather.png",
      image: "../images/Enemies/enemy/crawfather.png",
    },
    {
      name: "Muckmaggot",
      health: 0,
      lore: {
        huntersnote: "Mindless infant larva, coated in a thick slime.",
        hornetnote:
          "They cling fast to the shells of other bugs, destroying any hope for concentration or comfort.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/muckmaggot.png",
      image: "../images/Enemies/enemy/muckmaggot.png",
    },
    {
      name: "Slubberlug",
      health: 22,
      lore: {
        huntersnote:
          "Younger form of a Muckroach. Attacks prey by leaping from the water and snapping with its flexible jaws.",
        hornetnote:
          "These creatures look to have been bred deliberately in watery pens. If they are food to be, their scent suggests they must taste vile.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/slubberlug.png",
      image: "../images/Enemies/enemy/slubberlug.png",
    },
    {
      name: "Muckroach",
      health: 50,
      lore: {
        huntersnote:
          "Starved pack bug with an insatiable appetite. Despite their tough hide and pungent meat, roaches breed rapidly so are sometimes farmed for food.",
        hornetnote:
          "A revolting creature. My shell itches at their presence. In the pens where their numbers grow vast, I am forever on edge.",
      },
      drops: {
        shards: 5,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/muckroach.png",
      image: "../images/Enemies/enemy/muckroach.png",
    },
    {
      name: "Bloatroach",
      health: 80,
      lore: {
        huntersnote:
          "Obese offshoot of the Muckroaches, born of the Citadel's exhaust smog. The winged roach's sagging stomach is filled with sizzling bile.",
        hornetnote:
          "Its form is absurd... Surely it would not be able to hold itself in the air? The noxious gasses in its stomach must provide its levity.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/bloatroach.png",
      image: "../images/Enemies/enemy/bloatroach.png",
    },
    {
      name: "Roachcatcher",
      health: 40,
      lore: {
        huntersnote:
          "Short, nimble bug who uses bolas to keep beasts corralled and caged.",
        hornetnote:
          "Their throwing weapon is well-suited to the wide caverns they inhabit. These sly little bugs have a keen claw for crafting.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/roachcatcher.png",
      image: "../images/Enemies/enemy/roachcatcher.png",
    },
    {
      name: "Roachfeeder",
      health: 45,
      lore: {
        huntersnote:
          "Tall roach tender charged to feed Muckroaches on a lean diet of maggot gruel.",
        hornetnote:
          "The feeder's curled pin looks designed to keep ravenous roaches at bay, and the tender from turning into the meal.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/roachfeeder.png",
      image: "../images/Enemies/enemy/roachfeeder.png",
    },
    {
      name: "Roachkeeper",
      health: 100,
      lore: {
        huntersnote:
          "Grizzled older roach tender weighted with a lasso of heavy chain.",
        hornetnote:
          "Though their mind is largely lost their skill with a chain has not been forgotten. Does the Haunting eternally bind a bug to the task it had in life?",
      },
      drops: {
        shards: 4,
        beads: 20,
      },
      thumbnail: "../images/Enemies/thumbnail/roachkeeper.png",
      image: "../images/Enemies/enemy/roachkeeper.png",
    },
    {
      name: "Roachserver",
      health: 60,
      lore: {
        huntersnote:
          "Brutish cook responsible for dicing Muckroach meat into edible portions.",
        hornetnote:
          "Could their actions be called skill? I see only a crude mangling of meat. Yet I wonder, before the Haunting snared their minds was it any different?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/roachserver.png",
      image: "../images/Enemies/enemy/roachserver.png",
    },
    {
      name: "Disgraced Chef Lugoli",
      health: 600,
      lore: {
        huntersnote:
          "Once exulted chef, exiled from the Citadel for repeated culinary crimes",
        hornetnote:
          "Returned to their home caves, this chef continued to devise delicacies too repulsive for any bug still sane.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/disgracedcheflugoli.png",
      image: "../images/Enemies/enemy/disgracedcheflugoli.png",
    },
    {
      name: "Wraith",
      health: 45,
      lore: {
        huntersnote:
          "Anguished spectre of lingering thread. Despite its ephemeral nature, strong strikes can dispel the Wraith for a time.",
        hornetnote:
          "Not a bug but a projection of another's will in smog and Silk.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/wraith.png",
      image: "../images/Enemies/enemy/wraith.png",
    },
    {
      name: "Mothleaf Lagnia",
      health: 1,
      lore: {
        huntersnote:
          "A rare, calmer bug of Bilewater, survives its hazardous surroundings by hiding as a plant.",
        hornetnote:
          "This one is pretty, but not as soft as it first seems. The plant it mimics is flaked and coarse, and the bug's coat shares similar texture.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mothleaflagnia.png",
      image: "../images/Enemies/enemy/mothleaflagnia.png",
    },
    {
      name: "Miremite",
      health: 30,
      lore: {
        huntersnote:
          "Crawling insect with a sizzling bile sack in its abdomen.",
        hornetnote:
          "The threat of its exploding rear is an effective deterrent to predators, but the slightest jolt or fall can cause its premature end.",
      },
      drops: {
        shards: 5,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/miremite.png",
      image: "../images/Enemies/enemy/miremite.png",
    },
    {
      name: "Swamp Squit",
      health: 35,
      lore: {
        huntersnote:
          "Plentiful pest with a sharp proboscis and a belly full of bile.",
        hornetnote:
          "More dangerous in the moment of its explosive and corrosive death than it ever was in life.",
      },
      drops: {
        shards: 3,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/swampSquit.png",
      image: "../images/Enemies/enemy/swampSquit.png",
    },
    {
      name: "Spit Squit",
      health: 55,
      lore: {
        huntersnote:
          "Hovering pest with a hollowed proboscis able to spit gobs of sizzling bile.",
        hornetnote:
          "To subsist on the sickly water in this fetid environment it spits out the most toxic elements. Over generations, this former survival technique has turned into an effective hunting tool.",
      },
      drops: {
        shards: 2,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/spitSquit.png",
      image: "../images/Enemies/enemy/spitSquit.png",
    },
    {
      name: "Stilkin",
      health: 45,
      lore: {
        huntersnote:
          "Cunning bug that hunts with darts fashioned from stake and bile.",
        hornetnote:
          "They know well their domain, lurking in wait in its byways and bogs, always ready to pounce.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/stilkin.png",
      image: "../images/Enemies/enemy/stilkin.png",
    },
    {
      name: "Stilkin Trapper",
      health: 45,
      lore: {
        huntersnote:
          "Trap setting bug carrying a pouch of sharpened long-stakes.",
        hornetnote:
          "More bother than the bug themself are the countless traps they have already laid throughout their caves.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/stilkinTrapper.png",
      image: "../images/Enemies/enemy/stilkinTrapper.png",
    },
    {
      name: "Groal the Great",
      health: 650,
      lore: {
        huntersnote:
          "Chief and chaplain of the Stilkin, forever raging against the Citadel that chokes their caves and sees them suffer.",
        hornetnote:
          "This one's strength was much enhanced by stolen soul. They are not the first who tried to hoard it, or to mould it towards such violent ends.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/groalthegreat.png",
      image: "../images/Enemies/enemy/groalthegreat.png",
    },
    {
      name: "Barnak",
      health: 35,
      lore: {
        huntersnote:
          "Toothy growth that lives on cave roofs. Wraps wayward bugs with its long tongue and drags them up to be consumed.",
        hornetnote:
          "Hiding its tongue amongst fronds so similar... There is impressive style to this one's trickery.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/barnak.png",
      image: "../images/Enemies/enemy/barnak.png",
    },
    {
      name: "Ductsucker",
      health: 100,
      lore: {
        huntersnote:
          "Suction creature surviving on the thick slime that coats its caves.",
        hornetnote:
          "This mindless bug seems to sense only through its tendrils, yet despite that simplicity it still poses a serious threat.",
      },
      drops: {
        shards: 12,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/ductsucker.png",
      image: "../images/Enemies/enemy/ductsucker.png",
    },
    {
      name: "Pond Skipper",
      health: 15,
      lore: {
        huntersnote:
          "Hard-shelled insect common upon the surface of Shellwood Pond. Once a staple food for passing pilgrims.",
        hornetnote:
          "The way they skate along the water's surface is so elegant. Surely it is a skill that can be learned? When time permits, I should attempt the task.",
      },
      drops: {
        shards: 3,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pondskipper.png",
      image: "../images/Enemies/enemy/pondskipper.png",
    },
    {
      name: "Pondcatcher",
      health: 25,
      lore: {
        huntersnote:
          "Old catcher over Shellwood Pond, bearing a longpin and stricken by the Haunting.",
        hornetnote:
          "Once a hunter purely for food, now they hunt unthinking and unending.",
      },
      drops: {
        shards: 4,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/pondcatcher.png",
      image: "../images/Enemies/enemy/pondcatcher.png",
    },
    {
      name: "Shellwood Gnat",
      health: 25,
      lore: {
        huntersnote:
          "Tiny, soft creature that armours itself using the hard, hollow growths of Shellwood.",
        hornetnote:
          "If the woody hide is shattered, the bug will still bravely, foolishly try to attack.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shellwoodgnat.png",
      image: "../images/Enemies/enemy/shellwoodgnat.png",
    },
    {
      name: "Wood Wasp",
      health: 15,
      lore: {
        huntersnote:
          "Pointed, darting insect that builds a hardy hive from Shellwood's dried bark.",
        hornetnote:
          "Destroying the hives will limit their presence in the wood. Useful to me now, as I pass along the branches. Dangerous in time for the wood's order. Even a small disruption can tip a fragile balance.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/woodwasp.png",
      image: "../images/Enemies/enemy/woodwasp.png",
    },
    {
      name: "Splinter",
      health: 25,
      lore: {
        huntersnote:
          "Insect formed to imitate a branch, capable of remaining perfectly still for long periods, but unexpectedly Swift when roused.",
        hornetnote:
          "Avoiding their ambush is a good test of my senses, and my ability to rapidly retaliate.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/splinter.png",
      image: "../images/Enemies/enemy/splinter.png",
    },
    {
      name: "Splinterhorn",
      health: 25,
      lore: {
        huntersnote:
          "Insect formed to imitate a branch, born with sharp, retractable horns atop its head.",
        hornetnote:
          "Its shell gives it the advantage of surprise, but also forces it into a slender, brittle shape that cannot withstand a heavy attack.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/splinterhorn.png",
      image: "../images/Enemies/enemy/splinterhorn.png",
    },
    {
      name: "Splinterbark",
      health: 15,
      lore: {
        huntersnote:
          "Winged insect with a flaky shell that perfectly mimics its environment.",
        hornetnote:
          "Its assault... like a young bug's toy turned deadly. Could I, in time, fashion a spinning tool to match?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/splinterbark.png",
      image: "../images/Enemies/enemy/splinterbark.png",
    },
    {
      name: "Sister Splinter",
      health: 310,
      lore: {
        huntersnote:
          "Imposing old insect nesting in the heights of Shellwood. Her command of twig and branch ensured no pilgrim ever survived her territory.",
        hornetnote:
          "This one lived long and fed much. The wood will be much safer for their slaying.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/sistersplinter.png",
      image: "../images/Enemies/enemy/sistersplinter.png",
    },
    {
      name: "Phacia",
      health: 15,
      lore: {
        huntersnote:
          "Drifting bug disguised as a flower. Disperses crackling clouds of pollen if threatened.",
        hornetnote:
          "Quite a beautiful creature. In my own kingdom's court, it would have been highly favoured as an ornamental pet.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/phacia.png",
      image: "../images/Enemies/enemy/phacia.png",
    },
    {
      name: "Pollenica",
      health: 20,
      lore: {
        huntersnote:
          "Floral foe that reacts instinctively to movement nearby. Spits pellets of crackling pollen that burst on impact.",
        hornetnote:
          "What exceptional senses it possesses. It detects me with ease, even when not a single sound is made.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pollenica.png",
      image: "../images/Enemies/enemy/pollenica.png",
    },
    {
      name: "Gahlia",
      health: 20,
      lore: {
        huntersnote:
          "Floral foe with a core shaped to mimic a mask. The core can be thrust forth to bludgeon unwary bugs.",
        hornetnote:
          "The false mask alone is frightening enough to scare away smaller pests.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/gahlia.png",
      image: "../images/Enemies/enemy/gahlia.png",
    },
    {
      name: "Shrine Guardian Seth",
      health: 1185,
      lore: {
        huntersnote:
          "Eternal defender of the Shellwood Shrine. His pin and cymbal show many marks of their use.",
        hornetnote:
          "He offered fair warning and challenge, a duel in the purest sense. I admire his honour, and his skill.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shrineguardianseth.png",
      image: "../images/Enemies/enemy/shrineguardianseth.png",
    },
    {
      name: "Nyleth",
      health: 1250,
      lore: {
        huntersnote:
          "Ancient heart of Shellwood, connected to all its living things.",
        hornetnote:
          "Her presence would once have maintained the wood's fragile order, allowing the safe passage of bugs across its branches.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/nyleth.png",
      image: "../images/Enemies/enemy/nyleth.png",
    },
    {
      name: "Furm",
      health: 20,
      lore: {
        huntersnote:
          "Burrower that nests in the Bellvein and seeks out hard bells to protect its soft body.",
        hornetnote:
          "I would very much like to feel their soft fur, if only they weren't so hostile.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/furm.png",
      image: "../images/Enemies/enemy/furm.png",
    },
    {
      name: "Winged Furm",
      health: 30,
      lore: {
        huntersnote:
          "Furred bug beneath a heavy bell. It has grown too large to burrow, but in maturing has developed small wings.",
        hornetnote:
          "Huge and soft, a fantastic combination ruined by their haunted aggression.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/wingedfurm.png",
      image: "../images/Enemies/enemy/wingedfurm.png",
    },
    {
      name: "Pharlid",
      health: 25,
      lore: {
        huntersnote:
          "Small arachnid found in many crevices and caves throughout Pharloom.",
        hornetnote:
          "Something in their assault reminds me of my own skill, though their talents are born purely of instinct. My technique is formed from hard training.",
      },
      drops: {
        shards: 5,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pharlid.png",
      image: "../images/Enemies/enemy/pharlid.png",
    },
    {
      name: "Pharlid Diver",
      health: 25,
      lore: {
        huntersnote:
          "Arachnid that nestles within dark holes in cavern roofs. Pounces on prey from far above.",
        hornetnote:
          "A smart hunter learns to wait long in ambush, always ready to strike the first blow.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pharliddiver.png",
      image: "../images/Enemies/enemy/pharliddiver.png",
    },
    {
      name: "Shardillard",
      health: 50,
      lore: {
        huntersnote: "Devious ambusher that poses as a fossil.",
        hornetnote:
          "Once roused, the bug will crash its steely shell into walls, floors and foes.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shardillard.png",
      image: "../images/Enemies/enemy/shardillard.png",
    },
    {
      name: "Sandcarver",
      health: 0,
      lore: {
        huntersnote:
          "Shell plated worm that lives beneath pools of shifting sand.",
        hornetnote:
          "Bursts forth at movement sensed close, and will consume any object or bug careless enough to fall into its maw.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/sandcarver.png",
      image: "../images/Enemies/enemy/sandcarver.png",
    },
    {
      name: "Squirrm",
      health: 12,
      lore: {
        huntersnote: "Wriggling young grub that lives in darkness.",
        hornetnote:
          "If allowed the opportunity, these creatures will grow into a form larger and more oppressive.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/squirrm.png",
      image: "../images/Enemies/enemy/squirrm.png",
    },
    {
      name: "Judge",
      health: 75,
      lore: {
        huntersnote:
          "Gilded guardian of the Blasted Steps, bearing a cymbal and mallet.",
        hornetnote:
          "They remorselessly eliminate any pilgrim or passerby deemed impure to their sight. The countless husks, strewn on paths beside them, tell of their conclusive decisions.",
      },
      drops: {
        shards: 7,
        beads: 19,
      },
      thumbnail: "../images/Enemies/thumbnail/judge.png",
      image: "../images/Enemies/enemy/judge.png",
    },
    {
      name: "Last Judge",
      health: 720,
      lore: {
        huntersnote:
          "Final arbiter of the Blasted Steps, tasked to ensure only the sinless ever step beyond the Grand Gate.",
        hornetnote:
          "The huge Judge likely stood through countless generations, never defeated, never wavering in their charge.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lastjudge.png",
      image: "../images/Enemies/enemy/lastjudge.png",
    },
    {
      name: "Coral Furm",
      health: 45,
      lore: {
        huntersnote:
          "Dark-furred bug protecting itself with a spiked coral nut.",
        hornetnote:
          "Its fur is thick and silky. Sadly, lost to its Haunting, I shall never safely be able to touch it.",
      },
      drops: {
        shards: 4,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/coralfurm.png",
      image: "../images/Enemies/enemy/coralfurm.png",
    },
    {
      name: "Driznit",
      health: 29,
      lore: {
        huntersnote:
          "Nesting creature that fuses its face with sharpened coral.",
        hornetnote:
          "It is easy to be caught off-guard by the ricocheting trajectory of its flung mask, especially in tight corners.",
      },
      drops: {
        shards: 5,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/driznit.png",
      image: "../images/Enemies/enemy/driznit.png",
    },
    {
      name: "Driznarga",
      health: 55,
      lore: {
        huntersnote:
          "Large male Driznit, ferocious and territorial. Fires its heavy coral mask at intruders.",
        hornetnote:
          "A fine shot with its sharp mask. Its aggression has no ill effect on its aim.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/driznarga.png",
      image: "../images/Enemies/enemy/driznarga.png",
    },
    {
      name: "Pokenabbin",
      health: 45,
      lore: {
        huntersnote:
          "Drifting creature with a wide coral mask and hard proboscis to stab its prey.",
        hornetnote:
          "Passively waits for prey to blunder into its path. A technique that should not necessarily be derided. Whatever is effective is best.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pokenabbin.png",
      image: "../images/Enemies/enemy/pokenabbin.png",
    },
    {
      name: "Conchfly",
      health: 45,
      lore: {
        huntersnote:
          "Small bug that crafts a shell of sharpened coral. Spins its shell at rapid speed to cut through crust and bone.",
        hornetnote:
          "The way it darts in and out of the ground has an almost playful quality to it. An amusing and effective way to ambush prey.",
      },
      drops: {
        shards: 6,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/conchfly.png",
      image: "../images/Enemies/enemy/conchfly.png",
    },
    {
      name: "Great Conchfly",
      health: 400,
      lore: {
        huntersnote:
          "Elder Conchfly crowned with a huge coral horn. Once partnered with a mate, they will rarely be seen alone.",
        hornetnote:
          "To pair with another is a base instinct, and one that brings some bugs great joy. I once sought similar union, but of my own mates none could match my lifespan.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/greatconchfly.png",
      image: "../images/Enemies/enemy/greatconchfly.png",
    },
    {
      name: "Crustcrawler",
      health: 25,
      lore: {
        huntersnote: "Soft-shelled scrambler encased in coral.",
        hornetnote:
          "Hidden amongst their tower's matching crust, these smaller bugs would have survived and thrived.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/crustcrawler.png",
      image: "../images/Enemies/enemy/crustcrawler.png",
    },
    {
      name: "Crustcrag",
      health: 80,
      lore: {
        huntersnote:
          "Coral hulk with a dense shell, bred to immense size by the Citadel's Memorium.",
        hornetnote:
          "Nature distorted... This bug was born tiny and mild. The Citadel deformed it in futile hope it may sustain.",
      },
      drops: {
        shards: 7,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/crustcrag.png",
      image: "../images/Enemies/enemy/crustcrag.png",
    },
    {
      name: "Kai",
      health: 5,
      lore: {
        huntersnote: "Plump, plentiful drifter of a coral past.",
        hornetnote:
          "They once teemed around their tower, in numbers immense. It is a rare chance to witness such a bountiful display of life.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/kai.png",
      image: "../images/Enemies/enemy/kai.png",
    },
    {
      name: "Spinebeak Kai",
      health: 5,
      lore: {
        huntersnote:
          "Steel horned floater, able to defend itself and its companions.",
        hornetnote:
          "A critical member of the larger flock. Without them present the Kai would be fast driven to extinction by larger predators.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/spinebeakkai.png",
      image: "../images/Enemies/enemy/spinebeakkai.png",
    },
    {
      name: "Steelspine Kai",
      health: 5,
      lore: {
        huntersnote:
          "Toughened Kai capable of extending sharp spikes from within its shellsack.",
        hornetnote:
          "Seeming soft, but hiding a sharp surprise. Any larger predator attempting a bite would learn a pointed and painful lesson.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/steelspinekai.png",
      image: "../images/Enemies/enemy/steelspinekai.png",
    },
    {
      name: "Yuma",
      health: 5,
      lore: {
        huntersnote:
          "Gelatinous coral drifter of simple mind and placid demeanour.",
        hornetnote:
          "A creature at its most basic. This one is no threat to me, or any other.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/yuma.png",
      image: "../images/Enemies/enemy/yuma.png",
    },
    {
      name: "Yumama",
      health: 75,
      lore: {
        huntersnote:
          "Large, gelatinous drifter. Chases away threats by hurling its bulk around.",
        hornetnote:
          "When defeated, it splits into many smaller forms. Yet another remarkable creature of this land before the monarch.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/yumama.png",
      image: "../images/Enemies/enemy/yumama.png",
    },
    {
      name: "Karaka",
      health: 90,
      lore: {
        huntersnote:
          "Staunch and skilled bladebug of a once flourishing land lost to time.",
        hornetnote:
          "The core member of a powerful order, trained fearless and faithful. Theirs was a kingdom of warriors, one built upon their blades.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/karaka.png",
      image: "../images/Enemies/enemy/karaka.png",
    },
    {
      name: "Kakri",
      health: 60,
      lore: {
        huntersnote:
          "Lithe, winged scouts frequently paired with their heavier brethren.",
        hornetnote:
          "Its training resembles my own, favouring fast strikes and rapid movement. Once a hunter, perhaps?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/kakri.png",
      image: "../images/Enemies/enemy/kakri.png",
    },
    {
      name: "Yago",
      health: 60,
      lore: {
        huntersnote:
          "Wide-masked aerial attacker trained to act as support for its grounded companions while remaining at range.",
        hornetnote:
          "Not a frontline force, but in my assault upon their tower all emerge to see me stilled.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/yago.png",
      image: "../images/Enemies/enemy/yago.png",
    },
    {
      name: "Karak Gor",
      health: 140,
      lore: {
        huntersnote:
          "Heavy, hard-shelled charger relying on weight and strength.",
        hornetnote:
          "Far tougher for being matched inside their encrusted domain. They must have lived their whole lives within their tower, to command it so.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/karakgor.png",
      image: "../images/Enemies/enemy/karakgor.png",
    },
    {
      name: "Alita",
      health: 80,
      lore: {
        huntersnote:
          "Leaping hunter of a bygone age. The swiftest of their sect, deftly skilled with spinning foreblades.",
        hornetnote:
          "In contests of speed against strength, I have seen the swift more often triumphant, a lesson I have taken to my own heart.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/alita.png",
      image: "../images/Enemies/enemy/alita.png",
    },
    {
      name: "Corrcrust Karaka",
      health: 105,
      lore: {
        huntersnote:
          "Overgrown elder, able to spawn burning bubbles from within its coral-cased shell.",
        hornetnote:
          "This bug's fusion with the crust-growth... It seems intentional, though I imagine the union is far from comfortable.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/corrcrustkaraka.png",
      image: "../images/Enemies/enemy/corrcrustkaraka.png",
    },
    {
      name: "Crust King Khann",
      health: 1650,
      lore: {
        huntersnote:
          "Hardened warrior lord of a bygone age, able to command the coral crust to his bidding.",
        hornetnote:
          "For his stern stewardship his legions seemed utterly loyal. For less combative bugs his would have been a hard rule.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/crustkingkhann.png",
      image: "../images/Enemies/enemy/crustkingkhann.png",
    },
    {
      name: "Watcher at the Edge",
      health: 900,
      lore: {
        huntersnote:
          "Old warrior guarding the border of their domain, stiffened by time and awoken by song.",
        hornetnote:
          "They held long at their vigil, far beyond the age of their brethren, yet still when roused they swung their blade with remarkable ease.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/watcherattheedge.png",
      image: "../images/Enemies/enemy/watcherattheedge.png",
    },
    {
      name: "Voltvyrm",
      health: 350,
      lore: {
        huntersnote:
          "Coiled nest of charged worms. Assaults intruders with bolts of crackling electricity.",
        hornetnote:
          "Barely a bug, and possessing only basic thought, yet instinct alone proved enough to turn it deadly.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/voltvyrm.png",
      image: "../images/Enemies/enemy/voltvyrm.png",
    },
    {
      name: "Drapefly",
      health: 25,
      lore: {
        huntersnote: "Erratic, flying pest that nests in rags and curtains.",
        hornetnote:
          "Like fabric somehow sprung to life. Its pelt is perfectly matched to the rags it infests.",
      },
      drops: {
        shards: 2,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/drapefly.png",
      image: "../images/Enemies/enemy/drapefly.png",
    },
    {
      name: "Drapelord",
      health: 50,
      lore: {
        huntersnote:
          "Elder Drapefly grown big from age and consumption. Its heavy body allows it to hit much harder than its younger companions.",
        hornetnote: "Greed will always see some bugs swell above their kin.",
      },
      drops: {
        shards: 6,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/drapelord.png",
      image: "../images/Enemies/enemy/drapelord.png",
    },
    {
      name: "Drapemite",
      health: 25,
      lore: {
        huntersnote:
          "Cloth-covered crawler with sharpened forelimbs. Lives and breeds in dark places.",
        hornetnote:
          "Pharloom's structures seem almost built for them. The endless corners and cracks, so perfect for mites to burrow and nest.",
      },
      drops: {
        shards: 2,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/drapemite.png",
      image: "../images/Enemies/enemy/drapemite.png",
    },
    {
      name: "Giant Drapemite",
      health: 100,
      lore: {
        huntersnote:
          "Full-sized mite of the Citadel cloaked in an old curtain.",
        hornetnote:
          "Few creatures of that Silk stricken place would find nourishment enough to grow so large.",
      },
      drops: {
        shards: 7,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/giantdrapemite.png",
      image: "../images/Enemies/enemy/giantdrapemite.png",
    },
    {
      name: "Underworker",
      health: 30,
      lore: {
        huntersnote:
          "Feeble servant of the Underworks with a long twistpin and hard shell.",
        hornetnote:
          "With all the refuse collapsing throughout their domain, the worker's stiff shell would be essential if they held any hope to survive.",
      },
      drops: {
        shards: 6,
        beads: 2,
      },
      thumbnail: "../images/Enemies/thumbnail/underworker.png",
      image: "../images/Enemies/enemy/underworker.png",
    },
    {
      name: "Underscrub",
      health: 27,
      lore: {
        huntersnote:
          "Drained yet dedicated labourer, wielding a coarse steel brush.",
        hornetnote:
          "That they ever hoped to keep their domain clean... What futility.",
      },
      drops: {
        shards: 3,
        beads: 1,
      },
      thumbnail: "../images/Enemies/thumbnail/underscrub.png",
      image: "../images/Enemies/enemy/underscrub.png",
    },
    {
      name: "Undersweep",
      health: 35,
      lore: {
        huntersnote:
          "Uses their steel bristled pin to scrub the soot from vents and pipes.",
        hornetnote:
          "Their sharp cleaning implement is as filthy as the rest of the place. They only layer grime on grime.",
      },
      drops: {
        shards: 7,
        beads: 1,
      },
      thumbnail: "../images/Enemies/thumbnail/undersweep.png",
      image: "../images/Enemies/enemy/undersweep.png",
    },
    {
      name: "Underpoke",
      health: 40,
      lore: {
        huntersnote:
          "Drained worker on the verge of collapse. Consumed by the Haunting, they continue to work far beyond their mortal limits.",
        hornetnote:
          "They toiled incessantly for the Citadel, their shells bent and greyed, and now the kingdom's curse means not even death can relieve them.",
      },
      drops: {
        shards: 5,
        beads: 3,
      },
      thumbnail: "../images/Enemies/thumbnail/underpoke.png",
      image: "../images/Enemies/enemy/underpoke.png",
    },
    {
      name: "Underloft",
      health: 40,
      lore: {
        huntersnote:
          "Exhausted bug, grown sickly from the smog of the Underworks. The worker's twistpins, once tools of repair, now serve as spun projectiles.",
        hornetnote:
          "The cost of so much grandeur... Did I peer closely enough into the foundations of my own kingdom?",
      },
      drops: {
        shards: 6,
        beads: 3,
      },
      thumbnail: "../images/Enemies/thumbnail/underloft.png",
      image: "../images/Enemies/enemy/underloft.png",
    },
    {
      name: "Undercrank",
      health: 75,
      lore: {
        huntersnote:
          "Heavy, hard-shelled worker, forever repairing the Citadel's crumbling Underworks.",
        hornetnote:
          "There seem no ranks in their domain, yet this one has risen above the rest. A station likely gained through intimidation and thuggery.",
      },
      drops: {
        shards: 11,
        beads: 3,
      },
      thumbnail: "../images/Enemies/thumbnail/undercrank.png",
      image: "../images/Enemies/enemy/undercrank.png",
    },
    {
      name: "Envoy",
      health: 38,
      lore: {
        huntersnote: "Guide and ofttimes leader within the Citadel's Choir.",
        hornetnote:
          "Bugs like these crossed the caves to bring me to Pharloom. I cut down many before my capture. Then I had thought them minded and cunning. Now I see the singular will that haunts them all.",
      },
      drops: {
        shards: 3,
        beads: 13,
      },
      thumbnail: "../images/Enemies/thumbnail/envoy.png",
      image: "../images/Enemies/enemy/envoy.png",
    },
    {
      name: "Choir Pouncer",
      health: 30,
      lore: {
        huntersnote:
          "Agile bug, and one of few hardy pilgrims to have reached the Citadel.",
        hornetnote:
          "Once one of Pharloom's favoured bugs, and yet their domain and their shells would have been the first to fall to the Haunting.",
      },
      drops: {
        shards: 2,
        beads: 14,
      },
      thumbnail: "../images/Enemies/thumbnail/choirpouncer.png",
      image: "../images/Enemies/enemy/choirpouncer.png",
    },
    {
      name: "Choir Hornhead",
      health: 45,
      lore: {
        huntersnote: "Full-grown former pilgrim serving the Citadel.",
        hornetnote:
          "Did this one grow large thanks to the Citadel's excess, or was its formidable size the reason it ever survived to reach this place?",
      },
      drops: {
        shards: 6,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/choirhornhead.png",
      image: "../images/Enemies/enemy/choirhornhead.png",
    },
    {
      name: "Choir Bellbearer",
      health: 35,
      lore: {
        huntersnote:
          "Winged devout of the Citadel, carrying a brace of gilded bells.",
        hornetnote:
          "Pharloom proves often the effectiveness of bells as weapons. Never before had I considered them as such.",
      },
      drops: {
        shards: 2,
        beads: 11,
      },
      thumbnail: "../images/Enemies/thumbnail/choirbellbearer.png",
      image: "../images/Enemies/enemy/choirbellbearer.png",
    },
    {
      name: "Choir Flyer",
      health: 30,
      lore: {
        huntersnote:
          "Aerial bug of the Citadel, unarmed but for its short horn.",
        hornetnote:
          "For this bug to have survived Pharloom's climb it must have teamed with stouter companions. I cannot imagine it succeeding alone.",
      },
      drops: {
        shards: 3,
        beads: 11,
      },
      thumbnail: "../images/Enemies/thumbnail/choirflyer.png",
      image: "../images/Enemies/enemy/choirflyer.png",
    },
    {
      name: "Choir Elder",
      health: 45,
      lore: {
        huntersnote:
          "Aged former pilgrim. Uses their wings to position above threats and crush them under their large shell.",
        hornetnote:
          "Time allowed their shell to grow thick, all the better for battering their targets.",
      },
      drops: {
        shards: 6,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/choirelder.png",
      image: "../images/Enemies/enemy/choirelder.png",
    },
    {
      name: "Choristor",
      health: 55,
      lore: {
        huntersnote:
          "Disciple of the Choir, elevated above other pilgrims, and forced to cowl their face forever more.",
        hornetnote:
          "Their use of a pin shows hard training. Their use of Silk, unfurled from a spool held close, shows skill far beyond standard bugs.",
      },
      drops: {
        shards: 3,
        beads: 15,
      },
      thumbnail: "../images/Enemies/thumbnail/choristor.png",
      image: "../images/Enemies/enemy/choristor.png",
    },
    {
      name: "Reed",
      health: 55,
      lore: {
        huntersnote:
          "Disciple of the Choir, charged to maintain its perfect order, by sharp pin if necessary.",
        hornetnote:
          "A form well suited for combat, lithe and fast. No surprise it seems to rank so high amongst its cult.",
      },
      drops: {
        shards: 7,
        beads: 20,
      },
      thumbnail: "../images/Enemies/thumbnail/reed.png",
      image: "../images/Enemies/enemy/reed.png",
    },
    {
      name: "Grand Reed",
      health: 130,
      lore: {
        huntersnote:
          "High standing insect of the Choir, bearing a bow. This elite Reed has been trained and fed beyond its smaller fellows.",
        hornetnote:
          "This bug bears a spool of Silk, which they flail to attack. Though somewhat crude, theirs is a technique much reminiscent of Weavers. I wonder who taught them such a use?",
      },
      drops: {
        shards: 4,
        beads: 32,
      },
      thumbnail: "../images/Enemies/thumbnail/grandreed.png",
      image: "../images/Enemies/enemy/grandreed.png",
    },
    {
      name: "Choir Clapper",
      health: 230,
      lore: {
        huntersnote:
          "Mighty percussive disciple of the Choir, wielding a mallet and a Silk spool to wrap and enhance their attacks.",
        hornetnote:
          "There is no finesse in its use of Silk. It consumes its slim supply only to amplify its force.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/choirclapper.png",
      image: "../images/Enemies/enemy/choirclapper.png",
    },
    {
      name: "Clawmaiden",
      health: 48,
      lore: {
        huntersnote:
          "Puppet servants of the Citadel, suspended on strings of Silk. An early form of automaton, requiring extensive Silk to maintain its service.",
        hornetnote:
          "If given a chance, this one will steal silk from any significant source, including my own shell.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/clawmaiden.png",
      image: "../images/Enemies/enemy/clawmaiden.png",
    },
    {
      name: "Memoria",
      health: 70,
      lore: {
        huntersnote:
          "Learned disciple of the Choir charged to maintain the Citadel's Memorium.",
        hornetnote:
          "From the outset, theirs was a hopeless task. Those wild lands could never be replicated within a space so artificial.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/memoria.png",
      image: "../images/Enemies/enemy/memoria.png",
    },
    {
      name: "Minister",
      health: 60,
      lore: {
        huntersnote:
          "Gold ranked disciple of the Choir and direct servant to the Citadel's Conductors.",
        hornetnote:
          "The lethality of these bugs is unexpected. Their bodies were never built for combat. The Haunting has altered their nature dramatically.",
      },
      drops: {
        shards: 4,
        beads: 27,
      },
      thumbnail: "../images/Enemies/thumbnail/minister.png",
      image: "../images/Enemies/enemy/minister.png",
    },
    {
      name: "Maestro",
      health: 65,
      lore: {
        huntersnote:
          "Choir commander of the High Halls, able to summon and command cogflies at a flick of their baton.",
        hornetnote:
          "Once they summoned song from their subjects. Now they rise only to command an end to those unstrung.",
      },
      drops: {
        shards: 8,
        beads: 11,
      },
      thumbnail: "../images/Enemies/thumbnail/maestro.png",
      image: "../images/Enemies/enemy/maestro.png",
    },
    {
      name: "Second Sentinel",
      health: 800,
      lore: {
        huntersnote:
          "Cogwork knight of Pharloom, once protector of its pilgrims, and master of the scissor blade.",
        hornetnote:
          "The talent and intelligence of this construct goes far beyond others I have witnessed. They seem less built as a tool to serve than an attempt at life itself. ",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/secondsentinel.png",
      image: "../images/Enemies/enemy/secondsentinel.png",
    },
    {
      name: "Dreg Husk",
      health: 50,
      lore: {
        huntersnote:
          "Remains of a Citadel bug possessed by Silk dregs. The husk will lash out wildly with the many sharp pins caught inside its thread.",
        hornetnote:
          "There is old anguish bound upon these threads, the result of countless cruel procedures. ",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/dreghusk.png",
      image: "../images/Enemies/enemy/dreghusk.png",
    },
    {
      name: "Dregwheel",
      health: 50,
      lore: {
        huntersnote:
          "Shell of a small bug possessed by Silk dregs. The husk will stretch its Silk to form a crude, crushing wheel.",
        hornetnote:
          "Living Silk commanding a dead shell... An affront to nature, and one all too common across Pharloom.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/dregwheel.png",
      image: "../images/Enemies/enemy/dregwheel.png",
    },
    {
      name: "Surgeon",
      health: 75,
      lore: {
        huntersnote:
          "Cruel physician of Whiteward, responsible for operations and modifications on the Citadel's bugs.",
        hornetnote:
          "Their procedures with Silk may have prolonged life within the Citadel, but they unknowingly gifted many minds to the monarch.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/surgeon.png",
      image: "../images/Enemies/enemy/surgeon.png",
    },
    {
      name: "Mortician",
      health: 95,
      lore: {
        huntersnote:
          "Altered servant of the Citadel's Whiteward, responsible for the cremation of husks and the recycling of Silk from their shells.",
        hornetnote:
          "It lies low to the ground, perhaps out of reverence for its task, but can spring up suddenly to attack. Its shear makes for a deadly weapon with surprising reach.",
      },
      drops: {
        shards: 4,
        beads: 30,
      },
      thumbnail: "../images/Enemies/thumbnail/mortician.png",
      image: "../images/Enemies/enemy/mortician.png",
    },
    {
      name: "The Unravelled",
      health: 1000,
      lore: {
        huntersnote:
          "Tormented will of countless husks made manifest in a pit of Silk dregs.",
        hornetnote:
          "The souls of so many bugs, obsessed with Silk, consumed by it. Their pain shall forever remain in that pit. Even I do not possess strength enough to cleanse it.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/theunravelled.png",
      image: "../images/Enemies/enemy/theunravelled.png",
    },
    {
      name: "Cogwork Underfly",
      health: 4,
      lore: {
        huntersnote:
          "Small automaton built to work, without complaint, in the scorching heat of the Underworks' Cauldron.",
        hornetnote:
          "It is no wonder these constructs were cast. No mortal bug would last long inside that scorching place. Even my shell struggles to withstand its heat.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkunderfly.png",
      image: "../images/Enemies/enemy/cogworkunderfly.png",
    },
    {
      name: "Cogwork Hauler",
      health: 20,
      lore: {
        huntersnote:
          "Small automaton with a shielded shell, intended to carry loads of dangerous flintflame.",
        hornetnote:
          "Born and built only to work until time stiffens its limbs. Perhaps it is mercy this construct knows nothing of the freedom it lacks.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkhauler.png",
      image: "../images/Enemies/enemy/cogworkhauler.png",
    },
    {
      name: "Cogwork Crawler",
      health: 35,
      lore: {
        huntersnote:
          "Automaton built in the shape of a scuttling bug. Its back contains retractable pins, intended to cut song cylinders free of any obstruction.",
        hornetnote:
          "Its form is certainly based on bugs found outside the Citadel. In my own craftwork, I too often look to nature for inspiration.",
      },
      drops: {
        shards: 1,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkcrawler.png",
      image: "../images/Enemies/enemy/cogworkcrawler.png",
    },
    {
      name: "Cogworker",
      health: 28,
      lore: {
        huntersnote:
          "Flighted automaton, responsible for repairing and extending the Core.",
        hornetnote:
          "More effective an opponent than would be guessed. The precarity of its winding domain can make even its simple assault a challenge.",
      },
      drops: {
        shards: 1,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworker.png",
      image: "../images/Enemies/enemy/cogworker.png",
    },
    {
      name: "Cogwork Spine",
      health: 21,
      lore: {
        huntersnote: "Spherical, winged automaton housing many sharp spikes.",
        hornetnote:
          "I cannot decipher its function to the greater Core. Is it built for defense? If so, its passivity seems far from optimal.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkspine.png",
      image: "../images/Enemies/enemy/cogworkspine.png",
    },
    {
      name: "Cogwork Choirbug",
      health: 35,
      lore: {
        huntersnote:
          "Bug forged of iron, rotor and cog. The automaton works tirelessly to maintain the Core that houses it.",
        hornetnote:
          "Its core is filled with fine mechanisms, but that alone should not produce such a convincing mimic of life. Silk must also be used to animate this artifice, though exactly how I am not sure.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkchoirbug.png",
      image: "../images/Enemies/enemy/cogworkchoirbug.png",
    },
    {
      name: "Cogwork Cleanser",
      health: 40,
      lore: {
        huntersnote:
          "Steam shooting automaton, forged to clean the Cogwork Core and keep it free of infestation.",
        hornetnote:
          "An inspired use of steam. I must remember its construction when designing future tools.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkcleanser.png",
      image: "../images/Enemies/enemy/cogworkcleanser.png",
    },
    {
      name: "Cogwork Defender",
      health: 55,
      lore: {
        huntersnote:
          "Cogwork construct forged primarily for the Core's protection. Bears a shield and poke-pin, and possesses a lethal understanding of their use.",
        hornetnote:
          "It has no true mind, and yet fights effectively, adjusting its strategy to my movements. Where exactly are its thoughts written?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkdefender.png",
      image: "../images/Enemies/enemy/cogworkdefender.png",
    },
    {
      name: "Cogwork Clapper",
      health: 145,
      lore: {
        huntersnote:
          "Rare automaton intended to perform the ringing of bells and cymbals in the depths of the Core.",
        hornetnote:
          "I have not yet seen the bell this automaton is designed to ring, nor do I ever wish to hear it. Such a clamour would no doubt be unpleasant to experience.",
      },
      drops: {
        shards: 20,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkclapper.png",
      image: "../images/Enemies/enemy/cogworkclapper.png",
    },
    {
      name: "Cogwork Dancers",
      health: 630,
      lore: {
        huntersnote:
          "Automatons of impeccable construction, welcoming entrants to their chambers with a display of deadly dance.",
        hornetnote:
          "Two cogwork bugs, and yet the soul seemed singular? A sad, yet masterful imitation of life, imbued inside shells of iron.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cogworkdancers.png",
      image: "../images/Enemies/enemy/cogworkdancers.png",
    },
    {
      name: "Vaultborn",
      health: 40,
      lore: {
        huntersnote:
          "Young acolyte raised in the darkest vaults, destined to ascend to the rank of Scrollreader.",
        hornetnote:
          "In entering their domain, I freed these bugs to infest the greater vaults. They are a nuisance, and I have only myself to blame.",
      },
      drops: {
        shards: 4,
        beads: 5,
      },
      thumbnail: "../images/Enemies/thumbnail/vaultborn.png",
      image: "../images/Enemies/enemy/vaultborn.png",
    },
    {
      name: "Lampbearer",
      health: 50,
      lore: {
        huntersnote:
          "Disciple of the Whispering Vaults, tasked to navigate its dim recesses to retrieve old scrolls.",
        hornetnote:
          "An essential bug if one ever hoped to navigate that dark maze of stacks and scrolls.",
      },
      drops: {
        shards: 6,
        beads: 20,
      },
      thumbnail: "../images/Enemies/thumbnail/lampbearer.png",
      image: "../images/Enemies/enemy/lampbearer.png",
    },
    {
      name: "Scrollreader",
      health: 100,
      lore: {
        huntersnote:
          "Gilded servant of the Whispering Vaults, born to read and recall the near endless scrolls of prayer.",
        hornetnote:
          "Did they ever truly understand those inscrutable scrolls? Or is it all merely pretence, an endless act to maintain their order's station within the Citadel?",
      },
      drops: {
        shards: 8,
        beads: 23,
      },
      thumbnail: "../images/Enemies/thumbnail/scrollreader.png",
      image: "../images/Enemies/enemy/scrollreader.png",
    },
    {
      name: "Vaultkeeper",
      health: 70,
      lore: {
        huntersnote:
          "High caste bug, responsible for delivering sermons and leading prayer for those beyond the walls of the Whispering Vaults.",
        hornetnote:
          "Most likely this one's true charge was to root out and condemn those not seen as sufficiently fervent.",
      },
      drops: {
        shards: 4,
        beads: 20,
      },
      thumbnail: "../images/Enemies/thumbnail/vaultkeeper.png",
      image: "../images/Enemies/enemy/vaultkeeper.png",
    },
    {
      name: "Trobbio",
      health: 700,
      lore: {
        huntersnote:
          "Haughty thespian convinced that only dazzling performance can raise Pharloom from the throes of death.",
        hornetnote:
          "His desire to see Pharloom saved may have been well intentioned, but he seemed quite happy for others to die upon the stage in pursuit of his goal.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/trobbio.png",
      image: "../images/Enemies/enemy/trobbio.png",
    },
    {
      name: "Tormented Trobbio",
      health: 950,
      lore: {
        huntersnote:
          "Depressed thespian, consumed by the melancholy of a collapsing world.",
        hornetnote:
          "This one chose to embrace the doom to come. I shall not share such easy surrender.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/tormentedtrobbio.png",
      image: "../images/Enemies/enemy/tormentedtrobbio.png",
    },
    {
      name: "Penitent",
      health: 50,
      lore: {
        huntersnote:
          "Humbled prisoner serving their sentence for sin committed within the Citadel.",
        hornetnote:
          "All are haunted here, the jailers and the jailed. Do they realise they will never leave this place? Or how long they have stayed already?",
      },
      drops: {
        shards: 9,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/penitent.png",
      image: "../images/Enemies/enemy/penitent.png",
    },
    {
      name: "Puny Penitent",
      health: 40,
      lore: {
        huntersnote:
          "Small bug, shackled and cowled for sin committed within the Citadel.",
        hornetnote:
          "Their thick shroud leaves them sightless, yet it seems to matter little. They have no care for their safety, wishing only to charge at those they sense as sinful.",
      },
      drops: {
        shards: 5,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/punypenitent.png",
      image: "../images/Enemies/enemy/punypenitent.png",
    },
    {
      name: "Freshfly",
      health: 5,
      lore: {
        huntersnote:
          "Infant fly, freshly hatched. At this age the soft, blind fly is little more than a bother.",
        hornetnote: "The less these gruesome bugs breed, the better.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/freshfly.png",
      image: "../images/Enemies/enemy/freshfly.png",
    },
    {
      name: "Scabfly",
      health: 20,
      lore: {
        huntersnote: "Sticky young fly, born and grown in service to the Slab.",
        hornetnote:
          "Foul creatures birthed into servitude. Their plight elicits no sympathy from me.",
      },
      drops: {
        shards: 2,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/scabfly.png",
      image: "../images/Enemies/enemy/scabfly.png",
    },
    {
      name: "Guardfly",
      health: 45,
      lore: {
        huntersnote: "Starved servant of the Slab, bearing a hooked longpin.",
        hornetnote:
          "The smell from these jailers overwhelms my senses. I strongly doubt they have ever thought to bathe.",
      },
      drops: {
        shards: 3,
        beads: 8,
      },
      thumbnail: "../images/Enemies/thumbnail/guardfly.png",
      image: "../images/Enemies/enemy/guardfly.png",
    },
    {
      name: "Wardenfly",
      health: 70,
      lore: {
        huntersnote:
          "Heavy, hairy jailer responsible for capturing sinners and punishing prisoners.",
        hornetnote:
          "Disgusting both in manner and stench. I feel no remorse to see them felled.",
      },
      drops: {
        shards: 4,
        beads: 12,
      },
      thumbnail: "../images/Enemies/thumbnail/wardenfly.png",
      image: "../images/Enemies/enemy/wardenfly.png",
    },
    {
      name: "Broodmother",
      health: 700,
      lore: {
        huntersnote:
          "Mad matriarch of the Slab rarely seen outside her warren. From her all jailers are born and bred.",
        hornetnote:
          "With this one vanquished, I hope to have sped the end for that jail and its distasteful order.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/broodmother.png",
      image: "../images/Enemies/enemy/broodmother.png",
    },
    {
      name: "Driftlin",
      health: 4,
      lore: {
        huntersnote:
          "Gentle glider of Mount Fay. Its downy wings and cowl allow it to resist even the most cutting cold.",
        hornetnote:
          "This one would make a perfect pet, but for the freezing temperatures it requires for comfort.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/driftlin.png",
      image: "../images/Enemies/enemy/driftlin.png",
    },
    {
      name: "Mnemonid",
      health: 50,
      lore: {
        huntersnote:
          "Flighted creature formed from coldshard. If shattered it will quickly reform.",
        hornetnote:
          "The coldshard, even when destroyed it remembers its former shape. A remarkable material, and perhaps even more astonishing there seems life contained within it.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mnemonid.png",
      image: "../images/Enemies/enemy/mnemonid.png",
    },
    {
      name: "Mnemonord",
      health: 50,
      lore: {
        huntersnote: "Huge flighted creature formed from coldshard.",
        hornetnote:
          "This larger form carries so much weight it can barely move from its place.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/mnemonord.png",
      image: "../images/Enemies/enemy/mnemonord.png",
    },
    {
      name: "Servitor Ignim",
      health: 1,
      lore: {
        huntersnote:
          "Small construct built by Weavers past, brought to life through Silk runes threaded within.",
        hornetnote:
          "Though the Weavers have long passed from Pharloom, this servant still performs its function.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/servitorignim.png",
      image: "../images/Enemies/enemy/servitorignim.png",
    },
    {
      name: "Servitor Boran",
      health: 70,
      lore: {
        huntersnote:
          "Broken construct built by Weavers past, able to fire a focused beam of silklight to carve halls and chambers through ice and bone.",
        hornetnote:
          "The servitor has been heavily damaged by time and the elements. Its actions have grown erratic. It seems no longer able to discern friend from foe.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/servitorboran.png",
      image: "../images/Enemies/enemy/servitorboran.png",
    },
    {
      name: "Winged Lifeseed",
      health: 1,
      lore: {
        huntersnote:
          "Mindless sack filled with Plasmium. When broken the Plasmium can be consumed for its temporary benefits to health.",
        hornetnote:
          "My unique shell can resist the darker deformations of this substance, but even I have limits...",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/wingedlifeseed.png",
      image: "../images/Enemies/enemy/wingedlifeseed.png",
    },
    {
      name: "Plasmid",
      health: 60,
      lore: {
        huntersnote:
          "Mutated young worm infected with Plasmium. The new form displays potent regenerative skill.",
        hornetnote:
          "Pharloom shall quickly learn the curse of this substance. What benefits it provides can be swiftly outweighed.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/plasmid.png",
      image: "../images/Enemies/enemy/plasmid.png",
    },
    {
      name: "Plasmidas",
      health: 80,
      lore: {
        huntersnote:
          "Large worm mutated heavily by Plasmium. The creature has become fused to the roof of its cave, no longer able to move freely.",
        hornetnote:
          "In my home caves, when once this substance was allowed to flourish, I saw similar aberrations. This is wonder tainted strong with revulsion.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/plasmidas.png",
      image: "../images/Enemies/enemy/plasmidas.png",
    },
    {
      name: "Plasmified Zango",
      health: 1000,
      lore: {
        huntersnote:
          "Husk of an alchemist's assistant granted false life by Plasmium.",
        hornetnote:
          "He carelessly seeded these caves with that cursed substance... His final fate seems fair reward for those efforts, yet I feel some sympathy. It is an alluring power.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/plasmifiedzango.png",
      image: "../images/Enemies/enemy/plasmifiedzango.png",
    },
    {
      name: "Leaf Glider",
      health: 1,
      lore: {
        huntersnote: "Fine winged flyer that survives in flocks.",
        hornetnote:
          "So light they can rest atop still water's surface. An elegant bug indeed.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/leafglider.png",
      image: "../images/Enemies/enemy/leafglider.png",
    },
    {
      name: "Leaf Roller",
      health: 42,
      lore: {
        huntersnote: "Pointed scurrier posing as plant life.",
        hornetnote:
          "Simple. Graceful. Another fine bug lost forever from these lands.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/leafroller.png",
      image: "../images/Enemies/enemy/leafroller.png",
    },
    {
      name: "Pendra",
      health: 22,
      lore: {
        huntersnote: "Flighty insect that lives beside still waters.",
        hornetnote:
          "Though generally passive, their sharp masks can cause injury if carelessly blundered into.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pendra.png",
      image: "../images/Enemies/enemy/pendra.png",
    },
    {
      name: "Pendragor",
      health: 70,
      lore: {
        huntersnote:
          "Heavy insect that lives near large bodies of water. Its weighty body is best avoided.",
        hornetnote:
          "When they do not hinder my path, I find their simple motion rather pleasant.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pendragor.png",
      image: "../images/Enemies/enemy/pendragor.png",
    },
    {
      name: "Nuphar",
      health: 70,
      lore: {
        huntersnote:
          "Predatory plant with a powerful jaw shaped to resemble a lily pad.",
        hornetnote:
          "A snapping surprise on first encounter, though one easily avoided once aware.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/nuphar.png",
      image: "../images/Enemies/enemy/nuphar.png",
    },
    {
      name: "Cloverstag",
      health: 62,
      lore: {
        huntersnote:
          "Placid native of Verdania. Its hide closely mimics the flora of its territory.",
        hornetnote:
          "An impressive act of mimicry. To match so closely with its land, their clover caves must have sustained through generations uncounted.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cloverstag.png",
      image: "../images/Enemies/enemy/cloverstag.png",
    },
    {
      name: "Palestag",
      health: 480,
      lore: {
        huntersnote:
          "Fabled first Cloverstag of Verdania's wilds. Commands the grass and leaves to aid its attack.",
        hornetnote:
          "Myth made real in memory. The creature seemed completely at one with the flora around it. Did it ever truly exist as I have seen it?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/palestag.png",
      image: "../images/Enemies/enemy/palestag.png",
    },
    {
      name: "Kindanir",
      health: 55,
      lore: {
        huntersnote:
          "Child of Verdania, fully capable to fight despite its young age.",
        hornetnote:
          "Fierce and fast, and defending their lands even from birth. These are children to be proud of.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/kindanir.png",
      image: "../images/Enemies/enemy/kindanir.png",
    },
    {
      name: "Verdanir",
      health: 100,
      lore: {
        huntersnote:
          "Darting warrior with sharpened forelimbs and heightened senses.",
        hornetnote:
          "They rarely relax, always alert for potential danger, even deep in their own territory. To defeat them my focus must match their own.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/verdanir.png",
      image: "../images/Enemies/enemy/verdanir.png",
    },
    {
      name: "Escalion",
      health: 100,
      lore: {
        huntersnote:
          "Blindingly fast, winged warrior able to launch pointed pinions from its forelimbs.",
        hornetnote:
          "Born with many tools I would once have desired for myself. Fortunately, I have trained hard around those limits.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/escalion.png",
      image: "../images/Enemies/enemy/escalion.png",
    },
    {
      name: "Clover Dancers",
      health: 1160,
      lore: {
        huntersnote:
          "Dual princes of old Verdania, beloved by their subjects for their grace and for the ballet of death they delivered upon outsiders.",
        hornetnote:
          "For one to love another so similar to themselves, is that selfless or vain?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/cloverdancers.png",
      image: "../images/Enemies/enemy/cloverdancers.png",
    },
    {
      name: "Shadow Creeper",
      health: 40,
      lore: {
        huntersnote:
          "Shell-plated worm found only in the deepest depths. Seems to survive despite consuming no food or liquid.",
        hornetnote:
          "A creature long familiar to me. I suspect that no matter how far I travel, if I descend deep enough they will always be there.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shadowcreeper.png",
      image: "../images/Enemies/enemy/shadowcreeper.png",
    },
    {
      name: "Shadow Charger",
      health: 80,
      lore: {
        huntersnote:
          "Bulky worm of the deepest depths. Lives in tight crevices and uses its weighty body to batter.",
        hornetnote:
          "These ones grow large, yet I have never observed them eating, or sleeping. They seem such simple bugs... but I suspect they are not truly our cousins.",
      },
      drops: {
        shards: 14,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shadowcharger.png",
      image: "../images/Enemies/enemy/shadowcharger.png",
    },
    {
      name: "Gloomsac",
      health: 50,
      lore: {
        huntersnote:
          "Tiny empty creature, barely a bug. Swallows its prey whole and sucks their nutrients until nothing remains.",
        hornetnote:
          "This one disturbs me... There is something in its simplicity. Do I almost feel fear?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/gloomsac.png",
      image: "../images/Enemies/enemy/gloomsac.png",
    },
    {
      name: "Gargant Gloom",
      health: 200,
      lore: {
        huntersnote:
          "Enormous tubular beast uniquely suited to living close to the void below.",
        hornetnote:
          "Amazingly, the creature carries the void's black liquid in its stomach, violently spraying it forth if threatened.",
      },
      drops: {
        shards: 12,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/gargantgloom.png",
      image: "../images/Enemies/enemy/gargantgloom.png",
    },
    {
      name: "Void Tendrils",
      health: 0,
      lore: {
        huntersnote:
          "Lashing fragments of pure darkness, shaped into sharpened tentacles.",
        hornetnote:
          "The void that will claim all things... In the barbed forms it chooses its nature can be seen clear.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/voidtendrils.png",
      image: "../images/Enemies/enemy/voidtendrils.png",
    },
    {
      name: "Void Mass",
      health: 190,
      lore: {
        huntersnote: "Dense knot of husks bound tight by void soaked Silk.",
        hornetnote:
          "Silk and shells corrupted. That void seeks now to claim this land whole. These poor shells are only the beginning.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/voidmass.png",
      image: "../images/Enemies/enemy/voidmass.png",
    },
    {
      name: "Summoned Saviour",
      health: 500,
      lore: {
        huntersnote: "Mass of old masks swollen and animated by writhing void.",
        hornetnote:
          "A creature born of a bug's desperate hope for strength. Few possess the skill to call the void, and of those that can, none possess the means to tame it.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/summonedsaviour.png",
      image: "../images/Enemies/enemy/summonedsaviour.png",
    },
    {
      name: "Wingmould",
      health: 1,
      lore: {
        huntersnote:
          "False fly with a rune etched shell. A tortured mix of soul and void is caged within.",
        hornetnote:
          "A crude construct of my father's fallen domain. Only a fool believes that void can be fashioned to do their bidding.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/wingmould.png",
      image: "../images/Enemies/enemy/wingmould.png",
    },
    {
      name: "Garpid",
      health: 0,
      lore: {
        huntersnote:
          "Sightless burrower that reacts violently to the slightest sound.",
        hornetnote:
          "A common enough bug, though not to be underestimated. The acuteness of their other senses more than makes up for their lack of vision.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/garpid.png",
      image: "../images/Enemies/enemy/garpid.png",
    },
    {
      name: "Imoba",
      health: 50,
      lore: {
        huntersnote:
          "Slow drifting bug with a heavy top shell. The bug reacts little to threats, even those that could claim its life.",
        hornetnote:
          "The poor creature has lived a life too calm and coddled. It would not fare well in the world beyond its walls.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/imoba.png",
      image: "../images/Enemies/enemy/imoba.png",
    },
    {
      name: "Skrill",
      health: 17,
      lore: {
        huntersnote: "Common crawler that lives beneath sand.",
        hornetnote:
          "This surface dweller is free of Silk. Its nature remains its own. The monarch's influence must only have stretched below it.",
      },
      drops: {
        shards: [2, 3],
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/skrill.png",
      image: "../images/Enemies/enemy/skrill.png",
    },
    {
      name: "Bell Eater",
      health: 800,
      lore: {
        huntersnote:
          "Long dormant centipede, awoken and enraged by Pharloom's crumbling collapse.",
        hornetnote:
          "A monster in the classic form of tales from youth. Its slaying was done as much by my fierce travelling companion as by myself.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/belleater.png",
      image: "../images/Enemies/enemy/belleater.png",
    },
    {
      name: "Huge Flea",
      health: 200,
      lore: {
        huntersnote:
          "Oversized bug, briefly consumed by anger after its long time caged.",
        hornetnote:
          "I would not have guessed so large and marvellous a flea existed. I am pleased it saw sense before I had to strike a killing blow.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/hugeflea.png",
      image: "../images/Enemies/enemy/hugeflea.png",
    },
    {
      name: "Shakra",
      health: 600,
      lore: {
        huntersnote:
          "Warrior cartographer of a tribe from Pharloom's edge. Her skills in battle could challenge the kingdom's best.",
        hornetnote:
          "She has lived a mere fraction of my lifetime and yet her rings prove a ferocious match. As gifted a warrior as I have ever encountered, and one I am fortunate to call a friend.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/shakra.png",
      image: "../images/Enemies/enemy/shakra.png",
    },
    {
      name: "Garmond and Zaza",
      health: 460,
      lore: {
        huntersnote:
          "Vigorous old knight and their noble companion, working together to see their lands cut free from haunted madness.",
        hornetnote:
          "They too seek the spectre at the Haunting's heart, though I fear that foe would pose a challenge beyond their mortal limits.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/garmondandzaza.png",
      image: "../images/Enemies/enemy/garmondandzaza.png",
    },
    {
      name: "Lost Garmond",
      health: 900,
      lore: {
        huntersnote: "Old knight consumed by black thread.",
        hornetnote:
          "A tragic fate for a once honourable bug. Those void soaked threads... Their physical might is nothing compared to the corruption they wreak upon a soul.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lostgarmond.png",
      image: "../images/Enemies/enemy/lostgarmond.png",
    },
    {
      name: "Pinstress",
      health: 910,
      lore: {
        huntersnote:
          "Blade maiden of a once renown warrior sect, survived long beyond the rest of her order.",
        hornetnote:
          "I like her. For her willingness to teach and her spirit still strong, despite a long age spent solitary... she has my respect.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/pinstress.png",
      image: "../images/Enemies/enemy/pinstress.png",
    },
    {
      name: "Widow",
      health: 360,
      lore: {
        huntersnote:
          "Crazed fanatic able to guide Pharloom's haunted Silk by music played upon it.",
        hornetnote:
          "Her body seemed a Weaver's, but her mask had been forcibly removed, and her own Silk was bound useless by heavy pins lodged through her spine.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/widow.png",
      image: "../images/Enemies/enemy/widow.png",
    },
    {
      name: "First Sinner",
      health: 1300,
      lore: {
        huntersnote:
          "Ancient Weaver condemned for a transgression lost to time.",
        hornetnote:
          "This one's husk held a masterful talent, to weave Silk into blazing runes. Throughout my life, I have seen runes woven for many tasks. Was she the first to hone such skills?",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/firstsinner.png",
      image: "../images/Enemies/enemy/firstsinner.png",
    },
    {
      name: "Phantom",
      health: 650,
      lore: {
        huntersnote:
          "Mournful creature tasked alone to expel the Citadel's choking refuse. Their talent with a longpin is unmatched.",
        hornetnote:
          "Though grey with age, their frayed form suggested a being strung from Silk, one who welcomed a decisive end in combat over a slow decline.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/phantom.png",
      image: "../images/Enemies/enemy/phantom.png",
    },
    {
      name: "Lace",
      health: 250,
      lore: {
        huntersnote: "Manic fencer who delights in battle.",
        hornetnote:
          "A bug born entirely of thread. Much Silk would have been needed to see her sustained. A fragile form of life, but life nonetheless.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lace.png",
      image: "../images/Enemies/enemy/lace.png",
    },
    {
      name: "Grandmother Silk",
      health: 1095,
      lore: {
        huntersnote: "Monarch of Pharloom, and the primal source of Silk.",
        hornetnote:
          "Heart of the Haunting, long lulled to slumber and desperate to wake. The higher being’s threads stretched throughout Pharloom, snaring its bugs and driving them to madness and discord.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/grandmothersilk.png",
      image: "../images/Enemies/enemy/grandmothersilk.png",
    },
    {
      name: "Lost Lace",
      health: 1800,
      lore: {
        huntersnote: "Silk-spun child possessed by the void.",
        hornetnote:
          "To quell the mother's rage, and see this kingdom saved, I will claim her back. This one... the dark shall not take.",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "../images/Enemies/thumbnail/lostlace.png",
      image: "../images/Enemies/enemy/lostlace.png",
    },
  ],
};
