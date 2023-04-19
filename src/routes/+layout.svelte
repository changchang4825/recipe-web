<script>
    import "../app.css";
</script>

<nav class="bg-white border-green-400 dark:bg-green-900">
    <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
        <a href="../" class="flex items-center">
            <img
                src="/images/1548004933.png"
                class="h-8 mr-3"
                alt=""
            />
            <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Food Helper</span
            >
        </a>
    </div>
</nav>

<slot />
