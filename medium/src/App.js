import Nav from "./component/Nav";
import Home from "./component/home.js";
// import TrendNews from "./component/trendNews";
// import Content from "./component/content";
// import Footer from "./component/footer";
import './App.css';

function App() {
  
  const Data = [
    {
      id:1,
      profileImage: require("./images/pro1.jpeg"),
      name: "Micheal Jackson",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    },
    {
      id:2,
      profileImage: require("./images/pro1.jpeg"),
      name: "Micheal Jackson",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    },
    {
      id:3,
      profileImage: require("./images/pro1.jpeg"),
      name: "Micheal Jackson",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    },
    {
      id:4,
      profileImage: require("./images/pro1.jpeg"),
      name: "Micheal Jackson",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    },
    {
      id:5,
      profileImage: require("./images/pro1.jpeg"),
      name: "Bilgvvn bagsh",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    },
    {
      id:6,
      profileImage: require("./images/pro1.jpeg"),
      name: "Micheal Jordan",
      comment: "My 2022 End of Year Lists",
      date: "Dec 23, 2022",
      minut: "3"
    }
  ]
 return (
  
  <div className="">
    <Nav/>
    <Home/>
  </div>
 )
}

export default App;
