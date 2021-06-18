<template>
  <div class="alunos mx-6 my-4">
    <h1 class="subheading grey--text">Alunos</h1>
    
    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(student, index) in students" :key="student.name">
          <v-card flat class="text-center ma-3">
            <v-card-text>
              <div class="subheading">{{ student.name }}</div>
            </v-card-text>
            <v-btn @click="deleteTest(index)">Delete</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
const alunos = window.localStorage.getItem('Alunos') || "[]"
export default {
  data() {
    return {
      students: JSON.parse(alunos)
    }
  },
  methods: {
    deleteTest(index){
      this.students.splice(index, 1)
      const updatedData = JSON.stringify(this.students)
      window.localStorage.setItem('Alunos', updatedData) 
      window.location.reload()
    }
  }
}
</script>