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
    title: "Battle of The GOATs",
    image: "mr.webp",
    text: "The stadium is packed. The lights are bright. Two legends are ready for the final moment. Who are you choosing?",
    choices: [
      { text: "Pick Ronaldo", next: "ronaldoSetup" },
      { text: "Pick Messi", next: "messiSetup" }
    ]
  },

ronaldoSetup: {
  title: "Ronaldo Steps Up",
  image: "ronaldo.jpeg",
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
      { text: "Final GOAT Verdict", next: "goatEnding"},
      { text: "Play Again", next: "start", reset: true }
    ]
  },

  ronaldoCalm: {
    title: "Cold Finish",
    image: "goal.jpg",
    text: "Ronaldo waits for the keeper to move, then calmly sends it the other way. That was pure confidence.",
    sound: true,
    choices: [
      { text: "Final GOAT Verdict", next: "goatEnding"},
      { text: "Play Again", next: "start", reset: true }
    ]
  },

 messiCorner: {
  title: "GOALLL!",
  image: "messi-score.jpg",
  text: "Messi places it perfectly in the bottom corner. The keeper guessed right but still could not reach it. The stadium erupts as Messi scores.",
  sound: true,
  choices: [
    { text: "Final GOAT Verdict", next: "messiGoatEnding" },
    { text: "Play Again", next: "start", reset: true }
  ]
},

  messiChip: {
    title: "Risky Choice",
    image: "miss.webp",
    text: "Messi tries to chip the keeper, but the keeper stays still and catches it. The crowd is shocked.",
    choices: [
      { text: "Final GOAT Verdict", next: "badEnding"},
      { text: "Try Again", next: "start", reset: true }
    ]
  },

  goatEnding: {
    title: "Ronaldo Is The GOAT",
    image: "cele7.jpg",
    text: "Ronaldo delivers under pressure, scores when it matters most, and proves why many people call him the greatest of all time.",
    sound: true,
    choices: [
      { text: "Restart Game", next: "start", reset: true }
    ]
  },

messiGoatEnding: {
  title: "Messi Is The GOAT",
  image: "messi-goat.jpg",
  text: "Messi delivers in the biggest moment and proves why so many people see him as the greatest of all time.",
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
    if (sceneName === "start") {
    card.classList.add("flags-bg");
  } else {
    card.classList.remove("flags-bg");
  }

  title.textContent = scene.title;
  sceneImage.src = scene.image;
  storyText.textContent = scene.text;
 

  choices.innerHTML = "";

  if (scene.sound) {
    celebrationSound.currentTime = 0;
    celebrationSound.play().catch(() => {});
  }

  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;

    button.onclick = function () {
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
