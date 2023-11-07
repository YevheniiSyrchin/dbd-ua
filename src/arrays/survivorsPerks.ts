const survivorsPerks = [
  {
    text: "Ace In The Hole",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/aceinthehole.png",
  },
  {
    text: "Adrenaline",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/adrenaline.png",
  },
  {
    text: "Aftercare",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/aftercare.png",
  },
  {
    text: "Alert",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/alert.png",
  },
  {
    text: "Any Means Necessary",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/anymeansnecessary.png",
  },
  {
    text: "Appraisal",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/appraisal.png",
  },
  {
    text: "Autodidact",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/autodidact.png",
  },
  {
    text: "Background Player",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/backgroundplayer.png",
  },
  {
    text: "Balanced Landing",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/balancedlanding.png",
  },
  {
    text: "Better Than New",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/betterthannew.png",
  },
  {
    text: "Bite The Bullet",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bitethebullet.png",
  },
  {
    text: "Blast Mine",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/blastmine.png",
  },
  {
    text: "Blood Pact",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bloodpact.png",
  },
  {
    text: "Blood Rush",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bloodrush.png",
  },
  {
    text: "Boil Over",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/boilover.png",
  },
  {
    text: "Bond",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/bond.png",
  },
  {
    text: "Boon: Circle of Healing",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/booncircleofhealing.png",
  },
  {
    text: "Boon: Dark Theory",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/boondarktheory.png",
  },
  {
    text: "Boon: Exponential",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/boonexponential.png",
  },
  {
    text: "Boon: Shadow Step",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/boonshadowstep.png",
  },
  {
    text: "Borrowed Time",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/borrowedtime.png",
  },
  {
    text: "Botany Knowledge",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/botanyknowledge.png",
  },
  {
    text: "Breakdown",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/breakdown.png",
  },
  {
    text: "Breakout",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/breakout.png",
  },
  {
    text: "Buckle Up",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/buckleup.png",
  },
  {
    text: "Built to Last",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/builttolast.png",
  },
  {
    text: "Calm Spirit",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/calmspirit.png",
  },
  {
    text: "Chemical Trap",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/chemicaltrap.png",
  },
  {
    text: "Clairvoyance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/clairvoyance.png",
  },
  {
    text: "Corrective Action",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/correctiveaction.png",
  },
  {
    text: "Counterforce",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/counterforce.png",
  },
  {
    text: "Cut Loose",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/cutloose.png",
  },
  {
    text: "Dance With Me",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dancewithme.png",
  },
  {
    text: "Dark Sense",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/darksense.png",
  },
  {
    text: "Dead Hard",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deadhard.png",
  },
  {
    text: "Deception",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deception.png",
  },
  {
    text: "Decisive Strike",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/decisivestrike.png",
  },
  {
    text: "Deja Vu",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dejavu.png",
  },
  {
    text: "Deliverance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/deliverance.png",
  },
  {
    text: "Desperate Measures",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/desperatemeasures.png",
  },
  {
    text: "Detective's Hunch",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/detectiveshunch.png",
  },
  {
    text: "Distortion",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/distortion.png",
  },
  {
    text: "Diversion",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/diversion.png",
  },
  {
    text: "Dramaturgy",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dramaturgy.png",
  },
  {
    text: "Empathic Connection",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/empathicconnection.png",
  },
  {
    text: "Empathy",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/empathy.png",
  },
  {
    text: "Fast Track",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/fasttrack.png",
  },
  {
    text: "Flashbang",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/flashbang.png",
  },
  {
    text: "Flip-Flop",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/flip-flop.png",
  },
  {
    text: "Fogwise",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/fogwise.png",
  },
  {
    text: "For The People",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/forthepeople.png",
  },
  {
    text: "Friendly Competition",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/friendlycompetition.png",
  },
  {
    text: "Guardian",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/guardian.png",
  },
  {
    text: "Head On",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/headon.png",
  },
  {
    text: "Hope",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hope.png",
  },
  {
    text: "Hyperfocus",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/hyperfocus.png",
  },
  {
    text: "Inner Focus",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/innerfocus.png",
  },
  {
    text: "Inner Healing",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/innerhealing.png",
  },
  {
    text: "Iron Will",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/ironwill.png",
  },
  {
    text: "Kindred",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/kindred.png",
  },
  {
    text: "Kinship",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/kinship.png",
  },
  {
    text: "Leader",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/leader.png",
  },
  {
    text: "Left Behind",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/leftbehind.png",
  },
  {
    text: "Light-Footed",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/light-footed.png",
  },
  {
    text: "Lightweight",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lightweight.png",
  },
  {
    text: "Lithe",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lithe.png",
  },
  {
    text: "Low Profile",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lowprofile.png",
  },
  {
    text: "Lucky Break",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/luckybreak.png",
  },
  {
    text: "Lucky Star",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/luckystar.png",
  },
  {
    text: "Made For This",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/madeforthis.png",
  },
  {
    text: "Mettle of Man",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/mettleofman.png",
  },
  {
    text: "No Mither",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nomither.png",
  },
  {
    text: "No One Left Behind",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nooneleftbehind.png",
  },
  {
    text: "Object of Obsession",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/objectofobsession.png",
  },
  {
    text: "Off the Record",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/offtherecord.png",
  },
  {
    text: "Open-Handed",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/open-handed.png",
  },
  {
    text: "Overcome",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/overcome.png",
  },
  {
    text: "Overzealous",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/overzealous.png",
  },
  {
    text: "Parental Guidance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/parentalguidance.png",
  },
  {
    text: "Pharmacy",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/pharmacy.png",
  },
  {
    text: "Plot Twist",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/plottwist.png",
  },
  {
    text: "Plunderer's Instinct",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/plunderersinstinct.png",
  },
  {
    text: "Poised",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/poised.png",
  },
  {
    text: "Potential Energy",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/potentialenergy.png",
  },
  {
    text: "Power Struggle",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/powerstruggle.png",
  },
  {
    text: "Premonition",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/premonition.png",
  },
  {
    text: "Prove Thyself",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/provethyself.png",
  },
  {
    text: "Quick And Quiet",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/quickandquiet.png",
  },
  {
    text: "Quick Gambit",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/quickgambit.png",
  },
  {
    text: "Reactive Healing",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/reactivehealing.png",
  },
  {
    text: "Reassurance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/reassurance.png",
  },
  {
    text: "Red Herring",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/redherring.png",
  },
  {
    text: "Renewal",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/renewal.png",
  },
  {
    text: "Repressed Alliance",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/repressedalliance.png",
  },
  {
    text: "Residual Manifest",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/residualmanifest.png",
  },
  {
    text: "Resilience",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/resilience.png",
  },
  {
    text: "Resurgence",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/resurgence.png",
  },
  {
    text: "Rookie Spirit",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/rookiespirit.png",
  },
  {
    text: "Saboteur",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/saboteur.png",
  },
  {
    text: "Scavenger",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scavenger.png",
  },
  {
    text: "Scene Partner",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/scenepartner.png",
  },
  {
    text: "Self-Aware",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/self-aware.png",
  },
  {
    text: "Self-Care",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/self-care.png",
  },
  {
    text: "Self-Preservation",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/self-preservation.png",
  },
  {
    text: "Situational Awareness",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/situationalawareness.png",
  },
  {
    text: "Slippery Meat",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/slipperymeat.png",
  },
  {
    text: "Small Game",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/smallgame.png",
  },
  {
    text: "Smash Hit",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/smashhit.png",
  },
  {
    text: "Sole Survivor",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/solesurvivor.png",
  },
  {
    text: "Solidarity",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/solidarity.png",
  },
  {
    text: "Soul Guard",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/soulguard.png",
  },
  {
    text: "Spine Chill",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/spinechill.png",
  },
  {
    text: "Sprint Burst",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/sprintburst.png",
  },
  {
    text: "Stake Out",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/stakeout.png",
  },
  {
    text: "Streetwise",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/streetwise.png",
  },
  {
    text: "Teamwork: Collective Stealth",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/teamworkcollectivestealth.png",
  },
  {
    text: "Teamwork: Power of Two",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/teamworkpoweroftwo.png",
  },
  {
    text: "Technician",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/technician.png",
  },
  {
    text: "Tenacity",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/tenacity.png",
  },
  {
    text: "This Is Not Happening",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/thisisnothappening.png",
  },
  {
    text: "Troubleshooter",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/troubleshooter.png",
  },
  {
    text: "Unbreakable",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/unbreakable.png",
  },
  {
    text: "Up the Ante",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/uptheante.png",
  },
  {
    text: "Urban Evasion",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/urbanevasion.png",
  },
  {
    text: "Vigil",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/vigil.png",
  },
  {
    text: "Visionary",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/visionary.png",
  },
  {
    text: "Wake Up!",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/wakeup.png",
  },
  {
    text: "We'll Make It",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/wewillmakeit.png",
  },
  {
    text: "We're Gonna Live Forever",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/wearegonnaliveforever.png",
  },
  {
    text: "Windows of Opportunity",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/windowsofopportunity.png",
  },
  {
    text: "Wiretap",
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/wiretap.png",
  },
];

export default survivorsPerks;
