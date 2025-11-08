import { useState } from "react";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);

  const addBook = () => {
    if (book.trim() !== "") {
      setBooks([...books, book]);
      setBook("");
    }
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div className="container">
      <Header />
      <AddBook book={book} setBook={setBook} addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;

