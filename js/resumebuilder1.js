 
// group 1

 
	var bio = {	
		"name" : "Sanket Meshram",
		"role" : "Full Stack Developer",
		"contacts" : [{
			"mobile" : 9090909090,
			"email" : "sanketm4u@gmail.com",
			"twitter" : "@_SanketMeshram",
			"github" : "Sanket24M",
			"location" : "Mumbai"
		}],	
		"welcomeMessage" : 
		"Stories of Galadriel's life prior to The Lord of the Rings appear in both The Silmarillion and Unfinished Tales. Galadriel was the only daughter and youngest child of Finarfin, prince of the Noldor, and of Eärwen, who was cousin to Lúthien. Her elder brothers were Finrod Felagund, Angrod, and Aegnor. She was born in Valinor during the Years of the Trees.",
		"bioPic" : 'images/fry.jpg',
		"skills" : ["Kind", "Considerate" ,"Persistent", "Being Contented"]
	};


	bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedPic, formattedMsg);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		formttedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formttedSkill);
	};

	for (contact in bio.contacts) {
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedlocation);
	};
};

bio.display();

// work object

var work = {
	"jobs" : [
		{
			"employer" : "Hogwards",
			"title" : "Full Stack Dev",
			"location" : "Delhi",
			"dates" : "2015",
			"description" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."

		},
		{
			"employer" : "E-commerce",
			"title" : "Full Stack Dev",
			"location" : "Bangalore",
			"dates" : "2016",
			"description" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring. "	

		},
	]

};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedData = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedData);
		// console.log(formattedData);
	}
};

work.display();


// projects object

var projects = {
	"projects" :[
		{
			"title" : "The Hobbit: The Desolation of Smaug ",
			"dates" : "23/11/2015",
			"description" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.", 
			"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
		},
		{
			"title" : "The Hobbit: The Battle of the Five Armies",
			"dates" : "2014",
			"description" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.", 
			"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]

		}
	]
};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		// var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		var formattedData = formattedTitle + formattedDates + formattedDescription ;
		// + formattedImage;
		$(".project-entry:last").append(formattedData);
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

projects.display();


// education object

var education = {
	"schools" : [
	{
		"name" : "Mahatma Gandhi Mission's College Of Engineering",
		"location" : "Navi Mumbai",
		"degree" : "Bachelor of Engineering",
		"major" : "Computer Engineering",
		"dates" : "2015"
	},
	{
		"name" : "Mumbai University",
		"location" : "Navi Mumbai",
		"degree" : "Master in Business Administration",
		"major" : "Finance",
		"dates" : "2017"
	}],
	"onlineCourses" : [
		{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016 - 2017",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedData = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajor;
		$(".education-entry:last").append(formattedData);
		// console.log(formattedData);	
	}
	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedData = HTMLonlineClasses + formattedTitle + formattedSchool  + formattedDates  + formattedUrl; 
		$(".education-entry:last").append(formattedData);
		// console.log(formattedSchool);
	}
};

education.display();

$("#main").append(internationalizeButton);
   function inName(name) {
	var n = name;
	var w = n.indexOf(' ');
	name = n.charAt(0).toUpperCase() + n.slice(1,w).toLowerCase() + ' ' + n.slice((w+1)).toUpperCase();
	return(name);
	console.log(name);
}
var na = inName(name);

$("#mapDiv").append(googleMap);

	// if(bio.skills.length!=0)
// 	{
// 		console.log(bio.skills);
// 		formttedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 		$("#skills").append(formttedSkill);
// 		formttedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// 		$("#skills").append(formttedSkill);
// 		formttedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// 		$("#skills").append(formttedSkill);
// 		formttedSkill = HTMLskills.replace("%data%", bio.skills[3]);
// 		$("#skills").append(formttedSkill);

// }			
	

// }

// 		$("#topContacts").append(formattedPic);
	// 		$("#topContacts").append(formattedMsg);
	// $("#header");

	

	// if (bio.contacts.length() !== 0)
	
	
			


			



			// var working = HTMLcontactGeneric.replace("%contact%")



			// var formattedcontactList = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedlocation;
			// $("#topContacts").append(formattedMsg);

			// var formattedcontactGeneric = HTMLcontactGeneric;
			// // replace("%contact%",formattedcontactList);			
			// // $("#topcontacts").append(formattedcontactGeneric);
			// console.log(formattedcontactList);

			// // $("#header").prepend(formattedName);


// 





 
	


