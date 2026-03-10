// კომპონენტი არის კოდის პატარა ნაწილი, რომელიც რაღაც ერთ კონკრეტულ რამეს აჩვენებს ეკრანზე.
// კომპონენტების გამოყენება კარგი პრაქტიკაა, რადგან კოდი ხდება უფრო დალაგებული, მარტივი წასაკითხი და თავიდან გამოყენებადი.

import ShowSecretMessage from "./components/ShowSecretMessage";
import Box from "./components/Box";
import CheckUserAge from "./components/CheckUserAge";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1>Homework</h1>

      <ShowSecretMessage />

      <Box />
      <Box />

      <CheckUserAge />

      <Products />
    </div>
  );
}

export default App;
