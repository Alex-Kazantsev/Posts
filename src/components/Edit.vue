<template>
  <v-container>
    <v-form>
      <v-text-field
        v-model="form.title"
        label="Title"
      ></v-text-field>

      <v-textarea
        v-model="form.body"
        counter
        label="Body"
      ></v-textarea>

      <v-btn
        @click="save"
        color="success"
        text
      >
        <v-icon size="18">mdi-check</v-icon>
        Save
      </v-btn>

      <v-btn
        @click="cancel"
        text
      >
        Cancel
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { createPost, editPost, getPost } from "@/api";

  export default {
    name: 'Edit',

    data: () => ({
      form: {
        title: '',
        body: '',
        userId: 1
      },
      comments: []
    }),
    methods: {
      cancel() {
        this.$router.go(-1)
      },
      save() {
        const id = this.$route.params.id
        if(id > 0) {
          editPost(id, this.form)
        } else {
          createPost(this.form)
        }
        this.$router.go(-1)
      }
    },
    async mounted() {
      const id = this.$route.params.id
      if(id > 0) {
        this.form = await getPost(id)
      }
    }
  }
</script>
