let debrisHeight = 0;

document.getElementById("shatterBtn").onclick = function () {


  document.body.style.backgroundImage = "none";
  document.getElementById("bgVideo").style.display = "block";

  const word = document.getElementById("wordInput").value;
  const container = document.getElementById("container");


  const row = document.createElement("div");
  row.className = "debris-row";


  row.style.bottom = debrisHeight + "px";

  debrisHeight += 50;

  container.appendChild(row);

  let letters = [];

  for (let char of word) {
    let span = document.createElement("span");
    span.className = "letter";
    span.textContent = char;
    row.appendChild(span);
    letters.push(span);
  }

  setTimeout(() => {
    letters.forEach(letter => {
      let drift = (Math.random() - 0.5) * 80; 
      letter.style.transform = `translate(${drift}px, 40px)`;  
    });
  }, 100);
};
