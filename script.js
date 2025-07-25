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
    let drawnCards = [];
    const cardColors = [
        '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
    ];

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
        "You're feeling like you're not making a difference in the world.",
        "You are diagnosed with a chronic illness.",
        "A close family member passes away unexpectedly.",
        "You lose your job and are facing financial instability.",
        "You are betrayed by a close friend or partner.",
        "You witness a traumatic event.",
        "You are a victim of discrimination or prejudice.",
        "You are struggling with addiction.",
        "You are facing a moral dilemma with no clear right answer.",
        "You are responsible for a major mistake at work that has serious consequences.",
        "You are feeling completely alone and have no one to turn to.",
        "You are dealing with the grief of losing a loved one.",
        "You are going through a difficult breakup or divorce.",
        "You are struggling with infertility or have experienced a miscarriage.",
        "You are being bullied or harassed at work or school.",
        "You are dealing with a major financial setback, such as losing your job or having a large unexpected expense.",
        "You are struggling with a chronic illness that affects your daily life.",
        "You are a caregiver for a family member with a disability or chronic illness.",
        "You are struggling with your body image and self-esteem.",
        "You are feeling lost and unsure about your future.",
        "You are dealing with a difficult family situation, such as a family conflict or a loved one's addiction.",
        "You have made a huge mistake that you can't undo.",
        "You feel like a failure.",
        "You are struggling with your mental health and feel like you can't talk to anyone about it.",
        "You are being pressured to do something that goes against your values.",
        "You are feeling completely burnt out and have no motivation.",
        "You are dealing with the aftermath of a traumatic event.",
        "You are feeling isolated and alone, even when you are surrounded by people.",
        "You are struggling to forgive someone who has hurt you deeply.",
        "You are facing a major life change that you are not prepared for.",
        "You are feeling hopeless about the future.",
        "You are struggling with a major decision that will affect the rest of your life.",
        "You are feeling like you are not living up to your own expectations.",
        "You are dealing with a toxic friendship or relationship.",
        "You are feeling like you are not good enough, no matter what you do.",
        "You are struggling to find meaning and purpose in your life.",
        "You are feeling like you are constantly being judged by others.",
        "You are dealing with a major rejection, such as not getting into your dream school or not getting a job you really wanted.",
        "You are feeling like you are not in control of your own life.",
        "You are struggling with a major personal failure.",
        "You are feeling like you are not being seen or heard by the people who are supposed to care about you.",
        "You are dealing with a major ethical dilemma.",
        "You are feeling like you are not living a life that is true to yourself.",
        "You are struggling with a major secret that you are afraid to tell anyone.",
        "You are feeling like you are not making a difference in the world.",
        "You are dealing with a major loss of identity.",
        "You are feeling like you are not worthy of love or happiness.",
        "You are struggling with a major fear or phobia that is holding you back in life.",
        "You are feeling like you are not living up to your full potential.",
        "You are dealing with a major disappointment.",
        "You are feeling like you are not being understood by anyone.",
        "You are struggling with a major life transition, such as moving to a new city or starting a new career.",
        "You are feeling like you are not being appreciated for who you are.",
        "You are dealing with a major health crisis.",
        "You are feeling like you are not being respected by others.",
        "You are struggling with a major financial crisis.",
        "You are feeling like you are not being supported by the people you need most.",
        "You are dealing with a major family crisis.",
        "You are feeling like you are not being forgiven for a mistake you made.",
        "You are struggling with a major creative block.",
        "You are feeling like you are not being challenged enough in your life.",
        "You are dealing with a major spiritual crisis.",
        "You are feeling like you are not being true to your own values.",
        "You are struggling with a major relationship crisis.",
        "You are feeling like you are not being honest with yourself.",
        "You are dealing with a major career crisis.",
        "You are feeling like you are not being kind to yourself.",
        "You are struggling with a major identity crisis.",
        "You are feeling like you are not being patient with yourself.",
        "You are dealing with a major emotional crisis.",
        "You are feeling like you are not being gentle with yourself.",
        "You are struggling with a major mental health crisis.",
        "You are feeling like you are not being compassionate with yourself.",
        "You are dealing with a major physical health crisis.",
        "You are feeling like you are not being loving with yourself.",
        "You are struggling with a major spiritual health crisis.",
        "You are feeling like you are not being accepting of yourself.",
        "You are dealing with a major financial health crisis.",
        "You are feeling like you are not being forgiving of yourself.",
        "You are struggling with a major relationship health crisis.",
        "You are feeling like you are not being supportive of yourself.",
        "You are dealing with a major career health crisis.",
        "You are feeling like you are not being encouraging of yourself.",
        "You are struggling with a major identity health crisis.",
        "You are feeling like you are not being proud of yourself.",
        "You are dealing with a major emotional health crisis.",
        "You are feeling like you are not being respectful of yourself.",
        "You are struggling with a major mental health crisis.",
        "You are feeling like you are not being mindful of yourself.",
        "You are dealing with a major physical health crisis.",
        "You are feeling like you are not being present with yourself.",
        "You are struggling with a major spiritual health crisis.",
        "You are feeling like you are not being aware of yourself.",
        "You are dealing with a major financial health crisis.",
        "You are feeling like you are not being conscious of yourself.",
        "You are struggling with a major relationship health crisis.",
        "You are feeling like you are not being connected with yourself.",
        "You are dealing with a major career health crisis.",
        "You are feeling like you are not being aligned with yourself.",
        "You are struggling with a major identity health crisis.",
        "You are feeling like you are not being authentic with yourself.",
        "You are dealing with a major emotional health crisis.",
        "You are feeling like you are not being vulnerable with yourself.",
        "You are struggling with a major mental health crisis.",
        "You are feeling like you are not being open with yourself.",
        "You are dealing with a major physical health crisis.",
        "You are feeling like you are not being expressive with yourself.",
        "You are struggling with a major spiritual health crisis.",
        "You are feeling like you are not being creative with yourself.",
        "You are dealing with a major financial health crisis.",
        "You are feeling like you are not being resourceful with yourself.",
        "You are struggling with a major relationship health crisis.",
        "You are feeling like you are not being resilient with yourself.",
        "You are dealing with a major career health crisis.",
        "You are feeling like you are not being adaptable with yourself.",
        "You are struggling with a major identity health crisis.",
        "You are feeling like you are not being flexible with yourself.",
        "You are dealing with a major emotional health crisis.",
        "You are feeling like you are not being spontaneous with yourself.",
        "You are struggling with a major mental health crisis.",
        "You are feeling like you are not being playful with yourself.",
        "You are dealing with a major physical health crisis.",
        "You are feeling like you are not being joyful with yourself.",
        "You are struggling with a major spiritual health crisis.",
        "You are feeling like you are not being peaceful with yourself.",
        "You are dealing with a major financial health crisis.",
        "You are feeling like you are not being abundant with yourself.",
        "You are struggling with a major relationship health crisis.",
        "You are feeling like you are not being harmonious with yourself.",
        "You are dealing with a major career health crisis.",
        "You are feeling like you are not being successful with yourself.",
        "You are struggling with a major identity health crisis.",
        "You are feeling like you are not being confident with yourself."
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
        const winner = scores.findIndex(score => score >= 10);
        if (winner !== -1) {
            endGame(winner);
            return;
        }

        currentPlayer = (currentPlayer + 1) % playerCount;
        displays.turn.textContent = `Player ${currentPlayer + 1}'s Turn`;
    }

    function endGame(winner) {
        showScreen(screens.win);
        displays.finalScores.innerHTML = `<h2>Player ${winner + 1} Wins!</h2>`;
        scores.forEach((score, i) => {
            const finalScore = document.createElement('p');
            finalScore.textContent = `Player ${i + 1}: ${score}`;
            displays.finalScores.appendChild(finalScore);
        });
    }

    buttons.start.addEventListener('click', () => {
        playerCount = parseInt(inputs.playerCount.value);
        scores = new Array(playerCount).fill(0);
        drawnCards = [];
        currentPlayer = 0;
        updateScores();
        showScreen(screens.game);
        displays.turn.textContent = `Player ${currentPlayer + 1}'s Turn`;
    });

    buttons.howToPlay.addEventListener('click', () => {
        showModal(modals.howToPlay);
    });

    buttons.drawCard.addEventListener('click', () => {
        if (drawnCards.length === cardDescriptions.length) {
            displays.card.textContent = "All cards have been drawn!";
            return;
        }

        let cardIndex;
        do {
            cardIndex = Math.floor(Math.random() * cardDescriptions.length);
        } while (drawnCards.includes(cardIndex));

        drawnCards.push(cardIndex);

        const colorIndex = Math.floor(Math.random() * cardColors.length);
        displays.card.textContent = cardDescriptions[cardIndex];
        displays.card.style.backgroundColor = cardColors[colorIndex];
        document.getElementById('prompt-message').textContent = `Player ${currentPlayer + 1}, share how you would deal with and cope with this situation with the other players. Press OK when you are ready for others to vote.`;
        showModal(modals.prompt);
    });



    buttons.promptOk.addEventListener('click', () => {
        hideModal(modals.prompt);
        document.getElementById('vote-message').textContent = `Everyone, discuss and vote for the best coping mechanism shared. Decide amongst yourselves who has the best strategy. Click on the player who you've voted for.`;
        const playerButtons = document.getElementById('player-buttons');
        playerButtons.innerHTML = '';
        for (let i = 0; i < playerCount; i++) {
            const btn = document.createElement('button');
            btn.textContent = `Player ${i + 1}`;
            btn.addEventListener('click', () => {
                scores[i]++;
                updateScores();
                hideModal(modals.vote);
                nextTurn();
            });
            playerButtons.appendChild(btn);
        }
        showModal(modals.vote);
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
