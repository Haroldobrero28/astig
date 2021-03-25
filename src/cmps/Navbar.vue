<template>
  <div>
    
    <!--<div v-if="!loggedIn"></div> <div v-else>-->
    <section class="section_1 container-fluid fixed-top p-0">
      <header>
        <div>
          <b-navbar
            class="navbar-custom"
            toggleable="lg"
            type="dark"
            variant="primary"
          >
            <router-link
              class="navbar-brand"
              :to="loggedIn ? '/' : '/signin'"
              >{{ brand }}</router-link
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item to="/">Data Entry</b-nav-item>
                  <b-nav-item to="/segmentr">Segment</b-nav-item>
                  <b-nav-item to="/fileupload">File Upload</b-nav-item>
                  <b-nav-item to="/signup">Register Account</b-nav-item>
                </b-navbar-nav>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template #button-content>
                    <em>User</em>
                  </template>
                  <b-dropdown-item to="/editaccount"
                    >Edit Account</b-dropdown-item
                  >
                  <b-dropdown-item href="#" @click.prevent="logout"
                    >Sign Out</b-dropdown-item
                  >
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </header>
    </section>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: ["loggedIn"],
  data() {
    return {
      brand: process.env.VUE_APP_APPNAME,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {},
};
</script>

<style scoped>
.navbar-custom {
  background-color: #2692fd;
}
</style>
