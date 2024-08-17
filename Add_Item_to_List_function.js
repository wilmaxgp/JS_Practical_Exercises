function addItem() {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("New Item"));
    ul.appendChild(li);
}
