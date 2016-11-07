var textStr;
var name = "Jesse";

function setName(str) {
    name = str;
    
    am0Text[0] = "Oh, " + name + "! It's so early!";
    
    am6Text[0] = "Hello, " + name + "!";
    am6Text[1] = "Good morning, " + name + "!";
    am6Text[2] = "Hey, " + name + ". Rise and shine!";
    am6Text[3] = name + "! Hi there!";
    am6Text[4] = "Wakey, wakey, " + name + "!";
    
    pm0Text[0] = "Hey, " + name + "! Good afternoon!";
    pm0Text[1] = "Good afternoon, " + name + "!";
    
    pm6Text[0] = "Hey, " + name + "! Good evening!";
    pm6Text[1] = "Good evening, " + name + "!";
}

function getName() {
    return name;
}

function animateLine1(timeOfDay, currentHours) {
    $("#line1").css({
        '-webkit-animation-name': ''
    });


    setTimeout( function() {
        $("#line1").css({
            'animation': 'type 2s steps(30, end)'
        });
        $("#line1").text(welcomeText(timeOfDay, currentHours));
    }, 0);
}

function animateLine2(weather, temp, celsius) {
    $("#line2").css({
        '-webkit-animation-name': ''
    });


    setTimeout( function() {
        $("#line2").css({
            'animation': 'type 2s steps(30, end)'
        });        
        textStr = weatherText(weather, temp, celsius).split("#");
        $("#line2").text(textStr[0]);
    }, 0);
}

function animateLine3() {
    $("#line3").css({
        '-webkit-animation-name': ''
    });

    setTimeout( function() {
        $("#line3").css({
            'animation': 'type 2s steps(30, end)'
        });
        $("#line3").text(textStr[1]);
    }, 0);
}





var am0Text = [
    "Oh, " + name + "! It's so early!",
    "Burning the midnight oil, I see!"
]

var am6Text = [
    "Hello, " + name + "!",
    "Good morning, " + name + "!",
    "Hey, " + name + ". Rise and shine!",
    name + "! Hi there!",
    "Wakey, wakey, " + name + "!",
    "Mornin', good-lookin'!",
    "Morning!!"
]

var pm0Text = [
    "Hey, " + name + "! Good afternoon!",
    "Good afternoon, " + name + "!",
    "Afternoon!"
]

var pm6Text = [
    "Hey, " + name + "! Good evening!",
    "Good evening, " + name + "!",
    "Evening!"
]

function welcomeText(timeOfDay, currentHours) {
    switch(timeOfDay) {
        case("AM"):
            if(currentHours < 6) {
                return am0Text[Math.floor(Math.random() * am0Text.length)];
            }
            else {
                return am6Text[Math.floor(Math.random() * am6Text.length)];
            }
            break;
        case("PM"):
            if(currentHours < 6) {
                return pm0Text[Math.floor(Math.random() * pm0Text.length)]
            }
            else {
                return pm6Text[Math.floor(Math.random() * pm6Text.length)]                    
            }
            break;
    }
}

var coldK = 278;
var warmK = 283;
var hotK = 305;

var freezeText = [
    "Brr, it's freezing!#Better grab a warm coat!",
    "It's really cold out!#You need a coat!"
]

var coldText = [
    "It's not nice outside!#You need a jacket!",
    "You need a jacket!#It's not very warm out."
]

var warmText = [
    "It's nice out!#Ready for a jog?",
    "No coat today,#it's warm!"
]

var hotText = [
    "It's really hot out!#I need a fan.",
    "Ouch, the air is#really hot outside!"    
]

var rainText = [
    "Grab an umbrella,#It's raining outside!",
    "It's all wet outside,#don't leave!",
    "The sky is leaking,#it's not very nice!"
]

var snowText = [
    "Brr! It's snowing,#Grab a blanket!",
    "Snow is falling,#it looks so nice!"    
]

function weatherText(weather, temp, celsius) {
    switch(weather) {
        case("Clear"):
            if(temp <= coldK)
                return freezeText[Math.floor(Math.random() * freezeText.length)];
            else if(temp <= warmK)
                return coldText[Math.floor(Math.random() * coldText.length)];
            else if(temp <= hotK)
                return warmText[Math.floor(Math.random() * warmText.length)];
            else
                return hotText[Math.floor(Math.random() * hotText.length)];
            break;
        case("Rain"):
            return rainText[Math.floor(Math.random() * rainText.length)];
            break;
        case("Snow"):
            return snowText[Math.floor(Math.random() * snowText.length)];
            break;
    }
}