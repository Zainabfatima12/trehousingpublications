<template>
    <section class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="box-container bg-white shadow-lg border border-gray-300 rounded-lg p-8 w-full max-w-3xl text-center">
        
        <!-- Title and Image -->
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold heading mb-4 underline">Mission & Vision</h2>
          <img src="@/assets/Group 42.jpg" alt="Mission & Vision" class="mission-image" />
        </div>
  
        <!-- Table for Mission, Vision, and Values -->
        <div class="overflow-x-auto">
          <table class="w-3/4 mx-auto border border-gray-400 text-center">
            <thead>
              <tr class="bg-gray-200">
                <th class="p-3 border border-gray-300 text-lg font-bold text-black">
                  <span class="p3">OUR</span> <span class="p4">MISSION</span></th>
                <th class="p-3 border border-gray-300 text-lg font-bold text-black">
                 <span class="p3">OUR</span> <span class="p5">VISION</span></th>
                <th class="p-3 border border-gray-300 text-lg font-bold text-black">
                  <span class="p3">OUR</span> <span class="p6">VALUES</span></th>
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
    margin: auto;
  }
  table {
    width: 90%;
    max-width: 600px;
    margin: auto;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0);
  }
  .p3{
    color: black;
  }
  .p4{
    color: red;
  }
  .p5{
    color: rgb(31, 31, 185);
  }
  .p6{
    color: yellow;
  }
  </style>
  