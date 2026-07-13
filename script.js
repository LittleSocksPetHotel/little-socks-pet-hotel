/*
  Little Socks Pet Hotel
  Small JavaScript file

  JavaScript is optional for this first website.
  This file mainly gives you one easy place to update the booking form link later.
*/

// Step 1: Create your real Google Form.
// Step 2: Replace the placeholder link below with your real Google Form URL.
const BOOKING_FORM_URL = "https:https://docs.google.com/forms/d/e/1FAIpQLSftZxTAw-UsZBtrj0l02xMFpnldY8SociJpV_ycvSw5lvjqvQ/viewform";

// This updates every button/link with class="booking-link" to use the same form link.
document.querySelectorAll(".booking-link").forEach((link) => {
  link.href = BOOKING_FORM_URL;
});
