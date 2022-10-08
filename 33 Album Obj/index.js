function make_album(name, title, tracks = null) {
  let albumOBJ = {
    name: name,
    title: title,
  };

  if (tracks !== null) {
    albumOBJ.tracks = tracks;
  }
  return albumOBJ;
}

let album1 = make_album("Atif", "Junoon");
console.log(album1);

let album2 = make_album("Ali zazar", "Mereh Yaar");
console.log(album2);
let album3 = make_album("Nusrat", "Dil Lageh", 10);
console.log(album3);
