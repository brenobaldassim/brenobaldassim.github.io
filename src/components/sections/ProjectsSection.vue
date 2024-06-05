<script setup>
import { onMounted, ref } from 'vue'
import SectionLayout from '../utils/SectionLayout.vue'
import Card from '../utils/CardItem.vue'
import Tag from '../utils/TagComponent.vue'
import UnderscoreBlink from '../utils/UnderscoreBlink.vue'
import github_instance from '@/api'

const repos = ref([{}])

const getRepos = async () => {
  let response = await github_instance.get('/users/brenobaldassim/repos')
  repos.value = response.data
    .filter((repo) => repo.name.split('-')[0] === 'portifolio')
    .map((repo) => {
      return {
        name: formatRepoName(repo.name),
        description: repo.description,
        language: repo.language,
        url: repo.html_url
      }
    })
}

const formatRepoName = (repoName) => {
  let name = repoName.split('-')
  name.shift()
  return name.map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(' ')
}
onMounted(() => {
  getRepos()
})
</script>

<template>
  <SectionLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
      <template v-for="(project, index) in repos">
        <Card v-if="index < 4">
          <a :href="project.url" target="_blank">
            <div class="w-full h-fit p-2 rounded">
              <UnderscoreBlink>
                <span class="uppercase"> {{ project.name }}</span>
              </UnderscoreBlink>
            </div>
            <div>
              <i class="text-2xl bx bx-link-external"></i>
              <div class="h-full flex items-end justify-end">
                <Tag> {{ project.language }} </Tag>
              </div>
            </div>
          </a>
        </Card>
      </template>
    </div>
  </SectionLayout>
</template>

<style scoped>
#card-item:hover #tag {
  transition: all 500ms ease-out;
  color: var(--app-color-light);
  border-color: var(--app-color-light);
}
</style>
