<template>
<div>
    <div class="genre-tag-container" v-for="(genre, index) in genres" :key="genre.index">
        <p :key="index">{{ genre.title }}</p>
    </div>
</div>
</template>
<script>
import Vue from "vue"; 

export default {
    props: { 
        genres: { type: Array, required: true } 
    } 
}
</script>
<style lang="scss">
    .genre-tag-container {
        background-color: #eeeeee;
        height: 1.5rem;
        width: 6rem;
        margin: 1rem;
    }
</style>