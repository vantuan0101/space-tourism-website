
import imagePath from '../exportImage'
const destinationImage = {
    Moon:[`${imagePath.imageMoon}`],
    Mars:[`${imagePath.imageMars}`],
    Europa:[`${imagePath.imageEuropa}`],
    Titan:[`${imagePath.imageTitan}`]
}

const destinationHeading = {
    Moon:['moon'],
    Mars:[' mars'],
    Europa:[' europa'],
    Titan:[' titan']
}
const destinationDescription = {
    Moon:['See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'],
    Mars:[' Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'],
    Europa:['The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'],
    Titan:['The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.']
}
const destinationDistances = {
    Moon:['384,400 km'],
    Mars:['225 MIL. km'],
    Europa:['628 MIL. km'],
    Titan:['1.6 BIL. km']
}
const destinationTime = {
    Moon:['3 days'],
    Mars:['9 months'],
    Europa:['3 years'],
    Titan:['7 years']
}

export {destinationImage,
    destinationHeading,
    destinationDescription,
    destinationDistances,
    destinationTime}
