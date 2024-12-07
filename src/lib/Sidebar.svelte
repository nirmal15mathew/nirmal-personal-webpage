<script lang='js'>
  import MenuIcon from "./assets/MenuIcon.svelte";
  import XIcon from "./assets/XIcon.svelte";
  
  let open = false;

  function toggleSidebar() {
    open = !open;
  }

</script>
<div class="flex items-center text-black text-lg">
    <ul class="md:flex flex-col gap-4 cursor-pointer hidden">
        <li
            class="hover:font-semibold transition-all hover:text-lg highlight"
           id="homeBtn"
        >
            <a href="/">Home</a>
        </li>
        <li
            class="hover:font-semibold transition-all hover:text-lg"
            id="abtBtn"
        >
            <a href="/about">About</a>
        </li>
        <li
            class="hover:font-semibold transition-all hover:text-lg"
            id="skillBtn"
        >
            <a href="/skills">Skills</a>
        </li>
        <li
            class="hover:font-semibold transition-all hover:text-lg"
            id="projectsBtn"
        >
            <a href="/projects">Projects</a>
        </li>
    </ul>

    <div class="fixed md:hidden top-0 right-0 p-4 flex items-center justify-center">             
     <button class="text-white fixed top-0 right-0 p-4" on:click={toggleSidebar}>
      {#if open}
         <div class="fixed top-0 right-0 w-screen h-screen bg-neutral-800 bg-opacity-75 flex items-center justify-center">
          <ul class="flex flex-col gap-4 cursor-pointer text-white">
            <li
                class="hover:font-semibold transition-all hover:text-lg highlight"
                id="homeBtn"
            >
                <a href="/">Home</a>
            </li>
            <li
                class="hover:font-semibold transition-all hover:text-lg"
                id="abtBtn"
            >
                <a href="/about">About</a>
            </li>
            <li
                class="hover:font-semibold transition-all hover:text-lg"
                id="skillBtn"
            >
                <a href="/skills">Skills</a>
            </li>
            <li
                class="hover:font-semibold transition-all hover:text-lg"
                id="projectsBtn"
            >
                <a href="/projects">Projects</a>
            </li>
        </ul>
          <span class="fixed top-0 right-0 p-4">
            <XIcon currentColor={'#fff'}></XIcon>
          </span>
        </div>
        {:else}
        <MenuIcon currentColor={'#000'}></MenuIcon>
      {/if}
    </button>  
        </div>
</div>
