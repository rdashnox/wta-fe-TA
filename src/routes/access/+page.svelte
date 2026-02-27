<svelte:head>
  <title>Access | Skye Suites</title>
</svelte:head>

<main class="section">
  <div class="section__container">
    <!-- Left Column Element -->
    <div class="section__column section__column--left">
      <h2 class="section__heading"><em>Getting Here</em></h2>
      <p class="section__info">Check in 3:00 PM | Check-out 11:00 AM</p>

      <!-- Map Container Element -->
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62909.9441331484!2d119.8891781399626!3d11.509883154436585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bbf2baae3fd5d1%3A0x5b4e937574dbfc9d!2sLinapacan%2C%20Palawan!5e0!3m2!1sen!2sph!4v1696843172345!5m2!1sen!2sph"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map of Linapacan, Palawan"
        ></iframe>
      </div>
    </div>

    <!-- Right Column Element -->
    <div class="section__column section__column--right">
      <p class="section__intro"><em>Let's get in touch</em></p>

      <!-- Contact Form Block -->
      <form id="contact-form" class="needs-validation" novalidate>
        <p class="form-text text-muted">
          Fields marked with <span class="text-danger">*</span> are required.
        </p>

        <div class="mb-3">
          <label for="title" class="form-label">Subject</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            required
            autocomplete="off"
          />
          <div class="invalid-feedback">Please enter a subject.</div>
        </div>
        <div class="row g-3">
          <div class="col-md-6">
            <label for="first_name" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              name="firstName"
              required
              autocomplete="given-name"
            />
            <div class="invalid-feedback">Please enter your first name.</div>
          </div>
          <div class="col-md-6">
            <label for="last_name" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              name="lastName"
              required
              autocomplete="family-name"
            />
            <div class="invalid-feedback">Please enter your last name.</div>
          </div>
        </div>
        <div class="mb-3 mt-3">
          <label for="contact-form-email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="contact-form-email"
            name="email"
            required
            autocomplete="email"
          />
          <div class="invalid-feedback">Please enter a valid email.</div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
          <div class="invalid-feedback">Please enter your message.</div>
        </div>
        <div class="d-flex justify-content-end gap-2">
          <button type="reset" class="btn btn-secondary">Reset</button>
          <button type="submit" class="btn btn-danger">SEND</button>
        </div>
      </form>
      <!-- End Contact Form Block -->
    </div>
  </div>
</main>

<style>
  /*=============== Access ===============*/

  /* --- Main Section and Columns --- */
  .section {
    color: var(--color-text-dark);
    margin: 1rem auto;
    max-width: 1200px;
    padding: 3rem 1.5rem;
  }

  .section__container {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .section__column--left h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  .section__column--left p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .section__column--right p.section__intro {
    font-size: 1.125rem;
    font-style: italic;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }

  /* Smallest screen custom grid stacking */
  @media (max-width: 400px) {
    .section__container {
      grid-template-columns: 1fr !important;
    }
  }
</style>
