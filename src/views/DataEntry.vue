<template>
<div>
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
					<button class="btn btn-info float-right" @click="showAddModal=true"><i class="fas fa-route"></i>&nbsp;&nbsp;Add Routes</button><tab>&nbsp;&nbsp;</tab>
					<button class="btn btn-info float-right"><a href="/segmentr" style="text-decoration: none;"><i class="fas fa-globe"></i>&nbsp;&nbsp;View Segments</a></button>
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
					<th>Read</th>
					<th>Edit</th>
					<th>Delete</th>
					
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td>1</td>
					<td>City Hall</td>
					<td>Bongao</td>
					<td><a href="#" class="text-success" @click="showEditModal=true"><i class="fas fa-eye"></i></a></td>
					<td><a href="#" class="text-success" @click="showEditModal=true"><i class="fas fa-edit"></i></a></td>
					<td><a href="#" class="text-danger" @click="showDeleteModal=true"><i class="fas fa-trash-alt"></i></a></td>

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