<script>
    import BackgroundCanvas from "$lib/BackgroundCanvas.svelte";
    import Sidebar from "$lib/Sidebar.svelte";
    import Footer from "$lib/Footer.svelte";
import "../app.css"
    // let ctx = document.getElementById('cnv')?.getContext('2d')
</script>

<div class="bg-neutral-100">
    <BackgroundCanvas />
    <main class="w-screen h-screen p-16 grid grid-rows-layout relative z-50">
        <div class="grid grid-cols-layout w-full justify-center">
            <slot></slot>
            <Sidebar />
        </div>
        <Footer></Footer>
    </main>
</div>
