const inicont = document.querySelectorAll (".Menu");
inicont.forEach(function(item) {
    item.addEventListener("click", function(e){
        const currenItem = document.querySelector("marcar");
        currenItem.classList.remove("marcar");
        e.target.classList.add("marcar")
    })
})