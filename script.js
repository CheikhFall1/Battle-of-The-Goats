const title = document.querySelector(".title");
const sceneImage = document.querySelector("#sceneImage");
const storyText = document.querySelector("#storyText");
const choices = document.querySelector("#choices");

const celebrationSound = document.querySelector("#celebrationSound");
const card = document.querySelector(".card");
const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");
const gameContainer = document.querySelector(".game");

const scenes = {
  start: {
    title: "Choose Your Legend",
    image: "mr.webp",
    text: "Select your player to begin the match.",
    choices: [
      {
        text: "Cristiano Ronaldo",
        next: "ronaldoSetup",
        image: "player.jpg",
        country: "Portugal",
        theme: "portugal-card"
      },
      {
        text: "Lionel Messi",
        next: "messiSetup",
        image: "messi.jpg",
        country: "Argentina",
        theme: "argentina-card"
      }
    ]
  },

  ronaldoSetup: {
    title: "Ronaldo Steps Up",
    image: "stance.jpg",
    text: "Ronaldo places the ball down. The keeper is talking trash. The crowd is loud. What should Ronaldo do?",
    choices: [
      { text: "Power Shot", next: "ronaldoPower" },
      { text: "Calm Penalty", next: "ronaldoCalm" }
    ]
  },

  messiSetup: {
    title: "Messi Steps Up",
    image: "messipen.jpg",
    text: "Messi walks up slowly. The keeper is trying to guess the corner. What should Messi do?",
    choices: [
      { text: "Place It Bottom Corner", next: "messiCorner" },
      { text: "Chip the Keeper", next: "messiChip" }
    ]
  },

  ronaldoPower: {
    title: "GOALLL!",
    image: "cele7.jpg",
    text: "Ronaldo smashes it into the top corner. The keeper does not even move. The stadium goes crazy.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding" },
      { text: "Play Again", next: "start" }
    ]
  },

  ronaldoCalm: {
    title: "Cold Finish",
    image: "goal.jpg",
    text: "Ronaldo waits for the keeper to move, then calmly sends it the other way. That was pure confidence.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding" },
      { text: "Play Again", next: "start" }
    ]
  },

  messiCorner: {
    title: "GOALLL!",
    image: "messi-score.jpg",
    text: "Messi places it perfectly in the bottom corner. The keeper guessed right but still could not reach it. The stadium erupts as Messi scores.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "messiGoatEnding" },
      { text: "Play Again", next: "start" }
    ]
  },

  messiChip: {
    title: "Risky Choice",
    image: "miss.webp",
    text: "Messi tries to chip the keeper, but the keeper stays still and catches it. The crowd is shocked.",
    choices: [
      { text: "Final GOAT Verdict", next: "badEnding" },
      { text: "Try Again", next: "start" }
    ]
  },

  goatEnding: {
    title: "Ronaldo Is The GOAT",
    image: "cele7.jpg",
    text: "Ronaldo delivers under pressure, scores when it matters most, and proves why many people call him the greatest of all time.",
    sound: true,
    choices: [
      { text: "Restart Game", next: "start" }
    ]
  },

  messiGoatEnding: {
    title: "Messi Is The GOAT",
    image: "messi-goat.jpg",
    text: "Messi delivers in the biggest moment and proves why so many people see him as the greatest of all time.",
    sound: true,
    choices: [
      { text: "Restart Game", next: "start" }
    ]
  },

  badEnding: {
    title: "Pressure Got Too Real",
    image: "miss.webp",
    text: "The moment was too big. The internet is already making edits. Sometimes the GOAT debate gets painful.",
    choices: [
      { text: "Run It Back", next: "start" }
    ]
  }
};

function transitionToScene(sceneName) {
  card.classList.add("fade-out");

  setTimeout(function () {
    showScene(sceneName);

    card.classList.remove("fade-out");
    card.classList.add("fade-in");

    setTimeout(function () {
      card.classList.remove("fade-in");
    }, 250);
  }, 250);
}

function showScene(sceneName) {
  const scene = scenes[sceneName];

  if (sceneName === "start") {
    card.classList.add("flags-bg");
    sceneImage.style.display = "none";
    choices.classList.add("choice-cards");
  } else {
    card.classList.remove("flags-bg");
    sceneImage.style.display = "block";
    choices.classList.remove("choice-cards");
  }

  title.textContent = scene.title;
  storyText.textContent = scene.text;

  if (sceneName !== "start") {
    sceneImage.src = scene.image;
  }

  choices.innerHTML = "";

  if (scene.sound) {
    celebrationSound.currentTime = 0;
    celebrationSound.play().catch(() => {});
  }

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    if (sceneName === "start") {
      button.classList.add("player-card", choice.theme);
      button.innerHTML = `
        <img src="${choice.image}" alt="${choice.text}">
        <div class="player-card-content">
          <h2>${choice.text}</h2>
          <p>${choice.country}</p>
        </div>
      `;
    } else {
      button.textContent = choice.text;
    }

    button.onclick = function () {
      transitionToScene(choice.next);
    };

    choices.appendChild(button);

    if (sceneName === "start" && index === 0) {
      const vsBadge = document.createElement("div");
      vsBadge.classList.add("vs-badge");
      vsBadge.textContent = "VS";
      choices.appendChild(vsBadge);
    }
  });
}
startButton.onclick = function () {
  startScreen.style.display = "none";
  gameContainer.style.display = "flex";
  showScene("start");
};
