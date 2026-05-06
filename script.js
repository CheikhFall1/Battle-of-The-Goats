const title = document.querySelector(".title");
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

  if (!scene) {
    console.error("Scene not found:", sceneName);
    return;
  }

  title.textContent = scene.title;
  sceneImage.src = scene.image;
  storyText.textContent = scene.text;
  scoreText.textContent = `Legacy Points: ${score}`;
  roundText.textContent = `Round ${round}`;

  choices.innerHTML = "";

  if (scene.sound) {
    celebrationSound.currentTime = 0;
    celebrationSound.play().catch(() => {
      console.log("Audio will play after user interaction.");
    });
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

showScene("start");
