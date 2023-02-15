const app = document.getElementById("app");
const history = document.getElementById("historyWrapper");
let historyText = "";
// Data for drumKit buttons
const drumKitData = [
  {
    drumPart: "clap",
    keyboardKey: "w",
  },
  {
    drumPart: "hihat",
    keyboardKey: "s",
  },
  {
    drumPart: "kick",
    keyboardKey: "d",
  },
  {
    drumPart: "openhat",
    keyboardKey: "f",
  },
  {
    drumPart: "boom",
    keyboardKey: "g",
  },
  {
    drumPart: "ride",
    keyboardKey: "h",
  },
  {
    drumPart: "snare",
    keyboardKey: "j",
  },
  {
    drumPart: "tom",
    keyboardKey: "k",
  },
  {
    drumPart: "tink",
    keyboardKey: "l",
  },
];
// Assigning of audiofiles for each button, filename match drumKit part name, ex. snare plays snare.wav
// Adding of click eventlisteners for each button
// Additionally played button history for mouseclick activation added
drumKitData.forEach((element) => {
  const drumButton = document.createElement("button");
  drumButton.id = element.keyboardKey;
  drumButton.innerHTML = `<p>${element.keyboardKey}</p><p>${element.drumPart}</p><audio src="assets/${element.drumPart}.wav"></audio>`;
  drumButton.addEventListener("click", (e) => {
    drumButton.getElementsByTagName("audio")[0].currentTime = 0;
    drumButton.getElementsByTagName("audio")[0].play();
    historyText === ""
      ? (historyText = element.drumPart)
      : (historyText = element.drumPart + " > " + historyText);
    historyText = historyText.split(" > ");
    historyText.length > 20 ? (historyText.length = 17) : "";
    historyText = historyText.join(" > ");
    history.innerText = historyText;
  });
  app.appendChild(drumButton);
});

// Success attempt to assing keybord keys to play each sound corrensponding to button id
// Additionally played sound history for keyboard activation added
window.addEventListener("keydown", (e) => {
  const drumAudio = document
    .getElementById(e.key)
    .getElementsByTagName("audio")[0];
  const drumButton = document.getElementById(e.key);
  drumAudio.currentTime = 0;
  drumAudio.play();
  historyText === ""
    ? (historyText =
        drumKitData[drumKitData.findIndex((el) => el.keyboardKey === e.key)]
          .drumPart)
    : (historyText =
        drumKitData[drumKitData.findIndex((el) => el.keyboardKey === e.key)]
          .drumPart +
        " > " +
        historyText);
  historyText = historyText.split(" > ");
  historyText.length > 20 ? (historyText.length = 17) : "";
  historyText = historyText.join(" > ");
  history.innerText = historyText;
});
