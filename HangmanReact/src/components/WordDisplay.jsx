function WordDisplay({ word, guessedLetters, reveal}) {
    return (
        <div className="word">
            {word.split('').map((letter, idx)=> (
                <span key={idx} className="etter">
                    {guessedLetters.includes(letter) || reveal ? letter : '_'}
                </span>
            ))}
        </div>
    );
}

export default WordDisplay;