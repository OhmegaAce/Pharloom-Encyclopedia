const toolData = {
  redtools: [
    {
      name: "Straight Pin",
      image: "../images/Tools/red/straightpin.png",
      description: "Light throwing tool, designed for rapid attacks.",
      location: "Located in The Marrow inside of Grindle's cell.",
      uses: "12/15/18/21/24",
      refill_cost: 3.33,
    },
    {
      name: "Threefold Pin",
      image: "../images/Tools/red/threefoldpin.png",
      description: "Flat, layered weapon, crafted to be thrown in a set.",
      location:
        "Located in Greymoor at Craw Lake. The tool is in a small room at the top right of the cavern, guarded by a Tallcraw.",
      uses: "10/12/15/17/20",
      refill_cost: 4,
    },
    {
      name: "Sting Shard",
      image: "../images/Tools/red/stingshard.png",
      description:
        "Lethal trap formed of tightly bound blades. Once placed, the trap will pierce enemies that come into contact.",
      location: "Purchased from Forge Daughter in Deep Docks for  140 and  1.",
      uses: "6/7/9/10/12",
      refill_cost: 6.66,
    },
    {
      name: "Tacks",
      image: "../images/Tools/red/tacks.png",
      description:
        "Short pins designed to be scattered along the ground. The sharp points will pierce any enemy who steps upon them.",
      location: "Reward for completing the Roach Guts Wish.",
      uses: "5/6/7/8/10",
      refill_cost: 8,
    },
    {
      name: "Longpin",
      image: "../images/Tools/red/longpin.png",
      description: "Weighted pin and haft, formed to pierce tough shells.",
      location:
        "Located in Shellwood above the main entrance to Bellhart, blocked by a Wood Wasp nest.",
      uses: "10/12/15/17/20",
      refill_cost: 4,
    },
    {
      name: "Curveclaw",
      image: "../images/Tools/red/curveclaw.png",
      description: "Arched sharpbone used by hunters to take down flying prey.",
      location:
        "Purchased from Mottled Skarr in Hunter's March for  140. Alternatively, if Mottled Skarr is dead it can be found locked behind a gauntlet north of his original location.",
      uses: "8/10/12/14/16",
      refill_cost: 5,
    },
    {
      name: "Curvesickle",
      image: "../images/Tools/red/curvesickle.png",
      description:
        "Radial sharpbone used by skilled hunters to take down dangerous prey.",
      location:
        "Obtained by giving the Curveclaw to a Mottled Skarr Scout in Act 3, in the target practice room above the Far Fields Bellway station.",
      uses: "8/10/12/14/16",
      refill_cost: 5,
    },
    {
      name: "Throwing Ring",
      image: "../images/Tools/red/throwingring.png",
      description:
        "Hardened throwing weapon of the warrior Shakra. Blunt force weapon that rebounds between enemies and hard surfaces.",
      location: "Reward for completing the Trail's End Wish.",
      uses: "10/12/15/17/20",
      refill_cost: 4,
    },
    {
      name: "Pimpillo",
      image: "../images/Tools/red/pimpillo.png",
      description:
        "Fabric pouch filled with volatile material. Explodes on impact with enemies or when ignited by its fuse.",
      location: "Crafted in a hidden room in northwest Greymoor for  1.",
      uses: "3/3/4/5/6",
      refill_cost: 13.33,
    },
    {
      name: "Conchcutter",
      image: "../images/Tools/red/conchcutter.png",
      description:
        "Spiral weapon fashioned from a hardened conchspire. Thrown at an angle, it can ricochet and catch prey off-guard.",
      location: "Found inside the Coral Tower in Sands of Karak.",
      uses: "8/10/12/14/16",
      refill_cost: 5,
    },
    {
      name: "Silkshot 1",
      image: "../images/Tools/red/silkshot1.png",
      description:
        "Ancient weapon of the Weavers, repaired and modified by Forge Daughter. Uses shell canisters and the wielder's own Silk to fire.",
      location:
        "Obtained by repairing the Ruined Tool found in Weavenest Murglin. Repairing at Forge Daughter for  240 and  1 provides this variant.",
      uses: "15/18/22/26/30",
      refill_cost: 2.66,
    },
    {
      name: "Silkshot 2",
      image: "../images/Tools/red/silkshot2.png",
      description:
        "Ancient weapon of the Weavers, repaired and modified by Twelfth Architect. Uses shell canisters and the wielder's own Silk to fire.",
      location:
        "Obtained by repairing the Ruined Tool found in Weavenest Murglin. Repairing at Twelfth Architect for  140 and  1 provides this variant.",
      uses: "12/15/18/21/24",
      refill_cost: 3.33,
    },
    {
      name: "Silkshot 3",
      image: "../images/Tools/red/silkshot3.png",
      description:
        "Ancient weapon of the Weavers, repaired to its original form. Uses shell canisters and the wielder's own Silk to fire.",
      location:
        "Obtained by repairing the Ruined Tool found in Weavenest Murglin. Repairing at a room near the peak of Mount Fay for  1 provides this variant.",
      uses: "8/10/12/14/16",
      refill_cost: 5,
    },
    {
      name: "Delver's Drill",
      image: "../images/Tools/red/delversdrill.png",
      description:
        "Rotary tool used for boring into bone and rock. Drives the wielder downwards, while spinning the drill with destructive force.",
      location: "Found on a crafting table in the southwest of the Underworks.",
      uses: "9/11/13/15/18",
      refill_cost: 4.44,
    },
    {
      name: "Cogwork Wheel",
      image: "../images/Tools/red/cogworkwheel.png",
      description:
        "Expanding circular blade powered by a cogwork motor. Propels forward, slicing through foes.",
      location: "Purchased at Twelfth Architect for  360 and  1.",
      uses: "5/6/7/8/10",
      refill_cost: 8,
    },
    {
      name: "Cogfly",
      image: "../images/Tools/red/cogfly.png",
      description:
        "Winged cogwork companion that will seek nearby foes and attack.",
      location: "Crafted in a room in High Halls for  1.",
      uses: "4/5/6/7/8",
      refill_cost: 10,
    },
    {
      name: "Rosary Cannon",
      image: "../images/Tools/red/rosarycannon.png",
      description:
        "Repurposed mechanism from the base of a rosary stringing machine. Rosaries must be inserted to reload the cannon.",
      location:
        "Found behind a locked door in High Halls east of the sub-area The Forum.",
      uses: "80/80/80/80/80",
      refill_cost: 1,
    },
    {
      name: "Voltvessels",
      image: "../images/Tools/red/voltvessels.png",
      description:
        "Convertible orbs containing electricity. The vessels can be thrown as a bola for an explosive discharge or staked as a spear to release a column of energy.",
      location: "Found behind a hidden wall in the northeast of Memorium.",
      uses: "5/6/7/8/10",
      refill_cost: 8,
    },
    {
      name: "Flintslate",
      image: "../images/Tools/red/flintslate.png",
      description:
        "Sharpening slate made from cut and polished Flintgem. Temporarily super-heats the needle's blade, imbuing each slash with flame and increasing lethality.",
      uses: "Found in Deep Docks, beyond the Simple Key door.",
      uses: "3/3/4/5/6",
      refill_cost: 13.33,
    },
    {
      name: "Snare Setter",
      image: "../images/Tools/red/snaresetter.png",
      description:
        "Trap-setting tool of the Weavers. Lays a Silk rune that ignites when foes come into contact. Uses shell canisters and the wielder's own Silk.",
      location:
        "Found in a secret room within Weavenest Atla. Used to complete the Silk and Soul Wish.",
      uses: "5/6/7/8/10",
      refill_cost: 8,
    },
    {
      name: "Flea Brew",
      image: "../images/Tools/red/fleabrew.png",
      description:
        "Invigorating beverage prepared by the Flea Caravan. Temporarily increases the speed of movement and attacks.",
      location:
        "Obtained from the Flea Caravan after completing the The Lost Fleas Wish.",
      uses: "3/3/4/5/6",
      refill_cost: "N/A",
    },
    {
      name: "Plasmium Phial",
      image: "../images/Tools/red/plasmiumphial.png",
      description:
        "Spear-phial containing Plasmium. Injecting the liquid allows one to gain health beyond their natural limits.",
      Location: "Reward for completing the Alchemist's Assistant Wish.",
      uses: "3/3/4/5/6",
      refill_cost: 13.33,
    },
    {
      name: "Needle Phial",
      image: "../images/Tools/red/needlephial.png",
      description:
        "Tool designed to extract and store fluids. To pierce its target, the Needle Phial must first be charged to full tension.",
      location:
        "Given to complete Alchemist's Assistant and Advanced Alchemy Wishes, after which it is unobtainable.",
      uses: "Infinite",
      refill_cost: "N/A",
    },
  ],
  bluetools: [
    {
      name: "Druid's Eye",
      image: "../images/Tools/blue/druidseye.png",
      description:
        "Amulet of protection formed from Mossberries. As the bearer takes damage, the amulet weeps a green elixir that will form into Silk.",
      location: "Reward for completing the Berry Picking Wish.",
    },
    {
      name: "Druid's Eyes",
      image: "../images/Tools/blue/druidseyes.png",
      description:
        "Powerful amulet of protection formed from many Mossberries. As the bearer takes damage, the amulet weeps a green elixir that will form into Silk.",
      location:
        "Bring 4 additional Mossberries to Moss Druid after completing the Berry Picking Wish. Replaces the Druid's Eye.",
    },
    {
      name: "Magma Bell",
      image: "../images/Tools/blue/magmabell.png",
      description:
        "Forged iron bell, crafted to ward against the intense heat of the Deep Docks.Reduces the damage taken from flame and magma.",
      location: "Purchased from Forge Daughter for  110 and  1.",
    },
    {
      name: "Warding Bell",
      image: "../images/Tools/blue/wardingbell.png",
      description:
        "Holy bell inscribed with a hymn of protection. Shields the bearer as they bind their wounds.",
      location: "Found on a body in Far Fields.",
    },
    {
      name: "Pollip Pouch",
      image: "../images/Tools/blue/pollippouch.png",
      description:
        "Pouch containing a fast-acting venom drawn from a flower's heart. Applies venom to equipped tools.",
      location: "Reward for completing the Rite of the Pollip Wish.",
    },
    {
      name: "Fractured Mask",
      image: "../images/Tools/blue/fracturedmask.png",
      description:
        "Old bug's skull carved for protection. Shields against critical damage but shatters on impact. If shattered, the mask will be repaired while resting at a bench.",
      location:
        "Purchased from Mottled Skarr for  260. Can also be found next to his body if he died before it was purchased.",
    },
    {
      name: "Multibinder",
      image: "../images/Tools/blue/multibinder.png",
      description:
        "Elaborate, etched Weaver spindle, usable only by wielders of Silk. Extends the act of binding, but increases its healing effect.",
      location:
        "Purchased from Frey for  880 after completing the My Missing Courier Wish.",
    },
    {
      name: "Weavelight",
      image: "../images/Tools/blue/weavelight.png",
      description:
        "Gleaming apparatus of Weaver make. Its core emits a faint glow. Increases the speed of Silk regeneration.",
      location:
        "Found in Weavenest Atla after defeating a pair of Moss Mothers.",
    },
    {
      name: "Sawtooth Circlet",
      image: "../images/Tools/blue/sawtoothcirclet.png",
      description:
        "Flexible belt of serrated metal teeth, able to affixed to the hem of a cloak. Flaring the cloak will spin the blades, damaging surrounding enemies.",
      location: "Purchased from Twelfth Architect for  230 and  1.",
    },
    {
      name: "Injector Band",
      image: "../images/Tools/blue/injectorband.png",
      description:
        "Brace of surgical pins from the Whiteward. Used to forcefully insert Silk deep inside a bug's shell. Increases the speed of binding.",
      location: "Found in Whiteward.",
    },
    {
      name: "Spool Extender",
      image: "../images/Tools/blue/spoolextender.png",
      description:
        "Silk-storing tool of the Citadel, fashioned after an artefact of the Weavers. Allows the storing of additional Silk beyond one's natural abilities.",
      location: "Bought from Jubilana for  720.",
    },
    {
      name: "Reserve Bind",
      image: "../images/Tools/blue/reservebind.png",
      description:
        "Ornate artefact of the Citadel, able to hold a Bind's worth of Silk. Used when healing is needed and one's natural resources run low. The Reserve Bind will be restored when resting at a bench.",
      location: "Reward for completing the Final Audience Wish.",
    },
    {
      name: "Claw Mirror",
      image: "../images/Tools/blue/clawmirror.png",
      description:
        "Theatrical tool of a vainglorious bug. When binding, emits a dazzling flash that damages surrounding enemies.",
      location: "Reward for defeating Trobbio in The Stage.",
    },
    {
      name: "Claw Mirrors",
      image: "../images/Tools/blue/clawmirrors.png",
      description:
        "Twin theatrical tools of a vainglorious bug. When binding, emits a searing blast that damages surrounding enemies.",
      location:
        "Reward for defeating Tormented Trobbio in The Stage. Replaces the Claw Mirror.",
    },
    {
      name: "Memory Crystal",
      image: "../images/Tools/blue/memorycrystal.png",
      description:
        "Reflective stone with mnemonic properties. When taking damage, a memory of the bearer is formed of crystal. The memory will shatter into sharp spines if an enemy comes into contact.",
      location: "Found in a hidden room in southwest Mount Fay.",
    },
    {
      name: "Snitch Pick",
      image: "../images/Tools/blue/snitchpick.png",
      description:
        "Hooked tool for the forceful retrieval of loot from bugs and husks. Harpoon into foes to steal rosaries and shell shards, while causing additional damage.",
      location: "Bought from Grindle for  740.",
    },
    {
      name: "Volt Filament",
      image: "../images/Tools/blue/voltfilament.png",
      description:
        "Charged organ from a defeated Voltvyrm. Can be coiled around thread, imbuing Silk Skills with electric charge.",
      location: "Reward for defeating Voltvyrm in Voltnest.",
    },
    {
      name: "Quick Sling",
      image: "../images/Tools/blue/quicksling.png",
      description:
        "Taut-drawing mechanism built from reed and bone, intended for mounting on the limb of a bug. Doubles the number of tools thrown.",
      location: "Found behind a breakable ceiling in Bilewater.",
    },
    {
      name: "Wreath of Purity",
      image: "../images/Tools/blue/wreathofpurity.png",
      description:
        "Fragile band woven of reed and leaf, crafted to repel Muckmaggots. If broken, the wreath will be repaired while resting at a bench.",
      location: "Found in a secret passage within Putrified Ducts.",
    },
    {
      name: "Longclaw",
      image: "../images/Tools/blue/longclaw.png",
      description:
        "Talisman fashioned from the talon of a large predator. Increases the range of needle attacks.",
      location:
        "Reward for completing either the Broodfeast or Runtfeast Wishes.",
    },
    {
      name: "Wispfire Lantern",
      image: "../images/Tools/blue/wispfirelantern.png",
      description:
        "Broken iron lantern containing smouldering wispfire. Wisps will spawn from the lantern and burn foes, at the cost of Silk.",
      location: "Reward for defeating Father of the Flame in Wisp Thicket.",
    },
    {
      name: "Egg of Flealia",
      image: "../images/Tools/blue/eggofflealia.png",
      description:
        "Icon of the mythical mother flea, passed down from caravans of old. A symbol of protection and kinship. Decreases the cost of Silk Skills while health is full.",
      location: "Reward from Fleamaster Mooshka after finding all 30 Fleas.",
    },
    {
      name: "Pin Badge",
      image: "../images/Tools/blue/pinbadge.png",
      description:
        "Emblem of the Order of the Pinstress, the old blademasters of Pharloom. Reduces charge time of Needle Strike.",
      location: "Reward for defeating Pinstress.",
    },
  ],
  yellowtools: [
    {
      name: "Compass",
      image: "../images/Tools/yellow/compass.png",
      description: "",
      location: "",
    },
    {
      name: "Shard Pendant",
      image: "../images/Tools/yellow/shardpendant.png",
      description: "",
      location: "",
    },
    {
      name: "Magnetite Brooch",
      image: "../images/Tools/yellow/magnetitebrooch.png",
      description: "",
      location: "",
    },
    {
      name: "Weighted Belt",
      image: "../images/Tools/yellow/weightedbelt.png",
      description: "",
      location: "",
    },
    {
      name: "Barbed Bracelet",
      image: "../images/Tools/yellow/barbedbracelet.png",
      description: "",
      location: "",
    },
    {
      name: "Dead Bug's Purse",
      image: "../images/Tools/yellow/deadbugspurse.png",
      description: "",
      location: "",
    },
    {
      name: "Shell Satchel",
      image: "../images/Tools/yellow/shellsatchel.png",
      description: "",
      location: "",
    },
    {
      name: "Magnetite Dice",
      image: "../images/Tools/yellow/magnetitedice.png",
      description: "",
      location: "",
    },
    {
      name: "Scuttlebrace",
      image: "../images/Tools/yellow/scuttlebrace.png",
      description: "",
      location: "",
    },
    {
      name: "Ascendant's Grip",
      image: "../images/Tools/yellow/ascendantsgrip.png",
      description: "",
      location: "",
    },
    {
      name: "Spider Strings",
      image: "../images/Tools/yellow/spiderstrings.png",
      description: "",
      location: "",
    },
    {
      name: "Silkspeed Anklets",
      image: "../images/Tools/yellow/silkspeedanklets.png",
      description: "",
      location: "",
    },
    {
      name: "Thief's Mark",
      image: "../images/Tools/yellow/thiefsmark.png",
      description: "",
      location: "",
    },
  ],
};
