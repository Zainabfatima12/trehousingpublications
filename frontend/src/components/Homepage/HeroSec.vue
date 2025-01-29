<template>
  <div class="hero-section">
    <div class="carousel" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
      <button class="nav left" @click="prevSlide">&#10094;</button>
      <div class="slide" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
        <div class="content">
          <p class="subtitle">Examinations: The Key to Unlocking Your Future</p>
          <h1 class="title">{{ slide.title }}</h1>
          <p class="description">{{ slide.description }}</p>
          <button class="cta">Start Preparation</button>
        </div>
        <div class="image-container">
          <img :src="slide.image" class="main-image" alt="Student studying" />
          <div class="teacher-icons">
            <div v-for="teacher in slide.teachers" :key="teacher.name" class="teacher">
              <img :src="teacher.image" :alt="teacher.name" />
              <span class="teacher-name">{{ teacher.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <button class="nav right" @click="nextSlide">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Get ready for 100+ government exams, covering both central and state opportunities.",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: require('@/assets/Trehousingpublications_UI/heross.png'),
        }
      ],
      currentSlide: 0,
      autoSlideInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 5000);
    },
    pauseAutoSlide() {
      clearInterval(this.autoSlideInterval);
    }
  },
  mounted() {
    this.startAutoSlide();
  }
};
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdf1f1;
  padding: 50px 0;
  width: 100%;
}

.carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 90%;
  max-width: 1200px;
  flex-wrap: wrap;
}

.slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.content {
  max-width: 50%;
  padding: 20px;
}

.subtitle {
  font-weight: bold;
  color: #333;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.description {
  color: #666;
  margin: 10px 0;
}

.cta {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.image-container {
  position: relative;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image {
  width: 100%;
  height: auto;
}

.teacher-icons {
  position: absolute;
  top: 10%;
  left: -20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.teacher {
  display: flex;
  align-items: center;
  background: white;
  padding: 5px;
  border-radius: 10px;
}

.teacher img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.nav {
  position: absolute;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.left {
  left: -40px;
}

.right {
  right: -40px;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .slide {
    flex-direction: column;
    align-items: center;
  }

  .content {
    max-width: 100%;
    text-align: center;
  }

  .image-container {
    max-width: 100%;
  }

  .teacher-icons {
    top: 20%;
    left: 0;
    right: 0;
    justify-content: center;
    flex-direction: row;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .cta {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .teacher {
    display: none; /* Hide teacher icons on small screens */
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.2rem;
  }

  .cta {
    font-size: 0.8rem;
  }
}
</style>
