<template>
  <div class="table-container" v-if="examPatterns.length">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Subject</th>
          <th>Total Questions</th>
          <th>Total Marks</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(pattern, index) in examPatterns" :key="index">
          <template v-for="(item, i) in parsePattern(pattern)" :key="i">
            <tr>
              <td v-if="i === 0" :rowspan="parsePattern(pattern).length">{{ pattern.topics }}</td>
              <td>{{ item.sub_topic }}</td>
              <td>{{ item.questions }}</td>
              <td>{{ item.marks }}</td>
              <td v-if="i === 0" :rowspan="parsePattern(pattern).length">{{ pattern.duration }}hr</td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      examPatterns: [],
    };
  },
  methods: {
    async fetchExamPatterns() {
      try {
        const res = await axios.get("https://cms.trehousingpublication.com/api/v1/?course_id=1&subject_id=1");
        this.examPatterns = res.data.course.subjects[0].exam_patterns;
      } catch (error) {
        console.error("Failed to fetch exam patterns:", error);
      }
    },
    parsePattern(pattern) {
      const subTopics = pattern.sub_topics.split(",");
      const questions = pattern.total_questions.split(",");
      const marks = pattern.total_marks.split(",");
      return subTopics.map((sub, index) => ({
        sub_topic: sub.trim(),
        questions: questions[index]?.trim() || "-",
        marks: marks[index]?.trim() || "-",
      }));
    },
  },
  mounted() {
    this.fetchExamPatterns();
  },
};
</script>

  <style scoped>
  /* Table container with adjusted height and overflow */
  .table-container {
    width: 90%;
    max-width: 1200px;
    height: 600px; /* Original height */
    margin: 30px auto;
    overflow-x: auto; /* Enable horizontal scrolling */
  }
  
  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    table-layout: fixed;
    height: 90%; /* Ensure the table fits inside the container */
  }
  
  /* Column width adjustments */
  .category-col {
    width: 45%;
  }
  
  .subject-col {
    width: 50%;
    text-align: left;
  }
  
  .questions-col {
    width: 20%;
  }
  
  .marks-col {
    width: 20%;
  }
  
  .duration-col {
    width: 15%; /* Reduced width */
  }
  
  /* Header styling */
  th {
    background-color: #f54254;
    color: white;
    padding: 18px;
    font-size: 17px;
    font-weight: bold;
  }
  
  /* Table cell styling */
  td {
    border: 1px solid #000;
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    height: 60px;
    vertical-align: middle;
    word-wrap: break-word; /* Allow text to break and wrap in the cell */
    overflow-wrap: break-word; /* Ensure long words break */
  }
  
  /* Footer (Total row) */
  tfoot td {
    font-weight: bold;
    background-color: #fff;
  }
  
  /* Only mobile adjustments */
  @media (max-width: 768px) {
    .table-container {
      width: 93%; /* Full width for mobile */
      height: auto; /* Allow height to adjust */
      margin: 10px; /* Reduced margin */
      overflow-x: auto; /* Allow horizontal scrolling if needed */
    }
  
    table {
      font-size: 10px; /* Reduce font size for mobile */
    }
  
    th, td {
      padding: 6px; /* Reduce padding */
      font-size: 12px; /* Make font size smaller */
    }
  
    .category-col,
    .subject-col,
    .questions-col,
    .marks-col,
    .duration-col {
      width: auto; /* Allow columns to adjust */
    }
  
    .table-container table {
      max-height: 350px; /* Reduce max height */
    }
  }
  </style>
  