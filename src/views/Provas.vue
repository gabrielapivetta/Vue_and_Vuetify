<template>
  <div class="tests mx-4 my-4">
    <h1 class="subheading grey--text">Provas</h1>

    <v-container class="my-5">

      <v-card flat class="pa-3" v-for="test in tests" :key="test.title">
        <v-layout wrap>
          <v-flex xs12 md5>
            <div class="caption grey--text">Prova</div>
            <div>{{ test.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Aluno</div>
            <div>{{ test.student }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Data de Entrega</div>
            <div>{{ test.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Matéria</div>
            <div>{{ test.subject }}</div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>

  </div>
</template>

<script>

  export default {
    data () {
      return {
        tests: [
          { title: 'Polígonos', student: 'João Cardoso', due: '01/07/2019', subject: 'Matemática', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'História do Brasil', student: 'Ana Julia Almeida', due: '10/01/2019', subject: 'História', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Gramática', student: 'Henrique da Silva', due: '20/12/2018', subject: 'Português', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Cartografia', student: 'Clara Barbosa', due: '05/11/2021', subject: 'Geografia', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
    }
  }
</script>
