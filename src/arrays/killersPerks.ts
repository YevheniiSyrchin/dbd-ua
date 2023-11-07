const killersPerks = [
  {
    text: "A Nurse's Calling",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/anursescalling.png",
  },
  {
    text: "Agitation",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/Agitation.png",
  },
  {
    text: "Alien Instinct",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/AlienInstinct.png",
  },
  {
    text: "Awakened Awareness",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/awakenedawareness.png",
  },
  {
    text: "Bamboozle",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bamboozle.png",
  },
  {
    text: "Barbecue And Chilli",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/barbecueandchilli.png",
  },
  {
    text: "Beast Of Prey",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/beastofprey.png",
  },
  {
    text: "Bitter Murmur",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bittermurmur.png",
  },
  {
    text: "Blood Echo",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bloodecho.png",
  },
  {
    text: "Blood Warden",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bloodwarden.png",
  },
  {
    text: "Bloodhound",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bloodhound.png",
  },
  {
    text: "Brutal Strength",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/brutalstrength.png",
  },
  {
    text: "Call Of Brine",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/callofbrine.png",
  },
  {
    text: "Claustrophobia",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/claustrophobia.png",
  },
  {
    text: "Corrupt Intervention",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/corruptintervention.png",
  },
  {
    text: "Coulrophobia",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/coulrophobia.png",
  },
  {
    text: "Coup De Grace",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/coupdegrace.png",
  },
  {
    text: "Dark Devotion",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/darkdevotion.png",
  },
  {
    text: "Darkness Revealed",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/darknessrevealed.png",
  },
  {
    text: "Dead Man's Switch",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deadmansswitch.png",
  },
  {
    text: "Deadlock",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deadlock.png",
  },
  {
    text: "Deathbound",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deathbound.png",
  },
  {
    text: "Deerstalker",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deerstalker.png",
  },
  {
    text: "Discordance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/discordance.png",
  },
  {
    text: "Dissolution",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dissolution.png",
  },
  {
    text: "Distressing",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/distressing.png",
  },
  {
    text: "Dragons Grip",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dragonsgrip.png",
  },
  {
    text: "Dying Light",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dyinglight.png",
  },
  {
    text: "Enduring",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/enduring.png",
  },
  {
    text: "Eruption",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/eruption.png",
  },
  {
    text: "Fearmonger",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/fearmonger.png",
  },
  {
    text: "Fire Up",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/fireup.png",
  },
  {
    text: "Forced Hesitation",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/forcedhesitation.png",
  },
  {
    text: "Forced Penance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/forcedpenance.png",
  },
  {
    text: "Franklin's Demise",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/franklinsdemise.png",
  },
  {
    text: "Furtive Chase",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/furtivechase.png",
  },
  {
    text: "Game Afoot",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/gameafoot.png",
  },
  {
    text: "Gearhead",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/gearhead.png",
  },
  {
    text: "Genetic Limits",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/geneticlimits.png",
  },
  {
    text: "Grim Embrace",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/grimembrace.png",
  },
  {
    text: "Hex: Blood Favour",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexbloodfavour.png",
  },
  {
    text: "Hex: Crowd Control",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexcrowdcontrol.png",
  },
  {
    text: "Hex: Devour Hope",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexdevourhope.png",
  },
  {
    text: "Hex: Face The Darkness",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexfacethedarkness.png",
  },
  {
    text: "Hex: Haunted Ground",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexhauntedground.png",
  },
  {
    text: "Hex: Huntress Lullaby",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexhuntresslullaby.png",
  },
  {
    text: "Hex: No One Escapes Death",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexnooneescapesdeath.png",
  },
  {
    text: "Hex: Pentimento",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexpentimento.png",
  },
  {
    text: "Hex: Plaything",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexplaything.png",
  },
  {
    text: "Hex: Retribution",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexretribution.png",
  },
  {
    text: "Hex: Ruin",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexruin.png",
  },
  {
    text: "Hex: The Third Seal",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexthethirdseal.png",
  },
  {
    text: "Hex: Thrill Of The Hunt",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexthrillofthehunt.png",
  },
  {
    text: "Hex: Undying",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hexundying.png",
  },
  {
    text: "Hoarder",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hoarder.png",
  },
  {
    text: "Hubris",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hubris.png",
  },
  {
    text: "Hysteria",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hysteria.png",
  },
  {
    text: "I'm All Ears",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/imallears.png",
  },
  {
    text: "Infectious Fright",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/infectiousfright.png",
  },
  {
    text: "Insidious",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/insidious.png",
  },
  {
    text: "Iron Grasp",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/irongrasp.png",
  },
  {
    text: "Iron Maiden",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/ironmaiden.png",
  },
  {
    text: "Jolt",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/jolt.png",
  },
  {
    text: "Knock Out",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/knockout.png",
  },
  {
    text: "Lethal Pursuer",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lethalpursuer.png",
  },
  {
    text: "Leverage",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/leverage.png",
  },
  {
    text: "Lightborn",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lightborn.png",
  },
  {
    text: "Machine Learning",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/machinelearning.png",
  },
  {
    text: "Mad Grit",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/madgrit.png",
  },
  {
    text: "Make Your Choice",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/makeyourchoice.png",
  },
  {
    text: "Merciless Storm",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/mercilessstorm.png",
  },
  {
    text: "Monitor And Abuse",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/monitorandabuse.png",
  },
  {
    text: "Nemesis",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nemesis-1.png",
  },
  {
    text: "No Way Out",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nowayout.png",
  },
  {
    text: "Nowhere To Hide",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nowheretohide.png",
  },
  {
    text: "Oppression",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/oppression.png",
  },
  {
    text: "Overcharge",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/overcharge.png",
  },
  {
    text: "Overwhelming Presence",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/overwhelmingpresence.png",
  },
  {
    text: "Play With Your Food",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/playwithyourfood.png",
  },
  {
    text: "Pop Goes The Weasel",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/popgoestheweasel.png",
  },
  {
    text: "Predator",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/predator.png",
  },
  {
    text: "Rancor",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/rancor.png",
  },
  {
    text: "Rapid Brutality",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/rapidbrutality.png",
  },
  {
    text: "Remember Me",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/rememberme.png",
  },
  {
    text: "Save The Best For Last",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/savethebestforlast.png",
  },
  {
    text: "Scourge Hook: Floods Of Rage",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scourgehookfloodsofrage.png",
  },
  {
    text: "Scourge Hook: Gift Of Pain",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scourgehookgiftofpain.png",
  },
  {
    text: "Scourge Hook: Hangman's Trick",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scourgehookhangmanstrick.png",
  },
  {
    text: "Scourge Hook: Monstrous Shrine",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scourgehookmonstrousshrine.png",
  },
  {
    text: "Scourge Hook: Pain Resonance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scourgehookpainresonance.png",
  },
  {
    text: "Septic Touch",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/septictouch.png",
  },
  {
    text: "Shadowborn",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/shadowborn.png",
  },
  {
    text: "Shattered Hope",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/shatteredhope.png",
  },
  {
    text: "Sloppy Butcher",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/sloppybutcher.png",
  },
  {
    text: "Spies From The Shadows",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/spiesfromtheshadows.png",
  },
  {
    text: "Spirit Fury",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/spiritfury.png",
  },
  {
    text: "Starstruck",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/starstruck.png",
  },
  {
    text: "Stridor",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/stridor.png",
  },
  {
    text: "Superior Anatomy",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/superioranatomy.png",
  },
  {
    text: "Surveillance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/surveillance.png",
  },
  {
    text: "Terminus",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/terminus.png",
  },
  {
    text: "Territorial Imperative",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/territorialimperative.png",
  },
  {
    text: "Thanatophobia",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/thanatophobia.png",
  },
  {
    text: "Thrilling Tremors",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/thrillingtremors.png",
  },
  {
    text: "THWACK!",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/thwack.png",
  },
  {
    text: "Tinkerer",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/tinkerer.png",
  },
  {
    text: "Trail Of Torment",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/trailoftorment.png",
  },
  {
    text: "Ultimate Weapon",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/ultimateweapon.png",
  },
  {
    text: "Unnerving Presence",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/unnervingpresence.png",
  },
  {
    text: "Unrelenting",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/unrelenting.png",
  },
  {
    text: "Whispers",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/whispers.png",
  },
  {
    text: "Zanshin Tactics",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/zanshintactics.png",
  },
];

export default killersPerks;
