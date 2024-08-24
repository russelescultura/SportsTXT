document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  