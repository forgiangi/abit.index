<template>
  <div class="coin-container">
    <img class="coin-logo" :src="coinLogoUrl" height="30" width="30"/>
  </div>
</template>
<script>
export default {
  props: ['symbol'],
  computed: {
    coinLogoUrl() {
      if (process.env.NODE_ENV !== 'production') {
        return `https://abitcompany.sirv.com/crypto_images/${this.symbol}.png`;
      }
      return `https://abitcompany-cdn.sirv.com/crypto_images/${
        this.symbol
      }.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
.coin-logo {
  @media screen and (max-width: $break-card) {
    height: 20px;
    width: 20px;
  }
}
.coin-container {
  height: 30px;
  width: 30px;
}
</style>
