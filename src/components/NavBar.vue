<template>
    <div class="nav-bar">
        <img class="logo" alt="Cineseek logo" src="../assets/cineseek.svg" />
        <input class="search-input" placeholder="Search" /> 
        <button class="search-button" role="submit">SEEK</button>
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
    width: 13rem;
    padding: 1rem;
    display: flex;
    margin: auto;
    padding: 2rem;
}

.search-input {
    color: white;
    background-color: #666;
    opacity: 30%;
    margin-right: 1rem;
    height: 2rem;
    border-radius: .5rem;
    border: none;
}
</style>