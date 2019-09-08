<template>
  <div id="app">
    <Navbar />
      <div class="container">
          <div class="section">
                <FavoriteThingsList/>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from './components/NavBar';
import FavoriteThingsList from './components/FavoriteThingsList';

export default {
  name: 'app',
  components: {
      Navbar,
      FavoriteThingsList

  }
}
</script>

