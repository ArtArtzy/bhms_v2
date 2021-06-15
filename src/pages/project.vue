<template>
  <div class="bgcolor text-blue-grey-3" style="height:100vh">
    <div v-if="$q.screen.height >= 600">
      <!-- สำหรับหน้าจอแนวตั้ง -->
      <div class="orientation-portrait">
        <div class="col q-px-md text-body1 contentdiv2">
          <div class="text-h6 q-pt-sm">Project: {{ title }}</div>
          <hr />

          <div align="center" class="q-py-md">
            <img :src="picUrl" style="width:95%; max-width: 1000px;" />
          </div>
          <div>{{ sentence1 }}</div>
          <div class="q-pt-md">{{ sentence2 }}</div>
          <div class="q-pt-md">{{ sentence3 }}</div>
          <div class="q-pt-md">{{ sentence4 }}</div>
        </div>
        <menuh :activeMenu="1"></menuh>
      </div>
      <!-- **********สำหรับจอ landscape*********** -->
      <div class="orientation-landscape row" v-if="$q.screen.height >= 500">
        <!-- Menu -->
        <div class="col-1" style="width:130px">
          <menuv :activeMenu="1"></menuv>
        </div>
        <!-- //เนื้อเรื่อง -->
        <div class="col q-px-md text-body1 contentdiv">
          <div class="text-h5 q-pt-sm">Project: {{ title }}</div>
          <hr />
          <div align="center" class="q-py-md">
            <img :src="picUrl" style="width:80%; max-width: 1000px;" />
          </div>
          <div>{{ sentence1 }}</div>
          <div class="q-pt-md">{{ sentence2 }}</div>
          <div class="q-pt-md">{{ sentence3 }}</div>
          <div class="q-pt-md">{{ sentence4 }}</div>
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
export default {
  components: {
    menuv,
    menuh,
    notsupport
  },
  data() {
    return {
      title: "การซ่อมแซมตอม่อ ทล. 9",
      picUrl: "/images/projectoverall.png",
      sentence1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci  dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence4: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
}
.contentdiv {
  height: 100vh;
  overflow-y: auto;
}
.contentdiv2 {
  height: calc(100vh - 110px);
  overflow-y: auto;
}
</style>
