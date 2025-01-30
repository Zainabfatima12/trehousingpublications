<template>
  <div>
    <nav>
      <div class="logo">
        
         <h1>LOGO</h1>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul :class="['nav-links', { active: isMenuActive }]">
        <li><a href="#">Home</a></li>
        <li><a href="#">Syllabus</a></li>
        <li><a href="#">PYQs</a></li>
        <li><a href="#">Solved Paper</a></li>
        <li><a href="#">Mock Test</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logoPath from "@/assets/Homepage/logo-nobg.png";

export default {
  data() {
    return {
      logo: logoPath,
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");

nav {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 20px 40px;
  background-color: white;
  width: 100%;
  /* padding: 40px; */
}

.logo {
  /* flex-shrink: 0; */
}

.logo img {
  width: 115px;
  height: auto;
  margin-left: 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  flex-grow: 1;
  justify-content: center; /* Centering links */
}

.nav-links li {
  margin: 0 20px;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  /* font-weight: bold; */
  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
}

.nav-links a:hover {
  text-decoration: underline;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}


.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;

}

.menu-icon div {
  width: 100%;
  height: 3px;
  background-color: black;

}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-icon {
    display: flex;
    
  }
  .logo img
  {
    width: 78px;
    margin-left: -20px;
  } 

  
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 85px;
    left: 0;
    background-color: #f9f2f2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    padding: 15px 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .logo img {
    width: 60px;
    margin-left: -20px;
    
  }

  .nav-links a {
    font-size: 16px;
  }
}
</style>
