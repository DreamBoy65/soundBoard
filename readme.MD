<p ="center">
   <img src="https://img.shields.io/npm/dt/djs-soundboard?style=for-the-badge">
   <img src="https://img.shields.io/npm/v/djs-soundboard?style=for-the-badge">
   <a href = "https://discord.gg/7UQaVPBQka" > <img src="https://img.shields.io/badge/Server-Invite-brightgreen" href = "">
   </a>
</p>

# Invite Bot:

+ https://dsc.gg/waifu.gg

# Example

+ Soundboard:
```js
const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = message.member.voice.channel // required*

sound.play(channel, "bruh") //Sound
```

+ TTS
```js
const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = message.member.voice.channel // required*

sound.tts(channel, "bruh") //Text
```

```js
+ Functions:
+ - 1: getAllSounds => get all soundboard sounds
Type: Array.

+ - 2: getAllLocales => get all supported languages for tts
Type: Array.
```
+ Bot:
```js
// Require the necessary discord.js classes
const {
  Client,
  Events,
  GatewayIntentBits,
  SlashCommandBuilder
} = require('discord.js');
const {
  token
} = require('./config.json');
const SoundBoard = require("djs-soundboard")
let sound = new SoundBoard()

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// new command data
const data = new SlashCommandBuilder()
.setName('bruh') // name
.setDescription('bruh sound!') // description

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once("ready", c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  c.guilds.cache.get("//GuildId").commands.set([data.toJSON()]) // registering command
});

// i = Interaction class
client.on("InteractionCreate", i => {
  if (i.commandName === "bruh") {
    sound.play(i.member.voice.channel, "bruh")
  }
})

client.on("messageCreate", msg => {
  if (msg.content === "!bruh") {
    sound.play(msg.member.voice.channel, "bruh")
  }
})

// Log in to Discord with your client's token
client.login(token);
```

# Sounds:


+ ANIME
+ - ara-ara
+ - arigato
+ - fuck-you
+ - kamehameha
+ - katon
+ - kawaii
+ - kiras_laugh
+ - niconiconii
+ - oni-chan
+ - pikapika-42387
+ - senpai
+ - turuturu,

+ EFFECTS
+ - bass-boost
+ - discord-notification
+ - error
+ - fart
+ - okbye
+ - roblox-death
+ - shutdown
+ - tecnobladebruh
+ - villager,

+ MEMES
+ - and-his-name-is-john-cena-1
+ - badpiggiessong
+ - bruh
+ - bullshit
+ - chaipilo
+ - chala-ja-bsdk
+ - coffin-dance
+ - dammit
+ - directed-by-robert-b_voI2Z4T
+ - douche
+ - enemy-spotted
+ - fight
+ - finally
+ - fucked-up
+ - helicopter-helicopter
+ - herewegoagain
+ - holdup
+ - how
+ - iamstupid
+ - imleaving
+ - impressingbuttons
+ - imsogood
+ - it-was-at-this-moment-that-he-he-knew-he-f-cked-up
+ - itsuseless
+ - knackebrod
+ - land-kara
+ - lesgo
+ - loudnoise
+ - marGyaMadar
+ - mcdzombie
+ - nani_Pmxf5n3
+ - nice
+ - nikal
+ - noice
+ - nonono
+ - noo
+ - noway
+ - nvm
+ - oh-no-no-no-tik-tok-song-sound-effect
+ - ok-simp
+ - omg
+ - ooeeh
+ - rickroll
+ - shutup
+ - somethingstupid
+ - suckAdick
+ - super-idol
+ - surprise-motherfucker
+ - tf_nemesis
+ - thatsagoodone
+ - the-rap-battle-parody-oh
+ - toktik
+ - underthewater
+ - virus
+ - wee
+ - what
+ - what2
+ - whoeha
+ - why-are
+ - wiener
+ - wtf
+ - wurst
+ - x-files-theme-song-copy
+ - yeah,

+ NSFW
+ - female-orgasm
+ - fuck
+ - fuck2
+ - fuckfuckfuckfuck
+ - fuckmedaddy
+ - fuckno
+ - huge-boobs
+ - moan
+ - nsfwEarrape
+ - orgasmreal
+ - pussy
+ - turtlesex
+ - yamete,

+ SPONGEBOB
+ - a-few-moments-later-hd
+ - im-ready
+ - one-hour-later-spongebob-time-card-96
+ - sbtrapvinebycarb0n
+ - spongebob-2000-years-later
+ - spongebob-dolphin-censor
+ - spongebob-fail
+ - spongebob-hi-how-are-ya-
+ - strongpunch
+ - you-what-spongebob

Total Sounds:
108

Last Updated: Mon Oct 03 2022 08:35:03 GMT+0530 (India Standard Time)
