// total in cup
var sugarCount = 0;
var creamCount = 0;
// statements 
var coffeeText = ["Longing for home, that", "Headlong morning, your", "Matter-of-course, my", "A hand warmer, our"];
var teaText = ["Fish tank savor, this", "Yesterday’s rind, her", "Pink derangement, their", "Some distant spice, its"];
var sugarText = ["absence, our abnegation:", "single slow slow honey drop,", "flurry of new-fallen zeal—", "crystal brittle toothache crunch,"];
var creamText = ["black as the night sky.", "peaking through the clouds.", "bright enough to taste.", "washing out the dawn."];
// moneys
var subtotal = 0;
var tax = subtotal * 0.089;
var total = subtotal + tax;
// global machine state
var coffeeChoice = false;
var teaChoice = false;


//chooses coffee
function chooseCoffee() {
    coffeeChoice = true;
    teaChoice = false;
    //switches to coffee options
    document.getElementById("beverageTextLine").innerHTML = "Please, choose a blend of coffee!";
    document.getElementById("optionText1").innerHTML = "Yirgacheffe";
    document.getElementById("optionText2").innerHTML = "Dark Roast";
    document.getElementById("optionText3").innerHTML = "Light Roast";
    document.getElementById("optionText4").innerHTML = "Decaf";
}

// chooses tea
function chooseTea(){
    teaChoice = true;
    coffeeChoice = false;
    //switches to tea options
    document.getElementById("beverageTextLine").innerHTML = "Please, choose a blend of tea!";
    document.getElementById("optionText1").innerHTML = "Green";
    document.getElementById("optionText2").innerHTML = "Earl Grey";
    document.getElementById("optionText3").innerHTML = "Hibiscus";
    document.getElementById("optionText4").innerHTML = "Chai";
}

// selects an option for tea or coffee, sets a subtotal, and prints first poem line
function optionSelect(){
    if ((document.getElementById("optionButton1").checked) && (teaChoice == true) && (coffeeChoice == false)){
        console.log(teaText[0]);
        document.getElementById("beverageTextLine").innerHTML = teaText[0];
        subtotal = 1.75;

    } else if ((document.getElementById("optionButton2").checked) && (teaChoice == true) && (coffeeChoice == false)){
        console.log(teaText[1]);
        document.getElementById("beverageTextLine").innerHTML = teaText[1];
        subtotal = 1.75;

    } else if ((document.getElementById("optionButton3").checked) && (teaChoice == true) && (coffeeChoice == false)){
        console.log(teaText[2]);
        document.getElementById("beverageTextLine").innerHTML = teaText[2];
        subtotal = 2.25;

    } else if ((document.getElementById("optionButton4").checked) && (teaChoice == true) && (coffeeChoice == false)){
        console.log(teaText[3]);
        document.getElementById("beverageTextLine").innerHTML = teaText[3];
        subtotal = 2.95;  
    
    } else if ((document.getElementById("optionButton1").checked) && (teaChoice == false) && (coffeeChoice == true)){
            console.log(coffeeText[0]);
            document.getElementById("beverageTextLine").innerHTML = coffeeText[0];
            subtotal = 2.85; 

    } else if ((document.getElementById("optionButton2").checked) && (teaChoice == false) && (coffeeChoice == true)){
            console.log(coffeeText[1]);
            document.getElementById("beverageTextLine").innerHTML = coffeeText[1];
            subtotal = 2.15;
    
    } else if ((document.getElementById("optionButton3").checked) && (teaChoice == false) && (coffeeChoice == true)){
            console.log(coffeeText[2]);
            document.getElementById("beverageTextLine").innerHTML = coffeeText[2];
            subtotal = 2.15;
    
    } else if ((document.getElementById("optionButton4").checked) && (teaChoice == false) && (coffeeChoice == true)){
            console.log(coffeeText[3]);  
            document.getElementById("beverageTextLine").innerHTML = coffeeText[3];
            subtotal = 2.45;
        }
    }




// sets 0 sugar, displays second poem line
function noSugar(){ 
    sugarCount = 0;
    console.log("sugar count " + sugarCount);
    console.log(sugarText[sugarCount]);
    document.getElementById("sugarTextLine").innerHTML = sugarText[0];
    document.getElementById("sugarButtonText").innerHTML = "ADD SUGAR";
    document.getElementById("subtotalLine").innerHTML = "Sugars Added: " + sugarCount + "/3";
}

// sets 0 cream, displays third poem line
function noCream(){
    creamCount = 0;
    console.log("cream count " + creamCount);
    console.log(creamText[creamCount]);
    document.getElementById("creamTextLine").innerHTML = creamText[0];
    document.getElementById("creamButtonText").innerHTML = "ADD CREAM";
    document.getElementById("taxLine").innerHTML = "Creams Added: " + creamCount + "/3";

}

// adds 1 sugar, displays second poem line
function addSugar() {
    sugarCount++;
    if (sugarCount > 3){
        sugarCount = 3;
    }
    console.log("sugar count " + sugarCount);
    console.log(sugarText[sugarCount]);
    document.getElementById("sugarTextLine").innerHTML = sugarText[sugarCount];
    document.getElementById("sugarButtonText").innerHTML = "ADD MORE SUGAR";
    document.getElementById("subtotalLine").innerHTML = "Sugars Added: " + sugarCount + "/3";
}

// adds 1 cream, displays third poem line
function addCream() {
    creamCount++;
    if(creamCount > 3){
        creamCount = 3;
    }
    console.log("cream count " + creamCount);
    console.log(creamText[creamCount]);
    document.getElementById("creamTextLine").innerHTML = creamText[creamCount];
    document.getElementById("creamButtonText").innerHTML = "ADD MORE CREAM";
    document.getElementById("taxLine").innerHTML = "Creams Added: " + creamCount + "/3";
}

// gulps beverage, displays subtotal tax and total
function gulp(){
    console.log("sugar count: "+ sugarCount +", cream count: "+ creamCount + ", coffee choice: "+ coffeeChoice + ", tea choice: "+ teaChoice + ", Poem: ");
    if (coffeeChoice==true){
        // prints coffee, cream, and sugar text
        console.log("subtotal $"+ subtotal + ", tax $" + tax.toFixed(2) + ", total $" + total.toFixed(2));
        document.getElementById("sugarTextLine").innerHTML = sugarText[sugarCount];
        document.getElementById("creamTextLine").innerHTML = creamText[creamCount];
    } else if (teaChoice==true){
        // prints tea, cream, and sugar text
        console.log("subtotal $"+ subtotal + ", tax $" + tax.toFixed(2) + ", total $" + total.toFixed(2));
        document.getElementById("sugarTextLine").innerHTML = sugarText[sugarCount];
        document.getElementById("creamTextLine").innerHTML = creamText[creamCount];
    } else {
        console.log("No Beverage Chosen!");
        document.getElementById("beverageTextLine").innerHTML = "Error: Please Select a Beverage!";
    }
    tax = subtotal * 0.089;
    total = subtotal + tax;
    document.getElementById("subtotalLine").innerHTML = "subtotal: $"+ subtotal;
    document.getElementById("taxLine").innerHTML = "tax: $" + tax.toFixed(2);
    document.getElementById("totalLine").innerHTML = "total: $" + total.toFixed(2);
}

//resets page and values
function reset(){
    sugarCount = 0;
    creamCount = 0;
    coffeeChoice = false;
    teaChoice = false; 
    subtotal = 0;
    document.getElementById("optionText1").innerHTML = "Please Select";
    document.getElementById("optionText2").innerHTML = "A Delicious";
    document.getElementById("optionText3").innerHTML = "Beverage First";
    document.getElementById("optionText4").innerHTML = "Thank You";
    document.getElementById("optionButton1").checked = false;
    document.getElementById("optionButton2").checked = false;
    document.getElementById("optionButton3").checked = false;
    document.getElementById("optionButton4").checked = false;
    console.log("sugar count: "+ sugarCount +", cream count: "+ creamCount + ", coffee choice: "+ coffeeChoice + ", tea choice: "+ teaChoice + ", all options and prices reset");
    document.getElementById("beverageTextLine").innerHTML = "";
    document.getElementById("sugarTextLine").innerHTML = "";
    document.getElementById("creamTextLine").innerHTML = "";
    document.getElementById("subtotalLine").innerHTML = "";
    document.getElementById("taxLine").innerHTML = "";
    document.getElementById("totalLine").innerHTML = "";
    document.getElementById("sugarButtonText").innerHTML = "ADD SUGAR";
    document.getElementById("creamButtonText").innerHTML = "ADD CREAM";
}
