<template>
  <div class="bgcolor row">
    <div class="col-8" align="center">
      <div class="innerbox">
        <div class="text-h5">The screen height is too short.</div>
        <div>Please rotate your screen.</div>
      </div>
    </div>
    <div class="col" style="width:150px" align="right">
      <img src="../../public/images/engineer2.png" class="picpos" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
  height: 100vh;
  width: 100%;
}
.picpos {
  height: 70vh;
  position: relative;
  top: 30vh;
  right: 50px;
}
.innerbox {
  position: absolute;
  top: 50%;
  left: calc(50% - 75px);
  transform: translate(-50%, -50%);
}
</style>