//bmr calculation using revised Harris-Benedict formula
var bmr;
var myCarbs;
var myProteins;
var myFats;
var myCalories;

function bmrFunction() {
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let selectedGender = document.getElementById("gender").value;
if (age == "" || height == "" || weight == "")
  {bmr = NaN}
else if (selectedGender == "male")
  {bmr = 88.326 + 13.397*weight + 4.799*height - 5.677*age;}
else if (selectedGender == "female")
  {bmr = 447.593 + 9.247*weight + 3.098*height - 4.330*age;}
}
//activity level to multiply bmr by
var activityLevel;
function activityLevelFunction() {
  let selectedActivityLevel = document.getElementById("activityLevel").value;
if (selectedActivityLevel == "sedentary")
  {activityLevel = 1.2;}
else if (selectedActivityLevel == "lightly active")
  {activityLevel = 1.375;}
else if (selectedActivityLevel == "active")
  {activityLevel = 1.55;}
else if (selectedActivityLevel == "highly active")
  {activityLevel = 1.725;}
else if (selectedActivityLevel == "athlete")
  {activityLevel = 1.9;}
}
//addition/subtraction of calories to support weight goal
var weightGoal;
function weightGoalFunction() {
  let selectedWeightGoal = document.getElementById("weightGoal").value;
if (selectedWeightGoal == "gain weight")
  {weightGoal = 300;}
else if (selectedWeightGoal == "maintain weight")
  {weightGoal = 0;}
else if (selectedWeightGoal == "lose weight")
  {weightGoal = -300;}
}

var table = document.getElementById("macros");
var row = table.insertRow(0);
var addName = row.insertCell(0);
var addQuantity = row.insertCell(1);
var addCalories = row.insertCell(2);
var addCarbs = row.insertCell(3);
var addProteins = row.insertCell(4);
var addFats = row.insertCell(5);

//calculation of macros based on calories
function macroCalculator() {
  age = document.getElementById("age").addEventListener("change",bmrFunction());
  height = document.getElementById("height").addEventListener("change",bmrFunction());
  weight = document.getElementById("weight").addEventListener("change",bmrFunction());
  var myCalories = Math.round(bmr*activityLevel + weightGoal);
  var selectedBodyType = document.getElementById("bodyType").value;

if (selectedBodyType == "ectomorph") {
  myCarbs = Math.round((0.55*myCalories)/4);
  myProteins = Math.round((0.25*myCalories)/4);
  myFats = Math.round((0.2*myCalories)/9);}
else if (selectedBodyType == "mesomorph") {
  myCarbs = Math.round((0.4*myCalories)/4);
  myProteins = Math.round((0.3*myCalories)/4);
  myFats = Math.round((0.3*myCalories)/9);}
else if (selectedBodyType == "endomorph") {
  myCarbs = Math.round((0.25*myCalories)/4);
  myProteins = Math.round((0.35*myCalories)/4);
  myFats = Math.round((0.4*myCalories)/9);}

//user output when "Calculate calories and macros" buttin is clicked
if (isNaN(myCalories) == true || isNaN(myCarbs) == true || myCarbs == undefined) {
 alert("Sorry, it was not possible to perform the calculation as there are incomplete fields above. Please check your details and try again.");}
else {
 addQuantity.innerHTML = "Allowance:";
 addCalories.innerHTML = myCalories;
 addCarbs.innerHTML = myCarbs + "g";
 addProteins.innerHTML = myProteins + "g";
 addFats.innerHTML = myFats + "g";
 }
}

//nutritional value of food items per 100g
const apple = {name: "Apple", calories: 52, carbs: 14, proteins: 0.3, fats: 0.2}
const banana = {name: "Banana", calories: 89, carbs: 23, proteins: 1.1, fats: 0.3}
const chickenBreast = {name: "Chicken Breast", calories: 165, carbs: 0, proteins: 31, fats: 3.6}
const broccoli = {name: "Broccoli", calories: 34, carbs: 7, proteins: 2.8, fats: 0.4}
const brownRice = {name: "Brown Rice", calories: 111, carbs: 23, proteins: 2.6, fats: 0.9}
const almonds = {name: "Almonds", calories: 579, carbs: 22, proteins: 21, fats: 50}
const salmon = {name: "Salmon", calories: 208, carbs: 0, proteins: 20, fats: 13}
const sweetPotato = {name: "Sweet Potato", calories: 86, carbs: 20, proteins: 1.6, fats: 0.1}
const oats = {name: "Oats", calories: 389, carbs: 66, proteins: 17, fats: 7}
const greekYoghurt = {name: "Greek Yoghurt", calories: 59, carbs: 3.6, proteins: 10, fats: 0.4}
const spinach = {name: "Spinach", calories: 23, carbs: 3.6, proteins: 2.9, fats: 0.4}
const egg = {name: "Egg", calories: 143, carbs: 1.1, proteins: 13, fats: 10}
const beef = {name: "Beef", calories: 250, carbs: 0, proteins: 26, fats: 15}
const orange = {name: "Orange", calories: 47, carbs: 12, proteins: 0.9, fats: 0.1}
const strawberry = {name: "Strawberry", calories: 32, carbs: 7.7, proteins: 0.7, fats: 0.3}
const blueberry = {name: "Blueberry", calories: 57, carbs: 14, proteins: 0.7, fats: 0.3}
const carrot = {name: "Carrot", calories: 41, carbs: 10, proteins: 0.9, fats: 0.2}
const avocado = {name: "Avocado", calories: 160, carbs: 9, proteins: 2, fats: 15}
const tomato = {name: "Tomato", calories: 18, carbs: 3.9, proteins: 0.9, fats: 0.2}
const potato = {name: "Potato", calories: 77, carbs: 17, proteins: 2, fats: 0.1}
const grapes = {name: "Grapes", calories: 69, carbs: 18, proteins: 0.7, fats: 0.2}
const cucumber = {name: "Cucumber", calories: 16, carbs: 3.6, proteins: 0.7, fats: 0.1}
const bellPepper = {name: "Bell Pepper", calories: 26, carbs: 6, proteins: 1, fats: 0.3}
const courgette = {name: "Courgette", calories: 17, carbs: 3.1, proteins: 1.2, fats: 0.3}
const aubergine = {name: "Aubergine", calories: 25, carbs: 6, proteins: 1, fats: 0.2}
const lettuce = {name: "Lettuce", calories: 15, carbs: 2.9, proteins: 1.4, fats: 0.2}
const pineapple = {name: "Pineapple", calories: 50, carbs: 13, proteins: 0.5, fats: 0.1}
const mango = {name: "Mango", calories: 60, carbs: 15, proteins: 0.8, fats: 0.4}
const watermelon = {name: "Watermelon", calories: 30, carbs: 8, proteins: 0.6, fats: 0.2}
const pear = {name: "Pear", calories: 57, carbs: 15, proteins: 0.4, fats: 0.1}
const peach = {name: "Peach", calories: 39, carbs: 10, proteins: 0.9, fats: 0.3}
const kiwi = {name: "Kiwi", calories: 61, carbs: 15, proteins: 1.1, fats: 0.5}
const quinoa = {name: "Quinoa", calories: 120, carbs: 21, proteins: 4.1, fats: 1.9}
const lentils = {name: "Lentils", calories: 116, carbs: 20, proteins: 9, fats: 0.4}
const chickpeas = {name: "Chickpeas", calories: 164, carbs: 27, proteins: 9, fats: 2.6}
const blackBeans = {name: "Black Beans", calories: 132, carbs: 24, proteins: 9, fats: 0.5}
const kidneyBeans = {name: "Kidney Beans", calories: 127, carbs: 23, proteins: 9, fats: 0.5}
const pintoBeans = {name: "Pinto Beans", calories: 143, carbs: 27, proteins: 9, fats: 0.7}
const navyBeans = {name: "Navy Beans", calories: 140, carbs: 26, proteins: 9, fats: 0.6}
const limaBeans = {name: "Lima Beans", calories: 113, carbs: 20, proteins: 7.8, fats: 0.6}
const peas = {name: "Peas", calories: 81, carbs: 14, proteins: 5.4, fats: 0.4}
const lamb = {name: "Lamb", calories: 294, carbs: 0, proteins: 25, fats: 21}
const beefSteak = {name: "Beef Steak", calories: 271, carbs: 0, proteins: 25, fats: 19}
const whiteBread = {name: "White Bread", calories: 265, carbs: 49, proteins: 9, fats: 3.2}
const cookedPasta = {name: "Pasta - cooked", calories: 131, carbs: 25, proteins: 5, fats: 1.1}
const sardines = {name: "Sardines", calories: 208, carbs: 0, proteins: 25, fats: 11.5}
const tuna = {name: "Tuna", calories: 132, carbs: 0, proteins: 29, fats: 0.8}
const cod = {name: "Cod", calories: 82, carbs: 0, proteins: 18, fats: 0.7}
const haddock = {name: "Haddock", calories: 74, carbs: 0, proteins: 17, fats: 0.5 }
const trout = {name: "Trout", calories: 148, carbs: 0, proteins: 20, fats: 7}
const lobster = {name: "Lobster", calories: 89, carbs: 0, proteins: 19, fats: 0.9}
const shrimp = {name: "Shrimp", calories: 99, carbs: 0.2, proteins: 24, fats: 0.3}
const scallops = {name: "Scallops", calories: 111, carbs: 5, proteins: 21, fats: 0.8}
const clams = {name: "Clams", calories: 74, carbs: 5, proteins: 12, fats: 0.9}
const mussels = {name: "Mussels", calories: 172, carbs: 7.4, proteins: 24, fats: 4.5}
const cheddarCheese = {name: "Cheddar Cheese", calories: 403, carbs: 1.3, proteins: 25, fats: 33}
const milk = { name: "Milk", calories: 61, carbs: 4.8, proteins: 3.2, fats: 3.3}
const butter = {name: "Butter", calories: 717, carbs: 0.1, proteins: 0.9, fats: 81}
const oliveOil = {name: "Olive Oil", calories: 884, carbs: 0, proteins: 0, fats: 100}
const peanutButter = {name: "Peanut Butter", calories: 588, carbs: 20, proteins: 25, fats: 50}
const tofu = {name: "Tofu", calories: 76, carbs: 1.9, proteins: 8, fats: 4.8}
const soyMilk = {name: "Soy Milk", calories: 54, carbs: 6.3, proteins: 3.3, fats: 1.8}
const tempeh = {name: "Tempeh", calories: 193, carbs: 9.4, proteins: 19, fats: 11}
const edamame = {name: "Edamame", calories: 121, carbs: 8.9, proteins: 11.9, fats: 5.2}
//*improvement - look at how user could add their own items

//array of food items
var food = [apple, banana, chickenBreast, broccoli, brownRice, almonds, salmon, sweetPotato, oats, greekYoghurt, spinach, egg, beef, orange, strawberry, blueberry, carrot, avocado, tomato, potato, grapes, cucumber, bellPepper, courgette, aubergine, lettuce, pineapple, mango, watermelon, pear, peach, kiwi, quinoa, lentils, chickpeas, blackBeans, kidneyBeans, pintoBeans, navyBeans, limaBeans, peas, lamb, beefSteak, whiteBread, cookedPasta, sardines, tuna, cod, haddock, trout, lobster, shrimp, scallops, clams, mussels, cheddarCheese, milk, butter, oliveOil, peanutButter, tofu, soyMilk, tempeh, edamame];

// function to populate select box
function foodSelect() {
  let foodOptions = food;
	selectedFood = document.getElementById("foodItem");
  selectedFood.options.length = 1;
  for (i = 0; i < foodOptions.length; i++) {selectedFood.options[selectedFood.length] = new Option(foodOptions[i].name, foodOptions[i]);
}}

//function to add items to table when "Add item" button is clicked
var calorieTotal = 0;
var carbTotal = 0;
var proteinTotal = 0;
var fatTotal = 0;

function nutritionCalculator() {
  const selectedFoodIndex = document.getElementById("foodItem").selectedIndex
  const selectedFood = food[selectedFoodIndex-1]
  const quantity = document.getElementById("foodWeight").value;
  
if (quantity == NaN || quantity == "" || selectedFood == undefined) {
  alert("Please check you have selected a food item and entered a quantity as it was not possible to add your item.");
}
else {
  var foodCalories = Math.round((quantity/100)*selectedFood.calories);
  var foodCarbs = Math.round((quantity/100)*10*selectedFood.carbs)/10;
  var foodProteins = Math.round((quantity/100)*10*selectedFood.proteins)/10;
  var foodFats = Math.round((quantity/100)*10*selectedFood.fats)/10;
  
  var table = document.getElementById("foodList");
  var row = table.insertRow(-1);
  var addName = row.insertCell(0);
  var addQuantity = row.insertCell(1);
  var addCalories = row.insertCell(2);
  var addCarbs = row.insertCell(3);
  var addProteins = row.insertCell(4);
  var addFats = row.insertCell(5);
  
  addName.innerHTML = selectedFood.name;
  addQuantity.innerHTML = quantity + "g";
  addCalories.innerHTML = foodCalories;
  addCarbs.innerHTML = foodCarbs + "g";
  addProteins.innerHTML = foodProteins + "g";
  addFats.innerHTML = foodFats + "g";
  
  var calorieColumn;
  var carbColumn;
  var proteinColumn;
  var fatColumn;
  var numberOfRows = table.rows.length;
  for (i = 1; i < numberOfRows; i++) {
    var calorieValues = table.rows[i].cells[2].innerText
    var calorieColumn = Math.round(calorieValues)
    var carbValues = (table.rows[i].cells[3].innerText).replace("g","");
    var carbColumn = Math.round(carbValues*10)/10;
    var proteinValues = (table.rows[i].cells[4].innerText).replace("g","");
    var proteinColumn = Math.round(proteinValues*10)/10;
    var fatValues = (table.rows[i].cells[5].innerText).replace("g","");
    var fatColumn = Math.round(fatValues*10)/10;}
    calorieTotal += calorieColumn;
    carbTotal += carbColumn;
    proteinTotal += proteinColumn;
    fatTotal += fatColumn;
    if (table.rows[i-2].cells[1].innerText == "TOTAL") {
      table.deleteRow(i-2);}
    else {}
  }
}
//*improvement - look into adding a delete button on each row

//function to sum columns in order to calculate totals
function sumFunction() {
  var table = document.getElementById("foodList");
  var sumRow = table.insertRow(-1);
  var sumColumn1 = sumRow.insertCell(0);
  var sumTotal = sumRow.insertCell(1);
  var sumCalorie = sumRow.insertCell(2);
  var sumCarb = sumRow.insertCell(3);
  var sumProtein = sumRow.insertCell(4);
  var sumFat = sumRow.insertCell(5);
  
  sumTotal.innerHTML = "TOTAL";
  sumCalorie.innerHTML = Math.round(calorieTotal); 
  sumCarb.innerHTML = Math.round(carbTotal*10)/10 + "g";
  sumProtein.innerHTML = Math.round(proteinTotal*10)/10 + "g";
  sumFat.innerHTML = Math.round(fatTotal*10)/10 + "g";
  
  var numberOfRows = table.rows.length;
  for (i = 1; i < numberOfRows; i++) {
    if (table.rows[i].cells[1].innerText == "TOTAL" && table.rows[i-1].cells[1].innerText == "TOTAL") {
      table.deleteRow(i-1);}
    else {}
  }
}

//function to calculate and display remaining macros
function remainingMacros() {
  var myCalories = Math.round(bmr*activityLevel + weightGoal);
  var remainingCalories = myCalories - calorieTotal;
  var remainingCarbs = myCarbs - carbTotal;
  var remainingProteins = myProteins - proteinTotal;
  var remainingFats = myFats - fatTotal;
  
  if (isNaN(myCarbs) == false) {
  var table = document.getElementById("macros");
  var row = table.insertRow(1);
  var addName = row.insertCell(0);
  var addQuantity = row.insertCell(1);
  var addCalories = row.insertCell(2);
  var addCarbs = row.insertCell(3);
  var addProteins = row.insertCell(4);
  var addFats = row.insertCell(5);
  
  addQuantity.innerHTML = "Remaining:";
  addCalories.innerHTML = Math.round(remainingCalories);
  addCarbs.innerHTML = Math.round(remainingCarbs*10)/10 + "g";
  addProteins.innerHTML = Math.round(remainingProteins*10)/10 + "g";
  addFats.innerHTML = Math.round(remainingFats*10)/10 + "g";
  
  var numberOfRows = table.rows.length;
  if (numberOfRows > 2) {
      table.deleteRow(2);}
  else {}
  }
  else {}
}