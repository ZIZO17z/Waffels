  document.getElementById("waffleName").addEventListener("input", function() {
      const output = document.getElementById("nameOutput");
      output.textContent = "🥞 Waffle Name: " + this.value;
  });

  const facts = [
      "Waffles were first made in ancient Greece!",
      "The biggest waffle ever made weighed over 110 pounds!",
      "Waffles have their own day: March 25th!",
      "In Sweden, waffles are often heart-shaped.",
      "Waffle irons used to be held over an open fire!"
  ];

  document.getElementById("factButton").addEventListener("click", function() {
      const randomIndex = Math.floor(Math.random() * facts.length);
      document.getElementById("factDisplay").textContent = facts[randomIndex];
  });

  let toggleColor = false;
  document.getElementById("factButton").addEventListener("dblclick", function() {
      toggleColor = !toggleColor;
      document.body.style.background = toggleColor ? "#ffecd2" : "#fff8f0";
  });