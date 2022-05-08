
import imagePath from '../exportImage'
const crewImage = {
    Commander:[`${imagePath.imageDouglas}`],
    Mission :[`${imagePath.imageMark}`],
    PILOT:[`${imagePath.imageVicktor}`],
    Flight:[`${imagePath.imageAnousheh}`]
}

const crewTitle = {
    Commander:['Commander'],
    Mission :['Mission Specialist '],
    PILOT:['PILOT'],
    Flight:[' titan']
}
const crewName = {
    Commander:['Douglas Hurley'],
    Mission :[' MARK SHUTTLEWORTH'],
    PILOT:['Victor Glover'],
    Flight:['Flight Engineer']
}
const crewDescription = {
    Commander:['Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'],
    Mission:['Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'],
    PILOT:['Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '],
    Flight:['Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ']
}

export {crewImage,
    crewTitle,
    crewDescription,crewName}
