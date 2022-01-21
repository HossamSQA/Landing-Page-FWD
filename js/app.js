/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/*
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// build the nav

/* saving sections in a array */
const sections = document.querySelectorAll("section");
/* saving ul in a variable */
const navbarUl = document.getElementById("navbar__list");

/* loop to create the 5 sections properties */
for (let i = 1; i <= sections.length; i++) {
  let navbarList = document.createElement("li");
  /* adding id to each li */
  navbarList.setAttribute("id", `li-section${i}`);
  /* adding class to each li */
  navbarList.setAttribute("class", `li-section`);
  /* naming the list inside given ul */
  navbarList.appendChild(document.createTextNode(`Section ${i}`));
  /* appling the list under the ul in HTML */
  navbarUl.appendChild(navbarList);
}

/* set active class on click */
let liList = document.querySelectorAll(".li-section");

/* looping on li using for each*/
liList.forEach((list) => {
  /* catching tht ID of every section by removing first 3 letters from ID of li*/
  let secID = document.querySelector(`#${list.getAttribute("id").slice(3)}`);

  /* adding click event on li */
  list.addEventListener("click", function makeActive() {
    liList.forEach((l) => {
      /* section id in this scope */
      let secID2 = document.querySelector(`#${l.getAttribute("id").slice(3)}`);

      /* removing class active from all li */
      l.classList.remove("active");

      /* removing class active from all sections */
      secID2.classList.remove("active");
    });

    /* adding active class to li when clicked */
    list.classList.add("active");

    /* adding active class to section when clicked */
    secID.classList.add("active");

    /* scroll to the section when li clicked */
    secID.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* click on menu button to show/hide the navbar in screens below 768px width */
let btnMenu = document.querySelector("#btn-menu");
let menuBar = document.querySelector(".navbar__menu");

/* clicking listener for show/hide navbar at responsive view */
btnMenu.addEventListener("click", () => {
  if (menuBar.className == "navbar__menu") {
    /* removing the original class to nav bar*/
    menuBar.removeAttribute("class", "navbar__menu");
    /* adding class that hide the bar */
    menuBar.setAttribute("class", "menu-off");
  } else {
    /* removing class that hide the bar */
    menuBar.removeAttribute("class", "menu-off");
    /* adding the original class to nav bar*/
    menuBar.setAttribute("class", "navbar__menu");
  }
});

/* highlited the navbar li in scrolling */
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight) {
      sections.forEach((s) => {
        s.classList.remove("active");
      });
      sec.classList.add("active");

      let liID = `li-${sec.getAttribute("id")}`;
      liList.forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(`#${liID}`).classList.add("active");
    }
  });
});
