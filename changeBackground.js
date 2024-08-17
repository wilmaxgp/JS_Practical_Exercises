function changeBackgroundColor(response) {
    const element = document.getElementById("responseElement");
    if (response === "failed") {
        element.style.backgroundColor = "red";
    } else if (response === "successful") {
        element.style.backgroundColor = "green";
    }
}
