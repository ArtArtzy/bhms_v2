<template>
  <div>
    <!-- Accelerometer -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'AC'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Accelerometer ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.X_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-X limit: {{ dataShow.X_limit }} m/s<sup>2</sup></div>
      </div>
      <div class="row">
        <div v-if="dataShow.Y_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-Y limit: {{ dataShow.Y_limit }} m/s<sup>2</sup></div>
      </div>
      <div class="row">
        <div v-if="dataShow.Z_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-Z limit: {{ dataShow.Z_limit }} m/s<sup>2</sup></div>
      </div>
    </div>
    <!-- //Tile meter -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'TM'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Tilt meter ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.min_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Min limit: {{ dataShow.min_limit }} mrad</div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} mrad</div>
      </div>
    </div>
    <!-- //Displacement -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'LV'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Displacement sensor ({{
            this.dataShow.name
          }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} mm</div>
      </div>
    </div>
    <!-- Strain meter -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'SG'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Strain sensor ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} &#181;&#8455;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "src/router";
export default {
  props: ["code", "set"],
  data() {
    return {
      codeSum: "",
      type: "",
      dataShow: []
    };
  },
  methods: {
    loadConfig() {
      let project_config = this.projectId + "_" + "config";
      db.collection(project_config)
        .doc(this.codeSum)
        .get()
        .then(data => {
          this.dataShow = data.data();
        });
    },
    goToEdit() {
      console.log(this.code, this.set);
    }
  },
  mounted() {
    this.code;
    this.codeSum = this.set + "_" + this.code;
    let indexStr = this.codeSum.indexOf("_");
    this.type = this.codeSum.substring(indexStr + 1, indexStr + 3);
    this.loadConfig();
  }
};
</script>

<style lang="scss" scoped>
.divBig {
  border-radius: 10px;
}
</style>
