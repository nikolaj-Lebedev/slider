const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);


let currentRight = 0;

right.addEventListener ("click", e => {
    e. preventDefault();
    let currentRight = parseInt(computedStyles.right)

    if (currentRight < 500) {
      items.style.right = `${currentRight + 100}px`;
    }

  });

  left.addEventListener("click", e => {
    e. preventDefault();
    let currentRight = parseInt(computedStyles.right)

    if (currentRight > 0) {
      items.style.right = `${currentRight - 100}px`;
    }



  });