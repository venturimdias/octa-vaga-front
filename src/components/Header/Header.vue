<template>
    <header>
        <router-link to="/"><img alt="Vue logo" src="../../assets/octadesk.svg"></router-link>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/aplicacao">Aplicação</router-link>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    padding:1rem;
    display: flex;
    align-items:center;
}
a{
    color:var(--black-400);
    padding:5px;
    margin-left:10px;
}
@media(max-width:540px){
    a{
        margin-left:0;
        
        img{
            width:120px;
        }
    }
}
</style>