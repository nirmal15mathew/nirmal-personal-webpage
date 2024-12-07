<script>
    import { onMount } from "svelte";
    // import { Renderer } from "./animation"

    /** @type {HTMLCanvasElement}*/
    let canvas;
    /** @type {CanvasRenderingContext2D | null}*/
    let ctx;

    /** @type {Number[]} */
    let offsetWave = []
    const gap = 30;
    onMount(() => {
        ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (ctx != null) {
            drawLogo(ctx);
            draw();
        }
    });
    const prefersDarkColorScheme = () =>
        window &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    /**
     *
     * @param ctx {CanvasRenderingContext2D}
     */
    function drawLogo(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#171219";
        

        ctx.moveTo(20, 40);
        ctx.lineTo(40, 20);
        ctx.lineTo(40, 40);
        ctx.lineTo(20, 60);
        ctx.fill();
    }
    /**
     *
     * @param ctx {CanvasRenderingContext2D}
     * @param x {number}
     * @param y {number}
     */
    function drawPoint(ctx, x, y) {
        ctx.fillRect(x, y, 2, 2);
    }
    /**
     *
     * @param ctx {CanvasRenderingContext2D}
     */

     function update(delta) {
        
        for (let i = 0; i < window.innerWidth; i += gap) {
            offsetWave[i] = Math.sin(i / 40 + delta / 10)*5;
        }
     }

    let delta = 0;
    function draw() {
        ctx.fillStyle = "#627C85";
        delta = delta + 0.1
        ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight)
        drawLogo(ctx)
        for (let i = 0; i < window.innerWidth; i += gap) {
            for (let j = 0; j < window.innerHeight; j += gap) {
                drawPoint(ctx, i + offsetWave[i], j + offsetWave[i]);
            }
            update(delta)
        }
        requestAnimationFrame(draw);
    }
</script>

<canvas bind:this={canvas} class="fixed top-0 left-0"></canvas>
