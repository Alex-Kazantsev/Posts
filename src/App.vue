<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { getUsers } from "@/api";

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'setUsers',
    ]),
  },
  async mounted() {
    const users = await getUsers()
    this.setUsers(users)
  },
};
</script>
