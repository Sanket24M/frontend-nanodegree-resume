 
// group 1

 
	var bio = {	
		"name" : "Sanket",
		"role" : "Web Developer",
		"contacts" : [{
			"mobile" : 9090909090,
			"email" : "sanketm4u@gmail.com",
			"twitter" : "@_SanketMeshram",
			"github" : "Sanket24M",
			"location" : "Mumbai"
		}],	
		"welcomeMessage" : 
		"Hiii Welcome to My resume page",
		"bioPic" : 'images/fry.jpg',
		"skills" : ["awesomeness", "programming" ,"teaching", "js"]
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
			"employer" : "company1",
			"title" : "Manager",
			"location" : "Bay area",
			"dates" : "23/0/2015",
			"description" : "Challeng1"

		},
		{
			"employer" : "company2",
			"title" : "Manager2",
			"location" : "New York",
			"dates" : "23/0/2016",
			"description" : "Challeng2"

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
			"title" : "Work1",
			"dates" : "23/11/2015",
			"description" : "good",
			"image" : 'images/197x148.gif'
		},
		{
			"title" : "Work2",
			"dates" : "23/11/2016",
			"description" : "good,excelled",
			"image" : 'images/197x148.gif'

		}
	]
};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		var formattedData = formattedTitle + formattedDates + formattedDescription + formattedImage;
		$(".project-entry:last").append(formattedData);
	}
};

projects.display();

var education = {
	"schools" : [
	{
		"name" : "MGM",
		"location" : "Navi Mumbai",
		"degree" : "Engineering",
		"major" : "Computer Engineering"
	},
	{
		"name" : "Mumbai University",
		"location" : "Navi Mumbai",
		"degree" : "Master in Business Administration",
		"major" :	"Finance"
	}],
	"onlineCourses" : [
		{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
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
		var formattedData = formattedName +  formattedLocation + formattedDegree + formattedMajor;
		$(".education-entry:last").append(formattedData);
		console.log(formattedData);	
	}
	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedData = HTMLonlineClasses + formattedTitle + formattedSchool + formattedDates + formattedUrl; 
		$(".education-entry:last").append(formattedData);
	}
};

education.display();


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





 
	


