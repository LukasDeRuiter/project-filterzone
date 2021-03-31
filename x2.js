document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseenter', function(){
    subContainer.style.backgroundColor = "purple";
}))

document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseleave', function(){
    subContainer.style.backgroundColor = "green";
}))