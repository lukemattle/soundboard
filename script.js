//list of sounds as mentioned in index.html. this needs to be in order
const sounds = ['sneaky snitch', 'he he he hah', 'supercell', 'sticky keys', 'sticky keys BASS BOOSTED', 'super idol', 'iphone alarm', 'angry birds', 'bad piggies', 'china 1','vine boom','mc disc stal','skibidi bop mm dada','scatman','samsung notification','ring BASS BOOSTED','red sun in the sky','notification spam','monkeys spinning monkeys','my singing monsters','metal pipe','max verstappen','lego build','lego break','hog rider','ching cheng hanji','carefree ukulele','bruh','bing chilling','better call saul','aughhhhhh','arabic nokia','peppa theme BASS BOOSTED','discord']

//magic that stops sound when 'stop.png is clicked'
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}

//magic that makes the sound work. no need to change this
window.addEventListener("load", (event) => {
    sounds.forEach(sound => {
        const btn = document.createElement('button')
        btn.classList.add('btn')
    
        btn.innerText = sound
    
        btn.addEventListener('click', () => {
            stopSongs()
    
            document.getElementById(sound).play()
        })
    
        document.getElementById('buttons').appendChild(btn)
    })

    document.getElementById('loading').style.display = 'none'

}, false);
