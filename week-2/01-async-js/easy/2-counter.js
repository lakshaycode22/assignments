var counter = 0;

function countInc(){
    console.log(counter);
    counter++;
    setTimeout(countInc, 1000);
}

countInc();
