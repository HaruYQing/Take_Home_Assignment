const micButton = document.querySelector(".micBTN");
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

async function toggleRecording() {
  try {
    if (!mediaRecorder) {
      // first click
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
        audioChunks = []; // reset
      };
    }

    if (!isRecording) {
      // start recording
      audioChunks = []; // make sure it's empty
      mediaRecorder.start();
      isRecording = true;
      micButton.classList.add("recording");
    } else {
      // stop recording and play
      mediaRecorder.stop();
      isRecording = false;
      micButton.classList.remove("recording");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Could not access your microphone. Please make sure to authorize.");
  }
}

micButton.addEventListener("click", toggleRecording);
