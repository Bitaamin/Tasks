import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const data = {
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript Library",
    user: {
      firstname: "John",
      lastname: "Sedrick",
    },
    techskill: ["HTML", "JS", "CSS", "React"],
  };

  const greetPeople = () => {
    alert("Welcome to my corner");
  };
  const showDate = () => {
    let date = new Date();

    alert(date);
  };

  return (
    <div className="container">
      <Header
        welcome={data.welcome}
        title={data.title}
        subtitle={data.subtitle}
      />
    </div>
  );
}

export default App();

export default function Header() {
  return <div>Header</div>;
}
