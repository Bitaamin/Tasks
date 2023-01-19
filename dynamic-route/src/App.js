
import './App.css';
import { Routes, Route } from "react-router-dom"
import Book from './component/Book';
import BookLayout from './component/BookLayout';
import BookList from './component/BookList';
import Home from './component/Home';
import About from './component/About';
import Person from './component/Person';
import Company from './component/Company';

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div style={{ backgroundColor: "grey" }}>

        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/about" element={<About />}>
            <Route index element={<Person />} />
            <Route path="/about/company" element={<Company />} />
          </Route>


          <Route path='/books' element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path='/books/:id' element={<Book />} />
            {/* <Route path='/books/new' element={<BookNew />} /> */}
          </Route>
        </Routes>
      </div>
      <footer>2023</footer>
    </div>
  );
}

export default App;
