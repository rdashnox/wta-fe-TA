import { a as attr_class, e as escape_html, b as attr } from "../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formElement;
    let errors = {};
    let isSubmitting = false;
    function isContactFormFilled() {
      const title = formElement?.elements.title.value?.trim();
      const firstName = formElement?.elements.firstName.value?.trim();
      const lastName = formElement?.elements.lastName.value?.trim();
      const email = formElement?.elements["contact-form-email"].value?.trim();
      const message = formElement?.elements.message.value?.trim();
      return title !== "" && firstName !== "" && lastName !== "" && email !== "" && message !== "";
    }
    $$renderer2.push(`<main class="section svelte-a23kkf"><div class="section__container svelte-a23kkf"><div class="section__column section__column--left svelte-a23kkf"><h2 class="section__heading svelte-a23kkf"><em>Getting Here</em></h2> <p class="section__info svelte-a23kkf">Check in 3:00 PM | Check-out 11:00 AM</p> <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62909.9441331484!2d119.8891781399626!3d11.509883154436585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bbf2baae3fd5d1%3A0x5b4e937574dbfc9d!2sLinapacan%2C%20Palawan!5e0!3m2!1sen!2sph!4v1696843172345!5m2!1sen!2sph" width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Linapacan, Palawan"></iframe></div></div> <div class="section__column section__column--right svelte-a23kkf"><p class="section__intro svelte-a23kkf"><em>Let's get in touch</em></p> <form novalidate=""><p class="form-text text-muted">Fields marked with <span class="text-danger">*</span> are required.</p> <div class="mb-3"><label for="title" class="form-label">Subject</label> <input type="text"${attr_class("form-control", void 0, { "is-invalid": errors.title })} id="title" name="title" required="" autocomplete="off"/> <div class="invalid-feedback">${escape_html(errors.title)}</div></div> <div class="row g-3"><div class="col-md-6"><label for="first_name" class="form-label">First Name</label> <input type="text"${attr_class("form-control", void 0, { "is-invalid": errors.firstName })} id="first_name" name="firstName" required="" autocomplete="given-name"/> <div class="invalid-feedback">${escape_html(errors.firstName)}</div></div> <div class="col-md-6"><label for="last_name" class="form-label">Last Name</label> <input type="text"${attr_class("form-control", void 0, { "is-invalid": errors.lastName })} id="last_name" name="lastName" required="" autocomplete="family-name"/> <div class="invalid-feedback">${escape_html(errors.lastName)}</div></div></div> <div class="mb-3 mt-3"><label for="contact-form-email" class="form-label">Email</label> <input type="email"${attr_class("form-control", void 0, { "is-invalid": errors.email })} id="contact-form-email" name="email" required="" autocomplete="email"/> <div class="invalid-feedback">${escape_html(errors.email)}</div></div> <div class="mb-3"><label for="message" class="form-label">Message</label> <textarea${attr_class("form-control", void 0, { "is-invalid": errors.message })} id="message" name="message" rows="4" required=""></textarea> <div class="invalid-feedback">${escape_html(errors.message)}</div></div> <div class="d-flex justify-content-end gap-2"><button type="reset" class="btn btn-secondary">Reset</button> <button type="submit" class="btn btn-danger"${attr("disabled", Object.keys(errors).length > 0 || !isContactFormFilled() || isSubmitting, true)}>${escape_html("SEND")}</button></div></form></div></div></main>`);
  });
}
export {
  _page as default
};
