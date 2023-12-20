const screens = document.querySelectorAll('.scene-1, .scene-2, .scene-video, .scene-photo, .scene-photo1')
const lookBtn = document.querySelector('#btn-scene1')
const btns = document.querySelectorAll('#btn-scene-video, #btn-scene-photo')
const backBtn = document.querySelectorAll('#video-back, #photo-back, #photo-back1')
const nextBtn = document.querySelectorAll('#photo-next')
const body = document.getElementById('body')
const audio = document.querySelector('#audio');


function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
}

lookBtn.addEventListener('click', () => {
    screens[0].classList.add('remove')
    screens[1].classList.add('open')
});

btns[0].addEventListener('click', () => {
    screens[2].classList.add('open')
    screens[1].classList.remove('open')
    screens[1].classList.add('remove-right')
    screens[2].classList.remove('remove')
});

btns[1].addEventListener('click', () => {
    screens[3].classList.remove('remove')
    screens[3].classList.add('open')
    screens[1].classList.remove('open')
    screens[1].classList.add('remove-left')
    screens[3].classList.remove('back')
    body.style.overflowX = 'hidden'
    body.style.overflowY = 'auto'
});

backBtn[0].addEventListener('click', () => {
    screens[1].classList.remove('remove-right')
    screens[2].classList.add('remove')
    screens[1].classList.add('open')
    screens[2].classList.remove('open')
})

backBtn[1].addEventListener('click', () => {
    screens[1].classList.remove('remove-left')
    screens[3].classList.add('back')
    screens[1].classList.add('open')
    screens[2].classList.remove('open')
    screens[3].classList.remove('open')
    body.style.overflow = 'hidden'
})

nextBtn[0].addEventListener('click', () => {
    screens[4].classList.remove('remove')
    screens[3].classList.remove('open')
    screens[3].classList.add('remove')
    screens[4].classList.add('open')
})

backBtn[2].addEventListener('click', () => {
    screens[4].classList.remove('open')
    screens[3].classList.remove('remove')
    screens[3].classList.add('open')
})
