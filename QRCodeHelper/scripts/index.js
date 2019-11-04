$(document).ready(function () {
  // @see https://stackoverflow.com/a/14251218
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var url = tabs[0].url;

    if (url.indexOf('ossgw.alicdn.com/rapid-oss-bucket') != -1) {
      url = 'http://h5.m.taobao.com/app/UI/CardPreview?json=' + encodeURIComponent(url);
    }

    $('#UrlString').text(url);
    $('#QRCodeImage').qrcode({ width: 350, height: 350, text: url });
  });
});