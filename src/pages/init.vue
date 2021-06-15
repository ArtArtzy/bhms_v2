<template>
  <div class="bgcolor text-white">
    <div style="width:500px;" class="absolute-center" align="center">
      <img src="../assets/logobhms.png" style="width:250px;" alt="" />
      <div class="text-h6" align="center">Project : {{ projectId }}</div>
      <div class="q-py-md">
        <q-input
          v-model="adminPassword"
          label="Admin password"
          bg-color="white"
          style="width:300px;"
          outlined
          dense
        />
      </div>
      <div>
        <q-input
          v-model="pincode"
          label="Security pin code"
          outlined
          style="width:300px;"
          type="password"
          dense
          bg-color="white"
        />
      </div>
      <div class="q-pt-md">
        <q-btn
          color="amber"
          glossy
          no-caps
          label="Initial system"
          style="width:145px;"
          class="text-black"
          @click="initBtn()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "src/router";
export default {
  data() {
    return {
      adminPassword: "",
      pincode: ""
    };
  },
  methods: {
    async resetBtn() {
      let project_admin = this.projectId + "_" + "admin";
      //delete user table
      await db
        .collection(project_admin)
        .doc("user")
        .delete();
      //delete config table
      let project_config = this.projectId + "_" + "config";
      await db
        .collection(project_config)
        .get()
        .then(doc => {
          doc.forEach(data => {
            db.collection(project_config)
              .doc(data.id)
              .delete();
          });
        });
    },
    async initBtn() {
      if (this.pincode == this.pincodeMain) {
        //reset the exist data
        await this.resetBtn();

        //add password for admin
        let project_admin = this.projectId + "_" + "admin";
        let dataInput = {
          user: "admin",
          password: this.adminPassword
        };
        db.collection(project_admin)
          .doc("user")
          .set(dataInput);

        //add project_config
        let project_config = this.projectId + "_" + "config";
        for (let indexSet in this.sensorList) {
          let count = 0;
          for (let indexSensor in this.sensorList[indexSet].sensor) {
            count++;
            let fieldName =
              this.sensorList[indexSet].set +
              "_" +
              this.sensorList[indexSet].sensor[indexSensor];

            let sensorType = this.sensorList[indexSet].sensor[
              indexSensor
            ].substring(0, 2);
            //in case of accelerometer
            if (sensorType == "AC") {
              let dataInput = {
                sensor: this.sensorList[indexSet].set,
                type: "AC",
                index: count,
                enable: true,
                X_enable: true,
                X_limit: 10,
                Y_enable: true,
                Y_limit: 10,
                Z_enable: true,
                Z_limit: 10,
                name: this.sensorList[indexSet].sensor[indexSensor]
              };
              db.collection(project_config)
                .doc(fieldName)
                .set(dataInput);
              // in case of Tilt meter
            } else if (sensorType == "TM") {
              let dataInput = {
                sensor: this.sensorList[indexSet].set,
                type: "TM",
                index: count,
                enable: true,
                min_enable: true,
                min_limit: 10,
                max_enable: true,
                max_limit: 10,
                name: this.sensorList[indexSet].sensor[indexSensor]
              };
              db.collection(project_config)
                .doc(fieldName)
                .set(dataInput);
              //Strain sensor
            } else if (sensorType == "SG") {
              let dataInput = {
                sensor: this.sensorList[indexSet].set,
                type: "SG",
                index: count,
                enable: true,
                max_enable: true,
                max_limit: 10,
                name: this.sensorList[indexSet].sensor[indexSensor]
              };
              db.collection(project_config)
                .doc(fieldName)
                .set(dataInput);
            } else if (sensorType == "LV") {
              let dataInput = {
                sensor: this.sensorList[indexSet].set,
                type: "LV",
                index: count,
                enable: true,
                max_enable: true,
                max_limit: 10,
                name: this.sensorList[indexSet].sensor[indexSensor]
              };
              db.collection(project_config)
                .doc(fieldName)
                .set(dataInput);
            }
          }
        }
        this.$q.notify({
          message: "Initialize system complete",
          icon: "thumb_up",
          position: "top",
          color: "secondary"
        });
        setTimeout(() => {
          this.$router.push("setting");
        }, 4000);
      } else {
        this.$q.notify({
          message: "Pin code incorrect",
          icon: "thumb_down",
          position: "top",
          color: "negative"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bgcolor {
  background-color: #202541;
  height: 100vh;
}
</style>
