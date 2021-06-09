<template>
  <div class="bgcolor text-blue-grey-3">
    <div v-if="$q.screen.height >=600">
      <!-- สำหรับหน้าจอแนวตั้ง -->
      <div class="orientation-portrait">
        Monitor
        <menuh :activeMenu="2"></menuh>
      </div>
      <!-- **********สำหรับจอ landscape*********** -->
      <div class="orientation-landscape row">
        <!-- Menu -->
        <div class="col-1" style="width:130px">
          <menuv :activeMenu="2" :versionShow="version"></menuv>
        </div>
        <!-- //เนื้อเรื่อง -->
        <div class="col q-px-md text-body1 contentdiv">Monitor</div>
      </div>
    </div>
    <!-- กรณีจอที่มีความสูงน้องเกินไป -->
    <div v-else>Not support</div>
  </div>
</template>

<script>
import menuv from "../components/menuv.vue";
import menuh from "../components/menuh.vue";
export default {
  components: {
    menuv,
    menuh,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
}
.contentdiv {
  height: 100vh;
  overflow-y: scroll;
}
</style>