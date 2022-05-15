<template>
  <div class="px-8 lg:px-28 mb-8 mt-8">
      
    <a href="" id="skills"></a>
    <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">Skills & technologies</p>
    <div class="text-xs font-medium text-gray-500 text-right">**scale where 0 is fundamental awareness and 100 is expert knowledge </div>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="item in stats" :key="item.id" class="relative shadow-lg bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 rounded-lg overflow-hidden">
        <dt>
          <div class="absolute border border-gray-600 rounded-md p-1">
            <!-- <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" /> -->
            <img :src="item.img" alt="Logo" class="h-10 w-10">
          </div>
          <p class="ml-16 text-md font-large truncate">{{ item.name }}</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-sm text-gray-500">
            {{ item.desc }}
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div :class="['bg-'+item.bg+'-600', 'text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full']" :style="{width: item.progress + '%'}">{{ item.progress }}%</div>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            stats: [
                { id: 1, name: 'Python', progress: 80, desc: '', bg: 'blue', img: require('@/static/tech_logos/python.png') },
                { id: 2, name: 'Vue', progress: 90, desc: 'And other progressive Javascript frameworks like Nuxt', bg: 'yellow', img: require('@/static/tech_logos/vue.svg')  },
                { id: 3, name: 'JavaScript', progress: 75, desc: '', bg: 'green', img: require('@/static/tech_logos/javascript.png')  },
                { id: 4, name: 'MySQL', progress: 60, desc: '', bg: 'purple', img: require('@/static/tech_logos/mysql.png') },
                { id: 5, name: 'Machine Learning', progress: 40, desc: 'PyTorch / Keras', bg: 'green', img: require('@/static/tech_logos/pytorch.png') },
                { id: 6, name: 'Scrum / Agile', progress: 80, desc: '', bg: 'blue', img: require('@/static/tech_logos/agile.png') },
                { id: 7, name: 'Regex / XPath', progress: 90, desc: '', bg: 'green', img: require('@/static/tech_logos/regex.png') },
                { id: 8, name: 'Git', progress: 70, desc: 'Bitbucket, Github', bg: 'purple', img: require('@/static/tech_logos/github.png') },
                { id: 9, name: 'Web Design', progress: 30, desc: '', bg: 'yellow', img: require('@/static/tech_logos/webdesign.jpg') },
            ]
        }
    },
}
</script>
