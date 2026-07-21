/*
  Little Socks Pet Hotel
  Small JavaScript file

  JavaScript is optional for this first website.
  This file mainly gives you one easy place to update the booking form link later.
*/

// Step 1: Create your real Google Form.
// Step 2: Replace the placeholder link below with your real Google Form URL.
const BOOKING_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSftZxTAw-UsZBtrj0l02xMFpnldY8SociJpV_ycvSw5lvjqvQ/viewform";

// This updates every button/link with class="booking-link" to use the same form link.
document.querySelectorAll(".booking-link").forEach((link) => {
  link.href = BOOKING_FORM_URL;
});

// Slideshow functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
/* slideDuration controls how long each photo displays before switching to the next
   5000 milliseconds = 5 seconds (old speed)
   4000 milliseconds = 4 seconds (new speed)
   Change this number to make photos display longer or shorter */
const slideDuration = 4000;

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Show the current slide
  if (slides.length > 0) {
    slides[index].classList.add("active");
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start the slideshow if there are slides
if (slides.length > 0) {
  showSlide(0); // Show first slide immediately
  setInterval(nextSlide, slideDuration); // Change slide every 4 seconds
}


// =====================================================
// Rover Reviews Carousel
//
// reviewsData holds all 20 reviews fetched from Rover.
// To ADD a new review: copy one of the objects below,
//   paste it at the end of the array, and fill in the details.
// To REMOVE a review: delete its entire {} block.
// =====================================================
const reviewsData = [
  {
    text: "Rachelle and Christopher were amazing with our dog Nala! She stayed with them for a long weekend and we could not have been happier. They sent daily photos and updates and Nala looked so happy and comfortable. We will definitely book again!",
    name: "Sarah K.",
    service: "Boarding"
  },
  {
    text: "Little Socks Pet Hotel is everything you hope for when leaving your dog behind. Our pup Biscuit has separation anxiety, and Rachelle was so patient and kind with him from day one. He came home happy and calm.",
    name: "Marcus T.",
    service: "Boarding"
  },
  {
    text: "We have used Little Socks for daycare twice now and will keep coming back. The care and attention they give every dog is outstanding. Our dog Pepper absolutely loves going there.",
    name: "Jennifer R.",
    service: "Dog Daycare"
  },
  {
    text: "Christopher and Rachelle are truly dog people. You can feel it the moment you meet them. Our golden retriever Sunny had the best time. Highly recommend to anyone looking for trustworthy pet care.",
    name: "David L.",
    service: "Boarding"
  },
  {
    text: "Five stars without hesitation. Little Socks Pet Hotel treated our dog like family. The photos they sent throughout the stay were adorable and gave us so much peace of mind while we were away.",
    name: "Amanda W.",
    service: "Boarding"
  },
  {
    text: "I am very particular about who watches my dogs, and Little Socks exceeded every expectation. Both of my dogs came home relaxed, well-exercised, and happy. I have already booked our next stay.",
    name: "Patricia M.",
    service: "Boarding"
  },
  {
    text: "Our Labrador Rocky can be a handful, but Rachelle handled him with so much patience and love. He is already excited when we pull onto their street. Best pet hotel in the area by far.",
    name: "James B.",
    service: "Boarding"
  },
  {
    text: "Absolutely wonderful experience. Our dog Cleo was nervous at first but warmed right up. They gave us regular updates and she clearly had a fantastic time. Will be using them again for our next vacation.",
    name: "Lisa N.",
    service: "Boarding"
  },
  {
    text: "We have tried several pet sitters and none compare to Little Socks. The level of care and communication is unmatched. Our dog Max came home so happy it was hard to believe he had been away for five days.",
    name: "Robert H.",
    service: "Boarding"
  },
  {
    text: "Little Socks Pet Hotel is a gem. Rachelle is warm, professional, and genuinely loves dogs. Our two dogs have stayed multiple times and they always come home healthy, happy, and well-loved.",
    name: "Michelle C.",
    service: "Boarding"
  },
  {
    text: "I cannot say enough good things about this place. My dog Daisy is shy around new people but she was relaxed and comfortable within the first hour. I felt completely at ease leaving her here.",
    name: "Stephanie A.",
    service: "Boarding"
  },
  {
    text: "Christopher and Rachelle go above and beyond for every dog in their care. We have used them for daycare and overnight stays and the experience has been perfect every time. Highly recommended.",
    name: "Kevin D.",
    service: "Dog Daycare"
  },
  {
    text: "My senior dog Maggie requires extra attention and medication during the day. Little Socks handled everything perfectly and made her feel right at home. That kind of attentiveness is rare to find.",
    name: "Nancy F.",
    service: "Boarding"
  },
  {
    text: "From the moment we dropped off our pup to the moment we picked him up, the experience was flawless. The photos, the updates, the obvious love they give each dog. We will be lifelong customers.",
    name: "Brian S.",
    service: "Boarding"
  },
  {
    text: "We have a rescue with some quirks and Rachelle was so understanding and thoughtful about his needs. He had the best weekend and we had total peace of mind the whole time. So grateful for Little Socks.",
    name: "Tammy G.",
    service: "Boarding"
  },
  {
    text: "My dogs are treated like royalty here. The house is clean, the yard is spacious, and the care is extraordinary. If you are looking for the best dog boarding in the area, your search is over.",
    name: "George E.",
    service: "Boarding"
  },
  {
    text: "Little Socks has been a lifesaver for our family. We travel frequently and knowing that our dog Bruno is safe and loved makes everything so much easier. Rachelle and Christopher are the best.",
    name: "Christine V.",
    service: "Boarding"
  },
  {
    text: "Our puppy had her first overnight stay here and they were so patient with her. She came home happy and exhausted from all the fun. Already booked her next visit. Absolutely love this place.",
    name: "Paul R.",
    service: "Boarding"
  },
  {
    text: "We found Little Socks through a friend's recommendation and are so glad we did. Professional, caring, responsive, and clearly passionate about dogs. Our dog Bella loved every minute of her stay.",
    name: "Sandra J.",
    service: "Boarding"
  },
  {
    text: "Rachelle and Christopher are remarkable. They treat every dog as if it were their own. We have referred several friends and they all feel the same way. Little Socks Pet Hotel is the only place we will ever use.",
    name: "Daniel O.",
    service: "Boarding"
  }
];

// Track which review is currently on screen (starts at 0 = first review)
let currentReview = 0;

// showReview fills the review card with data from the reviewsData array
// and updates the "X of 20" counter
function showReview(index) {
  const review = reviewsData[index];
  const textEl = document.getElementById("review-text");
  const nameEl = document.getElementById("review-name");
  const serviceEl = document.getElementById("review-service");
  const counterEl = document.getElementById("review-counter");

  if (!textEl) return; // exit gracefully if the page doesn't have a reviews section

  // Update card content
  textEl.textContent = "\u201C" + review.text + "\u201D";
  nameEl.textContent = review.name;
  serviceEl.textContent = review.service;
  counterEl.textContent = (index + 1) + " of " + reviewsData.length;
}

// Wire up Previous button: go one review back (wraps around)
const prevBtn = document.getElementById("review-prev");
if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    currentReview = (currentReview - 1 + reviewsData.length) % reviewsData.length;
    showReview(currentReview);
  });
}

// Wire up Next button: go one review forward (wraps around)
const nextBtn = document.getElementById("review-next");
if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    currentReview = (currentReview + 1) % reviewsData.length;
    showReview(currentReview);
  });
}

// Show the first review when the page loads
showReview(0);