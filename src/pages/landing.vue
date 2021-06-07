<template>
  <div class="backgroundImg">
    <div class="banner">
      <div align="center">
        <img src="../assets/bhmslogo.png" alt />
      </div>
      <div class="textTitle">
        Bridge Health
        <br />Monitoring System
      </div>
    </div>
    <div class="footerP">
      <div class="row">
        <div class="col-1" style="width: 120px">
          <img src="../assets/logo.png" style="width:100px; margin-top:25px; margin-left:10px;" alt />
        </div>
        <div class="col text-white" v-if="$q.screen.lt.sm" style="display: table">
          <div class="valign">
            <div class="text-h6">Developed by</div>
            <div class="footerFont">Center of excellence in structural dynamics and urban management</div>
            <div class="footerFont">King Mongkut’s University of Technology North Bangkok</div>
          </div>
        </div>
        <div class="col text-white" v-else>
          <div style="padding-top:30px; padding-left:30px;">
            <div class="text-h5">Developed by</div>
            <div
              class="footerFont2"
            >Center of excellence in structural dynamics and urban management</div>
            <div class="footerFont2">King Mongkut’s University of Technology North Bangkok</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Screen } from "quasar";
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/project");
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.backgroundImg {
  height: 100vh;
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.footerP {
  background-color: #202541;
  position: absolute;
  height: 150px;
  bottom: 0px;
  width: 100%;
}
.textTitle {
  color: white;
  font-size: 36px;
  text-align: center;
}
.banner {
  position: relative;
  top: calc((100vh - 150px - 260px) / 2);
}
.footerFont {
  font-size: 12px;
}
.footerFont2 {
  font-size: 16px;
}
.valign {
  vertical-align: middle;
  display: table-cell;
}
</style>