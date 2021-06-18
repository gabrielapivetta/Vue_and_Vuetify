<template>
    <nav>
        <v-toolbar flat app color="grey lighten-3">
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">My</span>
                <span class="font-weight-medium">School</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="teal lighten-2">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.jpg" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1"></p>
                </v-flex>
                <v-flex>
                    <Popup/>
                    <v-divider></v-divider>
                    <PopupAluno/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
import Popup from './Popup.vue'
import PopupAluno from './Popup-aluno.vue'

export default {
    components: {Popup, PopupAluno},
    data () {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'Minhas Provas', route: '/provas' },
                { icon: 'mdi-account', text: 'Alunos', route: '/alunos' },
            ]
        }
    }
}
</script>