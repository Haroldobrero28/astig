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

  

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit your Routes"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      
    >
    
    
      <form @submit.prevent="addroute()"
      ref="form" @submit.stop.prevent="handleSubmit"
          class=""
          action="/addroute"
          method="post">
         <div>
          <label>Route Type</label>
    <b-form-select v-model="routType" :options="options" class="mb-3" >
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" text="Road Type"></b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="RSSO to CO">RSSO to CO</b-form-select-option>
      <b-form-select-option value="RSSO to Other RSSO">RSSO to Other RSSO</b-form-select-option>
      <b-form-select-option value="RSSO to Other RSSO">RSSO to PSO of the same Region</b-form-select-option>
    </b-form-select>

    
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
          label="Destination"
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
    <b-container fluid>
    <b-row  v-for="type in types" :key="type">
      <b-col sm="9">
        <label :for="`type-${type}`">Distance (KM)</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" v-model="distance"></b-form-input>
      </b-col>
    </b-row>
  </b-container>

    
  </div>
		
	
	<div>
          <label>Road Type</label>
    <b-form-select v-model="roadType" :options="options" class="mb-3" >
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" text="Road Type"></b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="National road">National road</b-form-select-option>
      <b-form-select-option value="Provincial road">Provincial road</b-form-select-option>
      <b-form-select-option value="City/Municipal road">City/Municipal road</b-form-select-option>
    </b-form-select>

    
  </div>
<div>
          <label>Topographical Features</label>
    <b-form-select v-model="topoFeatures" :options="options" class="mb-3" >
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" text=""></b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="RPlain">Plain</b-form-select-option>
      <b-form-select-option value="Terrain">Terrain</b-form-select-option>
      <b-form-select-option value="Mountainous">Mountainous</b-form-select-option>
    </b-form-select>

    
  </div>

  <div>
          <label>Mode of Travel</label>
    <b-form-select v-model="modeTravel" :options="options" class="mb-3" >
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" text=""></b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="Airplane">Airplane</b-form-select-option>
      <b-form-select-option value="Bus">Bus</b-form-select-option>
      <b-form-select-option value="Jeep">Jeep</b-form-select-option>
    </b-form-select>

    <div>
     <div>
    <b-container fluid>
    <b-row  v-for="type in types" :key="type">
      <b-col sm="9">
        <label :for="`type-${type}`">Duration of Travel (Mins)</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" v-model="durationTravel"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
  </div>
    </div>

    <div>
    
    <b-form-group
          label="Frequency of Trips (in a day/week)"
          label-for="name-input"
          invalid-feedback="Origin is required"
          :state="originState"
        >
          <b-form-input
            id="name-input"
            v-model="tripFrequency"
            :state="originState"
            required
          ></b-form-input>
        </b-form-group>
    </div>

  </div>

	
		
		<b-form-group
          label="Fare (one way)"
          label-for="topographical-input"
          invalid-feedback="Topographical is required"
          :state="topographicalState"
        >
          <b-form-input
            id="topographical-input"
            v-model="fare"
            :state="topographicalState"
            required
          ></b-form-input>
        </b-form-group>
		
		
		
		

        <div>
  
</div>
<div>
  
</div>
		<b-form-group
          label="Remarks"
          label-for="travelIDnumber-input"
          invalid-feedback="Travel ID Number is required"
          :state="travelIDnumberState"
        >
          <b-form-input
            id="travelIDnumber-input"
            v-model="remarks"
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
					<td>
    
     <div class="">Bongao
      
      
      
    </div>
    </td>
					<td>
    
      City Hall
      
         </td>
					<td>
          <div class="col-lg-12">
          
          <span class="icon_crud"><a href="#" class="text-success icon_crud" @click="showEditModal=true"><i class="fas fa-eye"></i></a></span>
         
          <span class="icon_crud"> <a href="#" class="text-success icon_crud" @click="showEditModal=true"><i class="fas fa-edit"></i></a></span>
          <span class="icon_crud"><a href="#" class="text-danger icon_crud" @click="showDeleteModal=true"><i class="fas fa-trash-alt"></i></a></span>
          
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

import Navbar from './cmps/Navbar'

export default {
    
    components: {
        Navbar
    },
	data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
        types: [
          
          'number'
          
        ]
        
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

  .about {
    margin-top: 50px;
  }

  .icon_crud{
   margin: 0px, 5px, 0px, 5px;
  }
</style>