<template>
  <div class="dashboard mx-6 my-4">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              depressed
              color="grey lighten-3"
              @click="sortBy('student')"
              v-on="on"
              class="mr-3"
            >
              <v-icon left small color="grey">mdi-account</v-icon>
              <span class="caption text-lowercase">Por Aluno</span>
            </v-btn>
          </template>
          <span>Ordenar Provas Por Aluno</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              depressed
              color="grey lighten-3"
              @click="sortBy('subject')"
              v-on="on"
            >
              <v-icon left small color="grey">mdi-folder</v-icon>
              <span class="caption text-lowercase">Por Matéria</span>
            </v-btn>
          </template>
          <span>Ordenar Provas Por Matéria</span>
        </v-tooltip>
      </v-layout>

      <v-card flat class="" v-for="test in tests" :key="test.title">
        <v-layout wrap :class="`pa-3 test ${test.subject}`">
          <v-flex xs12 md5>
            <div class="caption grey--text">Assunto</div>
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
            <div class="text-center">
              <v-chip
                :color="`${test.subject} font-weight-medium white--text mt-2`"
                >{{ test.subject }}</v-chip
              >
            </div>
            <!--<div class="caption grey--text">Matéria</div>
            <div>{{ test.subject }}</div>-->
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Ondulatória",
          student: "Ana Julia Almeida",
          due: "10/01/2019",
          subject: "Física",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Oxidação",
          student: "Henrique da Silva",
          due: "20/12/2018",
          subject: "Química",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Cartografia",
          student: "Clara Barbosa",
          due: "05/11/2021",
          subject: "Geografia",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.tests.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.test.Matemática {
  border-left: 5px solid #096fb3;
}
.test.História {
  border-left: 5px solid #000000af;
}
.test.Português {
  border-left: 5px solid #db1919;
}
.test.Geografia {
  border-left: 5px solid #2aac1e;
}
.test.Literatura {
  border-left: 5px solid #f8e323;
}
.test.Artes {
  border-left: 5px solid #3cd1c2;
}
.test.Física {
  border-left: 5px solid #d67900;
}
.test.Química {
  border-left: 5px solid #7d3cd1;
}
.test.Filosofia {
  border-left: 5px solid #ffb0fb;
}
.test.Biologia {
  border-left: 5px solid #095816;
}

.theme--light.v-chip.Matemática:not(.v-chip--active) {
  background: #096fb3;
}
.theme--light.v-chip.História:not(.v-chip--active) {
  background: #000000af;
}
.theme--light.v-chip.Português:not(.v-chip--active) {
  background: #db1919;
}
.theme--light.v-chip.Geografia:not(.v-chip--active) {
  background: #2aac1e;
}
.theme--light.v-chip.Literatura:not(.v-chip--active) {
  background: #f8e323;
}
.theme--light.v-chip.Artes:not(.v-chip--active) {
  background: #3cd1c2;
}
.theme--light.v-chip.Física:not(.v-chip--active) {
  background: #ffa600;
}
.theme--light.v-chip.Química:not(.v-chip--active) {
  background: #7d3cd1;
}
.theme--light.v-chip.Filosofia:not(.v-chip--active) {
  background: #ffb0fb;
}
.theme--light.v-chip.Biologia:not(.v-chip--active) {
  background: #095816;
}
</style>
