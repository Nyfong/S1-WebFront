// code part

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Mobile-First Design</title>
//     <style>
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//       }

//       body {
//         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//           sans-serif;
//         line-height: 1.6;
//         color: #333;
//       }

//       header {
//         background-color: #2563eb;
//         padding: 1rem;
//         position: sticky;
//         width: 100%;
//         top: 0;
//         z-index: 10;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//       }

//       .logo {
//         color: white;
//         font-size: 1.5rem;
//         font-weight: bold;
//       }

//       .drawer-toggle {
//         display: block;
//         cursor: pointer;
//         z-index: 20;
//       }

//       .drawer-toggle div {
//         width: 25px;
//         height: 3px;
//         background-color: white;
//         margin: 5px 0;
//         transition: all 0.3s ease;
//       }

//       .drawer {
//         position: fixed;
//         top: 0;
//         left: -250px;
//         width: 250px;
//         height: 100%;
//         background-color: #2563eb;
//         color: white;
//         transition: left 0.3s ease;
//         padding-top: 2rem;
//         z-index: 15;
//       }

//       .drawer a {
//         color: white;
//         text-decoration: none;
//         display: block;
//         padding: 1rem;
//         font-size: 1.2rem;
//       }

//       .drawer a:hover {
//         background-color: #1d4ed8;
//       }

//       .drawer.open {
//         left: 0;
//       }

//       .hero {
//         background-color: #f8fafc;
//         padding: 8rem 1rem 4rem;
//         text-align: center;
//         margin-top: 60px; /* To prevent content from being hidden under the fixed header */
//       }

//       .hero-content {
//         max-width: 800px;
//         margin: 0 auto;
//       }

//       .hero h1 {
//         font-size: 2.5rem;
//         margin-bottom: 1rem;
//         color: #1e293b;
//       }

//       .hero p {
//         font-size: 1.125rem;
//         color: #64748b;
//         margin-bottom: 2rem;
//       }

//       .cta-button {
//         display: inline-block;
//         background-color: #2563eb;
//         color: white;
//         padding: 0.75rem 1.5rem;
//         border-radius: 0.375rem;
//         text-decoration: none;
//         font-weight: 500;
//         transition: background-color 0.3s;
//       }

//       .cta-button:hover {
//         background-color: #1d4ed8;
//       }

//       .contact-section {
//         padding: 4rem 1rem;
//         background-color: white;
//       }

//       .contact-form {
//         max-width: 500px;
//         margin: 0 auto;
//       }

//       .form-group {
//         margin-bottom: 1.5rem;
//       }

//       label {
//         display: block;
//         margin-bottom: 0.5rem;
//         font-weight: 500;
//         color: #1e293b;
//       }

//       input,
//       textarea {
//         width: 100%;
//         padding: 0.75rem;
//         border: 1px solid #cbd5e1;
//         border-radius: 0.375rem;
//         font-size: 1rem;
//         margin-top: 0.25rem;
//       }

//       button[type="submit"] {
//         background-color: #2563eb;
//         color: white;
//         padding: 0.75rem 1.5rem;
//         border: none;
//         border-radius: 0.375rem;
//         font-size: 1rem;
//         font-weight: 500;
//         cursor: pointer;
//         width: 100%;
//         transition: background-color 0.3s;
//       }

//       button[type="submit"]:hover {
//         background-color: #1d4ed8;
//       }

//       @media (min-width: 768px) {
//         .hero h1 {
//           font-size: 3.5rem;
//         }

//         .hero p {
//           font-size: 1.25rem;
//         }

//         button[type="submit"] {
//           width: auto;
//         }

//         .drawer-toggle {
//           display: none;
//         }

//         .drawer {
//           position: static;
//           width: auto;
//           height: auto;
//           background-color: transparent;
//           color: #333;
//           display: flex;
//           justify-content: flex-start;
//         }

//         .drawer a {
//           color: #333;
//           background-color: transparent;
//         }

//         .drawer a:hover {
//           background-color: transparent;
//         }
//       }
//     </style>
//   </head>
//   <body>
//     <header>
//       <div class="logo">LOGO</div>
//       <div class="drawer-toggle" onclick="toggleDrawer()">
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </header>

//     <div class="drawer" id="drawer">
//       <a href="#home">Home</a>
//       <a href="#about">About</a>
//       <a href="#services">Services</a>
//       <a href="#contact">Contact</a>
//     </div>

//     <section class="hero">
//       <div class="hero-content">
//         <h1>Welcome to Our Site</h1>
//         <p>
//           Experience the future of web design with our mobile-first approach. We
//           create beautiful, responsive websites that look great on any device.
//         </p>
//         <a href="#contact" class="cta-button">Get Started</a>
//       </div>
//     </section>

//     <section id="contact" class="contact-section">
//       <div class="contact-form">
//         <form>
//           <div class="form-group">
//             <label for="name">Name</label>
//             <input type="text" id="name" name="name" required />
//           </div>
//           <div class="form-group">
//             <label for="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div class="form-group">
//             <label for="message">Message</label>
//             <textarea id="message" name="message" rows="4" required></textarea>
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>

//     <script>
//       function toggleDrawer() {
//         const drawer = document.getElementById("drawer");
//         drawer.classList.toggle("open");
//       }
//     </script>
//   </body>
// </html>

//explaination part
/* 


The key design decisions in this mobile-first implementation:

1. Layout Structure:
   - Fixed header for easy navigation
   - Full-width hero section with centered content
   - Single-column layout for the contact form
   - Generous padding and spacing for touch-friendly interactions

2. Typography:
   - System fonts for optimal performance
   - Larger font sizes on desktop for better readability
   - Clear hierarchy with distinct heading and body text styles

3. Mobile-First Features:
   - Stacked form elements taking full width
   - Touch-friendly input fields with adequate spacing
   - Full-width buttons on mobile, auto-width on desktop
   - Responsive text sizing that scales up on larger screens

4. Color and Contrast:
   - Blue primary color (#2563eb) for CTAs and interactive elements
   - High contrast for text elements
   - Subtle backgrounds to maintain focus on content
   - Consistent color scheme throughout

5. User Experience:
   - Smooth transitions on interactive elements
   - Clear visual feedback on hover states
   - Properly associated form labels
   - Required field indicators

   */
