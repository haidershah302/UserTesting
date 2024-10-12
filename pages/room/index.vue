<template>
    <div>
        <div class="w-full h-screen bg-base-content relative room">

            <img class="absolute top-0 lef-0 z-0 h-full w-full" :src="authUser.room.theme.background_image" alt="image">


            <!-- Content Starts Here -->

            <div class="relative">
                <div class="grid grid-cols-12 gap-2 p-4">

                    <div class="room_head_block theme-from bg-gradient-to-tl shadow-xl theme-shadow">

                        <div class="col-span-4 text-center pt-1">
                            <NuxtLink to="/profile">
                                <div class="relative w-full min-h-16">
                                    <div class="room-avatar absolute_center">
                                        <img class="room_frame absolute_center" :src="authUser.frame.src" alt="">
                                        <img class="room_seat" :src="authUser.profile_picture" alt="">
                                    </div>
                                </div>
                            </NuxtLink>
                            <p class="text-xs font-bold">{{ authUser.name }}</p>
                        </div>

                        <div class="col-span-6 pt-3">
                            <h1>{{ authUser.room.name }}</h1>

                            <div class="flex">
                                <p>ID: {{ authUser.room.id }}</p>
                            </div>
                        </div>

                        <div class="col-span-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-full mt-4 text-[--theme-text-color] drop-shadow-md"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>

                    </div>

                    <div class="text-center pt-4 col-span-2">

                        <button class="btn btn-circle border-4 border-success btn-outline btn-success shadow-lg shadow-success/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                        </button>

                    </div>

                    <div class="col-span-2 text-center pt-4">

                        <NuxtLink to="/" class="btn btn-circle border-4 border-primary btn-outline btn-primary shadow-lg shadow-primary/50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="4"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </NuxtLink>

                    </div>

                </div>

                <div class="flex justify-between px-4">
                    <button class="btn btn-sm p-0 gap-1 btn-ghost text-accent">
                        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <span class="text-base-100 font-bold">11.3 M</span>
                    </button>

                    <button class="btn btn-sm p-0 gap-1 btn-ghost text-accent">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                        </svg>
                        <span class="text-base-100 font-bold">3211</span>
                    </button>
                </div>

                <div class="grid grid-cols-5 gap-2 gap-y-6 p-2">

                    <div v-for="n in authUser.room.allowed_seats" class="col-auto flex flex-col">

                        <div class="relative w-full min-h-16">
                            <div class="room-avatar absolute_center">
                                <img class="room_frame absolute_center" :src="authUser.room.theme.frame.src" alt="">
                                <img class="room_seat" :src="authUser.room.theme.profile_picture" alt="">
                            </div>
                        </div>

                        <p v-show="false" class="text-center text-base-100 font-bold text-sm">1</p>

                        <button v-show="false" class="btn btn-xs gap-0 text-xs mx-auto btn-ghost text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            4
                        </button>
                    </div>

                </div>

                <div class="p-2">
                    <p class="rounded-box p-2 font-bold text-base-100 text-xs max-w-80 bg-gradient-to-tr theme-from shadow-xl theme-shadow">
                        Welcome to FLY LIVE. Any bad information in chat will be blocked.
                        Please respect each other and country and religions and chat in a decent manners.
                    </p>
                </div>

                <div class="grid grid-cols-12 h-[23rem] gap-2 gap-y-4 px-2">

                    <!--Chat Box-->
                    <div class="col-span-10 rounded-b-box bg-gradient-to-tl theme-from shadow-2xl theme-shadow">

                    </div>

                    <div class="col-span-2 flex flex-col justify-end gap-4">
                        <img src="/assets/room/family.png" alt="">
                        <img src="/assets/room/rings.png" alt="">
                        <div>
                            <img src="/assets/room/crystal.png" class="w-full" alt="">
                            <div class="px-2">
                                <progress class="progress shadow-md theme-shadow"
                                          value="60" max="100">
                                </progress>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 text-[--theme-text-color] grid grid-cols-6">

                        <button class="btn p-0 btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" class="size-12 shadow-icons">
                                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" class="size-12 shadow-icons">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                 class="size-12 shadow-icons">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" class="size-12 shadow-icons">
                                <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                                <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                            </svg>
                        </button>

                        <button class="btn p-0 btn-ghost shadow-icons">
                            <img src="/assets/room/icons/games.png" alt="">
                        </button>

                        <button class="btn p-0 btn-ghost shadow-icons">
                            <img src="/assets/room/icons/gifts.png" alt="">
                        </button>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'alt'
})

const authUser = {
    id: 1,
    name: 'User Name',
    profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    room: {
        id: '123456',
        name: 'Haseeb Room',
        total_gift_interactions: 1123,
        active_users: 3211,
        allowed_seats: 15,
        theme: {
            background_image: 'assets/room/backgrounds/6.jpg',
            frame: {
                src: 'assets/room/frames/4.png',
                bdr_box: '20px',
                size: '75px',
            },
            profile_picture: 'assets/room/seat.png',
            color: '#5EE635FF',
            textColor: '#ffffff',
        },
        members: [
            {
                id: 1,
                name: 'User Name',
                profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                room: {
                    room_id: '123456',
                },
                frame: {
                    src: 'assets/siteAssets/room/frames/6.png',
                    bdr_box: 15,
                    size: '90px',
                },
                interaction: {
                    likes: 4,
                    gifts_received: 8
                }
            },
            {
                id: 2,
                name: 'User Name',
                profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                room: {
                    room_id: '123456',
                },
                frame: {
                    src: 'assets/siteAssets/room/frames/4.png',
                    bdr_box: 15,
                    size: '90px',
                }
            }
        ],
    },

    frame: {
        src: 'assets/room/frames/7.png',
        bdr_box: 5,
        size: '60px',
    }
}
</script>

<style scoped>

.room {
    --theme-color: v-bind(authUser.room.theme.color);
    --theme-text-color: v-bind(authUser.room.theme.textColor);
    --theme-shadow-color: rgb(from v-bind(authUser.room.theme.color) r g b / 0.3);

    --avatar-size:  v-bind(authUser.room.theme.frame.size);
    --avatar-border: v-bind(authUser.room.theme.frame.bdr_box);
}

.room_head_block {
    @apply grid grid-cols-12 col-span-8
    rounded-box p-1 text-base-100 font-bold;
}

.theme-from {
    @apply from-[--theme-color];
}
.theme-shadow {
    @apply shadow-[--theme-shadow-color];
}

.room-avatar {
    position: relative;
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 100%;
}

.room_frame {
    width: var(--avatar-size);
}

.room_seat {
    border: var(--avatar-border) solid transparent;
    border-radius: 100%;
    width: 100%;
    height: 100%;
}

.absolute_center {
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
}
.progress::-webkit-progress-value{
    background-color: rgb(from v-bind(authUser.room.theme.color) r g b / 1);
}

.progress::-webkit-progress-bar {
    background-color: rgb(from v-bind(authUser.room.theme.color) r g b / 0.2);
}

.shadow-icons {
    filter: drop-shadow(0 5px 5px rgb(from v-bind(authUser.room.theme.color) r g b / 0.6));
}
</style>