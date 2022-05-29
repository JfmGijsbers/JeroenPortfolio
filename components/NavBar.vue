<template>
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex items-center">
      <!-- <img src="/docs/logo.png" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" /> -->
      <span class="self-center text-xl text-gray-600 font-semibold whitespace-nowrap dark:text-white">Jeroen Gijsbers</span>
  </a>
  <div class="flex md:order-2 justify-end">
        <a href="/CV___Jeroen_Gijsbers.pdf" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <!-- <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" :class="[this.$route.name === link.name ? 'text-blue-700' : 'text-gray-700', 'block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']">
            {{ link.title }}
        </a>
      </li> -->
      <li>
        <a href="/" :class="[this.$route.name === 'index' ? 'text-blue-700' : 'text-gray-700', 'block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']">Home</a>
      </li>
      <li>
        <a href="#projects" class="text-gray-700 block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
      </li>
      <li>
        <a href="#skills" class="text-gray-700 block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
      </li>
      <li>
        <a href="#education" class="text-gray-700 block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Education and Career</a>
      </li>
      <li>
        <a href="/cooking" :class="[this.$route.name === 'cooking' ? 'text-blue-700' : 'text-gray-700', 'block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']">Cooking</a>
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
    }
}
</script>

<style scoped>
.nuxt-logo {
  height: 180px;
}
</style>

