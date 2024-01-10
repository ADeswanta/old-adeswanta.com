{{-- Stop trying to control. --}}
{{-- <div class="header-wrapper">
    <div class="greeting-spacer"></div> --}}
    <header>
        <a id="logo-link" href="/" wire:navigate>
            {{-- {!! file_get_contents('images/logo.svg') !!} --}}
            @svg('images/logo.svg', 'logo')
        </a>
        <span class="spacer"></span>
        <nav>
            <a href="/projects" wire:navigate>Projects</a>
            <a href="/gallery" wire:navigate>Gallery</a>
            <a href="/feeds" wire:navigate>Feeds</a>
            <a href="/about" wire:navigate>About Me</a>
        </nav>
        <livewire:components.theme-switcher />
    </header>
{{-- </div> --}}

@script
<script>
    new IntersectionObserver(
        ([e]) => e.target.classList.toggle('sticked', e.intersectionRatio < 1),
        {
            threshold: [1],
            rootMargin: '-120px 0px 0px 0px'
        }
    ).observe(document.querySelector('header'));
</script>
@endscript
