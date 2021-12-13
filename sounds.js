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
    file: "memes/bruh.mp3"
  },
  {
    name: "kiralaugh",
    file: "anime/kiras_laugh.mp3"
  },
  {
    name: "pokemon", 
    file: "anime/pokemon.mp3"
  }
]