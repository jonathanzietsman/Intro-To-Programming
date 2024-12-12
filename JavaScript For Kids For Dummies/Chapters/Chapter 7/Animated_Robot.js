// 1: Page 111
var rightEye = document.getElementById("righteye");
// 2: Page 118
var leftEye = document.getElementById("lefteye");
// 1: Page 118
var leftArm = document.getElementById("leftarm");


// 2: Page 111
rightEye.addEventListener("click", moveUpDown);
// 3: Page 118
leftEye.addEventListener("click", moveUpDown);
// 2: Page 119
leftArm.addEventListener("click", moveRightLeft);
// 2: Page 113
function moveUpDown(e){
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10)
    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if (top === 20){
            clearInterval(id);
        }
    }
}
// 1: Page 119
function moveRightLeft(e){
    var robotPart = e.target;
    var left = 0;

    var id = setInterval(frame, 10)
    function frame(){
        robotPart.style.left = left + '%';
        left++;
        if (left === 71){
            clearInterval(id);
        }
    }
}
