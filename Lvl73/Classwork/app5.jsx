function App() {
  const names = ["Giorgi", "Nika", "Luka", "Saba", "Dato"];

  return (
    <div>
      <h1>Names List</h1>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default App;
