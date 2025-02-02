<template>
  <section class="min-h-screen flex flex-col flex-row items-center justify-center  px-4 md:px-8">
    <div class="box-container bg-white shadow-lg rounded-lg p-8 md:p-8 w-full max-w-3xl text-center">
      
      <!-- Title -->
      <div class="text-center mb-6 md:mb-10"> 
        <h2 class="text-xl font-bold heading mb-4 underline">Mission & Vision</h2>
      </div>
     
      <!-- Table for Mission, Vision, and Values -->
      <div class="overflow-x-auto">
        <table class="w-3/4 mx-auto text-center">
          <thead>
            <tr>
              <td class="image-cell"><img src="@/assets/mission.png" alt="Mission Image" class="img-fluid" /></td>
              <td class="image-cell"><img src="@/assets/vision.jpg" alt="Vision Image" class="img-fluid" /></td>
              <td><img src="@/assets/values.png" alt="Image 3" class="img-fluid" /></td>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MissionVision",
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
  font-size: x-large;
}
.mission {
  color: red;
  font-weight: bold;
  font-size: x-large;
}
.vision {
  color: rgb(31, 31, 185);
  font-weight: bold;
  font-size: x-large;
}
.values {
  color: yellow;
  font-size: x-large;
  font-weight: bold;
}

.image-cell {
  border-right: 2px solid gray;
}

.image-cell:last-child {
  border-right: none;
}
</style>