<script lang="ts">
  import { onMount } from "svelte";
  import { WeatherService } from "../../services";
  import WeatherBlock from "./WeatherBlock.svelte";

  let weather: any;

  onMount(async () => {
    weather = await WeatherService.getCurrent();
    console.log(weather);
  });
</script>

<main>
  {#if weather}
    <WeatherBlock city={weather.name} main={weather.main} />
  {/if}
</main>

<style></style>