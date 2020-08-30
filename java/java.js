function defaultDates(){
    let today =  new Date();
    let Day = today.getDate();
    let Month = today.getMonth()+1;
    let Year = today.getFullYear();
    if(Month.toString().length == 1){
        Month = "0"+Month;
    }
    if(Day.toString().length == 1){
        Day = "0"+Day;
    }
    currentDate = Year+"-"+Month+"-"+Day;
    document.getElementById("date1").value = currentDate;
    document.getElementById("date2").value = currentDate;
    document.getElementById("postdate").value = currentDate;
    document.getElementById("date1").min = currentDate;
    document.getElementById("date2").min = currentDate;
    document.getElementById("postdate").min = currentDate;
}

function submission(){
    let type = document.getElementById("type").value;
    let title = document.getElementById("title").value;
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;
    let postdate = document.getElementById("postdate").value;

    if(type =="" || title ==""){
        alert("The form you are trying to submit is incomplete");
    }else alert("You have successfully submitted your proposed event")
}