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
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
  ],
};
