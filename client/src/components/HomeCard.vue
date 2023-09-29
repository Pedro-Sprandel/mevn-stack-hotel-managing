<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  imageName: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="basis-1/3 bg-gray rounded-xl px-8 py-3 h-min flex flex-col items-center">
      <img :src="imageName" :alt="alt" />
      <a :href="href">
        <button class="border-white border-[2px] rounded mt-4 px-3 py-1">
          <p class="text-white font-semibold text-xl text-center ">{{  title }}</p>
        </button>
      </a>
    </div>
</template>
