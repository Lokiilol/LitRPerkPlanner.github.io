const perks = [
    {
        special: 'st',
        perks: [
            {
                rank: 1,
                name: 'Basher',
                img: 'basher.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 1,
                        description: 'Get up close and personal! Gun bashing sometimes knocks down enemies, and does 25% more damage to enemies below half health.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 2,
                        description: 'Gun Bashing now deals 50% extra damage to enemies below half health and possibly cripples your opponent.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 3,
                        description: 'Gun bashing now does 75% more damage to enemies below half health and has an increased chance to cripple your opponent.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 4,
                        description: 'Gun bashing does double damage to enemies below half health, and has an increased chance to cripple your opponent. It may also inflict a Critical Hit.'
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
                        description: 'Thanks to practice and conditioning your heavy weapons do 15% more damage plus an additional 1% per level, and degrade less frequently.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 3,
                        description: 'Your heavy weapons do 25% more damage, degrade less frequently, and each heavy gun you carry increases your carry weight by 10, up to +100 carry weight.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 4,
                        description: 'Your heavy weapons do 35% more damage, degrade less frequently, and you walk 20% faster with a heavy weapon drawn.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 5,
                        description: 'Your heavy weapons do 45% more damage plus an additional 20% if you are over-encumbered, and degrade less frequently.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        str: 6,
                        description: 'Your heavy weapons 55% more damage, and degrade less frequently.'
                    }
                ]
            },            
            {
                rank: 3,
                name: 'Big Leagues',
                img: 'big-leagues.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 3,
                        description: 'Swing for the fences! You do 15% more damage, plus an additional 0.5% damage per level with with unarmed and blunt melee weapons.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        str: 4,
                        description: 'You do 25% more damage with unarmed and blunt melee weapons, and you gain a chance of knocking down your target.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        str: 5,
                        description: 'You do 35% more damage with unarmed and blunt melee weapons, and your attacks will hit all targets in front of you.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        str: 6,
                        description: 'You do 45% more damage with unarmed and blunt melee weapons, and gain a chance to cripple your opponent, or grand slam their head clean off!'
                    },
                    {
                        rank: 5,
                        level: 70,
                        str: 7,
                        description: 'You do 55% more damage with unarmed and blunt melee weapons.'
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
                        description: 'You gain access to Rank 4 power armor mods.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Buffness',
                img: 'iron-fist.png',
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
                        level: 30,
                        str: 9,
                        description: 'You gain Health equal to eight times your Strength.'
                    },
                    {
                        rank: 5,
                        level: 40,
                        str: 10,
                        description: 'You gain Health equal to ten times your Strength.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Rooted',
                img: 'rooted.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 6,
                        description: 'You\'re part tree! While standing still, you gain +2 Strength.'
                    },
                    {
                        rank: 2,
                        level: 23,
                        str: 7,
                        description: 'While standing still, you gain +3 Strength.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        str: 8,
                        description: 'While standing still, you gain +4 Strength.'
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
                        str: 7,
                        description: 'To Victory! You deal an additional 5% damage with energy weapons, doubled while in Power Armor.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        str: 8,
                        description: 'You deal an Addtional 10% damage with Energy weapons, doubled while in power armor.'
                    },
                    {
                        rank: 3,
                        level: 28,
                        str: 9,
                        description: 'You deal an Addtional 15% damage with Energy weapons, doubled while in power armor.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Strength of Atom',
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 8,
                        description: 'Glory to Atom! Reduce incoming limb damage by 1% for each 1% radiation damage you\'ve taken.'
                    },
                    {
                        rank: 2,
                        level: 21,
                        str: 9,
                        description: 'Gain 1 armor for every 1% radiation damage you\'ve taken.'
                    },
                    {
                        rank: 3,
                        level: 42,
                        str: 10,
                        description: 'Reduce incoming fall damage by 1% for each 1% radiation damage you\'ve taken.Glory to Atom! Reduce incoming limb damage by 1% for each 1% radiation damage you\'ve taken.'
                    }
                ]
            },     
            {
                rank: 9,
                name: 'Toughness',
                img: 'toughness.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 9,
                        description: 'If nothing else, you can take a beating! You take 5% reduced incoming damage, doubled while in Power Armor.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        str: 10,
                        description: 'You take 10% reduced damage, doubled while in Power Armor.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        str: 11,
                        description: 'You take 15% reduced damage, doubled while in Power Armor.'
                    }
                    
                ]
            },
            {
                rank: 10,
                name: 'Pain Train',
                img: 'pain-train.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        str: 10,
                        description: 'Choo choo! All aboard! While wearing Power Armor, sprinting into enemies hurts and staggers them.'
                    },
                    {
                        rank: 2,
                        level: 24,
                        str: 11,
                        description: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        str: 12,
                        description: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger.'
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
                        description: 'Keep your distance long and your kill-count high! Your manual-action rifles and shotguns do 15% plus 0.5% damage per level, and degrade less frequently.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        per: 3,
                        description: 'Your manual-action rifles and shotguns do 25% more damage, have 25% more range, and degrade less frequently.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        per: 4,
                        description: 'Your manual-action rifles and shotguns do 35% more damage, have 50% more range, and degrade less frequently.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        per: 5,
                        description: 'Your manual-action rifles and shotguns do 45% more damage, ignore 10% of enemy armor, and degrade less frequently.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        per: 6,
                        description: 'Your manual-action rifles and shotguns do 55% more damage, and degrade less frequently.'
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
                name: 'Eye for a Bargain',
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        per: 6,
                        description: 'Nobody spots a sale like you. Gain 2% better buying prices per Perception.'
                    },
                    {
                        rank: 2,
                        level: 20,
                        per: 7,
                        description: 'Gain 4% better buying prices per Perception.'
                    },
                    {
                        rank: 3,
                        level: 41,
                        per: 8,
                        description: 'Gain 6% better buying prices per Perception.'
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
                        end: 3,
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
                       description: 'What are you, part pack mule? When overencumbered and your weapon is holstered, running drains your less action points much more slowly.'
                   },
                   {
                       rank: 2,
                       level: 10,
                       end: 6,
                       description: 'Gain +5 to carry load per Endurance.'
                   },
                   {
                       rank: 3,
                       level: 20,
                       end: 7,
                       description: 'When overencumbered, running doesn\'t cost action points if your weapon is holstered'
                   },
                   {
                       rank: 4,
                       level: 30,
                       end: 8,
                       description: 'Gain +10 carry load per Endurance.'
                   },
                   {
                       rank: 5,
                       level: 40,
                       end: 9,
                       description: 'When overencumbered, you can fast travel, in survival you no longer take periodic fatigue.'
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
                name: 'Deathclaw Hunter',
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 7,
                       description: 'Crikey! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.'
                   },
                   {
                       rank: 2,
                       level: 21,
                       end: 8,
                       description: 'When you successfully pacify a Wasteland creature, you can incite it to attack.'
                   },
                   {
                       rank: 3,
                       level: 49,
                       end: 9,
                       description: 'When you successfully pacify a Wasteland creature, you can give it specific commands.'
                   } 
                ]
            },
            {
                rank: 8,
                name: 'Solar Powered',
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 8,
                       description: 'Catch some rays! While outdoors between the hours of 8am and 6pm, your Power Armor drains fusion cores 25% more slowly.'
                   },
                   {
                       rank: 2,
                       level: 27,
                       end: 9,
                       description: 'While outdoors between the hours of 9am and 5pm, your Power Armor drains fusion cores 50% more slowly.'
                   },
                   {
                       rank: 3,
                       level: 50,
                       end: 10,
                       description: 'While outdoors between the hours of 10am and 4pm, your Power Armor drains fusion cores 75% more slowly.'
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
                       end: 9,
                       description: 'Sure, you\'re still human - on the outside! Gain +2 Endurance and +50 Rad Resist, but -1 Charisma while your radiation level is above 25%.'
                   },
                   {
                       rank: 2,
                       level: 24,
                       end: 10,
                       description: 'Gain a total of +4 Endurance and +100 Rad Resist, but -2 Charisma while your radiation level is above 50%.'
                   },
                   {
                       rank: 3,
                       level: 48,
                       end: 11,
                       description: 'Gain a total of +6 Endurance and +150 Rad Resist, but -3 Charisma while your radiation level is above 75%.'
                   },
                   {
                       rank: 4,
                       level: 50,
                       end: 12,
                       description: 'Taking radiation damage now also regenerates health.'
                   }
                ]
            },
            {
                rank: 10,
                name: 'Ricohet',
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                   {
                       rank: 1,
                       level: 0,
                       end: 10,
                       description: 'What goes around comes around! Bullets have a 10% chance to ricochet off you harmlessly.'
                   },
                   {
                       rank: 2,
                       level: 25,
                       end: 11,
                       description: 'When a bullet ricochets it now damages the enemy!'
                   },
                   {
                       rank: 3,
                       level: 37,
                       end: 12,
                       description: 'Enemy bullets now have a 20% chance to Ricochet!'
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
                        description: 'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        cha: 3,
                        description: 'The effects of alcohol are doubled.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        cha: 4,
                        description: 'Your Luck is increased by 3 while you\'re under the influence of alcohol.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Night Person',
                img: 'night-person.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 3,
                        description: 'You are a creature of the night! Gain +1 to Charisma and Agility between the hours of 6:00 p.m. and 6:00 a.m.'
                    },
                    {
                        rank: 2,
                        level: 25,
                        cha: 4,
                        description: 'Gain +2 to Charisma and Agility between the hours of 8:00 p.m. and 4:00 a.m.'
                    },
                    {
                        rank: 3,
                        level: 37,
                        cha: 5,
                        description: 'Gain +3 to Charisma and Agility between the hours of 10:00 p.m. and 2:00 a.m.'
                    }
                ]
            },
            {
                rank: 4,
                name: 'Dressed for the Apocalypse',
                img: 'rad-resistant.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 4,
                        description: 'Dress to impress! Gain 10 Rad Resistance, plus an additional 2 Rad Resistance per Charisma while not wearing Leg Armor.'
                    },
                    {
                        rank: 2,
                        level: 8,
                        cha: 5,
                        description: 'Gain 10 Damage Resistance, plus an additional 2 Damage Resistance per Charisma while not wearing Torso Armor.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        cha: 6,
                        description: 'Gain 10 Energy Resistance, plus an additional 2 Energy Resistance per Charisma while not wearing Arm Armor.'
                    },
                    {
                        rank: 4,
                        level: 36,
                        cha: 7,
                        description: 'The previous ranks improve to 3 per Charisma.'
                    },
                    {
                        rank: 5,
                        level: 48,
                        cha: 8,
                        description: 'The previous ranks improve to 4 per charisma.'
                    }
                ]
            },
            {
                rank: 5,
                name: 'Lady Killer',
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 5,
                        description: 'You\'re charming... and dangerous. Women suffer +1% damage per point of Charisma, and are easier to persuade in dialogue.'
                    },
                    {
                        rank: 2,
                        level: 7,
                        cha: 6,
                        description: 'Gain 10% armor penetration against women. Women are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.'
                    },
                    {
                        rank: 3,
                        level: 16,
                        cha: 7,
                        description: 'Even other men find you irresistible! Gain half the effects of this perk against men.'
                    }
                ]
            },
            {
                rank: 6,
                name: 'Black Widow',
                img: 'black-widow.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 6,
                        description: 'Come into my parlor... Men suffer +1% increased damage per point of Charisma, and are easier to persuade in dialogue.'
                    },
                    {
                        rank: 2,
                        level: 11,
                        cha: 7,
                        description: 'You gain 10% damage penetration against men. They are also easier to pacify with the Intimidation perk.'
                    },
                    {
                        rank: 3,
                        level: 21,
                        cha: 8,
                        description: 'Even other women find you irresistible! Gain half the effects of this perk against women.'
                    }
               ]
            },
            {
                rank: 7,
                name: 'Animal Friend',
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 7,
                        description: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        cha: 8,
                        description: 'Wild animals will no longer attack you unprovoked.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        cha: 9,
                        description: 'Animals will now come to your aid, but not against other animals.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Inspirational',
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 8,
                        description: 'Because you lead by example, your companions and settlers take 3% less damage per point of your Charisma, and cannot hurt you.'
                    },
                    {
                        rank: 2,
                        level: 19,
                        cha: 9,
                        description: 'Your companion deals 3% more damage per point of your Charisma, and can\'t be harmed by your attacks.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        cha: 10,
                        description: 'While traveling with a companion, you gain an additional 75 carry weight.'
                    }
                ]
            },
            {
                rank: 9,
                name: 'Refractor',
                img: 'refractor.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        cha: 9,
                        description: 'You must be part mirror! You now have +15 Energy Resistance, and lasers have a 10% chance to ricochet off you instead of damaging you, charging your Critical meter!'
                    },
                    {
                        rank: 2,
                        level: 26,
                        cha: 10,
                        description: 'You now have +30 Energy Resistance, and take 50% less limb damage from lasers.'
                    },
                    {
                        rank: 3,
                        level: 52,
                        cha: 13,
                        description: 'You now have +45 Energy Resistance, and lasers charge your Critical meter twice as fast.'
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
                        description: 'Far Out! Any chems you take last 25% longer.'
                    },
                    {
                        rank: 2,
                        level: 16,
                        int: 5,
                        description: 'Any chems you take last 50% longer.'
                    },
                    {
                        rank: 3,
                        level: 36,
                        int: 6,
                        description: 'Any chems you take last 75% longer.'
                    },
                    {
                        rank: 4,
                        level: 54,
                        int: 7,
                        description: 'Any chems you take now last twice as long.'
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
                name: 'Calculated Critical',
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        int: 7,
                        description: 'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it the most.'
                    },
                    {
                        rank: 2,
                        level: 17,
                        int: 8,
                        description: 'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.'
                    },
                    {
                        rank: 3,
                        level: 43,
                        int: 9,
                        description: 'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.'
                    },
                    {
                        rank: 5,
                        level: 50,
                        int: 10,
                        description: 'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most.'
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
                        description: 'You\'ve learned to split the atom... You can recover and recharge your depleted fusion cores with fresh nuclear material to 50% of their normal capacity. Radiation weapons do 50% more damage.'
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
                        description: 'You can recharge depleted fusion cores to double their original capacity.'
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
                        description: 'Channel the spirit of the Old West! Your pistols do 15% plus an additional 1% per level more damage, and degrade less frequently.'
                    },
                    {
                        rank: 2,
                        level: 12,
                        agi: 3,
                        description: 'Your pistols do 25% more damage, pistols deal 20% more damage to limbs, and degrade less frequently.'
                    },
                    {
                        rank: 3,
                        level: 30,
                        agi: 4,
                        description: 'Your pistols do 35% more damage, degrade less frequently, attacks on arms have a chance to disarm your target.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        agi: 5,
                        description: 'Your pistols 45% more damage, degrade less frequently, and attacks with on legs have a chance to knock your target down.'
                    },
                    {
                        rank: 5,
                        level: 70,
                        agi: 6,
                        description: 'Your pistols do 55% more damage, and degrade less frequently.'
                    }
                ]
            },
            {
                rank: 3,
                name: 'Backstab',
                img: 'mister-sandman.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 3,
                        description: 'As an agent of death itself, you do 15% more damage plus an additional 1% per level with bladed weapons.'
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
                        description: 'You do 55% more damage bladed weapons.'
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
                name: 'Moving Target',
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 6,
                        description: 'They can\'t hurt what they can\'t hit! While sprinting, you dodge a percent of damage equal to your agility.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        agi: 7,
                        description: 'While sprinting, you dodge a percent of damage equal to your twice your agility.'
                    },
                    {
                        rank: 3,
                        level: 52,
                        agi: 8,
                        description: 'While sprinting, you dodge a percent of damage equal to your three times your agility.'
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
                        description: 'There\'s no time to waste! Your Action Points regenerate 25% faster.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        agi: 8,
                        description: 'Your Action Points now regenerate 50% faster.'
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: 'Your Action Points now regenerate 75% faster.'
                    }
                ]
            },
            {
                rank: 8,
                name: 'Blitz',
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 8,
                        description: 'RUN! While sprinting, you move even faster.'
                    },
                    {
                        rank: 2,
                        level: 28,
                        agi: 9,
                        description: 'Sprinting drains your AP half as fast.'
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
                name: 'Ninja',
                img: 'Ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        agi: 10,
                        description: 'Trained as a shadow warrior, your V.A.T.S. melee distance is increased by 25% while sneaking.'
                    },
                    {
                        rank: 2,
                        level: 30,
                        agi: 11,
                        description: 'Your V.A.T.S. melee distance is increased by 50% while sneaking.'
                    },
                    {
                        rank: 3,
                        level: 50,
                        agi: 12,
                        description: 'Your V.A.T.S. melee distance is increased by 75% while sneaking.'
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
                        description: 'Rigorous combat training or just dumb luck? Either way, your semi- and full-auto rifles and shotguns do 15% more damage, plus an additional 0.5% damage per level, and degrade less frequently.'
                    },
                    {
                        rank: 2,
                        level: 18,
                        lck: 3,
                        description: 'Your semi- and full-auto rifles and shotguns do 25% more damage, degrade more slowly, and have a 7% chance to gain a free magazine when you fire the last bullet in your magazine.'
                    },
                    {
                        rank: 3,
                        level: 24,
                        lck: 4,
                        description: 'Your semi- and full-auto rifles and shotguns do 35% more damage and degrade less frequently.'
                    },
                    {
                        rank: 4,
                        level: 50,
                        lck: 5,
                        description: 'Your semi- and full-auto rifles and shotguns do 45% more damage, degrade less frequently, and have a 14% chance to gain a free magazine when you fire the last bullet in your magazine.'
                    },
                    {
                        rank: 5,
                        level: 74,
                        lck: 6,
                        description: 'Your automatic weapons now do double damage, and have a greater chance to stagger opponents.'
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
                        description: 'Powerful weapons grant more scrap, and you can salvage rare components when scrapping weapons and armor.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        lck: 5,
                        description: 'Advanced weapons grant more scrap, and you get more from salvaging. Items with favorited components are highlighted while your weapon is wielded.'
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
                        description: 'Advanced training for enhanced combat effectiveness! Gain a 5% Critical Hit chance outside of V.A.T.S.'
                    },
                    {
                        rank: 2,
                        level: 15,
                        lck: 7,
                        description: 'Add half your Luck to your Critical Hit chance outside V.A.T.S.'
                    },
                    {
                        rank: 3,
                        level: 40,
                        lck: 8,
                        description: 'Add your Luck to your Critical Hit chance outside V.A.T.S.'
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
