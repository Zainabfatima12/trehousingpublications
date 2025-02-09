<template>
  <div class="container">
    <div class="left-column">
      <aside class="sidebar">
        <h2 class="explore">Explore All Previous Year Papers</h2>
        <nav>
          <ul class="space-y-2">
            <li v-for="(item, index) in menuItems" :key="index" class="dropdown menu-item syllabus-dropdown">
              <a
                href="#"
                class="block px-4 py-2 text-black rounded-md hover:bg-gray-700 flex items-center no-underline"
                @click.prevent="toggleSyllabusDropdown(index)"
              >
                <span class="dropdown-arrow" :class="{ 'rotate-90': item.isOpen }">&#8250;</span>
                <span class="menu-item-text">{{ item.text }}</span>
              </a>
              <ul v-if="item.isOpen" class="dropdown-menu mt-2 space-y-2">
                <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                  <a
                    :href="subItem.link"
                    class="block px-4 py-2 text-black rounded-md hover:bg-gray-700 no-underline"
                  >
                    {{ subItem.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="container">
        <div class="news-sidebar">
          <h3 class="news-title">Latest Event</h3>
          <ul class="news-list-wrapper">
            <li v-for="news in newsLinks" :key="news.id" class="news-dropdown latest-event-dropdown">
              <div class="news-dropdown-btn" @click="toggleNewsDropdown(news.id)">
                <span :class="{ 'news-rotate': openDropdown === news.id }"> > </span>{{ news.title }}
              </div>
              <ul v-if="openDropdown === news.id" class="news-dropdown-content">
                <li v-for="link in news.links" :key="link.id">
                  <a :href="link.url" target="_blank">
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="header">
        <h1>
          <img
            src="@/assets/bsct.png"
            alt="icon"
            class="heading-icon"
          />
          Bihar Computer Teacher Syllabus and Exam Pattern 2023, Check Marking Scheme!
        </h1>
        <p>
          BPSC Bihar Computer Science Teacher Syllabus 2023 is released by Education
          Department of Bihar. Candidates must access the BPSC Bihar Computer Science
          Teacher Syllabus from the article below.
        </p>
      </div>
      <div class="image-section">
        <img
          src="@/assets/bcts.png"
          alt="BPSC Bihar Computer Science Teacher Syllabus"
        />
      </div>
      <div class="download-section">
        <h2>BPSC TRE(11–12) Computer Science Syllabus.</h2>
        <button class="download-btn" @click="downloadPDF">Download</button>
      </div>
      <div class="syllabus-overview">
        <h3 class="section-heading">Bihar Computer Science Teacher Syllabus Overview</h3>
        <p>
          The Bihar Computer Science Teacher Recruitment 2023 is conducted by the
          Education Department of Bihar. The candidates must refer to the following
          table for more information on the Bihar Computer Science Teacher Syllabus....
          <a
            href="https://www.adda247.com/teaching-jobs-exam/bihar-computer-science-teacher-syllabus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </p>
      </div>
      <div class="exam-pattern">
        <h3 class="section-heading"> Bihar Computer Science Teacher Exam Pattern</h3>
        <p>
          BPSC Higher Secondary Teacher Examination for Computer Science Subject will be
          held for 220 marks for 220 questions. There will be 2 papers held for Bihar
          Computer Science Higher Secondary Teacher Recruitment Exam 2023. Bihar Computer
          Science Teacher Paper 1 will be held for Language and Paper 2 will have General
          Studies.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyllabusAndNews',
  data() {
    return {
      menuItems: [
        { text: "All subject Syllabus", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "Bihar Computer Teacher", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "Intelligence Bureau (IB)", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "CSIR SP ASO", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "NAICL Assistant", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "SSC CGL", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] },
        { text: "Bank SO", isOpen: false, subMenu: [{ text: "Sub Item 1", link: "#" }, { text: "Sub Item 2", link: "#" }] }
      ],
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
            { id: 1, text: "Exam Information of TS TET", url: "#" },
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
            { id: 1, text: "Railway Official Syllabus", url: "#" },
            { id: 2, text: "Important Guidelines", url: "#" }
          ]
        }
      ]
    };
  },
  methods: {
    // Toggle the syllabus dropdown and close others
    toggleSyllabusDropdown(index) {
      // Toggle the isOpen state of the clicked item
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen;

      // Close other dropdowns
      this.menuItems.forEach((item, idx) => {
        if (idx !== index) {
          item.isOpen = false;
        }
      });
    },

    // Toggle the news dropdown for a specific id
    toggleNewsDropdown(id) {
      // Toggle the news dropdown state
      this.openDropdown = this.openDropdown === id ? null : id;
    },

    // Function to open a PDF in a new tab
    downloadPDF() {
      window.open('https://example.com/path-to-your-pdf.pdf', '_blank');
    }
  }
};
</script>




<style scoped>
/* Custom styles for dropdowns and rotation */
.dropdown-arrow {
  transition: transform 0.3s ease;
}

.rotate-90 {
  transform: rotate(90deg);
}

.news-rotate {
  transform: rotate(90deg);
}

/* General styles for dropdown */
.dropdown-menu {
  padding-left: 20px;
  list-style-type: none;
  display: none;
  position: absolute;
  background-color: transparent; /* Remove the white box background */
  border: none; /* Remove border */
  width: 100%;
  z-index: 10;
  box-shadow: none; /* Remove the box shadow */
}

.dropdown-menu li {
  padding: 5px 0;
}

.menu-item-text {
  margin-left: 8px;
}

.news-dropdown-content {
  padding-left: 20px;
  display: none;
  position: absolute;
  background-color: transparent; /* Remove the white box background */
  border: none; /* Remove border */
  width: 100%;
  z-index: 10;
  box-shadow: none; /* Remove the box shadow */
}

.news-dropdown-content li {
  padding: 5px 0;
}

/* Syllabus and News Dropdown Toggle Button */
.news-dropdown-btn {
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
}

/* Main container and layout */
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  max-width: 1370px;
  margin: 0 auto;
  width: 100%;
}

.sidebar-container {
  flex: 2;
  background-color: whitesmoke;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  height: 300px;
  overflow-y: auto;
}

.explore {
  color: black;
  text-align: left;
  font-size: medium;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.menu-item {
  margin-bottom: 10px;
}

.dropdown-menu {
  padding-left: 0;
  max-height: 200px;
  overflow-y: auto;
  position: relative;
  margin-left: 30px;
}

.dropdown a {
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  text-decoration: none;
  color: black !important;
}

.dropdown a:hover {
  color: orange !important;
  text-decoration: none; /* Prevent underline on the whole link */
}

/* Ensure the arrow is never underlined */
.dropdown-arrow {
  margin-right: 10px;
  font-size: 20px;
  transition: transform 0.3s ease;
  color: black;
  text-decoration: none !important;
  display: inline-block; /* Ensures correct behavior */
}

/* Only underline the text on hover */
.dropdown a:hover .menu-item-text {
  text-decoration: underline;
}


.dropdown-menu a {
  padding-left: 20px;
  color: black;
  text-decoration: none;
}

.dropdown-menu a:hover {
  color: orange;
}

/* Latest Event Section */
.latest-event {
  flex: 2;
  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-left: 1rem;
}

.content {
  flex: 6;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
}

/* Header Styles */
.header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header .heading-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.header p {
  font-size: 1rem;
  color: #555;
}

/* Image Section */
.image-section img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
}

/* Button Style */
.download-btn {
  padding: 0.5rem 3rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #04b8fa;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}

.download-btn:hover {
  background-color: #0056b3;
}

/* Overview and Exam Pattern */
.syllabus-overview,
.exam-pattern {
  margin-bottom: 1.5rem;
}

.syllabus-overview h3,
.exam-pattern h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2804cb;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #b1eef6;
  border-radius: 4px;
}

.syllabus-overview p,
.exam-pattern p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

/* Link Style */
a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Scrollbar Styles */
.sidebar-container::-webkit-scrollbar,
.dropdown-menu::-webkit-scrollbar {
  width: 8px;
}

.sidebar-container::-webkit-scrollbar-thumb,
.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 4px;
}

.sidebar-container::-webkit-scrollbar-thumb:hover,
.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background-color: darkgray;
}

.sidebar-container::-webkit-scrollbar-track,
.dropdown-menu::-webkit-scrollbar-track {
  background-color: whitesmoke;
  border-radius: 4px;
}

/* News Section Styles */
.news-container {
  display: flex;
  gap: 20px;
  padding: 0 30px;
  width: 100%;
}

.news-sidebar {
  width: 100%;
  padding-right: 20px;
}

.news-title {
  background-color: #ff3b5c;
  color: white;
  padding: 10px;
  font-weight: bold;
  margin: 0;
}

.news-list-wrapper {
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border: 1px solid black;
  font-size: 18px;
}

.news-dropdown {
  position: relative;
}

.news-dropdown-btn {
  display: flex;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: 500;
  border-radius: 5px;
}

.news-dropdown-btn span {
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.news-rotate {
  transform: rotate(90deg);
}

.news-dropdown-content {
  padding: 0;
  border-radius: 5px;
  list-style: none;
  position: relative;
  left: 0;
  top: 100%;
  background-color: transparent; /* No background */
  width: 100%;
  z-index: 100;
  border: none; /* No border */
  box-shadow: none; /* No box-shadow */
}

.news-dropdown-content li {
  padding: 5px 25px;
  margin-left: 15px;
  font-size: 18px;
}

.news-dropdown-content li:hover {
  background: #dfdcdc;
  border-radius: 5px;
}

.news-dropdown-content a {
  text-decoration: none;
  color: black;
  display: block;
}

/* Show dropdowns when isOpen is true */
.menu-item > .dropdown-menu {
  display: block;
}

.news-dropdown-content {
  display: block;
}

.news-dropdown-btn span {
  transform: rotate(90deg);
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-left: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .latest-event {
    order: 2;
  }

  .sidebar-container {
    order: 1;
  }

  .content {
    order: 3;
  }

  .news-dropdown-btn {
    font-size: 16px;
  }

  .news-dropdown-content li {
    font-size: 16px;
    padding: 0 10px;
  }

  .dropdown-menu a {
    padding-left: 15px;
  }
}
</style>
