//Declare variables
var hour=8;
var min=50;
var period="AM";

var hour=4;
var min=15;
var period="PM";

//write function with variable values in paranthesis
function time(hour,min,period){
    if( min>30 && period=="AM" ){
    hr= hour+1;
    console.log("It's almost" + hr + " in the morning");
    }
    else if(min >30 && period=="PM")
    {
        hr=hour+1;
        console.log("It's almost " + hr +" in the evening");
    }
    else if (min<=30 && period=="AM")
    {
        
        console.log("It's just after " + hour +" in the morning");
    }
    else if(min<=30 && period=="PM")
    {
        
        console.log("It's just after " + hour +" in the evening");
    }
}

 time(hour,min,period)

