
var noon = 12;
var evening = 17;
var partyTime;
var napTime = 15;
var lunchTime = 12;
var wakeUpTime = 8;
var isPartyTime = false;

var oneSecond = 1000;

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};


var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};


var napEvent = function()
{
    napTime = napTimeSelector.value;
};


var partyEvent = function()
{
     //check isPartyTime
   if (isPartyTime == false){
        // if isPartyTime is false, change it to true
        //so we know the button has been clicked
        isPartyTime = true;
        // set time to partyTime so the lolCat clock
        //image and message update to the partyTime image and message
        //time = partyTime;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#737373";
        image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        lolcat.src=image;
        messageText = "Woo Hoo!";
        timeEventJS.innerText = messageText;
                } else {
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false;
        // set time back to the current time
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
     // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

var updateClock = function()
{
  var messageText;
  var lolcat = document.getElementById("lolcat");
  var image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var time = new Date().getHours();
  var timeEventJS = document.getElementById("timeEvent");


  if (time < noon && isPartyTime == false) {
    image ="http://hd.wallpaperswide.com/thumbs/good_morning_cat-t2.jpg";
    messageText = "Gud Morning!";
  } else if (time > evening && isPartyTime == false){
    image ="http://68.media.tumblr.com/4b0176052b28b7ee0cb273ad4981689c/tumblr_mjrioax2TH1qdedm3o1_500.jpg";
    messageText = "Gud Evenin!";
  } else if (isPartyTime == false) {
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Gud Afternoon!";
  } else{
    image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "woo Hoo Party Tiem";
  }

if (time == wakeUpTime && isPartyTime == false){
    image ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  messageText = "Tiem 2 Git Up!";
} else if (time == lunchTime && isPartyTime == false){
  image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  messageText = "Tiem 4 Fud";
} else if (time == napTime && isPartyTime == false){
  image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  messageText = "Sleep Tiem";
/*} else if (time == partyTime){
  image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText = "woo Hoo - Party Time";*/
};

timeEventJS.innerText = messageText;
lolcat.src=image;

showCurrentTime();
  };

updateClock();
setInterval( updateClock, oneSecond);

partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
