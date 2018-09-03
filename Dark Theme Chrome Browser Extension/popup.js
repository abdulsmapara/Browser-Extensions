let dark = document.getElementById('dark');

  chrome.storage.sync.get('color', function(data) {
    dark.style.backgroundColor = data.color;
    dark.setAttribute('value', data.color);
  });
  dark.onclick = function(element) {
    let color = element.target.value;
    let contrast="#fff";
    console.log('the current background is '+contrast);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";    document.body.style.color="'+contrast+'";'});
    });
  };