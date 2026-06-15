function typing_text(element, source) {
    let index = 0;
    function type() {
        if (index < source.length) {
            element.innerHTML =
                source.slice(0, index + 1) +
                '<span class="cursor">|</span>';
            index++;
            setTimeout(type, 250);
        } else {
            element.textContent = source;
        }
    }
    type();
}
const text = document.getElementById("typing");
typing_text(text, "Hello World");