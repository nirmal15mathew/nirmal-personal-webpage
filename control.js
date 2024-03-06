let abtSection = document.getElementById('abtSection')
let homeSection = document.getElementById("homeSection")
let skillSection = document.getElementById("skill")
let projectSection = document.getElementById("project")

let homeBtn = document.getElementById("homeBtn")
let abtBtn = document.getElementById("abtBtn")
let skillBtn = document.getElementById("skillBtn")
let projectBtn = document.getElementById("projectsBtn")


const HIGHLIGHT = ["highlight"]

function launchAbout() {
    abtSection.attributes.removeNamedItem("hidden")
    homeSection.setAttribute('hidden', 'true')
    skillSection.setAttribute('hidden', 'true')
    projectSection.setAttribute('hidden', 'true')

    // changing btn style
    abtBtn.classList.add(...HIGHLIGHT)
    homeBtn.classList.remove(...HIGHLIGHT)
    skillBtn.classList.remove(...HIGHLIGHT)
    projectBtn.classList.remove(...HIGHLIGHT)
}

function launchSkills() {
    abtSection.setAttribute('hidden', 'true')
    homeSection.setAttribute('hidden', 'true')
    skillSection.attributes.removeNamedItem("hidden")
    projectSection.setAttribute('hidden', 'true')
    // changing btn style
    abtBtn.classList.remove(...HIGHLIGHT)
    homeBtn.classList.remove(...HIGHLIGHT)
    skillBtn.classList.add(...HIGHLIGHT)
    projectBtn.classList.remove(...HIGHLIGHT)
}

function launchProjects() {
    abtSection.setAttribute('hidden', 'true')
    homeSection.setAttribute('hidden', 'true')
    skillSection.setAttribute('hidden', 'true')
    projectSection.attributes.removeNamedItem("hidden")
    // changing btn style
    abtBtn.classList.remove(...HIGHLIGHT)
    homeBtn.classList.remove(...HIGHLIGHT)
    skillBtn.classList.remove(...HIGHLIGHT)
    projectBtn.classList.add(...HIGHLIGHT)
}

function launchHome() {
    abtSection.setAttribute('hidden', 'true')
    homeSection.attributes.removeNamedItem("hidden")
    skillSection.setAttribute('hidden', 'true')
    projectSection.setAttribute('hidden', 'true')
    // changing btn style
    abtBtn.classList.remove(...HIGHLIGHT)
    homeBtn.classList.add(...HIGHLIGHT)
    skillBtn.classList.remove(...HIGHLIGHT)
    projectBtn.classList.remove(...HIGHLIGHT)
}