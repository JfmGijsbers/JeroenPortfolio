<template>
<div :class="dialog ? 'modal-active' : ''">
    <NavBar/>
    <div>
        <divider text="Recipes"/>
            <p class="text-gray-500 px-16 py-8">
                Over the years, I've become quite a fan of cooking. Due to this, I like having a page where I can see all
                the recipes I'm familiar with, together with their ingredients and any tips & tricks I've come up with. This
                has lead to the development of this page! Click on any recipe to find out more about it.
            </p>
        <div class="flex items-end justify-end px-16">
            <div class="flex border-2 rounded">
                <input type="text" v-model="recipesSearch" class="px-4 py-2 w-80" placeholder="Search...">
                <button class="flex items-center justify-center px-4 border-l">
                    <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- <nav class="h-full overflow-y-auto px-16 mt-4" aria-label="Directory">
            <div class="relative">

            <ul role="list" class="relative z-0 divide-y divide-gray-200">
                <li v-for="person in items" :key="person.id" class="bg-white">
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                    </div>
                    <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                        {{ person.role }}
                        </p>
                    </a>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </nav> -->
        <nav class="h-full overflow-y-auto px-16 mt-4" aria-label="Directory">
            <div v-for="letter in Object.keys(splitAlphabetically)" :key="letter" class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{{ letter }}</h3>
            </div> 
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
                <li v-for="person in splitItems[letter]" :key="person.id" class="bg-white" @click="expand(person, letter)">
                    <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div class="flex-1 min-w-0">
                        <a href="#" class="focus:outline-none">
                            <span class="absolute inset-0" aria-hidden="true" />
                            <p class="text-sm font-medium text-gray-900">
                            {{ person.title }}
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                            {{ person.prep }}
                            </p>
                        </a>
                        </div>
                    </div>
                    <div class="border border-4 px-12 py-4" v-if="person.expand">
                        expando texto

                    </div>
                </li>
            </ul>
            </div>
        </nav>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import Divider from '../components/Divider.vue';
import data from '@/static/cooking.json';

export default Vue.extend({
    name: 'CookingPage',
    data: () => {
        return {
            recipesSearch: "",
            items: data.recipes,
            oldSearch: "",
            oldItems: [],
            splitItems: {},
            dialog: true

    }
    },
    components: {
        Divider
    }, 
    mounted() {
        for (let item in this.items) {
            this.items[item].expand = false;
        }
        this.oldItems = Object.assign([], this.items)
        this.splitItems = Object.assign({}, this.splitAlphabetically)
    },
    watch: {
        recipesSearch(val) {
            if (val) {
                if (val.length < this.oldSearch.length) {
                    this.items = this.oldItems;
                }
            this.items = this.items.filter((key) => key.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        } else {
            this.items = Object.assign([], this.oldItems)
        }
        this.oldSearch = val
        this.splitItems = Object.assign({}, this.splitAlphabetically)
        }
    },
    computed: {
        splitAlphabetically() {
           const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
           let directory = {}
           for (const letter in alphabet) {
               let letterArray = this.getLetter(alphabet[letter]);
               if (letterArray.length > 0) {
                    directory[alphabet[letter]] = letterArray;
               }
           }
           return directory
        

        }
    },
    methods: {
        getLetter(letter) {
            return this.items.filter((key) => key.title[0].toUpperCase() == letter.toUpperCase());
        },
        expand() {
            
        }
    }
})
</script>