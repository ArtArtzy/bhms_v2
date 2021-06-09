<template>
  <div class="bgcolor text-blue-grey-3">
      <!-- สำหรับหน้าจอแนวตั้ง -->
      <div class="orientation-portrait">
        <div class="col q-px-md text-body1 contentdiv2">
          <div class="text-h6 q-pt-sm">Setting</div>
          <hr />
          <div align="center" class="q-py-md">
            <img src="../assets/logobhms.png" style="width:70%; max-width: 250px;" alt />
          </div>
          <div align="center">
            <q-input
              outlined
              v-model="input.username"
              style="width:300px;"
              label="Username"
              color="black"
              bg-color="grey-2"
              dense
            />
          </div>
          <div align="center" class="q-pt-md">
            <q-input
              outlined
              v-model="input.password"
              style="width:300px;"
              label="Password"
              color="black"
              bg-color="grey-2"
              type="password"
              dense
            />
          </div>
          <div align="center" class="q-pt-md">
            <q-btn color="amber" glossy label="Login" style="width:150px;" class="text-black" />
          </div>
           <div
            align="center"
            class="q-py-md"
          >If you want to access this section, please contact Dr. Kittipoom Rodsin.</div>
        </div>
        <menuh :activeMenu="4"></menuh>
        </div>
      
      <!-- **********สำหรับจอ landscape*********** -->
      <div class="orientation-landscape row" v-if="$q.screen.height>=500">
        <!-- Menu -->
        <div class="col-1" style="width:130px">
          <menuv :activeMenu="4" :versionShow="version"></menuv>
        </div>
        <!-- //เนื้อเรื่อง -->
        <div class="col q-px-md text-body1 contentdiv">
          <div class="text-h5 q-pt-sm">Setting</div>
          <hr />
          <div align="center" class="q-py-md">
            <img src="../assets/logobhms.png" style="width:25%; max-width: 250px;" alt />
          </div>
          <div align="center">
            <q-input
              outlined
              v-model="input.username"
              style="width:300px;"
              label="Username"
              color="black"
              bg-color="grey-2"
            />
          </div>
          <div align="center" class="q-pt-md">
            <q-input
              outlined
              v-model="input.password"
              style="width:300px;"
              label="Password"
              color="black"
              bg-color="grey-2"
              type="password"
            />
          </div>
          <div align="center" class="q-pt-md">
            <q-btn color="amber" glossy label="Login" style="width:150px;" class="text-black" />
          </div>
          <div
            align="center"
            class="q-pt-md"
          >If you want to access this section, please contact Dr. Kittipoom Rodsin.</div>
        </div>
      </div>
         <!-- กรณีจอที่มีความสูงน้องเกินไป -->
      <div class="orientation-landscape row" v-if="$q.screen.height< 500"><notsupport></notsupport> </div>
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
  },
  data() {
    return {
      input: {
        username: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
  height: 100vh;
}
.contentdiv {
  height: 100vh;
  overflow-y: auto;
}
.contentdiv2 {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>