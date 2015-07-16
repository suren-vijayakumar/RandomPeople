//Utility function
//A simple random number generator
$(document).ready(function(){

	function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$("#newPersonButton").on("click",function(){
var newPersonAge = randomNumber(1,100);
var newPersonweight = randomNumber(1,100);
var newPersonGendernumber = randomNumber(1,100);

if(newPersonGendernumber>0 && newPersonGendernumber<=49){

	newPersonGender = "Male";
}
else if(newPersonGendernumber>49 && newPersonGendernumber<=100){
	newPersonGender = "Female";
}

function person(age,gender,weight){
     
     this.age = age;
     this.gender = gender;
     this.weight = weight;
	console.log("New Person is " + age + " years old and is a " + gender + " and weighs " + weight + " lbs");
	
}; 

person(newPersonAge,newPersonGender,newPersonweight);

var maleFirstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric"];
var femaleFirstName = ["Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
var lastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
var firstNameChoice;

if (newPersonGender === "Male") {
firstNameChoice = maleFirstName[randomNumber(0,9)];

}

else if (newPersonGender === "Female"){
firstNameChoice = femaleFirstName[randomNumber(0,9)];

}

var lastNameChoice = lastName[randomNumber(0,9)];
	
	$(".newPersonName").append("<p> New Person's name is " + firstNameChoice + " " +lastNameChoice + " </p>");
	$(".newPersonAge").append("<p> is " + age + " years old  </p>");
	$(".newPersonGender").append("<p> and is a " + gender + " </p>");
	$(".newPersonWeight").append("<p> and weighs " + weight + " lbs </p>");
});
});
