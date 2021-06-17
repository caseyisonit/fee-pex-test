<template>
    <div class="nav-bar">
        <img class="logo" alt="Cineseek logo" src="../assets/cineseek.svg" />
        <div class="search-container">
        <input class="search-input" placeholder="Search" /> 
        <button class="search-button" role="submit">SEEK</button>
        </div>
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
    border-bottom: #666 1px solid;
}

.search-container {
    padding: 2rem 1.5rem;
    display: flex;
}

.search-input {
    color: white;
    background-color: #333;
    margin-right: 1rem;
    height: 2rem;
    border: none;
    flex-grow: 2;
    &::placeholder {
        color: #eee;
        opacity: 100%;
        padding-left: .5rem;
    }
}

.search-button {
    height: 2rem;
    background-color: #ccc;
    border: none;
    padding: 0 1rem;
    
    &:hover {
        background-color: yellow;
    }
}
</style>