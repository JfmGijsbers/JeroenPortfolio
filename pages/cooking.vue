<template>
<div>
    <div>
        <divider text="Recipes"/>
            <p class="text-gray-500 px-16 py-8">
                Over the years, I've become quite a fan of cooking. Due to this, I like having a page where I can see all
                the recipes I'm familiar with, together with their ingredients and any tips & tricks I've come up with. This
                has lead to the development of this page! Click on any recipe to find out more about it.
            </p>
        <div class="flex items-end justify-end px-16">
            <div class="flex border-2 rounded w-full">
                <input type="text" v-model="recipesSearch" class="px-4 py-2 border-1 w-4/5" placeholder="Search...">
                <button class="flex items-center justify-center border-1 w-1/5">
                    <svg class="h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
        <nav class="h-full overflow-y-auto px-16 mt-4" aria-label="Directory">
            <div v-for="letter in Object.keys(splitAlphabetically)" :key="letter" class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{{ letter }}</h3>
            </div> 
            <ul role="list" class="relative z-0 divide-y divide-gray-200">
                <li v-for="person in splitItems[letter]" :key="person.id" class="bg-white" @click="showDialog(person)">
                    <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <div class="flex min-w-0">
                        <a href="#" class="focus:outline-none">
                            <div class="w-full">
                                <span class="absolute inset-0" aria-hidden="true" />
                                <p class="text-sm font-medium text-gray-900 mb-0">
                                {{ person.title }}
                                </p>
                                <p class="text-sm text-gray-500 truncate">
                                {{ person.prep }}
                                </p>
                                <span class="absolute inset-0" aria-hidden="true" />
                                <p class="text-sm font-medium text-gray-900 mb-0">
                                {{ person.intro }}
                                </p>
                            </div>   
                        </a>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </nav>
    </div>
    <div class="text-center">
        <v-dialog
        v-model="dialog.show"
        width="1000"
        >
        <div class="modal w-full h-full outline-none overflow-x-hidden overflow-y-auto">
            <div class="modal-dialog relative w-auto pointer-events-none">
                <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{{ dialog.item.title }}</h5>
                    <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                    <p>{{ dialog.item.intro }}</p>
                    <divider text="Stappen"/>
                    <ul class="list-disc">
                        <li v-for="text in dialog.item.steps" :key="text">{{ text }}</li>
                    </ul>
                    <divider text="Ingrediënten"/>
                        <label class="inline-flex items-center mt-3 md:w-1/2 px-5 sm:w-full" v-for="ingredient in dialog.item.ingredients" :key="ingredient">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">{{ ingredient }}</span>
                        </label>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button"
                    @click="closeDialog()"
                    class="px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                        ml-1">Done</button>
                </div>
                </div>
            </div>
            </div>
                    </v-dialog>
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
            dialog: {
                show: false,
                item: {}
            }

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
        showDialog(item) {
            this.dialog = {
                show: true,
                item: item
            }
        },
        closeDialog() {
            this.dialog = {
                show: false,
                item: {}
            }
        }
    }
})
</script>