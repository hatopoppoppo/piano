let synth;
const pattern = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
let octave = 4
const keys = ["a","w","s","e","d","f","t","g","y","h","u","j","k","o","l","p",";",":","[","]"]
let presskey = []
const keyer = document.getElementById("key")
window.onload = () =>{
  synth = new Tone.PolySynth().toMaster();
  document.addEventListener('keydown', keydownEvent);
  document.addEventListener('keyup', keyupEvent);
}
keydownEvent = e =>{
  for(i=0;i<keys.length;i++){
    if(keys[i] == e.key){
      let playKey
      if(i <= 11){
        playKey = pattern[i]+octave
      }
      else{
        playKey = pattern[i-12]+(octave+1)
      }
      if(!presskey.includes(playKey)){
        presskey.push(playKey)
        synth.triggerAttack(playKey);
        keyer.innerHTML = presskey
      }
      return false; 
    }
  }
  if("x" == e.key){
    if(octave<7){
      octave = octave+1
    }
  }
  else if("z" == e.key){
    if(1<octave){
      octave = octave-1
    }
  }
	return false; 
}
const keyupEvent = e =>{
  for(i=0;i<keys.length;i++){
    if(keys[i] == e.key){
      let playKey
      if(i <= 11){
        playKey = pattern[i]+octave
      }
      else{
        playKey = pattern[i-12]+(octave+1)
      }
      const index = presskey.indexOf(playKey);
      presskey.splice(index, 1)
      synth.triggerRelease(playKey);
      keyer.innerHTML = presskey
    }
  }
	return false; 
}