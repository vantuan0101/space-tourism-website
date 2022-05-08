
import imagePath from '../exportImage'
const technologyImage = {
    Vehicle:{
        Landscape : [`${imagePath.imageVehicleLand}`],
        Portrait : [`${imagePath.imageVehiclePort}`]
    },
    Capsule :{
        Landscape : [`${imagePath.imageCapsuleLand}`],
        Portrait : [`${imagePath.imageCapsulePort}`]
    },
    Spaceport:{
        Landscape : [`${imagePath.imageSpaceportLand}`],
        Portrait : [`${imagePath.imageSpaceportPort}`]
    },
}

const technologyTitle = {
    Vehicle:['Vehicle'],
    Capsule :['Capsule Specialist '],
    Spaceport:['Spaceport'],
}
const technologyName = {
    Vehicle:['Douglas Hurley'],
    Capsule :[' MARK SHUTTLEWORTH'],
    Spaceport:['Victor Glover'],
}
const technologyDescription = {
    Vehicle:['Douglas Gerald Hurley is an American engineer, former Marine Corps Spaceport and former NASA astronaut. He launched into space for the third time as commander of teachnology Dragon Demo-2.'],
    Capsule:['Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'],
    Spaceport:['Landscape on the first operational Portrait of the SpaceX teachnology Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a teachnology member of Expedition 64, and served as a station systems Portrait engineer. '],
}

export {technologyImage,
    technologyTitle,
    technologyDescription,technologyName}
