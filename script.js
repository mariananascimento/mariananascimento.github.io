let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

if ( isChrome ) {
  
  let el = document.querySelector(':root');
  let radius = getComputedStyle(el).getPropertyValue('--radius');
  
  if ( parseInt( radius ) > 133 ) {
    el.style.setProperty('--radius', '133px');
  }
  
}