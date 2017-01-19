/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").html("<script> var x = 299792458; var y = 10000000; var z = x / y; document.getElementById("main").innerHTML = z; </script>");

 // $("#main").append("<script type="text/javascript">  	var x = 299792458;  	var y = 10000000; var z = (x / y); document.getElementById("main").innerHTML = z; </script>");

 // var firstName = "sanket";
 // var  age = 28;
 // var awesomeThoughts = "I am Sanket I am awesome"

 // var funThoughts = awesomeThoughts.replace("awesome","Fun"); 
 // console.log(awesomeThoughts);
 // console.log(funThoughts);
 // $("#main").append(funThoughts);

 // var name = "Sanket";
 // var role = "Web Developer";
 // var formattedName = HTMLheaderName.replace("%data%",name);
 // $("#header").prepend(formattedName);
 // var formattedRole = HTMLheaderRole.replace("%data%",role);
 // $("#header").append(formattedRole);


// var name = "audacity"

// var extract = name.slice(-7);
// $("#main").append(extract);

// var skills = ["awesomeness", "programming" ,"teaching", "js"]
// $("#header").append(skills[0]);

// var sampleArray = [0,0,7];

// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
//     // Your code should make newArray equal to an array that has the same
//     // values as _array, but the last number has increased by one.
    
//     // For example:
//     // _array = [1, 2, 3];
//     // turns into:
//     // newArray = [1, 2, 4];
    
//     // Your code goes in here!
//     newArray = sampleArray;
//     // newArray[(sampleArray.length-1)] = newArray[(newArray.length-1)] + 1
//     var pop = sampleArray.pop();
//     pop = pop + 1;
//     newArray.push() = pop;
//     // Don't delete this line!
//     return newArray;
// };

// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));


// var s = "sankEt MeShram"

// var w = s.indexOf(' ');
// s = s.charAt(0).toUpperCase() + s.slice(1,w).toLowerCase() + ' ' + s.slice((w+1)).toUpperCase();
// console.log(s);
// var role = "web developer";
// // // var image;
var bio = {
	"name" : "Sanket Meshram",
	"role" : "role",
	// "contact" {
	// 	"mobile" : 9029493678,
	// 	"email" : "",
	// 	"github" : "",
	// 	"twitter" : "",
	// 	"location" : ""
	// },
	"welcomeMessage" : "Hiii",
	"age" : 27,
	"skills" : ["awesomeness", "programming" ,"teaching", "js"],
	"bioPic" : "images/fry.jpg"
};

// // $("#main").prepend(bio.name);
// // $("#main").append(bio.role);
// // $("#main").append(bio.contact);
// // $("#main").append(bio.welcomeMessage);
// // $("#main").append(bio.age);
// // $("#main").append(bio.bioPic);
// // $("#main").prepend(bio.skills);

var work = {
	"jobs" : [
		{
			"employer" : "company1",
			"title" : "Manager",
			"location" : "Mumbai",
			"dates" : "23/0/2015",
			"description" : "Challeng1"

		},
		{
			"employer" : "company2",
			"title" : "Manager2",
			"location" : "Delhi",
			"dates" : "23/0/2016",
			"description" : "Challeng2"

		},
	]

};

// work.city = "Mumbai";

// // project object

// var projects = {
// 	"projects" :[
// 		{
// 			"title" : "Work1",
// 			"dates" : "23/11/2015",
// 			"description" : "good",
// 			"images" : ""
// 		},
// 		{
// 			"title" : "Work1",
// 			"dates" : "23/11/2015",
// 			"description" : "good",
// 			"images" : ""

// 	}
// 	]
// 		}
	


//  education object

// var education = {

// };
// education.lastScl = "YMT";

// $("#main").append(work["city"]);
// $("#main").prepend(education.lastScl);



// // my Json

// var education = {
// 	"schools" : [
// 	{
// 		"name" : "MSAS",
// 		"location" : "N M",
// 		"degree dates" : "",
// 		"url" :
// 	},

// 	{
// 		"name" : "MGM",
// 		"location" : "KA",
// 		"degree dates" : "",
// 		"url" :	
// 	}
// 	]

// 	"majors" : [
// 		{

// 		}

// 	]

// 	"onlineCourses" : [
// 		{
// 			"title" : "",
// 			"schools" : "",
// 			"dates" : "",
// 			"url" : ""
// 		}
// 	]

// }


// // if (bio.skills.length != 0) 


// // 	var s1 = HTMLskills.replace("%data%", skills);
// // 	$("#header").append(HTMLskillsStart);
// // // 	$("#skills").append(s1);
	
// // // }

var name = "sanket MeShram";

$("#header").append(name);


var formattedName = HTMLheaderName.replace("%data%",name);
 $("#header").prepend(formattedName);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 $("#header").append(formattedRole);

// flow control 1/16 if{}
if(bio.skills.length!=0)
	{
		// console.log(bio.skills);
		$("#header").append(HTMLskillsStart);
		formttedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formttedSkill);
		formttedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formttedSkill);
		formttedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formttedSkill);
		formttedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formttedSkill);

}


// for(var i = 0; i <= 9; i++){
// 	console.log(i);
// }

// 4/16 for loop
// var countries = ["france", "italy", "germany" , "England"];

// for(country in countries){
// 	console.log(countries[country]);
// };

// using for in with object
// var myObj = {
// 	'country1' : 'france',
// 	'country2' : 'England',
// 	'country3' : 'india',
// 	'country4' : 'Germany'
// };

// for(key in myObj){
// 	if(myObj.hasOwnProperty(key)){
// 		console.log(myObj[key]);
// 	}
// }

function displayWork(){
// using for in
var job = 0;
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	// work.jobs.forEach(function(element)){
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployer + formattedJob + formattedDates + formattedLocation + formattedDescription);


	// $("#workExperience").append(HTMLworkStart);
	// }
	 console.log(formattedEmployer);
}

}

//9/16 click locations

$(document).click(function(loc) {
	var x = event.pageX;
	var y = event.pageY;
	logClicks(x,y);
	// console.log(x,y);

});


 // console.log(work.jobs[0].employer);
 //  console.log(work.jobs[1].employer);

 function localization(work){
 	var l = [];
 	var job; 
 	// var jo = work.jobs;
 	// console.log(work.jobs);
 	// work.jobs.forEach(function(j))
 	// work.jobs.forEach(function(job))
 	for(job in work. jobs)

 	{
 		l.push(work.jobs[job].location);
 	}
	console.log(l);

 	return l;
 }

 localization(work);


$("#main").append(internationalizeButton);
   function inName(name) {
	var n = name;
	var w = n.indexOf(' ');
	name = n.charAt(0).toUpperCase() + n.slice(1,w).toLowerCase() + ' ' + n.slice((w+1)).toUpperCase();
	return(name);
	console.log(name);
}
var na = inName(name);

console.log(na);
