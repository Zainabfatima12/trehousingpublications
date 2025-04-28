<template>
  <div class="container text-center my-4">
    <p
      class="fw-bold fs-3 text-decoration-underline"
      style="
        font-family: 'Inter', sans-serif;
        color: #0152cc;
        font-size: 34px;
        font-weight: bold;
        text-decoration: underline;
      "
    >
      News Letter
    </p>
  </div>

  <div class="container">
    <div class="row align-items-center">
      <!-- Image Section -->
      <div class="col-md-6 d-flex justify-content-center">
        <img
          :src="require('@/assets/Homepage/NewsLetter.png')"
          alt="Newsletter Image"
          class="img-fluid"
        />
      </div>

      <!-- Newsletter Content Section -->
      <div class="col-md-6 text-center text-md-start my-4">
        <span class="fw-bold d-block" style="font-size: 42px">
          Subscribe to Our Newsletter!!
        </span>
        <span
          class="d-block mt-2 text-secondary fw-normal"
          style="font-size: 20px"
        >
          Subscribe to our newsletter and stay updated
        </span>

        <!-- Input Group -->
        <div class="input-group my-4" style="max-width: 502px">
          <span
            class="input-group-text border-3"
            style="border-radius: 10px 0 0 10px"
          >
            <i class="bi bi-envelope-fill fs-3" style="color: #2600ff"></i>
          </span>
          <input
            type="text"
            class="form-control border-3 fw-bold"
            style="
              height: 82px;
              font-size: 32px;
              border-radius: 0px 10px 10px 10px;
              outline: none;
            "
          />
        </div>

        <!-- Subscribe Button -->
        <button
          class="btn w-100 text-dark fw-bold"
          style="
            max-width: 502px;
            height: 82px;
            border-radius: 10px;
            background-color: #0152cc;
            font-size: 32px;
          "
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>
