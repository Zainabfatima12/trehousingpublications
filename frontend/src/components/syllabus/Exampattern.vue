<template>
  <div class="container py-4" style="font-family: Inter">
    <!-- Exam Pattern Description -->
    <div
      class="card mb-4 bg-transparent border-0 w-100 d-md-block d-flex justify-content-center position-md-absolute start-0 bottom-0"
    >
      <div class="card-body text-center">
        <h2
          class="card-title p-3 rounded"
          style="background-color: #94d9ff; color: #2600ff; font-size: 24px"
        >
          Bihar Computer Science Teacher Exam Pattern
        </h2>
        <p
          class="card-text text-justify mt-3"
          style="font-size: 20px; color: black; font-weight: 400px"
        >
          BPSC Higher Secondary Teacher Examination for Computer Science Subject
          will be held for 220 marks for 220 questions. There will be 2 papers
          for the Bihar Computer Science Higher Secondary Teacher Recruitment
          Exam 2023. Paper 1 is for Language, and Paper 2 covers General
          Studies.
        </p>
      </div>
    </div>

    <!-- Responsive Table -->
    <div class="table-responsive">
      <table class="table table-bordered text-center">
        <thead
          class="table-dark text-white"
          style="background-color: #fc3a52; font-weight: 700px"
        >
          <tr>
            <th colspan="2" style="text-align: left">Subject</th>
            <th></th>
            <th>Total Questions</th>
            <th>Total Marks</th>
            <th>Duration</th>
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
            <td>Part - 2 Hindi / Urdu / Bengali Language</td>
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
          <tr class="fw-bold">
            <th>Total</th>
            <th></th>
            <th>220</th>
            <th>220</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExamPattern",
};
</script>
