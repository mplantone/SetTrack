function startSet() {
    firstview = document.getElementsByClassName("container-mainview")[0];
    secondview = document.getElementsByClassName("container-inside")[0];
    stopwatch = document.getElementsByClassName("stopwatch")[0];
    buttons = document.getElementsByClassName("buttons")[0];
    stopwatchDisplay = document.getElementsByClassName("stopwatch-display")[0];
    firstview.style.display = "none";
    secondview.style.display = "flex";
    stopwatch.style.display = "flex";
    buttons.style.display = "flex";
    stopwatchDisplay.style.display = "flex";
    hour= document.getElementById("hour");
    min = document.getElementById("min");
    sec= document.getElementById("sec");
    //setInterval è una funzione javascript che permette di 
    // eseguire una funzione a intervalli di tempo regolari, in questo caso ogni 1000 millisecondi (1 secondo)
    setInterval(function() {
        let valori = tempochepassa(sec,min,hour);
        if (valori[0].length==1){
        sec.innerHTML = "0" + valori[0];
        }
        else{
            sec.innerHTML = valori[0];
        }
        if (valori[1].length==1){
            min.innerHTML = "0" + valori[1];
        }
        else{
            min.innerHTML = valori[1];
        }
        if (valori[2].length==1){
            hour.innerHTML = "0" + valori[2];
        }
        else{
            hour.innerHTML = valori[2];
        }
    },1000);
    // il seguente controllo serve per aggiungere uno zero davanti ai valori di secondi, minuti e ore 
    // se sono inferiori a 10, in modo da avere sempre due cifre per ciascun valore
    
    
}

function reset(){
    firstview = document.getElementsByClassName("container-mainview")[0];
    secondview = document.getElementsByClassName("container-inside")[0];
    stopwatch = document.getElementsByClassName("stopwatch")[0];
    buttons = document.getElementsByClassName("buttons")[0];
    stopwatchDisplay = document.getElementsByClassName("stopwatch-display")[0];
    firstview.style.display = "flex";
    secondview.style.display = "none";
    stopwatch.style.display = "none";
    buttons.style.display = "none";
    stopwatchDisplay.style.display = "none";
}

function tempochepassa(sec, min, hour){
    val= parseInt(sec.innerHTML) + 1;
    if (val==60){
        min.innerHTML = parseInt(min.innerHTML) + 1;
        sec.innerHTML = 0;
    }
    else{
        sec.innerHTML = val;
    }
    if (parseInt(min.innerHTML) == 60){
            min.innerHTML = 0;
            hour.innerHTML = parseInt(hour.innerHTML) + 1;
    }
    if (parseInt(hour.innerHTML) == 60){
            hour.innerHTML = "00";
            min.innerHTML = "00";
            sec.innerHTML = "00";
    }
    return [sec.innerHTML, min.innerHTML, hour.innerHTML];
}

function stop(){}