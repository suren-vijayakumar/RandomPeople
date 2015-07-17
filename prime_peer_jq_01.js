//Utility function
//A simple random number generator
$(document).ready(function(){

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
    }
    
    function person(age,gender,weight){
		     
		     this.age = age;
		     this.gender = gender;
		     this.weight = weight;
			//console.log("New Person is " + age + " years old and is a " + gender + " and weighs " + weight + " lbs"); test code
			
		}; 

	$("#newPersonButton").on("click",function(){
		var newPersonAge = randomNumber(1,100)
		var newPersonweight = randomNumber(1,100);
		var newPersonGendernumber = randomNumber(0,1);
		var maleFirstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric"];
		var femaleFirstName = ["Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
		var lastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
		var lastNameChoice = lastName[randomNumber(0,9)];
		var firstNameChoice;

		if(newPersonGendernumber === 0){
			newPersonGender = "Male";
			firstNameChoice = maleFirstName[randomNumber(0,9)];
		}
		else {
			newPersonGender = "Female";
			firstNameChoice = femaleFirstName[randomNumber(0,9)];
		}
		
		//person(newPersonAge,newPersonGender,newPersonweight); test code.

		$(".newPersonName").children().remove();
		$(".newPersonName").append("<p> New Person's name is " + firstNameChoice + " " +lastNameChoice + " </p>");
		$(".newPersonAge").children().remove();
		$(".newPersonAge").append("<p> is " + age + " years old  </p>");
		$(".newPersonGender").children().remove();
		$(".newPersonGender").append("<p> and is a " + gender + " </p>");
		$(".newPersonWeight").children().remove();
		$(".newPersonWeight").append("<p> and weighs " + weight + " lbs </p>");
		

	});
});
