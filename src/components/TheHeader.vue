<template>
  <header class="header">
    <nav>
    <router-link class="nav__item" to="/">Список валют</router-link>
    <router-link class="nav__item" to="/convertor">Конвертор валют</router-link>
  </nav>
  </header>
</template>

<style lang="scss">
.header{
     display: flex;
    background-color: #ccc;
    justify-content: center;
}
nav {
  padding: 20px 10px;
  &__item{
    border: 1px solid;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
    &+a{
      margin-left: 30px;
    }
  }
}
</style>