<script>
    import git from "$lib/assets/git.svg"
    import mail from "$lib/assets/mail.svg"
    import inst from "$lib/assets/inst.svg"

    import Snackbar from "./Snackbar.svelte"

    let showGit = false
    let showInst = false
    let showMail = false
    function hoverGit() {
        showGit = !showGit
    }
    function hoverInst() {
        showInst = !showInst
    }
    function hoverMail() {
        showMail = !showMail
    }
</script>

<!-- Footer -->
<footer class="flex items-end justify-center gap-8">
    <a href="https://github.com/nirmal15mathew" target="_blank" on:mouseenter={hoverGit} on:mouseleave={hoverGit}>
        <span>
            <img src={git} height="30px" width="30px" alt="github" />
        </span>
        <Snackbar shown={showGit}>github.com/nirmal15mathew</Snackbar>
    </a>
    <a href="https://instagram.com/nirmalthomasmathew" target="_blank" on:mouseenter={hoverInst} on:mouseleave={hoverInst}>
        <span>
            <img src={inst} height="30px" width="30px" alt="instagram"/>
        </span>
        <Snackbar shown={showInst}>@nirmalthomasmathew</Snackbar>
    </a>
    <a href="malto:nirmal13mathew@gmail.com" target="_blank" on:mouseenter={hoverMail} on:mouseleave={hoverMail}>
        <span>
            <img src={mail} height="32px" width="32px" alt="gmail"/>
        </span>
        <Snackbar shown={showMail}>nirmal13mathew@gmail.com</Snackbar>
    </a>
</footer>
