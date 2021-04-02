
document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseenter', function(){
    subContainer.style.backgroundColor = "purple";
    for(i = 1; i < 6; i++){
        document.getElementById(`randomNum${i}`).innerHTML = `filter #${_.random(1, 255)}`;

}}))

document.querySelectorAll(".subContainer").forEach(subContainer => subContainer.addEventListener('mouseleave', function(){
    subContainer.style.backgroundColor = "green";
}))

let imageHolder;
let chosenFilter = "";

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
    console.log(event.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function (e) {
        let img = new Image();
        img.src = e.target.result;
        imageHolder = e.target.result;
        img.onload = function(ev){
            let canvas = document.getElementById('downloadImg');
            let ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.filter = `${chosenFilter}`; 
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
            let imgData = canvas.toDataURL("image/jpeg",0.75);
        }
    }
}

document.getElementById('moon1').addEventListener('click', function(){
    document.getElementById('moon1').style.webkitFilter = "grayscale(100%)";
    chosenFilter = "grayscale(100%)";
    let img = new Image();
    img.src = imageHolder;
    img.onload = function(ev){
        let canvas = document.getElementById('downloadImg');
        let ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `${chosenFilter}`; 
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
        let imgData = canvas.toDataURL("image/jpeg",0.75);
    }
})
document.getElementById('moon2').addEventListener('click', function(){
    document.getElementById('moon2').style.webkitFilter = "saturate(8)";
    chosenFilter = "saturate(8)";
    let img = new Image();
    img.src = imageHolder;
    img.onload = function(ev){
        let canvas = document.getElementById('downloadImg');
        let ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `${chosenFilter}`; 
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
        let imgData = canvas.toDataURL("image/jpeg",0.75);
    }
})
document.getElementById('moon3').addEventListener('click', function(){
    document.getElementById('moon3').style.webkitFilter = "hue-rotate(90deg)";
    chosenFilter = "hue-rotate(90deg)";
    let img = new Image();
    img.src = imageHolder;
    img.onload = function(ev){
        let canvas = document.getElementById('downloadImg');
        let ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `${chosenFilter}`; 
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
        let imgData = canvas.toDataURL("image/jpeg",0.75);
    }
})
document.getElementById('moon4').addEventListener('click', function(){
    document.getElementById('moon4').style.webkitFilter = "blur(5px)";
    chosenFilter = "blur(5px)";
    let img = new Image();
    img.src = imageHolder;
    img.onload = function(ev){
        let canvas = document.getElementById('downloadImg');
        let ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `${chosenFilter}`; 
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
        let imgData = canvas.toDataURL("image/jpeg",0.75);
    }
})
document.getElementById('moon5').addEventListener('click', function(){
    document.getElementById('moon5').style.webkitFilter = "invert(100%)";
    chosenFilter = "invert(100%)";
    let img = new Image();
    img.src = imageHolder;
    img.onload = function(ev){
        let canvas = document.getElementById('downloadImg');
        let ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `${chosenFilter}`; 
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width , img.height);
        let imgData = canvas.toDataURL("image/jpeg",0.75);
    }
})


