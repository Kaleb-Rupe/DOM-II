import "./less/index.less";

// Your code goes here!

window.onload = function (evt) {
  console.log(`event ${evt.type} fired! Ready to go!`);
  const heading = document.querySelector("h1");
  heading.textContent = "READY TO GO!!";

  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });

  document.body.addEventListener("click", (evt) => {
    evt.target.classList.toggle("mirror");
  });

  document.body.addEventListener("dbclick", (evt) => {
    evt.target.innerHTML = "";
    evt.preventDefault();
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.key == 6) {
      document.body.innerHTML = "<h1>YOU RAN ORDER 66!</h1>";
    }
  });

  document.body.addEventListener("mousemove", (evt) => {
    const { clientX, clientY } = evt;
    // console.log(`mouse is at ${clientX}, ${clientY} `);
  });

  const destinations = document.querySelectorAll(".destination");

  for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
      destination.style.fontWeight = "bold";
    });
    destination.addEventListener("mouseleave", () => {
      setTimeout(() => {
        destination.style.fontWeight = "initial";
      });
    });
  }

  const navLink = document.querySelector(".nav-container");

  navLink.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "Tan";
    event.target.style.borderColor = "Red";
  });

  navLink.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "initial";
    event.target.style.borderColor = "initial";
  });
};
