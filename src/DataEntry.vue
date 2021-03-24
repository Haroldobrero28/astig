<template>



<div>
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <Navbar /> 

  <div class="about">
    <div class="container-fluid">
			<div class="row bg-dark">
				<div class="col-lg-12">
					<p class="text-center text-light display-4 pt-2 " style="font-size:25px;" >Crud Routes</p>
					
				</div>
				
			</div>
			
		</div>
    <div class="container">
			<div class="row mt-3">
				<div class="col-lg-6">
					<h3 class="text-info">Registered Routes</h3>
				</div>
				<div class="col-lg-6">
					&nbsp;&nbsp;<b-button class="btn btn-info float-right" @click.prevent="AddRoutes()" v-b-modal.modal-prevent-closing><i class="fas fa-route"></i>&nbsp;&nbsp;Add Routes</b-button>&nbsp;&nbsp;
					<a href="/segmentr" style="text-decoration:none; text-color:white;"><button class="btn btn-info float-right"><i class="fas fa-globe"></i>&nbsp;&nbsp;View Segments</button></a>

    <div class="mt-3">
    
      <div v-if="submittedNames.length === 0"></div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" class="list-group-item" v-bind:key="name">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit your Routes"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
      <div>
  <b-dropdown
    text="Route Type"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">RSSO to CO</b-dropdown-item>
    <b-dropdown-item href="#">RSSO to Other RSSO</b-dropdown-item>
    <b-dropdown-item href="#">RSSO to PSO of the same Region</b-dropdown-item>
    <b-dropdown-item href="#">RSSO to Provincial LGU Offices of the same Region</b-dropdown-item>
    <b-dropdown-item href="#"> PSO to CO</b-dropdown-item>
    <b-dropdown-item href="#">PSO to PSO of the same Region</b-dropdown-item>
    <b-dropdown-item href="#">PSO to City/Municipal Hall of the same Province</b-dropdown-item>
    <b-dropdown-item href="#">City/Municial Hall to Other City/Municipal Hall of the same Province</b-dropdown-item>
    <b-dropdown-item href="#">City/Municipal Hall to Barangay Hall</b-dropdown-item>
    <b-dropdown-item href="#">Barangay Hall to Other Barangay Hall of the same Province</b-dropdown-item>
  </b-dropdown>
</div>
        <b-form-group
          label="Origin"
          label-for="name-input"
          invalid-feedback="Origin is required"
          :state="originState"
        >
          <b-form-input
            id="name-input"
            v-model="origin"
            :state="originState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="DESTINATION"
          label-for="destination-input"
          invalid-feedback="Destination is required"
          :state="destinationState"
        >
          <b-form-input
            id="destination-input"
            v-model="destination"
            :state="destinationState"
            required
          ></b-form-input>
        </b-form-group>

        <div>
  <b-dropdown
    text="Distance (KM)"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">1</b-dropdown-item>
    <b-dropdown-item href="#">2</b-dropdown-item>
    <b-dropdown-item href="#">3</b-dropdown-item>
    <b-dropdown-item href="#"> 4</b-dropdown-item>
    <b-dropdown-item href="#"> 5</b-dropdown-item>
    <b-dropdown-item href="#"> 6</b-dropdown-item>
    <b-dropdown-item href="#"> 7</b-dropdown-item>
    <b-dropdown-item href="#"> 8</b-dropdown-item>
    <b-dropdown-item href="#"> 9</b-dropdown-item>
    <b-dropdown-item href="#"> 10</b-dropdown-item>
  </b-dropdown>
</div>
		
	
		<div>
  <b-dropdown
    text="Road Type"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Not applicable</b-dropdown-item>
    <b-dropdown-item href="#">National road</b-dropdown-item>
    <b-dropdown-item href="#">Provincial road</b-dropdown-item>
    <b-dropdown-item href="#"> City/Municipal road</b-dropdown-item>
    <b-dropdown-item href="#"> Barangay road</b-dropdown-item>
    <b-dropdown-item href="#"> Trail</b-dropdown-item>
  </b-dropdown>
</div>
<div>
  <b-dropdown
    text="Topographical Features"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Not applicable</b-dropdown-item>
    <b-dropdown-item href="#">Plain</b-dropdown-item>
    <b-dropdown-item href="#">Terrain</b-dropdown-item>
    <b-dropdown-item href="#">Mountainous</b-dropdown-item>
    <b-dropdown-item href="#">Hill</b-dropdown-item>
    <b-dropdown-item href="#">River</b-dropdown-item>
    <b-dropdown-item href="#">Lake</b-dropdown-item>
    <b-dropdown-item href="#"> Sea/ocean</b-dropdown-item>
    <b-dropdown-item href="#">Valley</b-dropdown-item>
  </b-dropdown>
</div>
<div>
  <b-dropdown
    text="Mode of Travel"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Airplane</b-dropdown-item>
    <b-dropdown-item href="#">Bus</b-dropdown-item>
    <b-dropdown-item href="#">Jeep</b-dropdown-item>
    <b-dropdown-item href="#">Van</b-dropdown-item>
    <b-dropdown-item href="#">Tricycle</b-dropdown-item>
    <b-dropdown-item href="#">Habal-habal</b-dropdown-item>
    <b-dropdown-item href="#">Horse</b-dropdown-item>
    <b-dropdown-item href="#">Pump boat</b-dropdown-item>
    <b-dropdown-item href="#"> Fast craft</b-dropdown-item>
    <b-dropdown-item href="#">Roro</b-dropdown-item>
    <b-dropdown-item href="#">PNR</b-dropdown-item>
    <b-dropdown-item href="#">MRT/LRT</b-dropdown-item>
    <b-dropdown-item href="#">Walk</b-dropdown-item>
  </b-dropdown>
</div>
		<b-form-group
          label="Duration of Travel (Minutes)"
          label-for="distanceKM-input"
          invalid-feedback="Distance KM is required"
          :state="distanceKMState"
        >
          <b-form-input
            id="distanceKM-input"
            v-model="distanceKM"
            :state="distanceKMState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="Frequency of Trips (in a day/week)"
          label-for="roadType-input"
          invalid-feedback="Road Type is required"
          :state="roadTypeState"
        >
          <b-form-input
            id="roadType-input"
            v-model="roadType"
            :state="roadTypeState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="Fare (one way)"
          label-for="topographical-input"
          invalid-feedback="Topographical is required"
          :state="topographicalState"
        >
          <b-form-input
            id="topographical-input"
            v-model="name"
            :state="topographicalState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="MODE OF TRAVEL"
          label-for="modeTravel-input"
          invalid-feedback="Mode of Travel is required"
          :state="modeTravelState"
        >
          <b-form-input
            id="modeTravel-input"
            v-model="modeTravel"
            :state="modeTravelState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="DURATION TRAVEL (MINS)"
          label-for="durationTravel-input"
          invalid-feedback="Duration of Travel is required"
          :state="durationTravelState"
        >
          <b-form-input
            id="durationTravel-input"
            v-model="durationTravel"
            :state="durationTravelState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="FREQUENCY OF TRIPS (IN A DAY/WEEK)"
          label-for="freqTrip-input"
          invalid-feedback="Frequency of Trips is required"
          :state="freqTripState"
        >
          <b-form-input
            id="freqTrip-input"
            v-model="freqTrip"
            :state="freqTripState"
            required
          ></b-form-input>
        </b-form-group>
		<b-form-group
          label="FARE (ONE WAY)"
          label-for="fare-input"
          invalid-feedback="Fare is required"
          :state="fareState"
        >
          <b-form-input
            id="fare-input"
            v-model="fare"
            :state="fareState"
            required
          ></b-form-input>
        </b-form-group>

        <div>
  <b-dropdown
    text="Region"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">BARMM</b-dropdown-item>
    <b-dropdown-item href="#">ARMM</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#"> Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
    <b-dropdown-item href="#">Region</b-dropdown-item>
  </b-dropdown>
</div>
<div>
  <b-dropdown
    text="Province"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Tawi Tawi</b-dropdown-item>
    <b-dropdown-item href="#">COTABATO CITY</b-dropdown-item>
    <b-dropdown-item href="#">ZAMBOANGA CITY</b-dropdown-item>
    <b-dropdown-item href="#">BONGAO</b-dropdown-item>
    <b-dropdown-item href="#">PUERTO PRINCESA CITY</b-dropdown-item>
    <b-dropdown-item href="#">CITY OF ISABELA</b-dropdown-item>
    <b-dropdown-item href="#">BASILAN</b-dropdown-item>
    <b-dropdown-item href="#">LANAO DEL SUR</b-dropdown-item>
    <b-dropdown-item href="#">ISABELA CITY</b-dropdown-item>
    <b-dropdown-item href="#">Province</b-dropdown-item>
    <b-dropdown-item href="#">Province</b-dropdown-item>
    <b-dropdown-item href="#">Province</b-dropdown-item>
    <b-dropdown-item href="#">Province</b-dropdown-item>
  </b-dropdown>
</div>
		<b-form-group
          label="Remarks"
          label-for="travelIDnumber-input"
          invalid-feedback="Travel ID Number is required"
          :state="travelIDnumberState"
        >
          <b-form-input
            id="travelIDnumber-input"
            v-model="travelIDnumber"
            :state="travelIDnumberState"
            required
          ></b-form-input>
        </b-form-group>
		
      </form>
    </b-modal>
					
					
				</div>

				
			</div>
			
<hr class="bg-info">
<div class="alert alert-danger" v-if="errorMsg">
	Error Message
	
</div>
<div class="alert alert-success" v-if="successMsg">
	Success Message
	
</div>
<div class="row">
	<div class="col-lg-12">
		<table class="table table-bordered table-striped">
			<thead>
				<tr class="text-center bg-info text-light">
					<th>ID</th>
					<th>Origin</th>
					<th>Destination</th>
					<th>Action</th>
					
					
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td>1</td>
					<td>City Hall</td>
					<td>Bongao</td>
					<td>
          <div class="col-lg-12">
          <a href="#" class="text-success" @click="showEditModal=true"><i class="fas fa-eye"></i></a>
          &nbsp;&nbsp;|||||
          
          <a href="#" class="text-success" @click="showEditModal=true"><i class="fas fa-edit"></i></a>
          &nbsp;|||||
          <a href="#" class="text-danger" @click="showDeleteModal=true"><i class="fas fa-trash-alt"></i></a>
          </div>

          </td>
					
					

				</tr>
			</tbody>
		</table>
	</div>
</div>
		</div>
  </div>
</div> 
</template>

<script>

import Navbar from './layout/Navbar'

export default {
    name: 'DataEntry',
    components: {
        Navbar
    },
	data() {
      return {
        name: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
}
</script>

<style type="text/css">
	#overlay{
		position: fixed;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.6);

	}
</style>