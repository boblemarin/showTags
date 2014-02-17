function st () {

  // One Script to rule them all, One Script to find them,
  // One Script to bring them all and in the HTML bind them

  // rule Them
  var doc             = document,
      style           = doc.createElement('style'),
      tagsToHighlight = ('h1 h2 h3 h4 h5 h6 h7 a p div span img blockquote form input strong em i b u strong em code pre section article footer header nav aside').split(' '),
      commonStyle     = '{font-size:10px;font-family:monospace;padding:1px 2px;vertical-align:middle;opacity:.4;border-radius:5px;color:#A00;background:rgba(255,255,255,.7);position:absolute;}',
      hoverStyle      = '{position:relative;opacity:.8}',
      styleInner      = '',
      styleInnerB     = '',
      styleInnerA     = '',
      styleInnerH     = '',
      glue            = '',
      i, tagTmp;

  // find Them
  for (i in tagsToHighlight) {
    tagTmp      = tagsToHighlight[i];

    styleInner += tagTmp + ':before{content:\42\\003c ' + tagTmp + '\\003e\42;}';
    styleInner += tagTmp + ':after{content:\42\\003c/' +tagTmp + '\\003e\42;}';

    styleInnerB += glue + tagTmp + ':before';
    styleInnerA += glue + tagTmp + ':after';
    styleInnerH += glue + tagTmp + ':hover:after, ' + tagTmp + ':hover:before';

    glue = ', ';
  }

  styleInner += styleInnerB + commonStyle;
  styleInner += styleInnerA + commonStyle;
  styleInner += styleInnerH + hoverStyle;

  // bind Them
  style.innerHTML = styleInner;
  doc.head.appendChild(style);

};
st();
