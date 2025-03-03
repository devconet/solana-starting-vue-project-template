<script setup lang="ts">
import { ref } from 'vue'
import { WalletMultiButton } from "solana-wallets-vue";
defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="wallet-wrapper">
  <wallet-multi-button></wallet-multi-button>
  </div>
</template>

<style scoped>
.wallet-wrapper {
  display: flex;
  justify-content: center;
}
</style>