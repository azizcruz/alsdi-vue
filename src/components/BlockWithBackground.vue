<template>
    <div class="block block-image block-with-background-color d-flex flex-column justify-content-center align-items-center h-100">
        <div class="overlay"></div>
        <div v-if="data.bgImage">
            <div></div>
        </div>
        <div v-else>
            <h1 :style="{color: data.color}">{{ data.title }}</h1>
            <p>{{ data.text }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name:"blockWithBackground",
    props: [
        'bgColor',
        'data',
        'image'
    ],
}
</script>

<style lang="scss">
    .block {
        color: #fff;
        padding: 60px;

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .2);
            opacity: 0;
        }

        &:hover {
                .overlay {
                    opacity: 1;
                    transition: opacity .3s ease-in-out;
                    cursor: pointer;
                }
            }
    }
    
</style>
