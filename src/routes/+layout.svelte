<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { afterUpdate } from "svelte";
  import { navigating } from "$app/stores";
  import { fly, fade } from "svelte/transition";

  import TopNav from "$lib/components/TopNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import { headerMap } from "$lib/headerMap";
  import Toast from "$lib/components/Toast.svelte";

  $: path = $page.url.pathname;

  // Map route paths to page IDs
  const pageIds = {
    "/": "index",
    "/suites": "suites",
    "/dining": "dining",
    "/access": "access",
    "/experience": "experience",
  };

  // compute page ID
  $: pageId = pageIds[path] ?? "unknown";

  // set data-page-id on body
  afterUpdate(() => {
    document.body.setAttribute("data-page-id", pageId);
  });

  $: headerConfig = (() => {
    if (headerMap[path]) return headerMap[path];
    return Object.values(headerMap).find((cfg) => cfg.match?.(path));
  })();
</script>

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
