<template>
    <div>
      <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Nome:</label>
          <input type="text" id="name" required
                 class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Cpf:</label>
          <input type="text" id="name" required
                 class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="bg-gray w-full text-white font-semibold px-4 py-2 rounded hover:bg-indigo-600">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </template>