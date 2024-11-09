var headerOffset = 100; // This is the offset you're gonna give it. So like. make it slightly bigger than your navbar's height
// This is for links in other pages i think
if (window.location.hash) {
    $('html, body').scrollTop(0);
if ($(window.location.hash).length) {
    var offset = $(window.location.hash).offset().top - headerOffset; // This basically calculates the offset. Like the top of the place u wanna scroll to minus the offset
    $('html, body').animate({ scrollTop: offset }, 600); // and this animates it smoothly
    }
}
// And this is for links on the same page.
$('a[href^="#"][href!="#"]:not(.collapse-link):not(.accordion-title)').on('click', function (event) { // Now here, all of this excludes special links that we got in our code. This specifically englobes every links besides links marked with .collapse-link and .accordion-title. Which are i think Bootstrap elements that collapse. You can remove those specifications if u dont think u'll need them.
event.preventDefault();
var urlHash = $(this).attr('href').split('#')[1];
if (urlHash && $('#' + urlHash).length) {
    $('html,body').stop().animate({ scrollTop: $('#' + urlHash).offset().top - headerOffset }, 600); // And it basically does the same thing as above.
    }
});