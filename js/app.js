let stress = 10;
let problems = 312000;
let foxesFound = 0;

function updateDashboard(){
  const fill = document.getElementById("stressFill");
  const text = document.getElementById("stressText");

  if(!fill) return;

  stress += Math.random()*3;
  if(stress > 100) stress = 100;

  fill.style.width = stress + "%";

  if(stress < 30) text.innerText = "Calm Professional Absorption";
  else if(stress < 60) text.innerText = "Moderate Interruption Load";
  else if(stress < 85) text.innerText = "Critical Meeting Overflow";
  else text.innerText = "Someone Said 'Got A Minute'";

  const counter = document.getElementById("counter");
  if(counter){
    problems += Math.floor(Math.random()*5);
    counter.innerText = problems.toLocaleString();
  }
}

setInterval(updateDashboard, 2500);

function submitComplaint(){
  alert("Your complaint has been escalated directly to Jared.");
  stress += 10;
}

function findFox(id){
  foxesFound++;
  document.getElementById("foxCount").innerText =
    `${foxesFound}/12 Foxes Found`;

  if(foxesFound === 12){
    alert("You unlocked: ORDER OF THE FOX 🦊");
  }
}