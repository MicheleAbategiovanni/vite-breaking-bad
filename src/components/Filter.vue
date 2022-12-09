<template>

    <!-- Select Category -->
    <div class="p-3">
        <select class="rounded-2 p-2" v-model="filters" @change="onSearchClick">
            <option value="r2">R2</option>
            <option value="darth vader">Darth Vader</option>
        </select>
    </div>

</template>

<script>
import { store, fetchCharacters } from "../store";

export default {
    data() {
        return {
            store,
            filters: "",
        }
    },
    emits: ["search"],
    methods: {
        onSearchClick() {

            this.$emit("search",  this.filters );
            console.log("Cliccato")
        }
    }
}


</script>