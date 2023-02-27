if(localStorage.getItem('sessions')){
    let arrSessions = JSON.parse(localStorage.getItem('sessions'));
    console.log(arrSessions)
    for (const session of arrSessions) {
        let day = session.day;
        let month = session.month;
        let year = session.year;
        let hours = session.hours;
        let minutes = session.minutes;
        if(day.toString().length===1){
            day='0'+day;
        }
        if(month.toString().length ===1){
            month='0'+month
        }
        if(hours.toString().length===1){
            hours = '0'+hours;
        }
        if(minutes.toString().length===1){
            minutes='0'+minutes
        }
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = `${arrSessions.indexOf(session)+1} Відвідування сторінки відбувалось ${day}.${month}.${year} о ${hours}:${minutes}`
        document.body.appendChild(div);
        div.appendChild(p);
    }
}