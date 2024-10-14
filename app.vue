<template>
  <div>
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <NuxtLayout>
<!--          <NuxtPage />-->
          <div role="alert" class="alert alert-error">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Unable to fetch data from api https://FLy-live.org</span>
          </div>
      </NuxtLayout>
  </div>
</template>

<script setup>

try {
    throw 'Unable to fetch data from https://www.fly-live.org'
    // Some API request
} catch (err) {
    console.log(err)
}

</script>