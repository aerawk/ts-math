function startGame() {
  //starting a new game

  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(80, playerName);
  postScore(-3, playerName);
}

function logPlayer(name: string = "New Player"): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );
  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = "New Player"): void {
  let logger: (value: string) => void;
  if (score < 0) {``
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById(
    "postedScores"
  );
  scoreElement!.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

let scores: number[] = [75, 101, 84, 234];
let highScores: number[] = scores.filter(num => {
  if (num > 100) {
    return true;
  }
});

console.log(highScores);

const logMessage = (message: string = "Hey girl") => console.log(message);

function logError(err: string) {
  console.log(err);
}
