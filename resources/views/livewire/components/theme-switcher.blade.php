{{-- If your happiness depends on money, you will never be happy with yourself. --}}
<span class="theme-switcher" x-data="{ mode: $persist('auto').as('mode') }" x-init="$wire.toggle(mode); toggle(mode)">
    <button x-on:click="mode = await $wire.toggle('light'); toggle(mode)" class="flat {{ $mode == 'light' ? "active" : "" }}">
        <livewire:components.icon name="wb_sunny" />
    </button>
    <button x-on:click="mode = await $wire.toggle('invert'); toggle(mode)" class="flat {{ $mode == 'invert' ? "active" : "" }}">
        <livewire:components.icon name="contrast" />
    </button>
    <button x-on:click="mode = await $wire.toggle('dark'); toggle(mode)" class="flat {{ $mode == 'dark' ? "active" : "" }}">
        <livewire:components.icon name="dark_mode" />
    </button>

    <script>
        var root = document.querySelector(":root");

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            let mode = localStorage.getItem("mode");
            if (mode == '"auto"') {
                root.classList.remove("light", "dark", "invert");
                root.classList.add(event.matches ? "dark" : "light");
            }
        });

        function toggle(mode) {
            root.classList.remove("light", "dark", "invert");
            if (mode != "auto") root.classList.add(mode);
        }
    </script>
</span>
