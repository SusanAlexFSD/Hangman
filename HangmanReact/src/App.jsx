import { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay.jsx';
import Keyboard from './components/Keyboard.jsx';
import HangmanDrawing from './components/HangmanDrawing.jsx';

{/* STORES AN ARRAY OF WORDS FOR THE GAME */}
const words = [
  'apple', 'banana', 'cherry', 'dragon', 'eagle', 'forest', 'galaxy', 'harmony', 'island', 'jungle',
  'kitten', 'lemon', 'mountain', 'nebula', 'ocean', 'penguin', 'quartz', 'rocket', 'sunset', 'tiger',
  'umbrella', 'volcano', 'whistle', 'xylophone', 'yogurt', 'zebra', 'anchor', 'bridge', 'castle', 'desert',
  'emerald', 'flamingo', 'giraffe', 'horizon', 'igloo', 'jacket', 'kangaroo', 'lantern', 'mystery', 'night',
  'oxygen', 'puzzle', 'quiver', 'rainbow', 'safari', 'treasure', 'unicorn', 'voyage', 'wizard', 'yawn',
  'zephyr', 'avocado', 'breeze', 'cactus', 'dolphin', 'engine', 'feather', 'glacier', 'harvest', 'icicle',
  'jigsaw', 'koala', 'lighthouse', 'meadow', 'noodle', 'octopus', 'parrot', 'quiet', 'robot', 'snowflake',
  'tornado', 'utopia', 'vortex', 'waterfall', 'xenon', 'yeti', 'zeppelin', 'alchemy', 'bubble', 'coral',
  'daisy', 'echo', 'fossil', 'goblin', 'hazard', 'illusion', 'jewel', 'karma', 'labyrinth', 'marble',
  'nugget', 'orbit', 'pirate', 'quest', 'riddle', 'sphinx', 'twilight', 'update', 'victory', 'wander', 
  'adventure', 'balance', 'crystal', 'discover', 'element', 'freedom', 'gravity', 'harbor', 'ignite', 'jungle',
  'kingdom', 'legend', 'miracle', 'nebula', 'obelisk', 'paradox', 'quantum', 'raven', 'signal', 'tunnel',
  'unknown', 'village', 'wanderer', 'xenophobia', 'yonder', 'zenith', 'asteroid', 'bunker', 'compass', 'doodle',
  'engineer', 'furnace', 'galore', 'hazelnut', 'inkling', 'jukebox', 'karaoke', 'landscape', 'mission', 'nymph',
  'oasis', 'phantom', 'quokka', 'remedy', 'spectrum', 'tempo', 'undertow', 'valiant', 'whimsy', 'xenolith',
  'yesterday', 'zodiac', 'artifact', 'blizzard', 'crescent', 'dynamo', 'epic', 'fluke', 'gadget', 'hexagon',
  'instinct', 'journey', 'keystone', 'lantern', 'matrix', 'nomad', 'oracle', 'pixel', 'quench', 'resonance',
  'sapphire', 'topaz', 'uplift', 'vector', 'whirlpool', 'xenial', 'yield', 'zen', 'amber', 'beacon',
  'canyon', 'dawn', 'ember', 'fable', 'grotto', 'halo', 'iceberg', 'jade', 'kettle', 'lunar',
  'meteor', 'nebulae', 'omen', 'pinnacle', 'quilt', 'rift', 'stardust', 'tidal', 'utensil', 'vault'
];
{/* FUNCTION CALLED getRandomWord THAT PICKS A RANDOM WORD FOR THE ARRAY */}
const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  {/* CALLS THE getRandomWord AND ALSO HOLDS THE CHOSEN WORD - wordToGuess */}
  const [wordToGuess, setWordToGuess] = useState(getRandomWord);
  {/* STARTS WITH AN EMPTY ARRAY [] AND KEEPS TRACK OF THE LETTERS GUESSED */}
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= 6;

  const addGuessedLetter = (letter) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters((prev) => [...prev, letter]);
  };

  const resetGame = () => {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
  };

  useEffect(() => {
    const handler = (e) => {
      const key = e.key.toLowerCase();
      if (/^[a-z]$/.test(key)) {
        addGuessedLetter(key);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler); // cleanup!
  }, []);

  return (
    <div className="app">
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} reveal={isLoser} />
      <Keyboard guessedLetters={guessedLetters} onLetterClick={addGuessedLetter} />
      {isWinner && <p>You Win!</p>}
      {isLoser && <p>You Lose! The word was: {wordToGuess}</p>}
      {(isWinner || isLoser) && (
      <button onClick={resetGame} className="reset-button">Reset Game</button>
)}
    </div>
  );
}

export default App;
