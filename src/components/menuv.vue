<template>
  <div class="menubg">
    <!-- //Overall icon -->
    <div class="icon text-white" :class="{'bg-blue':activeMenu=='1'}" @click="gotoProject()">
      <div align="center" style="padding-top:35px;">
        <q-icon size="40px" name="fas fa-project-diagram" />
      </div>
      <div align="center" class="text-h6">Overall</div>
    </div>
    <!-- Monitor icon -->
    <div class="icon text-white" :class="{'bg-blue':activeMenu=='2'}" @click="gotoMonitor()">
      <div align="center" style="padding-top:35px;">
        <q-icon size="40px" name="fas fa-chart-bar" />
      </div>
      <div align="center" class="text-h6">Monitor</div>
    </div>
    <!-- report icon -->
    <div class="icon text-white" :class="{'bg-blue':activeMenu=='3'}" @click="gotoReport()">
      <div align="center" style="padding-top:35px;">
        <q-icon size="40px" name="far fa-file-alt" />
      </div>
      <div align="center" class="text-h6">Report</div>
    </div>
    <!-- setting icon -->
    <div class="icon text-white" :class="{'bg-blue':activeMenu=='4'}" @click="gotoSetting()">
      <div align="center" style="padding-top:35px;">
        <q-icon size="40px" name="fas fa-cogs" />
      </div>
      <div align="center" class="text-h6">Setting</div>
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
.icon {
  height: 130px;
  width: 130px;
}
.iconsize {
  size: 70px;
}
.menubg {
  background-color: #3c4dae;
  height: 100vh;
  width: 130px;
}
.footer {
  padding-bottom: 10px;
  width: 130px;
  position: absolute;
  bottom: 0px;
  text-align: center;
}
.icon:hover {
  background-color: #202541;
  cursor: pointer;
}
</style>