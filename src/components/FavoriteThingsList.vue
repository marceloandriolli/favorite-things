<template>
    <div class="row">
        <div class="col s8 offset-s2 items">
            <ul v-if="ThingsList.length > 0" class="collection">
                <FavoriteThing v-for="item in ThingsList"
                               v-on:deleteclicked="deleteFavorite($event)"
                               :title="item.title"
                               :description="item.description"
                               :category="item.category"/>
            </ul>
        </div>
    </div>
</template>

<script>
import FavoriteThing from './FavoriteThing';
export default {
    name: 'FavoriteThingsList',
    components: {
        FavoriteThing,
    },
    data(){
        return {
            ThingsList: []
        }
    },
    methods:{
        deleteFavorite(title){
            const indexOfFavoriteThings = this.ThingsList.indexOf(name);
            this.ThingsList.splice(indexOfFavoriteThings, 1);
        }
    }
}
</script>
