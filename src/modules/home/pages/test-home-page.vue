<template>
  <h1>Test Home Page</h1>
  <div>
    <ul>
      <li><router-link :to="{ name: 'test-1' }">Test 1</router-link></li>
      <li><router-link :to="{ name: 'test-2' }">Test 2</router-link></li>
    </ul>
  </div>
</template>

<script setup>
</script>