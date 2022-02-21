
function initSound(sounds, rootPath) {

   
//    createjs.Sound.alternateExtensions = ["mp3"];

 
    for (var i =0; i < sounds.length;i++){
    createjs.Sound.registerSound(sounds[i],rootPath);
   }
   console.log(sounds);

		createjs.Sound.on("fileload", handleFileLoad2, this);
   

}
 function handleFileLoad2(event) {
        // A sound has been preloaded. This will fire TWICE
    
        console.log("Preloaded:", event.id, event.src, event.target);
    }


function stopAllSounds() {
    createjs.Sound.stop();
}
