let time = 10; //ручное задание времени
const countDownEl = document.getElementById
 ("countdown");

 setInterval(updateCountdown, 1000);

 function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: //если меньше 10 секунд то впереди ноль, иначе секунды
    seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
 }
