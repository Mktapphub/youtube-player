// JavaScript code for controlling YouTube video playback
let player;

function playVideo() {
      const videoUrl = document.getElementById('video-url').ariaValueMax;
        const videoId = getYouTubeVideoId(videoUrl);

          if (videoId) {
                player = new YT.Player('player', {
                          height: '360',
                                width: '640',
                                      videoId: videoId,
                                            events: {
                                                        'onReady': onPlayerReady,
                                                                'onStateChange': onPlayerStateChange
                                            }
                                        });
                                    }
                                    }

                                    function getYouTubeVideoId(url) {
                                          const videoIdRegex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|vi|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|y2u\.be\/)([a-zA-Z0-9_-]{11})/;
                                            const match = url.match(videoIdRegex);
                                              return match ? match[1] : null;
                                              }

                                              function onPlayerReady(event) {
                                                  // Player is ready to be interacted with
                                                  }

                                                  function onPlayerStateChange(event) {
                                                    // You can track video state changes here
                                                    }

                                              
                                    
                                            
                
          
