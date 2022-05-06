<template>
  <div>
    <v-menu transition="slide-y-transition">
      <template #activator="{ props }">
        <v-btn
          icon
          class="badge-item"
          v-bind="props"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>            
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
      items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }),
}
</script>

<style>

</style>