<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row justify-content-center">
                <div class="form col-8">
                    <div>
                        <h2>Data Entry</h2>
                        <div class="d-inline-block col">
                            <div class="form-group">
                                <label for="route">Select Routes</label>
                                <select class="form-control" id="route">
                                    <option>Null</option>
                                    <option>Routes1</option>
                                    <option>Routes2</option>
                                    <option>Routes3</option>
                                    <option>Routes4</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="route">Select Segment</label>
                                <select class="form-control" id="route">
                                    <option>Null</option>
                                    <option>Segment1</option>
                                    <option>Segment2</option>
                                    <option>Segment3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './layout/Navbar.vue'

export default {
    name: 'DataEntry',
    components: {
        Navbar
    }
}
</script>

<style scoped>
.form {
    top: 20vh;
}
</style>