/* Listado de los productos*/

const productList = [
  {
    id: 0,
    name: "Horizon Chase Turbo",
    platform: "PC",
    description: "Horizon Chase Turbo is a racing game inspired by the great hits of the 80's and 90's: Out Run, Lotus Turbo Challenge, Top Gear (SNES), Rush, among others. Each curve and each lap in Horizon Chase Turbo recreates classic arcade gameplay and offers you unbound speed limits of fun. Full throttle on and enjoy!",
    genre: "Racing",
    price: 416.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/389140/header.jpg?t=1636137433"   
  },
  
  {
    id: 1,
    name: "Gato Roboto",
    platform: "Nintendo",
    description: "Pounce inside of your cozy armored mech and set off on a dangerous trek through an alien underworld full of irritable creatures and treacherous obstacles in a valiant effort to save your stranded captain and his crashed spaceship. Tiptoe outside the friendly confines of your technological marvel and follow your feline instincts through tight tunnels and mysterious waterways to scavenge for new weapons and gear. Adventure awaits the most curious of cats in Gato Roboto!",
    genre: "Adventure",
    price: 104.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/916730/header.jpg?t=1623086300"    
  },

  {
    id: 2,
    name: "A Short Hike",
    platform: "Xbox",
    description: "Hike, climb, and soar through the peaceful mountainside landscapes of Hawk Peak Provincial Park. Follow the marked trails or explore the backcountry as you make your way to the summit. Along the way, meet other hikers, discover hidden treasures, and take in the world around you.",
    genre: "Adventure",
    price: 50.65,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg?t=1626188953"       
  },

  {
    id: 3,
    name: "Firewatch",
    platform: "Playstation",
    description: "Firewatch is a mysterious adventure game with beautiful graphics, which tells a story of a fire lookout Henry",
    genre: "Adventure",
    price: 288.78,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/383870/header.jpg?t=1641234515"       
  },

  {
    id: 4,
    name: "Ori and the Blind Forest",
    platform: "Xbox",
    description: "Ori and the Blind Forest tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer.",
    genre: "Adventure",
    price: 499.55,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/261570/header.jpg?t=1590605540"       
  },

  {
    id: 5,
    name: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    platform: "PC",
    description: "Teenage Mutant Ninja Turtles: Shredder’s Revenge reunites Leonardo, Michelangelo, Donatello and Raphael as they kick shell in a beautifully realized beat ’em up.",
    genre: "Beat ’em up",
    price: 599.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1361510/header.jpg?t=1644507160"       
  },

  {
    id: 6,
    name: "STALKER: Shadow of Chernobyl",
    platform: "PC",
    description: "S.T.A.L.K.E.R.: Shadow of Chernobyl tells a story about survival in the Zone – a very dangerous place, where you fear not only the radiation, anomalies and deadly creatures, but other S.T.A.L.K.E.R.s, who have their own goals and wishes.",
    genre: "RPG",
    price: 224.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/4500/header.jpg?t=1624531877"       
  },

  {
    id: 7,
    name: "Crypt of the NecroDancer",
    platform: "Nintendo",
    description: "Crypt of the NecroDancer is an award winning hardcore roguelike rhythm game. Move to the music and deliver beatdowns to the beat!",
    genre: "Rhythm",
    price: 35.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/247080/header.jpg?t=1628036043"       
  },

  {
    id: 8,
    name: "The Legend of Zelda: Link’s Awakening",
    platform: "Nintendo",
    description: "As Link, you awaken in a strange land away from Hyrule, where animals talk and monsters roam. To uncover the truth behind your whereabouts and rouse the legendary Wind Fish, explore Koholint Island and all its trap-ridden dungeons, reimagined in stunning detail for this new release of one of the most beloved The Legend of Zelda games. Along the way, you’ll meet a hilarious assortment of charming characters to which you’ll never want to say goodbye",
    genre: "RPG",
    price: 59.99,
    imageURL: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/t/the-legend-of-zelda-links-awakening-switch/hero?v=2021120818"       
  },          
      
  {
    id: 9,
    name: "Rayman Legends Definitive Edition",
    platform: "Nintendo",
    description: "Rayman, Globox, and the Teensies are off wandering through an enchanted forest when they discover a mysterious tent filled with a series of captivating paintings. As they look more closely, they notice each painting seems to tell the story of a mythical world. While focusing on a painting that shows a medieval land, they are suddenly sucked into the painting, entering the world, and the adventure begins. The gang must run, jump, and fight their way through each world to save the day and discover the secrets of every legendary painting.",
    genre: "Platformer",
    price: 39.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/242550/header.jpg?t=1617126155"       
  }, 

  {
    id: 10,
    name: "Super Mario Odyssey",
    platform: "Nintendo",
    description: "Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!",
    genre: "Platformer",
    price: 59.99,
    imageURL: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero?v=2021120301"       
  }, 

  {
    id: 11,
    name: "Cyberpunk 2077",
    platform: "PC",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification",
    genre: "RPG",
    price: 1099.50,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1645529390"       
  }, 

  {
    id: 12,
    name: "Red Dead Redemption 2",
    platform: "PC",
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
    genre: "RPG",
    price: 2499.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907"       
  }, 

  {
    id: 13,
    name: "God of War",
    platform: "Playstation",
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    genre: "RPG",
    price: 4199.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157"       
  }, 

  {
    id: 14,
    name: "Horizon Zero Dawn",
    platform: "Playstation",
    description: "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    genre: "RPG",
    price: 4199.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1635442187"       
  }, 

  {
    id: 15,
    name: "Ori and the Will of the Wisps",
    platform: "Xbox",
    description: "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles on your quest to unravel Ori’s destiny.",
    genre: "RPG",
    price: 1999.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1612897638"       
  }, 

  {
    id: 16,
    name: "Halo Infinite",
    platform: "Xbox",
    description: "The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.",
    genre: "FPS",
    price: 999.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/header.jpg?t=1639025793"       
  }, 

  {
    id: 17,
    name: "Fifa 22",
    platform: "Xbox",
    description: "Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
    genre: "Sports",
    price: 5499.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1644868577"       
  }, 

  {
    id: 18,
    name: "NBA 2K22",
    platform: "Xbox",
    description: "NBA 2K22 puts the entire basketball universe in your hands. Anyone, anywhere can hoop in NBA 2K22.",
    genre: "Sports",
    price: 5999.00,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1644960/header.jpg?t=1645805127"       
  }, 

  {
    id: 19,
    name: "Cuphead",
    platform: "PC",
    description: "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
    genre: "Platformer",
    price: 224.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1589281999"       
  }, 

  {
    id: 20,
    name: "The Witcher 3: Wild Hunt",
    platform: "PC",
    description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    genre: "RPG",
    price: 479.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1646333612"       
  }, 

  {
    id: 21,
    name: "The Elder Scrolls V: Skyrim",
    platform: "PC",
    description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space",
    genre: "RPG",
    price: 1999.99,
    imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1636654357"       
  }, 




];

export {productList}