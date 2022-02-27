<template>
  <div>
    <div>Powered By <b>SolidMatrix.Affair</b> Engine.</div>
    <div>
      <a :href="beianLink" target="_blank">{{ beianNo }}</a>
    </div>
  </div>
</template>

<script setup>
const beianNo = process.env["VUE_APP_BEIAN_NO"];
const beianLink = process.env["VUE_APP_BEIAN_LINK"];
</script>