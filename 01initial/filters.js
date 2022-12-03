export default (targetElement, { currentFilter }) => {
  const newCounter = targetElement.cloneNode(true);

  Array.from(newCounter.querySelectorAll("li a")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });
  console.log(newCounter);
  return newCounter;
};
