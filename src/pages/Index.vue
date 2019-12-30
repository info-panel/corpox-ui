<template>

  <q-page class="q-pa-md items-start q-gutter-md flex-center">

    <div class="q-pt-xs">
      <div>

        <q-card class="info-card q-ma-xs q-p-xs">
          <img src="/statics/company_ceo.jpg">
          <div class="row">
            <p class="text-h6 text-bold ">CORPOX </p>
            <q-card-section>
            <p class="text-body1 text-left">CORPOX is an example project showing development attitude and solution approach to specific programming challenge. </p>
            <p class="text-body1 text-left">The main aim is the ability to select one or two employees from larger collection or data under certain conditions. </p>
            <p class="text-body1 text-left">The whole emploee database can be generated randomingly using following assumtions: </p>
            </q-card-section>
            <p class="text-body1 text-left">1. we have at least 753 employees willing to take part in a trip. </p>
            <p class="text-body1 text-left">2. apart from name and photo, we need to store information about: </p>
            <ul>
              <li class="text-body1 text-left">age </li>
              <li class="text-body1 text-left">district where she or he lives</li>
              <li class="text-body1 text-left">team at work where she or he belongs to </li>
              <li class="text-body1 text-left">if she or he is vision impaired </li>
            </ul>
            <p class="text-body1 text-left">To prepare this information an additional tool was created to generate random data using these requirements. </p>
            <p class="text-body1 text-left">Because no need for further data update was needed - a single JSON file was chosen to meet the assumptions. </p>
            <p class="text-body1 text-left">Random data with user names, ages and profile photos was obtained from <a href="https://randomuser.me/">RANDOMUSER.ME</a> a free service, then mapped adding random and required fields.</p>
            <p class="text-body1 text-left">CORPOX is build using client - server architecture. A simple CORPOX-REST server processes the information, draws employees and if they meet expectations - prepares them for output.</p>
            <p class="text-body1 text-left">The main logic is carried on the server, we only need a this web app to show relevant information. </p>
            <p class="text-body1 text-left">This is acomplished by CORPOX-UI web Application which is fully responsive solution to present selected data in a convenient way on all possible devices.</p>
            <p class="text-body1 text-left">Technical essentials and technology used can be obtained on project's <a href="https://github.com/info-panel">GITHUB page</a>.</p>
            <p></p>
            <p>This project can be a starting point for a larger Web Application, using a database for managing data. It can be expanded to meet the needs of any costumer. A mobile application running on Android or Apple iPhone could also be created using the same code base.</p>

            <p class="text-h6 text-bold text-left">Pick a random employee</p>
            <p class="text-body1 text-left">Corpox company has to send one of its employees for 2-weeks delegation. 753 employees are
              willing to take that trip.
              Corpox needs you to write a tool, that will help to randomly choose one of the employees.</p>

            <p class="text-h6 text-bold text-left">
              Pair up - an integration party will be organized for its employees. </p>

            <p class="text-body1 text-left">In one of the games, manager plans to pair
              up employees together.
              For purpose of the integration, employees should not know each other very well, so manager put
              few reasonable constraints:</p>
            <ul>  
              <li class="text-body1 text-left">Employees in pair should not regularly work in the same team</li>
              <li class="text-body1 text-left">Employees in pair should not be in the same age</li>
              <li class="text-body1 text-left">Employees that live in the same city district should not be in pair</li>
              <li class="text-body1 text-left">Both of employees in pair should not have defect of vision</li>
            </ul>
          </div>

        </q-card>
      </div>
    </div>

  </q-page>

</template>
<style>
.info-card {
  width: 100%;
  max-width: 850px;
}  
</style>

<script>

export default {
  name: 'PageIndex',
}
</script>
