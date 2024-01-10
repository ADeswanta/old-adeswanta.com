{{-- Success is as dangerous as failure. --}}
<footer x-data="{ year: new Date().getFullYear() }">
    <livewire:components.word-clock />
    <div class="info">
        <span>Follow me on social media:</span>
        <span class="social-media">
            <a href="https://twitter.com/adeswanta08"><button>@svg('images/twitter.svg')</button></a>
            <a href="https://mastodon.social/@adeswanta"><button>@svg('images/mastodon.svg')</button></a>
            <a href="https://www.instagram.com/adeswanta.08/"><button>@svg('images/instagram.svg')</button></a>
            <a href="https://github.com/ADeswanta"><button>@svg('images/github.svg')</button></a>
            <a href="https://www.figma.com/@adeswanta08"><button>@svg('images/figma.svg')</button></a>
            <a href="https://www.youtube.com/@ADeswanta"><button>@svg('images/youtube.svg')</button></a>
        </span>
        <span class='dim'>&copy; ADeswanta, <span x-text="year"></span></span>
    </div>
</footer>
