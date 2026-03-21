<script>
  import { onMount } from "svelte";
  import { getRooms } from "$lib/services/rooms.js";
  import BookingForm from "$lib/components/BookingForm.svelte";
  import LoginModal from "$lib/components/LoginModal.svelte";
  import { isAuthenticated } from "$lib/stores/auth.js";
  import { showToast } from "$lib/stores/toast";
  import { get } from "svelte/store";

  let rooms = [];
  let showBooking = false;
  let selectedRoom = null;
  let showLogin = false;

  let sileneJunior, lupineJunior, sileneSuite, lupineSuite;

  async function fetchRooms() {
    try {
      const allRooms = await getRooms();
      rooms = allRooms.map((room) => ({
        ...room,
        features: room.features || [
          `Size: ${room.size || "N/A"}`,
          `Capacity: ${room.capacity || 2} guests`,
          room.bathroom || "Shower or bathtub",
          "Wifi & TV",
          room.coffee || "Coffee machine or kettle",
          room.view || "Beautiful view",
        ],
      }));

      sileneJunior = rooms.find((r) => r.type === "Silene Junior Suite");
      lupineJunior = rooms.find((r) => r.type === "Lupine Junior Suite");
      sileneSuite = rooms.find((r) => r.type === "Silene Suite");
      lupineSuite = rooms.find((r) => r.type === "Lupine Suite");
    } catch (err) {
      console.error("Error fetching rooms:", err);
    }
  }

  onMount(fetchRooms);

  function handleBook(room) {
    if (get(isAuthenticated)) {
      // User is logged in
      selectedRoom = room;
      showBooking = true;
    } else {
      // User is not logged in
      showToast("Please log in to book a room.", "error");
    }
  }

  function closeBooking() {
    selectedRoom = null;
    showBooking = false;
  }

  function closeLogin() {
    showLogin = false;
  }
</script>

<main class="suites-main">
  <!-- Junior Suite Section -->
  <section
    id="suites-top"
    class="suites-section"
    aria-labelledby="suites-top-heading"
  >
    <div class="container">
      <div class="suites-intro">
        <h2 id="suites-top-heading" class="suites-heading">Junior Suite</h2>
        <p class="suites-subheading">
          Our junior suite rooms are well equipped and offer spectacular views.
        </p>
      </div>

      <div class="suites-card">
        <div class="suites-card-tabs">
          <ul
            class="nav nav-pills suites-tabs"
            role="tablist"
            aria-label="Junior Suite Room Types"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active suites-tab"
                id="tab-silene-junior"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-silene-junior"
                type="button"
                role="tab"
                aria-controls="tab-content-silene-junior"
                aria-selected="true"
                tabindex="0"
              >
                {sileneJunior?.type || "Loading..."}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link suites-tab"
                id="tab-lupine-junior"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-lupine-junior"
                type="button"
                role="tab"
                aria-controls="tab-content-lupine-junior"
                aria-selected="false"
                tabindex="-1"
              >
                {lupineJunior?.type || "Loading..."}
              </button>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          {#if sileneJunior}
            <div
              class="tab-pane fade show active suites-room-info"
              role="tabpanel"
              id="tab-content-silene-junior"
              aria-labelledby="tab-silene-junior"
              tabindex="0"
            >
              <div class="row">
                <div class="col-md-7 col-sm-12 left">
                  <img
                    class="img-fluid suites-room-img"
                    src={sileneJunior.images[0] || "default-room.jpg"}
                    alt={sileneJunior.description || "Silene Junior Suite"}
                    loading="lazy"
                  />
                </div>
                <div class="col-md-5 col-sm-12 right">
                  <div class="suites-room-features">
                    <ul class="suites-features-list">
                      {#each sileneJunior.features as feature}
                        <li class="suites-features-item">{feature}</li>
                      {/each}
                    </ul>
                    <button
                      class="suites-book-btn btn btn-danger"
                      type="button"
                      on:click={() => handleBook(sileneJunior)}
                      aria-label={`Book ${sileneJunior.type}`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/if}

          {#if lupineJunior}
            <div
              class="tab-pane fade suites-room-info"
              role="tabpanel"
              id="tab-content-lupine-junior"
              aria-labelledby="tab-lupine-junior"
              tabindex="0"
            >
              <div class="row">
                <div class="col-md-7 col-sm-12 left">
                  <img
                    class="img-fluid suites-room-img"
                    src={lupineJunior.images[0] || "default-room.jpg"}
                    alt={lupineJunior.description || "Lupine Junior Suite"}
                    loading="lazy"
                  />
                </div>
                <div class="col-md-5 col-sm-12 right">
                  <div class="suites-room-features">
                    <ul class="suites-features-list">
                      {#each lupineJunior.features as feature}
                        <li class="suites-features-item">{feature}</li>
                      {/each}
                    </ul>

                    <button
                      class="suites-book-btn btn btn-danger"
                      type="button"
                      on:click={() => handleBook(lupineJunior)}
                      aria-label={`Book ${lupineJunior.type}`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <!-- Suite Section -->
  <section class="suites-section" aria-labelledby="suites-main-heading">
    <div class="container">
      <div class="suites-intro">
        <h2 id="suites-main-heading" class="suites-heading">Suite</h2>
        <p class="suites-subheading">
          Our suite rooms are spacious with spectacular views and luxurious
          amenities.
        </p>
      </div>

      <div class="suites-card">
        <div class="suites-card-tabs">
          <ul
            class="nav nav-pills suites-tabs"
            role="tablist"
            aria-label="Suite Room Types"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active suites-tab"
                id="tab-silene-suite"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-silene-suite"
                type="button"
                role="tab"
                aria-controls="tab-content-silene-suite"
                aria-selected="true"
                tabindex="0"
              >
                {sileneSuite?.type || "Loading..."}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link suites-tab"
                id="tab-lupine-suite"
                data-bs-toggle="pill"
                data-bs-target="#tab-content-lupine-suite"
                type="button"
                role="tab"
                aria-controls="tab-content-lupine-suite"
                aria-selected="false"
                tabindex="-1"
              >
                {lupineSuite?.type || "Loading..."}
              </button>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          {#if sileneSuite}
            <div
              class="tab-pane fade show active suites-room-info"
              role="tabpanel"
              id="tab-content-silene-suite"
              aria-labelledby="tab-silene-suite"
              tabindex="0"
            >
              <div class="row">
                <div class="col-md-7 col-sm-12 left">
                  <img
                    class="img-fluid suites-room-img"
                    src={sileneSuite.images[0] || "default-room.jpg"}
                    alt={sileneSuite.description || "Silene Suite"}
                    loading="lazy"
                  />
                </div>
                <div class="col-md-5 col-sm-12 right">
                  <div class="suites-room-features">
                    <ul class="suites-features-list">
                      {#each sileneSuite.features as feature}
                        <li class="suites-features-item">{feature}</li>
                      {/each}
                    </ul>

                    <button
                      class="suites-book-btn btn btn-danger"
                      type="button"
                      on:click={() => handleBook(sileneSuite)}
                      aria-label={`Book ${sileneSuite.type}`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/if}

          {#if lupineSuite}
            <div
              class="tab-pane fade suites-room-info"
              role="tabpanel"
              id="tab-content-lupine-suite"
              aria-labelledby="tab-lupine-suite"
              tabindex="0"
            >
              <div class="row">
                <div class="col-md-7 col-sm-12 left">
                  <img
                    class="img-fluid suites-room-img"
                    src={lupineSuite.images[0] || "default-room.jpg"}
                    alt={lupineSuite.description || "Lupine Suite"}
                    loading="lazy"
                  />
                </div>
                <div class="col-md-5 col-sm-12 right">
                  <div class="suites-room-features">
                    <ul class="suites-features-list">
                      {#each lupineSuite.features as feature}
                        <li class="suites-features-item">{feature}</li>
                      {/each}
                    </ul>
                    <button
                      class="suites-book-btn btn btn-danger"
                      type="button"
                      on:click={() => handleBook(lupineSuite)}
                      aria-label={`Book ${lupineSuite.type}`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>

  {#if showBooking}
    <BookingForm
      roomId={selectedRoom.id}
      roomName={selectedRoom.type}
      roomData={selectedRoom}
      on:close={closeBooking}
    />
  {/if}

  {#if showLogin}
    <LoginModal on:close={closeLogin} />
  {/if}
</main>

<style>
  .suites-main {
    padding: 3rem 0;
  }

  .suites-section {
    margin-bottom: 3rem;
    text-align: center;
  }

  /* Let Bootstrap grid work */
  .suites-room-info {
    padding: 1.5rem 0;
  }

  .suites-room-img {
    width: 100%;
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  .suites-intro {
    margin-bottom: 2rem;
  }

  .suites-heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
  }

  .suites-subheading {
    font-size: 1.2rem;
    color: #555;
    max-width: 650px;
    margin: 0 auto;
  }

  /* Tabs */
  .suites-tabs {
    display: flex;
    justify-content: space-evenly;
    gap: 0rem;
    border-bottom: 3px solid var(--color-primary);
    list-style: none;
    margin: 0;
    padding-top: 0.5rem;
    user-select: none;
    flex-wrap: nowrap;
  }

  .suites-tab {
    font-weight: 700;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: var(--color-text-dark);
    border-bottom: 3px solid transparent;
    transition:
      color var(--transition),
      border-color var(--transition);
  }

  .suites-tab[aria-selected="true"],
  .suites-tab:hover,
  .suites-tab:focus-visible {
    color: var(--color-primary);
    border-color: var(--color-primary);
    outline: none;
  }

  /* Bootstrap Overrides for Nav Pills */
  .nav-pills .nav-link {
    background-color: #fff;
    color: var(--color-text-dark);
    border-radius: 0rem;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }

  .nav-pills .nav-link.active {
    background-color: var(--color-text-dark);
    color: #fff;
  }

  /* Features list */
  .suites-room-features {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: auto;
    margin-top: 1.4rem;
    padding-left: 30px;
  }

  .suites-features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.2rem 0;
    font-weight: 600;
    color: var(--color-text-dark);
  }

  .suites-features-item {
    margin-bottom: 0.4rem;
    position: relative;
    /* padding-left: 1.3rem; */
    text-align: left;
    font-weight: 300;
  }

  /* Book Button */
  .suites-book-btn {
    background-color: var(--color-primary);
    color: var(--color-bg-light);
    border: none;
    border-radius: var(--border-radius);
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 2px 3px 8px var(--color-primary-dark);
    transition:
      background-color var(--transition),
      box-shadow var(--transition);
    width: fit-content;
  }

  .suites-book-btn:hover,
  .suites-book-btn:focus-visible {
    background-color: var(--color-primary-dark);
    box-shadow: 0 0 10px var(--color-primary);
    outline: 2px solid var(--color-primary-dark);
    outline-offset: 2px;
    outline-offset: 2px;
    outline-style: solid;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .suites-room-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .suites-room-img,
    .suites-room-features {
      width: 100%;
    }

    .suites-features-list {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 400px) {
    main {
      padding: 2rem 1rem;
    }

    .suites-heading {
      font-size: 1.8rem;
    }

    .suites-subheading {
      font-size: 1rem;
    }

    .suites-tabs {
      flex-direction: column;
      gap: 0.75rem;
    }

    .suites-tab {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 2.6vw;
    }
  }
</style>
