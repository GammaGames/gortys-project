var currentTime;
var currentHours;
var currentMinutes;
var timeOfDay;
var currentTimeString;

var currentWeekday;
var curentMonth;
var currentDay;
var currentYear;
var currentDateString;

function updateTimeDate() {
    currentTime = new Date ( );    
    currentHours = currentTime.getHours ( );   
    currentMinutes = currentTime.getMinutes ( );  
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;    
    timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";    
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;    
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    currentTimeString = "";
    currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
    $("#time").text(currentTimeString);

    currentWeekday = getDayNameByDayNumber(currentTime.getDay());
    currentMonth = getMonthNameByMonthNumber(currentTime.getMonth());
    currentDay = currentTime.getDate();
    currentYear = currentTime.getFullYear();
    currentDateString = "";
    currentDateString = currentWeekday + ", " + currentMonth + " " + currentDay + ", " + currentYear;
    $("#date").text(currentDateString);
}

var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function getMonthNameByMonthNumber(mm) {
    return months[mm];
}

var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
function getDayNameByDayNumber(mm) {
   return days[mm];
}

function saveSettings() {
    setName($("#name").val());
    setZip($("#zip").val());
    setCountry($("#country").val());
    setCelsius($("#celsius").is(':checked'));
    saveCookies();
    weatherCheck();
    setTimeout(function() {
        showAnimation(timeOfDay, currentHours, weather, temp, celsius);
    }, 1000);
}

function loadSettings() {
    $("#name").val(getName());
    $("#zip").val(getZip());
    $("#country").val(getCountry());
    $("#celsius").prop('checked', getCelsius());
}

function saveCookies() {
    createCookie("name", getName(), 30);
    createCookie("zip", getZip(), 30);
    createCookie("country", getCountry(), 30);
    createCookie("celsius", getCelsius(), 30);
}

function loadCookies() {
    if(document.cookie !== "")
    {
        setName(readCookie("name"));
        setZip(readCookie("zip"));
        setCountry(readCookie("country"));
        
        if(readCookie("celsius") == "true")
            setCelsius(true);
        else
            setCelsius(false);
        
        loadSettings();
    }
    else
        saveCookies();
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}