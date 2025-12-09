document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const notepad = document.getElementById("notepad");
  const messageBox = document.getElementById("messageBox");
  const messages = [
    "My self-worth is not determined by my accomplishments.",
    "There is no end destination on this self-love journey.",
    "I exude beauty and grace.",
    "I am worthy of love just for being who I am.",
    "Prioritizing myself is productive.",
    "It is okay to take things one step at a time.",
    "I deserve fulfilling relationships.",
    "I will allow myself to rest when my body needs it.",
    "My worth doesn't depend on how I look.",
    "I view my body without judgment.",
    "I am resilient and can overcome life's challenges.",
    "My well-being is a priority, and I am committed to nurturing it.",
    "I believe in the power of empathy and compassion to create a better world.",
    "I deserve the same kindness I give to others, and I extend that kindness to myself.",
    "The boundaries I set this week will protect me and my relationships.",
    "I prioritize my rest, peace of mind and healing every day this week.",
    "I leave what no longer serves me in the past.",
    "I promise myself love, patience, and kindness for this week.",
    "I grow and improve every day.",
    "I am focusing on what's most important to me.",
    "I am capable of achieving my goals.",
    "I radiate love and positivity.",
    "I am worthy of love and respect.",
    "I am capable of facing any challenges that come my way.",
    "I am growing at my own pace.",
    "I am allowed to ask for what I need.",
    "I am safe and surrounded by love and support.",
    "I am valued and helpful.",
    "I belong here, and I deserve to take up space.",
    "I practice gratitude for all that I have, and all that is yet to come."
  ];

  submitBtn.addEventListener("click", () => {
    notepad.style.opacity = "0";

    setTimeout(() => {
      notepad.style.display = "none";
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      messageBox.textContent = randomMessage;
      messageBox.style.opacity = "1";
    }, 1000);
  });
});
const homeBtn = document.getElementById("homeBtn");
const backToNotepad = document.getElementById("backToNotepad");

submitBtn.addEventListener("click", () => {
  setTimeout(() => {
    backToNotepad.style.display = "inline-block";
  }, 900);
});

backToNotepad.onclick = () => {
  messageBox.style.opacity = "0";
  setTimeout(() => {
    messageBox.textContent = "";
    notepad.style.display = "block";
    notepad.style.opacity = "1";
    backToNotepad.style.display = "none";
  }, 500);
};

homeBtn.onclick = () => {
  window.location.href = "index.html";
};
