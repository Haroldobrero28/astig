<template>
  <div>
    <section class="section_1 container-fluid fixed-top p-0">
      <header>
        <div>
          <b-navbar class="navbar-custom" toggleable="light" type="dark">
            <b-navbar-brand>ASTIG</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="/dataentry">Data Entry</b-nav-item>
                  <b-nav-item href="/fileupload">File Upload</b-nav-item>
                </b-navbar-nav>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template #button-content>
                    <em>User</em>
                  </template>
                  <b-dropdown-item href="/EditAccount"
                    >Edit Account</b-dropdown-item
                  >
                  <b-dropdown-item href="/login">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </header>
    </section>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-custom {
  background-color: #2692FD;
}

</style>>
