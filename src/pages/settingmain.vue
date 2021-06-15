<template>
  <div class="bgcolor  text-blue-grey-3">
    <!-- สำหรับหน้าจอแนวตั้ง -->
    <div class="orientation-portrait">
      <div class="col q-px-md text-body1 contentdiv2 ">
        <div class="row justify-between">
          <div class="text-h6 q-pt-sm">Setting</div>
          <div class="row">
            <div style="padding-top:12px;" class="q-px-md">
              <q-icon size="24px" name="fas fa-comment-dots" />
            </div>
            <div style="padding-top:12px;" class="q-px-md">
              <q-icon size="24px" name="fas fa-plus-circle" />
            </div>
            <div style="padding-top:12px;" class="q-pl-md">
              <q-icon size="24px" name="fas fa-sign-out-alt" />
            </div>
          </div>
        </div>
        <hr />
        <!-- สำหรับกล่องที่ 1 -->
        <div class="q-py-sm">BHMS Box: {{ sensorList[0].set }}</div>
        <menuh :activeMenu="4"></menuh>
      </div>
    </div>

    <!-- **********สำหรับจอ landscape*********** -->
    <div class="orientation-landscape row" v-if="$q.screen.height >= 500"></div>
    <!-- กรณีจอที่มีความสูงน้องเกินไป -->
    <div class="orientation-landscape row" v-if="$q.screen.height < 500">
      <notsupport></notsupport>
    </div>
  </div>
</template>

<script>
import menuv from "../components/menuv.vue";
import menuh from "../components/menuh.vue";
import notsupport from "../components/notsupport.vue";
export default {
  components: {
    menuv,
    menuh,
    notsupport
  }
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
  height: 100vh;
}
.contentdiv2 {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
