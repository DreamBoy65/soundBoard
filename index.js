let { getSound } = require("./sounds")

const { createAudioResource, getVoiceConnection, createAudioPlayer, joinVoiceChannel, AudioPlayerStatus } = require("@discordjs/voice")
const path = require("path")

class SoundBoard {
  constructor(options) {
    
  }
  
  async play(channel, sound) {
    
    let Sound = getSound(sound)
    
    if(!Sound) throw new TypeError("[soundboard]: InValid Sound.")
    
    let connection = getVoiceConnection(channel.guild.id)
    
    if(!connection) {
      connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      })
    }
    
    let player = createAudioPlayer()
    let res = createAudioResource(path.join(__dirname, `./src/${Sound.file}`), {
      metadata: {
        title: Sound.name
      }
    })
    
    player.play(res)
    connection.subscribe(player)
    
    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy()
    })
  }
}

module.exports = SoundBoard