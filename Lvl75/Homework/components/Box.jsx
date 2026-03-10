// ეს კომპონენტი აბრუნებს div-ს.
// colors მასივში ვინახავთ ფერებს.
// randomIndex შემთხვევით ირჩევს ერთ ფერს.
// backgroundColor გადაეცემა div-ს style-ში.
// App.jsx-ში თუ Box 2-ჯერ გამოვიძახებთ, შეიძლება ორივეს სხვადასხვა ფერი ჰქონდეს.

function Box() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const backgroundColor = colors[randomIndex];

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: backgroundColor,
        margin: "10px",
      }}
    ></div>
  );
}

export default Box;
