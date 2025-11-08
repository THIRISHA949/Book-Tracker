function AddBook({ book, setBook, addBook }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <input
        type="text"
        className="form-control w-50 me-2"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        placeholder="Enter book name"
      />
      <button className="btn btn-success" onClick={addBook}>Add</button>
    </div>
  );
}

export default AddBook;
