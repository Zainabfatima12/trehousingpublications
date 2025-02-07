<template>
    <div class="container">
      <!-- Blank space for the left side -->
      <div class="left-space"></div>
  
      <!-- Right side content -->
      <div class="content">
        <div class="header">
          <h1>
            <img 
              src="@/assets/bsct.png" 
              alt="icon" class="heading-icon"/>
            Bihar Computer Teacher Syllabus and Exam Pattern 2023, Check Marking Scheme!
          </h1>
          <p>
            BPSC Bihar Computer Science Teacher Syllabus 2023 is released by Education
            Department of Bihar. Candidates must access the BPSC Bihar Computer Science
            Teacher Syllabus from the article below.
          </p>
        </div>
        <div class="image-section">
          <img
            src="@/assets/bcts.png"
            alt="BPSC Bihar Computer Science Teacher Syllabus"
          />
        </div>
        <div class="download-section">
          <h2>BPSC TRE(11–12) Computer Science Syllabus.</h2>
          <button class="download-btn" @click="downloadPDF">Download</button>
        </div>
        <div class="syllabus-overview">
          <h3 class="section-heading">Bihar Computer Science Teacher Syllabus Overview</h3>
          <p>
            The Bihar Computer Science Teacher Recruitment 2023 is conducted by the
            Education Department of Bihar. The candidates must refer to the following
            table for more information on the Bihar Computer Science Teacher Syllabus....
            <a
              href="https://www.adda247.com/teaching-jobs-exam/bihar-computer-science-teacher-syllabus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </p>
        </div>
        <div class="exam-pattern">
          <h3 class="section-heading">Bihar Computer Science Teacher Exam Pattern</h3>
          <p>
            BPSC Higher Secondary Teacher Examination for Computer Science Subject will be
            held for 220 marks for 220 questions. There will be 2 papers held for Bihar
            Computer Science Higher Secondary Teacher Recruitment Exam 2023. Bihar Computer
            Science Teacher Paper 1 will be held for Language and Paper 2 will have General
            Studies.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BPSCComputerScienceSyllabus",
    methods: {
      downloadPDF() {
        // Opens the PDF file in a new tab
        window.open('https://example.com/path-to-your-pdf.pdf', '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  margin-left: 350px; /* Default margin-left for larger screens */
  width: 100%; /* Ensure the container doesn't overflow */
}
  
  .left-space {
    flex: 1;
  }
  
  .content {
    flex: 6;
    max-width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }
  
  .header h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Add space between the icon and the text */
  }
  
  .header .heading-icon {
    width: 1.5rem; /* Same height as heading text */
    height: 1.5rem;
  }
  
  .header p {
    font-size: 1rem;
    color: #555;
  }
  
  .image-section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }
  
  .download-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .download-btn {
    padding: 0.5rem 3rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #04b8fa;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .download-btn:hover {
    background-color: #0056b3;
  }
  
  .syllabus-overview,
  .exam-pattern {
    margin-bottom: 1.5rem;
  }
  
  .syllabus-overview h3,
  .exam-pattern h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2804cb;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #b1eef6;
    border-radius: 4px;
  }
  
  .syllabus-overview p,
  .exam-pattern p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Media Query for Smaller Screens */
  @media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-left: 0; /* Reset margin for small screens */
    padding-left: 1rem; /* Add padding for better spacing */
    padding-right: 1rem; /* Add padding for better spacing */
    width: 100%; /* Ensure it takes full width on mobile */
  }

  .content {
    flex: 1;
    padding: 1rem;
    box-shadow: none; /* Optional: Remove shadow on mobile for simplicity */
  }
}
  </style>
  