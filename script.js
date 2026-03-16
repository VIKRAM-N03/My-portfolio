document.addEventListener('DOMContentLoaded', () => {
  // ─── Loading Animation ─────────────────────────────────────
  const loading = document.getElementById('loading');
  const typed = document.getElementById('typed-command');
  const text = "whoami && cat ~/.profile";
  let i = 0;

  function type() {
    if (i < text.length) {
      typed.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    } else {
      setTimeout(() => {
        gsap.to(loading, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => loading.style.display = 'none'
        });
        startPageAnimations();
      }, 1200);
    }
  }

  setTimeout(type, 600);

  // ─── GSAP Animations ───────────────────────────────────────
  function startPageAnimations() {
    gsap.from(".navbar",       { y: -80, opacity: 0, duration: 1.2, ease: "power3.out" });
    gsap.from(".hero-title",   { y: 100, opacity: 0, duration: 1.4, delay: 0.4, ease: "power4.out" });
    gsap.from(".hero-subtitle",{ y: 60,  opacity: 0, duration: 1.2, delay: 0.7 });
    gsap.from(".cta-buttons",  { y: 40,  opacity: 0, duration: 1,   delay: 1, stagger: 0.2 });

    // Scroll animations
    gsap.utils.toArray(".glass-card, .skill-card, .project-card").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray(".section-title").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out"
      });
    });
  }

  // ─── Particles ─────────────────────────────────────────────
  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ["#3b82f6", "#8b5cf6", "#60a5fa"] },
      shape: { type: "circle" },
      opacity: { value: 0.45, random: true },
      size: { value: 3.2, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#3b82f6",
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.7 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});
