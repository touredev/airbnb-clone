<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header__icon" src="/images/logo.png" alt="" />
    </NuxtLink>
    <div class="header__center">
      <input type="text" />
      <v-icon> mdi-magnify </v-icon>
    </div>
    <div class="header__right">
      <p>Become A Host</p>
      <v-icon> mdi-web </v-icon>
      <v-icon> mdi-chevron-down </v-icon>
      <v-icon> mdi-account-circle </v-icon>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
}

.header__icon {
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
}

.header__center {
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
}

.header__center > input {
  border: none;
  padding: 10px;
  outline-width: 0;
  /* width: 250px; */
}

.header__right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
}
</style>
