function sayHello() {
  alert("Your app is working! ✅");
}
function showNotification(msg) {
  // Show banner
  const note = document.getElementById("notification");
  note.innerText = "⏰ " + msg;
  note.style.display = "block";
  setTimeout(() => { note.style.display = "none"; }, 5000);

  // Speak reminder
  const speech = new SpeechSynthesisUtterance(msg);
  speech.voice = speechSynthesis.getVoices()[0]; // Default system voice
  window.speechSynthesis.speak(speech);
}

// Example: Trigger reminder after 5s
setTimeout(() => showNotification("Don’t forget to go to the gym today!"), 5000);

// Save settings
function saveSettings() {
  const name = document.getElementById("username").value;
  const voicePref = document.getElementById("voiceSetting").value;
  alert("Settings saved: " + name + " / Voice reminders: " + voicePref);
}
