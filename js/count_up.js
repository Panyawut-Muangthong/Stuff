function count_up(element, start, target, time) {
    let count = start ;
    const interval = setInterval(() => {
        if(count >= target) {
            clearInterval(interval);
            return;
        }
        count++;
        element.textContent = count;
    }, time);
}
const element = document.getElementById("count");
count_up(element, 0, 100, 100);