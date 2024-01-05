<template>
  <header class="flex justify-between border-b px-10 py-8 border-slate-300 mb-5">
    <div class="flex items-center gap-4">
      <img class="w-10" src="/public/logo.png" alt="logo" />
      <div>
        <h2 class="text-xl uppercase font-bold">Ermak Vue</h2>
        <p class="text-slate-400">The best sheakers shop</p>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li class="flex cursor-pointer hover:text-black gap-3 text-slate-500">
        <img src="/public/cart.svg" alt="cart" />
        <b>1205 RUB</b>
      </li>
      <li class="flex cursor-pointer hover:text-black gap-3 text-slate-500">
        <img src="/public/heart.svg" alt="cart" />
        <b>Bookmarks</b>
      </li>
      <li class="flex cursor-pointer hover:text-black gap-3 text-slate-500">
        <img src="/public/profile.svg" alt="cart" />
        <b>Profile</b>
      </li>
    </ul>
  </header>
</template>