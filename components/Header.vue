<template>
  <header :class="['header', {'dark':$nuxt.$route.path != '/'}]">
    <nav class="nav">
      <div class="right-links">
        <nuxt-link to="/" class="logo" v-if="$nuxt.$route.path !== '/'">
          abitindex
        </nuxt-link>
      </div>
        <ConnectionStatus />
      <div class="links">
          <nuxt-link to="/indices" class="nav-link">indices</nuxt-link>
      </div>
    </nav>
    <div class="index-tumbnails-container">

    </div>
  </header>
</template>
<script>
import ConnectionStatus from './ConnectionStatus';

export default {
  name: 'Header',
  components: {
    ConnectionStatus,
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
.right-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo {
  @media screen and (max-width: $break-card) {
    font-size: 0.8rem;
  }
}
.dark {
  background-color: $darkBackground;
  color: $baseTextColorLight;
  transition: 0.3s;
  a {
    color: $baseTextColorLight;
    &:hover {
      transition: 0.3s;
      color: $mainColor;
    }
  }
}
.nav {
  padding: 0 20px;
  margin: auto;
  max-width: 1000px;
  min-height: $navbarHeight;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.links {
  display: flex;
  justify-content: flex-end;
  // width: 100%;
  align-items: center;
}
.nav-link {
  margin: 0 15px;
  @media screen and (max-width: $break-card) {
    font-size: 0.8rem;
  }
}
</style>
