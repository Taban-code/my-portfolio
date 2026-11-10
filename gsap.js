
gsap.registerPlugin(ScrollTrigger);

// 1. PAGE LOAD TIMELINE
const heroTl = gsap.timeline({ 
    defaults: { ease: "power3.out", duration: 0.5 } 
});

heroTl
  .fromTo(".hero-img", 
    { y: "-100vh", opacity: 1, rotateY: 80}, 
    { y: 0, opacity: 0, duration: 1, ease: "power3.out", rotateY: 90}
  )
  .from(".logo, .nav ul li", { 
    y: -20, 
    opacity: 0, 
    stagger: 0.1 
  }, "-=0.3")
  .from(".hero-text-left .eyebrow, .hero-text-left h1, .hero-bottom hr, .hero-bottom", { 
    y: 100, 
    opacity: 0, 
    stagger: 0.1 
  }, "-=0.6")
  .from(".hero-text-right p, .hero-text-right .hero-btns", { 
    y: 30, 
    stagger: 0.15, 
    opacity: 0, 
    duration: 0.5 
  }, "-=0.5")
  .from(".hero-actions .btn", { 
    scale: 0.9, 
    opacity: 0, 
    stagger: 0.1, 
    ease: "back.out(1.7)" 
  }, "-=0.4")
  .from(".hero-visual", { 
    x: 50, 
    opacity: 0, 
    duration: 0.5 
  }, "-=0.8");


// 2. 3D HORIZONTAL PLANE ROTATION (SCROLL-DRIVEN)
// Give the parent element a 3D depth perspective so the rotation looks real
gsap.set(".hero-visual", { perspective: 1000 }); 

gsap.to(".hero-img", {
  rotationY: 0, // Animates on the Y-axis (horizontal plane spinning)
  ease: "power2.out",
  opacity: 1,
  scrollTrigger: {
    trigger: ".hero", 
    start: "bottom 100%",   
    end: "bottom 85%",     
    scrub: 1,              
  }
});


/*
  const heroTl = gsap.timeline({
    defaults: { 
      ease: "power3.out", 
      duration: .5
    },
})

  heroTl
    .fromTo(".hero-img", {
      y: "-100vw",
      opacity: 0,
    },
  {
  y: 0,
  x: 0,
  rotation: -360, 
  ease: "none",   
  scrollTrigger: {
    trigger: ".your-image-class", 
    start: "top bottom",         
    end: "bottom top",            
    scrub: true                   
  }
  })
    .from(".logo, .nav ul li", {
      y: -20,
      opacity: 0,
      stagger: 0.1, 
    })
    
    .from(".hero-text-left .eyebrow, .hero-text-left h1, .hero-bottom hr, .hero-bottom", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    }, "-=0.6") 

    .from(".hero-text-right p, .hero-text-right .hero-btns", {
      y: 30,
      stagger: 0.15,
      opacity: 0,
      duration: .5
    }, "-=0.5")
    
    .from(".hero-actions .btn", {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4")
    
    .from(".hero-visual", {
      x: 50,
      opacity: 0,
      duration: .5
    }, "-=0.8");
 */

  const h2 = ".why-me h2";
  const leftBoxes = ".ico-box:nth-child(1), .ico-box:nth-child(2)";
  const rightBoxes = ".ico-box:nth-child(3), .ico-box:nth-child(4)";

  const whymeTl = gsap.timeline({
    defaults: {
      duration: .5,
      ease: "power2.out",
      opacity: 1,
      stagger: 0.1, 
    },
    scrollTrigger: {
      trigger: ".why-me",
      start: "top 50%", 
    }
  });

  whymeTl
    .from(h2, 
      { opacity: 0, y: -100}
    )

    .from(leftBoxes, 
      { x: "-50vw", opacity: 0 }, 
      { 
        x: 0, 
        stagger: 0.1 
      },
      "-=0.4" 
    )

    .from(rightBoxes, 
      { x: "50vw", opacity: 0 }, 
      { 
        x: 0, 
        stagger: 0.1 
      },
      "<+=0.2" 
    )

    .call(() => {
      populateBoxContent();
    }, null, "-=0.2"); 

  function populateBoxContent() {
    gsap.from(".ico-box .populated-text", 
      { opacity: 0, y: 10 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: .5, 
        stagger: 0.1, 
        ease: "power1.out" 
      }
    );
    
  }
;


  gsap.from(".marquee-container h2",
  {
    x: "-100vw", 
    opacity: 0,
    duration: .5,
    ease: "power2.out", 
    scrollTrigger: {
      trigger: ".tech-stack",
      start: "top 60%", 
    } 
  }
);







const aboutTl = gsap.timeline({
    defaults: {
      duration: .5,
      ease: "power2.out",
      opacity: 1,
      stagger: 0.1, 
    },
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%", 
    }
  });
  aboutTl
  .from(".about-text h2", {
      y: 50,
      opacity: 0,
  })
  .from(".about-image", {
    y: 50,
      opacity: 0,
  })
  .from(".about-text p", {
    y: 50,
      opacity: 0,
  })
  .from(".about-text .download-btn", {
    y: 100,
      opacity: 0,
  })
  .from(".skills-header", {
    y: 100,
      opacity: 0,
  })
  .from(".design", {
    y: 100,
      opacity: 0,
  })
  .from(".frontend", {
    y: 100,
      opacity: 0,
  })
  .from(".backend", {
    y: 100,
      opacity: 0,
  })
  .from(".cms", {
    y: 100,
      opacity: 0,
  })


  // services
  gsap.from(".services-main .designn, .services-main .dev, services-main .front, .services-main .web-redesign", {
      opacity: 0,
      stagger: 0.1,
      duration: .5,
      scrollTrigger: {
      trigger: ".services",
      start: "top 50%", 
    }}, "-=0.6")

    // process
    
  gsap.from(".accordion-item", 
    {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: .5,
      scrollTrigger: {
      trigger: "#process",
      start: "top 80%", 
    }}, "-=0.6")

    gsap.from(".testimonial", {
      opacity: 0,
      y: 200,
      duration: .5,
      scrollTrigger: ".testimonial"
    })

    gsap.from("#contact-form", {
      opacity: 0,
      y: 100,
      duration: .5,
      scrollTrigger: {
        trigger: "#contact", 
        start: "top 70%",
      }
    })

    // projects
    gsap.timeline({
      defaults: {
      duration: .5,
      ease: "power2.out",
      opacity: 1,
      stagger: 0.1, 
    },
    scrollTrigger: {
      trigger: "#projects",
      start: "top 50%", 
    }}).from(".bnb-cafe", {
      x: "-100vw",
      opacity: 0,
    })
    .from(".signature-scents", {
      x: "100vw",
      opacity: 0,
    })