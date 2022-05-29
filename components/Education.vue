<template>
  <div class="flow-root">
    <a href="" id="education"></a>
    <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">Education & Career</p>
    <ul role="list" class="-mb-8 mt-8 px-8 lg:px-28">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-8">
          <span v-if="eventIdx !== timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                  <!-- <Calculator/> -->
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm text-gray-500">
                  {{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a>
                </p>
              </div>
              <div class="text-right text-sm whitespace-nowrap text-gray-500">
                <time :datetime="event.datetime">{{ event.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Calculator from './Icons/Calculator';
import Library from './Icons/Library';
import EmojiHappy from './Icons/EmojiHappy';
import Users from './Icons/Users';
import Office from './Icons/Office';
export default {
    components: {
        Calculator,
        Library,
        EmojiHappy,
        Users,
        Office
    },
  data() {
    return {
        timeline: [
            {
                id: 1,
                content: 'Born',
                target: 'Heeze, Noord Brabant',
                href: '#',
                date: 'Mar 04 2000',
                datetime: '2000-03-04',
                iconBackground: 'bg-purple-400',
                icon: EmojiHappy
            },
            {
                id: 2,
                content: 'Bartender at',
                target: 'Tapperij de Zwaan',
                href: '#',
                date: 'Jun 2015',
                datetime: '2015-06-01',
                iconBackground: 'bg-blue-500',
                icon: Users
            },
            {
                id: 3,
                content: 'Started Bachelor',
                target: 'Computer Science and Engineering',
                href: '#',
                date: 'Sep 2018',
                datetime: '2018-09-01',
                iconBackground: 'bg-purple-400',
                icon: Library
            },
            {
                id: 4,
                content: 'Script Developer at ',
                target: 'Coosto',
                href: '#',
                date: 'Oct 2019',
                datetime: '2019-08-01',
                iconBackground: 'bg-blue-500',
                icon: Office
            },
            {
                id: 5,
                content: 'Fullstack Developer at ',
                target: 'Coosto',
                href: '#',
                date: 'Oct 2020',
                datetime: '2020-08-01',
                iconBackground: 'bg-blue-500',
                icon: Office
            },
            {
                id: 6,
                content: 'Graduated',
                target: 'Computer Science & Engineering',
                href: '#',
                date: 'Jun 2021',
                datetime: '2021-06-01',
                iconBackground: 'bg-green-500',
                icon: Library
            },
            {
                id: 6,
                content: 'Started Master',
                target: 'Data Science and Artificial Intelligence',
                href: '#',
                date: 'Sep 2021',
                datetime: '2021-09-01',
                iconBackground: 'bg-purple-400',
                icon: Library
            },
            ]
    }
  },
}
</script>
