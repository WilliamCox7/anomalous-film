export function callPlayer(youtubeId, func, args) {
  let iframe = document.getElementById(youtubeId);
  let src = iframe.getAttribute('src');
  if (src && src.indexOf('youtube.com/embed') !== -1) {
    iframe.contentWindow.postMessage(JSON.stringify({
      'event': 'command',
      'func': func,
      'args': args || []
    }), '*');
  }
}
