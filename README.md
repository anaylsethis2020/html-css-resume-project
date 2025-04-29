

Developer Portfolio Website

This project is a personal portfolio website built with HTML, CSS, and Bootstrap, showcasing my front-end development skills. It serves as an online resume and project showcase, intended for potential employers and collaborators. The site is structured with clear navigation (Home, About, Services, Projects, Articles, Contact) and features a hero section, personal profile, project galleries, and interactive elements (animations, video playback). All pages were developed with user experience (UX) principles in mind and deployed to GitHub Pages with a clean Git history and no broken links.

Learning Outcomes Checklist

Criterion	Assessment Criteria	Expected Performance	Completed
1.1	Plan project strategy and goals	Define clear user needs, business goals, and site objectives	✔️
1.2	Perform UX planning and design	Develop wireframes, user stories, and site maps; document planning process (UX principles)	✔️
1.3	Implement layout and visual design	Use Bootstrap grid and components to create a clean, responsive UI	✔️
2.1	Code validation	Ensure HTML and CSS pass W3C validator tools with no errors	✔️
2.2	Responsive design	Apply media queries for multiple viewports; use semantic HTML for structure	✔️
3.1	Cloud deployment and version control	Deploy to GitHub Pages/Netlify with commit history and no broken links	✔️
4.1	Documentation	Create README.md with project overview, screenshots, and feature descriptions	✔️
5.1	AI-assisted code creation	Use AI tools (e.g. Copilot) to generate code aligned with project goals	✔️
5.2	AI-assisted debugging	Use AI to identify and fix bugs efficiently	✔️
5.3	AI-driven optimization	Use AI to optimize code for performance and user experience	✔️
5.4	Reflect on AI usage	Discuss AI’s role in the development process and outcomes	✔️

UX Design – The 5 Planes

Strategy: The project began by defining user and business goals. The target users are hiring managers and peers who need a clear, professional presentation of my skills. I set out to create an engaging developer portfolio (as noted in the project brief), focusing on clarity and relevance. This meant choosing a light, code-oriented theme inspired by industry portfolios and ensuring content aligns with user expectations (such as quick access to my resume and projects)​


Scope: The content and features were determined by user needs and business goals. Key features include a prominent hero banner, a concise “About Me” section with a downloadable CV, a showcase of skills and projects, a services summary (e.g. skills listed), a blog/articles section, and a contact form. Each element was scoped to serve the project objectives: for example, the hero section introduces my role and passion, while the projects gallery demonstrates applied knowledge (HTML layout, CSS styling). The scope was managed on a backlog to prioritize “must-have” and “could-have” features. Structure: I designed a logical information architecture. The site navigation is consistent across pages, using semantic HTML (<header>, <nav>, <section>, <footer>) to organize content. Content is grouped by page: the About page holds personal info and CV link, Services lists skills with icons, Projects shows portfolio work with images, and so on. Within pages, the Bootstrap grid organizes sections (e.g. two-column layouts for text and images). Intuitive navigation (collapsible menu on mobile, smooth scrolling to page sections) ensures users find information quickly. Skeleton: Before coding, I sketched wireframes and user stories to plan layout and flow. For example, user stories defined tasks like downloading the CV or reading a project. A Kanban-style planning board was used to visualize and track development tasks (see Figure). I iterated on layouts: the hero section uses a full-width background image with overlay text, the About section uses a two-column grid (image and text), and project cards are laid out in a responsive grid. The structure of each page was clearly mapped out before implementation to guide development. 

Figure: Kanban board of project planning tasks (Backlog, In Progress, Done). An agile planning board was used to manage features and priorities. Each task (like “Hero Section: First Impressions” or “About Me Section”) was labeled as a “Must-have” or “Could-have,” reflecting the project scope. This visual planning ensured that essential UX and design tasks were completed first, and it helped track progress in line with design thinking principles. Surface: The visual design uses a clean, modern style. Consistent colors (dark text on white, with accent colors) and typography were chosen for readability. Images and gifs (e.g. a coding animation) add personality without clutter. Buttons and interactive elements use Bootstrap styling for a polished look (e.g. the “Download My CV” button stands out with color contrast). Alt text is provided for all images (e.g. alt="Abel Beyene" for the profile photo). Attention to spacing, alignment, and responsive breakpoints ensures the site looks professional on all devices.

Project Planning and Development

Project planning combined Agile practices with UX thinking. I used user stories to capture requirements (for example: “As a mobile-first visitor, I want the site to be fully responsive and accessible so I can navigate easily.”). These stories guided development. The planning board (shown above) illustrates how tasks moved from “Todo” to “Done,” with features like animations or dark mode labeled as optional enhancements. Throughout development, I iterated on design decisions based on feedback and testing. Screenshots of the site were taken to track UI progress and plan content placement. This structured approach ensured that design thinking—from empathy (user stories) to ideation (wireframes) to implementation—was central to the project.
Accessibility and Responsive Design
Accessibility (WCAG) and mobile-first design were integral. I ensured high contrast and readable font sizes across the site. All interactive elements have descriptive labels (e.g. navigation links are clear, the CV download link has an aria-label via descriptive text). Images include meaningful alt text. Forms and buttons are keyboard-accessible. The site’s layout uses Bootstrap’s responsive grid plus custom CSS media queries. Breakpoints target common device widths so that columns stack vertically on small screens. The navigation menu collapses into a hamburger menu on narrow viewports. 

Figure: Mobile-first user story and acceptance criteria for responsive design. A specific user story focused on mobile responsiveness and accessibility drove the CSS strategy. Acceptance criteria included: layout adjusts fluidly to different screen widths, navigation collapses on small screens, font and images scale properly, and no horizontal scrolling occurs. Accordingly, I implemented CSS media queries (max-width: 768px) to change the About section to a single-column layout and adjusted image sizes. Testing on phone, tablet, and desktop confirmed that the design met these criteria, providing a consistent experience. Overall, the site passes the WCAG guidelines for scalable text and intuitive navigation on all devices.

Version Control, Deployment, and Validation

The project used Git for version control and GitHub for remote hosting. Meaningful commits (often using emoji-conventional style) document each feature or fix. For example, one commit adds the Steve Jobs quote video, another implements responsive navbar styling. The code is stored in a public GitHub repository with a clear commit history. The site is deployed to GitHub Pages, and all internal links and resources work correctly in the live environment. Before deployment, code validation was performed: the W3C Markup Validation Service was used on each HTML file, and the W3C CSS Validator checked the stylesheet. All pages passed validation with no errors. JavaScript console errors were resolved, ensuring a clean, error-free experience. These validation tools confirmed that standards and semantics are correctly applied (e.g. proper doctype, no broken HTML tags), which supports maintainability and accessibility.

AI Tools and Reflections

AI-assisted development tools were used judiciously. GitHub Copilot provided code suggestions for repetitive parts (like Bootstrap classes for layouts) and helped write initial CSS rules. ChatGPT was used as a coding assistant, for example to troubleshoot the deployment issue on GitHub Pages by suggesting a hard refresh and proper pushing commands (as seen in the VSCode chat panel). AI helped speed up writing boilerplate code (e.g. HTML structure) and offered optimization ideas (like using Flexbox for a grid). However, I made all final decisions on design and content; AI output was always reviewed and modified for correctness and style. This strategic use of AI improved productivity. For instance, when debugging responsive behavior, AI tools suggested specific CSS approaches which I then tested and implemented. In the reflections, I noted that AI contributed primarily as a pair-programmer: it saved time on routine code and pointed out fixes, but the overall architecture and user experience considerations remained human-driven. These tools did not replace original design work or final user testing; instead, they served as efficient helpers. A brief reflection on these tools is included in the README and comments (per the assessment criteria), emphasizing the outcomes (cleaner code, resolved bugs) over the prompts themselves.

Summary of Tools and Technologies

Languages & Frameworks: HTML5, CSS3, JavaScript (ES6), Bootstrap 5.
Developer Tools: Visual Studio Code, Git (version control), GitHub (remote repository & Pages), Chrome DevTools (testing).
Validation & Testing: W3C Markup Validation Service (HTML), W3C CSS Validator, Lighthouse for performance/accessibility, mobile device testing.
UX Design: Figma (for wireframing and mockups), Google Lighthouse (accessibility scores), custom Kanban board (project planning).
AI/Assistance: GitHub Copilot for code completion, ChatGPT for code debugging suggestions.
All project criteria (LO1–LO5) have been met and documented. The website is live and fully functional, demonstrating professional design, responsiveness, accessibility, code quality, and use of modern development workflows. This README provides an overview of the project goals, design approach, development process, and the technologies used.

In Summary ...

Abel Beyene - Personal Portfolio Website

Project Overview

Welcome to my HTML & CSS personal portfolio project. This website presents my journey as a front-end developer, highlighting my skills, showcasing completed projects, and offering users the ability to connect with me professionally.

This portfolio is fully responsive and includes key sections such as About, Services, Projects, Articles, and Contact.

View Live: GitHub Pages Deployment

Features

Landing Page (Home): Professional navigation bar linking to all sections.

About Me Page: Biography, professional journey, downloadable CV, "Hello World" animation GIF, and inspirational "Code is Poetry" GIF.

Services Page: Highlights of services I offer (Responsive Design, UX Design Consultation, GitHub support, etc.).

Projects Page: Interactive project cards showcasing previous work like "Love Running" and "Seven Seas Spa".

Articles Page: Curated articles for tech inspiration and business ideas, linking externally for more resources.

Contact Page: Clean and simple form to send messages via Getform integration.

Fixed background visuals for an enhanced professional look.

Accessible and responsive design for desktop, tablet, and mobile screens.

Technologies Used

HTML5

CSS3

Bootstrap 5 (for some layout enhancements)

Git & GitHub (Version control and hosting)

GitHub Pages (Deployment)

VS Code with GitHub Copilot assistance

Testing

All navigation links were manually tested on Chrome, Firefox, and Edge.

Responsive behavior was tested using Chrome DevTools (iPhone, iPad, Desktop resolutions).

Getform contact submission was manually tested.

All external "Read More" links on the Articles page open in a new tab.

Images have appropriate alt attributes for accessibility.

Lighthouse Audit Score: Passed Accessibility and Best Practices standards.

Bugs

Initial: Minor layout shifts on mobile devices were corrected with media queries.

Fixed: Steve Jobs video playback was fixed with correct play button script and media settings.

No major unresolved bugs found at time of deployment.

Future Enhancements

Add a downloadable PDF version of the CV for better compatibility.

Add basic animation effects (e.g., smooth scrolling, hover effects) purely with CSS.

Enhance Articles page with custom CMS integration.

Deployment

Project is hosted on GitHub Pages.

To clone the repository locally:

git clone https://github.com/anaylsethis2020/html-css-resume-project.git

Credits

Code Institute - For providing the course structure and assessment criteria.

GitHub Copilot - Assisted with code suggestions and layout structuring.

Unsplash, Pexels - Stock images used where necessary.

Ezgif.com - Used for GIF conversion.

Acknowledgements

Special thanks to my mentors, tutors, and classmates for their continued support throughout this journey.

Author: Abel Beyene

