<template xmlns="http://www.w3.org/1999/html">
    <div>
        <header class="navbar fixed bg-base-content text-base-100 mb-2">
            <slot name="header"></slot>
            <div class="flex-1 p-0">
                <NuxtLink to="/" class="btn btn-ghost text-xl pt-0 m-0">Fly-Live</NuxtLink>
            </div>
            <ul class="menu menu-horizontal p-0">
                <li><NuxtLink to="/auth/login">Login</NuxtLink></li>
                <li><NuxtLink to="/auth/register">Register</NuxtLink></li>
            </ul>
        </header>

        <div class="h-20"></div>

        <div class="flex justify-end gap-2 px-5 font-sans font-semibold">
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow">Popular</NuxtLink>
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow">Explore</NuxtLink>
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow">Follow</NuxtLink>
        </div>

        <main>
            <slot />
        </main>

        <div class="btm-nav bg-base-content text-base-100 z-10">
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </button>
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <NuxtLink to="/room">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            </NuxtLink>
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            </button>
            <NuxtLink to="/profile">
                <div class="avatar shadow-lg shadow-primary/30">
                    <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="h-80"></div>
    </div>
</template>