<template>
    <div class="nav-bar">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
        <input class="search-input" placeholder="Search" /> 
        <button class="search-button" role="submit">Go</button>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.nav-bar {
    background-color: black;
    height: 100vh;
    width: 20rem;
    position: fixed;
    margin: 0;
}

.logo {
    height: 75px;
    padding: 1rem;
    display: flex;
    margin: auto;
}

.search-input {
    color: white;
}
</style>