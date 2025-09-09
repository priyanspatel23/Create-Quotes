// Note : 
// Copy Data in your js file.
// Find images online and replace imageurl.
// Print Data with proper UI.
// Upload on Github and Send Repo link.


const Data = [

 {

  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",

  author: "Nelson Mandela",

  imgurl: "https://cdn.britannica.com/67/75567-050-4EBBE84D/Nelson-Mandela.jpg",

  birthPlace: "Mvezo, South Africa"

 },
 {

  quote: "The way to get started is to quit talking and begin doing.",

  author: "Walt Disney",

  imgurl: "https://static.tvtropes.org/pmwiki/pub/images/walt_disney_3.jpg",

  birthPlace: "Chicago, Illinois, USA"

 },

 {

  quote: "Your time is limited, so don't waste it living someone else's life.",

  author: "Steve Jobs",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/250px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",

  birthPlace: "San Francisco, California, USA"

 },

 {

  quote: "If life were predictable it would cease to be life, and be without flavor.",

  author: "Eleanor Roosevelt",

  imgurl: "https://eachother.org.uk/wp-content/uploads/2017/09/eleanorroosevelt_640x400-1.jpg",

  birthPlace: "New York City, New York, USA"

 },

 {

  quote: "If you look at what you have in life, you'll always have more.",

  author: "Oprah Winfrey",

  imgurl: "https://www.amacad.org/sites/default/files/person/headshots/oprah.jpg",

  birthPlace: "Kosciusko, Mississippi, USA"

 },

 {

  quote: "Life is what happens when you're busy making other plans.",

  author: "John Lennon",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuBW75Gi-uL4tbf3YrYadNGCHv3KbxANEgw&s",

  birthPlace: "Liverpool, England"

 },

 {

  quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",

  author: "Mother Teresa",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY85PY5u2QTUOzjBEsE5jnfBQQg3wKs9HAiw&s",

  birthPlace: "Skopje, North Macedonia"

 },

 {

  quote: "When you reach the end of your rope, tie a knot in it and hang on.",

  author: "Franklin D. Roosevelt",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/fd/FDR-1944-Campaign-Portrait_%283x4_retouched%2C_cropped%29.jpg",

  birthPlace: "Hyde Park, New York, USA"

 },
 {

  quote: "Always remember that you are absolutely unique. Just like everyone else.",

  author: "Margaret Mead",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Margaret_Mead_1977_%C2%A9Lynn_Gilbert.jpg",

  birthPlace: "Philadelphia, Pennsylvania, USA"

 },

 {

  quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",

  author: "Robert Louis Stevenson",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Robert_Louis_Stevenson_by_Henry_Walter_Barnett_bw.jpg/250px-Robert_Louis_Stevenson_by_Henry_Walter_Barnett_bw.jpg",

  birthPlace: "Edinburgh, Scotland"

 },

 {

  quote: "The future belongs to those who believe in the beauty of their dreams.",

  author: "Eleanor Roosevelt",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/CT_74-53_%283x4_cropped%29.jpg/250px-CT_74-53_%283x4_cropped%29.jpg",

  birthPlace: "New York City, New York, USA"

 },

 {

  quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",

  author: "Benjamin Franklin",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/250px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",

  birthPlace: "Boston, Massachusetts, USA"

 },

 {

  quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",

  author: "Helen Keller",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-XumseL5n-Ce1gAl2i1_fYyRDbjnKECs4w&s",

  birthPlace: "Tuscumbia, Alabama, USA"

 },

 {

  quote: "It is during our darkest moments that we must focus to see the light.",

  author: "Aristotle",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO7Alqsb9d263w2jcVroTFcp7EpwVPNS7Mw&s",

  birthPlace: "Stagira, Greece"

 },

 {

  quote: "Whoever is happy will make others happy too.",

  author: "Anne Frank",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anne_Frank_lacht_naar_de_schoolfotograaf.jpg/250px-Anne_Frank_lacht_naar_de_schoolfotograaf.jpg",

  birthPlace: "Frankfurt, Germany"

 },

 {

  quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",

  author: "Ralph Waldo Emerson",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg",

  birthPlace: "Boston, Massachusetts, USA"

 },

 {

  quote: "You will face many defeats in life, but never let yourself be defeated.",

  author: "Maya Angelou",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXk-NnuO4TVqcnIjF4nrAGFq5G_1Fa54ZyEA&s",

  birthPlace: "St. Louis, Missouri, USA"

 },

 {

  quote: "In the end, it's not the years in your life that count. It's the life in your years.",

  author: "Abraham Lincoln",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Abraham_Lincoln_1863_Portrait_%283x4_cropped%29.jpg/960px-Abraham_Lincoln_1863_Portrait_%283x4_cropped%29.jpg",

  birthPlace: "Hodgenville, Kentucky, USA"

 },

 {

  quote: "Never let the fear of striking out keep you from playing the game.",

  author: "Babe Ruth",

  imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-517324714.jpg",

  birthPlace: "Baltimore, Maryland, USA"

 },

 {

  quote: "Life is either a daring adventure or nothing at all.",

  author: "Helen Keller",

  imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3245927jpg.jpg?crop=1xw:1.0xh;center,top&resize=640:*",

  birthPlace: "Tuscumbia, Alabama, USA"

 },

 {

  quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",

  author: "Thomas A. Edison",

  imgurl: "https://cdn.britannica.com/44/19444-050-1DA32C1C/replica-Thomas-A-Edison-lightbulb-1925.jpg",

  birthPlace: "Milan, Ohio, USA"

 },

 {

  quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",

  author: "Brian Tracy",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Brian_Tracy_%284005302419%29_%28cropped%29.jpg",

  birthPlace: "Charlottetown, Canada"

 },

 {

  quote: "Believe you can and you're halfway there.",

  author: "Theodore Roosevelt",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29.jpg/960px-Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29.jpg",

  birthPlace: "New York City, New York, USA"

 },

 {

  quote: "Act as if what you do makes a difference. It does.",

  author: "William James",

  imgurl: "http://upload.wikimedia.org/wikipedia/commons/9/9c/William_James_b1842c.jpg",

  birthPlace: "New York City, New York, USA"

 },

 {

  quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",

  author: "Winston Churchill",

  imgurl: "https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop",

  birthPlace: "Woodstock, England"

 },

 {

  quote: "You are never too old to set another goal or to dream a new dream.",

  author: "C.S. Lewis",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MnJrFkEvewcpScgwnRCr3GwMuBaP4r2mvQ&s",

  birthPlace: "Belfast, Ireland"

 },
 {
  quote: "At any given moment you have the power to say: this is not how the story is going to end.",

  author: "Christine Mason Miller",

  imgurl: "https://m.media-amazon.com/images/S/amzn-author-media-prod/qculg5dpfef7827m0jskcun5b1.jpg",

  birthPlace: "Unknown"

 },
 {
  quote: "You don't have to be great to start, but you have to start to be great.",

  author: "Zig Ziglar",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYdCSRO874jij3bbQqcm3pk00ldw22Dl9vg&s",

  birthPlace: "Coffee County, Alabama, USA"

 },
 {
  quote: "I have not failed. I've just found 10,000 ways that won't work.",

  author: "Thomas A. Edison",

  imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GckyFtQG7gzsdNvUA3a48VPOj9sTNIr74w&s",

  birthPlace: "Milan, Ohio, USA"

 },
 {
  quote: "Don't watch the clock; do what it does. Keep going.",

  author: "Sam Levenson",

  imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Samlevenson.jpg/320px-Samlevenson.jpg",

  birthPlace: "New York City, New York, USA"

 }
];

const container = document.getElementById("quotesContainer");

Data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.imgurl}" alt="${item.author}">
    <div class="card-content">
      <h2>${item.author}</h2>
      <p><b>Birthplace:</b> ${item.birthPlace}</p>
      <p class="quote">"${item.quote}"</p>
    </div>
  `;

  container.appendChild(card);
});

