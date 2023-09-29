<script setup>
import HomeCard from '../components/HomeCard.vue';

</script>

<template>
  <main class="flex justify-center bg-light pt-12 min-h-screen">
    <section class="max-w-[1200px] gap-8 w-full flex justify-between">
      <HomeCard title="Reservar" href="/reserva" imageName="../assets/calendar.png" alt="Calendário" />
      <HomeCard title="Fazer check-in" href="/check-in" imageName="../assets/calendar.png" alt="Avatar" />
      <HomeCard title="Fazer check-out" href="/check-out" imageName="../assets/calendar.png" alt="Backdoor" />
    </section>
  </main>
</template>
