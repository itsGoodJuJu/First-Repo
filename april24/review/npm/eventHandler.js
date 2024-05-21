async function getDatabaseInfo() {
    let idolList = await fetch('http://localhost:3000/idol');
    let htmlList = document.getElementById('displayData');
    htmlList.innerText = idolList[0];
}