let magicians = [
  "Alexander Jason",
  "Amodei Ivan",
  "Atkins Jeffery",
  "David Copperfield",
];

function show_magicians(magicians) {
  magicians.forEach((element) => {
    console.log("\n" + element);
    // console.trace();
  });
}

show_magicians(magicians);

function make_great(magicianS) {
  let greatMagicianS = [];

  while (!magicianS.length == 0) {
    let magician = magicianS.pop();
    let greatMagi = magician + " The Great";
    greatMagicianS.push(greatMagi);
  }

  greatMagicianS.forEach((element) => {
    magicianS.push(element);
  });
  return magicianS;
}

magicians = make_great(magicians);
// console.log(magicians);
show_magicians(magicians);
