<template>
    <div class="nav-bar">
        <img class="logo" alt="Cineseek logo" src="../assets/cineseek.svg" />
        <div class="search-container">
            <input class="search-input" placeholder="Seek" />
            <button class="search-button" role="submit">
                <font-awesome-icon icon="search" />
            </button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.nav-bar {
    background-color: black;
    width: 100vw;
    margin: 0;
    @media (min-width: 415px) {
        height: 100vh;
        width: 20rem;
        position: fixed;
    }
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

.search-container {
    padding: 1rem;
    display: block;
    @media (min-width: 415px) {
        padding: 2rem 1.5rem;
        display: flex;
    }
}

.search-input {
    color: white;
    background-color: #333;
    margin-right: 1rem;
    padding-left: .5rem;
    height: 2rem;
    border: none;
    flex-grow: 2;
    &::placeholder {
        color: #cccccc;
        opacity: 100%;
    }
    &:focus-visible {
        outline-color: white;
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