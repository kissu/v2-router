<template>
  <div>
    <p>Current route's customer name: {{ $route.params.name }}</p>
    <p>
      Do we have either Sam or Alice currently?
      {{ ["Sam", "Alice"].includes($route.params.name) }}
    </p>

    <router-link
      class="block"
      :to="{ name: 'customers-name', params: { name: 'Sam' } }"
    >
      visit Sam
    </router-link>
    <router-link
      class="block"
      :to="{ name: 'customers-name', params: { name: 'Bob' } }"
    >
      visit Bob
    </router-link>
    <router-link
      class="block"
      :to="{ name: 'customers-name', params: { name: 'Alice' } }"
    >
      visit Alice
    </router-link>
    <router-link
      class="block"
      :to="{ name: 'customers-name', params: { name: 'alice' } }"
    >
      visit small alice
    </router-link>
  </div>
</template>

<style scoped>
.block {
  display: block;
}
</style>
