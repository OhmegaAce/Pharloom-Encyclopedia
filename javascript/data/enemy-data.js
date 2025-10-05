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
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
        hornetnote: "",
      },
      drops: {
        shards: 0,
        beads: 0,
      },
      thumbnail: "",
      image: "",
    },
    {
      name: "",
      health: 0,
      lore: {
        huntersnote: "",
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
