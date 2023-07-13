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
