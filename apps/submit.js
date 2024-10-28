const submitBtn = document.querySelector(".sendBTN");

function showContent(e) {
  e.preventDefault();
  const userContent = document.querySelector("#userInput").value;
  const bubblesContainer = document.querySelector(".bubblesContainer");

  if (userContent) {
    const newUserBubble = document.createElement("div");
    newUserBubble.className = "userBubble";
    newUserBubble.textContent = userContent;
    bubblesContainer.appendChild(newUserBubble);

    setTimeout(() => {
      const newAiBubble = document.createElement("div");
      newAiBubble.className = "aiBubble";
      newAiBubble.textContent =
        "Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.";
      bubblesContainer.appendChild(newAiBubble);
    }, 500);

    document.querySelector("#userInput").value = "";
  } else {
    alert("Please enter your dialogue.");
  }
}

submitBtn.addEventListener("click", showContent);
