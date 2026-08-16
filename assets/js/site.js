/* Proof Point Maths - all site JS. Small on purpose. */

// current year in the footer
var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// mobile menu
var t = document.getElementById('navToggle'), n = document.getElementById('nav');
if (t && n) {
  t.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open);
  });
  n.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') n.classList.remove('open');
  });
}

// enquiry form builds a WhatsApp message. Number comes from _data/contact.yml
var wa = document.getElementById('waBtn');
if (wa) {
  wa.addEventListener('click', function () {
    var num   = wa.getAttribute('data-wa');
    var name  = (document.getElementById('f-name').value || 'Parent');
    var cls   = document.getElementById('f-class').value;
    var board = document.getElementById('f-board').value;
    var msg   = (document.getElementById('f-msg').value || 'Would like to book the free diagnostic class.');
    var text  = 'Hi Proof Point Maths.\n\nName: ' + name +
                '\nClass: ' + cls +
                '\nBoard: ' + board +
                '\nIssue: ' + msg;
    wa.href = 'https://wa.me/' + num + '?text=' + encodeURIComponent(text);
  });
}
