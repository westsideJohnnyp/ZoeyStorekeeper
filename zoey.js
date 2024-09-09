// gsap.from('.box', {
//     scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
//     x: 800 ,
// });


// //animate ".box" from an opacity of 0 to an opacity of 0.5
// gsap.fromTo(".box", { opacity: 0 }, { opacity: 1.5, duration: 1 }

// );

let Basic = document.getElementById("basicPrice");
let stanadard = document.getElementById("standardPrice");
let premuim = document.getElementById("premuiymPrice");

console.log(Basic)
console.log(stanadard)
console.log(premuim)

let everyMonth = 31
let everyYear = 365

let day = 200;
let standard = 400;
let premuims = 600;


function daily() {
    let everyday = 1;

    let dayshow = everyday * day
    let standShow = standard * everyday
    let premuimshow = premuims * everyday

    Basic.textContent = `N${dayshow}`;
    stanadard.textContent = `N${standShow}`;
    premuim.textContent = `N${premuimshow}`
}


function monthly(){
    let monthly = 31;

    let dayshow = monthly * day
    let standShow = standard * monthly
    let premuimshow = premuims * monthly

    let normal = dayshow.toLocaleString()
    let high = standShow.toLocaleString()
    let extreme = premuimshow.toLocaleString()

    Basic.textContent = `  N${normal}`;
    stanadard.textContent = `  N${high}`;
    premuim.textContent = `  N${extreme}`
}


function quaterly() {
    let quaterly = 93;

    let dayshow = quaterly * day
    let standShow = standard * quaterly
    let premuimshow = premuims * quaterly

    let normal = dayshow.toLocaleString()
    let high = standShow.toLocaleString()
    let extreme = premuimshow.toLocaleString()

    Basic.textContent = `  N${normal}`;
    stanadard.textContent = `  N${high}`;
    premuim.textContent = `  N${extreme}`
}

function yearly(){
    let yearly = 365

    let dayshow = yearly * day
    let standShow = standard * yearly
    let premuimshow = premuims * yearly

    let normal = dayshow.toLocaleString()
    let high = standShow.toLocaleString()
    let extreme = premuimshow.toLocaleString()

    Basic.textContent = `  N${normal}`;
    stanadard.textContent = `  N${high}`;
    premuim.textContent = `  N${extreme}`

}



let faqs = document.querySelectorAll(".faq");


faqs.forEach(faq => {
    faq.addEventListener('click', (e) => {
        faq.classList.toggle("active");
    })
});


  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Select the video element
  const video = document.getElementById("myVideo");

  // ScrollTrigger instance
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    onEnter: () => video.play(),  // Play the video when the scroll reaches the trigger start
    onLeave: () => video.pause(),  // Pause the video when scrolling past the end trigger
    onEnterBack: () => video.play(),  // Play the video when scrolling back up
    onLeaveBack: () => video.pause()  // Pause the video when scrolling past the start trigger
  });

  // Optional: Additional logic to pause the video if scrolling stops
  let isScrolling;
  
  window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    video.play(); // Play the video while scrolling

    isScrolling = setTimeout(() => {
      video.pause(); // Pause the video when scrolling stops
    }, 200); // Delay in milliseconds (adjust as needed)
  });



