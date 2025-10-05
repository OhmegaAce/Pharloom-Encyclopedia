const bossData = {
  bosses: [
    {
      id: 1,
      name: "Bell Beast",
      location: "The Marrow",
      health: 150,
      phases: 2,
      image: "../images/Bosses/bellbeast.png",
      theme: "Bell Beast",
      music: "../music/bosses/bellbeast.mp3",
      information: {
        "in-game events":
          "The Bell Beast is initially found in The Marrow, where she is trapped in Silk. Once the Bell Beast is freed using the Silkspear skill, she attacks Hornet. After her defeat, the Bell Beast allows Hornet to ride her and acts as the game's fast travel system. The Bell Beast also drops the first Silk Heart which takes Hornet into a Silk dream when she collects it. Upon waking, Hornet is now on the station platform next to the ready and waiting Bell Beast. In Act 3 upon reaching any Bellway, the Bell Beast is missing from their station and a hole is open where they would normally reside. Hornet can enter this hole and drop into the Bellways where she then fights the Bell Eater. Upon defeating the Bell Eater, the Bell Beast returns to deliver the final blow before Hornet returns back to the station. It is then revealed that the Bell Beast is now a mother and has a litter of Beastlings. From them Hornet learns the Beastling Call which can be played on her Needolin on any stable surface to summon Beastlings to take her directly to whichever Bellway station the Bell Beast is presently at.",
        "behavior and tactics": {
          summary:
            "The Bell Beast remains burrowed for the most of the fight, but pops up out of the ground to perform her various attacks. The location the Bell Beast emerges from is indicated by rumbling dust clouds.",
          phases: [
            {
              name: "Phase 1",
              description: "In the first phase, she has the following attacks:",
              attacks: [
                {
                  name: "Charge",
                  description:
                    "The Bell Beast charges forward from one end of the arena to the other. The initial dust cloud will barely graze the foreground hanging bell's bottom.",
                },
                {
                  name: "Leap",
                  description:
                    "The Bell Beast hops in the air across the entire arena and slams into the ground. She pauses for a moment after landing before burrowing again. The initial dust cloud will completely envelop both foreground bells, being notably taller.",
                },
                {
                  name: "Bell Burst",
                  description:
                    "The Bell Beast bursts her upper body out of the ground, sending out 2 rolling bells, one in each direction, before going down underground again. She gains this attack when her HP reaches 120. The initial dust cloud is visibly thinner.",
                },
              ],
              notes: "Contact with Bell Beast deals 2 Masks of damage.",
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 75 HP, the Bell Beast will pop up her upper body to roar before burrowing again; the ground rumbles as 8 bells drop from random locations in the ceiling. These bells bounce once before disappearing.",
              description:
                "After this, phase 2 begins and she modifies 2 preexisting attacks:",
              attacks: [
                {
                  name: "Bell Burst (Modified)",
                  description:
                    "A third bell drops near where the Bell Beast burrowed shortly after she launches the first 2 bells.",
                },
                {
                  name: "Bell Drop",
                  description:
                    "A bell now drops from the ceiling in a random location after the Bell Beast lands from using the Leap attack.",
                },
              ],
            },
          ],
          strategy:
            "While it is slow enough to manage its attacks simply by avoiding the dust clouds then responding accordingly, there are some subtleties to the dust clouds that can be used to position oneself to hit Bell Beast even more, should one wish to finish the fight more quickly.",
        },
      },
    },
    {
      id: 2,
      name: "Bell Eater",
      location: "Any Bellway (Act 3)",
      health: 800,
      phases: 2,
      image: "../images/Bosses/belleater.png",
      theme: "Bell Beast",
      music: "../music/bosses/bellbeast.mp3",
      information: {
        "in-game events":
          "Upon starting Act 3, visiting and calling out in any Bellway will cause the Bell Eater to burst out and roar instead of the Bell Beast. Afterwards, Hornet can follow the Bell Eater down a hole into the tunnels where it will be fought as a boss. It is finished off by Bell Beast, who returns in to deliver the final blow. The Bell Beast is now accompanied by its Beastlings who teach Hornet the Beastling Call.",
        "behavior and tactics": {
          summary:
            "When Hornet approaches, Bell Eater first uses its body to wall off her left and right sides, creating a small arena. In this fight, the Bell Eater's grey plated body is immune to damage, and it must be attacked by hitting its soft beige rear, or its red head section which appear separately during attacks but share a health pool.",
          phases: [
            {
              name: "Phase 1",
              description:
                "The Bell Eater stays burrowed for most of the battle:",
              attacks: [
                {
                  name: "Lash Out",
                  description:
                    "If Hornet gets too close to or strikes one of Bell Eater's legs at the edges of the arena, it slices wildly at her. Each leg can attack separately.",
                },
                {
                  name: "Spit",
                  description:
                    "Bell Eater pokes its head out, either up from the ground or down from the ceiling. It then spits out a spray of arcing red projectiles that fall to the ground. These projectiles can be destroyed. The Bell Eater will loosely track Hornet when firing projectiles.",
                },
                {
                  name: "Flail",
                  description:
                    "If Bell Eater pokes its head out, it can wind up before swinging its 4 front legs wildly. It performs this attack more often if Hornet is close to its head.",
                },
                {
                  name: "Bombardment",
                  description:
                    "Bell Eater pokes its rear end out, either up from the ground or down from the ceiling, and fires 2 bouncing red explosives; alternating sides for each. The rear is angled slightly to indicate which direction it will shoot from, and its bombs explode after bouncing around 3 times or upon hitting a target or wall. They can also be deflected by a Needle strike.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After Bell Eater reaches 360 HP, the walls move outward to expand the arena to about twice the width.",
              description:
                "In this phase, Bell Eater's head and rear can now appear simultaneously to each perform an attack. It also modifies 2 previous attacks:",
              attacks: [
                {
                  name: "Bell Bulldoze",
                  description:
                    "Bell Eater rushes forwards across the entire arena, either against the ground or sticking to the ceiling, before switching surfaces and rushing in the opposite direction along the opposing face. 2 bells will fall and bounce once in random locations when it burrows against the ground, and 3 will fall when it digs through the ceiling. While it usually performs this attack twice, occasionally it will only perform one rush against either surface. Its head and body can be bounced off of while bulldozing across the ground.",
                },
                {
                  name: "Spit (Modified)",
                  description: "The head spits more projectiles.",
                },
                {
                  name: "Bombardment (Modified)",
                  description: "The rear end fires a third bomb.",
                },
              ],
              notes:
                "All of Bell Eater's attacks deal 2 Masks of Damage, including contact damage; with its swiping leg attacks dealing 2 in quick succession.",
            },
          ],
          strategy:
            "Red tools with mobility or AOE damage are ideal, such as the Cogfly and the Voltvessels. Blue tools such as Reserve Bind, Fractured Mask, and Injector Band are good options for this encounter. If using a tool focused build, Pollip Pouch and Quick Sling are good options. The only yellow tool that is useful for this fight is the Magnetite Dice, for a small chance to negate damage. For the Bell Bulldoze attack, if it occurs along the ground, Hornet must stay in the air to avoid taking damage. This can be done using Drifter's Cloak, Bind, or pogoing. Using Bind is dangerous because of the falling bells.",
        },
      },
    },
    {
      id: 3,
      name: "Broodmother",
      location: "The Slab",
      health: 700,
      phases: 2,
      image: "../images/Bosses/broodmother.png",
      theme: "Cut Through",
      music: "../music/bosses/cutthrough.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Upon entering the arena, Hornet is locked in and must first fight through the following waves of enemies: Wave 1: 4 Freshflies. Wave 2: 3 Freshflies and a Guardfly. Wave 3: 3 Freshflies and a Wardenfly. Afterwards Broodmother flies into the centre of the arena and wails, beginning the boss fight.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Broodmother hovers around the top half of the arena and uses the following attacks:",
              attacks: [
                {
                  name: "Broodspawn",
                  description:
                    "Broodmother spawns 1-2 Freshflies in a row diagonally below her. The explosion from these flies does not damage her.",
                },
                {
                  name: "Muck Spit",
                  description:
                    "Broodmother spits 1-2 globs of muck in succession diagonally downwards towards Hornet which stick to the ground. The globs can be attacked to destroy them. The muck deals no damage, but if Hornet gets caught, she will be immobilized and needs to remove the muck by pressing ATTACK 4 times.",
                },
                {
                  name: "Grabbing Leap",
                  description:
                    "Broodmother rears back before launching herself at Hornet across roughly half the arena and landing on the ground. If Hornet is close to the ground after this she lands, Broodmother can turn around and leap towards her again. This can be repeated up to 2 times.",
                },
                {
                  name: "Buzz Away",
                  description:
                    "Broodmother will fly backwards a short distance away from Hornet if she is too close after an attack.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 385 HP, Broodmother roars and immediately performs the Wild Slam attack, she then adds this attack to her arsenal:",
              attacks: [
                {
                  name: "Wild Slam",
                  description:
                    "Broodmother wails and then slams her body between the floor and ceiling 5 times; slowly moving a short distance forwards with every slam and turning without stopping when reaching a wall. She will always slam downwards first and thus also end the attack with a ground slam.",
                },
              ],
              notes: "Broodmother deals 2 Masks of damage on contact.",
            },
          ],
        },
      },
    },
    {
      id: 4,
      name: "Cogwork Dancers",
      location: "Cogwork Core",
      health: 630,
      phases: 4,
      image: "../images/Bosses/cogworkdancers.png",
      theme: "Cogwork Dancers",
      music: "../music/bosses/cogworkdancers.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "This battle is split into 4 phases, each marked by the Dancers moving back to their stations to be wound up. Cogwork Dancers do not share HP; a phase ends when either reaches 0 health for that phase. All of their attacks have clear telegraphs and are performed on a rhythm.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Cogwork Cadence",
                  description:
                    "Each Dancer simultaneously projects a light beam from its head before dashing in that direction. If one dashes to the ground with this attack, it slashes to both sides as it lands. One of the Dancers may remain in place and simply spin around.",
                },
                {
                  name: "Cogwork Configuration",
                  description:
                    "Both Dancers leave the arena temporarily, then a pattern of light beams appears. The Dancers attack by dashing along each light beam, then return to the arena.",
                },
                {
                  name: "Cogwork Clash",
                  description:
                    "Both Dancers project light beams towards the centre where a circle telegraph appears. They dash toward the centre, then attack in a flurry of slashes within the circle.",
                },
              ],
              notes:
                "All attacks deal 2 Masks of damage; contact deals 2 Masks at once, while Cogwork Clash or Cogwork Configuration deal 1 Mask twice.",
            },
            {
              name: "Phase 2",
              description:
                "Their attacks become faster and they sometimes use Cogwork Configuration twice in a row.",
            },
            {
              name: "Phase 3",
              description:
                "Each Dancer performs Cogwork Cadence offset from one another.",
            },
            {
              name: "Phase 4",
              description:
                "This phase begins when one Dancer is destroyed, continuing the fight with only one Dancer at a much slower pace. If it attempts to use Cogwork Clash, it fails and drops to the ground. It can no longer use Cogwork Configuration.",
            },
          ],
        },
      },
    },
    {
      id: 5,
      name: "Crawfather",
      location: "Craw Lake",
      health: 1300,
      phases: 1,
      image: "../images/Bosses/crawfather.png",
      theme: "Cut Through",
      music: "../music/bosses/cutthrough.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Crawfather starts his trial by summoning several waves of enemies in his arena: 1x Squatcraw Juror and 1x Tallcraw Juror, then 2x Craw Jurors, then 2x Squatcraw Jurors, then 2x Craw Jurors, and finally 2x Tallcraw Jurors. Once all waves have been defeated, he flies in himself to deliver punishment to Hornet.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Triple Peck",
                  description:
                    "Crawfather reels his head back, before pecking the ground three times, moving forward with each attack. This attack deals two masks of damage.",
                },
                {
                  name: "Summon Juror",
                  description:
                    "Crawfather screams, summoning either two Craw Jurors, one Tallcraw Juror, or one Squatcraw Juror.",
                },
                {
                  name: "Dive Peck",
                  description:
                    "Crawfather takes flight, flutters for a short while, then dashes towards Hornet with his beak, dealing two masks of damage.",
                },
              ],
            },
            {
              name: "Mid-Fight",
              trigger:
                "After enough damage is dealt, Crawfather obtains another attack:",
              attacks: [
                {
                  name: "Chain Punishment",
                  description:
                    "Crawfather flutters at a medium height, sending chains in all directions. After a short while, the chains erupt in barbed spikes, dealing two damage on hit. After this, Crawfather falls back to the ground, striking with his beak down below.",
                },
              ],
            },
          ],
          strategy:
            "The Jurors are beefier versions of the Crawbugs from earlier in Greymoor. Tactics from before are just as effective in dispatching them, though bear in mind that the spiked crowns on the Tallcraw and Squatcraw Jurors make aerial down-attacks less effective. Prioritize defeating any Jurors that join the fight. The Crawfather himself is less complex than handling multiple enemies. Despite being a winged boss, the Crawfather spends a lot of time on the ground, and is highly vulnerable to ground-based Tools such as Tacks and Cogwork Wheel.",
        },
      },
    },
    {
      id: 6,
      name: "Crust King Khann",
      location: "Coral Tower",
      health: 1650,
      phases: 2,
      image: "../images/Bosses/crustkingkhann.png",
      theme: "Crust King Khann",
      music: "../music/bosses/crustkingkhann.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "During his first phase, Crust King Khann has 5 attacks:",
              attacks: [
                {
                  name: "Coral Strike",
                  description:
                    "Crust King Khann summons a horizontal coral pillar across the width of the arena.",
                },
                {
                  name: "Coral Pillar",
                  description:
                    "Crust King Khann summons a vertical coral pillar at Hornet's position.",
                },
                {
                  name: "Aerial Coral Strike",
                  description:
                    "Crust King Khann leaps into the air and summons a coral pillar diagonally downwards towards Hornet.",
                },
                {
                  name: "Coral Cross",
                  description:
                    "Crust King Khann summons 2 diagonal coral pillars from the ground, forming an x-shape above him.",
                },
                {
                  name: "Coral Overgrowth",
                  description:
                    "Crust King Khann shouts and causes 3 coral growths to erupt randomly across the floor and ceiling each.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After losing enough health, Crust King Khann shouts, marking the beginning of the second phase.",
              description:
                "During this phase, one of his previous attacks gains new properties, and he begins using a new attack:",
              attacks: [
                {
                  name: "Coral Cross (Modified)",
                  description:
                    "Crust King Khann may execute another attack at a quicker pace or summon a second set of diagonal coral pillars from the ceiling, their bases closer together than the first.",
                },
                {
                  name: "Spike Rain",
                  description:
                    "Crust King Khann slams the ground, summoning 6 evenly spaced coral spikes that fall from the ceiling. Crust King Khann will always use this attack at the start of the second phase.",
                },
              ],
            },
          ],
          strategy:
            "The difficulty with Khann lies more in the Coral Tower combat gauntlets leading up to him than the fight himself. Prioritize flying enemies as grounded ones are easier to deal with alone. Clawline can catch them in the air and set up Hornet for a follow-up strike. Knockback from Hornet's melee attacks can push non-flying enemies into the spikes to speed up the progress of the gauntlet. The best times to strike Khann is when he's using Coral Pillar or shortly after Aerial Coral Strike, as there will be safe zones near him that the attacks will not cover. While he is in the air preparing for Aerial Coral Strike, stand directly under him, as launching the attack has a backwards recoil on him and he will land directly in front of Hornet. Going too far forward risks collision damage.",
        },
      },
    },
    {
      id: 7,
      name: "Disgraced Chef Lugoli",
      location: "Sinner's Road",
      health: 600,
      phases: 2,
      image: "../images/Bosses/disgracedcheflugoli.png",
      theme: "Cut Through",
      music: "../music/bosses/cutthrough.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "After entering the arena, Hornet must ring the massive gong hanging from the ceiling to initiate the fight. The gong first summons 2 Roachservers from the background, which must be killed before the boss fight begins.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Lugoli descends from the ceiling, directly into a Slam attack in the middle of the arena. They then float about the room and have the following attacks:",
              attacks: [
                {
                  name: "Slam",
                  description:
                    "Lugoli flies a short distance diagonally upwards to position over Hornet. They then slam themselves into the ground, sending 4 arcing Muckmaggot Globs flying, 2 in each direction.",
                },
                {
                  name: "Leaping Butt Slam",
                  description:
                    "Lugoli leaps, rear first, horizontally towards Hornet, and landing on the ground after. The leap covers over half of the arena.",
                },
                {
                  name: "Ladle Slap",
                  description:
                    "Lugoli winds up their ladle for a moment, before quickly slamming it into the ground in Hornet's direction, flinging 2 arcing Muckmaggot Globs forward.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 300 HP, Lugoli will roar and immediately perform the Muckmaggot Dive attack. They then add this attack to their arsenal.",
              attacks: [
                {
                  name: "Muckmaggot Dive",
                  description:
                    "Lugoli grunts then makes a large dive into the muck under the floor; randomly choosing either the left, right, or centre of the arena. When they hit the water it flings out 5 Muckmaggot Globs - 2 arcing in each direction and 1 directly upwards. They then emerge again from the same spot, flinging 5 more Muckmaggot Lumps.",
                },
              ],
              notes:
                "Lugoli deals 2 Masks of contact damage. Muckmaggot Lumps will deal 1 Mask of damage and infest Hornet if they hit her. Lumps ricochet off walls and are destroyed when they hit the ground. Striking them with the Needle stops their momentum. Equipping the Wreath of Purity prevents the infestation up to 3 times, but does not block the damage.",
            },
          ],
        },
      },
    },
    {
      id: 8,
      name: "Father of the Flame",
      location: "Wisp Thicket",
      health: 640,
      phases: 2,
      image: "../images/Bosses/fatheroftheflame.png",
      theme: "Sister Splinter",
      music: "../music/bosses/sistersplinter.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Father of the Flame is a unique fight as it has to be struck in particular parts of its body, depending on the phase, to deal damage to it. Hitting Father of the Flame also does not grant Hornet any Silk.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Father of the Flame spawns with four arms (two lower, two higher) and four balloons attached to parts of its body which allow Hornet to reach the higher arms. After destroying the higher arm in each side, the balloons attached to each also disappear. Each arm contains a glowing Wisp Lantern which must be destroyed to defeat the boss.",
              attacks: [
                {
                  name: "Wisp Summoning",
                  description:
                    "Wisps are summoned continuously by each of the Wisp Lanterns. With each destroyed arm, the Wisps are summoned faster.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After the Father of the Flame's arms have been destroyed, its body begins to burn fiercely and reveal a massive Wisp Lantern; which must now be attacked to damage it.",
              attacks: [
                {
                  name: "Ring of Fire",
                  description:
                    "The exposed main body unleashes a torrent of fireballs in all directions. It fires 4-5 waves of fireballs; some of them travelling in curved trajectories. Afterwards, it performs Wisp Summoning 3 times before repeating this attack.",
                },
                {
                  name: "Final Immolation",
                  description:
                    "Upon defeat, the massive Wisp Lantern falls and cracks against the ground, before creating a massive explosion.",
                },
              ],
              notes:
                "All the Father of the Flames' attacks deal 2 Masks of fire damage, which can be reduced to 1 with Magma Bell equipped.",
            },
          ],
          strategy:
            "Avoid using the Witch / Cursed Crest. Its down-slash is divided into 2 hits with the second only occurring when hitting enemies, which Father of the Flame's cages do not count as, resulting in it dealing about half as much damage as other crests in this fight. Cogflies cannot contribute to the fight as they cannot target the boss's weak points. Magma Bell is highly recommended in this fight as all damage sources in this fight inflict fire damage. The Wisps and fireballs are very easy to dodge, offering ample opportunity for the Bell to recharge and continue protecting Hornet. As melee attacks on this boss do not generate any Silk, Reserve Bind or Druid's Eye(s) can work as a way to get an additional heal opportunity. Reaper Crest and Wanderer Crest have downward slashes that make for easier pogo'ing on the stage obstacles and the boss's weak points. Reaper Crest has a larger melee range that gives better leeway, while Wanderer Crest has a faster attack speed to damage the boss quickly. For the two lower arms and the body, it's easy to stay on the ground, charge Needle Strike and strike while avoiding Wisps. Leave them for last in order to make getting to the higher arms easier. For the two higher arms, once the first Wisp is avoided, the sequence of Strike - Faydown Cloak - Strike can be used effectively to match the spawn rate of Wisp. The Delver's Drill can be a decent option for dealing high damage to the stationary cages without requiring the precise timing and positioning of repeated pogos, but leaves Hornet vulnerable to attack while being used. Alternatively, the Clawline - jump - Clawline sequence to attack the two upper arms is recommended for players who want to advance the fight faster. Thread Storm is large enough to hit both of the cages on the right arms. This may require presice placement to destroy both, however. Voltvessels can be used to deal large amounts of damage in a column, damaging the cages while remaining on the ground.",
        },
      },
    },
    {
      id: 9,
      name: "First Sinner",
      location: "The Slab",
      health: 1300,
      phases: 2,
      image: "../images/Bosses/firstsinner.png",
      theme: "Widow",
      music: "../music/bosses/widow.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "During her first phase, First Sinner has the following attacks:",
              attacks: [
                {
                  name: "Needle Weaving",
                  description:
                    "First Sinner channels for a brief moment which pulls up Needles from the background and positions them in the air, before launching them in various patterns (cross shape, vertical, diagonal, horizontal). She can occasionally layer two patterns together after her health drops below 1105 HP.",
                },
                {
                  name: "Bind",
                  description:
                    "First Sinner channels Silk for about 2 seconds, before healing herself for 130 HP. This ability can be interrupted by damaging her while she's channelling. She gains this attack after reaching 1105 HP.",
                },
                {
                  name: "Frenzied Charge",
                  description:
                    "First Sinner charges across the length of the arena towards Hornet while swinging her blades.",
                },
                {
                  name: "Aerial Lunge",
                  description:
                    "First Sinner teleports or leaps into the air near Hornet and performs 2 quick slashes diagonally downwards in Hornet's direction.",
                },
                {
                  name: "Teleport",
                  description:
                    "First Sinner teleports to a random location in the arena between attacks.",
                },
                {
                  name: "Skitter",
                  description:
                    "First Sinner skitters away from Hornet if she is too close, or towards her if she is too far away to reposition.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 650 HP, First Sinner teleports out of view for a few moments before reappearing and shouting, marking the start of the second phase.",
              description:
                "During this phase, First Sinner performs her attacks at a much faster pace, and she gains an attack:",
              attacks: [
                {
                  name: "Rune Rage",
                  description:
                    "First Sinner rises into the air and weaves 12 circles of blazing Silk randomly throughout the arena. After a short moment, these circles explode into runes in rapid succession in the order in which they appeared.",
                },
              ],
              notes:
                "All of First Sinner's attacks deal 2 Masks of damage, with her Frenzied Charge dealing 2 Masks in quick succession if Hornet is caught in a swing.",
            },
          ],
        },
      },
    },
    {
      id: 10,
      name: "Forebrothers Signis and Gron",
      location: "Deep Docks",
      health: 1240,
      phases: 3,
      image: "../images/Bosses/forebrotherssignisandgron.png",
      theme: "Fourth Chorus",
      music: "../music/bosses/fourthchorus.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1 (Forebrother Signis)",
              description:
                "When the fight is initiated, Forebrother Signis shouts, causing 2 grates to open up and constant streams of lava to flow on the left and right sides of the room; trapping Hornet in an arena. Signis himself performs the following attacks:",
              attacks: [
                {
                  name: "Reposition",
                  description:
                    "Signis can run or make small leaps around the arena to reposition for attacks.",
                },
                {
                  name: "Protect",
                  description:
                    "Signis skips backwards across the arena while spinning his staff.",
                },
                {
                  name: "Spinning Combo",
                  description:
                    "Signis slashes twice in a row, travelling forwards with each, and finishes off the second slash by spinning his staff in front of himself.",
                },
                {
                  name: "Flaming Boomerang",
                  description:
                    "Signis spins his staff, then throws it horizontally at Hornet. After travelling a distance of roughly 3 quarters of the arena, the staff flies back to him. He sometimes makes a short backwards dash either before performing this attack, or while the staff is still spinning - causing it to travel a longer distance back to him.",
                },
                {
                  name: "Summon",
                  description:
                    "Signis shouts, summoning enemies that drop from the ceiling. This attack is used only 3 times at certain HP thresholds (648 HP: Flintstone Flyer; 504 HP: Smokerock Sifter and Flintstone Flyer). If fought in Act 3 the summoned enemies have a chance to become Void-corrupted.",
                },
              ],
            },
            {
              name: "Phase 2 (Forebrothers Signis & Gron)",
              trigger:
                "At 360 HP, Signis summons Forebrother Gron who falls into the arena with a Dive attack and begins the second phase.",
              description:
                "In this phase, Forebrother Signis' behaviour stays the same, while Forebrother Gron has the following attacks:",
              attacks: [
                {
                  name: "Spear Throw (Gron)",
                  description:
                    "Gron makes a large leap upwards, and throws his spear at Hornet at the height of the jump, which propels him backwards slightly as he falls back down. If the spear embeds into the ground, the tip explodes shortly after.",
                },
                {
                  name: "Explosive Dive (Gron)",
                  description:
                    "Gron leaps upwards directly above Hornet's position, then dives down to the floor using his spear, causing an explosion where he lands.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "After either Forebrother is defeated, if the remaining one is below 350 HP he gains 200 HP up to 350 max, and continues to fight.",
              description:
                "A flow of lava will begin to periodically fall in the centre of the arena. Depending on which Forebrother remains, their behaviour is altered. They will try to stay on the opposite side of the lava stream from Hornet, using ranged attacks (Flaming Boomerang for Signis, Spear Throw for Gron). They will only use melee attacks if Hornet gets too close.",
            },
          ],
          strategy:
            "Forebrothers Signis & Gron are immune to attacks from above. Hornet can still Needle-bounce off their bell helmets, but this will deal no damage. Both bosses' spear attacks deal 2 Masks of fire damage that can be reduced to 1 by equipping the Magma Bell.",
        },
      },
    },
    {
      id: 11,
      name: "Fourth Chorus",
      location: "Far Fields",
      health: 500,
      phases: 4,
      image: "../images/Bosses/fourthchorus.png",
      theme: "Fourth Chorus",
      music: "../music/bosses/fourthchorus.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Fourth Chorus can only be attacked by hitting its head. Its head and body do not deal damage on contact, but its hands deal 2 Masks of damage. Each attack is telegraphed by the corresponding hand glowing.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Swipe",
                  description:
                    "Fourth Chorus swipes one of its lower arms across the entire arena. The left hand swipes from the left to the right, and vice versa.",
                },
                {
                  name: "Slam",
                  description:
                    "Fourth Chorus raises one of its upper arms before slamming it down. This causes up to 2 of the platforms in the arena to sink into the lava. Platforms have their own timer before rising.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 450 HP, Fourth Chorus staggers and falls to the platform. After it gets up, it will roar, indicating the start of this phase.",
              description:
                "Its attack speed increases, and it gains a new attack which it always performs at the start of the phase:",
              attacks: [
                {
                  name: "Rock Dance",
                  description:
                    "Fourth Chorus raises its arms upwards and slams the top of the arena multiple times, causing molten rocks to fall down in random locations over several seconds.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "After reaching 325 HP, Fourth Chorus staggers and collapses again. After it rises, its attack speed increases.",
            },
            {
              name: "Phase 4",
              trigger:
                "When Fourth Chorus reaches 200 HP, it staggers a final time. It roars again after rising, which destroys the two outer platforms and creates 2 updrafts in their place.",
              description:
                "Its attack speed is lowered in this phase, and it can no longer perform Rock Dance. Riding the updrafts allows Hornet to reach two explosives embedded in the ceiling. Hitting both causes a massive boulder to drop onto Fourth Chorus's head, instantly killing it. This finisher is optional.",
            },
          ],
        },
      },
    },
    {
      id: 12,
      name: "Garmond and Zaza",
      location:
        "Greymoor, Sinner's Road, Choral Chambers, Whispering Vaults, High Halls",
      health: 460,
      phases: 1,
      image: "../images/Bosses/garmondandzaza.png",
      information: {
        "behavior and tactics": {
          summary:
            "In Garmond and Zaza's duel as a boss fight above the Whispering Vaults, they have the following move set:",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Hornlance Sweep",
                  description:
                    "Zaza stands still while Garmond swings his Hornlance back and forth 5 times, making large arcs above him.",
                },
                {
                  name: "Gallant Joust",
                  description:
                    "Garmond readies his Hornlance and the two charge towards Hornet, continuing until they reach the edge of the arena platform.",
                },
                {
                  name: "Cavalier Drop",
                  description:
                    "Zaza makes a tall leap towards Hornet at a short set distance. At the apex of the jump, Garmond stabs downwards with his Hornlance straight into the ground.",
                },
                {
                  name: "Charge",
                  description:
                    "Zaza will run towards Hornet to reposition for an attack.",
                },
              ],
            },
          ],
          strategy:
            "Garmond and Zaza can be knocked off the arena platform into the adjacent spikes, which will deal some damage to them before they leap back onto the platform.",
        },
      },
    },
    {
      id: 13,
      name: "Grandmother Silk",
      location: "The Cradle",
      health: 1095,
      phases: 6,
      image: "../images/Bosses/grandmothersilk.png",
      theme: "Awakening",
      music: "../music/bosses/awakening.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Throughout her fight, Grand Mother Silk floats in the background above Hornet with 6 needles floating by her sides. She does not deal contact damage, and her torso must be struck to damage her. The needles also do not deal contact damage when they aren't used for an attack.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Needle Flurry",
                  description:
                    "Grand Mother Silk sends 2 sets of 3 needles at Hornet, one vertically and the other horizontally. Horizontal needles will always have a gap to jump through.",
                },
                {
                  name: "Needle Walls",
                  description:
                    "Grand Mother Silk sends out 2 sets of 3 needles to the edges of the arena, which then travel horizontally at Hornet from the left and right.",
                },
                {
                  name: "Claw Swipe",
                  description:
                    "Grand Mother Silk winds up a claw before slashing it across the entire floor of the arena, bringing it up at the end and creating a large arc. She follows this up by immediately sending all 6 pins downward.",
                },
                {
                  name: "Glide",
                  description:
                    "Grand Mother Silk continually makes small dashes backwards away from Hornet to stay away from her.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 1005 HP, she attacks at a slightly faster rate and gains a new attack:",
              attacks: [
                {
                  name: "Silk Web",
                  description:
                    "Grand Mother Silk shrieks, then a random pattern of silk lines appear across the entire arena. If Hornet is caught in one when it triggers, a short cutscene plays in which she takes 3 Masks of damage in quick succession.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "Upon reaching 830 HP, Grand Mother Silk will stop and shriek. She attacks at an even faster rate, gains one attack, and alters two others.",
              attacks: [
                {
                  name: "Needle Rain",
                  description: "All 6 needles are sent vertically downward.",
                },
                {
                  name: "Needle Flurry (Modified)",
                  description:
                    "The first set of 3 needles is sent out again after the second wave.",
                },
                {
                  name: "Silk Web (Modified)",
                  description:
                    "Repeats once, immediately after the first ends.",
                },
              ],
            },
            {
              name: "Phase 4",
              trigger:
                "Upon reaching 620 HP, Grand Mother Silk falls off-screen with a fake-out death. After a short downtime with falling debris, she reappears.",
              description:
                "Her attack rate slows down slightly but she gains a new attack:",
              attacks: [
                {
                  name: "Debris Rain",
                  description:
                    "Thick sets of silk lines appear, which is followed by debris raining down. Grand Mother Silk can perform other attacks during this.",
                },
              ],
            },
            {
              name: "Phase 5",
              trigger:
                "After reaching 520 HP, Grand Mother Silk's attack pace speeds up again slightly and she gains a new attack:",
              attacks: [
                {
                  name: "Spike Pull",
                  description:
                    "2-3 sets of silk lines appear and pull up spiked platforms from beneath the arena. These spikes only deal 1 Mask of damage and can be removed by hitting them twice.",
                },
              ],
            },
            {
              name: "Phase 6",
              trigger:
                "Upon reaching 300 HP, Grand Mother Silk shrieks again and her attacks come out slightly faster.",
              notes:
                "All of Grand Mother Silk's attacks deal 2 Masks of damage, with the exceptions of the Silk Web which deals 3 and the Spike Pull which deals 1.",
            },
          ],
        },
      },
    },
    {
      id: 14,
      name: "Great Conchflies",
      location: "Blasted Steps",
      health: 400,
      phases: 1,
      image: "../images/Bosses/greatconchflies.png",
      theme: "Incisive Battle",
      music: "../music/bosses/incisivebattle.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "The Great Conchflies begin the fight by each flying in from the ceiling and floor and roaring when meeting in the centre of the arena, after which they continue their initial trajectory and burrow away. The fight then begins with the pair of bosses having the following simple shared move set:",
          phases: [
            {
              name: "Phase 1",
              description:
                "Where a Conchfly will emerge from is indicated by a pillar of rumbling sand.",
              attacks: [
                {
                  name: "Drill Dash",
                  description:
                    "Both Great Conchflies burst out of the walls together, either horizontally or vertically, travel across the arena, and then each burrow back into their opposite walls.",
                },
                {
                  name: "Conch Spit",
                  description:
                    "A single Great Conchfly descends from a ceiling corner before spitting a conch projectile in a diagonal direction towards Hornet. The conch ricochets 3 times before breaking. After the projectile bounces twice, the Conchfly burrows directly downwards while the other Conchfly simultaneously performs a Drill Dash attack.",
                },
                {
                  name: "Drill Slam",
                  description:
                    "A single Great Conchfly burrows out of a ceiling corner, flies horizontally across the room and then burrows downwards into the ground. When the first Conchfly is burrowing into the ground, the other Conchfly can either perform a simultaneous Drill Dash, or perform a single Conch Spit attack.",
                },
              ],
              notes: "Contact with a Great Conchfly deals 2 Masks of damage.",
            },
          ],
          strategy:
            "The conch projectiles can be hit back towards the Great Conchfly to deal damage to it. Hornet can avoid most attacks by positioning herself in the corner of the arena. Jumping once toward the wall and sliding down places her in a spot where Conch Spit and Drill Slam cannot reach. The only threat is when a Great Conchfly uses Drill Dash across the floor, but this can be safely avoided with a simple jump.",
        },
      },
    },
    {
      id: 15,
      name: "Groal the Great",
      location: "Bilewater",
      health: 650,
      phases: 2,
      image: "../images/Bosses/groalthegreat.png",
      theme: "Cut Through",
      music: "../music/bosses/cutthrough.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Prior to fighting Groal, Hornet must first fight through 6 waves of enemies. After this, Groal rises up from the centre of the Muckmaggot pool and roars, beginning the fight.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Groal the Great dives underwater between most attacks. After emerging, he will hover around a distance away from Hornet and perform 1-2 attacks before diving again. He has the following attacks at his disposal:",
              attacks: [
                {
                  name: "Acid Spit",
                  description:
                    "Groal spits out 2 arcing acid orbs towards Hornet that bounce once before stopping and exploding. If an orb lands in water, it will disappear.",
                },
                {
                  name: "Great Inhale",
                  description:
                    "Groal gapes his mouth open and inhales air horizontally in a large cone, attempting to swallow Hornet. If successful, Hornet takes damage until she struggles out. Throwing certain tools into his mouth will cause him to choke.",
                },
                {
                  name: "Spike Ball Ambush",
                  description:
                    "Groal remains underwater while bringing down a large Spike Ball trap that swings in an arc across the entire arena.",
                },
                {
                  name: "Stilkin Ambush",
                  description:
                    "Groal remains underwater and summons 2 random Stilkin or Stilkin Trappers that emerge from the water. These enemies attack once before dropping back into the water.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "Upon reaching 390 HP, Groal's body will glow white as he roars, gaining 1 new attack and performing it immediately:",
              attacks: [
                {
                  name: "Vengeful Spirit",
                  description:
                    "Groal's insides emit white light, and he charges up before unleashing 2-3 Vengeful Spirit Spells towards Hornet's direction.",
                },
              ],
              notes:
                "All of Groal's attacks, including contact, deal 2 Masks of damage. Where Groal and his Stilkin minions will rise up from below is indicated by rumbling splashes of water.",
            },
          ],
        },
      },
    },
    {
      id: 16,
      name: "Gurr the Outcast",
      location: "Far Fields",
      health: 1000,
      phases: 1,
      image: "../images/Bosses/gurrtheoutcast.png",
      theme: "Incisive Battle",
      music: "../music/bosses/incisivebattle.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Upon being pulled down into Gurr's arena, Hornet must attack to break free from the bone cage, while Gurr roars and begins the fight. Gurr remains underground for most of the fight, leaping out to perform attacks.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Trap Throw",
                  description:
                    "Gurr leaps into the air and throws 2 Barbed Traps (3 after reaching 750 HP) that float midair. After a few moments, traps extend their spikes into a large circle, then disappear. Hitting a trap expands it immediately.",
                },
                {
                  name: "Slide",
                  description:
                    "Gurr hunches down and slides across the arena, only stopping when he reaches a wall.",
                },
                {
                  name: "Floor Spikes",
                  description:
                    "Gurr dives into the ground, causing 3 sets of spikes to shoot up in random positions across the floor. The positions are telegraphed by small puffs of dust.",
                },
                {
                  name: "Trap Flurry",
                  description:
                    "Once per fight at 400 HP, Gurr shrieks while underground, then leaps out from the center of the arena and throws 5 Barbed Traps in succession around the room.",
                },
                {
                  name: "Leap",
                  description:
                    "Gurr makes large leaps around the arena to reposition for attacks.",
                },
                {
                  name: "Backroll",
                  description:
                    "If Hornet is too close to Gurr after an attack, he will quickly roll away.",
                },
              ],
              notes: "Gurr deals 2 Masks of damage on contact.",
            },
          ],
        },
      },
    },
    {
      id: 17,
      name: "Lace (Deep Docks)",
      location: "Deep Docks",
      health: 250,
      phases: 1,
      image: "../images/Bosses/lace.png",
      theme: "Lace",
      music: "../music/bosses/lace.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "In her first encounter and fight in the Deep Docks, Lace uses the following attacks and manoeuvres:",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Lunge",
                  description:
                    "Lace dashes forwards with her pin extended across the platform, covering roughly 60% of it.",
                },
                {
                  name: "Double Cut",
                  description:
                    "Lace slashes twice, making large arcs over her head. Each slash moves her forwards a slight distance.",
                },
                {
                  name: "Balestra",
                  description:
                    "Lace launches herself at an angle into the air and slashes a full circle around her body with her pin at the height of the jump. She then lunges diagonally downwards, skidding a short bit after landing. While at the peak of her jump, Lace can change the direction of her lunge depending on Hornet's position.",
                },
                {
                  name: "Parry & Riposte",
                  description:
                    "Lace holds her pin up, striking a defensive position. If struck, she retaliates with a dash and a quick flurry of strikes. If Hornet is caught, she takes 2 Masks of damage in quick succession.",
                },
                {
                  name: "Flourish",
                  description:
                    "During the end of an attack, Lace adds a small flair with a slash from her Pin, which deals damage and deflects projectiles.",
                },
                {
                  name: "Moulinet",
                  description:
                    "Lace stands in place and charges up, highlighting a white circle midair. She then unleashes a whirlwind of slashes within the highlighted region and slams down. This attack is used once at 125 HP and deals 2 Masks of damage.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 18,
      name: "Lace (The Cradle)",
      location: "The Cradle",
      health: 800,
      phases: 3,
      image: "../images/Bosses/lace.png",
      theme: "Lace",
      music: "../music/bosses/lace.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "In her second encounter and fight in The Cradle, Lace's first phase remains largely identical to her first fight’s phase 1, with some minor adjustments.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Her attacks come out at a much faster pace. If Hornet is too close after any attack, Lace can either immediately Parry or quickly Retreat. If parried, Lace can now also teleport behind Hornet before doing the Riposte. Her attacks and movement can sometimes carry her off the edge of the arena, and she will jump back on from the opposite side.",
              notes:
                "Double Cut and Balestra now deal a second Mask of damage if Hornet is caught in a swing.",
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 600 HP, Lace will stop and laugh, indicating the start of this phase. Her attacks remain mostly the same but 2 are upgraded:",
              attacks: [
                {
                  name: "Lunge (Modified)",
                  description:
                    "Lace performs a second, quicker and shorter Lunge immediately after the first, followed up by a Balestra; each attack always in Hornet's direction. This chain of attacks can be interrupted by a Parry or Retreat at any time if Hornet is too close inbetween 2 attacks.",
                },
                {
                  name: "Balestra (Modified)",
                  description:
                    "During the launch up, Lace leaves behind a trail of 3 large circles. After a moment these circles turn into slashes, dealing 2 Masks of damage if Hornet is caught in one when it activates.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "After reaching 320 HP, Lace will stop and scream, indicating the start of this phase.",
              description:
                "She regains the Moulinet attack and immediately performs it. The Moulinet attack is also now always chained twice in a row.",
              notes:
                "At any time, if Hornet leaves the platform and jumps to cling to one of the side walls, Lace will leap after her and deal 2 Masks of damage with a swing.",
            },
          ],
        },
      },
    },
    {
      id: 19,
      name: "Last Judge",
      location: "Blasted Steps",
      health: 720,
      phases: 2,
      image: "../images/Bosses/lastjudge.png",
      theme: "Last Judge",
      music: "../music/bosses/lastjudge.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Last Judge lets out a shout at the beginning of the fight, and at the start of Phase 2. On their first encounter only, they will always lead with the Thurible Throw attack aimed at Hornet, which kills off the other 2 Pilgrims that were waiting beside her.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Adjust",
                  description:
                    "Last Judge does quick, low jumps, either forward or backward.",
                },
                {
                  name: "Leap",
                  description: "Last Judge leaps to land on Hornet's location.",
                },
                {
                  name: "Slam",
                  description:
                    "Last Judge leaps into the air, hovers for a moment, and then slams the thurible into the ground on Hornet's location.",
                },
                {
                  name: "Thurible Throw",
                  description:
                    "Last Judge winds back before throwing their thurible forward in an upward arc. Shortly after the censer hits the ground, Last Judge quickly pulls it back.",
                },
                {
                  name: "Thurible Spin",
                  description:
                    "Last Judge starts spinning their thurible around themselves, deflecting projectiles. This is signalled by a quick twirl of the thurible around their wrist.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 540 HP, Last Judge's thurible ignites, and their attacks become stronger.",
              description:
                "Last Judge continues to use Adjust, but replaces the rest of the attacks of Phase 1 with the following attacks:",
              attacks: [
                {
                  name: "Fire Rings",
                  description:
                    "A more dangerous version of the Thurible Spin, with the spin creating multiple concentric rings of fire moving slowly outwards. They will always use this attack when Phase 2 begins.",
                },
                {
                  name: "Exploding Thurible Throw",
                  description:
                    "Last Judge throws their thurible forward in an upward arc. Shortly after hitting the ground, the thurible explodes. Last Judge then quickly pulls it back.",
                },
                {
                  name: "Fire Slam",
                  description:
                    "A more dangerous version of the Slam. Shortly after Last Judge lands, they send out two small burning shockwaves in either direction that cross the arena.",
                },
                {
                  name: "Charge",
                  description:
                    "Last Judge crouches, then charges in Hornet's direction, leaving 3 evenly spaced pillars of fire appearing behind them.",
                },
                {
                  name: "Judgement",
                  description:
                    "Once per fight, at 216 HP, Last Judge performs a longer Fire Rings attack that periodically switches the position of the rings. Once over, Last Judge is exhausted for a few seconds.",
                },
                {
                  name: "Retributive Explosion",
                  description:
                    "When Last Judge is defeated, they drop to their hands and knees. After a short while, several explosions happen in a large area centred around them, dealing 3 Masks of damage each.",
                },
              ],
            },
          ],
          strategy:
            "All of Last Judge's attacks, including contact with them, deal 2 Masks of damage. Their fire-based attacks in Phase 2 are telegraphed by clouds of smokey incense, which indicate the area of damage shortly before igniting.",
        },
      },
    },
    {
      id: 20,
      name: "Moorwing",
      location: "Greymoor",
      phases: 2,
      health: 600,
      image: "../images/Bosses/moorwing.png",
      theme: "Strive",
      music: "../music/bosses/strive.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "Moorwing floats above the ground and has 3 base attacks:",
              attacks: [
                {
                  name: "Swoop",
                  description:
                    "Moorwing swoops down in Hornet's direction a short distance across the ground and rises back into the air only after it has passed Hornet. If Hornet is far away, it will continue flying against the ground until it catches up to her.",
                },
                {
                  name: "Quick Swipes",
                  description:
                    "Moorwing screeches and then moves forward slightly, unleashing a flurry of slashing attacks using its legs aimed diagonally downwards in Hornet's direction.",
                },
                {
                  name: "Blade Toss",
                  description:
                    "Moorwing throws a spinning blade, which travels on the ground a distance before taking off into the air.",
                },
              ],
              notes: "Contact damage with Moorwing deals 2 Masks of damage.",
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 390 HP, the Moorwing will stop and screech, gaining a new attack and augmenting two previous ones:",
              attacks: [
                {
                  name: "Inverted Blade Toss",
                  description:
                    "Moorwing roars and flips upside down, throwing spinning blades in both directions, which arc downwards and converge towards the middle. These blades then continue travelling on the ground until they reach the end of the arena.",
                },
                {
                  name: "Swoop (Modified)",
                  description:
                    "Moorwing now follows this attack up with a single regular Blade Toss in Hornet's direction.",
                },
                {
                  name: "Blade Toss (Modified)",
                  description:
                    "Moorwing now throws 2 blades in succession. The second circles back towards the Moorwing in a large loop before disappearing.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 21,
      name: "Moss Mother",
      location: "Ruined Chapel",
      phases: 1,
      health: 120,
      image: "../images/Bosses/mossmother.png",
      theme: "Strive",
      music: "../music/bosses/strive.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "After destroying one of her eggs or walking to the end of the arena, she explodes out of a plant-like cocoon in the middle of the arena and lets out a screech, signalling the start of the fight.",
          phases: [
            {
              name: "Phase 1",
              description: "Moss Mother has two attacks:",
              attacks: [
                {
                  name: "Swoop",
                  description:
                    "Moss Mother flies down in a short dive with her stinger pointed in Hornet's direction. When she reaches the ground, she slides her body across roughly half of the arena.",
                },
                {
                  name: "Headbutt",
                  description:
                    "Moss Mother quickly swoops up and slams her head into the ceiling of the arena causing either 1-2 Mossgrubs or 3 stalactites to fall from above. The position of falling objects is indicated by a small puff of dust that lasts half a second before they fall. The objects may fall at slightly different times.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 22,
      name: "Nyleth",
      location: "Shellwood",
      phases: 2,
      health: 1250,
      image: "../images/Bosses/nyleth.png",
      theme: "Nyleth",
      music: "../music/bosses/nyleth.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Upon spotting Hornet, she screams for three seconds and the floor opens, transporting them to the arena. Nyleth's main gimmick consists in sticking to either one of the walls and moving on them and in-between them while attacking.",
          phases: [
            {
              name: "Phase 1",
              description:
                "The arena consists of a horizontal room with a central platform that covers half the map, with vines at the bottom, at the top and on the wall Nyleth is grappled onto.",
              attacks: [
                {
                  name: "Wall Swap",
                  description:
                    "The wall that Nyleth sticks to is filled with spiky vines. Before jumping to the other wall, Nyleth crouches and the vines disappear. She then leaps across the room, and vines appear on the new wall.",
                },
                {
                  name: "Head Swings",
                  description:
                    "Nyleth swings her head around at incredible speeds, cutting a large area directly in front of her and above her.",
                },
                {
                  name: "Pollen Barrage",
                  description:
                    "Nyleth throws multiple pollen projectiles in Hornet's direction in alternating patterns.",
                },
                {
                  name: "Pollen Screech",
                  description:
                    "Nyleth charges up a large pollen attack that covers three quarters of the room, avoidable only by clinging to the opposite wall.",
                },
                {
                  name: "Spiked Balls",
                  description:
                    "Three columns of vapor indicate where spiked balls will shoot up vertically. The balls can be hit and launched back at Nyleth or other balls.",
                },
              ],
            },
            {
              name: "Phase 2",
              description:
                "The arena expands downwards, with longer walls and the central platform is now missing. In this phase, two additional spiked balls appear after the first three during the Spiked Balls attack.",
              notes:
                "If Hornet touches one of the vines, she respawns on a temporary platform at the bottom. All attacks deal two masks of damage, except for the Spiked Balls.",
            },
          ],
        },
      },
    },
    {
      id: 23,
      name: "Palestag",
      location: "Lost Verdania",
      phases: 1,
      health: 480,
      image: "../images/Bosses/palestag.png",
      information: {
        "behavior and tactics": {
          summary:
            "Palestag is laying on the ground and when approached, it jumps and screams for two seconds before vanishing.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Leaf Vortexes",
                  description:
                    "Palestag's main attack consists in generating bright sharp leaves that appear in pairs and move towards Hornet's general horizontal direction with a slight vertical tilt. Initially they move slow, but they exponentially pick up speed with time and can pass through obstacles. If they contact Hornet, she will take two consecutive hits of one Mask's damage each. After dealing a certain amount of damage, Palestag spawns three pairs of leaf vortexes instead of two.",
                },
                {
                  name: "Escape Leap",
                  description:
                    "After summoning the Leaf Vortexes, Palestag will leap away from Hornet and vanish. It can still cause contact damage if she touches the creature.",
                },
              ],
            },
          ],
          strategy:
            "Due to its elusive behavior, it can be difficult to land more than one melee attack on it at a time. Tools and skills that provide ranged options make the fight much easier. Cogflies can chase down the Palestag as long as Hornet is close enough for them to track it. Tacks and Sting Shards can be laid at the few positions that the Palestag teleports between, causing it to take damage when it warps to those positions. Pale Nails can track the Palestag's location if Hornet is sufficiently close for the projectiles to lock on to it. The Longclaw can give Hornet's melee strikes enough reach to hit the Palestag from underneath a platform it is standing on.",
        },
      },
    },
    {
      id: 24,
      name: "Phantom",
      location: "Exhaust Organ",
      phases: 2,
      health: 650,
      image: "../images/Bosses/phantom.png",
      theme: "Phantom",
      music: "../music/bosses/phantom.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "The fight starts with a steam column covering Phantom in the background, before another column blasts down on the left side of the arena; with Phantom appearing out of it. Getting caught in the steam column that deposits Phantom deals 2 Masks of damage to Hornet in quick succession.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Emerging out of the steam clouds, Phantom has the following attacks and can run across the arena to reposition for them:",
              attacks: [
                {
                  name: "Flurry",
                  description:
                    "Phantom performs 3 rapid jabs towards Hornet, moving forwards slightly with each one. If Hornet is behind Phantom after the second jab, the third one is cancelled.",
                },
                {
                  name: "Pin Rush",
                  description:
                    "Phantom throws the Longpin horizontally toward Hornet, then quickly dashes after it. After catching the Longpin, Phantom continues on into a dash; however, if the Longpin hits a wall, then Phantom will catch it without the follow-up dash.",
                },
                {
                  name: "Aerial Pin Rush",
                  description:
                    "Phantom leaps into the air, throws the Longpin toward Hornet that travels a set distance or until it embeds in a surface, before then dashing to it.",
                },
                {
                  name: "Parry & Riposte",
                  description:
                    "Phantom blocks with the Longpin, nullifying incoming damage. If struck, Phantom retaliates by slashing back and forth 3 times, each dealing 2 masks of damage. Phantom can use this attack midair.",
                },
                {
                  name: "Retreat",
                  description:
                    "Phantom quickly glides back a short distance to reposition for another attack.",
                },
                {
                  name: "Lightfall",
                  description:
                    "Phantom leaps upwards off-screen, marks Hornet’s position with a large column, then slams down. Phantom gains this attack at 487 HP.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 227 HP, Phantom roars and performs Lightfall 5 times in succession. The battlefield becomes filled with smoke.",
              description: "Phantom gains one new ability:",
              attacks: [
                {
                  name: "Smoke Step",
                  description:
                    "Phantom can now sometimes disappear into the smoke and teleport to perform any of the previous attacks, choosing to teleport instead of run.",
                },
              ],
            },
          ],
          strategy:
            "After defeat, Hornet and Phantom will take their places left and right of the arena before lunging towards each other. A prompt to press the SILK SKILL button is then shown on screen. If the input is not pressed in time, Hornet will take 2 Masks of damage in quick succession and Phantom will regain 60 HP, continuing the fight.",
        },
      },
    },
    {
      id: 25,
      name: "Pinstress",
      location: "Blasted Steps, Mount Fey",
      phases: 1,
      health: 910,
      image: "../images/Bosses/pinstress.png",
      theme: "Strive",
      music: "../music/bosses/strive.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "The Pinstress has three attacks in her battle at Mount Fay.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Pin Throw",
                  description:
                    "While in the air, the Pinstress can throw three pins either down or to the side. The pattern is reminiscent of the Primal Aspid. This attack will do one mask of damage if hit.",
                },
                {
                  name: "Golden Pin Dash",
                  description:
                    "While in the air, the Pinstress can perform a diagonal slash downwards with her golden pin. This is normally followed by one or two more golden pin dashes to the left or right. This attack will do two masks of damage when hit.",
                },
                {
                  name: "Charged Cross Slash",
                  description:
                    "Occasionally, the Pinstress will start to charge an attack indicated by white particles. Once charged, she will use it the next time Hornet is in front of her. The best way to dodge it is to dash in the opposite direction. This attack will do two masks of damage.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 26,
      name: "Plasmified Zango",
      location: "Wormways",
      phases: 1,
      health: 1000,
      image: "../images/Bosses/plasmifiedzango.png",
      information: {
        "behavior and tactics": {
          summary:
            "Zango's movement speed and attack rate becomes faster the lower his health.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Regeneration",
                  description:
                    "When Plasmified Zango isn’t actively taking damage, he will regenerate health.",
                },
                {
                  name: "Shuffle",
                  description:
                    "Plasmified Zango will walk aimlessly forward, turning around when reaching the edge of the arena.",
                },
                {
                  name: "Plasmium Torrent",
                  description:
                    "Plasmified Zango will occasionally stop moving to violently shake, releasing a volley of Plasmium blobs in an arc on either side of him.",
                },
              ],
            },
            {
              name: "Mid-Fight",
              trigger:
                "Once Plasmified Zango reaches below 500 HP, he will start to run across the arena as opposed to walking - telegraphed by him leaning down toward the ground. His behaviour is otherwise unchanged.",
              attacks: [
                {
                  name: "Dash",
                  description:
                    "Plasmified Zango will run across the arena instead of walking.",
                },
              ],
            },
          ],
          strategy:
            "Extracting Plasmified Blood from him using the Needle Phial, obtained from initiating the Advanced Alchemy wish, will reduce his maximum HP by 250. This change persists even if Hornet leaves the room and returns. Zango will die after four successful extractions. Without access to the Needle Phial, using high DPS Tools might help to safely burst him down after he starts dashing across the arena.",
        },
      },
    },
    {
      id: 27,
      name: "Savage Beastfly (Chapel of the Beast)",
      location: "Chapel of the Beast",
      phases: 2,
      health: 550,
      image: "../images/Bosses/savagebeastfly.png",
      theme: "Incisive Battle",
      music: "../music/bosses/incisivebattle.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "The Savage Beastfly floats about the arena, staying near Hornet and has 2 attacks:",
              attacks: [
                {
                  name: "Sweep",
                  description:
                    "The Beastfly moves up or down to match Hornet's position, then charges toward her. After it travels past Hornet it will begin slowing down, stopping mid-flight or slamming into a wall. It can sometimes perform a second charge immediately after.",
                },
                {
                  name: "Slam",
                  description:
                    "The Beastfly moves up to the top of the arena, then slams down into the ground 3 consecutive times, attempting to position above Hornet before each slam.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 440 HP, it enters its second phase and gains a third attack and modifies one:",
              attacks: [
                {
                  name: "Summon",
                  description:
                    "The Beastfly stays in place and does a short scream. A cage then drops from the ceiling, spawning an enemy (Beastfly, Kilik, or Vicious Caranid) upon hitting the ground. Once it reaches 247 HP it can sometimes spawn 2 cages at once. The falling cages can deal 1 Mask of contact damage.",
                },
                {
                  name: "Sweep (Modified)",
                  description:
                    "The Beastfly will now always charge 3 times in a row; the first charge aimed at Hornet, the second with its height adjusted again, and the third once again directly at Hornet.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 28,
      name: "Savage Beastfly (Far Fields)",
      location: "Far Fields",
      phases: 2,
      health: 650,
      image: "../images/Bosses/savagebeastfly.png",
      theme: "Incisive Battle",
      music: "../music/bosses/incisivebattle.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "During the encounter with the Savage Beastfly in Far Fields, the boss takes over the arena (and platform mechanic) of the Fourth Chorus and begins the fight by bursting out from the lava; immediately destroying the centre third of platforms. Platforms will reemerge after a short time.",
          phases: [
            {
              name: "Phase 1",
              description: "It has the following changes to its patterns:",
              attacks: [
                {
                  name: "Sweep",
                  description:
                    "The Beastfly will now start phase 1 already with its previous phase 2 Sweep pattern; meaning it will always charge 3 times in a row.",
                },
                {
                  name: "Slam",
                  description:
                    "Wherever the Beastfly slams down it will destroy a sixth of the platform, temporarily leaving a gap. If it slams down into one of these gaps and into the lava, it will disappear for a short moment before charging up from beneath the platform Hornet is currently on - destroying it in the process. A plume of lava will erupt from beneath Hornet indicating where the Beastfly is about to reemerge.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger: "After reaching 520 HP, it enters its second phase.",
              attacks: [
                {
                  name: "Summon",
                  description:
                    "The Beastfly will only call in a Tarmite instead of any other monsters (1-2 at 292 HP). These Tarmites float in from the left and/or right sides of the arena instead of being dropped down from cages.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 29,
      name: "Second Sentinel",
      location: "Cogwork Core, Choral Chambers, High Halls",
      phases: 1,
      health: 800,
      image: "../images/Bosses/secondsentinel.png",
      information: {
        "behavior and tactics": {
          summary:
            "Second Sentinel has access to several repositioning moves, many of them sending them airborne to perform 'air-borne' variations of attacks. The Second Sentinel has access to a multitude of attacks using their scissor blades:",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Gilded Combo",
                  description:
                    "Second Sentinel reels in one of their blades, before lunging forward, following with a slash from the other blade. If Hornet is not behind Second Sentinel, they can then perform a second, shorter lunge.",
                },
                {
                  name: "Aerial Lunge",
                  description:
                    "Second Sentinel leaps forwards mid-air, then lunges diagonally downwards towards Hornet.",
                },
                {
                  name: "Power Blade",
                  description:
                    "Second Sentinel holds both blades behind their back, then swings them forward, sending a large, medium-speed wind projectile forward. This can also be performed while air-borne.",
                },
                {
                  name: "Scissor Strike",
                  description:
                    "Second Sentinel quickly charges up, then makes a small jump forwards before unleashing a massive X-shaped slash with both blades, dealing 2 Masks of damage. This can also be performed while air-borne.",
                },
                {
                  name: "Gilded Whirl",
                  description:
                    "Second Sentinel jumps forward while spinning upwards with both blades. If Hornet is caught, she takes 2 Masks of damage in quick succession. At the peak, they can chain into another aerial attack.",
                },
                {
                  name: "Flying Retreat",
                  description:
                    "Second Sentinel will make a large backwards leap, clinging to the wall, before performing an aerial attack.",
                },
                {
                  name: "Gilded Parry",
                  description:
                    "If Hornet is too close, they strike a defensive stance. If hit, they will counter with a flurry of strikes that deal 2 Masks of damage in quick succession.",
                },
                {
                  name: "Quick Dash",
                  description:
                    "Second Sentinel makes quick dashes backwards and forwards to reposition for attacks or to avoid Hornet between attacks.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 30,
      name: "Shakra",
      location: "Greymoor",
      phases: 1,
      health: 600,
      image: "../images/Bosses/shakra.png",
      information: {
        "behavior and tactics": {
          summary:
            "In Shakra's duel as a boss fight in Greymoor she has the following attacks:",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Quick Step",
                  description:
                    "Shakra teleports around rapidly in between every attack as her main form of movement. She always maintains a distance away from Hornet with each teleport.",
                },
                {
                  name: "Ring Throw",
                  description:
                    "Shakra teleports mid-air and quickly tosses 1-2 rings in quick succession at Hornet. These rings will bounce once and are not affected by gravity.",
                },
                {
                  name: "Ring Thrust",
                  description:
                    "Shakra teleports to the ground and quickly dashes towards Hornet creating a large damaging pulse of energy, that deals 2 Masks of damage, with her rings at the end of the dash. She follows this up by throwing a ring behind her in the opposite direction of the dash.",
                },
                {
                  name: "Ring Burst",
                  description:
                    "Shakra teleports directly above Hornet and pauses a moment before slamming down to the ground creating a ring shaped burst of energy, that deals 2 Masks of damage, around herself.",
                },
              ],
            },
          ],
          strategy:
            "If Hornet is defeated she simply passes out and wakes up by the challenge ring. As such this duel can be lost in Steel Soul Mode without permanently losing the save file.",
        },
      },
    },
    {
      id: 31,
      name: "Shrine Guardian Seth",
      location: "Shellwood, Greymoor, Fleatopia",
      phases: 2,
      health: 1185,
      image: "../images/Bosses/shrineguardianseth.png",
      theme: "Nyleth",
      music: "../music/bosses/nyleth.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Seth wields a gilded pin and a cymbal he uses as a shield. He often enters a defensive stance, blocking hits from the front or above depending on Hornet's position relative to him.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Pin Combo",
                  description:
                    "Seth hops backwards and slightly into the air, before slashing three times with his pin. If Hornet is hit, Seth slashes again, dealing two masks of damage in total.",
                },
                {
                  name: "Pin Whirlwind",
                  description:
                    "Seth slashes forward, before jumping backwards while spinning his pin around himself. If Hornet is caught in the whirlwind, she takes an additional mask of damage.",
                },
                {
                  name: "Cymbal Toss",
                  description:
                    "Seth throws his shield forward, before teleporting to the shield's location and catching it.",
                },
                {
                  name: "Aerial Cymbal Toss",
                  description:
                    "Seth jumps or teleports mid-air, then throws his shield diagonally down towards Hornet. The shield bounces upward upon hitting the ground, after which Seth teleports to its location and catches it.",
                },
                {
                  name: "Cymbal Crash",
                  description:
                    "Seth jumps or teleports mid-air, then dashes towards the ground with his shield, creating a circular shockwave on impact. This attack deals two masks of damage.",
                },
                {
                  name: "Follow Through",
                  description:
                    "Seth lunges forward with his pin, ending with a second stab. He almost always uses this attack after a Cymbal Crash. If Hornet is hit, Seth stabs again, dealing two masks of damage in total.",
                },
                {
                  name: "Backstep",
                  description:
                    "If Hornet stands too close to Seth, he may dash backwards a short distance.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "When reaching half health, Seth gets staggered and screams, and gains a new attack:",
              attacks: [
                {
                  name: "Crash Combo",
                  description:
                    "Seth executes the teleporting variant of Cymbal Crash three times in a row, ending with a Follow Through. Seth begins his second phase with this attack.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 32,
      name: "Sister Splinter",
      location: "Shellwood",
      phases: 2,
      health: 310,
      image: "../images/Bosses/sistersplinter.png",
      theme: "Sister Splinter",
      music: "../music/bosses/sistersplinter.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "Sister Splinter hangs down from the ceiling and has 2 attacks:",
              attacks: [
                {
                  name: "Triple Swipe",
                  description:
                    "Sister Splinter swipes down quickly from above 3 times in succession, moving to position above Hornet before each swipe. She alternates hands with each strike. This attack deals 2 Masks of damage.",
                },
                {
                  name: "Vine Walls",
                  description:
                    "Sister Splinter retreats into the ceiling and summons 2 breakable twigs wrapped in thorny vines that shoot down from the ceiling in random locations. The vines deal one mask of contact damage and take 3 hits to be broken.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 248 HP, Sister Splinter cackles and disappears into the ceiling, summoning 2 Splinterbarks. She reappears after 1 is killed or if enough time has passed, gaining a new attack and altering one:",
              attacks: [
                {
                  name: "Summon",
                  description:
                    "Sister Splinter moves to a corner before cackling and summoning a Splinterbark from a random location in the ceiling. Her other attacks can kill any Splinterbarks caught in them.",
                },
                {
                  name: "Vine Walls (Modified)",
                  description:
                    "She can now summon 2-3 Vine Walls. Once during this phase at 124 HP, Sister Splinter will summon 6 evenly spaced Vine Walls at once, covering most of the arena.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 33,
      name: "Skarrsinger Karmelita",
      location: "Far Fields",
      phases: 3,
      health: 1500,
      image: "../images/Bosses/skarrsingerkarmelita.png",
      theme: "Skarrsinger Karmelita",
      music: "../music/bosses/skarrsingerkarmelita.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "While not actively attacking, Skarrsinger Karmelita glides and dances about the arena while spinning her curvesickle weapons. When doing this, she is able to parry Hornet's Needle attacks, making striking her from close range difficult.",
          phases: [
            {
              name: "Phase 1",
              description:
                "During her first phase, Skarrsinger Karmelita has 5 attacks. Almost all of her attacks deal 2 Masks of damage, but her contact damage is one Mask.",
              attacks: [
                {
                  name: "Twirl Slash",
                  description:
                    "Skarrsinger Karmelita performs a twirling slash with her curvesickles.",
                },
                {
                  name: "Triple Slash",
                  description:
                    "Skarrsinger Karmelita performs 3 slashes with her curvesickles, covering around 60% of the arena. She may cancel the third slash or replace it with a Twirl Slash in Hornet's direction.",
                },
                {
                  name: "Twin Curvesickles",
                  description:
                    "Skarrsinger Karmelita throws 2 curvesickles, one horizontally and one diagonally upwards, in Hornet's direction.",
                },
                {
                  name: "Twirl Dive",
                  description:
                    "Skarrsinger Karmelita leaps towards Hornet then slams diagonally into the ground, causing bones to erupt afterwards in Hornet's direction.",
                },
                {
                  name: "Aerial Curvesickles",
                  description:
                    "Skarrsinger Karmelita leaps into the air then throws 2 curvesickles downwards which then curve to the left and right, sweeping horizontally across the arena.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 1000 HP, Skarrsinger Karmelita shouts, marking the beginning of the second phase. During this phase, two of her previous attacks gain new properties, and she begins using a new attack:",
              attacks: [
                {
                  name: "Twin Curvesickles (Modified)",
                  description:
                    "Skarrsinger Karmelita may twirl then throw a second set of curvesickles.",
                },
                {
                  name: "Aerial Curvesickles (Modified)",
                  description:
                    "Skarrsinger Karmelita may throw a second set of curvesickles shortly after the first.",
                },
                {
                  name: "Bone Charge",
                  description:
                    "Skarrsinger Karmelita dashes to the near side of the arena and charges to the other, causing tall bones to erupt behind her.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "After reaching 500 HP, Skarrsinger Karmelita shouts again, marking the beginning of the third phase. During this phase, she gains no new attacks, but she attacks at a faster pace.",
            },
          ],
        },
      },
    },
    {
      id: 34,
      name: "Skull Tyrant",
      location: "The Marrow",
      phases: 1,
      health: 450,
      image: "../images/Bosses/skulltyrant.png",
      theme: "Incisive Battle",
      music: "../music/bosses/incisivebattle.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Skull Tyrant has 3 attacks, all of which will do 2 Masks of damage:",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Rampage",
                  description:
                    "Skull Tyrant will wind up by scuttling back a tiny distance, before charging towards Hornet. It will only stop after it has passed Hornet, and she is behind it. When it ends the charge, it carries some momentum and will skid a bit before coming to a full stop.",
                },
                {
                  name: "Leap",
                  description:
                    "Skull Tyrant will charge up in place and then perform a large jump towards Hornet. It will cause 2 rocks to fall from the ceiling upon landing, with one always landing close to the boss, and another at a random location.",
                },
                {
                  name: "Tantrum",
                  description:
                    "Skull Tyrant will roar once before jumping in place 3 times, each jump causing 1-2 rocks to fall down from random locations from the ceiling.",
                },
              ],
            },
          ],
          strategy:
            "The Skull Tyrant is immune to attacks from above, Hornet can still Needle-bounce off its skull, but this will deal no damage.",
        },
      },
    },
    {
      id: 35,
      name: "Summoned Saviour",
      location: "Bonegrave",
      phases: 1,
      health: 500,
      image: "../images/Bosses/summonedsaviour.png",
      information: {
        "behavior and tactics": {
          summary:
            "Upon being summoned by Sula, the Saviour materializes in the air and screams, causing rocks to crumble and locking Hornet in the cave. All attacks other than Air Swim are telegraphed by void particles for about one second.",
          phases: [
            {
              name: "Phase 1",
              description:
                "The Summoned Saviour has five attacks, four of which are identical to the ones displayed from all the regular enemies following Act 3. They all deal two Masks of damage.",
              attacks: [
                {
                  name: "Void Tendrils",
                  description:
                    "The Summoned Saviour starts charging up 2 tiny tendrils in Hornet's direction before extending them outwards, covering a distance the length of itself.",
                },
                {
                  name: "Void Blades",
                  description:
                    "The Summoned Saviour releases void particles in all directions and then immediately swirls tendrils in a large circular area around itself.",
                },
                {
                  name: "Void Projectiles",
                  description:
                    "The Summoned Saviour charges particles in Hornet's direction before firing 3 consecutive void projectiles towards her. These projectiles arc very slightly.",
                },
                {
                  name: "Void Blobs",
                  description:
                    "The Summoned Saviour starts splashing void from its three tails and then launches 4 arcing blobs to its left and right. Upon hitting the ground, each blob will then create a small circular slash around itself.",
                },
                {
                  name: "Air Swim",
                  description:
                    "Between attacks, it can quickly dash a set distance through the air without warning in a random direction.",
                },
              ],
            },
          ],
          strategy:
            "Hitting the Summoned Saviour will not grant Hornet any Silk.",
        },
      },
    },
    {
      id: 36,
      name: "The Unravelled",
      location: "Whiteward",
      phases: 3,
      health: 1000,
      image: "../images/Bosses/theunravelled.png",
      theme: "Sister Splinter",
      music: "../music/bosses/sistersplinter.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "After falling in the pit where the boss is located, The Unravelled's title-card displays, but the boss does not yet appear. In order to begin the fight, Hornet must first defeat 2 waves of enemies: 1 Dreg Husk, then 1 Dreg Husk & 1 Dregwheel.",
          phases: [
            {
              name: "Phase 1",
              description:
                "The Unravelled emerges from the ground, roars, and begins the fight by immediately performing a Dreg Rush. It remains underground between most of its attacks, with its emergence telegraphed by rumbling dust particles.",
              attacks: [
                {
                  name: "Dreg Rush",
                  description:
                    "The Unravelled emerges from one side and rushes horizontally across the entire arena, bouncing back a bit upon colliding with a wall before burrowing again.",
                },
                {
                  name: "Cadaver Spit",
                  description:
                    "The Unravelled emerges on either side and screams, launching 2 bodies in succession that fly across the arena. It can then burrow or immediately perform a Dreg Rush.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 800 HP, The Unravelled is staggered and summons 2 Dregwheels. Upon their defeat, scalpels shoot out of the ground.",
              description:
                "The Unravelled then reemerges into a Dreg Rush attack. It gains 2 new attacks and modifies its previous 2:",
              attacks: [
                {
                  name: "Dreg Rush (Modified)",
                  description:
                    "Now shoots out a single scalpel from beneath Hornet when The Unravelled hits a wall.",
                },
                {
                  name: "Cadaver Spit (Modified)",
                  description:
                    "Fires 3 bodies in a row, with the third body fired at a random angle.",
                },
                {
                  name: "Scalpel Storm",
                  description:
                    "While underground, The Unravelled sends out 3 scalpels in succession. While the final scalpel is still midair, it will perform another attack.",
                },
                {
                  name: "Scalpel Summon",
                  description:
                    "The Unravelled emerges near the centre and roars, summoning 2 scalpels from its left and right that target the central position.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "Upon reaching 400 HP, The Unravelled staggers again, spawning a Dreg Husk and Dregwheel. Defeating either enemy causes another Dregwheel to emerge. After all are defeated, the fight resumes.",
              description:
                "The Unravelled keeps the same patterns but modifies one attack:",
              attacks: [
                {
                  name: "Scalpel Summon (Modified)",
                  description:
                    "Right after the first 2 scalpels are summoned, a third one shoots out from behind The Unravelled's position.",
                },
              ],
            },
          ],
          strategy:
            "The Unravelled's massive golden Conductor mask makes it immune to damage from above, however it can still be bounced off of with Needle strikes. Contact with The Unravelled, as well as its scalpels, deals 2 Masks of damage.",
        },
      },
    },
    {
      id: 37,
      name: "Trobbio",
      location: "The Stage",
      phases: 2,
      health: 700,
      image: "../images/Bosses/trobbio.png",
      theme: "Trobbio",
      music: "../music/bosses/trobbio.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "Upon entering the stage, multiple smoke plumes fire off in the background before Trobbio leaps out of the floorboards in the centre of the arena - beginning the battle.",
          phases: [
            {
              name: "Phase 1",
              description:
                "Trobbio has a unique set of main attacks that can be performed either on the ground or while he’s in the air. As such, Trobbio also has a large set of manoeuvres which reposition him for these attacks:",
              attacks: [
                {
                  name: "Whirlwind",
                  description:
                    "Trobbio spins into a whirlwind and moves rapidly towards Hornet. At the end of the dash, he sends out 2 whirlwind projectiles. He is immune to damage from the sides while spinning. If used while airborne, Trobbio will arc downwards.",
                },
                {
                  name: "Fireworks",
                  description:
                    "Trobbio creates 5 large sparkling circles randomly across the arena, which explode into fireworks after some delay. This can be used airborne with little variation.",
                },
                {
                  name: "Smoke Bombs",
                  description:
                    "Trobbio throws out 3 smoke bombs that bounce around, then stop and release pillars of damaging smoke. If used while airborne, the grenades immediately ricochet downwards off of the ceiling.",
                },
                {
                  name: "Flying Leap",
                  description:
                    "Trobbio leaps straight into the air to either perform an airborne attack or begin Fluttering.",
                },
                {
                  name: "Flutter",
                  description:
                    "While airborne, Trobbio flutters horizontally across the arena. He can use an airborne attack at any time to cut the Flutter short.",
                },
                {
                  name: "Floorboard Shuffle",
                  description:
                    "Trobbio descends into the floorboards to traverse to the opposite end of the arena. He cannot be damaged while beneath the stage.",
                },
                {
                  name: "Hidden Smoke Bombs",
                  description:
                    "Trobbio descends into the floorboards and traverses to the centre of the arena, throwing 3 smoke bombs out of a hatch, before continuing into a regular Floorboard Shuffle.",
                },
                {
                  name: "Whirlwind Dodge",
                  description:
                    "Trobbio can quickly dash backwards defensively in a small whirlwind if Hornet is too close.",
                },
                {
                  name: "Flourish",
                  description:
                    "Trobbio makes short dashes to move around the arena, flourishing with each dash.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "Upon reaching 350 HP, Trobbio will strike a dramatic pose and cry out his name, signalling the beginning of this phase. He replaces the Hidden Smoke Bomb attack with a new one, which he performs immediately:",
              attacks: [
                {
                  name: "Pyrotechnics",
                  description:
                    "Trobbio disappears underground, before 5 fire pillars shoot out from the ground from random locations. Trobbio is launched into the air from within the fifth fire pillar, and will perform an airborne attack.",
                },
              ],
              notes:
                "All of Trobbio's attacks deal 2 Masks of damage, and the Whirlwind-based attacks will deal 2 Masks in quick succession.",
            },
          ],
        },
      },
    },
    {
      id: 38,
      name: "Voltvyrm",
      location: "Voltnest",
      phases: 1,
      health: 550,
      image: "../images/Bosses/voltvyrm.png",
      theme: "Sister Splinter",
      music: "../music/bosses/sistersplinter.mp3",
      information: {
        "behavior and tactics": {
          summary:
            "The Voltvyrm resides in the ceiling mass of barnacles, and switches randomly between 3 holes (left, right, or centre) to appear out of. When it emerges from a hole, it performs an electric attack before retreating and repeating the process.",
          phases: [
            {
              name: "Phase 1",
              description: "It has the following 2 attacks:",
              attacks: [
                {
                  name: "Volt Pillars",
                  description:
                    "Voltvyrm creates waves of electric columns that span the arena vertically in the following patterns: 3 waves of pairs of columns which start from the edges and close in; 3 waves of pairs of columns starting with the middle 2 and expanding outwards; 4 waves consisting of 2 columns at the edges, then the middle 2, finally ending with the 2 columns in-between.",
                },
                {
                  name: "Volt Field",
                  description:
                    "Voltvyrm creates a burst of small electric circles across the arena in the following patterns: 6 circles in a line creating a zigzag; 6-7 circles in a line paired up creating a looser zigzag; 6 circles stacked in pairs to create 3 spaced-apart columns; 7 circles that cover the entire ground, forcing Hornet to be airborne.",
                },
              ],
              notes:
                "All electric attacks are first telegraphed by the area of effect outlined in glowing pink light, before then creating a lingering zone of damage. If Hornet jumps into the mass of Barnacles on the ceiling, she will take electric damage. All electric damage, including the attacks, deal 2 Masks in quick succession.",
            },
          ],
        },
      },
    },
    {
      id: 39,
      name: "Watcher at the Edge",
      location: "Sands of Karak",
      phases: 1,
      health: 900,
      image: "../images/Bosses/watcherattheedge.png",
      information: {
        "behavior and tactics": {
          summary:
            "Watcher at the Edge has several attacks, a parry, and multiple retreat options.",
          phases: [
            {
              name: "Phase 1",
              attacks: [
                {
                  name: "Sword Uppercut",
                  description:
                    "The Watcher exits the ground at high speed, swinging the blade in front of them upwards. They then fall down towards Hornet with a small mid-air leap and crash the sword on the ground. A huge amount of sand is released from the ground, making it slightly hard to see movements.",
                },
                {
                  name: "Single Swing",
                  description:
                    "The Watcher charges an attack and unleashes his sword, starting from their back and reaching in front of them.",
                },
                {
                  name: "Triple Swing",
                  description:
                    "Following the Single Swing, the Watcher pauses briefly before throwing out a sideways swing and another overhead swing. The Watcher can turn around before the third swing if Hornet is behind them.",
                },
                {
                  name: "Leap Downslash",
                  description:
                    "The Watcher will jump towards Hornet and perform a downslash.",
                },
                {
                  name: "Parry and Riposte",
                  description:
                    "The Watcher raises their sword in a defensive stance. If Hornet lands a hit, the Watcher will follow up with any of the previous attacks listed.",
                },
                {
                  name: "Chasedown",
                  description:
                    "If Hornet tries to get away, the Watcher will quickly run after her with incredible speed, making escape difficult.",
                },
                {
                  name: "Retreat",
                  description:
                    "The Watcher quickly glides back a short distance to reposition for another attack.",
                },
                {
                  name: "Leap Retreat",
                  description:
                    "The Watcher leaps backwards to distance themselves.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 40,
      name: "Widow",
      location: "Bellhart",
      phases: 3,
      health: 360,
      image: "../images/Bosses/widow.png",
      theme: "Widow",
      music: "../music/bosses/widow.mp3",
      information: {
        "behavior and tactics": {
          phases: [
            {
              name: "Phase 1",
              description:
                "During her first phase, Widow has 4 attacks and manoeuvres, she teleports in-between each attack to start the next:",
              attacks: [
                {
                  name: "Bell Pull",
                  description:
                    "Widow stands straight and pulls 1-3 bells from the ceiling using silk threads, one at a time. These bells can fall straight down vertically or angled at 45 degrees. All bells Widow creates in this fight will bounce once before disappearing.",
                },
                {
                  name: "Aerial Lunge",
                  description:
                    "Widow teleports into the air before dashing downwards at an angle towards Hornet and then slashing her claws across the entire floor of the room. This attack deals 2 Masks of damage in quick succession if Hornet is caught in her swipes.",
                },
                {
                  name: "Debris Field",
                  description:
                    "Widow runs across the entire floor, attaching 4 large thread bundles to the ceiling. Shortly after, each thread bundle pulls up hazardous debris from below the ground. The debris deals 2 Masks of damage on contact.",
                },
                {
                  name: "Skitter",
                  description:
                    "After any attack, Widow can skitter away backwards to avoid Hornet if she is too close.",
                },
              ],
            },
            {
              name: "Phase 2",
              trigger:
                "After reaching 250 HP, Widow will add another attack to her repertoire which she will first use immediately:",
              attacks: [
                {
                  name: "Bell Cascade",
                  description:
                    "Widow will shout, causing multiple bells to fall together in a large block; they can either cover the centre, the left or right, or both edges of the arena.",
                },
              ],
            },
            {
              name: "Phase 3",
              trigger:
                "After reaching 150 HP, Widow will fake a defeat by leaving the arena, before quickly shouting and starting her third phase.",
              description:
                "During this phase, Widow moves quicker and has a different set of attacks:",
              attacks: [
                {
                  name: "Diagonal Bell Rain",
                  description:
                    "Widow stands still and pulls 2 evenly spaced bells at a diagonal from the ceiling.",
                },
                {
                  name: "Vertical Bell Rain",
                  description:
                    "Widow shouts, causing 3-4 evenly spaced bells to fall vertically from the ceiling.",
                },
                {
                  name: "Frenzied Charge",
                  description:
                    "Widow flashes her blade, before charging across the length of the arena towards Hornet, while swinging her blades. This move deals 2 Masks damage in quick succession if Hornet is caught in the swipes.",
                },
                {
                  name: "Skitter (Modified)",
                  description:
                    "Widow will still skitter away if Hornet is too close, however she can now perform a Frenzied Charge immediately following a Skitter.",
                },
              ],
            },
          ],
        },
      },
    },
  ],
};
