import { useState } from "react";

function ShowSecretMessage() {
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  if (showSecretMessage === true) {
    return <p>This is a secret message</p>;
  } else {
    return (
      <button onClick={() => setShowSecretMessage(true)}>
        Show secret message
      </button>
    );
  }
}

export default ShowSecretMessage;
