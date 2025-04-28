<template>
  <div class="p-md-5 p-2">
    <div class="heading mx-md-5 mx-sm-3 mx-4">
      <!-- Heading text -->
      <p
        class="fw-bold text-decoration-underline"
        style="
          color: #2600ff;
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          text-align: left;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        About Us
      </p>
    </div>

    <!-- Content and Button section grouped -->
    <div
      class="parent d-flex flex-column flex-lg-row justify-content-between align-items-start h-auto px-4"
    >
      <!-- Text Content and Button together -->
      <div class="para container h-auto w-70 flex-grow-1 mb-4 mb-md-0">
        <p
          class="fw-normal"
          style="font-family: 'Inter', sans-serif; text-align: justify"
        >
          TRE Housing Publication Private Limited, established on 19th March
          2024, is a forward-thinking Indian Private Limited Company dedicated
          to advancing education through quality publishing. Specializing in the
          publishing, printing, and distribution of educational books, the
          company operates seamlessly across both online and offline platforms.
          TRE Housing Publication is committed to delivering well-researched,
          accessible, and affordable educational content that empowers learners
          and institutions nationwide. By combining traditional publishing
          excellence with modern distribution strategies, the company aspires to
          set new benchmarks in the educational sector. TRE Housing Publication
          stands as a trusted partner in fostering academic growth and lifelong
          learning.
        </p>

        <!-- Button moved directly after paragraph -->
        <div class="mt-3">
          <button
            class="btn px-5 py-3 fw-bold fs-6 lh-sm rounded-sm"
            style="
              font-size: 14.98px;
              line-height: 18.13px;
              font-family: 'Inter', sans-serif;
              background-color: #0152cc;
              color: #fff;
            "
          >
            How it works
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="image-container">
        <img
          :src="require('@/assets/Homepage/AboutUs.png')"
          alt="About Us Image"
          style="width: 100%; height: auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
