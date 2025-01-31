<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="box-container bg-white shadow-lg border border-gray-300 rounded-lg p-8 w-full max-w-3xl text-center">
      
      <!-- Title and Image -->
      <div class="text-center mb-6">
        <h2 class="text-xl font-bold heading mb-4 underline">Mission & Vision</h2>
        
      </div>
     
      <!-- Table for Mission, Vision, and Values -->
      <div class="overflow-x-auto">
        <table class="w-3/4 mx-auto border  text-center">
          <thead class="table-light">
          
          <tr>
            <td><img src="@/assets/mission.png" alt="Mission Image" class="img-fluid" /></td>
            <td><img src="@/assets/vision.jpg" alt="Vision Image" class="img-fluid" /></td>
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
              <td class="p-4 border border-gray-300 text-gray-700 text-sm">
                Empower learners worldwide with accessible, high-quality digital education.
              </td>
              <td class="p-4 border border-gray-300 text-gray-700 text-sm">
                To be the leading platform for innovative, engaging, and personalized e-learning experiences.
              </td>
              <td class="p-4 border border-gray-300 text-gray-700 text-sm">
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
.mission-image {
width: 100%;
max-width: 600px; 
height: auto;
}



.our{
  color: black;
}
.mission{
  color: red;
}
.vision{
  color: rgb(31, 31, 185);
}
.values{
  color: yellow;
}
.table {
border-collapse: collapse;
}

table td,
table tr {
border: none;
}
</style>