<template>
    <li class="collection-item avatar">
        <span class="title"><b>Title</b>: {{ title }}</span>
        <p><b>Description</b>: {{ description }}</p>
        <p><b>Category</b>: {{ category }}</p>
        <a href="#!" class="secondary-content btn-floating btn-small blue lighten-2"><i class="material-icons">delete</i></a>
    </li>
</template>


<script>
export default {
    name: 'FavoriteThing',
    props: ['title', 'description', 'category']
}
</script>