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