<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { user, accessToken } from "$lib/stores/auth";
  import { showToast } from "$lib/stores/toast";

  let profile;

  $: isAdmin = $user?.role === "admin";

  onMount(() => {
    // If no token or no user, redirect to home
    const unsubscribe = user.subscribe((value) => {
      if (!value || !accessToken) {
        showToast("Login to your account!", "error");
        goto("/");
      } else {
        profile = value;
      }
    });

    return () => unsubscribe();
  });
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if profile}
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-header bg-danger text-white">
            <h3 class="mb-0">Your Profile</h3>
          </div>
          <div class="card-body">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Role:</strong> {profile.role}</p>
            {#if !isAdmin}
              <p><strong>Bookings:</strong> {profile.bookingCount}</p>

              <a href="/my-bookings" class="btn btn-outline-primary mt-3">
                View Bookings
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <p class="text-center py-5">Redirecting...</p>
{/if}
