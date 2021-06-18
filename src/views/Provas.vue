<template>
  <div class="tests mx-6 my-4">
    <h1 class="subheading grey--text">Provas</h1>

    <v-container class="my-5">

        <v-expansion-panels >
      <v-expansion-panel class="brown--text" v-for="test in myTests" :key="test.title">
        <v-expansion-panel-header class="font-weight-medium">
          {{test.title}}
        </v-expansion-panel-header>
       
        <v-expansion-panel-content class="px-4">
          <div class="font-weight-bold d-flex justify-space-between mr-10">
            <span>Data de Entrega: {{test.due}}</span>
            <span>Nota: {{test.score}}</span>
          </div>
          <div>{{test.content}} </div>
        </v-expansion-panel-content>

      </v-expansion-panel>
      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          title: "Polígonos",
          student: "João Cardoso",
          due: "01/07/2019",
          subject: "Matemática",
          score: 10,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Ondulatória",
          student: "Ana Julia Almeida",
          due: "10/01/2019",
          subject: "Física",
          score: 8.5,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Oxidação",
          student: "Henrique da Silva",
          due: "20/12/2018",
          subject: "Química",
          score: 7,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Cartografia",
          student: "Clara Barbosa",
          due: "05/11/2021",
          subject: "Geografia",
          score: 9.8,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  computed: {
    myTests(){
      return this.tests.filter(test => {
        return test.student === 'Ana Julia Almeida'
      })
    }
  }
};
</script>