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
            <div style="padding-top:12px;" class="q-pl-md">
              <q-icon size="24px" name="fas fa-sign-out-alt" />
            </div>
          </div>
        </div>
        <hr />
        <!-- สำหรับกล่องที่ 1 -->
        <div v-for="(item, index) in sensorList" class="q-py-sm">
          BHMS Box: {{ sensorList[index].set }}
          <div
            v-for="(item2, index2) in sensorList[index].sensor"
            class="q-py-sm"
          >
            <sensorlimit
              :code="item2"
              :set="sensorList[index].set"
            ></sensorlimit>
          </div>
        </div>

        <sensorlimit code="A1_AC01"></sensorlimit>
        <menuh :activeMenu="4"></menuh>
      </div>
    </div>

    <!-- **********สำหรับจอ landscape*********** -->
    <div class="orientation-landscape row" v-if="$q.screen.height >= 500">
      <!-- Menu -->
      <div class="col-1" style="width:130px">
        <menuv :activeMenu="4"></menuv>
      </div>
      <div class="col contentdiv q-px-md">
        <div class="row justify-between">
          <div class="text-h5 q-pt-sm">Setting</div>
          <div class="row">
            <div style="padding-top:12px;" class="q-px-md">
              <q-icon size="24px" name="fas fa-comment-dots" />
            </div>
            <div style="padding-top:12px;" class="q-pl-md">
              <q-icon size="24px" name="fas fa-sign-out-alt" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="(item, index) in sensorList" class="q-py-sm">
          BHMS Box: {{ sensorList[index].set }}
          <div
            v-for="(item2, index2) in sensorList[index].sensor"
            class="q-py-sm"
          >
            <sensorlimit
              :code="item2"
              :set="sensorList[index].set"
            ></sensorlimit>
          </div>
        </div>
      </div>
    </div>
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
import sensorlimit from "../components/sensorlimit.vue";
export default {
  components: {
    menuv,
    menuh,
    notsupport,
    sensorlimit
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
.contentdiv {
  height: 100vh;
  overflow-y: auto;
}
</style>
