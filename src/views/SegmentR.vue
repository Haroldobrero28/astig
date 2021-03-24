<template>
  <div>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <Navbar />
    <div class="awit"></div>
    <div class="liquid-container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h3 class="text-info">Registered Segments</h3>
        </div>
        <div class="col-lg-6">
          <button class="btn btn-info float-right" @click="showAddModal = true">
            <i class="fas fa-globe"></i>&nbsp;&nbsp;Add Segments</button
          ><br />
        </div>
      </div>

      <div id="overlay" v-if="showAddModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add New Routes</h4>
              <button type="button" class="close" @click="showAddModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <form action="#" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control form-control-lg"
                    placeholder="Origin"
                  />
                </div>
                <br />

                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="Destination"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="TRAVEL ID NUMBER"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="ROUTE NUMBER"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="SEGMENT NUMBER"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="ROUTE TYPE"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="DISTANCE (KM)"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="ROAD TYPE"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="TOPOGRAPHICAL"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="MODE OF TRAVEL"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="DURATION TRAVEL (MINS)"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="FREQUENCY OF TRIPS (IN A DAY/WEEK)"
                  />
                </div>
                <br />
                <div class="form-group">
                  <input
                    type="text"
                    name="name1"
                    class="form-control form-control-lg"
                    placeholder="FARE (ONE WAY)"
                  />
                </div>
                <br />

                <div class="form-group">
                  <button
                    class="btn btn-info btn-block btn-lg"
                    @click="showAddModal = false"
                  >
                    Add New Routes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container-fluid">
        <div class="row bg-dark">
          <div class="col-lg-12">
            <p
              class="text-center text-light display-4 pt-2"
              style="font-size: 25px"
            >
              Crud Segments
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <table class="table table-bordered table-striped">
            <thead>
              <tr class="text-center bg-info text-light">
                <th>ID</th>
                <th>ORIGIN</th>
                <th>DESTINATION</th>
                <th>ROUTE NUMBER</th>
                <th>SEGMENT NUMBER</th>
                <th>ROUTE TYPE</th>
                <th>DISTANCE (KM)</th>
                <th>ROAD TYPE</th>
                <th>TOPOGRAPHICAL</th>
                <th>MODE OF TRAVEL</th>
                <th>DURATION TRAVEL (MINS)</th>
                <th>FREQUENCY OF TRIPS (IN A DAY/WEEK)</th>
                <th>FARE (ONE WAY)</th>
                <th>TRAVEL ID NUMBER</th>

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
                <td>City Hall</td>
                <td>Bongao</td>
                <td>City Hall</td>
                <td>Bongao</td>
                <td>City Hall</td>
                <td>Bongao</td>
                <td>City Hall</td>
                <td>Bongao</td>
                <td>City Hall</td>
                <td>Bongao</td>
                <td>City Hall</td>

                <td>
                  <a href="#" class="text-success" @click="showEditModal = true"
                    ><i class="fas fa-eye"></i
                  ></a>
                </td>
                <td>
                  <a href="#" class="text-success" @click="showEditModal = true"
                    ><i class="fas fa-edit"></i
                  ></a>
                </td>
                <td>
                  <a
                    href="#"
                    class="text-danger"
                    @click="showDeleteModal = true"
                    ><i class="fas fa-trash-alt"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  
</template>


	<script>
import Navbar from "./layout/Navbar";
export default {
  name: "SegmentR",
  components: {
    Navbar,
  },
	
}
</script>

<style scoped>
.awit {
  margin: 80px;
}
</style>	