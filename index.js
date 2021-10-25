var listTabs = document.querySelectorAll(".tab-item");
var listContent = document.querySelectorAll(".tab-pane");
var line = document.querySelector(".line");

listTabs.forEach((tab, index) => {
    const pane = listContent[index];
    tab.onclick = function () {
        var line = document.querySelector(".line");
        console.log({ line });
        line.style.width =tab.offsetWidth + "px";
        line.style.left=tab.offsetLeft + "px";
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        tab.classList.add("active");
        pane.classList.add("active");


    }
})