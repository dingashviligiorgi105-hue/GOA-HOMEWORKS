// კომპონენტი არის UI-ის (ეკრანის) პატარა ნაწილი.
// მაგალითად: Header, Footer, Profile და სხვა.
//
// რატომ ვქმნით კომპონენტებს?
// 1) რომ კოდი იყოს დალაგებული და ადვილად წასაკითხი
// 2) რომ ერთი და იგივე ნაწილი ბევრჯერ გამოვიყენოთ
// 3) რომ ცვლილება იყოს მარტივი (ერთ ფაილში შეცვლი და ყველგან განახლდება)

import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Counter />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
