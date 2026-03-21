<script>
  import { siteConfig } from "$lib/config";
</script>

<svelte:head>
  <title>Terms of Service | {siteConfig.siteName}</title>
  <meta
    name="description"
    content="Terms of Service for Skye Suites Hotel Demo. Academic project only, no real bookings."
  />
  <link rel="canonical" href="{siteConfig.siteUrl}/terms" />
</svelte:head>

<main class="container py-5">
  <h1>Terms of Service</h1>
  <p>
    Welcome to <strong>{siteConfig.siteName}</strong>. This website is an
    <strong>academic demo project</strong> for learning purposes only. No real bookings
    or payments are processed.
  </p>

  <h2>Use of the Site</h2>
  <p>
    By using this site, you agree to use it solely for educational purposes.
    Real bookings or commercial use is prohibited.
  </p>

  <h2>Intellectual Property</h2>
  <p>
    All content, images, and logos belong to this demo project. Commercial use
    is not allowed.
  </p>

  <h2>Limitation of Liability</h2>
  <p>
    The developers are not liable for any misuse or misunderstanding of demo
    content.
  </p>

  <h2>Privacy</h2>
  <p>
    No real data is collected. See <a href="/privacy-policy">Privacy Policy</a> for
    more information.
  </p>

  <h2>Modifications</h2>
  <p>Terms may be updated at any time. Changes will appear on this page.</p>

  <h2>Related Pages</h2>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/privacy-policy">Privacy Policy</a></li>
  </ul>
</main>
