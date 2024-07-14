const story = {
    start: {
        text: "You find yourself at the entrance of a dark, mysterious cave. Do you want to enter?",
        choices: [
            { text: "Enter the cave", consequence: "enterCave" },
            { text: "Walk away", consequence: "walkAway" }
        ],
        image: "cave.jpeg"
    },
    enterCave: {
        text: "You enter the cave and see two paths. One to the left and one to the right. Which path do you choose?",
        choices: [
            { text: "Take the left path", consequence: "leftPath" },
            { text: "Take the right path", consequence: "rightPath" }
        ],
        image: "left_right.jpeg"
    },
    walkAway: {
        text: "You walk away from the cave and continue your journey elsewhere. The end.",
        choices: [],
        image: "boy_walking_away.jpeg"
    },
    leftPath: {
        text: "You take the left path and encounter a treasure chest. Do you open it?",
        choices: [
            { text: "Open the chest", consequence: "openChest" },
            { text: "Leave it", consequence: "leaveChest" }
        ],
        image: "boy_deciding.jpeg"
    },
    rightPath: {
        text: "You take the right path and find a sleeping dragon. Do you try to sneak past it?",
        choices: [
            { text: "Sneak past the dragon", consequence: "sneakPast" },
            { text: "Run away", consequence: "runAway" }
        ],
        image: "sleeping_dragon.jpeg"
    },
    openChest: {
        text: "You open the chest and find a treasure! You are rich! The end.",
        choices: [],
        image: "found_treasure.jpeg"
    },
    leaveChest: {
        text: "You leave the chest and continue your adventure. The end.",
        choices: [],
        image: "boy_walking_away.jpeg"
    },
    sneakPast: {
        text: "You successfully sneak past the dragon and find an exit. You escape safely! The end.",
        choices: [],
        image: "boy_exit_cave_happy.jpeg"
    },
    runAway: {
        text: "You run away and get lost in the cave. The end.",
        choices: [],
        image: "boy_running_away.jpeg"
    }
};

let currentStage = story.start;

function startGame() {
    currentStage = story.start;
    updatePage();
}

function updatePage() {
    document.getElementById('story').innerHTML = `<p>${currentStage.text}</p>`;
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    currentStage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            currentStage = story[choice.consequence];
            updatePage();
        });
        choicesElement.appendChild(button);
    });
    document.getElementById('image').innerHTML = `<img src="${currentStage.image}" alt="Story Image">`;
}

startGame();
