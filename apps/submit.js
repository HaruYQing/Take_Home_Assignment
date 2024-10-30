const submitBtn = document.querySelector(".sendBTN");
const container = document.querySelector(".bubblesContainer");

function showContent(e) {
  e.preventDefault();
  const userContent = document.querySelector("#userInput").value;
  const bubblesContainer = document.querySelector(".bubblesContainer");

  if (userContent) {
    const newUserBubble = document.createElement("div");
    newUserBubble.className = "userBubble";
    newUserBubble.textContent = userContent;
    bubblesContainer.appendChild(newUserBubble);
    container.scrollTo(0, container.scrollHeight);

    setTimeout(() => {
      const newAiBubble = document.createElement("div");
      newAiBubble.className = "aiBubble";
      newAiBubble.textContent =
        "Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.";
      bubblesContainer.appendChild(newAiBubble);
      container.scrollTo(0, container.scrollHeight);
      playTalkingAnimation();
    }, 300);

    document.querySelector("#userInput").value = "";
  } else {
    alert("Please enter your dialogue.");
  }
}

function playTalkingAnimation() {
  const avatarContainer = document.querySelector(".aiCharactor");
  const avatarHorn = document.querySelector(".avatarHorn");
  avatarContainer.classList.add("talking");
  avatarHorn.classList.add("glowing");

  // 3秒後停止動畫
  setTimeout(() => {
    avatarContainer.classList.remove("talking");
    avatarHorn.classList.remove("glowing");
  }, 3000);
}

submitBtn.addEventListener("click", showContent);
