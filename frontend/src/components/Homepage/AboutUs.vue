<template>
  <div class="p-md-5 p-2">
    <div class="heading mx-md-5 mx-sm-3 mx-4">
      <!-- Heading text -->
      <p
        class="text-justify fw-bold fs-4 text-decoration-underline"
        style="color: #2600ff; font-family: 'Inter', sans-serif"
      >
        About Us
      </p>
    </div>

    <!-- Content text -->
    <div
      class="parent d-flex flex-column flex-lg-row justify-content-between align-items-center h-auto px-4"
    >
      <div class="para container h-auto w-70 flex-grow-1 mb-4 mb-md-0">
        <p
          class="text-lg-justify fw-normal"
          style="font-family: 'Inter', sans-serif; text-align: justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          maxime facere ratione. Incidunt provident cupiditate, eveniet dolores
          nulla culpa harum. Recusandae possimus eum nisi ducimus quas sed
          consequuntur fugiat atque, eligendi architecto voluptatibus
          repudiandae error fugit autem omnis totam molestias, itaque dolorem.
          Possimus a quidem, maxime odit officiis quam. Autem perspiciatis quod
          rem, quis, maiores, obcaecati earum sequi aspernatur ipsum ipsa
          asperiores itaque iure. Culpa excepturi pariatur perferendis optio
          aliquam deleniti at esse. Nemo possimus inventore voluptas porro ad
          cumque fuga, suscipit cum ullam veniam voluptatem natus numquam
          similique quasi magnam in praesentium atque. Praesentium, veritatis
          nobis dolorem fugit quisquam vero officiis eum optio quasi ullam enim!
          Iusto, necessitatibus tempore dolorem quo, tempora inventore
          recusandae nesciunt explicabo quas quasi velit iste magni nam nostrum
          ullam reprehenderit nobis repellendus. Voluptas provident cupiditate
          ipsa, blanditiis, earum iure aperiam ea doloremque accusamus porro,
          qui minus aliquid atque exercitationem dolorem? Odio corporis animi
          repudiandae laborum molestiae, neque officiis. Itaque, ipsa ea!
          Molestias impedit eaque sapiente recusandae veniam sed amet ipsum
          error nobis a quidem fugit cum ratione explicabo, expedita, ut culpa
          consequuntur itaque eos molestiae voluptas! Id unde dolores temporibus
          sint quas odio assumenda repellendus. Tenetur minus officiis,
          reiciendis a necessitatibus nobis est temporibus.
        </p>
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
    <!-- Button -->
    <div class="my-2 my-sm-3 my-lg-0 mx-4 mx-sm-4 mx-md-4">
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
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
