let list = ["Imran Khan", "Dr Zakir", "Muhammad Ali", "Isaac Newton"];

console.log("\n" + list[3] + " Will not be coming \n");
//console.log(list);

list.splice(3, 1);
//console.log(list);

list.splice(3, 0, "Tom");
//console.log(list);

console.log(
  "\n" +
    list[0] +
    " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
);

console.log(
  list[1] +
    " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
);

console.log(
  list[2] +
    " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
);

console.log(
  list[3] +
    " Kindly, this is my second invitaion, you have to come to my dinner invitation i am looking forward to meeting you \n"
);
