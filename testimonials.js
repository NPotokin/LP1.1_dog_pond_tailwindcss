//Array with objects - each one a Testimonial
const testimonials = [
    {
    id: 1,
    perPhoto: "images\person1.png",
    perName: "Anna Smith",
    perDog: "Proud mom of Stinky",
    perTestimonials: "This dog changed my life! I mean, not only he is the sweetest one, bla bla bla..",
    dogPhoto: "images\d1.webp", 
    },
    {
    id: 2,
    perPhoto: "images\person2.png",
    perName: "Sam Kollins",
    perDog: "Proud dad of Snowflake",
    perTestimonials: "I watched his syory for a while, but last new year I've decided to get involved...",
    dogPhoto: "images\d2.jpeg", 
    },
    {
    id: 3,
    perPhoto: "images\person3.png",
    perName: "Kate Von Varhall",
    perDog: "New mom for Bandit",
    perTestimonials: "Bandit stole my heart from day one, it was a matter of time for me to adopt him",
    dogPhoto: "images\d3.jpeg", 
    },
    {
    id: 4,
    perPhoto: "images\person4.png",
    perName: "Nathaniel Jonston",
    perDog: "Daddy for Archer",
    perTestimonials: "I always wanted to have a dog, but only few months ago it became clear...",
    dogPhoto: "images\d4.jpeg", 
    },
]

//select items
const personPhoto = document.getElementById("perPhoto");
const personName = document.getElementById("perName");
const personDog = document.getElementById("perDog");
const personTestimonials = document.getElementById("perTestimonials");
const doggyPhoto = document.getElementById("dogPhoto");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// show person based on item
function showPerson (person) {
    let item = testimonials[person];
    personPhoto.srs = item.perPhoto;
    personName.textContent = item.perName;
    personDog.textContent = item.perDog;
    personTestimonials.textContent = item.perTestimonials;
    doggyPhoto.srs = item.dogPhoto;
}

// Show next person

nextBtn.addEventListener("click", function() {
    currentItem ++;
    if (currentItem > testimonials.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem);
})

// Show previous person
prevBtn.addEventListener("click", function() {
    currentItem --;
    if (currentItem < 0) {
        currentItem = testimonials.length - 1;
    }
    showPerson(currentItem);
})