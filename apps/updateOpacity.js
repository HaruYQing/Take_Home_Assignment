function updateBubblesOpacity() {
  const bubbles = document.querySelectorAll(".userBubble, .aiBubble");
  const firstThreshold = 200;
  const secondThreshold = 100;

  bubbles.forEach((bubble) => {
    const rect = bubble.getBoundingClientRect();
    const bubbleY = rect.top;

    bubble.classList.remove("medium-opacity", "low-opacity");

    if (bubbleY < secondThreshold) {
      bubble.classList.add("low-opacity");
    } else if (bubbleY < firstThreshold) {
      bubble.classList.add("medium-opacity");
    }
  });
}

document
  .querySelector(".bubblesContainer")
  .addEventListener("scroll", updateBubblesOpacity);
