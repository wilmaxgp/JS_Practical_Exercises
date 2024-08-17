async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    const output = document.getElementById("dataOutput");
    data.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item.body;
        output.appendChild(p);
    });
}
