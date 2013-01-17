function _(text) { 
    //console.log(text); 
}

handle = null;
handle = window.setTimeout("doBangla()", 1000);

document.addEventListener('DOMNodeInsertedIntoDocument', onDomChange, true);
//document.addEventListener('DOMSubtreeModified', onDomChange, true);

setting = new Settings();
setting.load();

chrome.extension.sendMessage({ greeting: "bangla-getsetting" }, function (response) {
    _("response is : " + response.farewell);
    setting.setting = JSON.parse(response.farewell);
});


function onDomChange(e) {
    //_('DOMSubtreeModified');
    if ( handle == null){
        handle = window.setTimeout("doBangla()", 3000);
    }    
}

function doBangla() {
    _('Scanning and changing bangla font');
    _(setting);
    if (document.documentElement.innerHTML.length != window.contentLength) {
        window.contentLength = document.documentElement.innerHTML.length;
        $.each($("span,p,a,div"), function (index, elm) {
            if ($(elm).text().match(/[\u0980-\u09FF]+/g) != null) {

                if (elm.tagName == "DIV" && elm.innerHTML.length < 400) {
                    $.each(setting.setting.css, function (cssname, cssvalue) {
                        $(elm).css(cssname, cssvalue);
                    });
                    
                }
                else if (elm.tagName != "DIV") {
                    $.each(setting.setting.css, function (cssname, cssvalue) {
                        $(elm).css(cssname, cssvalue);
                    });
                }
            }
        });       
    }
    window.clearTimeout(handle);
    handle = null;
}
