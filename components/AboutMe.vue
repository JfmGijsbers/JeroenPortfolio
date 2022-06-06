<template>
  <div class="relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative pb-8 z-9 sm:pb-16 md:pb-20 lg:max-w-6xl lg:w-full lg:pb-28 xl:pb-32">
        <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 z-9" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg> -->

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Hi, my name is</span>
              <span class="block text-indigo-600 dark:text-blue-600 xl:inline">Jeroen Gijsbers</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Master student Data Science & Engineering @TU/e, <br> Fullstack developer @Coosto
            </p>
            <div class="md:mt-5 mt-0 flex items-center lg:justify-start md:w-4/5">
              <div class="rounded-md mt-0 md:mt-3 w-1/4 px-2">
                <a href="/CV___Jeroen_Gijsbers.pdf" class="flex py-4 items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    <Document/>
                </a>
              </div>
              <div class="md:mt-3 mt-0 sm:ml-3 w-1/4 px-2">
                <a href="https://www.linkedin.com/in/jeroen-gijsbers0403/" target="_blank" class="flex py-4 items-center justify-center border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    <LinkedIn/>
                </a>
              </div>
              <div class="md:mt-3 mt-0 sm:ml-3 w-1/4 px-2">
                <a href="https://github.com/JfmGijsbers" target="_blank" class="flex py-4 items-center justify-center border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    <Github/>
                </a>
              </div>
              <div class="md:mt-3 mt-0 w-1/4 px-2 md:px-0">
                <a href="/cooking" class="flex items-center justify-center md:py-0 py-4 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg">
                    <Cooking class="w-full"/>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 z-8">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
    </div>
  </div>
</template>

<script>
import LinkedIn from './Icons/LinkedIn';
import Document from './Icons/Document';
import Github from './Icons/Github';
import Cooking from './Icons/Cooking';
export default {
    components: {
        LinkedIn,
        Document,
        Github,
        Cooking
    },
    data() {
        return {
            navigation: [
                { name: 'Product', href: '#' },
                { name: 'Features', href: '#' },
                { name: 'Marketplace', href: '#' },
                { name: 'Company', href: '#' },
            ]
        }
  },
}
</script>