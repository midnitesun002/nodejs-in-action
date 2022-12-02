const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = `
<div class="book">
    <h2>Catch-22</h2>
    <h3>Joseph Heller</h3>
    <p>A satirical indictment of military madness.</p>
</div>
`;

const dom = new JSDOM(html);
const $ = require('jquery')(dom.window);

$('.book').each(function() {
    var $el = $(this);
    console.log({
        title: $el.find('h2').text(),
        author: $el.find('h3').text(),
        description: $el.find('p').text()
    });
});