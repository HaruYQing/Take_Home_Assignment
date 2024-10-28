function updateBubblesOpacity() {
  const bubbles = document.querySelectorAll(".userBubble, .aiBubble");
  const firstThreshold = 200; // 第一個界線
  const secondThreshold = 100; // 第二個界線

  bubbles.forEach((bubble) => {
    const rect = bubble.getBoundingClientRect();
    const bubbleY = rect.top;

    // 移除所有透明度class
    bubble.classList.remove("medium-opacity", "low-opacity");

    // 根據位置添加對應class
    if (bubbleY < secondThreshold) {
      bubble.classList.add("low-opacity");
    } else if (bubbleY < firstThreshold) {
      bubble.classList.add("medium-opacity");
    }
  });
}

// 監聽滾動事件
document
  .querySelector(".bubblesContainer")
  .addEventListener("scroll", updateBubblesOpacity);
