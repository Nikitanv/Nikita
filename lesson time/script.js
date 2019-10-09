 let date = new Date();
 console.log(date.getHours());

 console.log(date);
 
 if (date.getHours() < 16 ) {
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Добрый день</strong> ";
  document.body.append(div);
   }
 if (date.getHours() < 12 ) {
   let div = document.createElement('div');
   div.className = 'alert';
   div.innerHTML = '<strong>Доброе утро</strong>';
   document.body.append(div);
  }
  if (date.getHours() >= 16) {
   let div = document.createElement('div');
   div.className = 'alert';
   div.innerHTML = '<strong>Добрый вечер</strong>';
   document.body.append(div);
 }
 var weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";
let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<b>Сегодня:<b>'+ weekday[date.getDay()];
document.body.append(div);

let div2 = document.createElement('div');
div2.className = 'alert';
div2.innerHTML = '<b>Текущее время:<b>'+date.toLocaleTimeString();
document.body.append(div2);

let div3 = document.createElement('div');
div3.className = 'alert';
div3.innerHTML = '<b>До нового года осталось <b>'+ 82 + '<b> дня<b>';
document.body.append(div3);
