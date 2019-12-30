<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      
      <q-card class="title-card">
        <q-card-section>
          <div class="text-h4 text-center">Pick a random employee</div>
        </q-card-section>
      </q-card>
      
      <q-card class="employee-card">
        <div class="q-pa-md">
          <div class="row justify-center">
            <div class="col col-md-2 col-xs-2">
            
              <q-img
                :src="imageSrc"
                class="prof-foto-card"
              >
              <template v-slot:loading>
                <div class="text-subtitle1 text-white">
                  Searching ...
                </div>
              </template>
              </q-img>
            
            </div>
            
            <div class="col col-md-1 col-xs-2"> 
            </div>
            <div class="col col-md-6 col-xs-4">
              <p class="text-h6 text-bold text-left">{{firstName}} {{lastName}}</p>
              <p class="text-h6 text-left text-subtitle1">Age:<b> {{age}}</b></p>
            </div>
            <div class="col col-md-1 col-xs-1">
            </div>
            <div class="col col-md-2 col-xs-2">
              <q-img src="/statics/corpox_me.jpg"></q-img>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empl ID: {{id}}</p>
            </div>
          </div>
        </div>

        <q-card-section>

          <div class="row justify-center">
            <div class="col-xs-12 col-sm-3 col-md-3">         
              <q-img
                src="/statics/list.jpg"
                class="icon-img"
              ></q-img>Team: <strong>{{team}}</strong>
            </div>
            
            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/calendar.jpg"
                class="icon-img"
                ></q-img>District: <strong>{{district}}</strong>               
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/calendar.jpg"
                class="icon-img"
              ></q-img> Willing a trip: <strong>{{willingToTripLiteral}}</strong>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/euro.jpg"
                class="icon-img"
              ></q-img> Vision defect: <strong>{{visionDefectLiteral}}</strong>
            </div>

          </div>
      
        </q-card-section>

      <q-card-actions align="right">

        <q-btn flat  no-caps color="negative" icon="replay" label="Pick another" @click="loadData()" />
      </q-card-actions>

      </q-card>
    </div>


  </q-page>
</template>
<style>
.title-card {
  width: 100%;
}
.employee-card {
  width: 100%;
}

.prof-foto-card {
  width: 99px;
  max-width: 266px;
  height: 100%;
}

.icon-img {
  width: 40px;
  max-width: 60px;
  height: 100%;
}

</style>
<script>
import { axios } from 'axios';

export default {
  name: 'random_employee',
  data () {
    return {
      //restServer: 'http://corpox-rest.infopanel.eu/',
      restServer: 'http://localhost:5000/',
      // random employee data records      
      id: 0,
      employeeDetails: [],
      readyToShow: false,
      imageSrc: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      age: 0,
      photo: '',
      willingToTrip: 0,
      willingToTripLiteral: '',
      team: '',
      district: '',
      visionDefect: 0,
      visionDefectLiteral: ''
    }
  },
  created () {
    this.readyToShow = false;
    //console.log('Starting Random Employee');
    this.loadData();
  },

  mounted () {
    this.readyToShow = true;
  },

  methods: {

    loadData() {
      this.$axios.get(this.restServer + 'get-random-employee')
        .then((response) => {
          this.employeeDetails = response.data;
          console.log('employeeDetails:', JSON.stringify(this.employeeDetails));
          
          this.imageSrc = this.employeeDetails[0].photo;
          this.id = this.employeeDetails[0].id;
          this.firstName = this.employeeDetails[0].firstName;
          this.lastName = this.employeeDetails[0].lastName;
          this.dateOfBirth = this.employeeDetails[0].dateOfBirth;
          this.age = this.employeeDetails[0].age;
          this.willingToTrip = this.employeeDetails[0].willingToTrip;
          this.team = this.employeeDetails[0].team;
          this.district = this.employeeDetails[0].district;
          this.visionDefect = this.employeeDetails[0].visionDefect;

          
          if(this.visionDefect === 1) {
            this.visionDefectLiteral = 'YES'; 
          } else { 
            this.visionDefectLiteral = 'NO'; 
          }
              
          if(this.willingToTrip === 1) { 
            this.willingToTripLiteral = 'YES'; 
          } else {
            this.willingToTripLiteral = 'NO'; 
          }  
            
        })
        .catch((err) => {
          console.log(err);
          this.$q.notify({
            color: 'yellow-7',
            position: 'top',
            message: 'Server connection issue. Try again in a moment..',
            icon: 'report_problem'
          })
        })
    }
  },

}
</script>
