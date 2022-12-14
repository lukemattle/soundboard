const sounds = ['sneaky snitch', 'he he he hah', 'supercell', 'sticky keys', 'sticky keys BASS BOOSTED', 'super idol', 'iphone alarm', 'angry birds', 'bad piggies', 'china 1','vine boom','mc disc stal','skibidi bop mm dada','scatman','samsung notification','ring BASS BOOSTED','red sun in the sky','notification spam','monkeys spinning monkeys','my singing monsters','metal pipe','max verstappen','lego build','lego break','hog rider','ching cheng hanji','carefree ukulele','bruh','bing chilling','better call saul','aughhhhhh','arabic nokia','peppa oink go brrrr','peppa theme BASS BOOSTED','discord']

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}

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
