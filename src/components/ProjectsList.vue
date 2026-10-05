<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
              <div class="project-date">{{project.date}}</div>
              <div class="project-item-inner">
                <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
              </div>
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                </div>
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
});
</script>

<style scoped>

        .project-item {
            position: relative;
            height: 300px;
            margin-bottom: 40px;
            left: 0px;
            width: 50%;
            cursor: pointer;
            /*overflow: hidden;*/
        }

        .project-item-image {
            background-size: cover;
            background-position: center;
            height: 100%;
            width: 100%;
            transition: all 0.2s;
        }

        .project-date {
            position: absolute;
            left: -140px; /* adjust: further left than the dot */
            top: 8px; /* roughly match the dot's vertical position */
            width: 70px;
            text-align: right;
            font-size: 0.9em;
            color: #999;
        }

        .project-item-image:hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }

        .project-item:hover {
            filter: brightness(120%);
        }

        .project-item-inner {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        .title-bar {
            position: absolute;
            bottom: 0px;
            width: 100%;
            background-color: #222222;
            transform-origin: bottom center;
            transition: transform 0.2s;
        }

        .title-text {
            padding: 10px;
        }

        /*@media only screen and (min-width: 620px){*/
        .projects-list {
            /*
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
        */
            position: relative;
            max-width: 700px;
            margin: 0;
            padding-left: 40px;
        }

            .projects-list::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 10px;
                bottom: 0;
                width: 4px;
                background-image: repeating-linear-gradient( 
                    to bottom, 
                    #333 0px, 
                    #333 8px, /* dot length */
                    transparent 8px, 
                    transparent 20px /* gap length — increase for fewer/more spaced dots */
                );
            }

        .project-item::before {
            content: '';
            position: absolute;
            left: -47px;
            top: 10px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #222222; /* matches your title-bar color */
            border: 2px solid #fff;
            z-index: 1;
        }

        .wide {
            width: 100%;
        }

        .high {
            height: 450px; /* taller box — good for portrait artwork */
        }

    /*
        .wide {
            grid-column-end: span 2;
        }

        .high {
            grid-row-end: span 2;
        }
    */
        /*}*/



</style>