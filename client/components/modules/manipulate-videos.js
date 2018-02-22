import { callPlayer } from './call-player';

export function manipulateVideos(post) {
  var topScreen = 60, botScreen = screen.height - 180;
  var lefScreen = 0, rigScreen = screen.width;
  let sections = post.sections;
  sections.forEach((section) => {
    if (section.youtubeId) {
      let iframe = document.getElementById(section.youtubeId);
      let iframeTop = iframe.getBoundingClientRect().top;
      let iframeBot = iframe.getBoundingClientRect().bottom;
      let iframeLef = iframe.getBoundingClientRect().left;
      let iframeRig = iframe.getBoundingClientRect().right;
      if (iframeTop < botScreen && iframeTop > topScreen
       && iframeBot < botScreen && iframeBot > topScreen
       && iframeLef < rigScreen && iframeLef >= lefScreen
       && iframeRig <= rigScreen && iframeRig > lefScreen) {
        callPlayer(section.youtubeId, "playVideo");
      } else {
        callPlayer(section.youtubeId, "pauseVideo");
      }
    }
  });
}
