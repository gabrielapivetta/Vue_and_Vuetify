<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="green darken-2" dark v-on="on">Cadastrar Aluno</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2 grey--text text--darken-3" primary-title>Cadastrar Um Novo Aluno</v-card-title>
        <v-card-text>
            <v-form class="px-3">

                <v-text-field label="Nome" v-model="name" prepend-icon="mdi-account" ></v-text-field>
                
                <v-btn flat mt-3 dark color="green" @click="submit">Cadastrar</v-btn>

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
            name: ''
        }
    },
    methods: {
        submit() {
            const data = window.localStorage.getItem('Alunos') || "[]"
            const Alunos = JSON.parse(data)
            Alunos.push({
                name:this.name,
            })
            const updatedData = JSON.stringify(Alunos)
            window.localStorage.setItem('Alunos', updatedData) 
            window.location.reload()
        }
    }
}
</script>

