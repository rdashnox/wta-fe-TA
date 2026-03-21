<script>
  import { onMount } from "svelte";

  onMount(() => {
    const ids = ["breakfastCarousel", "restaurantCarousel", "barCarousel"];

    const carousels = ids
      .map((id) => {
        const el = document.getElementById(id);
        return el
          ? new bootstrap.Carousel(el, {
              interval: 4000,
              pause: "hover",
              ride: "carousel",
            })
          : null;
      })
      .filter(Boolean);

    const handleVisibility = () => {
      carousels.forEach((c) => (document.hidden ? c.pause() : c.cycle()));
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      carousels.forEach((c) => c.dispose());
    };
  });
</script>

<main class="dining-main container-fluid p-0">
  <!-- Breakfast -->
  <section class="content-title" aria-label="Breakfast dining section">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0 text-center">
          <h3 class="fw-bold section-title">Breakfast</h3>
          <h5 class="section-description">
            Rise and Shine! <br />
            Good food to start the day.
          </h5>
          <p class="section-paragraph">Daily from 07:00 to 10:00</p>
        </div>

        <div class="col-md-6">
          <div id="breakfastCarousel" class="carousel slide carousel-fade">
            <div class="carousel-inner rounded-4 shadow">
              {#each ["3298637", "5718127", "6466291", "376464", "7936685", "8130688"] as img, i}
                <div class="carousel-item {i === 0 ? 'active' : ''}">
                  <img
                    src={`https://images.pexels.com/photos/${img}/pexels-photo-${img}.jpeg`}
                    class="d-block w-100 img-fluid"
                    alt="Breakfast"
                    loading="lazy"
                  />
                </div>
              {/each}
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#breakfastCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#breakfastCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Restaurant -->
  <section class="content-title" aria-label="Restaurant dining section">
    <div class="container py-5">
      <div class="row align-items-center flex-md-row-reverse">
        <div class="col-md-6 mb-4 mb-md-0 text-center">
          <h3 class="fw-bold section-title">Restaurant</h3>
          <h5 class="section-description">
            It's a fine time to dine! <br />
            A genuine fine-dining experience awaits.
          </h5>
          <p class="section-paragraph-white">Daily from 10:00 to 22:00</p>
        </div>

        <div class="col-md-6">
          <div id="restaurantCarousel" class="carousel slide carousel-fade">
            <div class="carousel-inner rounded-4 shadow">
              {#each ["34308310", "3297803", "17086288", "17035088", "8680485", "10296258"] as img, i}
                <div class="carousel-item {i === 0 ? 'active' : ''}">
                  <img
                    src={`https://images.pexels.com/photos/${img}/pexels-photo-${img}.jpeg`}
                    class="d-block w-100 img-fluid"
                    alt="Restaurant"
                    loading="lazy"
                  />
                </div>
              {/each}
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#restaurantCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#restaurantCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lounge & Bar -->
  <section class="content-title" aria-label="Lounge and bar dining section">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0 text-center">
          <h3 class="fw-bold section-title">Lounge & Bar</h3>
          <h5 class="section-description">
            The best hour is happy hour. <br />
            Come and have a drink!
          </h5>
          <p class="section-paragraph">Daily from 18:00 to 23:00</p>
        </div>

        <div class="col-md-6">
          <div id="barCarousel" class="carousel slide carousel-fade">
            <div class="carousel-inner rounded-4 shadow">
              {#each ["2507010", "34322168", "19790823", "1058277", "338347", "2291636"] as img, i}
                <div class="carousel-item {i === 0 ? 'active' : ''}">
                  <img
                    src={`https://images.pexels.com/photos/${img}/pexels-photo-${img}.jpeg`}
                    class="d-block w-100 img-fluid"
                    alt="Bar"
                    loading="lazy"
                  />
                </div>
              {/each}
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#barCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#barCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .dining-main {
    width: 100%;
  }

  main .content-title:nth-of-type(odd) {
    background-color: #fff;
    color: #000;
  }

  main .content-title:nth-of-type(even) {
    background-color: #000;
    color: #fff;
  }

  .section-title {
    font-size: 2.2rem;
    font-family: "Times New Roman", Times, serif;
  }

  .section-description {
    font-size: 1.2rem;
  }

  .section-paragraph {
    font-size: 1.1rem;
    color: #000;
  }

  .section-paragraph-white {
    font-size: 1.1rem;
    color: #fff;
  }

  .carousel-inner img {
    height: 400px;
    object-fit: cover;
  }

  .carousel-fade .carousel-item {
    transition-duration: 0.75s;
  }
</style>
