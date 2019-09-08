<template>
    <div class="row">
        <div class="col s8 offset-s2 items">
            <ul v-if="ThingsList.length > 0" class="collection">
                <FavoriteThing v-for="item in ThingsList"
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
    data(){
        return {
            ThingsList: []
        }
    },
    components: {
        FavoriteThing,
    }
}
</script>
