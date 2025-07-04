document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".option-box");
    const totalPriceElem = document.querySelector(".total-price");
  
    boxes.forEach(box => {
      box.addEventListener("click", (e) => {
        if (!e.target.closest(".box-header")) return;
  
        boxes.forEach(b => {
          b.classList.remove("active");
          b.querySelector(".radio").checked = false;
        });
        box.classList.add("active");
        box.querySelector(".radio").checked = true;
  
        const price = box.getAttribute("data-price");
        totalPriceElem.textContent = `Total : $${price}.00 USD`;
      });
    });
  
    boxes[0].classList.add("active");
    boxes[0].querySelector(".radio").checked = true;
    totalPriceElem.textContent = `Total : $${boxes[0].dataset.price}.00 USD`;
  });
  