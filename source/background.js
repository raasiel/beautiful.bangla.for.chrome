function Settings() { };
function _(text) {
    //console.log(text); 
}

Settings.prototype.save = function () {
    self = this;
    window.localStorage.setItem("setting", JSON.stringify(self.setting), function () {
        _("Setting saved successfully");
    });
};

Settings.prototype.load = function () {

    self = this;
    setting = {
        'css': {
            'font-family': 'SolaimanLipi'
        }
    }

    settingJson = window.localStorage.getItem("setting");
    _(settingJson);
    if (settingJson != null) {
        setting = JSON.parse(settingJson);
    }
    self.setting = setting;
    _(self.setting);
}


chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
      _("got message");
      if (request.greeting == "bangla-getsetting")
          setting = new Settings();
          setting.load();
          sendResponse({ farewell: JSON.stringify(setting) });
  });