document.addEventListener("DOMContentLoaded", () => {
  const notepadSection = document.getElementById("notepadSection");
  const notepad = document.getElementById("notepad");
  const messageBox = document.getElementById("messageBox");
  const colorPicker = document.getElementById("colorPicker");
  const clearBtn = document.getElementById("clearBtn");
  const submitBtn = document.getElementById("submitBtn");
  const backToNotepad = document.getElementById("backToNotepad");
  const homeBtn = document.getElementById("homeBtn");

  if (
    !notepadSection ||
    !notepad ||
    !messageBox ||
    !colorPicker ||
    !clearBtn ||
    !submitBtn ||
    !backToNotepad ||
    !homeBtn
  ) {
    return;
  }

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

  const hideNotepadSection = () => {
    notepadSection.style.opacity = "0";
    setTimeout(() => {
      notepadSection.style.display = "none";
    }, 900);
  };

  const showNotepadSection = () => {
    notepadSection.style.display = "block";
    requestAnimationFrame(() => {
      notepadSection.style.opacity = "1";
    });
  };

  const showRandomMessage = () => {
    hideNotepadSection();

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setTimeout(() => {
      messageBox.textContent = randomMessage;
      messageBox.style.opacity = "1";
      backToNotepad.style.display = "inline-block";
    }, 900);
  };

  const resetToNotepad = () => {
    messageBox.style.opacity = "0";
    backToNotepad.style.display = "none";

    setTimeout(() => {
      messageBox.textContent = "";
      showNotepadSection();
    }, 500);
  };

  submitBtn.addEventListener("click", showRandomMessage);

  clearBtn.addEventListener("click", () => {
    notepad.value = "";
    notepad.focus();
  });

  colorPicker.addEventListener("input", (e) => {
    notepad.style.color = e.target.value;
  });

  backToNotepad.addEventListener("click", resetToNotepad);

  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
