let layers = document.querySelectorAll(".layer");
let xVal = 0 , yVal = 0;

window.addEventListener("mousemove" , (e) => {
    xVal = e.clientX - window.innerWidth / 2;
    yVal = e.clientY - window.innerHeight / 2;
    layers.forEach((ele) => {
        let speedx = ele.dataset.speedx;
        let speedy = ele.dataset.speedy;
    ele.style.transform = `translateX(calc(-50% + ${-xVal * speedx}px))
                           translateY(calc(-50% + ${ yVal * speedy}px))`
    })
})


const liList = document.querySelector(".header .container .links .ul");
const icon = document.querySelector(".header .container .links i");
const iconL1 = document.querySelector("#icon-1")
const iconL2 = document.querySelector("#icon-2");
liList.style.transform = " rotate3d(0, 1, 0, 0deg)";
closeLinks = () => {
        if( liList.style.transform ==  'rotate3d(0, 1, 0, 0deg)'){
            liList.style.transform = " rotate3d(0, 1, 0, 90deg)"
            iconL1.style.transformOrigin = "left"
            iconL2.style.transformOrigin = "left"
            iconL1.style.width = "45%"
            iconL2.style.width = "45%"

        }else{
            liList.style.transform = " rotate3d(0, 1, 0, 0deg)";
            iconL1.style.transformOrigin = "center"
            iconL2.style.transformOrigin = "center"
            iconL1.style.width = "65%"
            iconL2.style.width = "65%"
        }
    }

