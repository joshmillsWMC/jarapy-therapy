let stress = 12;
let tickets = 312451;
let foxes = 0;

function tickSystem(){

  // stress engine
  stress += Math.random()*2.2;
  if(stress > 100) stress = 100;

  let stressBar = document.getElementById("stressFill");
  if(stressBar){
    stressBar.style.width = stress + "%";
  }

  let stressText = document.getElementById("stressText");
  if(stressText){
    if(stress < 30) stressText.innerText = "Operational Stability: Stable";
    else if(stress < 60) stressText.innerText = "Operational Stability: Elevated Load";
    else if(stress < 85) stressText.innerText = "Operational Stability: Critical";
    else stressText.innerText = "Operational Stability: Jared Has Been Notified";
  }

  // ticket system
  let counter = document.getElementById("counter");
  if(counter){
    tickets += Math.floor(Math.random()*6);
    counter.innerText = tickets.toLocaleString();
  }

  // fake system log
  let log = document.getElementById("log");
  if(log){
    const events = [
      "New ticket assigned to Jared",
      "Priority escalated automatically",
      "User requested 'quick help'",
      "System rerouted issue to Jared",
      "Meeting created about issue"
    ];
    log.innerText = events[Math.floor(Math.random()*events.length)];
  }
}

setInterval(tickSystem, 2000);

function submitTicket(){
  alert("Ticket submitted.\nAutomatically escalated to Jared.");
  stress += 8;
}

function findFox(){
  foxes++;
  alert(`Fox detected. Compliance updated: ${foxes}/12`);

  if(foxes === 12){
    alert("ENTERPRISE ACHIEVEMENT UNLOCKED: ORDER OF THE FOX");
  }
}