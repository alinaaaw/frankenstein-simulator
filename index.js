let curiosity = document.getElementById("curiosity");
let curiosity_output = document.getElementById("curiosity_value");
let knowledge = document.getElementById("knowledge");
let knowledge_output = document.getElementById("knowledge_value");
let empathy = document.getElementById("empathy");
let empathy_output = document.getElementById("empathy_value");
let independence = document.getElementById("independence");
let independence_output = document.getElementById("independence_value");
let publish = document.getElementById("publish");
let money_left = document.getElementById("money_left");
let cost = document.getElementById("cost");
let result = document.getElementById("result");
let modify = document.getElementById("modify");
let restart = document.getElementById("restart");
let result_text = document.getElementById("result_text");
let restart1 = document.getElementById("restart1");
let instruction = document.getElementById("instruction");
let got = document.getElementById("got");
let succeed = document.getElementById("succeed");
let ini_curiosity = 0;
let ini_empathy = 0;
let ini_independence = 0;
let ini_knowledge = 0;
let curiosity_cost = 1;
let knowledge_cost = 1.5;
let empathy_cost = 2;
let independence_cost = 1.5;
let money = 400;
let total_cost = 0;
let restart_time = -1;

curiosity.addEventListener("input", (event) => {
  curiosity_output.textContent = event.target.value;
});
empathy.addEventListener("input", (event) => {
  empathy_output.textContent = event.target.value;
});
independence.addEventListener("input", (event) => {
  independence_output.textContent = event.target.value;
});
knowledge.addEventListener("input", (event) => {
  knowledge_output.textContent = event.target.value;
});

got.addEventListener("click", replay, false);
modify.addEventListener("click", modify_robot, false);
restart.addEventListener("click", replay, false);
restart1.addEventListener("click", replay, false);

function publish_robot() {
  if (money >= total_cost && total_cost > 0) {
    publish.removeEventListener("click", publish_robot, false);
    curiosity.removeEventListener("change", cost_change, false);
    empathy.removeEventListener("change", cost_change, false);
    knowledge.removeEventListener("change", cost_change, false);
    independence.removeEventListener("change", cost_change, false);
    money -= total_cost;
    show_result();
    total_cost = 0;
    money_left.textContent = money;
    cost.textContent = "Cost: " + total_cost;
    ini_curiosity = curiosity.value;
    ini_empathy = empathy.value;
    ini_independence = independence.value;
    ini_knowledge = knowledge.value;
  }
}

function cost_change() {
  total_cost = Math.abs(curiosity.value - ini_curiosity) * curiosity_cost;
  total_cost += Math.abs(empathy.value - ini_empathy) * empathy_cost;
  total_cost += Math.abs(knowledge.value - ini_knowledge) * knowledge_cost;
  total_cost += Math.abs(independence.value - ini_independence) * independence_cost;
  cost.textContent = "Cost: " + total_cost;
}

function show_result() {
  result.style.setProperty("visibility","visible");
  if (curiosity.value >= 47 && curiosity.value <= 57 &&
      knowledge.value >= 68 && knowledge.value <= 78 &&
      empathy.value >= 60 && empathy.value <= 70 &&
      independence.value >= 45 && independence.value <= 55 &&
      parseInt(curiosity.value) + parseInt(knowledge.value) >= 120 &&
      parseInt(curiosity.value) + parseInt(knowledge.value) <= 130 &&
      parseInt(empathy.value) + parseInt(independence.value) >= 110 &&
      parseInt(empathy.value) + parseInt(independence.value) <= 120) {
    result_text.textContent = "Succeed!\nYou restarted " + restart_time + " times."
    succeed.style.setProperty("visibility","visible");
  } else {
    result_text.textContent = "Failed";
  }
}

function modify_robot() {
  result.style.setProperty("visibility","hidden");
  restart1.style.setProperty("visibility","visible");
  publish.addEventListener("click", publish_robot, false);
  curiosity.addEventListener("change", cost_change, false);
  empathy.addEventListener("change", cost_change, false);
  knowledge.addEventListener("change", cost_change, false);
  independence.addEventListener("change", cost_change, false);

}

function replay() {
  instruction.style.setProperty("visibility","hidden");
  result.style.setProperty("visibility","hidden");
  restart1.style.setProperty("visibility","hidden");
  publish.addEventListener("click", publish_robot, false);
  curiosity.addEventListener("change", cost_change, false);
  empathy.addEventListener("change", cost_change, false);
  knowledge.addEventListener("change", cost_change, false);
  independence.addEventListener("change", cost_change, false);
  publish.addEventListener("click", publish_robot, false);
  restart_time += 1;
  ini_curiosity = 0;
  ini_empathy = 0;
  ini_independence = 0;
  ini_knowledge = 0;
  money = 400;
  total_cost = 0;
  curiosity.value = 0;
  empathy.value = 0;
  knowledge.value = 0;
  independence.value = 0;
  curiosity_output.textContent = curiosity.value;
  empathy_output.textContent = empathy.value;
  knowledge_output.textContent = knowledge.value;
  independence_output.textContent = independence.value;
  money_left.textContent = money;
}