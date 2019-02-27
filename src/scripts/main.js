// console.log("Linked main.js");
// /*
//     This code will only return the first section component
//     even though there are three components with the same
//     class
// */
// const sectionEl = document.querySelector(".article__section");
// console.log("contents of variable sectionEl", sectionEl);
// /*
//     This code will only return the third section component
// */
// const footerEl = document.querySelector(".article__footer");
// console.log("Contents of variable footerEl");
// /*
//     Get reference to the section with the class of `smallText`
//     and remove that class. Then add a new class of `largeText`
// */
// const smallTextEl = document.querySelector(".smallText");
// console.log("Before",smallTextEl.classList);
// smallTextEl.classList.remove("smallText");
// smallTextEl.classList.add("largeText");
// console.log("After",smallTextEl.classList);

// smallTextEl.textContent = "NEW TEXT";

/*
    This code will return all section components
// */
const sectionEl = document.querySelectorAll(".article__section")
console.log("All elements with class article_section", sectionEl);

// for (let i = 0; i < sectionEl; i++) {
//     sectionEl[i].classList.add("new_class");
// }

// sectionEl[0].classList.add("new_class");
// sectionEl[1].classList.add("new_class");
// sectionEl[2].classList.add("new_class");
