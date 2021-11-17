let synth;
const pattern = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
let basekey = 4
let presskey = []
const keys = ["a","w","s","e","d","f","t","g","y","h","u","j","k","o","l","p",";",":","[","]"]

window.onload = function(){
  synth = new Tone.Synth().toMaster();
  document.addEventListener('keydown', keydownEvent);
  document.addEventListener('keyup', keyupEvent);
}
function keydownEvent(e) {
  for(i=0;i<keys.length;i++){
    if(keys[i] == e.key){
      let playKey
      if(i <= 11){
        playKey = pattern[i]+basekey
      }
      else{
        playKey = pattern[i-12]+(basekey+1)
      }
      console.log(playKey)
      if(!presskey.includes(e.key)){
        presskey.push(e.key)
        synth.triggerAttack(playKey);
      }
      return false; 
    }
  }
  if("x" == e.key){
    if(basekey<7){
      basekey = basekey+1
    }
  }
  else if("z" == e.key){
    if(1<basekey){
      basekey = basekey-1
    }
  }
	return false; 
}
function keyupEvent(e) {
  for(i=0;i<keys.length;i++){
    if(keys[i] == e.key){
      let playKey
      if(i <= 11){
        playKey = pattern[i]+basekey
      }
      else{
        playKey = pattern[i-12]+(basekey+1)
      }
      const index = presskey.indexOf(playKey);
      presskey.splice(index, 1)
      synth.triggerRelease(); 
    }
  }
	return false; 
}