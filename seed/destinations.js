const db = require('../db');
const Destination = require('../models/destination');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
    const destinations = [
        {
            name: 'Machu Picchu',
            description: 'A visit to the "Lost City of the Incas" is not for the faint of heart, but it is often described as a life-changing experience (once you acclimate to the altitude). While the four-day hike along the Inca Trail is challenging, arriving at the Peruvian site during sunrise is well worth the effort, according to past travelers. If you\'re not up for the trek, you can also hop on a PeruRail train to the mountain base for an easier route to the top.',
            image:
                'https://travel.usnews.com/dims4/USNEWS/4b9c8c1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_mp_image_445x280_7oXslPi.jpg'
        },
        {
            name: 'South Island, New Zealand',
            description: 'New Zealand\'s South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers.Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterburys Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island\'s west coast or sample delicious food and wine in the Marlborough region.',
            image:
                'https://travel.usnews.com/dims4/USNEWS/a798492/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/edited_south_island_nz_getty_irma_ferreira_445x280_dxgXWlc.jpg',
        },
        {
            name: 'Paris',
            description: 'The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well. The gentle River Seine rambles through the city, flanked by stately museums, centuries-old churches, and blocks of Rococo- and Neoclassic-design architecture, further enhanced by cascading trees and glowing streetlamps. Peppering the Seine\'s cobbled walks and graceful bridges are impossibly chic Parisians, probably on their way to the market, cafe or cinema.',
            image:
                'https://travel.usnews.com/dims4/USNEWS/c5a8f6d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-532590277_2ZNe4ra.jpg'
        },
        {
            name: 'Tahiti',
            description: 'iles of shoreline, dozens of resorts, French cuisine to die for – Tahiti has all the makings of a honeymoon destination. But beach bums often pass over Tahiti\'s sands in favor of Bora Bora\'s ivory shores. Despite its idyllic reputation and accessibility, Tahiti is more of an off-the-beaten-path stop than a romantic getaway. However, that doesn\'t mean Tahiti should be ignored.',
            image:
                'https://travel.usnews.com/dims4/USNEWS/a600cb2/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/tahiti_main_getty_samantha_t_photography_edited_445x280_v43QKbF.jpg',
        },
        {
            name: 'Rome',
            description: 'Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it\'s the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled- high plate of pasta at a trattoria, Roma is sure to enchant.',
            image:
                'https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_cropped_rome_445x280_f0qQD4i.jpg',
        }
    ];
    await Destination.insertMany(destinations);
    console.log(`MongoDB is getting Destinations!`);
};
const run = async () => {
    await main();
    db.close();
};

run();
