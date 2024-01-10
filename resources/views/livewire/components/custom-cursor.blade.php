{{-- Nothing in the world is as soft and yielding as water. --}}
<div class="cursorContainer">
    <span class="cursor"></span>
</div>

@script
<script>
    const checkCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        let cursor = document.querySelector('.cursorContainer .cursor');

        if (cursor) {
            cursor.style.top = `${mouseY}px`;
            cursor.style.left = `${mouseX}px`;

            cursor.className = 'cursor';
            cursor.style.width = '';
            cursor.style.height = '';
            cursor.style.transform = "";

            if (e.buttons == 1) {
                cursor.classList.add("click");
            } else {
                cursor.classList.remove("click");
            }

            let target = e.target;
            if (target) {
                if (target.nodeName == "A") {
                    if (!cursor.classList.contains('link'))
                        cursor.classList.add('link');

                    let elm = target;
                    let boundingRect = elm.getBoundingClientRect();

                    let halfSize = {
                        width: parseFloat(boundingRect.width) / 2,
                        height: parseFloat(boundingRect.height) / 2
                    };
                    let posEndSize = {
                        x: halfSize.width + parseFloat(boundingRect.left),
                        y: halfSize.height + parseFloat(boundingRect.top),
                    }
                    let diff = {
                        x: parseFloat(mouseX) - posEndSize.x,
                        y: parseFloat(mouseY) - posEndSize.y,
                    }

                    cursor.style.top = `${boundingRect.top + boundingRect.height + (diff.y / 5)}px`
                    cursor.style.left = `${boundingRect.left + halfSize.width + (diff.x / 5)}px`
                    cursor.style.width = `${boundingRect.width * .75}px`
                } else if (
                    target.nodeName == "BUTTON" ||
                    ( target.parentElement != null && target.parentElement.nodeName == "BUTTON" )
                ) {
                    if (!cursor.classList.contains('button'))
                        cursor.classList.add('button');

                    let elm = target.nodeName == "BUTTON" ? target : target.parentElement ?? target;
                    let boundingRect = elm.getBoundingClientRect();

                    let halfSize = {
                        width: parseFloat(boundingRect.width) / 2,
                        height: parseFloat(boundingRect.height) / 2
                    };
                    let posEndSize = {
                        x: halfSize.width + parseFloat(boundingRect.left),
                        y: halfSize.height + parseFloat(boundingRect.top),
                    }
                    let diff = {
                        x: parseFloat(mouseX) - posEndSize.x,
                        y: parseFloat(mouseY) - posEndSize.y,
                    }

                    if (cursor.style.transform === "")
                        cursor.style.transform = `translate(${diff.x * -1}px, ${diff.y * -1}px))`;

                    cursor.style.top = `${boundingRect.top + (diff.y / 5)}px`;
                    cursor.style.left = `${boundingRect.left  + (diff.x / 5)}px`;
                    cursor.style.width = `${boundingRect.width}px`;
                    cursor.style.height = `${boundingRect.height}px`;

                    cursor.style.setProperty("--roundness", getComputedStyle(elm).borderRadius);
                } else if (target.nodeName == "SPAN") {
                    if (
                        target.className.includes("textHover") ||
                        target.childNodes.length == 1 && target.childNodes[0].nodeName == "#text"
                    ) {
                        if (!cursor.classList.contains('text'))
                            cursor.classList.add('text');
                    }
                } else {
                    if (e.buttons != 1) {
                        cursor.className = 'cursor';
                        cursor.style.width = '';
                        cursor.style.height = '';
                        cursor.style.transform = "";
                    }
                }
            }
        }
    };

    window.onpointermove = checkCursor;
    window.onpointerdown = checkCursor;
    window.onpointerup = checkCursor;

    let body = document.body;

    body.onmouseenter = () => body.classList.add('cursorEnter');
    body.onmousemove = () => {
        if (!body.classList.contains('cursorEnter'))
            body.classList.add('cursorEnter')
    };
    body.onmouseleave = () => body.classList.remove('cursorEnter');
</script>
@endscript
