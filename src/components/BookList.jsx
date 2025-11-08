function BookList({ books, deleteBook }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((b, index) => (
        <div key={index} className="card m-2 p-2" style={{ width: '18rem' }}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>{b}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteBook(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
