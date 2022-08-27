const aboutHeader = document.querySelector(".about-text");

const isInViewport = function (elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
// read the link on how above code works

const findMe = document.querySelectorAll(".addFade");

window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    findMe.forEach((element) => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("fade-in");
        element.style.opacity = 1;
      }
    });
  },
  false
);
