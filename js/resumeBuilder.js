var charEscape = function(_html) {
	var newHTML = _html;
	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&lt;");
	return newHTML;
};

var bio = {
	"firstname": "Brian",
	"lastname": "Grimm",
	"role": "Director of Awesomeness",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "john@example.com",
		"github": "gitsome",
		"location": "Portland, OR"
		},
	"welcomeMessage": "I see the radiant body where man has taken his first steps into a frontier that will never end. I'd have given my right eye to be an astronaut in the nothingness of space.",
	"skills": [
		"awesomeness",
		"programming",
		"onomatopoeia",
		"arthropodolgy"
		],
	"bioPic": "http://lorempixel.com/250/200"
}

var education = {
	"schools": [
		{
			"name": "Oregon State University",
			"location": "Corvallis, OR",
			"degree": "MS",
			"majors": ["Mechanical Engineering"],
			"dates": 2009,
			"url": "http://example.com"
		},
		{
			"name": "Oregon Institute of Technology",
			"location": "Klamath Falls, OR",
			"degree": "BS",
			"majors": ["Mechanical Engineering Technology"],
			"dates": 2006,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "www.udacity.com/sources/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "ESCO Corp",
			"title": "Team Lead",
			"location": "Portland, OR",
			"dates": "January 3000 - Future",
			"description": "Stuff and things"
		},
		{
			"employer": "Oregon State University",
			"title": "Teaching Assistant",
			"location": "Corvallis, OR",
			"dates": "January 2000 - January 2999",
			"description": "Stuff and things"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Big Project",
			"dates": "2014",
			"description": "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
			"images" : [
				"http://lorempixel.com/200/150",
				"http://lorempixel.com/200/150"
				]
		},
		{
			"title": "Medium Project",
			"dates": "2014",
			"description": "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
			"images" : [
				"http://lorempixel.com/200/150",
				"http://lorempixel.com/200/150",
				]
		}
	]
}

// $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
// $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#header").append(HTMLskillsStart);

for (skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (online in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));