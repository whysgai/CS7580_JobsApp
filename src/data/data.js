export const LANGUAGES = {
    ALL: "All"
    PYTHON: "Python",
    C: "C",
    VBA: "VBA",
    JAVASCRIPT: "JavaScript",
    PHP: "PHP",
    JAVA: "Java" 
    // languages : [
    //     "Python",
    //     "C++",
    //     "VBA",
    //     "JavaScript",
    //     "PHP",
    //     "Java"
    // ]
};

export const ONBOARDING = {
    INTRO: "intro",
    SEARCHED: "searched",
    SAVED: "saved",
    SEEN: "seen",
    SORTED: "sorted"
}

export const users = {
    users : [
        {
            username: "newuser",
            password: "1234",
            saved: [],
            onboarding: {
                intro: false,
                searched: false,
                saved: false,
                seen: false,
                sorted: false
            }
        },
        {
            username: "adeptuser",
            password: "1234",
            saved: [2],
            onboarding: {
                intro: true,
                searched: true,
                saved: true,
                seen: false,
                sorted: false
            }
        },
        {
            username: "expertuser",
            password: "1234",
            saved: [0, 2, 3],
            onboarding: {
                intro: true,
                searched: true,
                saved: true,
                seen: true,
                sorted: true
            }
        }   
    ]
};

export const jobs = {
    jobs : [
        // {
        //     title : "",            
        //     company : "",
        //     description : "",
        //     language : "",
        //     pay : 0,
        //     saves : 0
        // }
        {
            id : "001",
            title : "Lorem",
            company: "Mann Co.",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis arcu id nulla vulputate, rhoncus varius magna ultricies. Aliquam laoreet libero in elit tincidunt ullamcorper. Duis in finibus lorem. Etiam quis posuere lectus, vel accumsan nunc. Suspendisse facilisis elit velit, sit amet dapibus lectus mattis in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer venenatis a nulla vitae dapibus. Duis euismod quam interdum dui tempor malesuada.",
            language: [LANGUAGES.PYTHON],
            pay: 2,
            saves: 1,
        },
        {
            // id : "002",
            title : "Aliquam",            
            company : "Aperture Science",
            description : "Aliquam efficitur tellus erat, at mollis eros facilisis in. In scelerisque tortor purus, vel porttitor dui vestibulum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur mattis elementum sapien, eget interdum nisl consequat id. Aliquam ac leo et ex aliquam interdum eget scelerisque enim. Aliquam erat volutpat. Nulla placerat posuere arcu non semper.",
            language : [LANGUAGES.C],
            pay : 4,
            saves : 0

        },
        {
            // id : "003",
            title : "Nulla",            
            company : "Tesladyne Industries",
            description : "Nulla ultrices sem eu lacus fringilla scelerisque. Aenean vitae nibh congue magna interdum suscipit at ac libero. Aliquam at sapien sit amet urna fringilla placerat. In malesuada leo in ultricies dignissim. Nulla vestibulum suscipit turpis nec fringilla. Nullam id volutpat libero. Ut vehicula bibendum blandit. Sed porttitor eget ipsum pharetra imperdiet. Fusce feugiat at lacus et accumsan.",
            language : [LANGUAGES.JAVASCRIPT],
            pay : 1,
            saves : 2
        },
        {
            // id : "004",
            title : "Aenean",            
            company : "Wayne Enterprises",
            description : "Aenean fermentum dui dolor, a porttitor turpis dictum auctor. Praesent non ipsum urna. Phasellus imperdiet, lectus sollicitudin hendrerit finibus, urna mauris suscipit lectus, eu porttitor orci ante eu leo. Quisque ac neque lorem. Quisque nec sapien nec dui pulvinar viverra. Nulla facilisi. Quisque eu elit id nisl congue semper eget non odio.",
            language : [LANGUAGES.JAVASCRIPT, LANGUAGES.PYTHON],
            pay : 5,
            saves : 1
        },
        {
            // id : "005",
            title : "Maecenas",            
            company : "Black Mesa",
            description : "Maecenas in vehicula sem. Cras auctor commodo convallis. Cras at eros a eros sagittis porttitor id ac augue. Suspendisse aliquam ac ante vitae commodo. Nulla vestibulum ut risus sed lobortis. Sed quis mauris eget velit maximus dictum sed non augue. Aliquam orci sem, malesuada sit amet orci ut, vehicula bibendum enim. Proin in semper dolor. Fusce eget diam ac justo faucibus sodales vulputate quis tellus. Fusce dictum pulvinar enim vitae elementum. Curabitur quis commodo mauris. Etiam non ullamcorper magna, ac posuere metus. In nec justo ac augue ornare volutpat id a diam.",
            language : [LANGUAGES.PHP, LANGUAGES.PYTHON],
            pay : 3,
            saves : 0
        },
        {
            // id : "006",
            title : "Nunc finibus",            
            company : "Anaheim Electronics",
            description : "Nunc finibus lobortis est quis rhoncus. Quisque blandit arcu a eros aliquam, ac convallis lectus laoreet. Maecenas facilisis dui ac sapien condimentum consectetur. Vivamus ornare, dolor in suscipit sagittis, mauris velit rhoncus lorem, a euismod justo elit quis purus. Curabitur et arcu ante. Sed interdum sodales pharetra. Nullam interdum justo nec velit faucibus tincidunt.",
            languages : [LANGUAGES.JAVA, LANGUAGES.C],
            pay : 2,
            saves : 0
        }

    ]
};

export const login = (username, password) => {
    users.map((user, index) => {
        if (username === user.username && password === user.password) {
            return {
                id: index,
                username: user.username,
                saved: user.saved,
                onboarding: user.onboarding
            };
        }
    });
    return {};
};

export const getJobs = language => {
    if (language === LANGUAGES.ALL) {
        return jobs;
    } else {
        return jobs.filter((job, index) => {
            job.id = index;
            return job.language.includes(language);        
        });
    }    
};

export const saveJob = (user, job) => {
    users[user].saved.push(job);
    jobs[job].saves++;
};

export const getSavedJobs = currentUser => {
    let savedJobs = [];
    for (jobID of users[currentUser].saved) {
        savedJobs.push(jobs[jobID]);
    }
    return savedJobs;
};

export const updateOnboarding = (user, training) => {
    switch (training) {
        case ONBOARDING.INTRO:
            users[user].onboarding.intro = true;
            break;
        case ONBOARDING.SEARCHED:
            users[user].onboarding.searched = true;
            break;
        case ONBOARDING.SAVED:
            users[user].onboarding.saved = true;
            break;
        case ONBOARDING.SEEN:
            users[user].onboarding.seen = true;
            break;
        case ONBOARDING.SORTED:
            users[user].onboarding.sorted = true;
            break;
        default:
            break;
    }
};