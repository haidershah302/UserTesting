<template>
    <div>
        <div class="px-4 grid grid-cols-12 gap-4">

            <button class="btn btn-success p-1 shadow shadow-success col-span-2">
                <img src="/assets/profile/icons/wallet.png" alt="">
            </button>

            <div class="font-semibold text-2xl col-span-8 text-base-content">
                <h2 class="mt-2">Wallet</h2>
            </div>

            <button class="btn btn-ghost p-1 shadow-inner col-span-2">
                <svg width="15" height="26" viewBox="0 0 15 26"
                     fill="currentColor"
                     class="opacity-70 text-base-content"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3904 11.7792C15.2032 12.5927 15.2032 13.9138 14.3904 14.7273L3.98631 25.1399C3.17349 25.9534 1.85347 25.9534 1.04065 25.1399C0.227825 24.3264 0.227825 23.0053 1.04065 22.1918L9.97517 13.25L1.04715 4.30818C0.234328 3.4947 0.234328 2.1736 1.04715 1.36011C1.85997 0.546629 3.17999 0.546629 3.99281 1.36011L14.3969 11.7727L14.3904 11.7792Z"/>
                </svg>
            </button>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'profile-layout'
})
</script>