
// One Script to rule them all, One Script to find them,
// One Script to bring them all and in the HTML bind them

var showThem = function () {

  // rule Them
  var doc             = document,
      style           = doc.createElement('style'),
      tagsToHighlight = ('h1 h2 h3 h4 h5 h6 h7 a p div span img blockquote form input strong em i b u strong em code pre section article footer header nav aside').split(' '),
      styleToApply    = 'font-size:.7em;padding:1px 3px;vertical-align:middle;opacity:.5;border-radius:5px;color:#A00;background:#FFF;}',
      styleInner      = '',
      i;

  // find Them
  for (i in tagsToHighlight) {
    styleInner += tagsToHighlight[i] + ':before{content:\42\\003c ' + tagsToHighlight[i] + '\\003e\42;' + styleToApply;
    styleInner += tagsToHighlight[i] + ':after{content:\42\\003c/' + tagsToHighlight[i] + '\\003e\42;' + styleToApply;
  }

  // bind Them
  style.innerHTML = styleInner;
  doc.head.appendChild(style);

};
