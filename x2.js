document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseenter', function(){
    subContainer.style.backgroundColor = "purple";
}))

document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseleave', function(){
    subContainer.style.backgroundColor = "green";
}))


let loadFile = (event) => {
    let _output1 = document.getElementById('moon1');
    let _output2 = document.getElementById('moon2');
    let _output3 = document.getElementById('moon3');
    let _output4 = document.getElementById('moon4');
    let _output5 = document.getElementById('moon5');
    _output1.src = URL.createObjectURL(event.target.files[0]);
    _output2.src = URL.createObjectURL(event.target.files[0]);
    _output3.src = URL.createObjectURL(event.target.files[0]);
    _output4.src = URL.createObjectURL(event.target.files[0]);
    _output5.src = URL.createObjectURL(event.target.files[0]);
}