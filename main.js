let activity = [
  "Go run ",
  "Read book ",
  "Watch a documentary ",
  "cook a new recipe ",
  "Try a new hobby",
  "Visit new place ",
  "learn a new skill",
];
function addactivite(){
    const Newactivity = document.getElementById("activInput").value.trim();
    if(Newactivity !== "")activity.push(Newactivity)
        document.getElementById("activInput").value= "";
}
function selectActivity(){
    const randomIndex = Math.floor(Math.random() * activity.length);
    document.getElementById("activity").textContent = activity[randomIndex];
}
