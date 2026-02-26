<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { user, isAuthenticated } from "$lib/stores/auth";

  $: isAdmin = $user?.role === "admin";

  onMount(() => {
    if (!$isAuthenticated || !isAdmin) {
      goto("/");
    }
  });
</script>

<div class="container py-5">
  <h2 class="mb-4">Admin Dashboard</h2>

  <p class="text-muted">
    Focus on implementing solid CRUD operations related to Admin
    roles—everything here is just a placeholder to get you started. Feel free to
    style the /admin page using Bootstrap or custom CSS (just don't overdo it
    and not really our focus).
  </p>
</div>
