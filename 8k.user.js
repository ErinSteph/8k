// ==UserScript==
// @name        8k
// @namespace   erin
// @description 8chan.
// @include     *8chan.co*
// @run-at      document-body
// @version     0.11
// @icon        data:image/png;base64,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
// @grant       none
// ==/UserScript==

//throw new Error("8chan sucks!");

function chanK(){
  
  var d, db, h, namespace, $, $$, version;

  d = document;
  db = document.body;
  h = document.getElementsByTagName('head')[0];

  namespace = "8k";
  version = 0.11;

  $ = function(s, p){
    if(!p || p == null){
      p = db;
    }
    return p.querySelector(s);
  };

  $$ = function(s, p){
    if(!p || p == null){
      p = db;
    }
    return p.querySelectorAll(s);
  };

  $.getVal = function(k, v){
    if(typeof(Storage) !=="undefined"){
      if(v == null){
        if(localStorage.getItem(namespace + "." + k) != null){
          return localStorage.getItem(namespace  + "." + k);
        }else{
          return 'undefined';
        }
      }else{
        if(localStorage.getItem(namespace + "." + k) != null){
          return localStorage.getItem(namespace + "." + k);
        }else{
          return v;
        }
      }
    }else{
      return 'storage unavailable';
    }
  };

  $.setVal = function(k, v){
    if(typeof(Storage) !=="undefined"){
      if(v == null){
        return 'undefined';
      }else{
        return localStorage.setItem(namespace  + "." + k, v);
      }
    }else{
      return 'storage unavailable';
    }
  };

  $.delVal = function(k){
    return localStorage.removeItem(namespace + "." + k);
  };

  $.elm = function(t, a, s){
    var e = d.createElement(t);
    if(a){
      for (key in a){
        e.setAttribute(key, a[key]);
      }
    }
    if(s){
      s.appendChild(e);
    }
    return e;
  };

  $.htm = function(s, v){
    if(v == null){
      return s.innerHTML;
    }else{
      s.innerHTML = v;
    }
    return s;
  };

  $.each = function(a, c, e){
    for(var i = 0; i < a.length; i++){
      c(a[i], i);
      if(i == (a.length)-1){
        if(e && e != null){
          return e(a[i], i);
        }else{
          return a;
        }
      }
    }
  };

  $.xhr = function(t, u, i, c, p){
    if(i != null){
      if(t == 'POST'){
        var xd = new FormData();
        for (key in i){
          xd.append(key, i[key]);
        }
      }else{
        xd = '?';
        for (key in i){
          xd += key + '=' + i[key] + '&';
        }
        xd = xd.substring(0, (xd.length-1));
        u += xd;
      }
    }
    var x = new XMLHttpRequest();
    x.open(t, u);
    if(p != null){
      for (key in p){
        x.setRequestHeader(key, p[key]);
      }
    }
    x.onreadystatechange = function(){
      if (x.readyState == 4) {
        return c(x);
      }
    }
    if(t == 'POST' && i != null){
      x.send(xd);
    }else{
      x.send();
    }
  };

  $.JSON = function(s){
    if(typeof s == 'string'){
      return JSON.parse(s);
    }else{
      return JSON.stringify(s);
    }
  };

  $.time = function(t, c, l){
    if(c == false){
      return clearInterval(t);
    }else{
      if(l == true){
        return setInterval(function(){
          c();
        },t);
      }else{
        return setTimeout(function(){
          c();
        },t);
      }
    }
  };
    
    $.val = function(s, v){
            if(!v || v == null){
                    return s.value;
            }else{
                    s.value = v;
            }
            return s;
    };

  $.event = function(t, i, s){
    if (i == null) {
      i = {};
    }
    if (s == null) {
      s = d;
    }
    return s.dispatchEvent(new CustomEvent(t, i));
  };

  $.destroy = function(s){
    return s.parentNode.removeChild(s); 
  };

  $.css = function(s){
    var e = d.createElement('style');
    e.type = 'text/css';
    if (e.styleSheet){
      e.styleSheet.cssText = s;
    } else {
      e.appendChild(d.createTextNode(s));
    }
    h.appendChild(e);
    return e;
  };
  
  /*------------------------------------------*/
  
  var k, w, qr, page, setting;
  
  w = window.location.href;
  k = {};
  qr = {};
  page = {};
  setting = {};
  
  
  k.end = w.split('.co')[1];
  k.proto = window.location.protocol;
  if(k.end.length > 3){ 
    k.board = w.split('8chan.co/')[1].split('/')[0]; 
  }else{ 
    k.board = null; 
  }
  if(w.indexOf('/res/') > 2){ 
    k.thread = w.split('/res/')[1].split('.h')[0]; 
  }else if(w.indexOf('catalog') > 2){ 
    k.thread = 'catalog'; 
  }else{ 
    k.thread = 'index'; 
  }
  
  
  page.prep = function(){
    var scripts = $$('script', h);
    $.each(scripts, function(e, i){
      if(e.src == '/' + k.board + '/main.js'){
        $.destroy(e);
      }
    });
    
  };
  
  /*------------------------------------------*/
  
  k.versionCheck = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", k.proto + '//erin.wtf/version/8k.php');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if(xhr.status == "200"){
          var re = $.JSON(xhr.responseText);
          if(parseFloat(re.version) > parseFloat(version)){
            window.location.href = (re.url);
          }
        }else{ 
          alert('8k failed handshake with remote server'); 
        }
      }
    }
    xhr.send();    
  }
  k.versionCheck();
  
  
  
  
  setting.spawn = function(){   
    
    setting.css = $.css('\
       \
    ');
    
  }
  
  qr.spawn = function(){
      
    //$('form[name="post"]').style.display = "none";
    
    qr.css = $.css('\
       .kqr{\
          position:fixed;\
          background:#FFFFEE;\
          top:3%;\
          right:10%;\
          border:1px solid;\
       }\
       .kqr-comment{\
          width:300px;\
          height:75px;\
          background:#F0E0D6;\
          max-width:100%;\
          color:#800000;\
       }\
       .kqr-postbutton{\
         float:right;\
       }\
       .kqr-personafield{\
         width:95px;\
         background:#F0E0D6;\
         color:#800000;\
       }\
       .kqr-handle{\
         background:#800000;\
         text-align:center;\
         color:#FFFFEE;\
         padding-bottom:2px;\
       }\
       .kqr-button{\
         background:#F0E0D6;\
         color:#800000;\
       }\
      .kqr-leftopts{\
        float:left;\
      }\
      .kqr-rightopts{\
        float:right;\
      }\
      .kqr-checkbox{\
        margin-top:-0px;\
      }\
      .kqr-close{\
        color:#FFFFEE;\
        margin-right:5px;\
      }\
      .kqr-link{\
        cursor:pointer;\
      }\
      .kqr-fileinput{\
        max-width:200px;\
      }\
      .kqr-fileclear{\
      }\
      .add_image{\
         display:none !important;\
      }\
    ');
    
    qr.main = {};
     qr.main['id'] = 'kqr';
     qr.main['class'] = 'kqr';  
    qr.main = $.elm('span', qr.main, db);
    
    qr.main.innerHTML = '\
     <div id="kqr-handle" class="kqr-handle">\
         <span class="kqr-leftopts"><input type="checkbox" id="kqr-min" class="kqr-min kqr-checkbox" title="Minimize QR" /></span>\
         <span class="kqr-title">&nbsp;/'+k.board+'/'+k.thread+'&nbsp;</span>\
         <span class="kqr-rightopts">[ Spoiler: <input type="checkbox" id="kqr-spoil" class="kqr-spoil kqr-checkbox" title="Image Spoiler" /> ] <a id="kqr-close" class="kqr-close kqr-link" title="Close QR" >&#10006;</a></span>\
     </div>\
     <div id="kqr-body" class="kqr-body">\
         <div>\
          <input type="text" id="kqr-name" class="kqr-name kqr-personafield" placeholder="Name" />\
          <input type="text" id="kqr-email" class="kqr-email kqr-personafield" placeholder="Email" />\
          <input type="text" id="kqr-subject" class="kqr-subject kqr-personafield" placeholder="Subject" />\
         </div>\
         <div>\
           <textarea id="kqr-comment" class="kqr-comment" placeholder="Comment"></textarea>\
         </div>\
         <div>\
           <span id="kqr-filecontainer"><input type="file" id="kqr-fileinput" class="kqr-fileinput kqr-button" /></span>&nbsp;<a id="kqr-fileclear" class="kqr-fileclear kqr-link">&#10006;</a>\
           <button type="button" id="kqr-postbutton" class="kqr-postbutton kqr-button">Post</button>\
         </div>\
     </div>\
    ';
    
    qr.min = function(){
      $('#kqr-body').style.display = 'none';
      $('#kqr').addEventListener('mouseenter', function(){$('#kqr-body').style.display = '';}, false);
      $('#kqr').addEventListener('mouseleave', function(){ if($('#kqr-min').checked == true){ $('#kqr-body').style.display = 'none'; } }, false);
      
    }
    
    if($.getVal('qr-min') == 'true'){
      $('#kqr-min').checked = true;
      qr.min();
    }else{     
      $.setVal('qr-min', 'false');
    }
    
    $('#kqr-name').value = $.getVal('qr-name', '');
    $('#kqr-name').addEventListener('input', function(){
      $.setVal('qr-name', $('#kqr-name').value);
    }, false);
    
    $('#kqr-email').value = $.getVal('qr-email', '');
    $('#kqr-email').addEventListener('input', function(){
      $.setVal('qr-email', $('#kqr-email').value);
    }, false);
    
    $('#kqr-subject').value = $.getVal('qr-subject', '');
    $('#kqr-subject').addEventListener('input', function(){
      $.setVal('qr-subject', $('#kqr-subject').value);
    }, false);
    
    $('#kqr-min').addEventListener('change', function(){ 
      if($('#kqr-min').checked == true){ 
        qr.min();
        $.setVal('qr-min', 'true');
      }else{
        $.setVal('qr-min', 'false');
      }
    }, false);
  
    qr.openLink = {};
    qr.openLink['id'] = 'kqr-menu';
    qr.openLink = $.elm('span', qr.openLink, $('.sub'));
    qr.openLink.innerHTML = ' [ 8k: ';
    var qrLink = {};
    qrLink['id'] = 'kqr-qrMenuLink';
    qrLink['class'] = 'kqr-link';
    qr.openLink = $.elm('a', qrLink, qr.openLink);
    qr.openLink.innerHTML = 'QR';  
    $('#kqr-menu').innerHTML += ' ] ';
    $('#kqr-qrMenuLink').addEventListener('click', function(){ 
      if(qr.main.style.display == "none"){ 
        qr.main.style.display = ""; 
      }else{ 
        qr.main.style.display = "none"; 
      } 
    }, false);
    $('#kqr-close').addEventListener('click', function(){ 
      qr.main.style.display = "none"; 
    }, false);

    
    $('#kqr-fileclear').style.display = 'none';
    
    qr.showFileClear = function(){
      $('#kqr-fileclear').style.display = '';      
    }
    
        
    qr.clearFile = function(){
      $.destroy($('#kqr-fileinput'));
      $('#kqr-filecontainer').innerHTML = '<input type="file" id="kqr-fileinput" class="kqr-fileinput kqr-button" />';
      $('#kqr-fileclear').style.display = 'none';
      return $('#kqr-fileinput').addEventListener('change', qr.showFileClear, false);
    }
    
    $('#kqr-fileinput').addEventListener('change', qr.showFileClear, false);
    
    $('#kqr-fileclear').addEventListener('click', qr.clearFile, false);
    
    qr.send = function(){
      
       $('#kqr-postbutton').removeEventListener("click", qr.send, false);
       $('#kqr-postbutton').addEventListener("click", qr.abort, false);
       qr.abort = function(){
        	xhr.abort();
          delete formData;
          delete xhr;
          $('#kqr-postbutton').removeEventListener("click", qr.abort, false);
          $('#kqr-postbutton').addEventListener("click", qr.send, false);
        };
        $.htm($('#kqr-postbutton'), 'Preparing...');
        var formData = new FormData();
        //formData.append("login", $('input[name="login"]').value);
        //formData.append("lastname", $('input[name="lastname"]').value);
        //formData.append($('input[name="lastname"]').nextSibling.value, '');
        formData.append("q", '');
        formData.append("hash", $('input[name="hash"]').value);
        //formData.append($('label[for="no_country"]').nextSibling.value, '');
        formData.append("username", '');
        formData.append("board", k.board);
        formData.append("thread", k.thread);
        formData.append("name", $('#kqr-name').value);
        formData.append("email", $('#kqr-email').value);
        formData.append("subject", $('#kqr-subject').value);
        formData.append("body", $('#kqr-comment').value);
       // formData.append("file", $("#kqr-file").value);
        formData.append("password", $('[name="password"]').value); 
        
        $.htm($('#kqr-postbutton'), 'Posting...1');
        
        //if($('#kqr-spoil').checked == true){ formData.append("spoiler", $('#kqr-spoil').value); }
        
        var xhr = new XMLHttpRequest();
        
        xhr.open("POST", k.proto + '//8chan.co/post.php');
        
        $.htm($('#kqr-postbutton'), 'Posting...2');
        
       /* function updateProgress(e){
          if (e.lengthComputable){
            var percentComplete = parseInt((e.loaded / e.total)*100);
            $.htm($('#kqr-postbutton'), percentComplete+'%');
          } else {
            $.htm($('#kqr-postbutton'), 'unknown %');
          }
        }
        xhr.upload.addEventListener("progress", updateProgress, false); */
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var re = '<span' + xhr.responseText.split('<body')[1].split('<hr')[0] + '</span';    
                if(re.indexOf('<h1>Error</h1>') > 2){
                  alert(re);
                }else{
                  $('#kqr-comment').value = '';
                  qr.clearFile();
                }
                $.htm($('#kqr-postbutton'), 'Post');
                $('#kqr-postbutton').removeEventListener("click", qr.abort, false);
                $('#kqr-postbutton').addEventListener("click", qr.send, false);
            }
        }
        
        $.htm($('#kqr-postbutton'), 'Posting...3');
        
        xhr.send(formData);
    
    };
    $('#kqr-postbutton').addEventListener("click", qr.send, false);
  };  
  
  /*------------------------------------------*/
  
  page.prep();    
  if(k.board != null && k.thread != 'index' && k.thread != 'catalog') qr.spawn(); 
  
}
chanK();