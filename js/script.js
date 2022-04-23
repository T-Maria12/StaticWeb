$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  const navbar={
      button:"",
      nav:document.querySelector(".main-nav"),
  },
   schedule={
      buttons:document.querySelectorAll(".schedule-nav a"),
      days:document.querySelectorAll(".schedule-day"),
  },
  counters = {
        elements: document.querySelectorAll(".counting-Number span"),
        counts: [3, 10, 20],
        state: [0, 0, 0],
        time: 2000,
        counted: false,
        Plus: [false, true, true],
        startCounting: function () {
            this.intervals = this.counts.map((elm) => this.time / elm);
            this.timers = [];
            for (let i = 0; i < this.elements.length; i++) {
                const elm = this.elements[i];
                this.timers[i] = setInterval(() => {
                    if (this.state[i] >= this.counts[i]) clearInterval(this.timers[i]);
                    else {
                        this.state[i]++;

                        elm.innerHTML = (this.state[i] < 10 ? "0" : "") + this.state[i];
                    }
                }, this.intervals[i]);
            }
        },
    }
  function hideDays(){
      schedule.days.forEach((elem)=>{elem.classList.remove("active");
    });
    schedule.buttons.forEach((elem)=>{elem.classList.remove("active");
    });
  }
  schedule.buttons.forEach(function(elem, i){
      elem.onclick=function(){
          hideDays();
          elem.classList.add("active");
          schedule.days[i].classList.add("active");
      }
  });
  function handelNavbar() {
        if (
            !Schedule.shown &&
            Schedule.Element &&
            Schedule.Element.getBoundingClientRect().top < window.innerHeight / 4
        ) {
            Schedule.LIST[0].classList.add("SHOW");
            Schedule.shown = true;
        }
        if (
            !counters.counted &&
            counters.elements[0].getBoundingClientRect().top < (window.innerHeight * 3) / 4
        ) {
            counters.counted = true;
            counters.startCounting();
        }
        console.log();
    }
    handelNavbar();
    document.onscroll = handelNavbar;

  function scrollHander(e){
      if(window.pageYOffset>300) navbar.nav.classList.add("fixed");
      else navbar.nav.classList.remove("fixed");
  }  
  document.onscroll =scrollHander;
  scrollHander();
 
document.getElementById('REGISTRATIONS').addEventListener('click',function(){
  document.querySelector('.form').style.display='flex';
 });

document.querySelector('.close').addEventListener('click',function(){
 document.querySelector('.form').style.display='none';
    });

/* var menuList=document.getElementById("menuList")
     menuList.style.maxHeight="0px";
   function toggleMenu(){
       if (menuList.style.maxHeight == "0px") {
          menuList.style.maxHeight="130px";
       }
       else{
        menuList.style.maxHeight="0px";
       }
   }*/