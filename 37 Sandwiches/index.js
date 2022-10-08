function sandwichIngred(...Args) {
  Args.forEach((element) => {
    console.log("Preparing the " + element + " for your sandwich");
  });
}

sandwichIngred("Peanut Butter", "Bread Crumbs", "Beef Steak");
sandwichIngred("Cucumber", "carrots", "Cheese");
sandwichIngred("Bread", "Eggs", "Lettuce");
