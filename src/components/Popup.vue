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

                <v-text-field label="Assunto" v-model="title" prepend-icon="mdi-folder" ></v-text-field>
                <v-select v-model="student" :items="student" :rules="[v => !!v || 'Campo Obrigatório']" label="Aluno" prepend-icon="mdi-account" required></v-select>
                <!--<v-text-field label="Aluno" v-model="student" prepend-icon="mdi-account" ></v-text-field>-->
                <v-textarea label="Descrição" v-model="content" prepend-icon="mdi-pencil" ></v-textarea>
                <v-text-field label="Nota" v-model="score" prepend-icon="mdi-check" ></v-text-field>
                <v-text-field label="Data de Entrega" v-model="due" prepend-icon="mdi-calendar-range" ></v-text-field>
                <v-text-field label="Matéria" v-model="subject" prepend-icon="mdi-book" ></v-text-field>
                <!--<v-select v-model="select" :items="items" :rules="[v => !!v || 'Campo Obrigatório']" label="Matéria" prepend-icon="mdi-book" required></v-select>-->
                
                <v-btn flat mt-3 dark color="green" @click="submit">Cadastrar</v-btn>

            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
const alunos = window.localStorage.getItem('Alunos') || "[]"
export default {
    data() {
        return {
            title: '',
            content: '',
            score: '',
            due: '',
            subject: '',
            /*inputRules: [
                v => !!v || 'Esse campo é obrigatório',
                v => v.lengh >= 3 || 'O tamanho mínimo é de três caracteres'
            ]*/
            select: null,
            items: [
                'Artes',
                'Biologia',
                'Filosofia',
                'Física',
                'Geografia',
                'História',
                'Literatura',
                'Matemática',
                'Português',
            ],
            student: JSON.parse(alunos).map(aluno => aluno.name)
        }
    },
    methods: {
        submit() {
            const data = window.localStorage.getItem('Provas') || "[]"
            const Provas = JSON.parse(data)
            Provas.push({
                title:this.title,
                student:this.student, 
                content:this.content, 
                score:this.score, 
                due:this.due, 
                subject: this.subject
            })
            const updatedData = JSON.stringify(Provas)
            window.localStorage.setItem('Provas', updatedData) 
            window.location.reload()
        }
    }
}
</script>

