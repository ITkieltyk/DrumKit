const app = document.getElementById("app");
const history = document.getElementById("historyWrapper");
let historyArr = [];
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
// Additionally played button history for click activation added
drumKitData.forEach((element) => {
  const drumButton = document.createElement("button");
  drumButton.id = element.keyboardKey;
  drumButton.innerHTML = `<p>${element.keyboardKey}</p><p>${element.drumPart}</p><audio src="assets/${element.drumPart}.wav"></audio>`;
  drumButton.addEventListener("click", (e) => {
    drumButton.getElementsByTagName("audio")[0].currentTime = 0;
    drumButton.getElementsByTagName("audio")[0].play();

    historyArr.push(element.drumPart);

    const newHistTile = document.createElement("div");
    newHistTile.classList.add("historyTileStart");
    newHistTile.innerText = historyArr[historyArr.length - 1];
    history.appendChild(newHistTile);

    setTimeout(() => {
      newHistTile.className = "historyTile";
      if (screen.width < 820) {
        if (history.getElementsByTagName("div").length > 12) {
          for (let i = 0; i < 4; i++) {
            history.removeChild(history.firstElementChild);
          }
        }
      } else {
        if (history.getElementsByTagName("div").length > 22) {
          for (let i = 0; i < 11; i++) {
            history.removeChild(history.firstElementChild);
          }
        }
      }
    }, 50);
  });
  app.appendChild(drumButton);
});

// Success attempt to assing keybord keys to play each sound corrensponding to button id
// Additionally  history of played sound for keyboard activation added
window.addEventListener("keydown", (e) => {
  const drumAudio = document
    .getElementById(e.key)
    .getElementsByTagName("audio")[0];
  const drumButton = document.getElementById(e.key);
  drumAudio.currentTime = 0;
  drumAudio.play();
  historyArr.push(
    drumKitData[drumKitData.findIndex((el) => el.keyboardKey === e.key)]
      .drumPart
  );

  const newHistTile = document.createElement("div");
  newHistTile.classList.add("historyTileStart");
  newHistTile.innerText = historyArr[historyArr.length - 1];
  history.appendChild(newHistTile);

  setTimeout(() => {
    newHistTile.className = "historyTile";
    if (screen.width < 820) {
      if (history.getElementsByTagName("div").length > 12) {
        for (let i = 0; i < 4; i++) {
          history.removeChild(history.firstElementChild);
        }
      }
    } else {
      if (history.getElementsByTagName("div").length > 22) {
        for (let i = 0; i < 11; i++) {
          history.removeChild(history.firstElementChild);
        }
      }
    }
  }, 50);
});
