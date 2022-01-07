const db = require('../db')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
        {
            name: 'South Island, New Zealand',
            image: 'https://travel.usnews.com/dims4/USNEWS/a798492/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/edited_south_island_nz_getty_irma_ferreira_445x280_dxgXWlc.jpg',
            description: 'New Zealand`s South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury`s Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island`s west coast or sample delicious food and wine in the Marlborough region.'
        },
        {
            name: 'Paris',
            image: 'https://travel.usnews.com/dims4/USNEWS/c5a8f6d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-532590277_2ZNe4ra.jpg',
            description: 'The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city`s quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi charm. Get lost wandering along Paris` cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours. If you`re up for a quick daytrip, head about 15 miles southwest of the city center to another must-see attraction: the Palace of Versailles'
        },
        {
            name: 'Bora Bora',
            image: 'https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg',
            description: 'What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you`ll find picturesque beaches, lush jungles and luxurious resorts. The island`s dormant volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island`s best sights during an off-road excursion.'
        },
        {
            name: 'Maui',
            image: 'https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg',
            description: 'Whether you`re driving along the Road to Hana, enjoying a bird`s-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the Hawaiian island`s honey- or black-colored beaches, you`ll find that Maui is unlike any other tropical destination. Don`t miss a chance to visit Haleakala National Park, which is home to the world`s largest dormant volcano.'
        },
        {
            name: 'Tahiti',
            image: 'https://travel.usnews.com/dims4/USNEWS/a600cb2/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/tahiti_main_getty_samantha_t_photography_edited_445x280_v43QKbF.jpg',
            description: 'Travel to this island  the largest in French Polynesia  if you`ve been dreaming of a vacation spent lazing in a lavish overwater bungalow. Beyond the posh resorts, Tahiti boasts black sand beaches, a bustling capital and prime snorkeling and surfing conditions. If you`re looking for more cultural experiences, check out some of the island`s ancient temples or shop at its traditional covered markets.'
        },
        {
            name: 'London',
            image: 'https://travel.usnews.com/dims4/USNEWS/0e6734a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/482151882_HjS9rWb.jpg',
            description: 'London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it`s your first time in London, plan to visit the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. '
        },
        {
            name: 'Rome',
            image: 'https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_cropped_rome_445x280_f0qQD4i.jpg',
            description: 'When you visit the Eternal City, prepare to cross a few must-see attractions  including the Colosseum, the Trevi Fountain and the Pantheon  off of your bucket list. Additional treasures, such as St. Peter`s Basilica and the Sistine Chapel, can be found in nearby Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like gelato and pizza.'
        },
        {
            name: 'Phuket',
            image: 'https://travel.usnews.com/dims4/USNEWS/4ef5ab1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_2017_getty_resized_445x280_lr3LLEU.jpg',
            description: 'Located in southern Thailand, Phuket offers something for everyone, especially budget-minded travelers. Activities like spa treatments and boat tours come with low price tags, as do accommodations. For stunning scenery, check out the limestone cliffs of Phang Nga Bay and lounge on Phuket`s gorgeous white sand beaches (Freedom Beach and Bangtao Beach are two visitor favorites)'
        },
        {
            name: 'Tokyo',
            image: 'https://travel.usnews.com/dims4/USNEWS/41b8fe6/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-edited_445x280_13NCYXq.jpg',
            description: 'Simply setting foot in Japan`s cosmopolitan capital is an experience within itself. A city known for its bustling streets and flashing neon signs, Tokyo has an electric energy and plenty of attractions to discover. Foodies won`t be let down by the city`s fresh sushi and hearty ramen. Budding photographers and adrenaline junkies will love taking in the sweeping panoramas from the top of the Tokyo Skytree. Shopaholics will find plenty of must-have designer products in Ginza.'
        },
        {
            name: 'Glacier National Park',
            image: 'https://travel.usnews.com/dims4/USNEWS/49f7191/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_getty_resized_445x280_b8LdAje.jpg',
            description: 'Snow-capped peaks and azure lakes are just two reasons why Glacier National Park is one of America`s most striking parks. There are more than 700 miles of hiking trails in this Montana park, plus 13 designated areas for camping. In winter, travelers can enjoy snowshoeing and skiing, while summer is when vacationers can go swimming and whitewater rafting, among other popular activities.'
        }
    ]

    await Post.insertMany(posts)
    console.log("Created some posts")
}

const run = async () => {
    await main()
    db.close()
}

run()