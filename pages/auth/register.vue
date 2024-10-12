<template>
    <div>
        <form class="p-5">

            <div class="flex mb-5 gap-2">
                <div>
                    <input
                        type="file"
                        class="file-input file-input-primary w-full max-w-xs shadow-lg shadow-primary/50 h-full" />
                </div>
                <div>
                    <label class="input input-bordered flex items-center gap-2 shadow-lg mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" class="grow" placeholder="Phone Number" required />
                    </label>

                    <select class="select select-bordered w-full max-w-xs shadow-lg">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>

            <select class="select select-bordered w-full shadow-lg mb-4">
                <option disabled selected>Date of Birth</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>

            <select class="select select-bordered w-full shadow-lg mb-4">
                <option disabled selected>Country</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>


            <label class="input input-bordered flex items-center gap-2 shadow-lg mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Signature" required />
            </label>


            <NuxtLink to="/">
                <button class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Register</button>
            </NuxtLink>

            <NuxtLink to="/auth/login"
                      class="btn btn-sm btn-secondary shadow-lg shadow-secondary/60">Login</NuxtLink>


        </form>
    </div>
</template>

<script>

definePageMeta({
    layout: 'auth-layout'
})

</script>

<style scoped>

</style>