const hours = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const ampm = document.querySelector('#ampm');

const day = document.querySelector('#day');
const date = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampmel = 'AM';

    let definedDay = new Date().getDay();
    let definedDate = new Date().getDate();
    let definedMonth = new Date().getMonth();
    let definedYear = new Date().getFullYear();

    if(h>12){
        h = h-12;
        ampmel = 'pm'
    }

    h = h<10 ? '0'+h : h;
    m = m<10 ? '0'+m : m;
    s = s<10 ? '0'+s : s;    
    definedDate = definedDate<10 ? '0'+definedDate : definedDate;    

    let weekDays = {
        1 : 'mon',
        2 : 'tue',
        3 : 'wed',
        4 : 'thu',
        5 : 'fri',
        6 : 'sat',
        0 : 'sun',
    }

    let monthsOfYear = {
        0 : 'jan',
        1 : 'feb',
        2 : 'mar',
        3 : 'apr',
        4 : 'may',
        5 : 'june',
        6 : 'july',
        7 : 'aug',
        8 : 'sep',
        9 : 'oct',
        10 : 'nov',
        11 : 'dec'
    }

    weekDay = weekDays[definedDay];
    currentMonth = monthsOfYear[definedMonth];
    


   hours.innerText = h;
   minute.innerText = m;
   second.innerText = s;
   ampm.innerText = ampmel;

   day.innerText = weekDay;
   date.innerText = definedDate;
   month.innerText = currentMonth;
   year.innerText = definedYear;

   setTimeout(()=>{
    updateClock()
   },1000)
}
updateClock();