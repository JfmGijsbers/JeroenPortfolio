<template>
<nav class="bg-white dark:bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark sticky top-0 z-10">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <div href="#" class="flex items-center text-gray-400">
      <!-- <img src="/docs/logo.png" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" /> -->
      <span class="self-center text-xl font-semibold whitespace-nowrap">Jeroen Gijsbers</span>
  </div>
  <div class="flex md:order-2 justify-end">
        <button @click="changeTheme()">
            <svg v-if="theme" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2.5" fill="white" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2.5" fill="black" viewBox="0 0 20 20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </button>
        <a href="/CV___Jeroen_Gijsbers.pdf" class="text-white bg-blue-700 dark:bg- hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Document/>
        </a>
        <div class="text-center md:hidden visible">
            <v-menu offset-y z-index="11">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-7 ml-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in navLinks"
                    :key="index"
                    >
                    <v-list-item-title>
                        <a
                        class="text-gray-700 hover:text-blue-700"
                        :href="item.href"
                        >{{ item.title }}
                    </a>
                    </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li v-for="(item, index) in navLinks" :key=index>
            <a 
                :href="item.href"
                :class="[!route(item.name) ? (theme ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-blue-700') : (theme ? 'text-white' : 'text-blue-700'), 'block py-2 pr-4 pl-3' ]"
                >
                {{ item.title }}
            </a>
        </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
import Document from './Icons/Document';
export default {
    components: {
        Document
    },
    mounted() {
        if (localStorage.getItem('theme')) {
            this.$store.commit('setTheme', true)
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        }
    },
    data: () => {
        return {
            navLinks: [
                {
                    href: '/',
                    title: 'Home',
                    name: 'index'
                },
                {
                    href: '#projects',
                    title: 'Projects',
                    name: 'projects'
                },
                {
                    href: '#skills',
                    title: 'Skills',
                    name: 'skills'
                },
                {
                    href: '#education',
                    title: 'Education',
                    name: 'education'
                },
                {
                    href: '/cooking',
                    title: 'Cooking',
                    name: 'cooking'
                }
            ]
        }
    },
    methods: {
        changeTheme() {
            this.$store.commit('toggle');
            this.toggleTheme();
        },
        toggleTheme() {
            if (this.$store.state.dark == false) {
                localStorage.removeItem('theme')
                document.documentElement.classList.remove('dark')
            }
            else {
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
            }
        },
        route(href) {
            return this.$route.name === href
        }
    },
    computed: {
        theme() {
            return this.$store.state.dark;
        },
    },
}
</script>
