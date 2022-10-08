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

  let i = 0;
  while (!magicianS.length == 0) {
    i++;
    let magician = magicianS.pop();
    let greatMagi = magician + " The Great";
    greatMagicianS.push(greatMagi);
  }

  greatMagicianS.forEach((element) => {
    magicianS.push(element);
  });
  return magicianS;
}

let magicians1 = make_great(magicians.slice());
console.log(magicians1);
show_magicians(magicians);
