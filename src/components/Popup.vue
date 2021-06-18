<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="green darken-2" dark v-on="on">Cadastrar Prova</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2 grey--text text--darken-3" primary-title>Cadastrar Uma Nova Prova</v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Assunto" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Descrição" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-btn flat dark color="green" @click="submit">Cadastrar</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    }
}
</script>