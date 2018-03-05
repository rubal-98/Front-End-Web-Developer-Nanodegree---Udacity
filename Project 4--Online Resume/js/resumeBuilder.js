var work = {
    'jobs': [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015-2019",
        "location": "Chitkara University, Rajpura, Punjab",
        "description": "I am doing graduation in B.tech CSE."
    }]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var projects = {
    "projects": [{
            "title": "Dance School App",
            "dates": "2016",
            "description": "This is a basic app about a Dance School",
            "images": ["images/dance.jpg"]
        },
        {
            "title": "HTML/CSS notes",
            "dates": "2016",
            "description": "This consists of basic information about HTML/CSS",
            "images": ["images/html.png"]
        },
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        for (var j = 0; j < projects.projects[i].images.length; j++)
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
    }
};

projects.display();

var bio = {
    "name": "SAVREEN KAUR",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-987654321",
        "email": "sksethi1998@gmail.com",
        "github": "savreen",
        "location": "Yamunanagar"
    },
    "welcomeMessage": "Never let your fear decide your Future",
    "skills": ["Java", "Python", "HTML/CSS", "C, C++"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedpic);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedname);
    var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcome);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedlocation);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Sacred Heart Convent Sr. Sec. School ",
        "location": "Sacred Heart Convent School, Jagadhri, Haryana",
        "degree": "Secondary School",
        "majors": ["Non-Medical"],
        "dates": "2015",
        "url": "www.shcsjagadhri.org/"
    }, {
        "name": "Chitkara University",
        "location": "Chitkara University, Rajpura, Punjab",
        "degree": ["B.E"],
        "majors": "Computer Science",
        "dates": "2015-2019",
        "url": "www.chitkara.edu.in"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedlocation);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
        formattedUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
        formattedUrl = formattedUrl.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedUrl);
    }
    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedDate);
        formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedUrl);
    }
};

education.display();

$('#mapDiv').append(googleMap);
