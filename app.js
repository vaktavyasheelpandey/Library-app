document.getElementById('addBookBtn').addEventListener('click', function() {
    const bookTitle = document.getElementById('bookTitle').value;
  
    if (bookTitle) {
      addBook(bookTitle);
      document.getElementById('bookTitle').value = '';
    }
  });
  
  function addBook(title) {
    const bookList = document.getElementById('bookList');
    const bookCard = document.createElement('div');
    bookCard.className = 'glass-card p-6 text-center text-white';
  
    bookCard.innerHTML = `
      <h2 class="text-2xl font-bold neon-text">${title}</h2>
    `;
  
    bookList.appendChild(bookCard);
  }
  