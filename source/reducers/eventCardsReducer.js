import { Alert } from 'react-native';
import { GET_ACT_III_ITEMS, GET_ACT_II_ITEMS, GET_ACT_I_ITEMS, GET_CURRENT_EVENTCARD, IS_SELECTED_ALL, SET_CARD, SET_SELECTED_EVENT_CARDS } from '../constants';
const initialState = {
    // eventsCards Props
    eventsCards: [
        {
            type: 'Act I',
            title: 'VICE',
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "While in the break room of Acumen, a different party is heard from across the room, sighing, “Yeah, it really takes the edge off.”",
            objective: "-Each party member has 15 seconds to select if their character has a vice, and if so, what that vice is.",
            reward: ['Players with a vice gain +2 Special Attacks. At the beginning of Act III, players who had a vice lose 15 HP.'],
            detail: "vice detail description"
        }, {
            type: 'Act I',
            title: 'GOOD COP, BAD COP',
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            eventEffect: 'Active effect for this timeline',
            narration: "While finishing up a mission, the players are approached and asked if they will take a time bridbe, a donation of over $50 dollars in the year 1748",
            objective: "The party votes to accept or deny the time bribe as a group. with up to one minute for discussion.",
            reward: ['Accept –Party draws +4 Special attacks each. Then, (Event Effect) - Party is unable to draw cards or add keywords.', 'Deny-Party loses 15HP each, then may change Innate Trait to "Honarabel - The 1st time your HP would drop to 0 or below. change your HP to 20"'],
            detail: "GOOD COP, BAD COP detail description"
        }, {
            type: 'Act I',
            title: "PRISONER'S DILEMMA",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "The lights in the room power down and the doors latch shut. Almost no one knows of the physical location of Acumen, much have less reason to visit. A knock at the door means there could be a rat in this very room.",
            objective: "Without talking, the party points to the suspected 'rat' party member on the count of three. The member most pointed to is the rat.\n(Ties mean multiple rats.)",
            detail: "PRISONER'S DILEMMA detail description",
            reward: ['Rats gain keyword "Scheming" as a keyword.', 'Non rats gain +1 Special Attack each']
        }, {
            type: 'Act I',
            title: "CLASSIC GIANT BOULDER",
            eventType: { type: 'Quick Time Event', content: 'Party must take immediate action to prevent danger while the Time Manger describes the outcome of the Skill Check. \nEasy - 3 or better \nMed - 5 or better \nHard - 7 or better' },
            narration: "A steady rumble is heard behind the party. which finds itself inside a tight chasm. Through the dark, they are able to identify what appears to be a massive boulder barreling towards them at increasing speed!",
            objective: "Party members may either first make a hard check to prevent furthe boulder, or a medium check to aboid the boulder themselves.",
            detail: "CLASSIC GIANT BOULDER detail description",
            reward: ['Any party member that succeeded on a hard check gains +2 Special Attacks. Any party member who succeeded a medium check gains +1 Apecial Attack. Others lose -15HP']
        }, {
            type: 'Act I',
            title: "WORK HARD, PLAY HARD",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            detail: "WORK HARD, PLAY HARD detail description",
            narration: "While between missions, the party finds itself inside the Acumen Breakroom, where another party approaches yours and asks about your past.",
            objective: "Party has up to 90 seconds per member to recant a time their keyword defined themselbes while at their occupation.",
            reward: ['Party receives +1 Special Attack each']
        }, {
            type: 'Act I',
            title: "CALCULATION ERROR",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            detail: "CALCULATION ERROR detail description",
            narration: "The party arrives directly as another party of Acumen successfully completes their mission. Clearly they should have lost, and look rough, but managed to scrape on through. They nod an approving nod, offering you the scraps of their spoils.",
            objective: "This room has already had it's objective completed. The timeline should be rebooted by the next event.",
            reward: ['Party receives +1 Special Attack each']
        }, {
            type: 'Act I',
            title: "FAMILY AND FRIENDS",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "Dispite Management's best efforts, they are required to saddle employees with two weeks paid leave. Party members should visit anyone they wish before their potential end.",
            objective: "Party members are given 90 seconds each to describe a friend of family member who supported the party member on their journy to become the best at their occupation.",
            detail: "FAMILY AND FRIENDS detail description",
            reward: ['Party each receives +1 Keyword that could be used to descrive their friend or family member.']
        }, {
            type: 'Act I',
            title: "FADING MEMORY",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "Across the Break Room sits someone who you'be known all your life, yet all the time warps have scrambled you a bit. Were they your friend, or a rival of yours?",
            detail: "FADING MEMORY detail description",
            objective: "Party members pair up, with any unpaired becoming an 'Oddball'. Pairs have 15 seconds each to decide if they are rivals or friends.",
            eventEffect: 'Active effect for this timeline',
            reward: ['(Event Effect): As long as your pair remains alive, rivals gain +1⚀ on all attacks, and Friends gain +2⚀ on all attacks with the Heal Trait. Oddballs alwqays gain +2 to combat rolls']
        }, {
            type: 'Act I',
            title: "CHICKEN",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "The party arrives just after another party appears to have just left.  A box rattles on the table nearby, shaking a note that was jus ton the box that read. 'DO NOT Tou'",
            objective: "Party rolls a die in secret, then each member has 15 seconds to decide if they would like to touch the box, or not touch the box.",
            detail: "CHICKEN detail description",
            reward: ['Pary members who touch the box reveal their die, add all presented die +10, and lise that muxh HP. They then draw +3 Special Attacks each. Others lose or gain nothing.']
        }, {
            type: 'Act I',
            title: "MENTOR",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "Management annouces they are seeking training staff and need references.",
            objective: "Party has up to 90 seconds per member describe their mentor who trained them in their occupation.",
            detail: "MENTOR detail description",
            reward: ['Party receives +1 Keyword that could be used to describe their mentor.']
        }, {
            type: 'Act I',
            title: "INSPIRATIONAL",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "Management approved purchase of an inspirational poster for the Break Room, but wants the Parties input on what the poster should be.",
            objective: "Party members have 90 seconds each to describe what inspired them to choose their current occupation.",
            detail: "INSPIRATIONAL detail description",
            reward: ['Party each receives +1 Keyword that could be attributed to their inspirational source.']
        }, {
            type: 'Act I',
            title: "TURN UP",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "The party finds itself in the Acumen Break Room, where Management has made the terrible choice to change all lockers to have a musical lock.",
            objective: "Party members have 15 seconds each to hum, whistle, or sing a theme song, with a bonus objective to create a jingle.",
            detail: "TURN UP detail description",
            reward: ['Party receives +1 Special Attack each, with an additional +1 Special Attack for completing the bonus objective.']
        }, {
            type: 'Act I',
            title: "FAIL FORWARD",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "Across the table sits a slumped, defeated party, and as they lick their wounds, management suggests talking about a time you failed, to help boost morale.",
            objective: "Party members have 90 seconds each to describe a time, while at their previous occupation, they failed.",
            detail: "FAIL FORWARD detail description",
            reward: ['Party receives +1 Special Attack each.']
        }, {
            type: 'Act I',
            title: "WINNERS!",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "Confetti drops as the party arrives in the breakroom. Congratulations are in order, they’ve just completed the last objective that ever needs to be done!",
            objective: "The party votes on whether they’d like to win the game right now, ",
            detail: "WINNERS! detail description",
            reward: ['If the party votes to win, they win! Congratulate them and start a new round. Otherwise, party gains +1 Special Attack each.']
        }, {
            type: 'Act I',
            title: "OVERCLOCK",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "The party enters the Break Room where another party suddenly falls silent. After a pause, they speak up. “If you’re not a narc, we got some unlicensed tech you could try…”",
            objective: "Party has up to 15 each to decide if they want to keep standard issued equipment, or utilize unlicensed technology.",
            detail: "OBERCLOCK detail description",
            reward: ['Party Members who keep standard equipment gain +1 Special Attack. Members who acquire Unlicensed Technology discard their Basic Attack and draw an additional Innate Trait.']
        }, {
            type: 'Act I',
            title: "RETREMENT",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "The party catches a glimpse of their future by a miscalculated time warp, peering into what life will be like once they are done working for Acumen and retire.",
            objective: "Party has up to 90 seconds per member describe what they saw as their retirement plan.",
            detail: "RETREMENT detail description",
            reward: ['Party members with a plan for their golden years gain +1 Special Attack each.']
        }, {
            type: 'Act I',
            title: "SPLIT PARTY",
            eventType: { type: 'Story Event', content: 'Party members take turns developing a history for their party member. Start with the most eager party member, otherwise the Time Manager determines who is next via die roll.' },
            narration: "Party members were separated in time transit before reappearing in the break room. Management needs more data on this anomoly.",
            objective: "Party members have 90 seconds each to describe where in time they were incorrectly sent.",
            detail: "SPLIT detail description",
            reward: ['Party receives +1 Special Attack each.']
        }, {
            type: 'Act II',
            title: 'SENTIENT OBJECTS',
            eventType: {
                type: "Combat Event", content: 'Party users combat cards to complete objective by reducing all enemies to 0 HP.See combat reference(pg.4) for additional information on running Combat Events.'
            },
            detail: "SENTIENT OBJECTS detail description",
            narration: "Management was working on a new batch of equipment when several components malfunctioned, accidently granting sentience to several objects around the room!",
            objective: "Each Member must choose an object in sight. It springs to life and attacks. Defeat all to proceed. Sentent Item - 1x per Member. 25 HP, +3 Special Attacks.",
            reward: ["Party receives + 2 Special Attacks each."]
        },
        {
            type: 'Act II',
            title: "JUMP ON THE BOSS",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "The Party received two pieces of intel, they could either catch everyone unawares via a secret entrance, or use a time oasis to gather some resources instead.",
            detail: "JUMP ON THE BOSS detail description",
            objective: "Party has one minute to decide whether to use a secret entrance, or visit a time oasis instead.",
            eventEffect: 'Active effect for this timeline.',
            reward: ['Secret Entrance - At the beginning of Act III, the Party goes first. If QTE, the first check gains +2 bonus.', 'Time Oasis - At the beginning of Act III, gain +10 HP and +1 Special attack if combat, if QTE Party gains +1 Occupation each.']
        },
        {
            type: 'Act II',
            title: "PACIFISM",
            eventType: { type: 'Treasure Event', content: 'Party members either select an option for themselves, or vote as a group for a reward option for themselves, or vote asa a group for a reqard option. Ties are determined by Time Manager die roll.' },
            narration: "Surrounded by monks, the party feels a calming serene aura, compelling them to lay down their arms.",
            detail: "PACIFISM detail description",
            objective: "Party must discard 2 Special Attacks each at random. Then each may discard any additional cards they’d like. ",
            reward: ['For every card the Party discards, each Member gains +1 HP.']
        },
        {
            type: 'Act II',
            detail: "A VERY SNOBBY BANQUET detail description",
            title: 'A VERY SNOBBY BANQUET',
            eventType: {
                type: "Quick Time Event",
                content: 'Party must take immediate action to prevent danger while the Time Manager describes the outcome of the Skill Check.\n Easy - 3 or better \nMed. - 5 or better\nHard - 7 or better Party can earn + 2 bonus from flavor'
            },
            narration: "Members are sprung amid a lavish banquet. It appears the original guests couldn't make an appearance. Luckily no one seems to realize the switch.",
            objective: "The Party must make Medium Checks to succeed up to four pompous events, such as using the right silverware, or small talk. The banquet ends on the second failed skill check.",
            reward: ["Each Member receives + 1 Special Attack for each successful Skill Check.The Members who rolled failed the skill check lose 20 HP."]
        }, {
            type: 'Act II',
            detail: "SLOW MOVING THIS LASER",
            title: 'SLOW MOVING THIS LASER',
            eventType: {
                type: "Quick Time Event",
                content: 'Party must take immediate action to prevent danger while the Time Manager describes the outcome of the Skill Check.\n Easy - 3 or better \nMed. - 5 or better\nHard - 7 or better Party can earn + 2 bonus from flavor'
            },
            narration: "A villian’s silhouette bounces as they chuckle, exiting the room. The Party has been strapped to a table, and a slow moving death laser is earning it’s namesake as it inches closer.",
            objective: "Party must succeed either 3 Medium Checks or 1 Hard check to disable the laser or escape before failing three of either type of check. If two (or three when playing with five in the party) Members escape, all members sucessfully escape.",
            reward: ["Any Members who failed a check once has their HP reduced in half. Any player that failed three times has their HP reduced to 1. Any player that failed 4 times is then dealt 1 damage. Party gains +2 Special Attacks."]
        }, {
            type: 'Act II',
            detail: "2A AND 2BEARS detail description",
            title: '2A AND 2BEARS',
            eventType: {
                type: "Combat Event", content: 'Party users combat cards to complete objective by reducing all enemies to 0 HP.See combat reference(pg.4) for additional information on running Combat Events.'
            },
            narration: "The Party finds itself upon the artic tundra, the wind’s whisper nearly the only sound, aside from a charging polar bear. While terrifying in it’s own right, it gets worse; this bear’s got guns.",
            objective: "Survive 3 rounds. Bonus: attempt to fell the bear.\nPolar Bear: (HP per party size 3(75) 4(175) 5(250)\nInnate: Thick Skinned (Shielding Self 6)\n+4 Special Attacks, +2 Basic Attacks",
            reward: ["A Party that survived gains +1 Special Attack. If somehow a party was able to slay the bear, they also gain +60 HP that they must collectively distribute, else the TM distributes. "]
        },
        {
            type: 'Act II',
            detail: "GIRL CLUB CUPCAKES detail description",
            title: 'GIRL CLUB CUPCAKES',
            eventType: {
                type: "Combat Event", content: 'Party users combat cards to complete objective by reducing all enemies to 0 HP.See combat reference(pg.4) for additional information on running Combat Events.'
            },
            narration: "The party finds itself in front of a local supermarket, where a downtrodden set of girl club kids look upwards, pleading them to buy some cupcakes.",
            objective: " Defeat the club (See below for optional route) \n Girl Club - 1x per party member, 40 HP\nInnate: Energized - Attacks gain +2d\nBasic Attack - 1d+2, Confuse Target",
            reward: ["Prior to attacking, the Party may discard all but one Special Attack each to buy cupcakes and complete the objective. Buying cupcakes or defeating the Club grants +20 HP to each member."]
        },
        {
            type: 'Act II',
            detail: "BOMB DEFUSAL detail description",
            title: 'BOMB DEFUSAL',
            eventType: {
                type: "Quick Time Event",
                content: 'Party must take immediate action to prevent danger while the Time Manager describes the outcome of the Skill Check.\n Easy - 3 or better \nMed. - 5 or better\nHard - 7 or better Party can earn + 2 bonus from flavor'
            },
            eventEffect: 'Party can earn +2 bonus from flavor.',
            narration: "The Party sits before a ticking timebomb, complete with wires, data ports, spinny-majigs, calibrated with a quartz crystal and an old hand crank.",
            objective: "Starting with the most eager, the Party members must make a medium Skill Check to defuse the bomb. The first failure changes the Skill Check requirement to Hard, a second fails the objective.",
            reward: ["Success: Each Member may set their HP to 60.", "Failure: Each Member loses -10 HP, reducing to 1 HP rather than 0 or less."]
        },
        {
            type: 'Act II',
            title: 'ARCH NEMISIS',
            eventType: {
                type: "Quick Time Event", content: "Party must take immediate action to prevent danger while the Time Manager describes the outcome of the Skill Check. \nEasy - 3 or better\nMed. - 5 or better\nHard - 7 or better Party can earn + 2 bonus from flavor."
            },
            narration: "Players are challenged by their occupational equal in a best of three challenge for the title of the worlds greatest.",
            detail: "ARCH MEMISIS detail description",
            objective: "Each member must succeed 2 Medium checks before failing 2 as a head to head competition by an arch nemisis.",
            reward: ['(Event Effect): Success – (Event Bonus) Member gains +1 to any future skill check. Failure – (Event Bonus) Member gains - 1 to any future skill checks.']
        },

        {
            type: 'Act II',
            title: 'JONSIN',
            eventType: {
                type: "Quick Time Event", content: "Party must take immediate action to prevent danger while the Time Manager describes the outcome of the Skill Check.\nEasy - 3 or better\nMed. - 5 or better\nHard - 7 or better Party can earn + 2 bonus from flavor"
            },
            detail: "JONSIN detail description",
            narration: "In the midst of the 1970's conspiracy peak, the FBI had a shortage of agents and needed some fill-ins. We're going to need something people will believe!",
            objective: "Party has 15 seconds to create a conspiracy, then must succeed either 3 Medium Checks, or 1 Hard Check to spread their conspiracy before failing two of either type of check.",
            reward: ['(Event Effect): Success - (Event Bonus) Members may discard their Innate Trait. If they do, replace it with "Tinfoil - Negate any Condition applied"Failure - (Event Bonus) Roll two condition dice instead of one.The TM decides which die to use']
        },

        {
            type: 'Act II',
            title: "HYPE UP EVENT",
            eventType: { type: "Treasure Event", content: "Party members either select an option for themselves, or vote as a group for a reward option.Ties are determined by Time Manager die roll." },
            narration: "Acumen needs promotional footage for recruitment videos. The Party can either provide a simple interview from the breakroom, or rec``ord some daring combat.",
            objective: "Party votes for either flashy footage, or a tame interview. If flashy, Party loses -15 HP each, and TM cycles Act II event cards until they find a combat, then run the event. Give players the reward from this card only upon completion.",
            detail: "HYPE UP EVENT detail description",
            reward: ['(Event Effect): If the Party provided flashy footage, they gain +30 HP each and +2 Special Attack Cards each. Tame interviews gain no rewards, but complete the objective.']
        },

        {
            type: 'Act II',
            title: "OH, RATS!",
            detail: "OH, RATS! detail description",
            eventType: { type: "Combat Event", content: "Party uses combat cards to complete objective by reducing all enemies to 0 HP.See combat reference(pg.4) for additional information on running Combat Events." },
            narration: "The Party finds itself in the basement of an old bistro, dark lights and dank smells abound. The chittering of teeth from a nearby overturned barrel confirms their target; rats!",
            objective: "Defeat All Rats 2x Rats per party member - 20 HP each. Rats may only use '1⚀+2, Rend, Melee' as their attack.",
            reward: ['(Event Effect): Each Member may change their Innate Trait to "Honed - Add 1⚀ for each round of combat to each attack."']
        },

        {
            type: 'Act III',
            title: "OFF BRAND BOSS BATTLE",
            detail: "OFF BRAND BOSS BATTLE detail description",
            eventType: { type: "Combat Event", content: "Party uses combat cards to complete objective by reducing all enemies to 0 HP.See combat reference(pg.4) for additional information on running Combat Events." },
            narration: "The Party finds itself in the basement of an old bistro, dark lights and dank smells abound. The chittering of teeth from a nearby overturned barrel confirms their target; rats!",
            objective: "Defeat the Knock Off Boss",
            reward: ["(HP Based on Party Size 3(100) 4(225) 5(350) Innate: Indominable - Cannot have conditions applied and all attacks gain + 2d + 2 Special Attacks Each Round"]
        },

        {
            type: 'Act III',
            title: "THE INDESCRIBABLE HORROR",
            detail: "tHE INDESCRIBABLE HORROR detail description",
            eventType: { type: "Story Event", content: "Party members take turns developing a history for their party member.Start with the most eager party member, Time Manager assigns via die roll." },
            narration: "The party finds itself in front of a hideous abomination. An attempt to describe it is as futile as training a cat to bark. The closest things I can say are that it's ________, _________, and excessively __________!",
            objective: "Defeat the indescribable horror",
            reward: ["Innate Trait – Indescribable – For up to two keywords per round, attacks flavored with those keywords gain + 2d, for a max of + 4d. Basic attack – 1d + 2, Restrain, Targeting 2 "]
        },
        {
            type: 'Act III',
            title: "TEMPLATE",
            detail: "TEMPLATE detail description",
            eventType: { type: "Story Event", content: "Party members take turns developing a history for their party member.Start with the most eager party member, Time Manager assigns via die roll." },
            narration: "While between missions, the party finds itself inside the Acumen Breakroom, where another party approaches yours and asks about your past.",
            objective: "Party has up to 90 seconds per member to recant a time their keyword defined themselves while at their occupation. ",
            reward: ["Party receives +1 Special Attack each."]
        },
        {
            type: 'Act III',
            title: "WAVE BATTLE",
            detail: "WAVE BATTLE detail description",
            eventType: { type: "Story Event", content: "Party members take turns developing a history for their party member.Start with the most eager party member, Time Manager assigns via die roll." },
            narration: "The party stands in a desolate field where the Acumen Break Room should be. Something went wrong with a previous mission, and a horde of ______ are rapidly approaching!",
            objective: "Party has up to 90 seconds per member to recant a time their keyword defined themselves while at their occupation.",
            reward: ["Party receives + 1 Special Attack each."]
        }
    ],
    selectedEventCards: [],
    selectedAIEI: undefined,
    selectedAIEII: undefined,
    selectedAIEIII: undefined,
    selectedAIIEI: undefined,
    selectedAIIEII: undefined,
    selectedAIIIFINAL: undefined,
    isSelectedAll: false,
    allI: [],
    allII: [],
    allIII: [],
    randomActIs: [],
    randomActIIs: [],
    randomActIIIs: [],

    // attacks
    attacks: {
        innateTrates: [{
            name: 'Powerful',
            description: 'Powerful - Attacks Gain Exploding 6',
            traits: [{
                name: 'Exploding',
                description: 'If a die roll matches the exploding value, add an additional die to the attack, which can also explode.'
            }]
        }, {
            name: 'Dense',
            description: 'Dense - Gain Shielding 3, Enemies Hit with Opportune Trait are Restrained',
            traits: [{
                name: 'Battle Stance',
                description: 'Subtract 1d off of all incoming damage'
            }, {
                name: 'Opportune',
                description: 'If you were not the sole target of an attack last round, activate the Opportune effect listed in the attack'
            }]
        }, {
            name: 'Cautious',
            description: 'Cautious - Grants all attacks Exploding 1, Abilities with Heal trait can be used as an attack for half value (rounded up)',
            traits: [{
                name: 'Exploding',
                description: 'If a die roll matches the exploding value, add an additional die to the attack, which can also explode.'
            }, {
                name: 'Heal',
                description: 'Increases allies HP rather than decreases enemies HP.'
            }]
        }, {
            name: 'Balanced',
            description: 'Balanced - Automatically start each Event with 40 HP',
            traits: [{
                name: '',
                description: ''
            }]
        }, {
            name: 'Lucky',
            description: 'Add a +1 Bonus to any Skill Check made during QTE Events.',
            traits: [{
                name: '',
                description: ''
            }]
        }],
        basicAttacks: [
            {
                name: 'Shield Wall',
                description: '1⚀+1, Opportune to Conceal Allies, Melee',
                traits: [{
                    name: 'Opportune',
                    description: 'If you were not the sole target of an attack last round, activate the Opportune effect listed in the attack'
                }, {
                    name: 'Conceal',
                    description: 'Condition - Reduces damage taken by half. (Rounded Down)'
                }, {
                    name: 'Melee',
                    description: 'User must be adjacent to target.'
                }]
            }, {
                name: 'Multi-Shot',
                description: '2⚀+1, Targeting 2',
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }]
            }, {
                name: 'Personal Strike',
                description: '2⚀, Power Drain 1⚀+4, Melee',
                traits: [{
                    name: 'Power Drain X',
                    description: 'Player may choose to increase their result by X. Doing so takes non-negatible damage equal to X.'
                }, {
                    name: 'Melee',
                    description: 'User must be adjacent to target.'
                }]
            }, {
                name: 'Sure Shot',
                description: '1⚀+7, Rend',
                traits: [{
                    name: 'Rend',
                    description: 'Deals an additional 1d for each round the ability is used.'
                }]
            }, {
                name: 'Confusion Ray',
                description: '1⚀+2, Confuse Target',
                traits: [{
                    name: 'Confuse',
                    description: 'Condition - Impacts enemies ability to hit. (1 hits themself rather than target, 2+ attack targets correctly)'
                }]
            }, {
                name: 'Tides of Glory',
                description: '2⚀+3, Power Bonus +7, Heal',
                traits: [{
                    name: 'Power Bounus X',
                    description: 'Grants target a bonus to their next roll.'
                }, {
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                }]
            }, {
                name: 'Protective Bubble',
                description: '2⚀+5, Shielding 4, Heal',
                traits: [{
                    name: 'Shielding X',
                    description: 'Prevents X damage from each attack until the start of the next turn.'
                }, {
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                }]
            }, {
                name: 'Stay Put',
                description: '1⚀, Restrain, Targeting 2',
                traits: [{
                    name: 'Restrain',
                    description: 'Condition - Prevents Movement (Lasts 1 Round)'
                }, {
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }]
            }],
        specialAttacks: [
            {
                name: 'Make it Personal',
                description: "3⚀+6, All Target's abilities gain Melee permenantly",
                traits: [{
                    name: 'Melee',
                    description: 'User must be adjacent to target.'
                }]
            },
            {
                name: 'Tri-Shot',
                description: "1⚀+5, Targeting 3",
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }]
            },
            {
                name: 'Shake it Off',
                description: "3⚀+10, Cleanse Self",
                traits: [{
                    name: 'Cleanse',
                    description: 'Removes any Conditions applied to player'
                }]
            },
            {
                name: 'Spook or Boom',
                description: "Versatile: 2⚀+1, Fear Target or 4⚀+1, Entropic",
                traits: [{
                    name: 'Versatile, Fear, Entropic',
                    description: 'Versatile cards have multiple modes available; players select one at time of use.'
                }, {
                    name: 'Fear, Entropic',
                    description: 'Target must move away from you on their turn.'
                }, {
                    name: 'Entropic',
                    description: 'Matching any number of dice rolled with this attack doubles those dice.'
                }]
            },
            {
                name: 'Bravado Strike',
                description: "2⚀+10, Power Drain 3⚀",
                traits: [{
                    name: 'Power Drain',
                    description: 'Player may choose to increase their result by X. Doing so takes non-negatible damage equal to X.'
                }]
            },
            {
                name: 'Protective Bubble',
                description: "3⚀+7, Shield 8, Heal",
                traits: [{
                    name: 'Shield X',
                    description: 'Prevents X damage from each attack until the start of the next turn.'
                }]
            },
            {
                name: 'Sacrificial Blessing',
                description: "1⚀+5, Targeting 3, Power Drain 5, Heal",
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }, {
                    name: 'Power Drain',
                    description: 'Player may choose to increase their result by X. Doing so takes non-negatible damage equal to X.'
                }, {
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                },]
            },
            {
                name: 'Aid',
                description: "4⚀+6, Cleanse Ally, Heal",
                traits: [{
                    name: 'Cleanse',
                    description: 'Removes any Conditions applied to player'
                }, {
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                }]
            },
            {
                name: 'Quick Compliment',
                description: "4⚀+2, Targeting 2, Heal",
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }, {
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                }]
            },
            {
                name: 'Spiteful Glare',
                description: "2⚀+3, Opportune to copy damage dealt by target back to target by one attack, Melee",
                traits: [{
                    name: 'Opportune',
                    description: 'If you were not the sole target of an attack last round, activate the Opportune effect listed in the attack'
                },{
                    name: 'Copy',
                    description: 'Replicate damage, effects, etc at the same rate done by the target last round'
                },{
                    name: 'Melee',
                    description: 'User must be adjacent to target.'
                },]
            },
            {
                name: 'Quick Escape',
                description: "1⚀, Targeting 2, Swap, if targeting an ally gains Heal",
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                },{
                    name: 'Swap',
                    description: 'Change location of two tokens.'
                },{
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                }]
            },
            {
                name: 'Finishing Blow',
                description: "2⚀+5, Refresh, Power Drain 2⚀",
                traits: [{
                    name: 'Refresh',
                    description: 'If this attack lands a killing blow, do not discard the software.'
                },{
                    name: 'Power Drain X',
                    description: 'Player may choose to increase their result by X. Doing so takes non-negatible damage equal to X.'
                },]
            },
            {
                name: "Ol’ Reliable",
                description: "2⚀, Targeting 3, Double the value of all 1's, 2's, and 3's rolled.",
                traits: [{
                    name: 'Targeting',
                    description: 'Roll the damage for this attack, then declare the targets, up to X. Each must be a unique target'
                }]
            },
            {
                name: 'Gambit',
                description: "3⚀+8, Chaos - +2⚀ on even, +3⚀ on odd.",
                traits: [{
                    name: 'Chaos',
                    description: 'Chaos impacts the effects of the ability based on the damage roll. Effects are applied after rolling.'
                }]
            },
            {
                name: 'Life Drain',
                description: "2⚀+3, Lifesteal",
                traits: [{
                    name: 'Lifesteal',
                    description: 'Heals the user of the attack for the amount of damage dealt.'
                }]
            },
            {
                name: 'Inspirational Moment',
                description: "4⚀+1, Entropic, Heal",
                traits: [{
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                },{
                    name: 'Entropic',
                    description: 'Matching any number of dice rolled with this attack doubles those dice.'
                }]
            },
            {
                name: 'Press Onward',
                description: "3⚀+1, Opportune to receive healing equal to damage dealt by target",
                traits: [{
                    name: 'Opportune',
                    description: 'If you were not the sole target of an attack last round, activate the Opportune effect listed in the attack'
                },{
                    name: 'Heal',
                    description: 'Increases allies HP rather than decreases enemies HP.'
                },]
            },
            {
                name: 'Top Off',
                description: "2⚀+6, Trick Shot - If an ability with Heal was used by an ally this turn, gain Lifesteal",
                traits: [{
                    name: 'Trick Shot',
                    description: 'Requires a contingency to be met in order to attain a bonus'
                },{
                    name: 'Lifesteal',
                    description: 'Heals the user of the attack for the amount of damage dealt.'
                }]
            },
            {
                name: 'Relocator',
                description: "1⚀+3, Chaos - Even swap 2 targets, odd swap 4 targets",
                traits: [{
                    name: 'Chaos',
                    description: 'Chaos impacts the effects of the ability based on the damage roll. Effects are applied after rolling.'
                },{
                    name: 'Swap',
                    description: 'Change location of two tokens.'
                }]
            },
            {
                name: 'Huge Boom',
                description: "1⚀+1, Advanced Targeting, Explosive 1, Explosive 3",
                traits: [{
                    name: 'Advanced Targeting',
                    description: 'Targets any number of enemies or allies with this ability'
                },{
                    name: 'Explosive',
                    description: 'If a die roll matches the exploding value, add an additional die to the attack, which can also explode.'
                } ]
            },

        ]
    }
};
const eventCardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACT_I_ITEMS:
            state.allI = [];
            state.randomActIs = []
            var allI = state.eventsCards.filter(item => {
                return item.type == 'Act I'
            })
            var allILength = allI.length;
            for (var i = 0; i < 9; i++) {
                const rndActIPos = Math.floor(Math.random() * (allILength - i - 1))
                state.randomActIs.push({ label: allI[rndActIPos].title, value: allI[rndActIPos].title });
                allI.splice(rndActIPos, 1);
            }
            console.log(state.randomActIs);
            return state
        case GET_ACT_II_ITEMS:
            state.allII = [];
            state.randomActIIs = [];
            var allII = state.eventsCards.filter(item => {
                return item.type == 'Act II'
            })
            var allIILength = allII.length;
            for (var i = 0; i < 6; i++) {
                const rndActIIPos = Math.floor(Math.random() * (allIILength - i - 1))
                state.randomActIIs.push({ label: allII[rndActIIPos].title, value: allII[rndActIIPos].title });
                allII.splice(rndActIIPos, 1);
            }
            console.log(state.randomActIIs);
            return state
        case GET_ACT_III_ITEMS:
            state.allIII = []
            state.randomActIIIs = []
            var allIII = state.eventsCards.filter(item => {
                return item.type == 'Act III'
            })
            var allIIILength = allIII.length;
            for (var i = 0; i < 3; i++) {
                const rndActIIIPos = Math.floor(Math.random() * (allIIILength - i - 1))
                state.randomActIIIs.push({ label: allIII[rndActIIIPos].title, value: allIII[rndActIIIPos].title });
                allIII.splice(rndActIIIPos, 1);
            }
            console.log(state.randomActIIIs);
            return state
        case GET_CURRENT_EVENTCARD:
            var selectedEventCards = [];
            var selectedEventCardsName = action.payload;
            state.selectedEventCards = [];
            for (var i = 0; i < selectedEventCardsName.length; i++) {
                for (var j = 0; j < state.selectedEventCards.length; j++)
                    if (selectedEventCardsName[i] == state.selectedEventCards[j]) {
                        selectedEventCards.push(state.selectedEventCards[j]);
                        break;
                    }
            }
            return {
                ...state,
                selectedEventCards: selectedEventCards,
            };
        case SET_CARD:
            switch (action.payload.title) {
                case 'Act I, Event I':
                    state.selectedAIEI = action.payload.value;
                    break;
                case 'Act I, Event II':
                    state.selectedAIEII = action.payload.value;
                    break;
                case 'Act I, Event III':
                    state.selectedAIEIII = action.payload.value;
                    break;
                case 'Act II, Event I':
                    state.selectedAIIEI = action.payload.value;
                    break;
                case 'Act II, Event II':
                    state.selectedAIIEII = action.payload.value;
                    break;
                case 'Act III, Final Event':
                    state.selectedAIIIFINAL = action.payload.value;
                    break;
                default:
                    break;
            }
            if (state.selectedAIEI == undefined ||
                state.selectedAIEII == undefined ||
                state.selectedAIEIII == undefined ||
                state.selectedAIIEI == undefined ||
                state.selectedAIIEII == undefined ||
                state.selectedAIIIFINAL == undefined) {
                return {
                    ...state,
                    isSelectedAll: false
                }
            } else {
                return {
                    ...state,
                    isSelectedAll: true
                }
            }
        case IS_SELECTED_ALL:
            if (state.selectedAIEI == undefined ||
                state.selectedAIEII == undefined ||
                state.selectedAIEIII == undefined ||
                state.selectedAIIEI == undefined ||
                state.selectedAIIEII == undefined ||
                state.selectedAIIIFINAL == undefined) {
                return {
                    ...state,
                    isSelectedAll: false
                }
            } else {
                return {
                    ...state,
                    isSelectedAll: true
                }
            }
        case SET_SELECTED_EVENT_CARDS:
            state.selectedEventCards = [];
            for (var i = 0; i < state.eventsCards.length; i++) {
                if (state.eventsCards[i].title == state.selectedAIEI) {
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                } else if (state.eventsCards[i].title == state.selectedAIIIFINAL) {
                    console.log('value = ', state.eventsCards[i])
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                } else if (state.eventsCards[i].title == state.selectedAIEII) {
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                } else if (state.eventsCards[i].title == state.selectedAIEIII) {
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                } else if (state.eventsCards[i].title == state.selectedAIIEI) {
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                } else if (state.eventsCards[i].title == state.selectedAIIEII) {
                    state.selectedEventCards.push(state.eventsCards[i]);
                    continue;
                }
            }
            return {
                ...state
            }
            break;
        default:
            return state;
    }
}
export default eventCardsReducer;