<template>
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
  