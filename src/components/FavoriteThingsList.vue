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
import FavoriteThingsService from '../services/FavoriteThingsService';

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
    mounted (){
        const response = FavoriteThingsService.getFavoriteThings().then(response => {
            this.ThingsList = response.data;
        })
    },
    methods:{
        deleteFavorite(title){
            const indexOfFavoriteThings = this.ThingsList.indexOf(name);
            this.ThingsList.splice(indexOfFavoriteThings, 1);
        }
    }
}
</script>
