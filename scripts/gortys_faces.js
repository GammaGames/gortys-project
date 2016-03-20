/* TEMPLATE

//store all face variances for said type
var faceType = [
    faceType1,
    faceType2
]

//display random face
function setFaceType() {
    faceType[Math.floor(Math.random() * faceType.length)]();      
}

//face variance 1
function faceType1() {
    $("#lEye").removeClass().addClass("CLASS");
    $("#mouth").removeClass().addClass("CLASS");
    $("#rEye").removeClass().addClass("CLASS");
}

//face variance 2
function faceType2() {
    $("#lEye").removeClass().addClass("CLASS");
    $("#mouth").removeClass().addClass("CLASS");
    $("#rEye").removeClass().addClass("CLASS");
}*/

var allGroups = [
    setNeutral,
    setHappy,
    setSurprise,
    setTalk,
    setWhisper,
    setQuestion,
    setSad
];

/* BLANK */

function setBlank() {
    $("#lEye").removeClass().addClass("open");
    $("#mouth").removeClass().addClass("blank");
    $("#rEye").removeClass().addClass("open");
}

/* NEUTRAL */

var allNeutral = [
    setNeutral1,
    setNeutral2,
    setNeutral3,
    setNeutral4
]

function setNeutral() {
    allNeutral[Math.floor(Math.random() * allNeutral.length)]();
}

function setNeutral1() {
    $("#lEye").removeClass().addClass("open");
    $("#mouth").removeClass().addClass("line");
    $("#rEye").removeClass().addClass("open");
}

function setNeutral2() {
    $("#lEye").removeClass().addClass("open");
    $("#mouth").removeClass().addClass("hap");
    $("#rEye").removeClass().addClass("open");
}

function setNeutral3() {
    $("#lEye").removeClass().addClass("neutral");
    $("#mouth").removeClass().addClass("line");
    $("#rEye").removeClass().addClass("neutral");
}

function setNeutral4() {
    $("#lEye").removeClass().addClass("neutral");
    $("#mouth").removeClass().addClass("hap");
    $("#rEye").removeClass().addClass("neutral");
}

/* HAPPY */

var allHappy = [
    setHappy1,
    setHappy2,
    setHappy3,
    setHappy4,
    setHappy5,
    setHappy6
]

function setHappy() {
    allHappy[Math.floor(Math.random() * allHappy.length)]();
}

function setHappy1() {
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("hap");
    $("#rEye").removeClass().addClass("hap");
}

function setHappy2() {1
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("happy");
    $("#rEye").removeClass().addClass("hap");
}

function setHappy3() {
    $("#lEye").removeClass().addClass("happy");
    $("#mouth").removeClass().addClass("hap");
    $("#rEye").removeClass().addClass("happy");   
}

function setHappy4() {
    $("#lEye").removeClass().addClass("happy");
    $("#mouth").removeClass().addClass("happy");
    $("#rEye").removeClass().addClass("happy");   
}

function setHappy5() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("hap");
    $("#rEye").removeClass().addClass("squint");   
}

function setHappy6() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("happy");
    $("#rEye").removeClass().addClass("squint");   
}

/* SURPRISE */

var allSurprise = [
    setSurprise1,
    setSurprise2,
    setSurprise3
]

function setSurprise() {
    allSurprise[Math.floor(Math.random() * allSurprise.length)]();
}

function setSurprise1() {
    $("#lEye").removeClass().addClass("open");
    $("#mouth").removeClass().addClass("o");
    $("#rEye").removeClass().addClass("open");   
}

function setSurprise2() {
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("o");
    $("#rEye").removeClass().addClass("hap");   
}

function setSurprise3() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("o");
    $("#rEye").removeClass().addClass("squint");   
}

/* TALK */

var allTalk = [
    setTalk1,
    setTalk2,
    setTalk3,
    setTalk4,
    setTalk5,
    setTalk6
]

function setTalk() {
    allTalk[Math.floor(Math.random() * allTalk.length)]();
}

function setTalk1() {
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("blank");
    $("#rEye").removeClass().addClass("hap");   
}

function setTalk2() {
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("line");
    $("#rEye").removeClass().addClass("hap");   
}

function setTalk3() {
    $("#lEye").removeClass().addClass("hap");
    $("#mouth").removeClass().addClass("s");
    $("#rEye").removeClass().addClass("hap");   
}

function setTalk4() {
    $("#lEye").removeClass().addClass("neutral");
    $("#mouth").removeClass().addClass("blank");
    $("#rEye").removeClass().addClass("neutral");   
}

function setTalk5() {
    $("#lEye").removeClass().addClass("neutral");
    $("#mouth").removeClass().addClass("line");
    $("#rEye").removeClass().addClass("neutral");   
}

function setTalk6() {
    $("#lEye").removeClass().addClass("neutral");
    $("#mouth").removeClass().addClass("s");
    $("#rEye").removeClass().addClass("neutral");   
}

/* WHISPER */

var allWhisper = [
    setWhisper1,
    setWhisper2,
    setWhisper3
]

function setWhisper() {
    allWhisper[Math.floor(Math.random() * allWhisper.length)]();
}

function setWhisper1() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("blank");
    $("#rEye").removeClass().addClass("squint");   
}

function setWhisper2() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("s");
    $("#rEye").removeClass().addClass("squint");   
}

function setWhisper3() {
    $("#lEye").removeClass().addClass("squint");
    $("#mouth").removeClass().addClass("z");
    $("#rEye").removeClass().addClass("squint");   
}

/* QUESTION */

var allQuestion = [
    setQuestion1,
    setQuestion2,
    setQuestion3,
    setQuestion4
]

function setQuestion() {
    allQuestion[Math.floor(Math.random() * allQuestion.length)]();
}

function setQuestion1() {
    $("#lEye").removeClass().addClass("flat");
    $("#mouth").removeClass().addClass("blank");
    $("#rEye").removeClass().addClass("flat");   
}

function setQuestion2() {
    $("#lEye").removeClass().addClass("flat");
    $("#mouth").removeClass().addClass("s");
    $("#rEye").removeClass().addClass("flat");   
}

function setQuestion3() {
    $("#lEye").removeClass().addClass("flat");
    $("#mouth").removeClass().addClass("z");
    $("#rEye").removeClass().addClass("flat");   
}

function setQuestion4() {
    $("#lEye").removeClass().addClass("flat");
    $("#mouth").removeClass().addClass("o");
    $("#rEye").removeClass().addClass("flat");   
}

/* SAD */

var allSad = [
    setSad1,
    setSad2,
    setSad3
]

function setSad() {
    allSad[Math.floor(Math.random() * allSad.length)]();
}

function setSad1() {
    $("#lEye").removeClass().addClass("sad");
    $("#mouth").removeClass().addClass("frown");
    $("#rEye").removeClass().addClass("sad");   
}

function setSad2() {
    $("#lEye").removeClass().addClass("sad");
    $("#mouth").removeClass().addClass("s");
    $("#rEye").removeClass().addClass("sad");   
}

function setSad3() {
    $("#lEye").removeClass().addClass("sad");
    $("#mouth").removeClass().addClass("z");
    $("#rEye").removeClass().addClass("sad");   
}