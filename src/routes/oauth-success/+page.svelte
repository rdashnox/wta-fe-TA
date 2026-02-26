<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { accessToken, user, isAuthenticated } from "$lib/stores/auth";

  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      await goto("/");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/users/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (!res.ok) throw new Error("Failed to fetch profile");

      const profile = await res.json();
      accessToken.set(token);
      user.set(profile);

      isAuthenticated.set(true);

      await goto("/", { invalidateAll: true });
    } catch (err) {
      console.error("OAuth error:", err);

      accessToken.set(null);
      user.set(null);
      isAuthenticated.set(false);

      await goto("/");
    }
  });
</script>
