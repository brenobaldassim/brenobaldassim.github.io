<script setup>
import { onMounted, ref } from 'vue'
import SectionLayout from '../utils/SectionLayout.vue'
import github_instance from '@/api'

const repos = ref([{}])

const getRepos = async () => {
  let response = await github_instance.get('/user/repos')
  repos.value = response.data
    .filter((repo) => repo.name.split('-')[0] === 'portifolio')
    .map((repo) => {
      return {
        name: formatRepoName(repo.name),
        languages: repo.language,
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
    <div>{{ repos }}</div>
  </SectionLayout>
</template>

<style scoped></style>
