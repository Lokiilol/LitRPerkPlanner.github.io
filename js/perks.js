const perks = [
    {
        special: 'st',
        perks: [
            {
                rank: 1,
                name: 'Big Leagues',
                img: 'big-leagues.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 1,
                        description: 'Swing for the fences! You do 15% more damage, plus an additional 0.5% damage per level with unarmed and blunt melee weapons.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 2,
                        description: 'You do 25% more damage with unarmed and blunt melee weapons, and you gain a chance of knocking down your target.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 3,
                        description: 'You do 35% more damage with unarmed and blunt melee weapons, and your attacks will hit all targets in front of you.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 4,
                        description: 'You do 45% more damage with unarmed and blunt melee weapons, and gain a chance to cripple your opponent, or grand slam their head clean off!'
                    },
                    {
                        rank: 5,
                        level: 70,
                        str: 5,
                        description: 'You do 55% more damage with unarmed and blunt melee weapons.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Heavy Gunner',
                img: 'heavy-gunner.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 2,
                        description: 'Thanks to practice and conditioning, you do 15% more damage plus an additional 0.5% per level with heavy guns.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 3,
                        description: 'You do 25% more damage with heavy guns, and each heavy gun you carry increases your carry weight by 10, up to +100 Carry weight.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 4,
                        description: 'You do 35% more damage with heavy guns, and you walk 20% faster with a heavy weapon drawn.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 5,
                        description: 'You do 45% more damage with heavy guns, and an additional 20% if you are also over-encumbered.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        str: 6,
                        description: 'You do 55% more damage with heavy guns.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Adamantium Skeleton',
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 3,
                        description: 'Your skeleton has been infused with indestructible metal, reducing limb damage, fall damage, and damage from over-encumbrance by 30%.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        str: 4,
                        description: 'Your limb damage, fall damage, and damage from over-encumbrance are now reduced by 60%.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        str: 5,
                        description: 'Your limb damage, fall damage, and damage from over-encumbrance are now reduced by 90%.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Blacksmith',
                img: 'blacksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 4,
                        description: 'Fire up the forge and gain access to base level and Rank 1 power armor and melee weapon mods.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        str: 5,
                        description: 'You gain access to Rank 2 power armor and melee weapon mods.'
                    },
                    {
                        rank: 3,
                        level: 29,
                        str: 6,
                        description: 'You gain access to Rank 3 power armor and melee weapon mods.'
                    },
                    {
                        rank: 4,
                        level: 43,
                        str: 7,
                        description: 'You gain access to rank 4 power armor mods.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Pain Train',
                img: 'pain-train.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 5,
                        description: 'Choo Choo! All aboard! While wearing Power Armor, sprinting into enemies hurts and staggers them, and your armor takes 5% less damage.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        str: 6,
                        description: 'While wearing Power Armor, fusion cores last twice as long while running, and your armor takes 10% less damage.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        str: 7,
                        description: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger, and your power armor takes 15% less damage.'
                    },
                    {
                        rank: 4,
                        level: 39,
                        str: 8,
                        description: 'Your fusion cores last three times as long in Power Armor while running, and your armor takes 20% less damage.'
                    },
                    {
                        rank: 5,
                        level: 54,
                        str: 9,
                        description: 'Sprinting into enemies now causes massive damage and knocks them down. Landing near enemies inflicts even more damage. Your power armor takes 25% less damage.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Buffness',
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 6,
                        description: 'You must work out! Gain Health equal to two times your Strength.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        str: 7,
                        description: 'You gain Health equal to four times your Strength.'
                    },
                    {
                        rank: 3,
                        level: 20,
                        str: 8,
                        description: 'You gain Health equal to six times your Strength.'
                    },
                    {
                        rank: 4,
                        level: 40,
                        str: 9,
                        description: 'You gain Health equal to eight times your Strength.'
                    },
                    {
                        rank: 5,
                        level: 60,
                        str: 10,
                        description: 'You gain Health equal to ten times your Strength.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Basher',
                img: 'basher.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 7,
                        description: 'Get up close and personal! Gun bashing gains a 15% chance to knock down enemies, does 25% more damage to enemies below 50% health, and gun bashing executes occur more frequently.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 9,
                        description: 'Gun bashing now deals 50% extra damage to enemies below 50% health and possibly cripples your opponent.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 9,
                        description: 'Gun bashing now does 75% more damage to enemies below 50% health and has increased chance to cripple your opponent.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 10,
                        description: 'Gun bashing now does double damage to enemies below 50% health and gains a 15% chance to critically hit.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Iron Roots',
                img: 'rooted.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 8,
                        description: 'Youre part tree! While standing still, gain a damage threshold of 4, doubled while over-encumbered.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        str: 9,
                        description: 'While standing still, gain a damage threshold of 8, doubled while over-encumbered.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        str: 10,
                        description: 'While standing still, gain a damage threshold of 12, doubled while over-encumbered.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Blitz',
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 9,
                        description: 'Find the gap and make the tackle! While not over-encumbered sprint 15% faster. V.A.T.S. melee distance increased by 50%'
                    },
                    {
                        rank: 2,
                        level: 29,
                        str: 10,
                        description: 'Melee attacks while sprinting deal 20% more damage. V.A.T.S. melee attacks deal more damage based on how far away you are.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Mano a Mano',
                img: 'iron-fist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 10,
                        description: 'Force your foes to fight you face to face. You take 5% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        str: 11,
                        description: 'You take 10% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking.'
                    },
                    {
                        rank: 3,
                        level: 48,
                        str: 12,
                        description: 'You take 15% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking.'
                    }
                ]
            }
        ]
    },
    {
        special: 'pe',
        perks: [
            {
                rank: 1,
                name: 'Explorer',
                img: 'vans.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 1, 
                        description: 'Gain double XP from discovering locations, and move 7% faster with your weapon holstered while not over-encumbered.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        per: 2,
                        description: 'Move 14% faster with your weapon holstered, and you may hold your V.A.T.S. key to see the path to your closest quest target.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        per: 3, 
                        description: 'Move 21% faster with your weapon holstered.'
                    },
                    {
                        rank: 4,
                        level: 45,
                        per: 4, 
                        description: 'Every location in the world is revealed on your map.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Rifleman',
                img: 'rifleman.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 2,
                        description: 'Keep your distance long and your kill-count high! You do 15% plus 0.5% per level with non-automatic rifles and shotguns.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        per: 3,
                        description: 'You do 25% more damage, and have 25% more range with non-automatic rifles and shotguns.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        per: 4,
                        description: 'You do 35% more damage, and have 50% more range with non-automatic rifles and shotguns.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        per: 5,
                        description: 'You do 45% more damage, and have 10% armor penetration with non-automatic rifles and shotguns.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        per: 6,
                        description: 'You do 55% more damage with non-automatic rifles and shotguns.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Locksmith',
                img: 'locksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 3,
                        description: 'Your nimble fingers allow you to pick, shoot, kick or explode Advanced locks. Shooting a lock is less likely to break it.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        per: 4, 
                        description: 'You can pick, shoot, kick or explode Expert locks. Shooting a lock is less likely to break it.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        per: 5,
                        description: 'You can pick, shoot, kick or explode Master locks. Shooting a lock is less likely to break it, and you can repair it if you do.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        per: 6, 
                        description: 'Your bobby pins never break during lockpicking, and locks you shoot never break.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Gun Nut',
                img: 'gun-nut.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 4,
                        description: 'Shoot first, kill first, with access to base level and Rank 1 gun mods.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        per: 5,
                        description: 'Create Rank 2 gun mods and more complex devices for your settlements.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        per: 6,
                        description: 'You gain access to Rank 3 gun mods.'
                    },
                    {
                        rank: 4,
                        level: 44,
                        per: 7,
                        description: 'You gain access to Rank 4 gun mods.'
                    },
                    {
                        rank: 4,
                        level: 85,
                        per: 8,
                        description: 'Create Rank 5 gun mods.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Gumshoe',
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 5,
                        description: 'The case called for plain, old-fashioned private eye work. XP gain and persuasion chance are increased by 1% per Perception.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        per: 6,
                        description: 'Put on your trench coat! While not wearing armor, gain 25% of your energy resistance as an armor bonus, plus an additional 10% of your rad resist if also not wearing a helmet.'
                    },
                    {
                        rank: 3,
                        level: 22,
                        per: 7,
                        description: 'Who is he? Why does he help? The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...'
                    },
                    {
                        rank: 4,
                        level: 49,
                        per: 8,
                        description: 'Plot Twist! The Mysterious Stranger is helping your case! The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your critical meter gets filled.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Night Person',
                img: 'night-person.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 6,
                        description: 'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        per: 7,
                        description: 'You now have +4 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        per: 8,
                        description: 'You gain night vision while sneaking.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Steady Aim',
                img: 'steady-aim.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 7,
                        description: 'Stay on target! Gain 1% increased accuracy per Perception while using a scope or aiming down sights.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        per: 8,
                        description: 'Deal 1% more damage per Perception while using a scope or aiming down sights.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        per: 9,
                        description: 'Deal 2% more damage and gain 2% more accuracy per Perception while using a scope or aiming down sights.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Concentrated Fire',
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 8,
                        description: 'Stay focused! In V.A.T.S. every attack on the same body part gains +10% accuracy.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        per: 9,
                        description: 'In V.A.T.S. every attack on the same body part gains +15% damage.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        per: 10,
                        description: 'In V.A.T.S. every attack on the same body part gains +20% accuracy and does 20% more damage.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Penetrator',
                img: 'penetrator.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 9,
                        description: 'There\'s no place to hide! Your attacks with ballistic weapons ignore 10% of a target\'s armor.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        per: 10,
                        description: 'Your attacks with ballistic weapons ignore 15% of your targets armor, and in V.A.T.S. you can target an enemy\'s body parts that are blocked by cover, with a large decrease in accuracy.'
                    },
                    {
                        rank: 3,
                        level: 52,
                        per: 11,
                        description: 'Your attacks with ballistic ignore 20% of a target\'s armor, and in V.A.T.S. when you target an enemy\'s body parts that are blocked by cover, there is only a small decrease in accuracy.'
                    }
                    
                ]
            },
            {
                rank: 10,
                name: 'Sniper',
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 10,
                        description: 'It\'s all about focus. Aiming while sneaking slows time slightly, but also drains Action Points..'
                    },
                    {
                        rank: 2,
                        level: 26,
                        per: 11,
                        description: 'You have improved control with scopes, and aiming while sneaking or holding your breath drains fewer Action Points.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        per: 12,
                        description: 'While aiming through a scope, always score a Critical hit against targets at full health.'
                    }
                ]
            }
        ]
    },
    {
        special: 'en',
        perks: [
            {
                rank: 1,
                name: 'Lead Belly',
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        end: 1,
                        description: 'Your digestive tract has adjusted to the weirdness of the Wasteland! You take less radiation from eating or drinking.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        end: 2,
                        description: 'Healing from food lasts 10% longer, and you take even less radiation from eating or drinking.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        end: 2,
                        description: 'Healing from food lasts 20% longer, and you take even less radiation from eating or drinking.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Chem Resistant',
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 2,
                       description: 'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming chems.'
                   },
                   {
                       rank: 2,
                       level: 48,
                       end: 3,
                       description: 'You gain almost complete immunity to chem addiction.'
                   }
                ]
            },
            {
                rank: 3,
                name: 'Aquaboy',
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 3,
                       description: 'Stay hydrated! Drinking water restores some Action Points, and you gain +200 rad resistance while swimming.'
                   },
                   {
                       rank: 2,
                       level: 28,
                       end: 4,
                       description: 'Drinking water restores even more Action Points, and you swim 25% faster.'
                   }
                ]
            },
            {
                rank: 4,
                name: 'Armorer',
                img: 'armorer.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 4, 
                       description: 'Protect yourself from the dangers of the Wasteland with access to Rank 1 armor mods.'
                   },
                {
                       rank: 2,
                       level: 14,
                       end: 5,
                       description: 'Worn armor weighs 25% less, and you gain access to Rank 2 armor mods.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       end: 6,
                       description: 'You gain access to Rank 3 armor mods.'
                   },
                   {
                       rank: 4,
                       level: 42,
                       end: 7,
                       description: 'Worn armor weighs 50% less, and you gain access to Rank 4 armor mods.'
                   }
                ]
            },
            {
                rank: 5,
                name: 'Strongback',
                img: 'strong-back.png',
                ranks: 5,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 5,
                       description: 'What are you, part pack mule? Gain +5 to carry weight per Endurance.'
                   },
                   {
                       rank: 2,
                       level: 10,
                       end: 6,
                       description: 'When overencumbered, running costs 25% less action points.'
                   },
                   {
                       rank: 3,
                       level: 20,
                       end: 7,
                       description: 'Gain +10 to carry weight per Endurance.'
                   },
                   {
                       rank: 4,
                       level: 30,
                       end: 8,
                       description: 'When overencumbered, running costs 50% less action points.'
                   },
                   {
                       rank: 5,
                       level: 40,
                       end: 9,
                       description: 'Worn armor weighs 50% less, and you gain access to Rank 4 armor mods.'
                }
                ]
            },
            {
                rank: 6,
                name: 'Attack Dog',
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 6,
                       description: 'Your faithful canine companion moves 15% faster and can hold an enemy, giving you a greater chance to hit them in V.A.T.S.'
                   },
                   {
                       rank: 2,
                       level: 9,
                       end: 7,
                       description: 'Your dog takes 3% less damage per point of your Endurance, and when he holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.'
                   },
                   {
                       rank: 3,
                       level: 25,
                       end: 8,
                       description: 'Your dog deals 3% more damage per point of your Endurance.'
                   },
                   {
                       rank: 4,
                       level: 31,
                       end: 9,
                       description: 'While your dog holds an enemy, they bleed Profuesely.'
                   }
                ]
            },
            {
                rank: 7,
                name: 'Ricohet',
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 7,
                       description: 'What goes around comes around! Bullets have a 10% chance to ricochet off you harmlessly.'
                   },
                   {
                       rank: 2,
                       level: 25,
                       end: 8,
                       description: 'When a bullet ricochets it now damages the enemy!'
                   },
                   {
                       rank: 3,
                       level: 37,
                       end: 9,
                       description: 'Enemy bullets now have a 2% chance per Endurance to Ricochet!'
                   }
                ]
            },
            {
                rank: 8,
                name: 'Ghoulish',
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 8,
                       description: 'Sure, you\'re still human - on the outside! Gain a +2 bonus to Strength and Perception while your radiation level is above 25%.'
                   },
                   {
                       rank: 2,
                       level: 24,
                       end: 9,
                       description: 'You take 30% less damage while your radiation level is above 25%.'
                   },
                   {
                       rank: 3,
                       level: 48,
                       end: 10,
                       description: 'You gain +50 Damage and Energy resistances, and take 50% less damage from radiation based attacks while your radiation level is above 25%.'
                   },
                   {
                       rank: 4,
                       level: 50,
                       end: 11,
                       description: 'You do 5% more damage and take 5% less damage for every 10% of your health contaminated by radiation (up to 50% of your health).'
                   }
                ]
            },
            {
                rank: 9,
                name: 'Bloodthirsty Cannibal',
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 9,
                       description: 'Feast on mortal flesh to heal your wounds! Eating human corpses restores 15% of your health, and you deal more limb damage while hungry.'
                   },
                   {
                       rank: 2,
                       level: 19,
                       end: 10,
                       description: 'Eating Ghoul or Super Mutant corpses restores 15% of your max health, and you deal 10% increased critical damage per rank of thirst.'
                   },
                   {
                       rank: 3,
                       level: 38,
                       end: 11,
                       description: 'You can feed on corpses of humanoids to restore Health, and when you do, you gain +30 to all resistances and can smell the living for a limited time.'
                   } 
                ]
            },
            {
                rank: 10,
                name: 'Solar Powered',
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 10,
                       description: 'Catch some rays! Slowly regenerate your lost health in sunlight.'
                   },
                   {
                       rank: 2,
                       level: 27,
                       end: 11,
                       description: 'The health regeneration from sunlight increases based on the time of day.'
                   },
                   {
                       rank: 3,
                       level: 50,
                       end: 12,
                       description: 'Increase the health regeneration from sunlight by 50%.'
                   }
                ]
            }
        ]
    },
    {
        special: 'ch',
        perks: [
            {
                rank: 1,
                name: 'Local Leader',
                img: 'local-leader.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 1,
                        description: 'As the ruler everyone turns to, you are able to establish supply lines between your settlements, and provisioners can carry equipment to be left at their home or destination.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        cha: 2,
                        description: 'You can now fast travel with a provisioner to their home or destination. You can also build stores and workstations at settlements.'
                    },
                    {
                        rank: 3,
                        level: 29,
                        cha: 3,
                        description: 'Your provisioners now carry transponders. Activate the Provisioner Tracker quest in your Pip Boy to view their location on your map.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Party Boy',
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 2,
                        description: 'Nobody has a good time like you! Temporarily ignore the effects of addiction withdrawal with a refreshing Nuka-Cola, and in survival quench your thirst with beer.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        cha: 3,
                        description: 'Each addiction you have increases the duration of all chems by 20%.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        cha: 4,
                        description: 'The effects of chems are doubled if you have 3 or more addictions.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Dressed for the Apocalypse',
                img: 'rad-resistant.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 3,
                        description: 'Dress to impress! Gain 15 Rad Resistance, double that while not wearing leg armor.'
                    },
                    {
                        rank: 2,
                        level: 8,
                        cha: 4,
                        description: 'Reduce incoming ballistic damage by a flat amount equal to half your Charisma, doubled if not wearing chest armor.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        cha: 5,
                        description: 'Reduce incoming energy damage by a flat amount equal to half your Charisma, doubled if not wearing arm armor.'
                    },
                    {
                        rank: 4,
                        level: 36,
                        cha: 6,
                        description: 'While not wearing the required armor, previous ranks are tripled, instead of doubled.'
                    },
                    {
                        rank: 5,
                        level: 48,
                        cha: 7,
                        description: 'While not wearing the required armor, instead add 4 times your Charisma from the previous levels.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Lady Killer',
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 4,
                        description: 'You\'re charming... and dangerous. Women suffer +1% damage per point of Charisma, and are easier to persuade in dialogue.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        cha: 5,
                        description: 'Gain 10% armor penetration against women. Women are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        cha: 6,
                        description: 'Even other men find you irresistible! Gain half the effects of this perk against men.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Refractor',
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 5,
                        description: 'You must be part mirror! Instantly gain +10 Energy Resistance.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        cha: 6,
                        description: 'You now have +20 Energy Resistance, and lasers have a 10% chance to ricochet off you instead of damaging you, charging your Critical meter!'
                    },
                    {
                        rank: 3,
                        level: 21,
                        cha: 7,
                        description: 'You now have +30 Energy Resistance, and take 50% less limb damage from lasers.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        cha: 8,
                        description: 'You now have +40 Energy Resistance, and lasers charge your Critical meter twice as fast.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        cha: 9,
                        description: 'You take 25% less energy damage, and cannot be critically hit by enemies.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Animal Friend',
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 6,
                        description: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        cha: 7,
                        description: 'Wild animals will no longer attack you unprovoked.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        cha: 8,
                        description: 'Animals will now come to your aid, but not against other animals.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Inspirational',
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 7,
                        description: 'Because you lead by example, your companions and settlers take 3% less damage per point of your Charisma, and cannot hurt you.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        cha: 8,
                        description: 'Your companion and settlers deals 3% more damage per point of your Charisma, and can\'t be harmed by your attacks.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        cha: 9,
                        description: 'While traveling with a companion, you gain an additional 75 carry weight.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Wasteland Whisperer',
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 8,
                        description: 'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        cha: 9,
                        description: 'When you successfully pacify a Wasteland creature, you can incite it to attack.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        cha: 10,
                        description: 'When you successfully pacify a Wasteland creature, you can give it specific commands.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Decapitalist',
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 9,
                        description: 'The fewer caps you carry, the better deals you get. Gain 5% better buying prices, plus up to an additional 10% while carrying less than 5000 caps (1% per 500 less).'
                    },
                    {
                        rank: 2,
                        level: 20,
                        cha: 10,
                        description: 'Gain 10% better buying prices, plus up to an additional 20% while carrying less than 10,000 caps (1% per 500 less). Additionally, apply half the bonus to head and limb damage.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        cha: 11,
                        description: 'Gain 15% better buying prices, plus up to an additional 30% while carrying less than 15,000 caps (1% per 500 less). Additionally, apply half the bonus to V.A.T.S. headshot accuracy.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Intimidation',
                img: 'intimidation.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 10,
                        description: 'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them. Once pacified, you can make enemies flee the scene.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        cha: 11,
                        description: 'When you successfully pacify someone, you can incite them to attack using watered down Psycho or interrogate them for information on their allies\' whereabouts! '
                    },
                    {
                        rank: 3,
                        level: 38,
                        cha: 12,
                        description: 'When you successfully pacify someone, you can equip them with a detonatable collar and make them do your bidding! Additionally, you now gain double XP from intimidations!'
                    }
                ]
            }
        ]
    },
    {
        special: 'in',
        perks: [
            {
                rank: 1,
                name: 'Medic',
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 1,
                        description: 'Is there a doctor in the house? Oh wait, You! While below 50% health, Stimpaks and Medpaks heal 25% more.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        int: 2,
                        description: 'While below 50% health, Stimpaks and Medpaks heal 50% more.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        int: 3,
                        description: 'While below 50% health, Stimpaks and Medpaks heal 75% more, and Stimpaks restore an additional missing segment of health.'
                    },
                    {
                        rank: 4,
                        level: 49,
                        int: 4,
                        description: 'While below 50% health, Stimpaks and Medpaks heal twice as much.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Demolition Expert',
                img: 'demolition-expert.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 2,
                        description: 'The bigger the boom, the better! You do 15% more damage plus an additional 0.5% per level with explosives.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        int: 3,
                        description: 'You do 25% more damage with explosives, you can craft explosives at the crafting station, and your grenades gain a throwing arc.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        int: 4,
                        description: 'You do 35% more damage with explosives, and your explosives now affect a 25% larger area.'
                    },
                    {
                        rank: 4,
                        level: 40,
                        int: 5,
                        description: 'You do 45% more damage with explosives, and you take 20% less damage from explosives.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Hacker',
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 3,
                        description: 'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals and Robots. When you successfully hack a robot, gain a chance to power it on or off.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        int: 4,
                        description: 'You can hack Expert terminals. When you hack a robot, you can initiate a self-destruct.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        int: 5,
                        description: 'You can hack or bypass Master terminals. When you successfully hack a robot, you can incite it to attack.'
                    },
                    {
                        rank: 4,
                        level: 33,
                        int: 6,
                        description: 'When hacking, you never get locked out of a terminal when things go wrong. When you successfully hack a robot, you can give it specific commands.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Chemist',
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 4,
                        description: 'Your knowledge of basic chemistry allows you to craft a few basic components at the chemistry workbench.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        int: 5,
                        description: 'You can now craft a few simple chems and syringer ammo. Chem I recipes yield an additional product.'
                    },
                    {
                        rank: 3,
                        level: 36,
                        int: 6,
                        description: 'You can now craft more advanced wasteland chems, and your Chem I and II recipes yield an additional product.'
                    },
                    {
                        rank: 4,
                        level: 54,
                        int: 7,
                        description: 'You can now craft pre-war chems, and your Chem I, II, and III recipes yield an additional product.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Science!',
                img: 'robotics-expert.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 5,
                        description: 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        int: 6,
                        description: 'You gain access to Rank 2 high-tech mods.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        int: 7,
                        description: 'You gain access to Rank 3 high-tech mods.'
                    },
                    {
                        rank: 4,
                        level: 45,
                        int: 8,
                        description: 'You gain access to Rank 4 high-tech mods.'
                    },
                    {
                        rank: 5,
                        level: 88,
                        int: 9,
                        description: 'You gain access to Rank 5 high-tech mods.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Overclocked V.A.T.S.',
                img: 'awareness.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 6,
                        description: 'To defeat your enemies, know their weaknesses! V.A.T.S. costs are reduced by 1% per Intelligence. You can view a target\'s specific damage resistances in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        int: 7,
                        description: 'V.A.T.S. costs are now reduced by 2% per Intelligence.'
                    },
                    {
                        rank: 3,
                        level: 36,
                        int: 8,
                        description: 'V.A.T.S. costs are reduced by 3% per Intelligence.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Ad victoriam!',
                img: 'science.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 7,
                        description: 'To Victory! You deal an additional 5% damage with energy weapons, doubled while in Power Armor.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        int: 8,
                        description: 'You deal an Addtional 10% damage with Energy weapons, doubled while in power armor.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        int: 9,
                        description: 'You deal an Addtional 15% damage with Energy weapons, doubled while in power armor.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Fatal Exception',
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 8,
                        description: 'Pip-Boy has encountered an error! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        int: 9,
                        description: 'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        int: 10,
                        description: 'Any kill in V.A.T.S. now has a 35% chance to restore all Action Points and refill your Critical Meter'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Forced Evolution',
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 9,
                        description: 'Inject yourself with a modified F.E.V. strain and be your own best test subject! Gain +2 Strength, but -1 Charisma.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        int: 10,
                        description: 'Gain +4 Strength, but -2 Charisma, and regenerate health quickly below 20%.'
                    },
                    {
                        rank: 3,
                        level: 36,
                        int: 11,
                        description: 'Gain +6 Strength, but -3 Charisma, and regenerate health quickly below 30%.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Nuclear Physicist',
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 10,
                        description: 'You\'ve learned to split the atom... You can now recover and recharge your depleted fusion cores with fresh nuclear material to 50% of their normal capacity. Radiation weapons do 50% more damage.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        int: 11,
                        description: 'You can now recharge depleted fusion cores to 100% of their original capacity. Radiation weapons now do double damage.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        int: 12,
                        description: 'You can now recharge depleted fusion cores to double their original capacity.'
                    }
                ]
            }
        ]
    },
    {
        special: 'ag',
        perks: [
            {
                rank: 1,
                name: 'Quick Hands',
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 1,
                        description: 'In combat, there\'s no time to hesitate! While in combat, you can reload all guns 15% faster, and your hipfire accuracy is improved by 15%.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        agi: 2,
                        description: 'While in combat, you can reload all guns 30% faster, and your hipfire accuracy is improved by 30%.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        agi: 3,
                        description: 'You can reload all guns 45% faster, and your hipfire accuracy is improved by 45%.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Gunslinger',
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 2,
                        description: 'Channel the spirit of the Old West! You do 15% plus an additional 0.5% per level more damage with all pistols.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        agi: 3,
                        description: 'You do 25% more damage with all pistols, and pistols deal 20% more damage to limbs.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        agi: 4,
                        description: 'You do 35% more damage with all pistols, and attacks with pistols on arms have a chance to disarm your target.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        agi: 5,
                        description: 'You do 45% more damage with all pistols, and attacks with pistols on legs have a chance to knock your target down.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        agi: 6,
                        description: 'You do 55% more damage with all pistols.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Ninja',
                img: 'ninja.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 3,
                        description: 'Trained as a shadow warrior, you do 15% more damage plus an additional 0.5% per level with bladed weapons.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        agi: 4,
                        description: 'You do 25% more damage with bladed weapons, and you move 5% faster when sneaking.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        agi: 5,
                        description: 'You do 35% more damage with bladed weapons, and you move 10% faster while sneaking.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        agi: 6,
                        description: 'You do 45% more damage with bladed weapons, and you move 15% faster while sneaking.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        agi: 7,
                        description: 'You do 55% more damage with bladed weapons.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Sneak',
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 4,
                        description: 'Become whisper, become shadow. You are 20% harder to detect while sneaking while not over-encumbered.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        agi: 5,
                        description: 'You are now 30% harder to detect while sneaking while not over-ecumbered.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        agi: 6,
                        description: 'You are now 40% harder to detect while sneaking while not over-encumbered.'
                    },
                    {
                        rank: 4,
                        level: 32,
                        agi: 7,
                        description: 'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth while not over-encumbered.'
                    },
                    {
                        rank: 5,
                        level: 38,
                        agi: 8,
                        description: 'Engaging stealth causes distant enemies to lose you while not over-encumbered.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Infiltrator',
                img: 'pickpocket.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 5,
                        description: 'Your silenced guns deal 5% more damage per point of Agility with sneak attacks, and picking pockets is 25% easier.'
                    },
                    {
                        rank: 2,
                        level: 6,
                        agi: 6,
                        description: 'Your silenced guns deal 10% more damage per point of Agility with sneak attacks, and picking pockets is 50% easier. You can now place a live grenade in a person\'s inventory.'
                    },
                    {
                        rank: 3,
                        level: 17,
                        agi: 7,
                        description: 'Your silenced guns deal 15% more damage per point of Agility with sneak attacks, and picking pockets is 75% easier, and you can steal equipped weapons.'
                    },
                    {
                        rank: 4,
                        level: 30,
                        agi: 8,
                        description: 'Picking Pockets is now twice as easy, and you can steal equipped items.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Mister Sandman',
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 6,
                        description: 'As an agent of death itself, your melee weapons do an additional 25% sneak attack damage.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        agi: 7,
                        description: 'Your melee weapons do an additional 50% sneak attack damage.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        agi: 8,
                        description: 'You can instantly kill a sleeping person, and your melee weapons now do 75% more sneak attack damage'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Action Boy',
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 7,
                        description: 'There\'s no time to waste! While not over-encumbered, your Action Points regenerate faster based on how fast you\'re moving.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        agi: 8,
                        description: 'While moving and in combat, your Action Points regenerate even faster while not over-encumbered.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: 'Sprinting drains your Action Points half as fast.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Deadly Rush',
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 8,
                        description: 'Feel the Adrenaline! Each rank of reduces the effects of fatigue, and decreases the chance you\'ll be staggered.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        agi: 9,
                        description: 'Each rank of Adrenaline grants you increased AP and AP Regeneration.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        agi: 10,
                        description: 'Gain a 3% dodge chance per rank of Adrenaline.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        agi: 11,
                        description: 'Your Critical Hits deal an extra 10% damage per rank of Adrenaline.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Gun-Fu',
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 9,
                        description: 'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        agi: 10,
                        description: 'In V.A.T.S. you do 50% more damage to your third target and beyond.'
                    },
                    {
                        rank: 3,
                        level: 42,
                        agi: 11,
                        description: 'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Arobatics',
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 10,
                        description: 'While unencumbered and not wearing Power Armor, you have a 5% chance to dodge any incoming attack. Doubled while running. Tripled while sprinting.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        agi: 11,
                        description: 'While unencumbered, moving, and not wearing Power Armor, you now have a 10% chance to dodge any incoming attack. Doubled while running. Tripled while sprinting.'
                    },
                    {
                        rank: 3,
                        level: 52,
                        agi: 12,
                        description: 'While unencumbered, moving, and not wearing Power Armor, you now have a 15% chance to dodge any incoming attack. Doubled while running. Tripled while sprinting.'
                    }
                ]
            }
        ]
    },
    {
        special: 'lu',
        perks: [
            {
                rank: 1,
                name: 'Beginner\'s Luck',
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 1,
                        description: 'Feeling lucky? You have a 7% chance to receive 3x XP from any action.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        lck: 2,
                        description: 'When you fire the last round in your magazine you have a 7% chance to gain a free magazine.'
                    },
                    {
                        rank: 3,
                        level: 34,
                        lck: 3,
                        description: 'There\'s a chance that your enemies will explode in a shower of caps when you kill them.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Commando',
                img: 'commando.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 2,
                        description: 'Rigorous combat training or just dumb luck? Either way, you do 15% more damage, plus an additional 0.5% damage per level with full and semi-auto rifles and shotguns.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        lck: 3,
                        description: 'You do 25% more damage, and have a 7% chance to gain a free magazine when you fire the last bullet in your magazine with full and semi-auto rifles and shotguns.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        lck: 4,
                        description: 'You do 35% more damage with full and semi-auto rifles and shotguns..'
                    },
                    {
                        rank: 4,
                        level: 50,
                        lck: 5,
                        description: 'You do 45% more damage, and have a 14% chance to gain a free magazine when you fire the last bullet in your magazine with full and semi-auto rifles and shotguns.'
                    },
                    {
                        rank: 5,
                        level: 74,
                        lck: 6,
                        description: 'You do 55% more damage with full and semi-auto rifles and shotguns.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Scrapper',
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 3,
                        description: 'Waste not, want not! Hardened weapons grant more scrap, and you can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        lck: 4,
                        description: 'Powerful weapons grant more scrap, and you can salvage rare components like circuitry, nuclear material, and fiberoptics when scrapping weapons and armor. Favorited components are highlighted.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        lck: 5,
                        description: 'Advanced weapons grant more scrap, and you get more from salvaging.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Four Leaf Clover',
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 4,
                        description: 'Feeling lucky? You should! Whenever you\'re facing 4 or more enemies, gain +1 to Strength, Perception, and Endurance.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        lck: 5,
                        description: 'Whenever you\'re facing 4 or more enemies, gain +1 to Charisma, Intelligence, and Agility.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        lck: 6,
                        description: 'Whenever you\'re facing 4 or more enemies, gain +3 Luck.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        lck: 7,
                        description: 'Whenever you\'re facing 7 or more enemies, gain an additional +1 to all SPECIALs.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Lone Wanderer',
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 5,
                        description: 'Who needs friends when you have luck? Take 1% per Luck reduced damage, doubled when traveling without a companion.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        lck: 6,
                        description: 'Gain +3 carry weight per Luck, doubled when traveling without a companion.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        lck: 7,
                        description: 'Gain 1% per Luck increased damage, doubled when traveling without a companion.'
                    },
                    {
                        rank: 4,
                        level: 48,
                        lck: 8,
                        description: 'Bonuses from previous ranks of the perk are tripled instead of doubled when traveling without a companion!'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Better Criticals',
                img: 'better-criticals.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 6,
                        description: 'Advanced training for enhanced combat effectiveness! Gain a 5% Critical Hit chance outside of V.A.T.S., and you can save a Critical Hit, to be used in V.A.T.S. when you need it the most.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        lck: 7,
                        description: 'Add half your Luck to your Critical Hit chance outside V.A.T.S., and you can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        lck: 8,
                        description: 'Add your Luck to your Critical Hit chance outside V.A.T.S., and banking a Critical has a chance to save an additional Critical.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Bloody Mess',
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 7,
                        description: '+25% bonus Critical Hit damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!'
                    },
                    {
                        rank: 2,
                        level: 9,
                        lck: 8,
                        description: 'Your Critical Hits gain a weak bleed effect.'
                    },
                    {
                        rank: 3,
                        level: 31,
                        lck: 9,
                        description: 'Your Critical Hits gain a strong bleed effect.'
                    },
                    {
                        rank: 4,
                        level: 47,
                        lck: 10,
                        description: '+50% bonus Critical Hit damage, and when an enemy explodes after a Critical Hit, nearby enemies may suffer the same fate.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Scrounger',
                img: 'scrounger.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 8,
                        description: 'You know just how to scavenge to keep the fight going, and gain a chance to find rare bulk ammo caches in ammo boxes.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        lck: 9,
                        description: 'You gain a chance to find rare bulk caches of explosives in explosives boxes.'
                    },
                    {
                        rank: 3,
                        level: 52,
                        lck: 10,
                        description: 'You find more ammunition in all containers.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Fortune Finder',
                img: 'fortune-finder.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 9,
                        description: 'You\'ve learned to discover the Wasteland\'s hidden wealth, caps stashes you find have a rare chance to contain 10 times as many caps.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        lck: 10,
                        description: 'You gain a rare chance to find legendaries in locked safes.'
                    },
                    {
                        rank: 4,
                        level: 42,
                        lck: 11,
                        description: 'You find more bottlecaps in all containers.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Serendipity',
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        lck: 10,
                        description: 'You must be the chosen one! While below 33% health, gain a 15% chance to avoid damage.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        lck: 11,
                        description: 'While below 33% health, gain a 30% chance to avoid damage.'
                    },
                    {
                        rank: 3,
                        level: 48,
                        lck: 12,
                        description: 'While below 33% health, gain a 45% chance to avoid damage.'
                    }
                ]
            }
        ]
    }
];
