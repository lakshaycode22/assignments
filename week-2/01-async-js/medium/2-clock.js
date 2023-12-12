

function increaseCount(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let time = "AM";
    if(hour >= 12){
        hour -= 12;
        time = "PM";
    }
    console.log(hour + ':' + minutes + ':' + seconds + " " + time)
}

setInterval(increaseCount,1000);

