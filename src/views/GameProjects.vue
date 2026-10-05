<template>
  <div>
    <h1>Jogos</h1>

    <div style="margin-bottom: 30px;">
      Jogos que participei na criação
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      veja mais jogos que participei em <a target="_blank" href="https://melbi-studios.itch.io">Melbi Studios</a>
    </div>
  </div>
</template>

<script lang="pt-BR">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
