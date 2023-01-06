import './App.css';
import Header from "./component/header";
import Main from "./component/main";
import Button from "./component/button"
import Footer from "./component/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    date: new Date(),
  };

  function greetPeople() {
    alert("Hello people")
  }


  function showDate() {
    const dt = new Date();
    alert(dt.getFullYear())
  }





  return (

    <div className="p-3">
      <Header
        wel={data.welcome}
        tit={data.title}
      />

      <Main
        sub={data.subtitle}
        fname={data.user.firstname}
        lname={data.user.lastname}
        // date={data.date.getFullYear}
        techskill={data.techskill}
      />

      <Button
        text="Greet People"
        color="aqua"
        handleClick={greetPeople}
      />
      <Button
        text="Show Date"
        color="aqua"
        handleClick={showDate}
      />

      <Footer
      />
    </div>

  );
}

export default App;
