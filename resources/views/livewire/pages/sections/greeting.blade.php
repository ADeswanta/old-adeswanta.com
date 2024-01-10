{{-- The best athlete wants his opponent at his best. --}}
<div id="welcome" style="@if(!$isInRoot) display: none @endif">
    <div class="wrapper">
        {{-- <Logo id="logo" class="accent" width={72} height={48}/> --}}
        @svg('images/logo.svg', 'logo accent')
        <h2 class="no-margin accent">I’m <span class="bold">Advendra Deswanta</span></h2>
        <h5 class="no-margin accent dim">a
            <span x-text="getCurrentYear()"></span>yo
            Designer & Developer
        </h5>
    </div>

    <script>
        function getCurrentYear() {
            let birth = new Date("2005/12/08 19:45:00");
            let now = new Date();

            let age = new Date(now.getTime() - birth.getTime());
            return Math.abs(age.getUTCFullYear() - 1970);
        }
    </script>
</div>
