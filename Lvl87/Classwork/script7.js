import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      {/*
        Controlled component:
        ეს არის ისეთი input, რომლის value კონტროლდება state-ით.
        ანუ რასაც მომხმარებელი წერს, ის ინახება state-ში.

        მაგალითი:
        <input value={input} onChange={handleChange} />

        Uncontrolled component:
        ეს არის ისეთი input, რომელსაც state არ აკონტროლებს.
        მნიშვნელობა პირდაპირ თვითონ input-ში ინახება.

        მაგალითი:
        <input type="text" />

        განსხვავება:
        Controlled -> მონაცემს state აკონტროლებს
        Uncontrolled -> მონაცემს თვითონ input აკონტროლებს
      */}

      <input type="text" value={input} onChange={handleChange} />

      <p>{input}</p>

      {/*
        ეს არის controlled component,
        რადგან input-ს აქვს value={input}
        და მისი მნიშვნელობა მოდის state-იდან.
      */}
    </div>
  );
}

export default App;