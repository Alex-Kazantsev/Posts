<template>
  <v-container>
    <v-list three-line>
      <template v-for="(post, index) in postsWithUsers">
        <v-divider
          v-if="index != 0"
          :key="index"
        ></v-divider>

        <v-list-item
          :to="{ name: 'details', params: { id: post.id } }"
          :key="post.title"
        >
          <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle v-html="post.body"></v-list-item-subtitle>
            <v-skeleton-loader
              v-if="users.length === 0"
              max-width="300"
              type="text"
            ></v-skeleton-loader>
            <v-list-item-subtitle
              v-else
              class="font-italic"
            >
              by {{ post.user.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-btn
      :to="{ name: 'edit' }"
      fab
      fixed
      bottom
      right
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { getPosts } from "@/api";
import { mapGetters } from "vuex";

  export default {
    name: 'Posts',
    data: () => ({
      posts: [],
    }),
    async mounted() {
      this.posts = await getPosts()
    },
    computed: {
      ...mapGetters([
        'users',
      ]),
      postsWithUsers() {
        return this.posts.map(post => {
          return {
            ...post,
            user: this.users.find(user => user.id === post.id) || { name: "Anonymous" }
          }
        })
      }
    }
  }
</script>
