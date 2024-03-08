<script>
    export let shown = false
</script>
<style>
    .static-style {
     @apply fixed bg-black text-white rounded transition-all mx-auto p-2 text-xs left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-lg delay-150;
    }
    .shown {
        @apply bottom-0;
    }
    .not-shown {
        @apply -bottom-20;
    }
</style>
<div class={shown ? "shown static-style" : "not-shown static-style"}>
    <slot></slot>
</div>