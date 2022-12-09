<template>

    <div class="card text-center p-5">

        <h5 class="text-white">{{ character.name }}</h5>

        <div class="text-secondary">
            <span class="text-white">Height:</span>
            <span> {{ character.height }} cm</span>
        </div>

        <div>
            <span class="text-white">Genere:</span>
            <span class="text-secondary">{{ character.gender }}</span>
        </div>

    </div>

</template>


<script>
export default {
    name: "SingleCharacter",
    props: {
        /**
         * Oggetto che rappresenta un singolo personaggio
         * 
         * @property {number} id
         * @property {string} name
         * @property {string} status
         * @property {string} species
         * @property {string} type
         * @property {string} gender
         * @property {object} origin
         * @property {object} location
         * @property {string} image
         * @property {string} episode
         * @property {array}  url
         * @property {string} created
        */
        character: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
        };
    },

    methods: {

    }

}


</script>