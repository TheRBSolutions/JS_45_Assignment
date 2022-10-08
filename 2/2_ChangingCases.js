{
  // My name is Rammez Butt
  /*This is a multi-line comment and this program changes the cases of the strings*/
  ("use strict");
  let name = "Jerry";

  let lower = name.toLowerCase();
  console.log(lower);

  let upper = name.toUpperCase();
  console.log(upper);

  // Custom Function for Title Using by using Regex

  function title(str) {
    let newStr = str.toLowerCase();
    return newStr.replace(/(^|\s)\S/g, function (t) {
      return t.toUpperCase();
    });
  }

  let converted1 = title(upper);
  let converted2 = title(lower);
  let converted3 = title("hELLO tHis is testing");

  console.log(
    "\n",
    "1",
    converted1,
    "\n",
    "2",
    converted2,
    "\n",
    "3",
    converted3
  );
}
