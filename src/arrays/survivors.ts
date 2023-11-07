const survivors = [
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/zarinakassir.png",
    text: "Zarina Kassir",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/yun-jinlee.png",
    text: "Yun-Jin Lee",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/yuikimura.png",
    text: "Yui Kimura",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/yoichiasakawa.png",
    text: "Yoichi Asakawa",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/vittoriotoscano.png",
    text: "Vittorio Toscano",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/thalitalyra.png",
    text: "Thalita Lyra",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/steveharrington.png",
    text: "Steve Harrington",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/renatolyra.png",
    text: "Renato Lyra",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/rebeccachambers.png",
    text: "Rebecca Chambers",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/quentinsmith.png",
    text: "Quentin Smith",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nicolascage.png",
    text: "Nicolas Cage",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/neakarlsson.png",
    text: "Nea Karlsson",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/nancywheeler.png",
    text: "Nancy Wheeler",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/mikaelareid.png",
    text: "Mikaela Reid",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/megthomas.png",
    text: "Meg Thomas",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/leonscottkennedy.png",
    text: "Leon S. Kennedy",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/lauriestrode.png",
    text: "Laurie Strode",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/katedenson.png",
    text: "Kate Denson",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/jonahvasquez.png",
    text: "Jonah Vasquez",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/jillvalentine.png",
    text: "Jill Valentine",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/jeffjohansen.png",
    text: "Jeff Johansen",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/janeromero.png",
    text: "Jane Romero",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/jakepark.png",
    text: "Jake Park",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/haddiekaur.png",
    text: "Haddie Kaur",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/gabrielsoma.png",
    text: "Gabriel Soma",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/fengmin.png",
    text: "Feng Min",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/felixrichter.png",
    text: "Felix Richter",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/elodierakoto.png",
    text: "Elodie Rakoto",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/ellenripley.png",
    text: "Ellen Ripley",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/dwightfairfield.png",
    text: "Dwight Fairfield",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/davidtapp.png",
    text: "David Tapp",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/davidking.png",
    text: "David King",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/claudettemorel.png",
    text: "Claudette Morel",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/cherylmason.png",
    text: "Cheryl Mason",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/billoverbeck.png",
    text: "Bill Overbeck",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/ashwilliams.png",
    text: "Ash Williams",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/adawong.png",
    text: "Ada Wong",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/adamfrancis.png",
    text: "Adam Francis",
  },
  {
    image:
      "https://dbd-rest-api.eremenko.top/wp-content/uploads/2023/09/acevisconti.png",
    text: "Ace Visconti",
  },
];

export default survivors;
