<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      
      <q-card class="title-card">
        <q-card-section>
          <div class="text-h4 text-center">Pair up 2 employees</div>
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

        <q-separator inset spaced/>

        <div class="q-pa-md">
          <div class="row justify-center">
            <div class="col col-md-2 col-xs-2">
            
              <q-img
                :src="imageSrc1"
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
              <p class="text-h6 text-bold text-left">{{firstName1}} {{lastName1}}</p>
              <p class="text-h6 text-left text-subtitle1">Age:<b> {{age1}}</b></p>
            </div>
            <div class="col col-md-1 col-xs-1">
            </div>
            <div class="col col-md-2 col-xs-2">
              <q-img src="/statics/corpox_me.jpg"></q-img>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empl ID: {{id1}}</p>
            </div>
          </div>
        </div>


        <q-card-section>

          <div class="row justify-center">
            <div class="col-xs-12 col-sm-3 col-md-3">         
              <q-img
                src="/statics/list.jpg"
                class="icon-img"
              ></q-img>Team: <strong>{{team1}}</strong>
            </div>
            
            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/calendar.jpg"
                class="icon-img"
                ></q-img>District: <strong>{{district1}}</strong>               
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/calendar.jpg"
                class="icon-img"
              ></q-img> Willing a trip: <strong>{{willingToTripLiteral1}}</strong>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3">
              <q-img
                src="/statics/euro.jpg"
                class="icon-img"
              ></q-img> Vision defect: <strong>{{visionDefectLiteral1}}</strong>
            </div>

          </div>
      
        </q-card-section>


        <q-card-actions align="right">
          <q-btn flat  no-caps color="negative" icon="replay" label="Pick another pair" @click="loadData()" />
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
  name: 'pair_up',
  data () {
    return {
      //restServer: 'http://corpox-rest.infopanel.eu/',
      restServer: 'http://localhost:5000/',
      // First employee
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
      visionDefectLiteral: '',
      // Second employee
      id1: 0,
      employeeDetails1: [],
      readyToShow1: false,
      imageSrc1: '',
      firstName1: '',
      lastName1: '',
      dateOfBirth1: '',
      age1: 0,
      photo1: '',
      willingToTrip1: 0,
      willingToTripLiteral1: '',
      team1: '',
      district1: '',
      visionDefect1: 0,
      visionDefectLiteral1: ''      
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
      this.$axios.get(this.restServer + 'get-pair-employees')
        .then((response) => {
          this.employeeDetails = response.data;
          console.log('employeeDetails:', JSON.stringify(this.employeeDetails[1].lastName));
          
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

          this.imageSrc1 = this.employeeDetails[1].photo;
          this.id1 = this.employeeDetails[1].id;
          this.firstName1 = this.employeeDetails[1].firstName;
          this.lastName1 = this.employeeDetails[1].lastName;
          this.dateOfBirth1 = this.employeeDetails[1].dateOfBirth;
          this.age1 = this.employeeDetails[1].age;
          this.willingToTrip1 = this.employeeDetails[1].willingToTrip;
          this.team1 = this.employeeDetails[1].team;
          this.district1 = this.employeeDetails[1].district;
          this.visionDefect1 = this.employeeDetails[1].visionDefect;

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

          if(this.visionDefect1 === 1) {
            this.visionDefectLiteral1 = 'YES'; 
          } else { 
            this.visionDefectLiteral1 = 'NO'; 
          }
              
          if(this.willingToTrip1 === 1) { 
            this.willingToTripLiteral1 = 'YES'; 
          } else {
            this.willingToTripLiteral1 = 'NO'; 
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

