# TWO GOOD Website

Welcome to the front-end repository for "TWO GOOD," a website dedicated to empowering vulnerable women by promoting self-sufficiency and showcasing their remarkable achievements.

## Technologies Used

- **HTML**: Establishes the structure and content of the website.
- **CSS**: Brings the design to life with styling, layout, responsiveness, and animations.
- **JavaScript**: Infuses interactivity, smooth scrolling, and dynamic animations.
- **Locomotive Scroll**: Enables smooth and custom scrolling experiences.
- **GSAP**: Powers sophisticated and engaging animations.

## Design Overview

- **Responsive Design**: The website automatically adjusts to various screen sizes, ensuring an optimal user experience across devices.
- **Smooth Scrolling**: Enhanced user experience through seamless scrolling animations, courtesy of Locomotive Scroll.
- **Dynamic GSAP Animations**: Engaging animations for elements like the navbar, header, images, and content boxes, fostering a more immersive experience.
- **Clean Design**: A modern, clean aesthetic that prioritizes readability and a user-friendly visual hierarchy.
- **Interactive Navigation**: A responsive navigation menu that allows for smooth transitions between sections.
- **Animated Underlines**: GSAP-powered underlines add a stylish flair to the navigation menu.
- **Image Carousel**: A visually compelling carousel showcases products and stories, enhancing the visual appeal.
- **Scroll-Triggered Animations**: Elements animate as users scroll, creating an interactive and engaging experience.
- **Custom Cursor**: A bespoke animated cursor adds an interactive touch to the user experience.
- **Social Media Integration**: Convenient links to social media allow users to stay connected with "TWO GOOD."

## Code Explanation

### HTML (index.html)
- **Structure**: Utilizes semantic HTML to organize content into header, navigation, main sections, and footer.
- **Content**: Includes all text, images, and multimedia that make up the site.
- **Locomotive Scroll Integration**: Smooth scrolling is achieved through the `<div id="main" class="smooth-scroll">` element, wrapping the main content.

### CSS (style.css)
- **Basic Styles**: Sets up general styles, including fonts, colors, and reset styles.
- **Navigation**: Styles the navigation bar, logo, links, and the animated menu icon.
- **Header**: Designs the header text and image carousel, ensuring responsiveness.
- **Content Sections**: Ensures consistent spacing and alignment, using Flexbox for layout management.
- **Footer**: Styles social media links, copyright info, and acknowledgments.
- **Media Queries**: Adapts the layout for various screen sizes, enhancing mobile usability.

### JavaScript (script.js)
- **Locomotive Scroll Integration**: Synchronizes smooth scrolling with GSAP's ScrollTrigger for custom animations.
- **Navbar Animations**: Animates the navbar as users scroll, including the logo, links, and icons.
- **Interactive Video Container**: Adds functionality to the video container with a dynamic "Play" button.
- **Loading Animations**: Uses GSAP to stagger animations as users scroll through the page.
- **Cursor Animation**: Implements a custom cursor that follows the mouse and scales on hover.
- **Text Animation**: Enhances text hover effects in the navbar, with underline scaling and color changes.
- **Menu Icon Animation**: Smoothly animates the menu icon opening and closing, with GSAP-driven item animations.
- **Underline SVG Animation**: Animates underlines in menu titles on hover.
