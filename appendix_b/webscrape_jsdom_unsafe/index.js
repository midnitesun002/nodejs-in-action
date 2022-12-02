const jsdom = require('jsdom');
const jquery = require('jquery');

const html = `
<div class="book">
    <h2></h2>
    <h3></h3>
    <script>
    document.querySelector('h2').innerHTML = 'Catch-22';
    document.querySelector('h3').innerHTML = 'Joseph Heller';
    </script>
</div>`;

const { window } = new jsdom.JSDOM(html, { runScripts: 'dangerously' });

const $ = jquery(window);
$('.book').each(function () {
    const $el = $(this);
    console.log({
        title: $el.find('h2').text(),
        author: $el.find('h3').text()
    });
});