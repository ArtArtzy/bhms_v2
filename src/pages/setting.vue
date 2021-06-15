<template>
  <div class="bgcolor text-blue-grey-3">
    <!-- สำหรับหน้าจอแนวตั้ง -->
    <div class="orientation-portrait">
      <div class="col q-px-md text-body1 contentdiv2">
        <div class="text-h6 q-pt-sm">Setting</div>
        <hr />
        <div align="center" class="q-py-md">
          <img
            src="../assets/logobhms.png"
            style="width:70%; max-width: 250px;"
            alt
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
          <q-btn
            color="amber"
            glossy
            label="Login"
            style="width:150px;"
            class="text-black"
            @click="goToSettingMain()"
          />
        </div>
        <div align="center" class="q-py-md">
          If you want to access this section, please contact Dr. Kittipoom
          Rodsin.
        </div>
      </div>
      <menuh :activeMenu="4"></menuh>
    </div>

    <!-- **********สำหรับจอ landscape*********** -->
    <div class="orientation-landscape row" v-if="$q.screen.height >= 500">
      <!-- Menu -->
      <div class="col-1" style="width:130px">
        <menuv :activeMenu="4"></menuv>
      </div>
      <!-- //เนื้อเรื่อง -->
      <div class="col q-px-md text-body1 contentdiv">
        <div class="text-h5 q-pt-sm">Setting</div>
        <hr />
        <div align="center" class="q-py-md">
          <img
            src="../assets/logobhms.png"
            style="width:25%; max-width: 250px;"
            alt
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
          <q-btn
            color="amber"
            glossy
            label="Login"
            style="width:150px;"
            class="text-black"
            @click="goToSettingMain()"
          />
        </div>
        <div align="center" class="q-pt-md">
          If you want to access this section, please contact Dr. Kittipoom
          Rodsin.
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
import { db } from "src/router";
export default {
  components: {
    menuv,
    menuh,
    notsupport
  },
  data() {
    return {
      input: {
        password: ""
      },
      system: {
        password: ""
      }
    };
  },
  methods: {
    goToSettingMain() {
      if (this.input.password == this.system.password) {
        this.$router.push("settingmain");
      } else {
        this.$q.notify({
          message: "Password incorrect",
          icon: "thumb_down",
          position: "top",
          color: "negative"
        });
      }
    }
  },
  mounted() {
    db.collection("road9_admin")
      .doc("user")
      .get()
      .then(data => {
        this.system.password = data.data().password;
      });
  }
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
