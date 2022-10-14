const toggleContainer = document.querySelector('.toggle_container')

toggleContainer.addEventListener('click', () => {
    toggleContainer.classList.toggle('active')
    if (toggleContainer.classList.contains('active')) { 
        themeSwitchDark()
    } else {
        themeSwitchLight()
    }
})

function themeSwitchDark() {
    document.documentElement.style.setProperty('--bgLt', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--topBgLt', 'hsl(232, 19%, 15%)')
    document.documentElement.style.setProperty('--cardBgLt', 'hsl(228, 28%, 20%)')
    document.documentElement.style.setProperty('--grayBlueTextLt', 'hsl(228, 12%, 54%)')
    document.documentElement.style.setProperty('--darkBlueTextLt', 'hsl(0, 0%, 100%)')
}
function themeSwitchLight() {
    document.documentElement.style.setProperty('--bgLt', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--topBgLt', 'hsl(225, 100%, 98%)')
    document.documentElement.style.setProperty('--cardBgLt', 'hsl(227, 47%, 96%)')
    document.documentElement.style.setProperty('--grayBlueTextLt', 'hsl(228, 12%, 44%)')
    document.documentElement.style.setProperty('--darkBlueTextLt', 'hsl(230, 17%, 14%)')
}