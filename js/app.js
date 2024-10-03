const left_wrapper = document.querySelector(".left_wrapper");
const right_wrapper = document.querySelector(".right_wrapper");
const left_inner = document.querySelectorAll(".left_inner");

left_inner.forEach((ele) => {
  ele.addEventListener("dragstart", (e) => {
    let selected = e.target;

    right_wrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    right_wrapper.addEventListener("drop", (e) => {
      right_wrapper.appendChild(selected);
      selected = null;
    });

    left_wrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left_wrapper.addEventListener("drop", (e) => {
      left_wrapper.appendChild(selected);
      selected = null;
    });
  });
});
