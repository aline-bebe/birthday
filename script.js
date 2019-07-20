var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var theMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var theFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function thedate() {
    
    var input = document.getElementById("input");

    var M_Gender = document.getElementById("Mgender");
    var F_Gender = document.getElementById("Fgender");

    var date = new Date(input.value);
    var weekday = date.getDay();

    var names = document.getElementById("names");
    var theWeekDay = document.getElementById("theWeekDay");

    if(M_Gender.checked){
        for(let i=0; i<weekdays.length; i++){
            
            if(weekdays[weekday] == weekdays[i]){

                theWeekDay.innerHTML = weekdays[i];
                names.innerHTML = theMale[i];

            }
        }
    }

    if(F_Gender.checked){
        for(let i=0; i<weekdays.length; i++){
            
            if(weekdays[weekday] == weekdays[i]){

                theWeekDay.innerHTML = weekdays[i];
                names.innerHTML = theFemale[i];

            }
        }
    }

}
