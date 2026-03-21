<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  import { navigating } from "$app/stores";
  import { fade } from "svelte/transition";

  import { goto } from "$app/navigation";
  import { user, accessToken } from "$lib/stores/auth";

  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import { headerMap } from "$lib/headerMap";
  import Toast from "$lib/components/Toast.svelte";
  import { siteConfig } from "$lib/config";

  export const prerender = true;

  $: path = $page.url.pathname;

  // Routes that require authentication
  const protectedRoutes = [
    "/profile",
    "/my-bookings",
    "/oauth-success",
    "/admin",
  ];

  // Admin-only routes
  const adminRoutes = ["/admin"];

  // Page ID mapping
  const pageIds = {
    "/": "index",
    "/suites": "suites",
    "/dining": "dining",
    "/access": "access",
    "/experience": "experience",
  };

  $: pageId = pageIds[path] ?? "unknown";

  afterUpdate(() => {
    document.body.setAttribute("data-page-id", pageId);
  });

  // Header config
  $: headerConfig = (() => {
    if (headerMap[path]) return headerMap[path];
    return Object.values(headerMap).find((cfg) => cfg.match?.(path));
  })();

  // Dynamic page title (SEO-friendly)
  $: dynamicTitle =
    {
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
      "/oauth-success": `OAuth Success | ${siteConfig.siteName}`,
    }[path] || "Skye Suites Academic Proof-of-Concept Demo";

  // === Auth Guard Logic ===
  $: {
    const hasToken = $accessToken;
    const currentUser = $user;

    const isProtected = protectedRoutes.some((r) => path.startsWith(r));
    const isAdminRoute = adminRoutes.some((r) => path.startsWith(r));

    // Redirect if protected route but not logged in
    if (isProtected && !hasToken && path !== "/") {
      goto("/");
    }

    // Redirect if admin route but not admin
    if (
      isAdminRoute &&
      (currentUser === null || currentUser.role !== "admin")
    ) {
      goto("/");
    }

    // Redirect logged-in user from home → profile
    if (path === "/" && hasToken) {
      goto("/profile");
    }
  }
</script>

<svelte:head>
  <title>{dynamicTitle}</title>

  <meta
    name="description"
    content="Skye Suites is an academic demonstration project showcasing a Proof-of-Concept hotel facility system built with modern web technologies. This platform simulates room reservations, contact messaging, subscription and guest experiences for educational purposes only."
  />

  <meta
    name="keywords"
    content="academic project, hotel booking system, SvelteKit demo, JAMstack, hospitality system, educational web application"
  />

  <meta name="author" content={siteConfig?.siteName} />

  <meta name="application-name" content={siteConfig?.siteName} />
  <meta
    name="category"
    content="Academic Project, Frontend Software Development Simulation"
  />

  <meta
    name="application-purpose"
    content="This website is a non-commercial academic project intended for demonstration and educational use only. It does not provide real hotel services, bookings, or financial transactions."
  />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="Skye Suites | Academic and Proof-of-Concept Hotel Facility System Web App"
  />
  <meta
    property="og:description"
    content="A simulated hotel booking system developed for academic, proof-of-concept and demonstration purposes."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteConfig?.siteUrl} />

  <meta name="classification" content="Academic Project" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-precomposed.png" />
  <meta name="apple-mobile-web-app-title" content="Sky  Suites" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="shortcut icon" href="/favicon.ico" />

  <!-- Canonical -->
  <link rel="canonical" href={siteConfig?.siteUrl} />

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
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
  </script>
</svelte:head>

{#if $navigating}
  <div class="global-loader" in:fade out:fade>
    <div class="spinner"></div>
  </div>
{/if}

<header class={`header ${headerConfig?.class ?? ""}`}>
  <TopNav />

  {#if headerConfig?.showcase}
    <Showcase
      title={headerConfig.showcase.title}
      showSlideshow={headerConfig.showcase.slideshow}
    />
  {/if}
</header>

<Toast />

<div class="flex-fill">
  <slot />
</div>

<Footer />
