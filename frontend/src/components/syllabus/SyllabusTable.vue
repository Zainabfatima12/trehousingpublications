<template>
    <div class="sidebar-container">
      <aside class="sidebar">
        <h2 class="explore">Explore All Previous Year Papers</h2>
        <nav>
          <ul class="space-y-2">
            <li v-for="item in menuItems" :key="item.text" class="dropdown menu-item">
              <a
                href="#"
                class="block px-4 py-2 text-white rounded-md hover:bg-gray-700 flex items-center no-underline"
                @click="toggleDropdown(item)"
              >
                <span 
                  class="dropdown-arrow" 
                  :class="{ 'rotate-90': item.isOpen }"
                >
                  &#8250; <!-- This is the right arrow symbol "›" -->
                </span>
                <span class="menu-item-text">{{ item.text }}</span>
              </a>
              <ul v-if="item.isOpen" class="dropdown-menu mt-2 space-y-2">
                <li v-for="subItem in item.subMenu" :key="subItem.text">
                  <a
                    :href="subItem.link"
                    class="block px-4 py-2 text-white rounded-md hover:bg-gray-700 no-underline"
                  >
                    {{ subItem.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SyllabusTable',
    data() {
      return {
        menuItems: [
          { 
            text: "All subject Syllabus", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "Bihar Computer Teacher", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "Intelligence Bureau (IB)", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "CSIR SP ASO", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "NAICL Assistant", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "SSC CGL", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
          { 
            text: "Bank SO", 
            link: "#", 
            isOpen: false, 
            subMenu: [
              { text: "Sub Item 1", link: "#" },
              { text: "Sub Item 2", link: "#" },
            ]
          },
        ],
      };
    },
    methods: {
      toggleDropdown(item) {
        item.isOpen = !item.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar-container {
    width: 250px;
    height: 50vh;
    background-color: whitesmoke;
    padding: 20px;
    border: 1px solid gray;
    overflow-y: auto; /* Enable vertical scrolling */
  }
  
  .explore {
    color: black;
    text-align: left;
    font-size: medium;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .menu-item {
    margin-bottom: 10px;
  }
  
  .dropdown-menu {
    list-style-type: none;
    padding-left: 0;
  }
  
  .dropdown-arrow {
    margin-right: 10px;
    font-size: 18px;
    transition: transform 0.3s ease;
    text-decoration: none;
    color: black; /* Keep the arrow color black */
  }
  
  .rotate-90 {
    transform: rotate(90deg);
  }
  
  .menu-item-text {
    margin-left: 10px;
  }
  
  .dropdown a {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    text-decoration: none;
    color: black !important;
  }
  
  
  .dropdown a:hover {
    color: orange !important;
  }
  
  .dropdown-menu a {
    padding-left: 20px;
    color: black;
    text-decoration: none;
  }
  
  .dropdown-menu a:hover {
    color: orange;
  }
  </style>
  