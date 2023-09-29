<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray py-6 flex justify-between px-12">
    <h1 class="text-2xl text-salmon font-semibold">CHIMIA HOTÉIS</h1>
    <nav>
      <ul class="flex gap-4">
        <li class="rounded bg-salmon text-white font-semibold py-1 px-3"><router-link to="/">Home</router-link></li>
        <li class="rounded bg-salmon text-white font-semibold py-1 px-3"><router-link to="/reserva">Reservar</router-link></li>
        <li class="rounded bg-salmon text-white font-semibold py-1 px-3"><router-link to="/check-in">Check-in</router-link></li>  
        <li class="rounded bg-salmon text-white font-semibold py-1 px-3"><router-link to="/check-out">Check-out</router-link></li>
      </ul>
    </nav>
  </header>

  <RouterView />
  <footer class="h-[64px] bg-gray flex justify-center items-center w-full">
    <p class="text-white">Made by Pedro</p>
  </footer>
</template>
