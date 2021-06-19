<template>
    <div class="nav-bar">
        <img class="logo" alt="Cineseek logo" src="../assets/cineseek.svg" />
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.nav-bar {
    background-color: black;
    width: 100vw;
    margin: 0;
}

.logo {
    width: 13rem;
    margin: auto;
    padding: 2rem;
    display: block;
    border-bottom: #666 1px solid;
    @media (min-width: 415px) {
        display: flex;
    }
}
</style>