<template>
    <div class="reference-books-section">
      <h2 class="section-title">Reference Books</h2>
      <div class="books-grid">
        <div v-for="book in books" :key="book.id" class="book-card">
          <img :src="require(`@/assets/Trehousingpublications_UI/${book.cover}`)" :alt="book.title" class="book-cover" />
          <div class="book-rating">
            <div class="stars">
              <span v-for="star in Math.floor(book.rating)" :key="star">⭐</span>
              <span v-if="book.rating % 1 !== 0" class="half-star">⭐</span>
              <span v-for="star in 5 - Math.ceil(book.rating)" :key="star" class="empty-star">⭐</span>
            </div>
            <div class="rating" :style="{ backgroundColor: '#388e3c', color: 'white' }">{{ book.rating }}</div>
          </div>
          <div class="book-price">
            <span class="current-price">₹{{ book.price }}</span>
            <span class="original-price">₹{{ book.originalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [
          {
            id: 1,
            cover: "book1.png",
            rating: 4.8,
            price: 399,
            originalPrice: 415
          },
          {
            id: 2,
            cover: "book2.png",
            rating: 4.8,
            price: 399,
            originalPrice: 415
          },
          {
            id: 3,
            cover: "book3.png",
            rating: 4.8,
            price: 399,
            originalPrice: 415
          },
          {
            id: 4,
            cover: "book4.png",
            rating: 4.8,
            price: 399,
            originalPrice: 415
          },
          {
            id: 5,
            cover: "book5.png",
            rating: 4.8,
            price: 399,
            originalPrice: 415
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .reference-books-section {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    text-decoration: underline;
    margin-bottom: 20px;
    color: #5331fe;
  }
  
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .book-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0px;
    width: 260px;
    text-align: center;
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 430px;
  }
  
  .book-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .book-cover {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 4px;
  }
  
  .book-rating {
    display: flex;
    align-items: center;
    gap: 80px;
    margin-top: 5px;
    justify-content: center;
  }
  
  .stars {
    color: #ffa000;
    display: flex;
    gap: 2px;
  }
  
  .half-star {
    background: linear-gradient(90deg, #ffa000 50%, #ddd 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .empty-star {
    color: #ddd;
  }
  
  .rating {
    padding: 0px 10px;
    font-size: 18px;
    border-radius: 4px;
    display: inline-block; /* Adjusts the height to content */
  }
  
  .book-price {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 140px;
    font-size: 18px;
    margin-top: -10px;
  }
  
  .current-price {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #888;
  }
  @media (max-width: 768px) {
  .books-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Centers books on smaller screens */
  }
}

  </style>
  