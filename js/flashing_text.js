function show_text(messageList, start_index, element) {
    if(start_index === messageList.length) {
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        element.textContent = '';
        return;
    }
    const text = messageList[start_index];
    element.textContent = text;
    setTimeout(() => {
        show_text(messageList, start_index+1, element);
    }, 500);
}

const messageList = ["1","2","3"];
show_text(messageList, 0, document.getElementById("test"));