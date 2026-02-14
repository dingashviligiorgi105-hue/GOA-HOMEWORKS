import { useState } from "react";

function App() {
  const slides = [
    {
      title: "რა არის React?",
      text: "React არის JavaScript ბიბლიოთეკა, რომელიც გამოიყენება ვებსაიტის UI-ს გასაკეთებლად."
    },
    {
      title: "კომპონენტები",
      text: "React-ში გვერდი იყოფა პატარა ნაწილებად, რომელსაც კომპონენტები ეწოდება."
    },
    {
      title: "Props",
      text: "Props არის მონაცემი, რომელიც კომპონენტს გარედან გადაეცემა."
    },
    {
      title: "State",
      text: "State არის შიდა მონაცემი, რომელიც შეიძლება შეიცვალოს და ავტომატურად განაახლოს გვერდი."
    },
    {
      title: "რატომ React?",
      text: "კოდი უფრო მარტივია, კომპონენტები ხელახლა გამოიყენება და UI სწრაფად განახლდება."
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{slides[index].title}</h1>
      <p>{slides[index].text}</p>

      <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
        Previous
      </button>

      <button onClick={() => setIndex(index + 1)} disabled={index === slides.length - 1}>
        Next
      </button>
    </div>
  );
}

export default App;
