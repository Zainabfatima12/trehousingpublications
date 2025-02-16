<template>
  <div class="container">
      <!-- Main Content Section -->
      <div class="content">
          <div class="main-content">
              <div class="content-bpsc">
                  <h2 class="fourZero">BPSC TRE 4.0 Previous Year Question Papers PDF Download</h2>
                  <p class="bpsc-italic">BPSC Teacher Previous Year Question Papers have been realeased by BPSC on
                      official
                      website. Candidates
                      must go through following article to access the BPSC Teacher Previous Year Quetion Papers PDF.
                      Candidate
                      may download the TRE Questions Paper from below link.</p>
                  <div class="bpscImg">
                      <img :src="bpscImg" alt="BPSC Previous Year Question Paper">
                  </div>
                  <p class="bpsc-normal">Looking to boost your preparation for the BPSC Teacher Recruitment Exam (TRE)
                      in
                      Computer Science? Solving previous year question papers is one of the most effective strategies
                      to
                      ensure success. These papers provide invaluable insights into the exam pattern, important
                      topics, and
                      types of questions frequently asked in the BPSC Computer Science exam.</p>
              </div>
              <div class="content-bpsc">
                  <h2 class="threeZero">BPSC TRE 3.0 Question Paper 2024 (July Cycle)</h2>
                  <p class="bpsc-normal">The BPSC TRE Computer Science Question Papers are now available on the
                      official BPSC
                      website. These question papers are an essential resource for candidates preparing for the exam,
                      as they
                      provide a clear understanding of the exam pattern, commonly asked topics, and the overall
                      difficulty
                      level.</p>
                  <p class="bpsc-normal">This section provides the BPSC TRE Computer Science Question Papers for all
                      relevant
                      shifts and posts, making it easier for candidates to streamline their preparation and boost
                      their
                      chances of success.</p>
              </div>
              <div class="trePYQtable">
                  <table>
                      <!-- Table Header -->
                      <thead>
                          <tr class="tble-hed">
                              <td colspan="2">BPSC TRE 3.0 Question Papers 2024 PDFs</td>
                          </tr>
                      </thead>

                      <!-- Table Body -->
                      <tbody>
                          <tr class="rowData">
                              <td class="cell-text">BPSC TRE Computer Sc</td>
                              <td>
                                  <ul>
                                      <li>BPSC TRE 2.0 (11-12) Computer Sc</li>
                                      <li>BPSC TRE 1.0 (11-12) Computer Sc</li>
                                      <li>BPSC TRE 2.0 (9-10) Computer Sc</li>
                                      <li>BPSC TRE 3.0 (11-12) Computer Sc</li>
                                      <li>BPSC TRE 3.0 (9-10) Computer Sc</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">BIHAR STET Computer Sc</td>
                              <td>
                                  <ul>
                                      <li>STET 2011 PGT Computer Sc</li>
                                      <li>STET 2019 PGT Computer Sc</li>
                                      <li>STET 2019 PGT Computer Sc</li>
                                      <li>STET 2023 PGT Computer Sc</li>
                                      <li>STET 2024 PGT Computer Sc</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">KVS Computer Sc</td>
                              <td>
                                  <ul>
                                      <li>KVS PGT Computer Sc</li>
                                      <li>KVS TGT Computer Sc</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">NVS Computer Sc</td>
                              <td>
                                  <ul>
                                      <li>NVS PGT Computer Sc</li>
                                      <li>NVS TGT Computer Sc</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">DSSB Computer Sc</td>
                              <td>
                                  <ul>
                                      <li>DSSB PGT Computer Sc</li>
                                      <li>DSSB TGT Computer Sc</li>
                                  </ul>
                              </td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">HTET LEVEl3 Computer Sc</td>
                              <td></td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">HPSC PGT Computer Sc</td>
                              <td></td>
                          </tr>
                          <tr class="rowData">
                              <td class="cell-text">UPPSC LT Grade Computer Sc</td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>

              </div>
          </div>

      </div>
      <!-- Sidebar with Latest News -->
      <div class="sidebar">
          <!-- first notification -->
          <h3 class="latest-news-title">CSIR NET 2025</h3>
          <ul class="news-list">
              <li v-for="news in notification1" :key="news.id" class="dropdown">
                  <div class="dropdown-btn" @click="toggleDropdown(news.id)">
                      <span :class="{ rotate: openDropdown === news.id }"> > </span>{{ news.title }}
                  </div>
                  <ul v-if="openDropdown === news.id" class="dropdown-content">
                      <li v-for="link in news.links" :key="link.id">
                          <a :href="link.url" target="_blank">
                              {{ link.text }}
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>

          <!-- Second NOTIFICATION -->

          <h3 class="latest-news-title">CTET 2024 EXAM</h3>
          <ul class="news-list">
              <li v-for="news in notification2" :key="news.id" class="dropdown">
                  <div class="dropdown-btn" @click="toggleDropdown(news.id)">
                      <span :class="{ rotate: openDropdown === news.id }"> > </span>{{ news.title }}
                  </div>
                  <ul v-if="openDropdown === news.id" class="dropdown-content">
                      <li v-for="link in news.links" :key="link.id">
                          <a :href="link.url" target="_blank">
                              {{ link.text }}
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div class="mock-test">
              <div class="test-card blue-card">
                  <a href="" target="_blank">
                      <img src="@/assets/PYQ-Image/bpscBiharBlue.png" alt="BPSC Test 1" />
                  </a>
                  <p>Mock test series class 11 to12</p>
                  <span class="price">Rs. 167.50</span>
              </div>
              <div class="test-card orange-card">
                  <a href="" target="_blank">
                      <img src="@/assets/PYQ-Image/bpscBihar.png" alt="BPSC Test 2" />
                  </a>
                  <p>Mock test series class 11 to12</p>
                  <span class="price">Rs. 167.50</span>
              </div>
          </div>
          <!-- Referral Section with Link -->
          <div class="referral">
              <a href="" target="_blank">
                  <img src="@/assets/PYQ-Image/refrel.png" alt="Refer and Earn" />
              </a>
          </div>
          <!-- BPSC Syllabus Section with Link -->
          <div class="syllabus">
              <a href="" target="_blank">
                  <img src="@/assets/PYQ-Image/bpscsl.jpg" alt="BPSC Syllabus 2024" />
              </a>
          </div>
          <!-- Recent Posts -->
          <div class="recent-posts">
              <h2>Recent Post</h2>
              <ul>
                  <li>
                      BPSC TRE 3.0 Scorecard 2025, <a href="#" target="_blank">Download Link Here</a>
                  </li>
                  <li>CU Himachal Pradesh Recruitment 2025, Notification Out<a href="#" target="_blank">Apply
                          Link</a>, Salary</li>

                  <li>REET Syllabus And Exam Pattern 2025,for Levels 1 and 2 <a href="#" target="_blank">Download
                          Official PDF</a></li>

                  <li>REET Previous Year Question Papers, <a href="#" target="_blank">Download With Solutions</a></li>

                  <li>DRDO JRF Recruitment 2025, <a href="#" target="_blank">Check Interview Schedule Here</a></li>

                  <li>TS TET Answer Key 2025 Releasing Soon,Paper 1 and 2 Response Sheet</li>

                  <li>अलंकार-परिभाषा ,भेद, उदाहरण & प्रकार Alankar ki Paribhasha</li>

                  <li>Railway Teacher Recruitment 2025, <a href="#" target="_blank">Apply Online Link For 753
                          Posts</a></li>

                  <li> स्वर व व्यंजन -परिभाषा ,भेद, और उदाहरण & प्रकार <a href="#" target="_blank">Swar Vyanjan In
                          Hindi PDF</a></li>

                  <li> संधि -परिभाषा ,भेद, और उदाहरण & प्रकार <a href="#" target="_blank">Sandhi kise Karte hai</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import bpscImg from '@/assets/PYQ-Image/BPSC-PYQ.png';
export default {
  name: 'LeftRIght',
  data() {
      return {
          openDropdown: null,
          bpscImg,
          // Notificatin1 data
          notification1: [
              {
                  id: 1,
                  title: "CSIR NET 2025",
                  links: [
                      { id: 1, text: "Exam Information of CSIR NET", url: "#" },
                      { id: 2, text: "Some Other Link", url: "#" }
                  ]
              },
              {
                  id: 2,
                  title: "CSIR NET Syllabus",
                  links: [
                      { id: 1, text: "CSIR NET Syllabus", url: "#" },
                      { id: 2, text: "Important Syllabus", url: "#" }
                  ]
              },
              {
                  id: 3,
                  title: "CSIR NET PYQ",
                  links: [
                      { id: 1, text: "CSIR NET PYQ ", url: "#" },
                      { id: 2, text: "Some Other Link", url: "#" }
                  ]
              },
              {
                  id: 4,
                  title: "CSIR NET Cut-off",
                  links: [
                      { id: 1, text: "CSIR NET Cut-off", url: "#" },
                      { id: 2, text: "Important Guidelines", url: "#" }
                  ]
              },
              {
                  id: 5,
                  title: "CSIR NET Eligibility",
                  links: [
                      { id: 1, text: "CSIR NET Eligibility ", url: "#" },
                      { id: 2, text: "Important Guidelines", url: "#" }
                  ]
              }

          ],

          // Second notification data

          notification2: [
              {
                  id: 6,
                  title: "CTET 2024 Exam Date",
                  links: [
                      { id: 1, text: "Exam Information of CTET", url: "#" },
                      { id: 2, text: "Some Other Link", url: "#" }
                  ]
              },
              {
                  id: 7,
                  title: "CTET  Syllabus 2024 ",
                  links: [
                      { id: 1, text: "CTET  Syllabus 2024", url: "#" },
                      { id: 2, text: "Important Guidelines", url: "#" }
                  ]
              },
              {
                  id: 8,
                  title: "CTET Eligibility",
                  links: [
                      { id: 1, text: "Exam Information CTET ", url: "#" },
                      { id: 2, text: "Some Other Link", url: "#" }
                  ]
              },
              {
                  id: 9,
                  title: "CTET PYQs",
                  links: [
                      { id: 1, text: "CTET PYQs 2024", url: "#" },
                      { id: 2, text: "Important Guidelines", url: "#" }
                  ]
              },
              {
                  id: 10,
                  title: "CTET Preparation Tips",
                  links: [
                      { id: 1, text: "CTET Preparation Tips ", url: "#" },
                      { id: 2, text: "Important Guidelines", url: "#" }
                  ]
              }

          ]
          // add another notification data

      };
  },
  methods: {
      toggleDropdown(id) {
          this.openDropdown = this.openDropdown === id ? null : id;
      }
  }
};
</script>

<style scoped>
/* Layout */
.container {
  display: flex;
  gap: 20px;
  /* padding: 0 30px; */
  width: 100%;
  max-width: 100%;
  padding: 3vh 5vw 0;
}

/* Sidebar Styling */
.sidebar {
  width: 25%;
  /* padding-right: 30px; */
  margin-top: 130px;
/* margin-bottom: 0; */
}

/* Latest News Title */
.latest-news-title {
  background-color: #ff3b5c;
  color: white;
  padding: 5px;
  font-weight: bold;
  margin: 0;
  border: 1px solid #7A7A7A;
  border-bottom: none;

}

/* News List */
.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #7A7A7A;
  font-size: 16px;
  padding: 10px 0;
  margin-bottom: 10px;
}

/* Dropdown Styling */
.dropdown {
  position: relative;
}

/* Dropdown Button */
.dropdown-btn {
  display: flex;
  align-items: center;
  padding: 8px 8px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  font-weight: 500;
  border-radius: 5px;

}


.dropdown-btn span {
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(90deg);
}

/* Dropdown Content */
.dropdown-content {
  padding: 0;
  border-radius: 5px;
  list-style: none;
}

.dropdown-content li {
  padding: 5px 25px;
  margin-left: 15px;
  font-size: 18px;

}

.dropdown-content li:hover {
  background: #dfdcdc;
  /* padding: 5px; */
  border-radius: 5px;
  width: auto;
}

.dropdown-content a {
  text-decoration: none;
  color: black;
  display: block;
}

/* Content Section */
.content {
  flex: 1;
  /* padding: 18px; */
  
}



/* Ensure proper alignment in the container */



.mock-test {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 
}

.test-card {
  width: 100%;
  text-align: center;
  padding: 20px;
  /* border-radius: 8px; */
 
}

.test-card p {
  font-size: 16px;
  /* font-weight: bold; */
  /* margin-top: 5px; */
}

.blue-card {
  background-color: #F6FBFF;
  
  color: black;
  border: 1px solid #86A1AE;
  padding: 20px 20px;
  overflow: hidden;
}

.blue-card img
{
  width: 70%;
  height: 220px;
  /* border-radius: 0; */
  object-fit: cover;
  

}
.orange-card {
  background-color: #F6FBFF;
  color: black;
  border: 1px solid #86A1AE;
}

.orange-card img
{
  width: 100%;
  max-height: 200px;
  padding: auto;
  object-fit: cover;
  

}

/* .test-card img {
  width: 100%;
  max-height: 200px;

} */

.price {
  display: block;
  font-size: 18px;
  font-weight: bold;
  /* margin-top: 5px; */
}

.referral,
.syllabus {
  text-align: center;
  margin: 10px 0;
  border: 1px solid #86A1AE;
}

.referral img,
.syllabus img {
  width: 100%;
  /* border-radius: 5px; */
}


.recent-posts {
  background-color: #f9f9f9;
  /* padding: 15px; */
  
  background-color: #D6E0E2;
  
 
}

.recent-posts h2 {
  background-color: #F94B4B;
  color: white;
  padding: 0 10px;
  /* margin: -15px -15px 10px; */
  
}

.recent-posts ul {
  /* list-style: none; */
  padding: 0 40px;
 
  /* height:100vh; */
  text-align: justify;
  

}

.recent-posts li {
  margin: 5px 0;
  color: black;

  
  
}

.recent-posts a {
  text-decoration: none;
  color: red;
}




/* Responsive Media Queries */
@media screen and (max-width: 768px) {
  .container {
      
      /* padding: 0; */
      flex-direction: row;
      
  
  }
 

  .sidebar {
      width: 30%;
      /* padding-right: 0;   */
      
  }


  .dropdown-btn {
      font-size: 16px;
  }

  .dropdown-content li {
      font-size: 16px;
      padding: 0 10px;

  }

  .latest-news-title {
      font-size: 18px;
  }



  .mock-test {
      gap: 5px;
  }

 

  .test-card p {
      font-size: 12px;
  }

  

  .blue-card {
  background-color: #F6FBFF;
  color: black;
  border: 1px solid #86A1AE;
  padding: 20px 20px;
  /* overflow: hidden; */
}

.blue-card img
{
  width: 100%;
  height: 200px;
  /* border-radius: 0; */
  object-fit: fill;
  overflow: hidden;
  background-color: #5f4adb;
  

}

.orange-card {
  background-color: #F6FBFF;
  color: black;
  border: 1px solid #86A1AE;
 
}

.orange-card img
{
  width: 100%;
  max-height: 200px;
  padding: auto;
  object-fit: cover;
  overflow: hidden;
  background-color: orange;
  
  

}


  .price {
      font-size: 16px;
  }

  .referral,
  .syllabus {
      /* margin: 10px 0; */
      margin-top: 5px;
     
  }
  .recent-posts
  {
    padding: 0;
    
  }

  .recent-posts h2 {
      font-size: 18px;
      padding: 5px 10px;
  }

  .recent-posts ul {
      padding: 0 30px;  
      /* padding-right: 10px; */
      font-size: 14px;
      /* margin: -5px;     */
     
  }

}

@media screen and (max-width: 480px) {

  .container {
      flex-direction: column;
      padding: 0 15px;
  }

  .sidebar {
      width: 100%;
      margin: 0;
  }

  .content {
      padding-left: 0;
      width: 100%;
  }

  .dropdown-btn {
      font-size: 14px;
  }

  .dropdown-content li {
      font-size: 14px;
  }




  .test-card {
      padding: 10px;
  }

  .test-card p {
      font-size: 12px;
  }

  
.blue-card {
  background-color: #F6FBFF;
  /* color: black; */
  border: 1px solid #86A1AE;
  padding: 20px 20px;
  overflow: hidden;
}

.blue-card img
{
  width: 100%;
  height: 200px;
  /* border-radius: 0; */
  object-fit: fill;
  

}






  .price {
      font-size: 14px;
  }



  .recent-posts h2 {
      font-size: 16px;
      padding: 5px 10px;
  }

  .recent-posts ul {
      padding: 3px 20px;
  }


}

/* leftside css */

/* .main-content {
  padding: 2vh 5vw;
} */

.content-bpsc {
  width: 100%;
}

.bpscImg img {
  width: 90%;
}

.content-bpsc .fourZero {
  font-size: 28px;
  font-weight: bold;
}

.content-bpsc .bpsc-italic {
  font-size: 22px;
  font-style: italic;
  text-align: justify;
}

.content-bpsc .bpsc-normal {
  font-size: 20px;
  margin-top: 15px;
  text-align: justify;
}

.content-bpsc .threeZero {
  font-size: 28px;
  color: #333399;

}

/* TRE 3.0 table  */
table {
  /* border: 1px solid black; */
  border-collapse: collapse;
  width: 98%;
}

table .rowData td {
  border: 1px solid black;
 
  height: 175px;
}



.tble-hed td {
  text-align: center;
  background: #FC3A52;
  padding: 20px;
  font-weight: 667;
  color: #FFFFFF;
  font-size: 28px;
}



.rowData ul li {
  font-size: 20px;
  text-decoration: underline;
  color: #2600FF;
  cursor: pointer;
  transition-duration: 0.1s;
  width: 350px;
 

}

.rowData ul li:hover {
  font-weight: 600;
  color: red;
}

.cell-text {
  text-align: center;
  /* Horizontally centers content */
  vertical-align: middle;
  /* Vertically centers content */
  padding: 8px;
  /* Optional: adds space inside cells */
  border: 1px solid #ddd;
  font-size: 20px;
  font-weight: 700;
 
}

@media(max-width: 880px) {
  .container {
      
     
      padding: 0 40px;
  }
  .content-bpsc {
      width: 100%;
      /* padding: 50px; */
  }

  table {
      width: 100%;
  }
  table .rowData td { 
  height: 100%;
  font-size: 18px;

}

  .rowData ul li {
      width: auto;
      font-size: 17px;
  } 
}

@media(max-width: 680px) {
  .content-bpsc {
      width: 100%;
  }

  table {
      width: 100%;
  }

  .content-bpsc .fourZero {
      font-size: 20px;
  }

  .content-bpsc .bpsc-italic {
      font-size: 16px;
  }

  .content-bpsc .bpsc-normal {
      font-size: 15px;
  }

  .content-bpsc .threeZero {
      font-size: 20px;
  }

  .tble-hed td {
      font-size: 20px;
      padding: 10px;
  }

  .rowData ul li {
      font-size: 16px;
  }

  .cell-text {
      font-size: 16px;
  }
}

@media(max-width: 320px) {
  .content-bpsc .fourZero {
      font-size: 16px;
  }

  .content-bpsc .bpsc-italic {
      font-size: 13px;
  }

  .content-bpsc .bpsc-normal {
      font-size: 13px;
  }

  .content-bpsc .threeZero {
      font-size: 16px;
  }

  .tble-hed td {
      font-size: 16px;
      padding: 5px;
  }

  .rowData ul li {
      font-size: 12px;
  }

  .cell-text {
      font-size: 12px;
  }
}
</style>