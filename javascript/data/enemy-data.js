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
