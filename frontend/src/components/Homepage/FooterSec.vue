<template>
  <div>
    <footer class="footer">
      <!-- Logo and Contact Section -->
      <div class="logowithcontect">
        <div class="logo">
          <img src="@/assets/Homepage/logo-nobg.png" alt="logo" />
        </div>
        <div class="contact-info">
          <p>Address: Noida, Ayodhya, Gonda</p>
          <p>Phone No: 96282*****</p>
          <p>Email: tre@gmail.com</p>
        </div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>

      <!-- Vertical Bar -->
      <div class="vertical-bar-container">
        <div class="vertical-bar"></div>
      </div>

      <!-- Links Section -->
      <div class="links">
        <ul>
          <li><p  class="home">Home</p></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Mission & Vision</a></li>
          <li><a href="#">Other Books</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>

      <!-- Other Sections -->
      <div class="syllabus">
        <ul>
          <li><p class="syl">Syllabus</p></li>
          <li><a href="#">BPS TRE (1-5)</a></li>
          <li><a href="#">BPS TRE (6-8)</a></li>
          <li><a href="#">BPS TRE (9-10)</a></li>
          <li><a href="#">BPS TRE (11-13)</a></li>
        </ul>
      </div>

      <div class="previous">
        <ul>
          <li><p class="pre">Previous Year Paper</p></li>
        </ul>
      </div>

      <div class="solved">
        <ul>
          <li><p class="sol">Solved Paper</p></li>
          <li><a href="#">BPS TRE (1-5)</a></li>
          <li><a href="#">BPS TRE (6-8)</a></li>
          <li><a href="#">BPS TRE (9-10)</a></li>
          <li><a href="#">BPS TRE (11-13)</a></li>
        </ul>
      </div>

      <div class="mock">
        <ul>
          <li><p class="moc">Mock Test</p></li>
          <li><a href="#">BPS TRE (1-5)</a></li>
          <li><a href="#">BPS TRE (6-8)</a></li>
          <li><a href="#">BPS TRE (9-10)</a></li>
          <li><a href="#">BPS TRE (11-13)</a></li>
        </ul>
      </div>
    </footer>

    <div class="footer-bottom">
  <ul>
    <div class="left-links">
      <li><a href="#" class="term1">Privacy Policy</a></li>
      <li><a href="#" class="term2">Cookies Policy</a></li>
    </div>
    <li class="right-link"><a href="#" class="term3">Terms & Conditions</a></li>
  </ul>
</div>



  </div>
</template>

<script>
export default {
  name: "FooterSec",
};
</script>

<style scoped>

@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Footer Container */
.footer {
  background: #0057d9;
  color: white;
  padding: 2% 40px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-between;
}

/* Logo and Contact Section */
.logowithcontect {
  width: 22%;
  /* background-color: rgb(186, 6, 6); */
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
}

.logo img {
  width: 100px;
}

.contact-info p {
  margin: 5px 0;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 30px;
  padding: 10px 0;
}

.social-icons a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

/* Vertical Bar */
.vertical-bar-container {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100%;
  /* padding: 0 20px; */
}

.vertical-bar {
  width: 2px;
  height: 35vh;
  background-color: white;
}
/* Links and Sections */
.footer .links,
.footer .syllabus,
.footer .previous,
.footer .solved,
.footer .mock {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  padding: 10px 15px; 
  text-align: left; 
  font-size: 20px;
  background-color: transparent; 
  /* background-color: rgb(217, 12, 12); */
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer ul li {
  margin-bottom: 8px; /* Adds spacing between list items */
}
.footer ul li p{
  padding: 5px 10px;
}
.footer ul li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 5px 10px; 
  transition: color 0.3s ease-in-out; 
  font-size: 16px;
}

.footer ul li a:hover {
  color: black; /* Gold color on hover for better visibility */
}

.home,.syl,.pre,.sol,.moc {
  text-decoration: underline !important;
  
}

.footer-bottom { 
  padding: 20px 40px;
  background: #0057d9;
  color: white;
  border-top: 0.5px solid wheat;
  display: flex;
  /* justify-content: center; */
 
  
}

.footer-bottom ul {
  list-style: none;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0;
  margin-bottom: 10px;
}

.left-links {
  display: flex;
  gap: 22vh; 
}

.right-link {
  margin-left: auto; 
  padding-right: 30px;
  
}

.footer-bottom ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.footer-bottom ul li a:hover {
  color: black; /* Gold hover effect */
}



/* Responsive Styles */


/* Responsive Styles */
@media (max-width: 1024px),(max-width: 1024px) {
  .footer {
    flex-direction: row;
    /* align-items: center; */
    text-align: center;
    padding: 20px;
  }

  .logowithcontect {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* text-align: center; */
    margin-bottom: 20px;
  }

  .logo img {
    width: 120px;
    margin-bottom: 10px;
  }

  .contact-info {
    text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .vertical-bar {
    display: none;
  }

  /* Arrange links in one row */
  .footer-links-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 15px;
    width: 100%;
    margin-bottom: 20px;
  }

  .footer-links-container div {
    /* text-align: center; */
    padding: 10px;
    background: none;
  }

  .footer-links-container ul {
    list-style: none;
    padding: 0;
  }

  .footer-links-container ul li a {
    font-size: 14px;
  }

  /* Footer Bottom Section */
  .footer-bottom {
    width: 100%;
    padding: 15px;
    text-align: center;
    border-top: 0.5px solid white;
  }

  .footer-bottom ul {
  list-style: none;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0;
  margin-bottom: 10px;
}

.left-links {
  display: flex;
  gap: 22vh; 
}

.right-link {
  margin-left: auto; 
  padding-right: 30px;
  
}

.footer-bottom ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.footer-bottom ul li a:hover {
  color: black; /* Gold hover effect */
}


}


@media (max-width: 768px) {
  .footer {
    flex-direction: row;
    /* align-items: center; */
    text-align: center;
    padding: 10px 30px;
  }
  .vertical-bar-container {
    display: none;
  }
  .footer .links,
  .footer .syllabus,
  .footer .previous,
  .footer .solved,
  .footer .mock {
    align-items: center;
    /* padding: 0px 20px; */
  }
} 

@media (max-width: 480px) {
  .footer {
    /* padding: 5% 10px; */
    /* text-align: center; */
    align-items: center;
    justify-content: center;
  }
  .footer-bottom {
    /* padding: 10px; */
  }
  .footer-bottom ul {
    flex-direction: row;
  }
  .footer-bottom ul li {
    margin-bottom: 6px;
  }
}

@media (max-width: 360px) {
  .footer {
    padding: 5% 10px;
    text-align: center;
    align-items: center;
    justify-content: center;

  }
  .footer-bottom {
    /* padding: 8px; */
  }
  .footer-bottom ul {
    flex-direction: row;
  }
  .footer-bottom ul li {
    font-size: 14px;
  }
}

</style>
