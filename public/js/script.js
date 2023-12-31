const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const answer = e.target.nextElementSibling;
    const icon = e.target.querySelector(".faq-icon");
    answer.classList.toggle("active");
    icon.classList.toggle("minus");
    e.target.classList.toggle("active");
    if (answer.classList.contains("active")) {
      answer.style.height = answer.scrollHeight + "px";
    } else {
      answer.style.height = 0;
    }
  });
});

window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
          document.querySelector('#navbar').classList.add("navbar_scroll");
      } else {
          document.querySelector('#navbar').classList.remove("navbar_scroll");
      }
  });
});

