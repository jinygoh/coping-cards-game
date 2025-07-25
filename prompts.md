# Prompts

## Original Prompt

Coping Cards Game for CrazyGames
Here's a detailed prompt for an AI coding agent to develop your card game for CrazyGames, focusing on a single-computer, shared-screen experience:
Game Title: Coping Cards (or a similar suitable title – the agent can suggest variations)
Core Concept: A social card game where players draw cards describing difficult situations and verbally share their coping mechanisms. Players then vote on the best coping strategy. Designed for local multiplayer on a single computer.
Target Platform: CrazyGames (web-based, HTML5/JavaScript preferred for broad compatibility and ease of deployment).
Player Count: 2-6 players (adjustable in-game if possible, default to 4 for initial testing).
Game Flow & Mechanics:
 * Game Setup (Start Screen):
   * Game Title: Prominently displayed.
   * "Start Game" Button: Initiates the game.
   * "How to Play" Button: Briefly explains the rules (see "Rules/Instructions" below).
   * "Number of Players" Selector: A simple slider or dropdown to select between 2 and 6 players. Default to 4.
 * Gameplay Loop:
   * Round Start:
     * Display a clear indication of whose turn it is (e.g., "Player 1's Turn").
     * "Draw Card" Button: Player clicks this to draw a card.
     * Card Display: A large, clear display of the drawn card's "Difficult Situation" description.
     * Prompt to Share: A pop-up or on-screen text box that says:
       > "Player [Current Player Number], share how you would deal with and cope with this situation with the other players. Press OK when you are ready for others to vote."
       >
     * "OK" Button: Player clicks this after verbally sharing their coping mechanism.
   * Voting Phase:
     * After the "OK" button is clicked, the card description remains visible.
     * Prompt to Vote: A new pop-up or on-screen text box appears, stating:
       > "Everyone, discuss and vote for the best coping mechanism shared. Decide amongst yourselves who has the best strategy. The player whose coping mechanism is chosen gets 1 point."
       >
     * "Vote Complete" Button: Any player can click this once voting is done. This button should advance the game.
   * Score Update:
     * After "Vote Complete" is clicked, display the current scores for all players.
     * The current player who just shared their coping mechanism (and won the vote) should have their score incremented by 1.
   * Next Round:
     * Loop back to the "Round Start" for the next player in sequence.
 * Game End:
   * The game continues for a pre-determined number of rounds (e.g., 5-10 rounds, agent can suggest if adjustable).
   * Alternatively, the game can end when players decide (e.g., a "End Game" button visible on the score screen after a few rounds).
   * Winning Screen: Displays the final scores and declares the winner(s).
   * "Play Again" Button: Restarts the game.
   * "Main Menu" Button: Returns to the start screen.
Content (Card Data):
 * The agent should generate a diverse list of ~50-100 "Difficult Situation" card descriptions. Examples:
   * "You accidentally send a very embarrassing message to your boss."
   * "You realize you've forgotten your wallet after ordering a large meal at a restaurant."
   * "A close friend cancels plans with you at the last minute for the third time this month."
   * "You receive harsh criticism on a project you worked very hard on."
   * "You feel overwhelmed by the amount of work you have to do."
   * "You witness someone being rude to a service worker."
   * "You find out your favorite local shop is closing down."
   * "You've been trying to learn a new skill for weeks, but you feel like you're not making progress."
   * "You have to give a presentation to a large audience, and you're feeling very anxious."
   * "Someone you care about is going through a tough time, and you don't know how to help."
User Interface (UI) / User Experience (UX) Considerations:
 * Clean and Intuitive: Simple, easy-to-understand layout.
 * Large, Readable Text: Essential for shared-screen gameplay.
 * Clear Prompts: Instructions should be unambiguous.
 * Visual Feedback: When a button is clicked, or a score updates.
 * Minimal Animations: Keep it simple and focused on clarity for CrazyGames.
 * Responsive Design: Adaptable to different screen sizes/aspect ratios, as CrazyGames caters to various devices.
Technical Requirements:
 * Language: JavaScript (HTML5, CSS).
 * Frameworks/Libraries: Minimal dependencies preferred for CrazyGames performance (e.g., Vanilla JS, or a lightweight library like Phaser if game-loop management becomes complex, but avoid heavy frameworks like React/Angular).
 * Local Storage (Optional): Could be used to remember the last player count or high scores.
 * No Server-Side Components: The game must be entirely client-side.
 * CrazyGames SDK Integration (Conceptual): The agent should be aware that CrazyGames requires specific SDK integration for ads, leaderboards (not needed here), etc. For this game, the primary concern is proper HTML5 export and responsiveness.
Rules/Instructions (for "How to Play" section):
 * "Setup: Choose the number of players (2-6). Everyone will share one computer."
 * "Drawing a Card: On your turn, click 'Draw Card' to reveal a difficult situation."
 * "Share Your Coping: Verbally explain to the other players how you would deal with and cope with the situation on the card."
 * "Vote: After sharing, the other players will discuss and vote on whose coping mechanism was the best. The player who shared gets 1 point if their coping mechanism is chosen."
 * "Winning: The player with the most points at the end of the game wins!"
Deliverables:
 * A complete, runnable HTML5 game folder (HTML, CSS, JavaScript files).
 * Clear and commented code.
 * A README.md file explaining how to run the game locally and any design decisions.
 * A list of the generated card descriptions.
