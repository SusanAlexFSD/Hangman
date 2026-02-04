const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function Keyboard({ guessedLetters, onLetterClick }) {
    return (
        <div className="keyboard">
            {ALPHABET.map((letter) => (
                <button
                key={letter}
                onClick={() => onLetterClick(letter)}
                disabled={guessedLetters.includes(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}

export default Keyboard;