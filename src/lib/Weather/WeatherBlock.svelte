<script lang="ts">
  import type IMain from "src/types/Main.interface";
  import { kalvinToCelsius } from "../../utils";
  import Temperature from "../Temperature/Temperature.svelte";

 export let city: string;
 export let main: IMain;

  let inputCity = city;

  const handleSearchClick = () => {
    
  }
</script>

<main>
   <div class="search">
    <input bind:value={inputCity} placeholder="City" />
    <button class="button" on:click={handleSearchClick}>Search</button></div>
   <div class="temperature">
    <Temperature temp={main.temp} />
    <Temperature title="feels like" temp={main.feels_like} />
    <Temperature title="min" temp={main.temp_min} />
    <Temperature title="max" temp={main.temp_max} />
   </div>
</main>

<style scoped>
  .search {
    display: flex;
    gap: 20px;
  }

  .temperature {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 20px;
    margin-top: 40px;
  }

  .button {
    padding: 21px 10px;
    background: #9ED2C6;
    color: #213547;
  }
</style>