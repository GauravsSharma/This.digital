let open = document.querySelector("#open");
let close = document.querySelector("#close");
let nav = document.querySelector(".part2");
open.addEventListener("click",function(){
    nav.style.right = "0";
})
close.addEventListener("click",function(){
    nav.style.right = "-100%";
})

// let title = document.getElementById("title");
// title.addEventListener("click",function(){
//     let aTag = document.createElement('a');
//     aTag.setAttribute('href','www.google.com');
//     // aTag.innerHTML = "<button>GO</button>";
//     title.appendChild(aTag)
// })
// gsap.to("#main .nav",{
//     height:"60px",
//     scrollTrigger:{
//         trigger:"#main .nav",
//         scroller:"body",
//         start:"top -5%",
//         // markers:true,
//         scrub:true
//     }
// })
// let tl = gsap.timeline();
// tl.from("#main>h1",{
//     opacity:0,
//     duration:2,
//     delay:0.9
// })
// tl.from("#main .find h4",{
//     opacity:0,
//     duration:1,
// })
// tl.from("#main .img1",{
//     opacity:0,
//     x:-60,
//     duration:1,
// },"a")
// tl.to("#main .img2",{
//     opacity:1,
//     y:0,
//     duration:1,
// },"a")
// tl.to("#main .img3",{
//     opacity:1,
//     x:0,
//     duration:1, 
// },"a")

// let tl2 = gsap.timeline()
// tl2
// .from("#page2 h1",{
//     opacity:0,
//     y:60,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 90%",
//         // markers:true,
//         scrub:true
//     }
// },"a")
// tl2
// .from("#page2 h4",{
//     opacity:0,
//     y:60,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h4",
//         scroller:"body",
//         start:"top 30%",
//         end:"bottom 50%",
//         // markers:true,
//         scrub:true
//     }
// },"a")
