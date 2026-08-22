const intents = [
        {
            name:"help",
            phrases:["help","what can you do","what can i say","available commands","show me what i can do"],
            words:["help","commands"]
        },
        {
            name:"horse",
            phrases:["horse management","manage the horses","manage horses","horse database","horse section","horse page","horse screen","horses"],
            words:["horse","horses","equine"]
        },
        {
            name:"addHorse",
            phrases:["add a horse","add horse","new horse","create a horse","register a horse","i want to add a horse"],
            words:["add","create","register"]
        },
        {
            name:"race",
            phrases:["race management","manage the races","manage races","race section","race page","race screen","races"],
            words:["race","races"]
        },
        {
            name:"calendar",
            phrases:["open calendar","show calendar","race calendar","racing calendar","calendar page","calendar"],
            words:["calendar","schedule"]
        },
        {
            name:"profile",
            phrases:["edit profile","my profile","profile settings","change my profile","update my profile","account settings","profile"],
            words:["profile","account","settings"]
        },
        {
            name:"favoriteRaces",
            phrases:["favorite races","favourite races","my favorite races","my favourite races","races i like"],
            words:["favorite","favourite","races"]
        },
        {
            name:"favoriteHorses",
            phrases:["favorite horses","favourite horses","my favorite horses","my favourite horses","horses i like"],
            words:["favorite","favourite","horses"]
        },
        {
            name:"jockeys",
            phrases:["jockey management","manage jockeys","jockeys section","jockey page","jockeys"],
            words:["jockey","jockeys","rider","riders"]
        },
        {
            name:"trainers",
            phrases:["trainer management","manage trainers","trainer section","trainer page","trainers"],
            words:["trainer","trainers","stable"]
        },
        {
            name:"users",
            phrases:[
                "user management",
                "manage users",
                "user administration",
                "user page",
                "users"
            ],
            words:[
                "user",
                "users",
                "accounts",
                "administration"
            ]
        },
        {
            name:"dashboard",
            phrases:[
                "open dashboard",
                "show dashboard",
                "go to dashboard",
                "take me home",
                "main screen",
                "home page",
                "dashboard",
                "home"
            ],
            words:[
                "dashboard",
                "home",
                "main"
            ]
        },
        {
            name:"statistics",
            phrases:[
                "statistics",
                "show statistics",
                "open statistics",
                "view statistics",
                "stats",
                "analytics",
                "show stats",
                "statistics page",
                "statistics screen"
            ],
            words:[
                "statistics",
                "stats",
                "analytics",
                "metrics",
                "charts"
            ]
        },
        {
            name:"logout",
            phrases:[
                "log out",
                "logout",
                "sign out",
                "leave the account",
                "exit the account",
                "disconnect me"
            ],
            words:[
                "logout",
                "signout",
                "disconnect",
                "exit"
            ]
        },
    ];

    let best = null;
    let maxScore = 0;
    for(const intent of intents){
        const sc = scoreIntent(n, intent);
        if(sc > maxScore){
            maxScore = sc;
            best = intent;
        }
    }
    if (best && maxScore > 0) {
        switch (best.name) {
            case "statistics":
                renderStatistics();
                break;
            case "dashboard":
                renderDashboard();
                break;
            case "horse":
                renderHorses();
                break;
            case "addHorse":
                renderAddHorseForm();
                break;
            case "race":
                renderRaces();
                break;
            case "profile":
                renderProfile();
                break;
            case "calendar":
                renderCalendar();
                break;
            case "jockeys":
                renderJockeys();
                break;
            case "trainers":
                renderTrainers();
                break;
            case "users":
                renderUsers();
                break;
            case "logout":
                logout();
                break;
            default:
                renderDashboard();
                break;
        }
    } else {
        speak("Sorry, I didn't understand that command.");
    }