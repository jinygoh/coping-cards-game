document.addEventListener('DOMContentLoaded', () => {
    const screens = {
        start: document.getElementById('start-screen'),
        game: document.getElementById('game-screen'),
        win: document.getElementById('win-screen'),
    };

    const modals = {
        howToPlay: document.getElementById('how-to-play-modal'),
        prompt: document.getElementById('prompt-modal'),
        vote: document.getElementById('vote-modal'),
    };

    const buttons = {
        start: document.getElementById('start-game-btn'),
        howToPlay: document.getElementById('how-to-play-btn'),
        drawCard: document.getElementById('draw-card-btn'),
        promptOk: document.getElementById('prompt-ok-btn'),
        voteComplete: document.getElementById('vote-complete-btn'),
        playAgain: document.getElementById('play-again-btn'),
        mainMenu: document.getElementById('main-menu-btn'),
    };

    const displays = {
        turn: document.getElementById('turn-indicator'),
        card: document.getElementById('card-display'),
        score: document.getElementById('score-display'),
        finalScores: document.getElementById('final-scores'),
    };

    const inputs = {
        playerCount: document.getElementById('player-count'),
    };

    const closeButtons = document.querySelectorAll('.close-btn');

    let playerCount = 4;
    let currentPlayer = 0;
    let scores = [];
    let rounds = 5;
    let currentRound = 0;

    const cardDescriptions = [
        "You accidentally send a very embarrassing message to your boss.",
        "You realize you've forgotten your wallet after ordering a large meal at a restaurant.",
        "A close friend cancels plans with you at the last minute for the third time this month.",
        "You receive harsh criticism on a project you worked very hard on.",
        "You feel overwhelmed by the amount of work you have to do.",
        "You witness someone being rude to a service worker.",
        "You find out your favorite local shop is closing down.",
        "You've been trying to learn a new skill for weeks, but you feel like you're not making progress.",
        "You have to give a presentation to a large audience, and you're feeling very anxious.",
        "Someone you care about is going through a tough time, and you don't know how to help.",
        "You're stuck in traffic and are going to be late for an important appointment.",
        "You overhear someone talking negatively about you.",
        "You're feeling lonely and isolated.",
        "You're disappointed with your own performance on a task.",
        "You're having a creative block and can't come up with any new ideas.",
        "You have to make a difficult decision that will affect others.",
        "You're feeling unmotivated and procrastinating on important tasks.",
        "You're dealing with a difficult customer or client.",
        "You're trying to balance work, school, and personal life.",
        "You're feeling anxious about the future.",
        "You're struggling to communicate your needs to others.",
        "You're feeling guilty about something you did or didn't do.",
        "You're feeling homesick.",
        "You're dealing with a health issue.",
        "You're feeling bored and uninspired.",
        "You're having trouble sleeping.",
        "You're feeling insecure about your appearance.",
        "You're worried about money.",
        "You're feeling left out by your friends.",
        "You're having a disagreement with a family member.",
        "You're feeling stressed about an upcoming exam.",
        "You're feeling overwhelmed by social media.",
        "You're feeling jealous of someone else's success.",
        "You're feeling regretful about a past decision.",
        "You're feeling like you're not good enough.",
        "You're feeling like you're constantly busy but not productive.",
        "You're feeling like you're not living up to your potential.",
        "You're feeling like you're not being heard or understood.",
        "You're feeling like you're not in control of your life.",
        "You're feeling like you're not making a difference in the world."
    ];

    function showScreen(screen) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function showModal(modal) {
        modal.style.display = 'block';
    }

    function hideModal(modal) {
        modal.style.display = 'none';
    }

    function updateScores() {
        displays.score.innerHTML = '';
        scores.forEach((score, i) => {
            const playerScore = document.createElement('p');
            playerScore.textContent = `Player ${i + 1}: ${score}`;
            displays.score.appendChild(playerScore);
        });
    }

    function nextTurn() {
        currentPlayer = (currentPlayer + 1) % playerCount;
        if (currentPlayer === 0) {
            currentRound++;
        }

        if (currentRound >= rounds) {
            endGame();
        } else {
            displays.turn.textContent = `Player ${currentPlayer + 1}'s Turn`;
        }
    }

    function endGame() {
        showScreen(screens.win);
        displays.finalScores.innerHTML = '';
        scores.forEach((score, i) => {
            const finalScore = document.createElement('p');
            finalScore.textContent = `Player ${i + 1}: ${score}`;
            displays.finalScores.appendChild(finalScore);
        });
    }

    buttons.start.addEventListener('click', () => {
        playerCount = parseInt(inputs.playerCount.value);
        scores = new Array(playerCount).fill(0);
        currentPlayer = 0;
        currentRound = 0;
        updateScores();
        showScreen(screens.game);
        displays.turn.textContent = `Player ${currentPlayer + 1}'s Turn`;
    });

    buttons.howToPlay.addEventListener('click', () => {
        showModal(modals.howToPlay);
    });

    buttons.drawCard.addEventListener('click', () => {
        const cardIndex = Math.floor(Math.random() * cardDescriptions.length);
        displays.card.textContent = cardDescriptions[cardIndex];
        document.getElementById('prompt-message').textContent = `Player ${currentPlayer + 1}, share how you would deal with and cope with this situation with the other players. Press OK when you are ready for others to vote.`;
        showModal(modals.prompt);
    });



    buttons.promptOk.addEventListener('click', () => {
        hideModal(modals.prompt);
        document.getElementById('vote-message').textContent = `Everyone, discuss and vote for the best coping mechanism shared. Decide amongst yourselves who has the best strategy. The player whose coping mechanism is chosen gets 1 point.`;
        showModal(modals.vote);
    });

    buttons.voteComplete.addEventListener('click', () => {
        hideModal(modals.vote);
        scores[currentPlayer]++;
        updateScores();
        nextTurn();
    });

    buttons.playAgain.addEventListener('click', () => {
        showScreen(screens.start);
    });

    buttons.mainMenu.addEventListener('click', () => {
        showScreen(screens.start);
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            hideModal(e.target.closest('.modal'));
        });
    });
});
