var h = require('hyperscript')

var hyperx = require('hyperx')

var hx = hyperx(h)

// write data to filesystem?
var fs = require('fs');



var title = 'hifi test'

var wow = [1,2,3]

var tree = 
hx
`<div>
  <h1 y="ab${1+2}cd">hello ${title}!</h1>
  ${hx`<i>cool</i>`}
  wow
  ${wow.map(function (w) {
    return hx `<b>${w}</b>\n`
  })}
</div>`

fs.writeFile('beep.html', tree.outerHTML, function (err) {
  if (err) throw err;
});

console.log('stdout to console');
console.log(tree.outerHTML)
