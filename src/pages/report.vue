<template>
  <div class="bgcolor text-blue-grey-3">
    <div v-if="$q.screen.height >=600">
      <!-- สำหรับหน้าจอแนวตั้ง -->
      <div class="orientation-portrait">
        <div class="col q-px-md text-body1 contentdiv2">
          <div class="text-h6 q-pt-sm">Report</div>
          <hr />

          <div style=" margin:auto;">
            <div class="q-pt-md">Start date: time</div>
            <!-- start date input -->
            <div>
              <div class="q-pb-md" style="max-width: 500px">
                <q-input filled v-model="startDate" color="black" bg-color="grey-2">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="startDate" mask="DD-MM-YYYY HH:mm">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="startDate" mask="DD-MM-YYYY HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div>End date: time</div>
            <!-- end date input -->
            <div>
              <div class="q-pb-md" style="max-width: 500px">
                <q-input filled v-model="endDate" color="black" bg-color="grey-2">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="endDate" mask="DD-MM-YYYY HH:mm">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="endDate" mask="DD-MM-YYYY HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div>
              Sensor List
              <q-checkbox dark v-model="showLimit" label="show exceed limit" />
            </div>
            <!-- sensor 1 -->
            <div v-if="sensorSize >=1">
              <div>
                <b>{{sensorList[0].set}}</b>
              </div>
              <div class="row">
                <div class="col-4" v-for="(item,index) in sensorList[0].sensor">
                  <q-checkbox dark v-model="sensorShow1[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 2 -->
            <div v-if="sensorSize >=2">
              <div>
                <b>{{sensorList[1].set}}</b>
              </div>
              <div class="row">
                <div class="col-4" v-for="(item,index) in sensorList[1].sensor">
                  <q-checkbox dark v-model="sensorShow2[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 3 -->
            <div v-if="sensorSize >=3">
              <div>
                <b>{{sensorList[2].set}}</b>
              </div>
              <div class="row">
                <div class="col-4" v-for="(item,index) in sensorList[2].sensor">
                  <q-checkbox dark v-model="sensorShow3[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 4 -->
            <div v-if="sensorSize >=4">
              <div>
                <b>{{sensorList[3].set}}</b>
              </div>
              <div class="row">
                <div class="col-4" v-for="(item,index) in sensorList[3].sensor">
                  <q-checkbox dark v-model="sensorShow4[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 5 -->
            <div v-if="sensorSize >=5">
              <div>
                <b>{{sensorList[4].set}}</b>
              </div>
              <div class="row">
                <div class="col-4" v-for="(item,index) in sensorList[4].sensor">
                  <q-checkbox dark v-model="sensorShow5[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>
            <!-- Report btn -->
            <div align="center" class="q-pt-md">
              <q-btn
                color="amber"
                glossy
                label="Report"
                style="width:150px;"
                class="text-black q-mb-md"
              />
            </div>
          </div>
        </div>
        <menuh :activeMenu="3"></menuh>
      </div>
      <!-- **********สำหรับจอ landscape*********** -->
      <div class="orientation-landscape row" v-if="$q.screen.height>=500">
        <!-- Menu -->
        <div class="col-1" style="width:130px">
          <menuv :activeMenu="3" :versionShow="version"></menuv>
        </div>
        <!-- //เนื้อเรื่อง -->
        <div class="col q-px-md text-body1 contentdiv">
          <div class="text-h5 q-pt-sm">Report</div>
          <hr />

          <div style="width:500px; margin:auto;">
            <div class="q-pt-md">Start date: time</div>
            <!-- start date input -->
            <div>
              <div class="q-pb-md" style="max-width: 500px">
                <q-input filled v-model="startDate" color="black" bg-color="grey-2">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="startDate" mask="DD-MM-YYYY HH:mm">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="startDate" mask="DD-MM-YYYY HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div>End date: time</div>
            <!-- end date input -->
            <div>
              <div class="q-pb-md" style="max-width: 500px">
                <q-input filled v-model="endDate" color="black" bg-color="grey-2">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="endDate" mask="DD-MM-YYYY HH:mm">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="endDate" mask="DD-MM-YYYY HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div>
              Sensor List
              <q-checkbox dark v-model="showLimit" label="show exceed limit" />
            </div>
            <!-- sensor 1 -->
            <div v-if="sensorSize >=1">
              <div>
                <b>{{sensorList[0].set}}</b>
              </div>
              <div class="row">
                <div class="col-3" v-for="(item,index) in sensorList[0].sensor">
                  <q-checkbox dark v-model="sensorShow1[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 2 -->
            <div v-if="sensorSize >=2">
              <div>
                <b>{{sensorList[1].set}}</b>
              </div>
              <div class="row">
                <div class="col-3" v-for="(item,index) in sensorList[1].sensor">
                  <q-checkbox dark v-model="sensorShow2[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 3 -->
            <div v-if="sensorSize >=3">
              <div>
                <b>{{sensorList[2].set}}</b>
              </div>
              <div class="row">
                <div class="col-3" v-for="(item,index) in sensorList[2].sensor">
                  <q-checkbox dark v-model="sensorShow3[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 4 -->
            <div v-if="sensorSize >=4">
              <div>
                <b>{{sensorList[3].set}}</b>
              </div>
              <div class="row">
                <div class="col-3" v-for="(item,index) in sensorList[3].sensor">
                  <q-checkbox dark v-model="sensorShow4[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- sensor 5 -->
            <div v-if="sensorSize >=5">
              <div>
                <b>{{sensorList[4].set}}</b>
              </div>
              <div class="row">
                <div class="col-3" v-for="(item,index) in sensorList[4].sensor">
                  <q-checkbox dark v-model="sensorShow5[index]" :label="item" />
                </div>
              </div>
              <br />
            </div>

            <!-- Report btn -->
            <div align="center" class="q-pt-md">
              <q-btn color="amber" glossy label="Report" style="width:150px;" class="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- กรณีจอที่มีความสูงน้องเกินไป -->
    <div class="orientation-landscape row" v-if="$q.screen.height< 500">
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
    notsupport,
  },
  data() {
    return {
      startDate: "01-02-2021 12:44",
      endDate: "01-02-2021 12:44",
      showLimit: true,
      sensorShow1: [],
      sensorShow2: [],
      sensorShow3: [],
      sensorShow4: [],
      sensorShow5: [],
      sensorSize: 0,
    };
  },
  methods: {
    checkSensor() {
      this.sensorSize = this.sensorList.length;
      let sensor1 = this.sensorList[0].sensor.length;
      for (let i = 0; i < sensor1; i++) {
        this.sensorShow1.push(true);
      }
      if (sensor1 >= 2) {
        let sensor1 = this.sensorList[1].sensor.length;
        for (let i = 0; i < sensor1; i++) {
          this.sensorShow2.push(true);
        }
      }
      if (sensor1 >= 3) {
        let sensor1 = this.sensorList[2].sensor.length;
        for (let i = 0; i < sensor1; i++) {
          this.sensorShow3.push(true);
        }
      }
      if (sensor1 >= 4) {
        let sensor1 = this.sensorList[3].sensor.length;
        for (let i = 0; i < sensor1; i++) {
          this.sensorShow4.push(true);
        }
      }
      if (sensor1 >= 5) {
        let sensor1 = this.sensorList[4].sensor.length;
        for (let i = 0; i < sensor1; i++) {
          this.sensorShow5.push(true);
        }
      }
    },
  },
  mounted() {
    this.checkSensor();
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
.contentdiv2 {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>