<template>
  <div class="row menuv fixed-bottom">
    <!-- Project -->
    <div
      class="col-3 icon"
      align="center"
      :class="{'bg-blue':activeMenu=='1'}"
      @click="gotoProject()"
    >
      <q-icon size="35px" name="fas fa-project-diagram" class="q-pt-md text-white" />
      <div class="q-pt-sm fontIcon">Project</div>
    </div>
    <!-- Monitor -->
    <div
      class="col-3 fontIcon icon"
      align="center"
      :class="{'bg-blue':activeMenu=='2'}"
      @click="gotoMonitor()"
    >
      <q-icon size="35px" name="fas fa-chart-bar" class="q-pt-md text-white" />
      <div class="q-pt-sm fontIcon">Monitor</div>
    </div>
    <!-- Report -->
    <div
      class="col-3 fontIcon icon"
      align="center"
      :class="{'bg-blue':activeMenu=='3'}"
      @click="gotoReport()"
    >
      <q-icon size="35px" name="far fa-file-alt" class="q-pt-md text-white" />
      <div class="q-pt-sm fontIcon">Report</div>
    </div>
    <!-- Setting -->
    <div
      class="col-3 fontIcon icon"
      align="center"
      :class="{'bg-blue':activeMenu=='4'}"
      @click="gotoSetting()"
    >
      <q-icon size="35px" name="fas fa-cogs" class="q-pt-md text-white" />
      <div class="q-pt-sm fontIcon">Setting</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeMenu"],
  methods: {
    gotoProject() {
      this.$router.push("project");
    },
    gotoMonitor() {
      this.$router.push("monitor");
    },
    gotoReport() {
      this.$router.push("report");
    },
    gotoSetting() {
      this.$router.push("setting");
    },
  },
};
</script>

<style lang="scss" scoped>
.menuv {
  height: 100px;
  width: 100%;
  background-color: #3c4dae;
}
.fontIcon {
  font-size: 18px;
  color: white;
}
.icon:hover {
  background-color: #202541;
  cursor: pointer;
}
</style>