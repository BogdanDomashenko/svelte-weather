<script lang="ts">
  import { kalvinToCelsius } from "../../utils";
  
  export let temp: number;
  export let title: string | undefined = undefined;
</script>

<main>
  {#if title}
    <span>{title}</span>
  {/if}
  <div class="block">
    <span>{ kalvinToCelsius(temp) }°C</span>
  </div>
</main>

<style scoped>
  .block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    background: #9ED2C6;
    margin: 0 auto;
  }
</style>