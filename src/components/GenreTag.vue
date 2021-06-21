<template>
    <div>
        <div class="genre-tag" v-for="(genre, index) in genres" :key="genre.index">
            <p :key="index">{{ genre.title }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        genres: { type: Array, required: true }
    }
};
</script>
<style scoped lang="scss">
.genre-tag {
    background-color: #eeeeee;
    height: 1.75rem;
    width: 6rem;
    margin: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    p {
        font-weight: bold;
    }
}
</style>
