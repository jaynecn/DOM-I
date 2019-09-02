const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const test = siteContent.nav["nav-item-1"];
console.log(test);

const anchors = document.getElementsByTagName('a');
console.log(anchors);
Array.from(anchors);
console.log(anchors);
anchors[0].textContent = siteContent.nav["nav-item-1"];
anchors[1].textContent = siteContent.nav["nav-item-2"];
anchors[2].textContent = siteContent.nav["nav-item-3"];
anchors[3].textContent = siteContent.nav["nav-item-4"];
anchors[4].textContent = siteContent.nav["nav-item-5"];
anchors[5].textContent = siteContent.nav["nav-item-6"];

const h1 = document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"];

const newH1 = document.querySelector('.cta-text h1');
newH1.textContent = 'DOM';

const h1Is = document.createElement('h1');
h1Is.textContent = 'Is';

newH1.appendChild(h1Is);

const h1Awesome = document.createElement('h1');
h1Awesome.textContent = 'Awesome';

h1Is.appendChild(h1Awesome);


const button = document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"])

const textList = document.querySelectorAll('.text-content');
textList[0].classList.add('features');
textList[1].classList.add('about');
console.log(textList[1]);
console.log(textList[0]);
textList[2].classList.add('services');
textList[3].classList.add('product');
textList[4].classList.add('vision');

const featuresh4 = document.querySelector('.features h4');
featuresh4.textContent = siteContent["main-content"]["features-h4"];

const featContent = document.querySelector('.features p');
featContent.textContent = siteContent["main-content"]["features-content"];

const abouth4 = document.querySelector('.about h4');
abouth4.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector('.text-content.about p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servicesh4 = document.querySelector('.services h4');
servicesh4.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector('.services p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

const producth4 = document.querySelector('.product h4');
producth4.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector('.product p');
productContent.textContent = siteContent["main-content"]["product-content"];

const visionh4 = document.querySelector('.vision h4');
visionh4.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector('.vision p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contactList = document.querySelectorAll('.contact p');
contactList[0].classList.add('address');
contactList[1].classList.add('phone');
contactList[2].classList.add('email');
console.log(contactList[0]);

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];

const pAddress = document.querySelector('.address');
pAddress.textContent = siteContent["contact"]["address"];

const pPhone = document.querySelector('.phone');
pPhone.textContent = siteContent["contact"]["phone"];

const pEmail = document.querySelector('.email');
pEmail.textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];


const green = document.querySelectorAll('a');
green.forEach(element => {
 element.style.color = 'green';
});

const append = document.createElement('a');

let nav = document.querySelector('nav');
nav.append(append);
append.textContent = ('Bye Alex');

const prepend = document.createElement('a');

nav = document.querySelector('nav');
nav.prepend(prepend);
prepend.textContent = ('Hi Alex');