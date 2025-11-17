let curs = document.querySelector("#cursor");
let cursB = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    curs.style.left = dets.x +"px"
    curs.style.top = dets.y+"px"
    cursB.style.left = dets.x-200+"px"
    cursB.style.top = dets.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor : "#e9d0d0cd",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#E9D0D0",
    scrollTrigger :{
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 1
    }
})

gsap.from(".about-us",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from("#page3",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from("#page4",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
gsap.from("#page5",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
