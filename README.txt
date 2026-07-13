Little Socks Pet Hotel Website Starter Files

What is included:
- index.html: homepage
- services.html: services and rates page
- gallery.html: gallery page with photo placeholders
- booking.html: booking request and contact page
- styles.css: the design file
- script.js: small helper file for the booking request form link
- CNAME: custom domain file for littlesockspethotel.com

Important first edit:
1. Create your Google Form booking request form.
2. Open script.js.
3. Replace:
   https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM_LINK
   with your real Google Form link.

How to add photos later:
1. Create a folder named images.
2. Upload your dog photos into that folder.
3. In gallery.html, replace a placeholder like:
   <div class="photo-placeholder"><span>Dog photo 1</span></div>
   with:
   <img src="images/your-photo-name.jpg" alt="Happy dog at Little Socks Pet Hotel" />

Suggested repository name:
little-socks-pet-hotel

Suggested GitHub Pages source:
main branch, root folder

Custom domain:
littlesockspethotel.com

Reminder:
Do not delete email-related DNS records such as MX, SPF, DKIM, DMARC, or other TXT records. Those may be needed for Chris@littlesockspethotel.com.
