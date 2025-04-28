<template>
  <div class="reference-books">
    <h2 class="title">Reference books</h2>
    <div class="books-container">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img
          :src="require(`@/assets/Trehousingpublications_UI/${book.image}`)"
          :alt="book.title"
          class="book-image"
        />

        <div class="rating">
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star">
              <span v-if="star <= Math.floor(book.rating)">★</span>
              <span
                v-else-if="
                  star - 0.5 < book.rating && star > Math.floor(book.rating)
                "
                >⯪</span
              >
              <span v-else>☆</span>
            </span>
          </div>
          <span class="rating-value">{{ book.rating }}</span>
        </div>

        <div class="price-section">
          <span class="price">₹ {{ book.price }}</span>
          <span class="original-price">₹ {{ book.originalPrice }}</span>
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
          title: "Surface Engineering",
          image: "book1.png",
          rating: 4.8,
          price: 399,
          originalPrice: 415,
        },
        {
          id: 2,
          title: "Higher Engineering Mathematics",
          image: "book2.png",
          rating: 4.3,
          price: 399,
          originalPrice: 415,
        },
        {
          id: 3,
          title: "BPSC Economy",
          image: "book3.png",
          rating: 4.6,
          price: 399,
          originalPrice: 415,
        },
        {
          id: 4,
          title: "To Engineer is Human",
          image: "book4.png",
          rating: 4.9,
          price: 399,
          originalPrice: 415,
        },
        {
          id: 5,
          title: "General Studies",
          image: "book5.png",
          rating: 4.2,
          price: 399,
          originalPrice: 415,
        },
      ],
    };
  },
};
</script>

<style>
.reference-books {
  text-align: left;
  padding: 20px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

.title {
  font-size: 34px;
  font-weight: bold;
  color: blue;
  text-decoration: underline;
  margin-bottom: 15px;
  margin-bottom: 30px;
  text-align: center;
}

.books-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
}

.book-card {
  flex: 1 1 auto;
  max-width: 200px;
  min-width: 180px;
  text-align: center;
}

.book-image {
  width: 100%;
  height: 250px; /* Fixed height for uniformity */
  object-fit: cover; /* Ensures images are cropped evenly */
  border-radius: 5px;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Stars on the left, rating value on the right */
  width: 100%;
  color: orange;
  font-size: 23px;
  margin-top: 8px; /* Slightly more margin for spacing */
}

.stars {
  display: flex;
  gap: 4px; /* Increased gap between stars for better spacing */
}

.rating-value {
  font-size: 16px; /* Increased font size for better readability */
  background-color: green;
  color: white;
  padding: 0px 10px; /* Slightly larger padding for better emphasis */
  border-radius: 6px;
}

.price-section {
  display: flex;
  justify-content: space-between; /* Selling price on the left, original price on the right */
  width: 100%;
  margin-top: 8px; /* Slightly more margin for spacing */
}

.price {
  font-size: 18px; /* Slightly larger font size for emphasis */
  font-weight: bold;
  color: red;
}

.original-price {
  font-size: 16px; /* Increased font size */
  text-decoration: line-through;
  color: gray;
}

@media (max-width: 1024px) {
  .books-container {
    flex-wrap: wrap; /* Allow books to wrap to the next row */
    justify-content: flex-start; /* Align items to the left, leaving blank space on the right */
    gap: 20px; /* Add spacing between books */
  }

  .book-card {
    flex: 0 0 calc(33.33% - 20px); /* 3 books per row with spacing */
    max-width: calc(33.33% - 20px); /* Prevent cards from exceeding this size */
  }
}

@media (max-width: 768px) {
  .books-container {
    flex-direction: column;
    align-items: center;
    overflow-x: hidden; /* Disable horizontal scroll */
  }

  .book-card {
    width: 100%; /* Full width to take up the entire row */
    max-width: 200px; /* Optional: Restrict max size */
  }
}
</style>
