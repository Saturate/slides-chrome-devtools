// Custom JS code can go here

// You can customize Reveal options:
Reveal.configure({
  controls: false,
  slideNumber: true
  });


// (an outdated version of) http://headjs.com/ is also loaded
head.ready("lodash.min.js", function () {
  // LoDash can be used from here
});
head.ready("jquery.min.js", function () {
  var times = 0;
  jQuery('.jquery-click').on('click', function(event) {
    event.preventDefault();
    times = times + 1;
    jQuery(this).text('Clicked it ' + times + ' times!')
  });
});
head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");
head.js('https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js');

/*
  This will block the link, debug it!
*/
document.querySelector('.super-general-class').addEventListener(
    'click', function reallyEvilFunction(event) {
        event.preventDefault();
        // event.initEvent("click", true, false);
        return 'HAHA!';
    }, false
);

/*
  Multiline Edit Example.

  Just as you know it from Sublime Text or Atom.
  Just hold CTRL/CMD and Click!
*/
function demoForMultilineEdit () {
  var somethingReallyNice;
  var somethingReallyAwesome;
  var somethingReallyCool;
  var somethingReallyPerfect;


  return 'This example is really bad... sorry.';
}

/*
  Debugger example
*/
function namingThingsIsReallyHardDebugger(name) {
    var hello = 'bonjour';
    debugger;
    return hello + ' ' + name;
}

function namingThingsIsReallyHardConsole(name) {
    var hello = 'bonjour';
    console.log(
        'logged that the name was %s, cool!',
        name
    );
    return hello + ' ' + name;
}

function whereDidMyClocureScopeGo() {
    var x = 1, y = 2, z = 3;
    (function() {
        // In here the debugger wont have access to the
        debugger;
        x++;
    })();
}
