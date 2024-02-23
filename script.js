(function() {

    window.addEventListener('DOMContentLoaded', function() {
        let accordion = document.querySelector('.accordion');

        let accordion_section = accordion.querySelector('.accordion-section');
        let accordion_trigger = accordion.querySelector('.accordion-trigger');

        if ( accordion_section.length === 0 || accordion_trigger === 0 ) return;

        accordion_trigger.addEventListener('click', function(e) {
            let is_active = accordion_section.classList.contains('is-active');
            let btn_aria_expanded = this.getAttribute('aria-expanded');
            let btn_text = this.firstElementChild;

            accordion_section.classList.toggle('is-active', !is_active);
            this.setAttribute('aria-expanded', btn_aria_expanded === 'true' ? 'false' : 'true');

            if ( btn_text ) {
                btn_text.textContent = ( btn_aria_expanded === 'true' ) ? 'Read less' : 'Read more';
            }
        });
    });

})();