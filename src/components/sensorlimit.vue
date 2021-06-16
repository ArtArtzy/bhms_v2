<template>
  <div>
    <!-- Accelerometer -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'AC'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Accelerometer ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit('AC', dataShow.sensor, dataShow.name)"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.X_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-X limit: {{ dataShow.X_limit }} m/s<sup>2</sup></div>
      </div>
      <div class="row">
        <div v-if="dataShow.Y_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-Y limit: {{ dataShow.Y_limit }} m/s<sup>2</sup></div>
      </div>
      <div class="row">
        <div v-if="dataShow.Z_enable">
          <q-icon
            name="far fa-check-circle"
            color="green"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div v-else>
          <q-icon
            name="far fa-times-circle"
            color="red"
            class="q-pt-sm q-px-md"
          />
        </div>
        <div>Acc-Z limit: {{ dataShow.Z_limit }} m/s<sup>2</sup></div>
      </div>
    </div>
    <!-- //Tile meter -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'TM'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Tilt meter ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.min_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Min limit: {{ dataShow.min_limit }} mrad</div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} mrad</div>
      </div>
    </div>
    <!-- //Displacement -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'LV'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Displacement sensor ({{
            this.dataShow.name
          }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} mm</div>
      </div>
    </div>
    <!-- Strain meter -->
    <div class="bg-white text-black q-pa-md divBig" v-if="type == 'SG'">
      <div class="row justify-between">
        <div>
          {{ this.dataShow.index }}. Strain sensor ({{ this.dataShow.name }})
        </div>
        <div class="row">
          <div v-if="dataShow.enable">
            <q-badge color="green"> online</q-badge>
          </div>
          <div v-else>
            <q-badge color="red"> offline</q-badge>
          </div>
          <div class="q-px-md">
            <q-icon
              name="fas fa-edit"
              @click="goToEdit()"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-if="dataShow.max_enable">
          <q-icon name="far fa-check-circle" color="green" class="q-px-md" />
        </div>
        <div v-else>
          <q-icon name="far fa-times-circle" color="red" class="q-px-md" />
        </div>
        <div>Max limit: {{ dataShow.max_limit }} &#181;&#8455;</div>
      </div>
    </div>

    <!-- ac edit dialog -->
    <q-dialog v-model="acShow" persistent>
      <q-card class="acSize">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            Accelerometer
          </div>

          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <div class="q-px-md row justify-between">
          <div class="col q-pt-sm">
            {{ this.sensor.set }}-{{ this.sensor.name }}
          </div>
          <div>
            <q-toggle v-model="ac.enable" color="green" />
          </div>
        </div>
        <div class="row">
          <div class="col row">
            <div class="col-1" style="width:200px;">
              <q-checkbox v-model="ac.x_enable" label="Acc-X limit : " />
            </div>
            <div class="col-1" style="width:50px;">
              <q-input v-model="ac.x_limit" dense />
            </div>
            <div class="col-1 q-pt-sm" style="width:50px;">m/s<sup>2</sup></div>
          </div>
        </div>
        <div class="row">
          <div class="col row">
            <div class="col-1" style="width:200px;">
              <q-checkbox v-model="ac.y_enable" label="Acc-Y limit : " />
            </div>
            <div class="col-1" style="width:50px;">
              <q-input v-model="ac.y_limit" dense />
            </div>
            <div class="col-1 q-pt-sm " style="width:50px;">
              m/s<sup>2</sup>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col row">
            <div class="col-1" style="width:200px;">
              <q-checkbox v-model="ac.z_enable" label="Acc-Z limit : " />
            </div>
            <div class="col-1" style="width:50px;">
              <q-input v-model="ac.z_limit" dense />
            </div>
            <div class="col-1 q-pt-sm " style="width:50px;">
              m/s<sup>2</sup>
            </div>
          </div>
        </div>
        <div class="q-pt-lg" align="center">
          <q-btn
            color="amber"
            glossy
            label="Save"
            style="width:150px;"
            class="text-black"
            @click="saveAc()"
          />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { db } from "src/router";
export default {
  props: ["code", "set"],
  data() {
    return {
      codeSum: "",
      type: "",
      dataShow: [],
      acShow: false,
      ac: {
        enable: true,
        x_enable: true,
        x_limit: 10,
        y_enable: true,
        y_limit: 10,
        z_enable: true,
        z_limit: 10
      },
      sensor: {
        type: "",
        set: "",
        name: ""
      },
      project_config: "",
      project_doc: ""
    };
  },
  methods: {
    loadConfig() {
      db.collection(this.project_config)
        .doc(this.codeSum)
        .get()
        .then(data => {
          this.dataShow = data.data();
        });
    },
    goToEdit(sensorType, sensorSet, sensorName) {
      this.sensor.type = sensorType;
      this.sensor.set = sensorSet;
      this.sensor.name = sensorName;
      this.project_doc = this.sensor.set + "_" + this.sensor.name;

      // console.log(sensorType, sensorSet, sensorName);
      if ((this.sensor.type = "AC")) {
        //load data from database
        db.collection(this.project_config)
          .doc(this.project_doc)
          .get()
          .then(data => {
            console.log(data.data());
            this.ac.enable = data.data().enable;
            this.ac.x_enable = data.data().X_enable;
            this.ac.x_limit = data.data().X_limit;
            this.ac.y_enable = data.data().Y_enable;
            this.ac.y_limit = data.data().Y_limit;
            this.ac.z_enable = data.data().Z_enable;
            this.ac.z_limit = data.data().Z_limit;
            this.acShow = true;
          });
      }
    },
    saveAc() {
      let saveData = {
        enable: this.ac.enable,
        X_enable: this.ac.x_enable,
        X_limit: this.ac.x_limit,
        Y_enable: this.ac.y_enable,
        Y_limit: this.ac.y_limit,
        Z_enable: this.ac.z_enable,
        Z_limit: this.ac.z_limit
      };
      db.collection(this.project_config)
        .doc(this.project_doc)
        .update(saveData)
        .then(() => {
          this.$q.notify({
            message: "Update completely",
            icon: "thumb_up",
            position: "top",
            color: "secondary"
          });
          this.dataShow = [];
          this.loadConfig();
          this.acShow = false;
          console.log("update complete");
        });
    }
  },
  mounted() {
    this.code;
    this.codeSum = this.set + "_" + this.code;
    let indexStr = this.codeSum.indexOf("_");
    this.type = this.codeSum.substring(indexStr + 1, indexStr + 3);
    this.project_config = this.projectId + "_" + "config";

    this.loadConfig();
  }
};
</script>

<style lang="scss" scoped>
.divBig {
  border-radius: 10px;
}
.acSize {
  width: 320px;
  height: 300px;
}
</style>
