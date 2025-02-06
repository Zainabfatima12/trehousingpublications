<template>
  <div class="container">

    <!-- Sidebar with Latest News -->

    <div class="sidebar">
      <h3 class="latest-news-title">Latest Event</h3>
      <ul class="news-list">
        <li v-for="news in newsLinks" :key="news.id" class="dropdown">
          <div class="dropdown-btn" @click="toggleDropdown(news.id)">
            <span :class="{ rotate: openDropdown === news.id }"> > </span>{{ news.title }}
          </div>
          <ul v-if="openDropdown === news.id" class="dropdown-content">
            <li v-for="link in news.links" :key="link.id">
              <a :href="link.url" target="_blank">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Main Content Section -->

    <div class="content">
      <h2>Bihar Computer Science Teacher Exam Pattern</h2>
      <p>
        BPSC Higher Secondary Teacher Examination for Computer Science Subject will be held for 220 marks
        for 220 questions. There will be 2 papers: Paper 1 (Language) and Paper 2 (General Studies). lorem500
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDropdown: null,
      newsLinks: [
        {
          id: 1,
          title: "REET 2025 Notification",
          links: [
            { id: 1, text: "Exam Information of REET", url: "#" },
            { id: 2, text: "Some Other Link", url: "#" }
          ]
        },
        {
          id: 2,
          title: "UGC Answer Key 2025",
          links: [
            { id: 1, text: "UGC NET Official Answer Key", url: "#" },
            { id: 2, text: "Important Guidelines", url: "#" }
          ]
        },
        {
          id: 3,
          title: "TS TET Answer Key 2025",
          links: [
            { id: 1, text: "Exam Information of TS TET ", url: "#" },
            { id: 2, text: "Some Other Link", url: "#" }
          ]
        },
        {
          id: 4,
          title: "Railway Teacher Vacancy 2025",
          links: [
            { id: 1, text: "Railway Official Teacher", url: "#" },
            { id: 2, text: "Important Guidelines", url: "#" }
          ]
        },
        {
          id: 5,
          title: "Railway Teacher Syllabus",
          links: [
            { id: 1, text: "Railway Official Syllabus ", url: "#" },
            { id: 2, text: "Important Guidelines", url: "#" }
          ]
        }

      ]
    };
  },
  methods: {
    toggleDropdown(id) {
      this.openDropdown = this.openDropdown === id ? null : id;
    }
  }
};
</script>

<style scoped>

/* Layout */
.container {
  display: flex;
  gap: 20px;
  padding: 0 30px;
  width: 100%;
  max-width: 100%;
}

/* Sidebar Styling */
.sidebar {
  width: 25%;
  padding-right: 20px;
}

/* Latest News Title */
.latest-news-title {
  background-color: #ff3b5c;
  color: white;
  padding: 10px;
  font-weight: bold;
  margin: 0;
  
}

/* News List */
.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  font-size: 18px;
  padding:10px 0;
  margin-bottom: 10px;
}

/* Dropdown Styling */
.dropdown {
  position: relative;
}

/* Dropdown Button */
.dropdown-btn {
  display: flex;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: 500;
  border-radius: 5px;
 
}


.dropdown-btn span {
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(90deg);
}

/* Dropdown Content */
.dropdown-content {
  padding: 0;
  border-radius: 5px;
  list-style: none;
}

.dropdown-content li {
  padding: 5px 25px;
  margin-left: 15px;
  font-size: 18px;

}

.dropdown-content li:hover {
  background: #dfdcdc;
  /* padding: 5px; */
  border-radius: 5px;
  width: auto;
}

.dropdown-content a {
  text-decoration: none;
  color: black;
  display: block;
}

/* Content Section */
.content {
  flex: 1;
}

/* Ensure proper alignment in the container */
.container {
  align-items: flex-start;
}



/* Responsive Media Queries */
@media screen and (max-width: 768px) {

  .container
  {
    margin: 0;
    padding: 0;
   
  }
  
  .sidebar {
    width: 30%;
    padding-right: 0;
  }


  .dropdown-btn {
    font-size: 16px;
  }

  .dropdown-content li {
    font-size: 16px;
    padding:0 10px;
   
  }

  .latest-news-title {
    font-size: 18px;
  }

  .container {
    padding: 10px;
  }
}

@media screen and (max-width: 480px) {

  .container {
    flex-direction: column;
    padding: 0 15px;
  }
  .sidebar
  {
    width: 100%;
    margin: 0;
  }

  .content {
    padding-left: 0;
    width: 100%;
  }

  .dropdown-btn {
    font-size: 14px;
  }

  .dropdown-content li {
    font-size: 14px;
  }
}
</style>
