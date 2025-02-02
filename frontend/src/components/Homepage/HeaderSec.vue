
<template>
  <div>
    <nav ref="navMenu">
      <!-- Logo Section -->
      <div class="logo">
        <h1>LOGO</h1>
      </div>

      <!-- Mobile Menu Icon -->
      <div class="menu-icon" @click="toggleMenu" ref="menuIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Navigation Links -->
      <ul :class="['nav-links', { active: isMenuActive }]">
        <li v-for="(item, index) in menuItems" :key="index" class="dropdown">
          <a href="#" @click.prevent="toggleDropdown(index)">
            {{ item.name }} <span v-if="item.submenu" class="dropdown-icon">&and;</span>
          </a>

          <!-- Dropdown Menu -->
          <ul v-if="item.submenu" :class="['dropdown-menu', { show: activeDropdown === index }]">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="sub-dropdown">
              <a href="#" @click.prevent="toggleSubDropdown(index, subIndex)">
                {{ subItem.name }} <span v-if="subItem.submenu" class="sub-dropdown-icon">+</span>
              </a>

              <!-- Sub-dropdown Menu -->
              <ul v-if="subItem.submenu" :class="['sub-dropdown-menu', { show: activeSubDropdown[index] === subIndex }]">
                <li v-for="(subSubItem, subSubIndex) in subItem.submenu" :key="subSubIndex">
                  <a href="#">{{ subSubItem }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      activeDropdown: null,
      activeSubDropdown: {},
      menuItems: [
        {
          name: "Home",
          submenu: [
            { name: "About" },
            { name: "Mission & Vision" },
            { name: "Books" },
            { name: "Notification" },
            { name: "News Letter" },
          ],
        },
        {
          name: "Syllabus",
          submenu: [
            {
              name: "BPSC TRE",
              submenu: [
                "PGT(11-12)",
                "TGT(9-10)",
                "UPPER PRT(6-8)",
                "PRT(1-5)",
              ],
            },
            {
              name: "BIHAR STET",
              submenu: ["STET 1 TGT (9-10)", "STET 2 PGT(11-12)"],
            },
            { name: "KVS", submenu: ["PGT", "TGT", "PRT"] },
            { name: "NVS", submenu: ["PGT", "TGT", "PRT"] },
            { name: "DSSB", submenu: ["PGT", "TGT", "PRT"] },
            {
              name: "TET(1-8)",
              submenu: [
                "CTET",
                "BIHAR",
                "JHARKHAND",
                "UTTAR PRADESH",
                "UTTARAKHAND",
                "MADHYA PRADESH",
                "RAJASTHAN",
                "HARYANA",
                "HIMACHAL PRADESH",
                "ASSAM",
                "GUJARAT",
                "CHHATTISGARH",
                "MAHARASHTRA",
                "ANDHRA PRADESH",
                "ARUNACHAL PRADESH",
                "GOA",
                "KARNATAKA",
                "KERALA",
                "MANIPUR",
                "MEGHALAYA",
                "MIZORAM",
                "NAGALAND",
                "ODISHA",
                "PUNJAB",
                "SIKKIM",
                "TAMIL NADU",
                "TELANGANA",
                "TRIPURA",
                "WEST BENGAL",
              ],
            },
            { name: "HARYANA(HPSP)" },
            { name: "UP LT GRADE GIC" },
          ],
        },
        {
          name: "PYQP & Answer Key",
          submenu: [
            {
              name: "BPSC",
              submenu: [
                "PGT (11-12)",
                "TGT (9-12)",
                "UPPER PRT(6-8)",
                "PRT(1-5)",
              ],
            },
            { name: "BIHAR STET", submenu: ["STET 1 TGT (9-10)", "STET 2 PGT(11-12)"] },
            { name: "KVS", submenu: ["PGT", "TGT", "PRT"] },
            { name: "NVS", submenu: ["PGT", "TGT", "PRT"] },
            { name: "DSSB", submenu: ["PGT", "TGT", "PRT"] },
            { name: "HARYANA(HPSP)", submenu: ["PGT"] },
            { name: "UP LT GRADE GIC", submenu: ["PGT"] },
          ],
        },
        {
          name: "Solve Paper",
          submenu: [
            {
              name: "BPSC TRE",
              submenu: [
                "BPSC TRE 1.0 (11-12) Computer Science",
                "BPSC TRE 2.0 (11-12) Computer Science",
                "BPSC TRE 2.0 (9-10) Computer Science",
                "BPSC TRE 3.0 (11-12) Computer Science",
                "BPSC TRE 3.0 (6-10) Computer Science",
              ],
            },
          ],
        },
        {
          name: "Mock Test",
          
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
      this.activeSubDropdown = {}; // Reset sub-dropdowns
    },
    toggleSubDropdown(parentIndex, subIndex) {
      this.activeSubDropdown[parentIndex] =
        this.activeSubDropdown[parentIndex] === subIndex ? null : subIndex;
    },
    closeDropdowns(event) {
      if (!this.$refs.navMenu.contains(event.target)) {
        this.activeDropdown = null;
        this.activeSubDropdown = {};
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdowns);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdowns);
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");

/* Navbar Styles */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  width: 100%;
  position: relative;
}

/* Navbar Links */
.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  flex-grow: 1;
  justify-content: center;
}

.nav-links li {
  position: relative;
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
}

.nav-links a:hover{
  text-decoration: underline;
  font-weight: bold !important;
}

/* Dropdown Menu */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  /* padding: 10px 0; */
  width: auto;
  z-index: 1001;
  border: none;
  margin-top: 20px;
}

.dropdown-menu.show {
  display: block;
}
/* Styling for dropdown icons */
.dropdown-icon {
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
}

/* Sub-dropdown menu */

/* .dropdown {
  padding: 5px;
} */

.sub-dropdown {
  position: relative;
  font-size: 20px;
  width: 100%;
  right: 25px;
  padding: 10px 20px;

}

.sub-dropdown a {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 30vh;
  /* background-color: yellow; */
  
  
}

.sub-dropdown-menu {
  display: none;
  position: absolute;
  top: -10px;
  left: 100%;
  background-color: white;
  /* background-color: rgb(116, 103, 191); */
  list-style: none;
  padding: 10px 0;
  width: 40vh;
  height: 40vh;
  overflow-y: auto;
  z-index: 1000;
  scroll-behavior: smooth;
  text-align: left;
  font-size: 20px;
  right: 50px;
  border-radius: 10px;
  margin-left: -40px;
  /* margin-top: 20px; */
}

.sub-dropdown-menu a{
  padding: 10px 0;
}

.sub-dropdown-menu.show {
  display: block;
}



/* Mobile Menu Icon */
.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;
}

.menu-icon div {
  width: 100%;
  height: 4px;
  background-color: black;
}


@media (max-width: 1024px) {
  .dropdown-menu, .sub-dropdown-menu {
    width: 100%;
  }
}

/* Responsive Design for Mobile Screens */

@media (max-width: 768px) {
  nav {
    padding: 25px 20px;
  }
  
  .menu-icon {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0px 20px;
    z-index: 1002;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    /* padding: 0; */
    margin: 0;
    font-size: 18px;
  }
  .dropdown-icon{
    font-size: 15px;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    
    padding: 0px 50px;
    
  }
 

  .dropdown-menu li a
  {
    
    width: 100%;
    padding: 5px 10px;
  }

  .sub-dropdown-menu {
    position: static;
    width: 100%;
    
    padding: 0px 100px;
    /* background-color: aqua; */
    bottom: 0%;
    height: inherit;
    
    
    
  }

  .dropdown-menu li{
    padding: 0;
    margin: 0;

  }
  .sub-dropdown-menu li{
    text-align: center;
    display: block;
    padding: 0;
    margin: 0;
  }

  /* Scrollable Dropdown for Small Screens */
  .dropdown-menu {
    /* max-height: 250px; */
    overflow-y: auto;
    
  }
}

/* Extra Small Screens (Phones) */


/* Responsive Design for 480px Screens */
@media (max-width: 480px) {
  nav {
    padding: 15px;
  }

  .nav-links {
    padding: 8px;
  }

  .nav-links li {
    margin: 6px 0;
  }

  .dropdown-menu {
    padding: 0 30px;
  }

  .sub-dropdown-menu {
    padding: 0 80px;
  }

  .menu-icon {
    width: 22px;
    height: 18px;
  }

  .nav-links a {
    font-size: 16px;
  }

  .dropdown-menu {
    font-size: 16px;
  }

  .sub-dropdown-menu {
    font-size: 14px;
  }
}

/* Responsive Design for 365px Screens */
@media (max-width: 365px) {
  nav {
    padding: 10px;
  }

  .menu-icon {
    width: 20px;
    height: 16px;
  }

  .nav-links {
    padding: 5px;
  }

  .nav-links li {
    margin: 5px 0;
  }

  .dropdown-menu {
    padding: 0 20px;
  }

  .sub-dropdown-menu {
    padding: 0 50px;
  }

  .nav-links a {
    font-size: 14px;
  }

  .dropdown-menu {
    font-size: 14px;
  }

  .sub-dropdown-menu {
    font-size: 12px;
  }
}
</style>
