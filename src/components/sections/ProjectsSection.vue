<script setup>
import { onMounted, ref } from 'vue'
import SectionLayout from '../utils/SectionLayout.vue'
import CardProjects from '../utils/CardProjects.vue'
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
      <CardProjects v-for="project in repos" :project="project" />
    </div>
  </SectionLayout>
</template>

<style scoped></style>
