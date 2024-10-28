const micButton = document.querySelector(".micBTN");
let isRecording = false;

async function toggleRecording() {
  try {
    if (!isRecording) {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      isRecording = true;
      micButton.classList.add("recording");
    } else {
      isRecording = false;
      micButton.classList.remove("recording");
    }
  } catch (err) {
    console.error("Error accessing microphone:", err);
    alert("Could not access your microphone. Please make sure to authorize.");
  }
}

micButton.addEventListener("click", toggleRecording);
