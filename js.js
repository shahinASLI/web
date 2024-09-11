let contaner = document.getElementById("contaner")
let dast = document.getElementById("dast")

let hhhhh = 0
contaner.addEventListener("click",function(){
    if(hhhhh===0){
        hhhhh=1
        dast.style.cssText="margin-left:30px;background-image: url(Sun.png);backgroand-position:center;background-repeat: no-repeat;background-size: cover;transform: rotate(150deg);"
        contaner.style.cssText="background-image:url(./day.jpg);backgroand-position:center;background-repeat: no-repeat;background-size: cover;"
        
    }
    else{
        hhhhh=0
        dast.style.cssText="margin-left:-20px;background-image: url(./Moon.png);backgroand-position:center;background-repeat: no-repeat;background-size: cover;transform: rotate(-150deg);"
        contaner.style.cssText=""
    }
})

