<!-- //** FallBack Methods  **// -->

<!-- Jquery CDN-->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
		integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
		crossorigin="anonymous">
</script>
<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous">
</script>
<!-- Bootstrap Element -->
<div id="bootstrapTest" class="hidden"></div>

<script type="text/javascript">
    // jQuery Fallback
    window.jQuery || document.write('<script src="scripts/js_fallback/jquery-3.4.1.min.js"><\/script>');
</script>
<script type="text/javascript">   
    // Bootstrap JS Local Fallback 
    if(typeof($.fn.modal) === 'undefined')
        document.write('<script src="scripts/js_fallback/bootstrap.min.js"><\/script>');
</script>
<script type="text/javascript">
    // Bootstrap CSS Fallback
    $(()=> {
        if($('#bootstrapTest').is(':visible')){
            $('head')
            .prepend(
                $('<link/>')
                .attr({'rel':'stylesheet', 'href':'css/css_fallback/bootstrap.min.css'})
            );
        }
    }); 
</script>
<script src="scripts/script.js"></script>