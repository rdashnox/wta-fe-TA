import { g as getContext, s as store_get, e as escape_html, u as unsubscribe_stores, a as attr_class, b as attr, c as stringify, f as fallback, d as bind_props, h as head, i as slot } from "../../chunks/index2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import { g as goto } from "../../chunks/client.js";
import { a as authUpdated, u as user, i as isAuthenticated, b as accessToken } from "../../chunks/auth.js";
import "../../chunks/validationSchemas.js";
import "../../chunks/LoginModal.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
import { s as siteConfig } from "../../chunks/config.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
const toast = writable(null);
function TopNav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$authUpdated", authUpdated);
    store_get($$store_subs ??= {}, "$user", user)?.role === "admin";
    $$renderer2.push(`<nav class="navbar navbar-expand-lg custom-glass-navbar"><div class="container navbar__container"><a href="/" class="navbar__logo-link" aria-label="Skye Suites Home"><img src="/images/logo.png" alt="Skye Suites Logo" class="navbar__logo" loading="lazy"/></a> <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse d-none d-lg-flex"><ul class="navbar-nav ms-auto mb-2 mb-lg-0"><li class="nav-item"><a href="/" class="nav-link">Home</a></li> <li class="nav-item"><a href="/suites" class="nav-link">Suites</a></li> <li class="nav-item"><a href="/dining" class="nav-link">Dining</a></li> <li class="nav-item"><a href="/experience" class="nav-link">Experience</a></li> <li class="nav-item"><a href="/access" class="nav-link">Access</a></li></ul> <div class="ms-lg-3 d-flex align-items-center gap-2">`);
    if (store_get($$store_subs ??= {}, "$isAuthenticated", isAuthenticated)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="position-relative account-dropdown"><button class="btn btn-outline-light btn-sm dropdown-toggle" type="button">${escape_html(store_get($$store_subs ??= {}, "$user", user)?.email)}</button> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button class="btn btn-outline-light btn-sm">Login</button> <button class="btn btn-danger btn-sm">Register</button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></nav> <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNav"><div class="offcanvas-header"><h5 class="offcanvas-title">Menu</h5> <button class="btn-close" data-bs-dismiss="offcanvas"></button></div> <div class="offcanvas-body custom-vertical-center"><ul class="navbar-nav"><li class="nav-item"><a href="/" class="nav-link">Home</a></li> <li class="nav-item"><a href="/suites" class="nav-link">Suites</a></li> <li class="nav-item"><a href="/dining" class="nav-link">Dining</a></li> <li class="nav-item"><a href="/experience" class="nav-link">Experience</a></li> <li class="nav-item"><a href="/access" class="nav-link">Access</a></li></ul> <div class="mt-3 d-grid gap-2">`);
    if (!store_get($$store_subs ??= {}, "$isAuthenticated", isAuthenticated)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="btn btn-outline-secondary">Login</button> <button class="btn btn-danger">Register</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="account-dropdown"><button class="btn btn-outline-secondary w-100 dropdown-toggle">${escape_html(store_get($$store_subs ??= {}, "$user", user)?.email)}</button> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let loading = false;
    let email = "";
    $$renderer2.push(`<footer class="footer"><div class="footer__container"><section class="footer__column" aria-labelledby="footer-contact-heading"><h3 id="footer-contact-heading" class="footer__heading">Contact Us</h3> <ul class="footer__list"><li class="footer__list-item"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> 15A Avocado Villa, Atchuete Estate Linapacan Island, Palawan 5313</li> <li class="footer__list-item"><i class="fa-solid fa-phone" aria-hidden="true"></i> +63 917 987 6543 /
          +63 2 888 2345</li> <li class="footer__list-item"><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:info@skyesuiteshotel.com">info@skyesuiteshotel.com</a></li></ul></section> <section class="footer__column" aria-labelledby="footer-social-heading"><h3 id="footer-social-heading" class="footer__heading">Follow Us</h3> <nav aria-label="Social media links" class="footer__socials"><a href="https://en.wikipedia.org/wiki/Facebook" aria-label="Facebook" class="footer__social-link" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a> <a href="https://en.wikipedia.org/wiki/Instagram" aria-label="Instagram" class="footer__social-link" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a> <a href="https://en.wikipedia.org/wiki/Pinterest" aria-label="Pinterest" class="footer__social-link" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-pinterest"></i></a> <a href="https://en.wikipedia.org/wiki/YouTube" aria-label="YouTube" class="footer__social-link" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a></nav></section> <section class="footer__column" aria-labelledby="footer-newsletter-heading"><h3 id="footer-newsletter-heading" class="footer__heading">Subscribe to our newsletter</h3> <form id="newsletter-form" class="needs-validation" novalidate=""><div class="mb-3"><label for="newsletter-email" class="visually-hidden">Email address</label> <input type="email"${attr_class(`form-control ${stringify("")}`)} id="newsletter-email" name="email" placeholder="Email address"${attr("value", email)} required=""/> <div class="invalid-feedback">Please enter a valid email.</div></div> <button type="submit" class="btn btn-danger w-100" id="footerSubscribeBtn"${attr("disabled", loading, true)}>${escape_html("Subscribe")}</button></form></section></div> <div class="footer__disclaimer text-center mt-4 px-3 svelte-jz8lnl"><hr/> <p class="small text-white mb-1"><strong>Disclaimer:</strong> Skye Suites is a <strong>fictional hotel facility</strong> created for <em>academic and proof-of-concept (POC)</em> purposes only.</p> <p class="small text-white mb-1">This web app is part of a student project for <strong>MO-IT149</strong> at <strong>Mapua Malayan Digital College</strong> and does not represent a real
      business, contact us information, booking service, or commercial entity.</p> <p class="small text-white mb-0">Learn more about this project: <a href="/about" class="text-white text-decoration-underline">About</a> | <a href="/terms" class="text-white text-decoration-underline">Terms of Service</a> | <a href="/privacy-policy" class="text-white text-decoration-underline">Privacy Policy</a></p></div></footer>  <div class="modal fade" id="newsletterModal" tabindex="-1" aria-labelledby="newsletterModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content modal-newsletter"><div class="modal-newsletter__header modal-header flex-column text-center border-0"><img src="./images/logo.png" alt="Skye Suites Logo" class="modal-newsletter__logo" loading="lazy"/> <h5 class="modal-title fw-bold" id="newsletterModalLabel">Subscribe to Our Newsletter</h5> <p class="modal-newsletter__subtitle small">Be the first to receive exclusive offers and updates.</p> <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close" id="modalCloseBtn"></button></div> <form id="modal-newsletter-form" class="modal-newsletter__form needs-validation" novalidate=""><div class="modal-body px-4"><div class="mb-3"><label for="modal-newsletter-email" class="form-label visually-hidden">Email address</label> <input type="email" class="form-control modal-newsletter__input" id="modal-newsletter-email" name="newsletterEmail" placeholder="Enter your email" required=""/> <div class="invalid-feedback text-light">Please enter a valid email.</div></div></div> <div class="modal-footer d-flex justify-content-between border-0 px-4 pb-4"><button type="button" class="btn btn-outline-secondary modal-newsletter__btn-no" id="modal-no-thanks-btn">No Thanks</button> <button type="submit" class="btn btn-danger fw-bold w-50">Subscribe</button></div></form></div></div></div>  <div aria-live="polite" aria-atomic="true" class="position-fixed top-0 end-0 p-3" style="z-index: 1100"><div id="liveToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body" id="toastMessage"></div> <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div></div>`);
  });
}
function Showcase($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  let showSlideshow = fallback($$props["showSlideshow"], false);
  if (showSlideshow) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="hero-slideshow svelte-9nngpf"><div class="slide slide1 svelte-9nngpf"></div> <div class="slide slide2 svelte-9nngpf"></div> <div class="slide slide3 svelte-9nngpf"></div> <div class="slide slide4 svelte-9nngpf"></div> <div class="slide slide5 svelte-9nngpf"></div> <div class="slide slide6 svelte-9nngpf"></div></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div class="showcase index--showcase svelte-9nngpf"><h1 class="showcase__title svelte-9nngpf">${escape_html(title)}</h1></div>`);
  bind_props($$props, { title, showSlideshow });
}
const headerMap = {
  "/": {
    class: "index-header",
    showcase: {
      title: "Your Sanctuary of Calm Adventure",
      slideshow: true
    }
  },
  "/access": {
    class: "access-header",
    showcase: {
      title: "Seamless Access to Paradise"
    }
  },
  "/suites": {
    class: "suites-header",
    match: (path) => path.startsWith("/suites"),
    showcase: {
      title: "Experience Like Never Before"
    }
  },
  "/dining": {
    class: "dining-header",
    showcase: {
      title: "Excellence with Every Bite"
    }
  },
  "/experience": {
    class: "experience-header",
    showcase: {
      title: "Serenity Meets Adventure"
    }
  }
};
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$toast", toast)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="toast-container position-fixed top-0 end-0 p-3"><div${attr_class(`toast show text-bg-${stringify(store_get($$store_subs ??= {}, "$toast", toast).variant)} border-0`)}><div class="d-flex"><div class="toast-body">${escape_html(store_get($$store_subs ??= {}, "$toast", toast).message)}</div> <button class="btn-close btn-close-white me-2 m-auto"></button></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let path, headerConfig, dynamicTitle;
    const prerender = true;
    const protectedRoutes = ["/profile", "/my-bookings", "/oauth-success", "/admin"];
    const adminRoutes = ["/admin"];
    path = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    headerConfig = (() => {
      if (headerMap[path]) return headerMap[path];
      return Object.values(headerMap).find((cfg) => cfg.match?.(path));
    })();
    dynamicTitle = {
      "/": `Home | ${siteConfig.siteName}`,
      "/about": `Aout | ${siteConfig.siteName}`,
      "/suites": `Suites | ${siteConfig.siteName}`,
      "/experience": `Experience | ${siteConfig.siteName}`,
      "/dining": `Dining | ${siteConfig.siteName}`,
      "/profile": `Profile | ${siteConfig.siteName}`,
      "/my-bookings": `My Bookings | ${siteConfig.siteName}`,
      "/admin": `Admin Page | ${siteConfig.siteName}`,
      "/privacy-policy": `Privacy Policy | ${siteConfig.siteName}`,
      "/terms": `Terms of Service | ${siteConfig.siteName}`,
      "/oauth-success": `OAuth Success | ${siteConfig.siteName}`
    }[path] || "Skye Suites Academic Proof-of-Concept Demo";
    {
      const hasToken = store_get($$store_subs ??= {}, "$accessToken", accessToken);
      const currentUser = store_get($$store_subs ??= {}, "$user", user);
      const isProtected = protectedRoutes.some((r) => path.startsWith(r));
      const isAdminRoute = adminRoutes.some((r) => path.startsWith(r));
      if (isProtected && !hasToken && path !== "/") {
        goto();
      }
      if (isAdminRoute && (currentUser === null || currentUser.role !== "admin")) {
        goto();
      }
      if (path === "/" && hasToken) {
        goto();
      }
    }
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(dynamicTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Skye Suites is an academic demonstration project showcasing a Proof-of-Concept hotel facility system built with modern web technologies. This platform simulates room reservations, contact messaging, subscription and guest experiences for educational purposes only."/> <meta name="keywords" content="academic project, hotel booking system, SvelteKit demo, JAMstack, hospitality system, educational web application"/> <meta name="author"${attr("content", siteConfig?.siteName)}/> <meta name="application-name"${attr("content", siteConfig?.siteName)}/> <meta name="category" content="Academic Project, Frontend Software Development Simulation"/> <meta name="application-purpose" content="This website is a non-commercial academic project intended for demonstration and educational use only. It does not provide real hotel services, bookings, or financial transactions."/> <meta name="robots" content="index, follow"/> <meta property="og:title" content="Skye Suites | Academic and Proof-of-Concept Hotel Facility System Web App"/> <meta property="og:description" content="A simulated hotel booking system developed for academic, proof-of-concept and demonstration purposes."/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", siteConfig?.siteUrl)}/> <meta name="classification" content="Academic Project"/> <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/> <link rel="icon" type="image/svg+xml" href="/favicon.svg"/> <link rel="shortcut icon" href="/favicon.ico"/> <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-precomposed.png"/> <meta name="apple-mobile-web-app-title" content="Sky  Suites"/> <link rel="manifest" href="/site.webmanifest"/> <link rel="shortcut icon" href="/favicon.ico"/> <link rel="canonical"${attr("href", siteConfig?.siteUrl)}/> `);
      $$renderer3.push(`<script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      "name": "Skye Suites Demo Application",
      "description": "A web-based academic Proof-of-Concept project demonstrating a hotel facility system using modern web technologies. This is not a real hotel or commercial service.",
      "provider": {
        "@type": "Organization",
        "name": "Academic Project",
        "url": "https://wta-fe.web.app"
      },
      "educationalProgramMode": "online",
      "applicationCategory": "EducationalApplication",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "keywords": [
        "SvelteKit",
        "Hotel Booking System",
        "Academic Project",
        "Demo Application",
        "Web Development"
      ],
       "disclaimer": "This platform is for academic demonstration purposes only and does not provide real booking or payment services."
    })}
  <\/script>`);
    });
    if (store_get($$store_subs ??= {}, "$navigating", navigating)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="global-loader"><div class="spinner"></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <header${attr_class(`header ${headerConfig?.class ?? ""}`)}>`);
    TopNav($$renderer2);
    $$renderer2.push(`<!----> `);
    if (headerConfig?.showcase) {
      $$renderer2.push("<!--[0-->");
      Showcase($$renderer2, {
        title: headerConfig.showcase.title,
        showSlideshow: headerConfig.showcase.slideshow
      });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></header> `);
    Toast($$renderer2);
    $$renderer2.push(`<!----> <div class="flex-fill"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { prerender });
  });
}
export {
  _layout as default
};
