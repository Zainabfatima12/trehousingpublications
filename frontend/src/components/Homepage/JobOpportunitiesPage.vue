<template>
    <h2 class="text-center">
      <u class="underline">Job Opportunities</u>
    </h2>
    <div class="overflow-hidden px-4">
      <div class="job-cards-container-wrapper"> <!-- Added wrapper for proper positioning -->
        <!-- Carousel Navigation Buttons -->
        <button @click="scrollLeft" class="left-click">‹</button>
  
        <!-- Job Cards Wrapper -->
        <div
          class="job-cards-container flex gap-4 overflow-x-auto md:overflow-hidden"
          ref="jobCardsWrapper"
          @touchstart="startTouch"
          @touchmove="moveTouch"
        >
          <div v-for="(job, index) in visibleJobs" :key="index" class="job-card">
            <h3 class="text-lg font-bold">{{ job.title }}</h3>
            <div class="job-details">
              <p class="text-gray-600 flex items-center"><span>📍</span>{{ job.location }}</p>
              <p class="date-text flex items-center"><span>📅</span>{{ job.date }}</p>
              <p class="salary-text flex items-center"><span>💰</span>{{ job.salary }}</p>
            </div>
            <button @click="viewPreviousYearPaper(job)" class="button-text">
              👁 View Previous Year Paper
            </button>
          </div>
        </div>
  
        <!-- Right Arrow Button -->
        <button @click="scrollRight" class="right-click">›</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'JobOpportunities',
  data() {
    return {
      jobs: [
        { title: "Government Clerk SHO", location: "Gujarat Government", date: "03-03-2025", salary: "40k to 50k" },
        { title: "BPSC Assistance Vacancy", location: "Patna, Bihar", date: "03-03-2025", salary: "50k to 60k" },
        { title: "Bihar Police Services", location: "Patna, Bihar", date: "03-03-2025", salary: "40k to 50k" },
        { title: "Railway Engineer", location: "New Delhi", date: "03-03-2025", salary: "60k to 80k" },
        { title: "UPSC Civil Services", location: "India", date: "03-03-2025", salary: "70k to 90k" },
        { title: "Paper 6", location: "India", date: "03-03-2025", salary: "70k to 90k" },
      ],
      currentIndex: 0,
      startX: 0,
      isMobile: false,  // Track whether the user is on mobile
    };
  },
  created() {
    this.checkDeviceWidth();  // Check initial device width on page load
    window.addEventListener('resize', this.checkDeviceWidth);  // Listen for window resize
  },
  unmounted() {
    window.removeEventListener('resize', this.checkDeviceWidth);  // Clean up event listener
  },
  computed: {
    visibleJobs() {
      // Show only 1 job card on mobile and 3 on larger screens
      if (this.isMobile) {
        return this.jobs.slice(this.currentIndex, this.currentIndex + 1); // Show only 1 job card
      } else {
        return this.jobs.slice(this.currentIndex, this.currentIndex + 3); // Show 3 job cards on desktop
      }
    }
  },
  methods: {
    checkDeviceWidth() {
      // Update the isMobile flag based on window width
      this.isMobile = window.innerWidth <= 400;
    },
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1; // Move one job card back
      } else {
        this.currentIndex = this.jobs.length - 1; // Wrap around to the last job card
      }
    },
    scrollRight() {
      if (this.currentIndex < this.jobs.length - 1) {
        this.currentIndex += 1; // Move one job card forward
      } else {
        this.currentIndex = 0; // Wrap around to the first job card
      }
    },
    viewPreviousYearPaper(job) {
      const formattedTitle = job.title.replace(/\s+/g, '-').toLowerCase();
      const url = `https://example.com/previous-year-paper/${formattedTitle}`;
      window.open(url, '_blank');
    },
    startTouch(e) {
      this.startX = e.touches[0].clientX;
      this.scrollLeft = this.$refs.jobCardsWrapper.scrollLeft;
    },
    moveTouch(e) {
      const touchMoveX = e.touches[0].clientX;
      const moveDistance = this.startX - touchMoveX;
      this.$refs.jobCardsWrapper.scrollLeft = this.scrollLeft + moveDistance;
    }
  }
};

  </script>
  
  <style scoped>
  .overflow-hidden {
    background-color: #052A63;
  }
  
  .text-center {
    color: #0152CC;
    font-size: medium;
    padding: 10px;
    background-color: #fff;
  }
  
  .underline {
    color: #0152CC;
  }
  
  /* Job Cards Container Wrapper */
  .job-cards-container-wrapper {
    position: relative; /* Ensures buttons are positioned relative to this container */
    width: 100%;
    overflow: hidden; /* Ensures nothing goes outside */
  }
  
  /* Carousel Buttons */
  .left-click,
  .right-click {
    position: absolute;
    top: 50%;  /* Center the buttons vertically */
    transform: translateY(-50%);  /* Correct vertical alignment */
    background-color: transparent; /* Transparent background */
    color: black;  /* Black color for arrows */
    font-size: 5rem;  /* Increased font size for better visibility */
    padding: 15px;  /* Padding for better click area */
    z-index: 1000;  /* Ensure they are on top of other elements */
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
  }
  
  /* Left Arrow */
  /* .left-click {
    left: 100px;  
  }
   */
  /* Right Arrow */
  /* .right-click {
    right: 100px;  
  } */
  
  /* Job Cards Container */
  .job-cards-container {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    justify-content: center;
    margin: 0 auto;
    max-width: fit-content;
    margin-top: 70px;
    margin-bottom: 50px;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
  }
  
  /* Job Card Styles */
  .job-card {
    width: 290px;
    height: 250px;
    background: white;
    padding: 8px;
    border-radius: 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    overflow: hidden;
    position: relative;
  }
  
  .job-card .job-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    margin-top: 5px;
  }
  
  .job-card .job-details p {
    margin: 8px 0;
  }
  
  .date-text, .salary-text {
    margin: 0;
  }
  
  .date-text {
    color: orange;
  }
  
  .salary-text {
    color: blue;
  }
  
  .job-card h3 {
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  .job-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #463CD7 0%, #FF1702 100%);
  }
  
  /* Button Styles */
  .button-text {
    background-color: #0152CC;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 8px 0;
    margin-top: auto;
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  
  .button-text:hover {
    background-color: darkblue;
  }
  
  /* Responsive Styles */
  @media only screen and (max-width: 400px) {
  .job-cards-container {
    flex-direction: column;  /* Stack items vertically */
    overflow-x: hidden;  /* Remove horizontal scroll */
    gap: 20px; /* Space between job cards */
    align-items: center; /* Center align job cards */
  }

  .job-card {
    width: 90%; /* Full width */
    max-width: 350px; /* Prevent too wide cards */
    height: auto; /* Adjust height dynamically */
}
}

</style>
  