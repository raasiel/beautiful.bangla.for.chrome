_setting = new Settings();

function settingToScreen() {
    _setting.load();
    $("#txtBanglaFont").val(_setting.setting.css['font-family']);
}

function screenToSetting() {
    _setting.setting.css['font-family'] = $("#txtBanglaFont").val();
    _setting.save();
}


$(function () {
    settingToScreen();
    $("a#lnkSave").bind("click", screenToSetting);
    $("#txtBanglaFont").autocomplete({ source: ['SolaimanLipi', 'Rupali', 'Arial'] });
});