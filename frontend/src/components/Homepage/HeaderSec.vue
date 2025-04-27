<template>
  <div>
    <nav ref="navMenu">
      <!-- Logo Section -->
      <div class="logo">
        <h1>LOGO</h1>
      </div>

      <!-- Mobile Menu Icon (hamburger) -->
      <div class="menu-icon" @click="toggleMenu" ref="menuIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Navigation Links -->
      <ul :class="['nav-links', { active: isMenuActive }]">
        <!-- Loop through top-level menu items -->
        <li v-for="(item, index) in menuItems" :key="index" class="dropdown">
          <!-- Main menu item -->
          <a href="#" @click.prevent="toggleDropdown(index)">
            {{ item.name }}

            <!-- Show arrow if submenu exists -->
            <span v-if="item.submenu" class="dropdown-icon" :class="{ rotated: activeDropdown === index }">
              &or;
            </span>
          </a>

          <!-- Dropdown Menu -->
          <ul v-if="item.submenu" :class="['dropdown-menu', { show: activeDropdown === index }]">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex" class="sub-dropdown">
              <a href="#" @click.prevent="toggleSubDropdown(index, subIndex)">
                {{ subItem.name }}
                <span v-if="subItem.submenu"
                  :class="['sub-dropdown-icon', { rotated: activeSubDropdown[`${index}-${subIndex}`] }]">
                  &gt;
                </span>



              </a>

              <!-- Sub-dropdown Menu -->
              <ul v-if="subItem.submenu" :class="[
                'sub-dropdown-menu',
                { show: activeSubDropdown[`${index}-${subIndex}`] },
              ]">
                <li v-for="(subSubItem, subSubIndex) in subItem.submenu" :key="subSubIndex">
                  <a href="#"
                    @click.prevent="handleClick(item.name, subItem.name || subItem.title, subSubItem.title || subSubItem)">
                    {{ subSubItem.title || subSubItem }}
                  </a>

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
      isMenuActive: false,  // Controls mobile menu visibility
      activeDropdown: null, // Tracks which top-level dropdown is open
      activeSubDropdown: {}, // Tracks which sub-dropdowns are open
      hasFetchedSyllabus: false, // Prevents refetching "Syllabus"
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
          submenu: [], // Will be fetched dynamically
        },
        {
          name: "PYQP & Answer Key",
          submenu: [
            {
              name: "BPSC",
              submenu: [
                { title: "PGT (11-12)" },
                { title: "TGT (9-10)" },
                { title: "UPPER PRT (6-8)" },
                { title: "PRT (1-5)" },
              ],
            },
            {
              name: "BIHAR STET",
              submenu: [
                { title: "STET 1 TGT (9-10)" },
                { title: "STET 2 PGT (11-12)" },
              ],
            },
            {
              name: "KVS",
              submenu: [
                { title: "PGT" },
                { title: "TGT" },
                { title: "PRT" },
              ],
            },
            {
              name: "NVS",
              submenu: [
                { title: "Shivam" },
                { title: "TGT" },
                { title: "PRT" },
              ],
            },
            {
              name: "DSSB",
              submenu: [
                { title: "PGT" },
                { title: "TGT" },
                { title: "PRT" },
              ],
            },
            {
              name: "HARYANA(HPSP)",
              submenu: [{ title: "PGT" }],
            },
            {
              name: "UP LT GRADE GIC",
              submenu: [{ title: "PGT" }],
            },
          ],
        },
        {
          name: "Solved Paper ",
          submenu: [
            {
              name: "BPSC TRE",
              submenu: [
                { title: "BPSC TRE 1.0 (11-12) Computer Science" },
                { title: "BPSC TRE 2.0 (11-12) Computer Science" },
                { title: "BPSC TRE 2.0 (9-10) Computer Science" },
                { title: "BPSC TRE 3.0 (11-12) Computer Science" },
                { title: "BPSC TRE 3.0 (6-10) Computer Science" },
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
    //  Toggle mobile menu open/close (hamburger icon)
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },

    //  Toggle top-level dropdown (e.g., Home, Syllabus, PYQP, etc.)
    async toggleDropdown(index) {
      const clickedItem = this.menuItems[index];

      //  Fetch syllabus data only if it's clicked and not already loaded
      if (clickedItem.name === "Syllabus" && clickedItem.submenu.length === 0) {
        try {
          const response = await fetch("https://cms.trehousingpublication.com/api/v1/");
          const apiData = await response.json();

          // Format the fetched data for submenu compatibility
          const formattedData = apiData.map((item) => ({
            name: item.title,
            submenu: item.subjects, // expects subjects array
          }));

          //  Assign the formatted submenu to the "Syllabus" menu
          this.menuItems[index].submenu = formattedData;
        } catch (error) {
          console.error("Error fetching syllabus:", error);
        }
      }

      //  If already active, close it
      if (this.activeDropdown === index) {
        this.activeDropdown = null;
        this.activeSubDropdown = {}; // Close all submenus
      } else {
        //  Close any open dropdowns first, then open the selected one
        this.activeDropdown = index;
        this.activeSubDropdown = {};
      }
    },

    //  Toggle nested sub-dropdown (e.g., inside PYQP or Syllabus)
    toggleSubDropdown(parentIndex, subIndex) {
      const key = `${parentIndex}-${subIndex}`;

      //  Only allow one sub-dropdown to be open at a time
      if (this.activeSubDropdown[key]) {
        this.activeSubDropdown = {}; // close if already active
      } else {
        this.activeSubDropdown = {
          [key]: true, // open only the clicked one
        };
      }
    },

    //  Close dropdowns when clicking outside
    closeDropdowns(event) {
      const dropdown = this.$el.querySelector(".dropdown-container");
      if (dropdown && !dropdown.contains(event.target)) {
        this.activeDropdown = null;
        this.activeSubDropdown = {};
      }

    },

    handleClick(mainMenu, subMenu, clickedItem) {
      // Clean up input values just in case
      const section = (mainMenu || "").toLowerCase();

      
      if (section === "syllabus") {
        const course = subMenu;
        const subject = clickedItem;
        const query = new URLSearchParams({ course, subject }).toString();
        window.location.href = `/syllabus?${query}`;
      } else {
        // Everything else just shows the message
        alert("This section will be available soon.");
      }
    }

  }

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

.nav-links a:hover {
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
  /* margin-top: 20px; */
}

.dropdown-menu.show {
  display: block;
}

/* Styling for dropdown icons */
.dropdown-icon {
  padding-left: 7px;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(0deg);

  cursor: pointer;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
  margin-top: 10px;
  text-decoration: none;
  /* remove underline when rotated */
  margin-left: 10px;
}

.dropdown-icon:hover {
  text-decoration: none;
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
  height: auto;
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

.sub-dropdown-menu a {
  padding: 10px 0;
}

.sub-dropdown-menu.show {
  display: block;
}

.sub-dropdown-icon {
  padding-left: 7px;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  /* Needed for transform to work */
  transition: transform 0.3s ease;
  transform: rotate(0deg);
  cursor: pointer;
}

.sub-dropdown-icon.rotated {
  transform: rotate(90deg);
  /* Remove ! or use !important if truly needed */
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

  .dropdown-menu,
  .sub-dropdown-menu {
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
    justify-content: space-between;
  }

  .dropdown-icon {
    font-size: 15px;
    /* text-align: center; */
    margin-left: auto;

  }

  .dropdown-menu {
    position: static;
    width: 100%;

    padding: 0px 50px;

  }


  .dropdown-menu li a {

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

  .dropdown-menu li {
    padding: 0;
    margin: 0;

  }

  .sub-dropdown-menu li {
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
