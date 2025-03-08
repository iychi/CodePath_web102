import React, { useState } from "react";
import "../Flashcards.css";

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? card.german : card.english}
    </div>
  );
};

export default Flashcard;
