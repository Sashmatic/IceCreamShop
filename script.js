// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Ice Cream Flavors Data
const flavors = [
    {
        name: "Vanilla Dream",
        description: "Classic Madagascar vanilla with real vanilla bean specks",
        type: "classic",
     	image:"https://cdn.shopify.com/s/files/1/2017/8433/files/Vanilla_Bean_Ice_Cream_large.jpg?v=1496344532"
    },
    {
        name: "Chocolate Fudge",
        description: "Rich chocolate with fudge swirls",
        type: "chocolate",
        image: "https://emilylaurae.com/wp-content/uploads/2022/08/chocolate-brownie-ice-cream-11.jpg"
    },
    {
        name: "Strawberry Bliss",
        description: "Creamy strawberry with real fruit pieces",
        type: "fruity",
        image: "https://img.freepik.com/premium-photo/vibrant-strawberry-ice-cream-with-real-fruit-chunks_1267495-9412.jpg"
    },
    {
        name: "Mint Chocolate Chip",
        description: "Refreshing mint with dark chocolate chunks",
        type: "classic",
        image: "https://feelslikehomeblog.com/wp-content/uploads/2022/02/Mint-Chocolate-Chip-Ice-Cream-recipe-FB.png"
    },
    {
        name: "Cookies & Cream",
        description: "Vanilla ice cream with Oreo cookie pieces",
        type: "classic",
        image: "https://homebodyeats.com/wp-content/uploads/2022/08/ice-cream-oreo-cookie-500x500.jpg"
    },
    {
  	name: "Rocky Road",
        description: "Chocolate ice cream with marshmallows and almonds",
        type: "chocolate",
        image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2024/06/rocky-road-ice-cream-afarmgirlsdabbles-01s.jpg"
    },
    {
        name: "Mango Tango",
        description: "Tropical mango with a hint of citrus",
        type: "fruity",
        image: "https://thumbs.dreamstime.com/b/mango-ice-cream-tropical-delight-capturing-essence-summer-image-features-creamy-vibrant-scoop-bursting-308088752.jpg"
    },
    {
        name: "Salted Caramel",
        description: "Sweet caramel with a touch of sea salt",
        type: "special",
        image: "https://entertainingwithbeth.com/wp-content/uploads/2020/06/SaltedCaramelIceCream_Featured.jpg"
    },
    {
        name: "Double Chocolate",
        description: "Chocolate ice cream with chocolate chunks",
        type: "chocolate",
        image: "https://www.modernhoney.com/wp-content/uploads/2020/09/No-Churn-Chocolate-Chunk-Ice-Cream-5-edit-scaled.jpg"
    },
    {
        name: "Pistachio Delight",
        description: "Creamy pistachio with roasted nuts",
        type: "special",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtKAkNr-vD5fJMVCnm-6Bu1IBf4z2VLEw3w&s"
    },
    {
        name: "Raspberry Ripple",
        description: "Vanilla ice cream with raspberry swirl",
        type: "fruity",
        image: "https://foodhub.scene7.com/is/image/woolworthsltdprod/190102-raspberry-swirl-ice-cream?wid=750&hei=750&fmt=png-alpha"
    },
    {
        name: "Butter Pecan",
        description: "Buttery vanilla with toasted pecans",
        type: "classic",
        image: "https://feelslikehomeblog.com/wp-content/uploads/2023/04/No-Churn-Butter-Pecan-Ice-Cream-Recipe-square.png"
    },
    {
        name: "Coffee Buzz",
        description: "Cold brew coffee ice cream",
        type: "special",
        image: "https://www.howsweeteats.com/wp-content/uploads/2016/07/coffee-float-I-howsweeteats.com-10.jpg"
    },
    {
        name: "Peanut Butter Cup",
        description: "Peanut butter ice cream with chocolate cups",
        type: "chocolate",
        image: "https://www.browneyedbaker.com/wp-content/uploads/2011/04/chocolate-peanut-butter-cup-ice-cream-1-550.jpg"
    },
    {
        name: "Lemon Berry",
        description: "Lemon ice cream with mixed berries",
        type: "fruity",
        image: "https://www.onceuponachef.com/images/2023/05/lemon-ice-760x983.jpg"
    },
    {
        name: "Cotton Candy",
        description: "Sweet blue cotton candy flavor",
        type: "special",
        image: "https://homemadehooplah.com/wp-content/uploads/2021/05/cotton-candy-ice-cream-3-1.jpg"
    },
    {
        name: "Neapolitan",
        description: "Classic trio of vanilla, chocolate, and strawberry",
        type: "classic",
        image: "https://www.mydiasporakitchen.com/wp-content/uploads/2019/05/savingpng-17-1-500x500.png"
    },
    {
        name: "Black Cherry",
        description: "Vanilla ice cream with black cherry swirl",
        type: "fruity",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/15396056/3029542835.jpg"
    },
    {
        name: "White Chocolate",
        description: "Creamy white chocolate with macadamia nuts",
        type: "chocolate",
        image: "https://www.eis-perfecto.de/wp-content/uploads/2024/03/Weise-schokoeis-trifft-Haselnuss-848x477.jpg"
    },
    {
        name: "Coconut Dream",
        description: "Creamy coconut with toasted coconut flakes",
        type: "special",
        image: "https://cdn.cdkitchen.com/recipes/images/2017/12/4317-7988-mx.jpg"
    },
    {
        name: "Blueberry Cheesecake",
        description: "Cheesecake ice cream with blueberry swirl",
        type: "fruity",
        image: "https://www.babaganosh.org/wp-content/uploads/2022/08/blueberry-cheesecake-ice-cream-25.jpg"
    },
    {
        name: "Dark Chocolate",
        description: "70% dark chocolate ice cream",
        type: "chocolate",
        image: "https://saltandbaker.com/wp-content/uploads/2018/02/best-homemade-chocolate-ice-cream.jpg"
    },
    {
        name: "Green Tea Matcha",
        description: "Japanese matcha green tea flavor",
        type: "special",
        image: "https://images.kitchenstories.io/communityImages/c3639853db9935cdd2c939f12737d977_bf260784-f60f-4dd5-8c27-967fc316e5f6.jpg"
    },
    {
        name: "Banana Split",
        description: "Banana ice cream with chocolate and strawberry",
        type: "fruity",
        image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/07/banana-split-9.jpg"
    }
];

// Display Flavors
function displayFlavors(filter = 'all') {
    const flavorsContainer = document.getElementById('flavors-container');
    flavorsContainer.innerHTML = '';
    
    const filteredFlavors = filter === 'all' ? flavors : flavors.filter(flavor => flavor.type === filter);
    
    filteredFlavors.forEach(flavor => {
        const flavorCard = document.createElement('div');
        flavorCard.className = 'flavor-card';
        flavorCard.innerHTML = `
            <div class="flavor-img">
                <img src="${flavor.image}" alt="${flavor.name}">
            </div>
            <div class="flavor-info">
                <h3>${flavor.name}</h3>
                <p>${flavor.description}</p>
                <span class="flavor-type ${flavor.type}">${flavor.type.charAt(0).toUpperCase() + flavor.type.slice(1)}</span>
            </div>
        `;
        flavorsContainer.appendChild(flavorCard);
    });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        displayFlavors(this.dataset.filter);
    });
});

// Initialize with all flavors
displayFlavors();

// Form Submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();

});
