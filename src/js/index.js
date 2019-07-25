// import "../scss/index.scss";
var count = 0;

const formSlide = () => {
  const burger = document.getElementsByClassName("burger")[0];
  burger.addEventListener("click", () => {
    if (count == 0) {
      document.getElementsByClassName("hand")[0].style.transform =
        "rotate(45deg) translate(0px)";
      document.getElementsByClassName("hand")[1].style.opacity = "0";
      document.getElementsByClassName("hand")[2].style.transform =
        "rotate(-45deg) translate(0px)";
      document.getElementsByClassName("logo-text")[0].style.color = "#FFF5F5";
      document.getElementsByClassName("line")[0].style.backgroundColor =
        "#FFF5F5";
      for (var i = 0; i < 3; i++) {
        document.getElementsByClassName("hand")[i].style.backgroundColor =
          "#FFF5F5";
      }
      document.getElementsByClassName("form-div")[0].style.transform =
        "translateY(0)";
      count++;
      console.log(count);
    } else if (count == 1) {
      document.getElementsByClassName("hand")[0].style.transform =
        "rotate(0deg) translateY(5px)";
      document.getElementsByClassName("hand")[1].style.opacity = "1";
      document.getElementsByClassName("hand")[2].style.transform =
        "rotate(0deg) translateY(-5px)";
      document.getElementsByClassName("logo-text")[0].style.color = "#333333";
      document.getElementsByClassName("line")[0].style.backgroundColor =
        "#333333";
      for (var i = 0; i < 3; i++) {
        document.getElementsByClassName("hand")[i].style.backgroundColor =
          "#333333";
      }
      document.getElementsByClassName("form-div")[0].style.transform =
        "translateY(-100%)";
      count--;
      console.log(count);
    }
  });
};

formSlide();

// try to write nice code here plox //
