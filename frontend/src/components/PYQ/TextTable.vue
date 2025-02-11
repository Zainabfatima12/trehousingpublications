<template>
    <div class="syllabus-container">
    <!-- Syllabus Overview Section -->
    <div class="syllabus-overview">
      <h2>Bihar Computer Teacher Syllabus Overview</h2>
      <p>
        The Bihar Computer Science Teacher Recruitment 2023 is conducted by the Education Department of Bihar.
        The candidates must refer to the following table for more information on the Bihar Computer Science Teacher Syllabus.
      </p> <br>
      <h2>Bihar Teacher Exam Pattern For Higher Secondary Teacher</h2>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="category-col"></th>
            <th class="subject-col">Subject</th>
            <th class="questions-col">Total Questions</th>
            <th class="marks-col">Total Marks</th>
            <th class="duration-col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">Language (Qualifying)</td>
            <td>Part - 1 English</td>
            <td>25</td>
            <td>25</td>
            <td rowspan="2">2hr</td>
          </tr>
          <tr>
            <td>Part - 2 Hindi / Urdu / Bengali</td>
            <td>75</td>
            <td>75</td>
          </tr>
          <tr>
            <td rowspan="2">Subject And General Studies</td>
            <td>Part - 1 Concerned Subject</td>
            <td>80</td>
            <td>80</td>
            <td rowspan="2">2hr</td>
          </tr>
          <tr>
            <td>Part - 2 General Studies</td>
            <td>40</td>
            <td>40</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"><strong>Total</strong></td>
            <td><strong>220</strong></td>
            <td><strong>220</strong></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- Additional Information Section -->
    <div class="additional-info">
      <h3>Bihar Computer Science Teacher Syllabus for Higher Secondary Teacher</h3><br>
      <h4>Question Pattern - MCQ</h4>
      <ul>
        <li>Paper 1 Language section is qualifying in nature.</li>
        <li>Paper 2 consists of two parts, Part-I and Part-II.</li>
        <li>
          Part-I is a Subject paper. Candidates have to opt for any one of the papers: Hindi, Urdu, English, Sanskrit, Bengali, Maithili, Magahi, Arabic, Persian, Bhojpuri, Pali, Prakrit, Mathematics, Physics, Chemistry, Botany, Zoology, History, Political Science, Geography, Economics, Sociology, Psychology, Philosophy, Home Science, Computer Science, Commerce Accountancy, Music & Entrepreneurship.
        </li>
        <li>
          The questions of the subject paper will be related to the syllabus of the Higher Secondary School but it's standard according to the prescribed minimum qualification of the candidate.
        </li>
        <li>
          Part-II is General Studies. It consists of Elementary Mathematics, General Awareness, General Science, Indian National Movements, and Geography.
        </li>
        <li>
          The questions of General Studies will be related to the syllabus of the Higher Secondary School but it's standard according to the prescribed minimum qualification of the candidate.
        </li>
        <li>There is no negative marking for the Language Section.</li>
        <li>For General Studies, there is a provision for Negative Marking for a wrong answer.</li>
      </ul>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
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


 /* Container for the entire syllabus content */
.syllabus-container {
  width: 90%; /* Match the table's width */
  max-width: 1200px;
  margin: 0 auto; /* Center the content */
}

/* Syllabus Overview Section */
.syllabus-overview {
  width: 100%; /* Take full width inside the container */
  text-align: left; /* Align text to the left */
}

.syllabus-overview h2 {
  color: #0073e6; /* Blue color for the upper section heading */
  font-size: 1.5rem; /* Font size for h2 heading */
}

.syllabus-overview p {
  color: #000000; /* Black color for paragraph */
  font-size: 1rem; /* Font size for paragraphs */
}

/* Table Container Styling */
.table-container {
  width: 100%;
  overflow-x: auto;
  margin: 30px auto;
}

/* Additional Information Section */
.additional-info h3 {
  color: #000000; /* Black color for lower section heading h3 */
  font-size: 1.5rem; /* Font size for h3 */
}

.additional-info h4 {
  color: #000000; /* Black color for lower section heading h4 */
  font-size: 1.25rem; /* Font size for h4 */
}

/* Additional Info Text */
.additional-info ul li {
  color: #444; /* Black color for list items */
  font-size: 1rem; /* Font size for list items */
}

/* Align text above and below the table with the table container width */
.text-above, .text-below {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left; /* Left-align the text */
}

/* Fix: Explicitly target the heading under text-below */
.text-below h3 {
  color: #000000; /* Black color for the heading under text-below */
  font-size: 1.5rem; /* Font size for h3 under text-below */
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

/* Mobile responsiveness */
@media (max-width: 768px) {
  .syllabus-container {
    width: 93%;
    max-width: 100%;
  }
  table {
    font-size: 10px;
  }
  th, td {
    padding: 6px;
    font-size: 12px;
  }
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
  