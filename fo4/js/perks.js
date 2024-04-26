const perks = [
    {
    "special": "st",
    "perks": [
        {
            "rank": 1,
            "name": "Big Leagues",
            "img": "big-leagues.png",
            "ranks": 5,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 1,
                    "description": "Swing for the fences! You do 15% more damage, plus an additional 0.5% damage per level with unarmed and blunt melee weapons."
                },
                {
                    "rank": 2,
                    "level": 12,
                    "str": 2,
                    "description": "You do 25% more damage with unarmed and blunt melee weapons, and you gain a chance of knocking down your target."
                },
                {
                    "rank": 3,
                    "level": 30,
                    "str": 3,
                    "description": "You do 35% more damage with unarmed and blunt melee weapons, and your attacks will hit all targets in front of you."
                },
                {
                    "rank": 4,
                    "level": 50,
                    "str": 4,
                    "description": "You do 45% more damage with unarmed and blunt melee weapons, and gain a chance to cripple your opponent, or grand slam their head clean off!"
                },
                {
                    "rank": 5,
                    "level": 70,
                    "str": 5,
                    "description": "You do 55% more damage with unarmed and blunt melee weapons."
                }
            ]
        },
        {
            "rank": 2,
            "name": "Heavy Gunner",
            "img": "heavy-gunner.png",
            "ranks": 5,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 2,
                    "description": "Thanks to practice and conditioning, you do 15% more damage plus an additional 0.5% per level with heavy guns."
                },
                {
                    "rank": 2,
                    "level": 12,
                    "str": 3,
                    "description": "You do 25% more damage with heavy guns, and each heavy gun you carry increases your carry weight by 10, up to +100 Carry weight."
                },
                {
                    "rank": 3,
                    "level": 30,
                    "str": 4,
                    "description": "You do 35% more damage with heavy guns, and you walk 20% faster with a heavy weapon drawn."
                },
                {
                    "rank": 4,
                    "level": 50,
                    "str": 5,
                    "description": "You do 45% more damage with heavy guns, and an additional 20% if you are also over-encumbered."
                },
                {
                    "rank": 5,
                    "level": 70,
                    "str": 6,
                    "description": "You do 55% more damage with heavy guns."
                }
            ]
        },
        {
            "rank": 3,
            "name": "Adamantium Skeleton",
            "img": "adamantium-skeleton.png",
            "ranks": 3,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 3,
                    "description": "Your skeleton has been infused with indestructible metal, reducing limb damage, fall damage, and damage from over-encumbrance by 30%."
                },
                {
                    "rank": 2,
                    "level": 15,
                    "str": 4,
                    "description": "Your limb damage, fall damage, and damage from over-encumbrance are now reduced by 60%."
                },
                {
                    "rank": 3,
                    "level": 37,
                    "str": 5,
                    "description": "Your limb damage, fall damage, and damage from over-encumbrance are now reduced by 90%."
                }
            ]
        },
        {
            "rank": 4,
            "name": "Blacksmith",
            "img": "blacksmith.png",
            "ranks": 4,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 4,
                    "description": "Fire up the forge and gain access to base level and Rank 1 power armor and melee weapon mods."
                },
                {
                    "rank": 2,
                    "level": 16,
                    "str": 5,
                    "description": "You gain access to Rank 2 power armor and melee weapon mods."
                },
                {
                    "rank": 3,
                    "level": 29,
                    "str": 6,
                    "description": "You gain access to Rank 3 power armor and melee weapon mods."
                },
                {
                    "rank": 4,
                    "level": 43,
                    "str": 7,
                    "description": "You gain access to rank 4 power armor mods."
                }
            ]
        },
        {
            "rank": 5,
            "name": "Pain Train",
            "img": "pain-train.png",
            "ranks": 5,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 5,
                    "description": "Choo Choo! All aboard! While wearing Power Armor, sprinting into enemies hurts and staggers them, and your armor takes 5% less damage."
                },
                {
                    "rank": 2,
                    "level": 13,
                    "str": 6,
                    "description": "While wearing Power Armor, fusion cores last twice as long while running, and your armor takes 10% less damage."
                },
                {
                    "rank": 3,
                    "level": 26,
                    "str": 7,
                    "description": "Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger, and your power armor takes 15% less damage."
                },
                {
                    "rank": 4,
                    "level": 39,
                    "str": 8,
                    "description": "Your fusion cores last three times as long in Power Armor while running, and your armor takes 20% less damage."
                },
                {
                    "rank": 5,
                    "level": 54,
                    "str": 9,
                    "description": "Sprinting into enemies now causes massive damage and knocks them down. Landing near enemies inflicts even more damage. Your power armor takes 25% less damage."
                }
            ]
        },
        {
            "rank": 6,
            "name": "Buffness",
            "img": "toughness.png",
            "ranks": 5,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 6,
                    "description": "You must work out! Gain Health equal to two times your Strength."
                },
                {
                    "rank": 2,
                    "level": 10,
                    "str": 7,
                    "description": "You gain Health equal to four times your Strength."
                },
                {
                    "rank": 3,
                    "level": 20,
                    "str": 8,
                    "description": "You gain Health equal to six times your Strength."
                },
                {
                    "rank": 4,
                    "level": 40,
                    "str": 9,
                    "description": "You gain Health equal to eight times your Strength."
                },
                {
                    "rank": 5,
                    "level": 60,
                    "str": 10,
                    "description": "You gain Health equal to ten times your Strength."
                }
            ]
        },
        {
            "rank": 7,
            "name": "Basher",
            "img": "basher.png",
            "ranks": 4,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 7,
                    "description": "Get up close and personal! Gun bashing gains a 15% chance to knock down enemies, does 25% more damage to enemies below 50% health, and gun bashing executes occur more frequently."
                },
                {
                    "rank": 2,
                    "level": 12,
                    "str": 9,
                    "description": "Gun bashing now deals 50% extra damage to enemies below 50% health and possibly cripples your opponent."
                },
                {
                    "rank": 3,
                    "level": 30,
                    "str": 9,
                    "description": "Gun bashing now does 75% more damage to enemies below 50% health and has increased chance to cripple your opponent."
                },
                {
                    "rank": 4,
                    "level": 50,
                    "str": 10,
                    "description": "Gun bashing now does double damage to enemies below 50% health and gains a 15% chance to critically hit."
                }
            ]
        },
        {
            "rank": 8,
            "name": "Iron Roots",
            "img": "rooted.png",
            "ranks": 3,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 8,
                    "description": "You're part tree! While standing still, gain a damage threshold of 4, doubled while over-encumbered."
                },
                {
                    "rank": 2,
                    "level": 23,
                    "str": 9,
                    "description": "While standing still, gain a damage threshold of 8, doubled while over-encumbered."
                },
                {
                    "rank": 3,
                    "level": 50,
                    "str": 10,
                    "description": "While standing still, gain a damage threshold of 12, doubled while over-encumbered."
                }
            ]
        },
        {
            "rank": 9,
            "name": "Blitz",
            "img": "blitz.png",
            "ranks": 2,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 9,
                    "description": "Find the gap and make the tackle! While not over-encumbered sprint 15% faster. V.A.T.S. melee distance increased by 50%"
                },
                {
                    "rank": 2,
                    "level": 29,
                    "str": 10,
                    "description": "Melee attacks while sprinting deal 20% more damage. V.A.T.S. melee attacks deal more damage based on how far away you are."
                }
            ]
        },
        {
            "rank": 10,
            "name": "Mano a Mano",
            "img": "iron-fist.png",
            "ranks": 3,
            "ranked": [
                {
                    "rank": 1,
                    "level": 0,
                    "str": 10,
                    "description": "Force your foes to fight you face to face. You take 5% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking."
                },
                {
                    "rank": 2,
                    "level": 26,
                    "str": 11,
                    "description": "You take 10% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking."
                },
                {
                    "rank": 3,
                    "level": 48,
                    "str": 12,
                    "description": "You take 15% less damage for each enemy beyond the first while wielding a melee weapon and not sneaking."
                }
            ]
        }
    ]
}

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
                        per; 1, 
                        description: 'Gain double XP from discovering locations, and move 7% faster with your weapon holstered while not over-encumbered.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        per; 2,
                        description: 'Move 14% faster with your weapon holstered, and you may hold your V.A.T.S. key to see the path to your closest quest target.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        per; 3, 
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
                        description: 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target\'s armor.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target\'s armor.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'Attacks with non-automatic rifles do 80% more damage and ignore 25% of a target\'s armor. They also have a slight chance of crippling a limb.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: 'Attacks with non-automatic rifles do double damage and ignore 30% of a target\'s armor. They also have a slightly higher chance of crippling a limb.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Awareness',
                img: 'awareness.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'To defeat your enemies, know their weaknesses! You can view a target\'s specific damage resistances in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'Knowing their weaknesses lets you attack more efficiently. 5% increase to hit chance and damage dealt to VATS targets.(Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Locksmith',
                img: 'locksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Your nimble fingers allow you to pick advanced locks.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'You can pick Expert locks.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'You can pick Master locks.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: 'Your bobby pins never break during lockpicking.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Demolition Expert',
                img: 'demolition-expert.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.'
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: 'Your explosives do 50% more damage, and grenades gain a throwing arc.'
                    },
                    {
                        rank: 3,
                        level: 22,
                        description: 'Your explosives do 75% more damage and affect a larger area.'
                    },
                    {
                        rank: 4,
                        level: 34,
                        description: 'Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too.'
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
                        description: 'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        description: 'You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: 'You have 30 extra health between the hours of 6:00 PM and 6:00 AM.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Refractor',
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You must be part mirror! Instantly gain +10 Energy Resistance.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'You now have +20 Energy Resistance.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'You now have +30 Energy Resistance.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: 'You now have +40 Energy Resistance.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: 'You now have +50 Energy Resistance.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Sniper',
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'Non-automatic, scoped rifles have a chance of knocking down your target.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: 'Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Penetrator',
                img: 'penetrator.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'There\'s no place to hide! In V.A.T.S you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: 'In V.A.T.S when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Concentrated Fire',
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: 'In V.A.T.S every attack on the same body part gains +15% accuracy.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage.'
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
                name: 'Toughness',
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You now have +20 damage resistance.'
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: 'You now have +30 damage resistance.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'You now have +40 damage resistance.'
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: 'You now have +50 damage resistance.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Lead Belly',
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking.'
                   },
                   {
                       rank: 2,
                       level: 6,
                       description: 'You take even less radiation from eating or drinking.'
                   },
                   {
                       rank: 3,
                       level: 17,
                       description: 'You take no radiation from eating or drinking.'
                   }
                ]
            },
            {
                rank: 3,
                name: 'Life Giver',
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'You embody wellness! Instantly gain +20 maximum Health.'
                   },
                   {
                       rank: 2,
                       level: 8,
                       description: 'You instantly gain another +20 maximum Health.'
                   },
                   {
                       rank: 3,
                       level: 20,
                       description: 'You instantly gain another +20 maximum Health, and slowly regenerate lost Health.'
                   }
                ]
            },
            {
                rank: 4,
                name: 'Chem Resistant',
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems'
                   },
                   {
                       rank: 2,
                       level: 22,
                       description: 'You gain complete immunity to chem addiction.'
                   }
                ]
            },
            {
                rank: 5,
                name: 'Aquaboy',
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater'
                   },
                   {
                       rank: 2,
                       level: 21,
                       description: 'You become totally undetectable while submerged.'
                   }
                ]
            },
            {
                rank: 6,
                name: 'Rad Resistant',
                img: 'rad-resistant.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance.'
                   },
                   {
                       rank: 2,
                       level: 13,
                       description: 'You now have +20 Radiation Resistance.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       description: 'You now have +30 Radiation Resistance.'
                   },
                   {
                       rank: 4,
                       level: 35,
                       description: 'You now have +40 Radiation Resistance. (Far Harbor DLC)'
                   }
                ]
            },
            {
                rank: 7,
                name: 'Adamantium Skeleton',
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Your skeleton has been infused with indestructible metal, reducing limb damage by 30%.'
                   },
                   {
                       rank: 2,
                       level: 13,
                       description: 'Your limb damage is now reduced by 60%.'
                   },
                   {
                       rank: 3,
                       level: 26,
                       description: 'Your limb damage is completely eliminated.'
                   }
                ]
            },
            {
                rank: 8,
                name: 'Cannibal',
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Feast on mortal flesh to heal your wounds! Eating human corpses restores Health.'
                   },
                   {
                       rank: 2,
                       level: 19,
                       description: 'Eating Ghoul or Super Mutant corpses restores Health.'
                   },
                   {
                       rank: 3,
                       level: 38,
                       description: 'Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health.'
                   }
                ]
            },
            {
                rank: 9,
                name: 'Ghoulish',
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       description: 'Sure, you\'re still human - on the outside! Radiation now regenerates your lost Health.'
                   },
                   {
                       rank: 2,
                       level: 24,
                       description: 'Radiation now regenerates even more of your lost Health.'
                   },
                   {
                       rank: 3,
                       level: 48,
                       description: 'Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly.'
                   },
                   {
                       rank: 4,
                       level: 50,
                       description: 'Rad damage will now begin to slowly heal, restoring health in the process. (Nuka-World DLC)'
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
                       description: 'Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.'
                   },
                   {
                       rank: 2,
                       level: 27,
                       description: 'Sunlight slowly heals your radiation damage.'
                   },
                   {
                       rank: 3,
                       level: 50,
                       description: 'Sunlight slowly regenerates your lost Health.'
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
                name: 'Cap Collector',
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve mastered the art of the deal! Buying and selling prices at vendors are better.'
                    },
                    {
                        rank: 2,
                        level: 20,
                        description: 'Buying and selling prices of vendors are now much better.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: 'You can now invest a total of 500 caps to raise a store\'s buying capacity.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Lady Killer',
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        description: 'Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Lone Wanderer',
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'When adventuring without a companion, you take 20% less damage and carry weight increases by 100'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'When adventuring without a companion, you do 25% more damage.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: 'When adventuring without a companion, you have 25 more action points.(Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Attack Dog',
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.'
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: 'When adventuring with your dog, you take 10% less damage. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Animal Friend',
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        description: 'When you successfully pacify an animal, you can incite it to attack'
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: 'When you successfully pacify an animal, you can give it specific commands'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Local Leader',
                img: 'local-leader.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'You can build stores and workstations at workshop settlements.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Party Boy',
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: 'The effects of alcohol are doubled.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: 'Your Luck is increased by 3 while you\'re under the influence of alcohol.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Inspiration',
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Because you lead by example, your companion does more damage in combat, and cannot hurt you.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'Your companion resists more damage in combat, and can\'t be harmed by your attacks.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: 'Your companion can carry more items.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Wasteland Whisperer',
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: 'When you successfully pacify a creature, you can incite it to attack.'
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: 'When you successfully pacify a creature, you can give it specific commands.'
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
                        description: 'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: 'When you successfully pacify someone, you can incite them to attack.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'When you successfully pacify someone, you can give them specific commands.'
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
                name: 'V.A.N.S.',
                img: 'vans.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 36,
                        description: 'Gain +2 to Perception. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Medic',
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: 'Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation'
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: 'Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation'
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: 'Stimpaks and RadAway restore all lost health and radiation, and work much more quickly.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Gun Nut',
                img: 'gun-nut.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You gain access to base level and Rank 1 gun mods'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'You gain access to Rank 2 gun mods'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'You gain access to Rank 3 gun mods'
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: 'You gain access to Rank 4 gun mods'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Hacker',
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You can hack Expert terminals.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'You can hack Master terminals.'
                    },
                    {
                        rank: 4,
                        level: 33,
                        description: 'When hacking, you never get locked out of a terminal when things go wrong.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Scrapper',
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: 'You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'You get more from salvaging. Appears to only apply to uncommon components, i.e., those affected by the first level of the perk. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Science',
                img: 'science.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'You gain access to Rank 2 high-tech mods.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: 'You gain access to Rank 3 high-tech mods.'
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: 'You gain access to Rank 4 high-tech mods.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Chemist',
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Any chems you take last 50% longer. Far out.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: 'Any chems you take now last twice as long.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: 'Any chems you take now last an additional 150% longer.'
                    },
                    {
                        rank: 4,
                        level: 45,
                        description: 'Any chems you take now last an additional 200% longer.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Robotics Expert',
                img: 'robotics-expert.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'When you successfully hack a robot, you can incite it to attack.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: 'When you successfully hack a robot, you can give it specific commands.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Nuclear Physicist',
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer.'
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: 'Radiation weapons now do double damage and Fusion Cores last an extra 50% longer.'
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: 'Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Nerd Rage',
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.'
                    },
                    {
                        rank: 2,
                        level: 31,
                        description: 'You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.'
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
                name: 'Gunslinger',
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Channel the spirit of the old west! Non-automatic pistols do 20% more damage.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'Non-automatic pistols now do 40% more damage and have increased range.'
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: 'Non-automatic pistols now do 60% more damage and range is increased even further.'
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: 'Non-automatic pistols now do 80% more damage and their attacks can disarm opponents.'
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: 'Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.'
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
                        description: 'Rigorous combat training means automatic weapons do 20% more damage'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: 'Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.'
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: 'Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.'
                    },
                    {
                        rank: 5,
                        level: 49,
                        description: 'Your automatic weapons now do double damage and have a greater chance to stagger opponents.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Sneak',
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Become whisper, become shadow. You are 20% harder to detect while sneaking.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: 'You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.'
                    },
                    {
                        rank: 3,
                        level: 12,
                        description: 'You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.'
                    },
                    {
                        rank: 4,
                        level: 23,
                        description: 'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.'
                    },
                    {
                        rank: 5,
                        level: 38,
                        description: 'Engaging stealth causes distant enemies to lose you.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Mister Sandman',
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'Your silenced weapons do an additional 30% sneak attack damage.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: 'Your silenced weapons now do 50% more sneak attack damage.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Action Boy',
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'There\'s no time to waste! Action Points regenerate 25% faster.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: 'Your Action Points now regenerate 50% faster.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: 'Your Action Points now regenerate 75% faster. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Moving Target',
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: 'You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.'
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: 'Sprinting costs 50% fewer Action Points.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Ninja',
                img: 'ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: 'Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage.'
                    },
                    {
                        rank: 3,
                        level: 33,
                        description: 'Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Quick Hands',
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'In combat, there\'s no time to hesitate. You can reload all guns faster.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: 'Reloading guns costs no Action Points in V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'Quick and efficient. You gain 10 additional Action Points. (Nuka-World DLC)'
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
                        description: 'Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: 'V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Gun Fu',
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.'
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: 'In V.A.T.S. you do 50% more damage to your third target and beyond.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.'
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
                name: 'Fortune Finder',
                img: 'fortune-finder.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You find more bottle caps in containers.'
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: 'You find even more bottle caps in containers.'
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: 'You find even more bottle caps in containers.'
                    },
                    {
                        rank: 4,
                        level: 40,
                        description: 'You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them.'
                    }
                ]
            },
            {
                rank: 2,
                name: 'Scrounger',
                img: 'scrounger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You find more ammunition in containers.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: 'You find even more ammunition in containers.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        description: 'You find even more ammunition in containers.'
                    },
                    {
                        rank: 4,
                        level: 37,
                        description: 'There is a chance to gain ammo when firing the last round in your clip.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Bloody Mess',
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: '+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!'
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: 'You now inflict +10% damage in combat.'
                    },
                    {
                        rank: 3,
                        level: 31,
                        description: 'You now inflict +15% damage in combat.'
                    },
                    {
                        rank: 4,
                        level: 47,
                        description: 'When an enemy explodes, nearby enemies may suffer the same fate.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Mysterious Stranger',
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...'
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled.'
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a high chance your Critical meter gets filled. (Nuka-World DLC)'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Idiot Savant',
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: 'You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.'
                    },
                    {
                        rank: 3,
                        level: 34,
                        description: 'Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.'
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
                        description: 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: 'Your criticals now do twice as much extra damage.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: 'Your criticals now do 2.5x as much extra damage.'
                    }
                ]
            },
            {
                rank: 7,
                name: 'Critical Banker',
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: 'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: 'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: 'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most. (Far Harbor DLC)'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Grim Reaper\'s Sprint',
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: 'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.'
                    },
                    {
                        rank: 3,
                        level: 46,
                        description: 'Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Four Leaf Clover',
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter.'
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: 'Each hit in V.A.T.S. now has an even better chance of filling your Critical meter.'
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: 'Each hit in V.A.T.S. now has a very good chance of filling your Critical meter.'
                    },
                    {
                        rank: 4,
                        level: 48,
                        description: 'Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter.'
                    }
                ]
            },
            {
                rank: 10,
                name: 'Ricochet',
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: 'What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.'
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: 'There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: 'When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.'
                    }
                ]
            }
        ]
    }
];
