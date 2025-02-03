<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="box-container bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center">
      
      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-xl font-bold heading mb-4 underline">Mission & Vision</h2>
      </div>

      <!-- Table for Mission, Vision, and Values -->
      <div class="overflow-x-auto">
        <table v-if="isDesktop" class="w-3/4 mx-auto text-center">
          <thead>
            <tr>
              <td><div class="image-wrapper"><img src="@/assets/mission.png" alt="Mission Image" class="img-fluid same-size" /></div></td>
              <td><div class="image-wrapper"><img src="@/assets/vision.jpg" alt="Vision Image" class="img-fluid same-size" /></div></td>
              <td><div class="image-wrapper"><img src="@/assets/values.png" alt="Values Image" class="img-fluid same-size" /></div></td>
            </tr>
            <tr>
              <td class="p-3 fw-bold text-dark">
                <span class="our">OUR</span> <span class="mission">MISSION</span>
              </td>
              <td class="p-3 fw-bold text-dark">
                <span class="our">OUR</span> <span class="vision">VISION</span>
              </td>
              <td class="p-3 fw-bold text-dark">
                <span class="our">OUR</span> <span class="values">VALUES</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 text-gray-700 text-sm">
                Empower learners worldwide with accessible, high-quality digital education.
              </td>
              <td class="p-4 text-gray-700 text-sm">
                To be the leading platform for innovative, engaging, and personalized e-learning experiences.
              </td>
              <td class="p-4 text-gray-700 text-sm">
                Accessibility, innovation, lifelong learning, and student success. 🚀
              </td>
            </tr>
          </tbody>
        </table>
        
        <!-- Mobile/Table Layout -->
        <div v-else class="w-full flex flex-col items-center">
          <div class="flex flex-col items-center w-full mb-4">
            <!-- No border above "OUR MISSION" image now -->
            <div class="image-wrapper"><img src="@/assets/mission.png" alt="Mission Image" class="img-fluid same-size mb-2" /></div>
            <h3 class="fw-bold text-dark mb-2">OUR <span class="mission">MISSION</span></h3>
            <p class="text-secondary px-3">Empower learners worldwide with accessible, high-quality digital education.</p>
          </div>

          <div class="flex flex-col items-center w-full mb-4">
            <!-- Add border above the "OUR VISION" image -->
            <div class="image-border"></div>
            <div class="image-wrapper"><img src="@/assets/vision.jpg" alt="Vision Image" class="img-fluid same-size mb-2" /></div>
            <h3 class="fw-bold text-dark mb-2">OUR <span class="vision">VISION</span></h3>
            <p class="text-secondary px-3">To be the leading platform for innovative, engaging, and personalized e-learning experiences.</p>
          </div>

          <div class="flex flex-col items-center w-full mb-4">
            <!-- Add border above the "OUR VALUES" image -->
            <div class="image-border"></div>
            <div class="image-wrapper"><img src="@/assets/values.png" alt="Values Image" class="img-fluid same-size mb-2" /></div>
            <h3 class="fw-bold text-dark mb-2">OUR <span class="values"> VALUES</span></h3>
            <p class="text-secondary px-3">Accessibility, innovation, lifelong learning, and student success. 🚀</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MissionVision",
  data() {
    return {
      isDesktop: false,
    };
  },
  mounted() {
    this.checkDevice(); 
    window.addEventListener("resize", this.checkDevice); 
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkDevice); 
  },
  methods: {
    checkDevice() {
      this.isDesktop = window.innerWidth >= 725; 
    },
  },
};
</script>

<style scoped>
.heading {
  color: rgb(31, 31, 185);
  text-decoration: underline;
  font-weight: bold;
}

.our {
  color: black;
  font-weight: bold;
}
.mission {
  color: red;
  font-weight: bold;
}
.vision {
  color: rgb(31, 31, 185);
  font-weight: bold;
}
.values {
  color: yellow;
  font-weight: bold;
}

/* Ensures all images are the same size */
.same-size {
  width: 250px; 
  height: 250px; 
  object-fit: cover; 
}

/* Wrapper for images to add border */
.image-wrapper {
  position: relative;
  display: inline-block; 
}

/* Border above the images in mobile/tablet layout */
.image-border {
  width: 80%; 
  height: 2px; 
  background-color: black; 
  margin-bottom: 10px; 
  margin-left: auto; 
  margin-right: auto; 
  margin-top: 10px; 
}

/* Mobile/Table Layout (<725px) */
@media (max-width: 724px) {
  
  .image-wrapper:first-child {
    margin-top: 0; 
  }

  
  .image-wrapper:not(:first-child) {
    margin-top: 10px;
  }
}


@media (min-width: 725px) {
  
  .image-wrapper {
    border-right: 3px solid black; 
    padding-right: 10px; 
  }
  .image-wrapper:last-child {
    border-right: none; 
  }
}
</style>
