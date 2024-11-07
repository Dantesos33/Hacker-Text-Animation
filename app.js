const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let select = document.querySelectorAll("h1");
select.forEach((selected)=>{
  selected.onmouseover = (e) => {
    let i = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < i) {
            return e.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      i += 1 / 6;
      if (i > e.target.dataset.value.length) clearInterval(interval);
    }, 30);
  };
})
