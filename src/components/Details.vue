<template>
  <v-container>
    <v-card
      class="mx-auto my-12"
    >
      <v-btn
        :to="{ name: 'posts' }"
        block
        text
        exact
      >
        <v-icon size="18">mdi-arrow-left</v-icon>
        Back to list
      </v-btn>

      <v-card-title>{{ details.title }}</v-card-title>

      <v-card-text>{{ details.body }}</v-card-text>

      <v-card-actions>
        <v-btn
          :to="{ name: 'edit', params: { id: $route.params.id } }"
          exact
          text
        >
          <v-icon size="18">mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn
          @click="deletePost"
          text
        >
          <v-icon size="18">mdi-delete</v-icon>
          Remove
        </v-btn>
      </v-card-actions>

      <v-divider class="mx-4"></v-divider>

      <v-card-subtitle>Comments ({{ comments.length }})</v-card-subtitle>

      <v-card-text>
        <v-list three-line>
          <template v-for="(comment, index) in comments">
            <v-divider
              v-if="index !== 0"
              :key="index"
            ></v-divider>

            <v-list-item
              :key="comment.name"
            >
              <v-list-item-content>
                <v-list-item-title>{{ comment.name }}</v-list-item-title>
                <v-list-item-subtitle v-html="comment.body"></v-list-item-subtitle>
                <v-list-item-subtitle class="font-italic">by {{ comment.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card-text>


    </v-card>
  </v-container>
</template>

<script>
import { deletePost, getComments, getPost } from "@/api";

  export default {
    name: 'Details',

    data: () => ({
      details: {},
      comments: []
    }),
    methods: {
      deletePost() {
        deletePost(this.$route.params.id)
        this.$router.push({ name: 'posts' })
      }
    },
    async mounted() {
      const id = this.$route.params.id
      this.details = await getPost(id)
      this.comments = await getComments(id)
    }
  }
</script>
