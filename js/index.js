const app = document.getElementById("app");
// Data for drumKit buttons
const drumKitData = [
  {
    drumPart: "clap",
    keyboardKey: "W",
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
drumKitData.forEach((element) => {
  const drumButton = document.createElement("button");
  drumButton.id = element.keyboardKey;
  drumButton.innerHTML = `<p>${element.keyboardKey}</p><p>${element.drumPart}</p><audio src="assets/${element.drumPart}.wav"></audio>`;
  drumButton.addEventListener("click", (e) => {
    drumButton.getElementsByTagName("audio")[0].play();
  });
  app.appendChild(drumButton);
});

// Attempt to assing keybord keys to play each sound corrensponding to button id
window.addEventListener("keydown", (e) => {
  app.getElementById(e.key).getElementsByTagName("audio")[0].play();
});
