import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import backgroundImg from "./assets/background.jpg";


const flashcardData = [
  { german: "Guten Morgen.", english:"Good morning." },
  { german: "Danke.", english:"Thank you." },
  { german: "Auf Widerschene.", english:"See you." },
  { german: "Ich liebe dich.", english:"I love you." },
  { german: "Wie geht es dir?", english: "How are you?" },
  { german: "Ich spreche ein bisschen Deutsch.", english: "I speak a little German." },
  { german: "Wo ist die Toilette?", english: "Where is the bathroom?" },
  { german: "Keine Ahnung.", english: "No ide." },
  { german: "Entschuldigung.", english: "Excuse me." },
  { german: "Ich verstehe nicht.", english: "I don't understand." },
  { german: "Wie spät ist es?", english: "What time is it?" },
  { german: "Könnten Sie mir helfen?", english: "Could you help me?" },
  { german: "Viel Spaß!", english: "Have fun!" },
  { german: "Bis bald!", english: "See you soon!" },
  { german: "Schönen Tag!", english: "Have a nice day!" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const toPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? flashcardData.length - 1 : prevIndex - 1));
  };

  const toNextCard = () => {
    let newIndex;
  do {
    newIndex = Math.floor(Math.random() * flashcardData.length);
  } while (newIndex === currentIndex);
  setCurrentIndex(newIndex);
};

  return (
    <>
    <div className="overlay"></div>
    <div
  className="flashcards-container"
  style={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
      <h2>Let's learn some useful German phrases 🇩🇪</h2>
      <Flashcard card={flashcardData[currentIndex]} />
      <p>Total Cards: {flashcardData.length}</p>
      <div className="buttons">
        <button onClick={toPreviousCard}>《</button>
        <button onClick={toNextCard}>》</button>
      </div>
    </div>
    </>
  );
}

export default App;