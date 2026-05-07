const title = document.querySelector(".title");
const sceneImage = document.querySelector("#sceneImage");
const storyText = document.querySelector("#storyText");
const choices = document.querySelector("#choices");
const scoreText = document.querySelector("#scoreText");
const roundText = document.querySelector("#roundText");
const celebrationSound = document.querySelector("#celebrationSound");

const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");
const gameContainer = document.querySelector(".game");

let score = 0;
let round = 1;

const scenes = {
  start: {
    title: "Battle of The GOATs",
    image: "mr.webp",
    text: "The stadium is packed. The lights are bright. Two legends are ready for the final moment. Who are you choosing?",
    choices: [
      { text: "Pick Ronaldo", next: "ronaldoSetup", points: 1 },
      { text: "Pick Messi", next: "messiSetup", points: 1 }
    ]
  },

  ronaldoSetup: {
    title: "Ronaldo Steps Up",
    image: "stance.jpg",
    text: "Ronaldo places the ball down. The keeper is talking trash. The crowd is loud. What should Ronaldo do?",
    choices: [
      { text: "Power Shot", next: "ronaldoPower", points: 2 },
      { text: "Calm Penalty", next: "ronaldoCalm", points: 1 }
    ]
  },

  messiSetup: {
    title: "Messi Steps Up",
    image: "messipen.jpg",
    text: "Messi walks up slowly. The keeper is trying to guess the corner. What should Messi do?",
    choices: [
      { text: "Place It Bottom Corner", next: "messiCorner", points: 2 },
      { text: "Chip the Keeper", next: "messiChip", points: 1 }
    ]
  },

  ronaldoPower: {
    title: "GOALLL!",
    image: "cele7.jpg",
    text: "Ronaldo smashes it into the top corner. The keeper does not even move. The stadium goes crazy.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding", points: 2 },
      { text: "Play Again", next: "start", reset: true }
    ]
  },

  ronaldoCalm: {
    title: "Cold Finish",
    image: "goal.jpg",
    text: "Ronaldo waits for the keeper to move, then calmly sends it the other way. That was pure confidence.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding", points: 2 },
      { text: "Play Again", next: "start", reset: true }
    ]
  },

  messiCorner: {
    title: "Perfect Placement",
    image: "laliga.webp",
    text: "Messi places it perfectly in the bottom corner. The keeper guessed right but still could not reach it.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding", points: 2 },
      { text: "Play Again", next: "start", reset: true }
    ]
  },

  messiChip: {
    title: "Risky Choice",
    image: "miss.webp",
    text: "Messi tries to chip the keeper, but the keeper stays still and catches it. The crowd is shocked.",
    choices: [
      { text: "Final GOAT Verdict", next: "badEnding", points: 0 },
      { text: "Try Again", next: "start", reset: true }
    ]
  },

  goatEnding: {
    title: "Legend Status Unlocked",
    image: "cele7.jpg",
    text: "You made the right calls under pressure. Your player leaves the stadium with legacy points and bragging rights.",
    sound: true,
    choices: [
      { text: "Restart Game", next: "start", reset: true }
    ]
  },

  badEnding: {
    title: "Pressure Got Too Real",
    image: "miss.webp",
    text: "The moment was too big. The internet is already making edits. Sometimes the GOAT debate gets painful.",
    choices: [
      { text: "Run It Back", next: "start", reset: true }
    ]
  }
};

function showScene(sceneName) {
  const scene = scenes[sceneName];

  title.textContent = scene.title;
  sceneImage.src = scene.image;
  storyText.textContent = scene.text;
  scoreText.textContent = `Legacy Points: ${score}`;
  roundText.textContent = `Round ${round}`;

  choices.innerHTML = "";

  if (scene.sound) {
    celebrationSound.currentTime = 0;
    celebrationSound.play().catch(() => {});
  }

  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.onclick = function () {
      if (choice.reset) {
        score = 0;
        round = 1;
      } else {
        score += choice.points || 0;
        round += 1;
      }

      showScene(choice.next);
    };

    choices.appendChild(button);
  });
}

startButton.onclick = function () {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";
  showScene("start");
};
