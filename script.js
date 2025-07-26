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
        card: document.getElementById('card-display'),
    };

    const inputs = {};

    const closeButtons = document.querySelectorAll('.close-btn');

    let drawnCards = [];
    const cardColors = [
        '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
    ];

    const cardDescriptions = [
        "What is a dream you've never shared with anyone?",
        "What is one of your biggest fears?",
        "What is a memory that always makes you smile?",
        "What is something you're proud of, but don't get to talk about often?",
        "What is a lesson you've learned from a past mistake?",
        "What is a book, movie, or song that has had a profound impact on your life?",
        "If you could have any superpower, what would it be and why?",
        "What is a cause or issue you are passionate about?",
        "What is a skill you've always wanted to learn?",
        "What is a place you've always dreamed of visiting?",
        "What is a moment in your life that you wish you could relive?",
        "What is a quality you admire most in others?",
        "What is something you're grateful for today?",
        "What is a challenge you've overcome that has made you stronger?",
        "What is a piece of advice you would give to your younger self?",
        "What is a tradition or ritual that is important to you?",
        "What is a time you felt truly alive?",
        "What is a way you've grown or changed in the past year?",
        "What is a belief you hold that has been challenged?",
        "What is a question you've always wanted to ask someone?",
        "What is a time you felt completely understood by someone?",
        "What is a risk you've taken that paid off?",
        "What is a way you like to express your creativity?",
        "What is a simple pleasure that brings you joy?",
        "What is a goal you're currently working towards?",
        "What is a time you felt a deep connection with nature?",
        "What is a quality you're working on developing in yourself?",
        "What is a memory of a loved one that you cherish?",
        "What is a way you've found to cope with stress or anxiety?",
        "What is a time you felt a sense of wonder or awe?",
        "What is a fear you've conquered?",
        "What is a way you show love to others?",
        "What is a time you felt like you were part of something bigger than yourself?",
        "What is a lesson you've learned from a difficult experience?",
        "What is a way you've found to stay motivated and inspired?",
        "What is a time you felt a strong sense of intuition?",
        "What is a way you've learned to forgive yourself or others?",
        "What is a time you felt a deep sense of peace or contentment?",
        "What is a way you've found to connect with your inner child?",
        "What is a time you felt a sense of purpose or calling?",
        "What is a way you've learned to embrace your imperfections?",
        "What is a time you felt a deep sense of gratitude?",
        "What is a way you've found to stay grounded in the present moment?",
        "What is a time you felt a strong sense of community?",
        "What is a way you've learned to let go of what no longer serves you?",
        "What is a time you felt a deep sense of connection with another person?",
        "What is a way you've found to cultivate more joy in your life?",
        "What is a time you felt a strong sense of courage?",
        "What is a way you've learned to trust your own instincts?",
        "What is a time you felt a deep sense of inspiration?",
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

    buttons.start.addEventListener('click', () => {
        drawnCards = [];
        showScreen(screens.game);
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
        document.getElementById('prompt-message').textContent = `Share your story related to this topic. The other person will then share a story from their life to relate to what you've shared.`;
        showModal(modals.prompt);
    });



    buttons.promptOk.addEventListener('click', () => {
        hideModal(modals.prompt);
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
