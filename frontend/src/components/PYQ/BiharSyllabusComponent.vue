<template>
  <div class="p-6 bg-white rounded-lg shadow-md ml-3">
    <h2 class="text-xl font-bold mb-4">Bihar Computer Science Teacher Syllabus</h2>
    <ul class="list-disc pl-5 space-y-2">
      <li v-for="(topic, index) in syllabusTopics" :key="index">
        {{ topic }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'BiharSyllabusComponent',
  data() {
    return {
      syllabusTopics: [
        "Computer Systems and Organisation",
        "Computational Thinking and Programming",
        "Society, Law and Ethics",
        "Computer Networks",
        "Database Management",
        "Introduction to Computer System",
        "Introduction to Python",
        "Database Concepts and the Structured Query Language",
        "Emerging Trends",
        "Data Handling using Pandas",
        "Database Query using SQL",
        "Introduction to Computer Networks",
        "Societal Impacts"
      ]
    };
  }
};
</script>

<style scoped>
</style>
