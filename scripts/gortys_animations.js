function showBoot() {
    $("#line1").text("");
    $("#line2").text("");
    $("#line3").text("");
    PlayBoot();
}


function showAnimation(timeOfDay, currentHours, weather, temp, celsius) {
    $("#line1").text("");
    $("#line2").text("");
    $("#line3").text("");
    animateLine1(timeOfDay, currentHours);
    setTimeout(function() {
        playWelcome(timeOfDay, currentHours);
    }, 1000);
    
    setTimeout(function() {
        animateLine2(weather, temp, celsius);
    }, 2000);
    setTimeout(function() {
        playWeather(weather, temp, celsius);
    }, 3000);
    setTimeout(function() {
        animateLine3();
    }, 2750);
    setTimeout(function() {
        $("#line1").text("");
        $("#line2").text("");
        $("#line3").text("");
    }, 15000);
}

/* TEMPLATE 

//play animation for given type
function playAnimationType() {
    AnimationType[Math.floor(Math.random() * AnimationType.length)]();      
}

/ * CATEGORY * /

//store all animation variances for said type
var AnimationType = [
    AnimationType1,
    AnimationType2
]

//face animation 1
function AnimationType1() {
    setFaceVariance();
    setTimeout(function() {
        setFaceVariance();
    }, NEXT_STEP);
    setTimeout(function() {
        setFaceVariance();
    }, NEXT_STEP);    
}

//face animation 2
function AnimationType2() {
    setFaceVariance();
    setTimeout(function() {
        setFaceVariance();
    }, NEXT_STEP);
    setTimeout(function() {
        setFaceVariance();
    }, NEXT_STEP);   
}*/

/* BOOT */

function PlayBoot() {
    setBlank();
    setTimeout(function() {
        setNeutral3();
    }, 1000);
    setTimeout(function() {
        setNeutral4();
    }, 1500);
}

/* WELCOME */

function playWelcome(timeOfDay, currentHours) {
    switch(timeOfDay) {
        case("AM"):
            if(currentHours < 6) {
                am0Anim[Math.floor(Math.random() * am0Anim.length)]();
            }
            else {
                am6Anim[Math.floor(Math.random() * am6Anim.length)]();
            }
            break;
        case("PM"):
            if(currentHours < 6) {
                pm0Anim[Math.floor(Math.random() * pm0Anim.length)]();
            }
            else {
                pm6Anim[Math.floor(Math.random() * pm6Anim.length)]();                    
            }
            break;
    }
}

/* IDLE */

var idleAnim = [
    idleAnim1,
    idleAnim2,
    idleAnim3
]

function playIdle() {
    am0Anim[Math.floor(Math.random() * am0Anim.length)]();
}

function idleAnim1() {
    setHappy();
    setTimeout(function() {
        setHappy();
    }, 1000);
    setTimeout(function() {
        setNeutral();
    }, 1750);
}

function idleAnim2() {
    setHappy();
    setTimeout(function() {
        setQuestion();
    }, 1000);
    setTimeout(function() {
        setHappy();
    }, 1250);
    setTimeout(function() {
        setNeutral();
    }, 2000);
}

function idleAnim3() {
    setSurprise();
    setTimeout(function() {
        setHappy();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1750);
}

/* BEFORE 6AM */

var am0Anim = [
    am0Anim1,
    am0Anim2
]

function am0Anim1() {
    setWhisper1();
    setTimeout(function() {
        setWhisper2();
    }, 500);
    setTimeout(function() {
        setQuestion();
    }, 1250);
    setTimeout(function() {
        setNeutral();
    }, 1750);
}

function am0Anim2() {
    setWhisper1();
    setTimeout(function() {
        setSurprise3();
    }, 750);
    setTimeout(function() {
        setSurprise();
    }, 1250);
    setTimeout(function() {
        setNeutral();
    }, 1500);
}

/* AFTER 6AM */

var am6Anim = [
    am6Anim1
]

function am6Anim1() {
    setWhisper1();
    setTimeout(function() {
        setHappy();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1500);
}

/* BEFORE 6PM */

var pm0Anim = [
    pm0Anim1
]

function pm0Anim1() {
    setHappy4();
    setTimeout(function() {
        setTalk();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1250);
}

/* AFTER 6PM */

var pm6Anim = [
    pm6Anim1
]

function pm6Anim1() {
    setHappy();
    setTimeout(function() {
        setTalk();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1250);    
}

/* WEATHER */

var coldK = 278;
var warmK = 283;

function playWeather(weather, temp, celsius) {
    switch(weather) {
        case("Clear"):
            if(temp <= coldK)
                coldWeather[Math.floor(Math.random() * coldWeather.length)]();
            else if(temp <= warmK)
                warmWeather[Math.floor(Math.random() * warmWeather.length)]();
            else
                hotWeather[Math.floor(Math.random() * hotWeather.length)]();
            break;
        case("Rain"):
            rainWeather[Math.floor(Math.random() * rainWeather.length)]();
            break;
        case("Snow"):
            snowWeather[Math.floor(Math.random() * snowWeather.length)]();
            break;
    }
}

/* RAINWEATHER */

var rainWeather = [
    rainWeather1
]

function rainWeather1() {
    setHappy1();
    setTimeout(function() {
        setHappy();
    }, 500);
    setTimeout(function() {
        setNeutral();
    }, 1750);    
}

/* SNOWWEATHER */

var snowWeather = [
    snowWeather1,
    snowWeather2
]

function snowWeather1() {
    setSurprise();
    setTimeout(function() {
        setWhisper3();
    }, 500);
    setTimeout(function() {
        setNeutral();
    }, 1250);     
}

function snowWeather2() {
    setSurprise();
    setTimeout(function() {
        setHappy();
    }, 500);
    setTimeout(function() {
        setNeutral();
    }, 1250);     
}

/* COLDWEATHER */

var coldWeather = [
    coldWeather1,
    coldWeather2
]

function coldWeather1() {
    setTalk();
    setTimeout(function() {
        setWhisper();
    }, 500);
    setTimeout(function() {
        setQuestion();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1250);    
}

function coldWeather2() {
    setWhisper();
    setTimeout(function() {
        setQuestion();
    }, 750);
    setTimeout(function() {
        setSad();
    }, 1000);
    setTimeout(function() {
        setNeutral();
    }, 1500);    
}

/* NICEWEATHER */

var warmWeather = [
    warmWeather1
]

function warmWeather1() {
    setHappy();
    setTimeout(function() {
        setTalk();
    }, 750);
    setTimeout(function() {
        setHappy();
    }, 1000);
    setTimeout(function() {
        setNeutral();
    }, 1500);
}

/* HOT */

var hotWeather = [
    hotWeather1
]

function hotWeather1() {
    setSad1();
    setTimeout(function() {
        setTalk();
    }, 500);
    setTimeout(function() {
        setSad();
    }, 750);
    setTimeout(function() {
        setNeutral();
    }, 1250);
}