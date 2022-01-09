const db = require('../db')
const { Destination } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {

    const destinations = [
        {
            name:'Guatape',
            image: 'https://wander-lush.org/wp-content/uploads/2021/01/Guatape-Depositphotos-Places-in-Colombia.jpg',
            details: `Guatape is often called ‘the most colourful town in Colombia’. With tiny streets, colourful houses and clusters of joyful tourists, this place is straight out of Disneyland!

            Guatape is located 10 minutes’ drive away from La Piedra, one of the largest free-standing rocks in the world. Since the whole region is quite small, one day for both these Colombia is more than enough.
            
            After spending the morning hiking La Piedra, you can dedicate the afternoon to marvelling at Guatape’s lively roads. A few cafes sit just across from the central plaza, providing ample opportunities for people-watching.
            
            Needless to say, the colours that decorate Guatape’s streets are spectacular. From bright reds to rich blues, you’ve never seen such charming houses.`,
            comments: ['61d9fb4a8ee9ed6a72319e8d'], 
            reviews: undefined,
            likes: 1
        },
        {
            name: 'Caño Cristales',
            image: 'https://wander-lush.org/wp-content/uploads/2021/11/Places-to-visit-in-Colombia-new-Wikicommons-Cano-Cristales-river.jpg',
            details: `Nestled deep within the ​​Parque Nacional Natural Tinigua in the remote Meta region, the Cano Cristales or ‘Crystal Channel’ is one of Colombia’s most incredible natural wonders.

            Also called the ‘River of Five Colours’ or the ‘Red River’, the river bed is tinged with hues of yellow, green, blue, black and red, giving the water hole and surrounding rapids an otherworldly liquid rainbow appearance.
            
            This natural phenomenon – created by a combination of quartzite mineral rocks, algae and plants – only occurs between the months of July and November.
            
            As well as beautiful waterfalls and rapids, you can see circular depressions in the river. Known as ‘giant’s kettles’, these are formed by chunks of hard rock that make deep pits. You’ve never seen anything quite like the brightly coloured water falling and churning in the pits.
            
            As a licensed tour guide and special permit is required to visit the river, some advanced planning is essential. Swimming is only allowed in designated areas.
            
            The small town of La Macarena (which has an airport and weekly flights from Bogota) is an ideal base for visiting the Cano Cristales and exploring the rest of this wild interior landscape, where the Amazon meets the mountains.`,
            comments: ['61d9fb4a8ee9ed6a72319e8e'],
            reviews: undefined,
            likes: 1
        },
        {
            name: 'Rosario Islands',
            image: 'https://wander-lush.org/wp-content/uploads/2021/11/Places-to-visit-in-Colombia-new-DP-Rosario-Islands.jpg',
            details: `Located off the coast of Cartagena, the Rosario Islands (Corales Islas del Rosario) is an archipelago of 30 islands that form one of Colombia’s 46 Natural National Parks. If you’re interested in snorkelling or scuba diving, this is one Colombian destination you won’t want to miss.

            This part of the Caribbean is known for its underwater ecosystem of vibrant coral reefs, as well as seagrass habitat and mangroves. The largest island, the aptly named Isla Grande, has resorts, lodges, camping areas and plenty of restaurants, while secluded beaches, an aquarium and open-sea oceanarium are located on small islets, all accessible by local ferry.
            
            Bendita Beach lies just off the mainland peninsular and is one of the most popular white-sand beaches in the country. It’s a perfect day trip destination from Cartagena – or you can rent an overwater bungalow on one of the other islands for a more immersive nature experience.`,
            comments: ['61d9fb4a8ee9ed6a72319e8f'],
            reviews: undefined,
            likes: 1
        },
        {
            name: 'Tayrona National Park',
            image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-184886622_medium.jpg',
            details: `A jungle-laden coastal national park is located near Santa Marta on Colombia’s northern Caribbean coastline.

            Visitors can access the park by foot, hiking one of the many scenic trails to a few camping locations. Unless you have hundreds of dollars to spend on a fancy ‘ecohab’ (luxury glamping huts set on a hill), take the plunge and sleep in a hammock at Cabo San Juan.
            
            Rent a hammock for the night (the tents will flood if it rains, and keep in mind, it’s the jungle!) to fully enjoy the park. The hike in takes between 2.5-4 hours depending on how bad the mud is. The adventure is worth it.
            
            Take your time and enjoy the sights and sounds of the jungle. If you’re lucky you can spot howler monkeys in the trees. Opt to hike the nearby Nine Piedres or up to the Pueblito native village. Early morning hikers will be rewarded with cooler temperatures and stunning wildlife.`,
            comments: ['61d9fb4a8ee9ed6a72319e90'],
            reviews: undefined,
            likes: 1
        },
        {
            name: 'Punta Gallina',
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3d/41/c0.jpg',
            details: 'An arduous two-day journey into the desert of La Guajira will take you deep into the unknown, into the remote territory that characterizes Colombia’s remote northern coastline. Silent stretches of sand extend for miles and miles until they spill out onto the Caribbean coastline, eventually carrying you all the way to Punta Gallinas, the northernmost tip of South America. ',
            comments: ['61d9fb4a8ee9ed6a72319e91'],
            reviews: undefined,
            likes: 1
        }
    ]

    await Destination.insertMany(destinations)
    console.log(`Created ${destinations.length} destinations`)
}

const run = async () => {
    await main()
    db.close()
}

run()