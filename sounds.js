module.exports = {
  getSound(sound) {
    let Sound = array.find(c => c.name === sound)
    
    if(Sound) {
      return Sound
    } else {
      return false
    }
  }
}

let array = [
  {
    name: "bruh",
    file: "bruh.mp3"
  },
  {
    name: "kiralaugh",
    file: "kiras_laugh.mp3"
  },
  {
    name: "pokemon", 
    file: "pokemon.mp3"
  }
]