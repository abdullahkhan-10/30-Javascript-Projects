let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];  //to not allow to get future date. 
let myResult = document.getElementById("result");

function calculateAge(){
    // birth date
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear()

    // current date
    let todayDate = new Date()
    let d2 = todayDate.getDate()
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear()

    // find difference between birth and current date, and tell us about person age.
    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }

    myResult.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> Months and <span>${d3}</span> days old.`
}

