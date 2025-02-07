<template>
  <div class="sidebar-container">
    <aside class="sidebar">
      <h2 class="explore text-dark text-left fw-bold">
        Explore All Previous Year Papers
      </h2>
      <nav>
        <ul class="list-unstyled">
          <li v-for="(item, index) in menuItems" :key="index" class="mb-2">
            <a
              href="#"
              class="menu-link d-flex align-items-center px-3 py-2 text-dark fw-bold rounded text-decoration-none"
              @click.prevent="toggleDropdown(index)"
            >
              <span
                class="dropdown-arrow me-2"
                :class="{ 'rotate-90': item.isOpen }"
              >
                &#8250;
              </span>
              <span class="menu-item-text">{{ item.text }}</span>
            </a>

            <!-- Smooth dropdown transition -->
            <transition name="slide">
              <ul v-if="item.isOpen" class="list-unstyled ms-4 mt-2">
                <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                  <a
                    :href="subItem.link"
                    class="submenu-link d-block px-3 py-2 text-dark rounded text-decoration-none"
                  >
                    {{ subItem.text }}
                  </a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  name: "SyllabusTable",
  data() {
    return {
      menuItems: [
        {
          text: "All Subject Syllabus",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "Bihar Computer Teacher",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "Intelligence Bureau (IB)",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "CSIR SP ASO",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "NAICL Assistant",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "SSC CGL",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
        {
          text: "Bank SO",
          isOpen: false,
          subMenu: [
            { text: "Sub Item 1", link: "#" },
            { text: "Sub Item 2", link: "#" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.menuItems.forEach((menuItem, i) => {
        if (i !== index) {
          menuItem.isOpen = false;
        }
      });
      this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
    },
  },
};
</script>

<style scoped>
/* Sidebar Container */
.sidebar-container {
  width: 250px;
  height: 50vh;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
  margin-left: 70px;
}

/* Sidebar Heading */
.explore {
  color: black;
  text-align: left;
  font-size: large;
  font-weight: bolder;
}

/* Menu Links */
.menu-link {
  transition: color 0.3s ease, background-color 0.3s ease;
}

.menu-link:hover {
  color: orange !important;
  background-color: transparent !important;
}

/* Dropdown Arrow */
.dropdown-arrow {
  margin-right: 10px;
  font-size: 18px;
  transition: transform 0.3s ease;
  color: black;
}

.rotate-90 {
  transform: rotate(90deg);
}

/* Submenu Links */
.submenu-link {
  color: black;
  transition: color 0.3s ease;
}

.submenu-link:hover {
  color: orange !important;
}

/* Slide Transition for Dropdown */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
