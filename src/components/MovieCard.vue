<template>
    <div class="card-container">
        <h2>{{ movie.title }}</h2>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
        movie: { type: Object, required: true}
    }
}
</script>
<style lang="scss">
    .card-container {
        background-color: darkgray;
        width: 18rem;
        height: 400px;
        margin: 1rem 0 0 1rem;
    }
</style>