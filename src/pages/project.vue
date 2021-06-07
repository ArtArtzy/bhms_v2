<template>
  <div class="bgcolor text-blue-grey-3">
    <div class="orientation-portrait">Port</div>
    <!-- **********สำหรับจอ landscape*********** -->
    <div class="orientation-landscape row">
      <!-- Menu -->
      <div class="col-1" style="width:130px">
        <menuv :activeMenu="1"></menuv>
      </div>
      <!-- //เนื้อเรื่อง -->
      <div class="col q-px-md text-body1">
        <div class="text-h5 q-pt-sm">Project: {{title}}</div>
        <hr />
        <div>{{sentence1}}</div>
        <div class="q-pt-md">{{sentence2}}</div>
        <div class="q-pt-md">{{sentence3}}</div>
        <div class="q-pt-md">{{sentence4}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import menuv from "../components/menuv.vue";
export default {
  components: {
    menuv,
  },
  data() {
    return {
      title: "การซ่อมแซมตอม่อ ทล. 9",
      sentence1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac, consectetur blandit in enim morbi pulvinar posuere. Nibh purus, dui arcu scelerisque et eros nunc euismod pretium. Mauris a quam eget ullamcorper volutpat, eget consequat dictum. Orci nunc consectetur nisi in ac neque rhoncus.",
      sentence4: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
}
</style>