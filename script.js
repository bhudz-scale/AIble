// --- Original command you had ---
console.log("App is running!");

// --- Notifications + AI Voice Reminder ---
function showNotification(msg) {
  // Find the notification element
  const note = document.getElementById("notification");
  if (note) {
    note.innerText = "⏰ " + msg;
    note.style.display = "block";
    setTimeout(() => {
      note.style.display = "none";
    }, 5000);
  }

  // Speak reminder aloud
  const speech = new SpeechSynthesisUtterance(msg);
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    speech.voice = voices[0]; // pick the first available system voice
  }
  window.speechSynthesis.speak(speech);
}

// Example: trigger a test reminder after 5 seconds
setTimeout(() => {
  showNotification("Don’t forget to go to the gym today!");
}, 5000);

// --- Save Settings Function ---
function saveSettings() {
  const name = document.getElementById("username")?.value || "Unknown";
  const voicePref = document.getElementById("voiceSetting")?.value || "default";

  alert("✅ Settings saved: " + name + " / Voice reminders: " + voicePref);
}
