# 🌟 Ekatva Samiti Website

> **Serving Society Through Unity, Compassion, and Collective Action**

The official website for **Ekatva Samiti**, a registered social welfare and community service non-governmental organization (NGO) based in **Lucknow, Uttar Pradesh, India**. 

This website is a premium, fully responsive, and highly interactive single-page application built to showcase the NGO's social impact, community initiatives, events timeline, and gallery archives.

---

## 📸 Preview & Aesthetics

The design leverages a curated and harmonious color palette:
*   **Deep Navy Blue (`#0b3d91`)** – Symbolizing trust, depth, and stability.
*   **Saffron (`#ff9933`)** – Reflecting devotion, energy, and cultural heritage.
*   **Emerald Green (`#128c7e`)** – Representing growth, hope, and community prosperity.
*   **Warm Off-white (`#fffaf5`)** – Creating a soft, legible, and premium background context.

---

## 🚀 Key Features

1.  **✨ Premium Visual Experience**
    *   Custom preloader with smooth fade-out animation.
    *   Lightweight scroll-triggered reveal animations for components and cards.
    *   Modern typography powered by Google Fonts (*Outfit* for headings, *Inter* for body text).

2.  **📱 Responsive Navigation**
    *   Sticky navigation header that morphs on scroll.
    *   Active section tracker that highlights the current page navigation link as the user scrolls.
    *   Mobile-friendly hamburger menu with overlay and auto-collapse behavior.

3.  **🎠 Hero Carousel Slider**
    *   An auto-rotating, interactive banner highlighting key initiatives.
    *   Supports manual control dots, forward/backward navigation, and auto-pause on hover.

4.  **📚 Profile & Values**
    *   Comprehensive **About Us** grid presenting the organization's background.
    *   Mission, Vision, and Core Values info-cards with custom SVG icons.

5.  **🥗 Key Activities Showcase**
    *   **Bhandara Seva**: Dedicated food distribution drives promoting community harmony.
    *   **Independence Day Celebrations**: Commemorating national independence with local children.
    *   **Republic Day Events**: Promoting constitutional values, civil duties, and awareness programs.

6.  **🖼️ Filterable Photo Gallery & Lightbox**
    *   Interactive filter controls to view archives by event category (Bhandara, Republic Day, Independence Day).
    *   Fully functional image lightbox overlay allowing users to zoom and navigate slides using arrow keys or control buttons.

7.  **📅 Events Timeline**
    *   Upcoming and past event cards detailing the date, venue location, status badges, and description.

8.  **💬 Testimonial Slider**
    *   Auto-sliding block displaying stories and feedback from student volunteers, local citizens, and school children.

9.  **✉️ AJAX Contact Form & Validation**
    *   Client-side validation (including Indian phone number pattern checks and empty field prevention).
    *   AJAX submission to **Web3Forms API** without page reloads.
    *   Interactive success/error modal overlays embedded within the form container.
    *   Office geolocation map using Google Maps.

---

## 🛠️ Technology Stack

*   **HTML5**: Semantic elements for SEO best practices and accessibility.
*   **CSS3 (Vanilla)**: Grid and Flexbox layouts, custom variables, responsive media queries, keyframe transitions, and custom animations. No external frameworks like Tailwind to ensure maximum control over styling tokens.
*   **JavaScript (ES6+)**: Custom DOM interaction script handling sliders, animations, modals, validation, and form submissions.
*   **FontAwesome (v6)**: Vector icons for smooth visual cues.
*   **Web3Forms API**: Serverless form delivery service.

---

## 📁 Project Structure

```text
EKATVA SAMITI/
├── assests/                    # Media assets (logos, background images, gallery photos)
│   ├── EKATVA/                 # Main NGO logos and team branding photos
│   ├── bhandara/               # Photos from Bhandara Seva drives
│   ├── independence day/       # Independence Day event galleries
│   └── republic day/           # Republic Day celebrations and parades
├── css/
│   └── style.css               # Core design system stylesheet and responsive styles
├── js/
│   └── main.js                 # Carousel, Lightbox, Validation, and interactive logic
├── index.html                  # Main entry point (SEO optimized, semantic markup)
└── README.md                   # Project documentation (this file)
```

---

## ⚙️ Setup & Customization

### 1. Running the Project Locally
Since this is a lightweight static website, you do not need to compile or build packages. You can run it directly:
*   **Direct Open**: Double-click `index.html` to open it in your browser.
*   **Live Server (Recommended)**: Open the workspace folder in VS Code, install the **Live Server** extension, and click **Go Live** to launch the site on `http://127.0.0.1:5500`.

### 2. Configuring the Contact Form
To start receiving messages from the contact form:
1.  Go to [Web3Forms](https://web3forms.com/) and register with your email address to get a free **Access Key**.
2.  Open `js/main.js` in a code editor.
3.  Locate line `455` inside the submit handler:
    ```javascript
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');
    ```
4.  Replace `'YOUR_ACCESS_KEY_HERE'` with your actual Web3Forms access key.
5.  Save the file and test the form. Submissions will be sent directly to your registered email address.

---

## 📄 License
This project is open-source and created for the community welfare and public service initiatives of **Ekatva Samiti, Lucknow**.
