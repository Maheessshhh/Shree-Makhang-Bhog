/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --dark-color: #2c3e50;
    --light-color: #ecf0f1;
    --text-color: #34495e;
    --white: #ffffff;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);
    --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--white);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    padding: 10px 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-logo i {
    font-size: 2rem;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-link {
    font-weight: 500;
    color: var(--text-color);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-cta {
    padding: 10px 20px;
    background: var(--gradient);
    color: var(--white);
    border-radius: 50px;
    font-weight: 600;
}

.nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.3s ease;
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: var(--white);
    padding: 100px 20px 50px;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1920') center/cover;
    opacity: 0.15;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 53, 0.9), rgba(247, 147, 30, 0.9));
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 1000px;
}

.hero-title {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 40px;
    opacity: 0.95;
    animation: fadeInUp 1s ease 0.2s backwards;
}

.highlight {
    color: #ffe66d;
    position: relative;
    display: inline-block;
}

.hero-cta {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease 0.4s backwards;
}

.btn {
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: var(--white);
    color: var(--primary-color);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);
}

.btn-secondary:hover {
    background: var(--white);
    color: var(--primary-color);
}

.hero-stats {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 60px;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item i {
    font-size: 2.5rem;
    color: #ffe66d;
}

.stat-content h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.stat-content p {
    font-size: 0.9rem;
    opacity: 0.9;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-indicator i {
    font-size: 2rem;
    color: var(--white);
}

/* Section Styles */
section {
    padding: 80px 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-tag {
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(135deg, #ff6b3520, #f7931e20);
    color: var(--primary-color);
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.section-title {
    font-size: 3rem;
    color: var(--dark-color);
    margin-bottom: 15px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-color);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
}

/* Featured Categories */
.featured-categories {
    background: var(--light-color);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.category-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    position: relative;
}

.category-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.category-card.featured {
    border: 3px solid var(--primary-color);
}

.card-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--gradient);
    color: var(--white);
    padding: 8px 15px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 5px;
}

.card-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.category-card:hover .card-image img {
    transform: scale(1.1);
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
}

.category-card:hover .card-overlay {
    opacity: 1;
}

.card-btn {
    padding: 12px 30px;
    background: var(--white);
    color: var(--primary-color);
    border-radius: 50px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.card-btn:hover {
    background: var(--primary-color);
    color: var(--white);
}

.card-content {
    padding: 30px;
}

.card-title {
    font-size: 1.5rem;
    color: var(--dark-color);
    margin-bottom: 15px;
}

.card-description {
    color: var(--text-color);
    margin-bottom: 20px;
    line-height: 1.7;
}

.card-features {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.card-features span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: var(--primary-color);
    font-weight: 500;
}

.card-features i {
    font-size: 1rem;
}

/* Menu Highlights */
.menu-highlights {
    background: var(--white);
    padding: 40px;
    border-radius: 20px;
    box-shadow: var(--shadow);
}

.highlights-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
    color: var(--dark-color);
}

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: var(--light-color);
    border-radius: 15px;
    transition: all 0.3s ease;
}

.highlight-item:hover {
    background: var(--gradient);
    color: var(--white);
    transform: translateX(5px);
}

.highlight-item i {
    font-size: 2rem;
    color: var(--primary-color);
}

.highlight-item:hover i {
    color: var(--white);
}

/* Gallery */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.gallery-item {
    position: relative;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.2);
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 30px 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-overlay h4 {
    color: var(--white);
    font-size: 1.3rem;
}

/* Location & Hours */
.location-hours {
    background: var(--light-color);
}

.location-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.info-block {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    padding: 25px;
    background: var(--white);
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.info-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.info-content h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--dark-color);
}

.info-content p {
    color: var(--text-color);
    line-height: 1.8;
}

.info-content a {
    color: var(--primary-color);
    font-weight: 600;
}

.open-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #27ae60;
    font-weight: 600;
    margin-top: 10px;
}

.open-badge i {
    animation: pulse 2s infinite;
}

.cta-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.location-map {
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

/* Footer */
.footer {
    background: var(--dark-color);
    color: var(--white);
    padding: 60px 20px 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.footer-logo i {
    font-size: 2rem;
    color: var(--primary-color);
}

.footer-section p {
    opacity: 0.8;
    line-height: 1.8;
}

.footer-social {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.footer-social a {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.footer-social a:hover {
    background: var(--gradient);
    transform: translateY(-3px);
}

.footer-section h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 12px;
}

.footer-section ul li a:hover {
    color: var(--primary-color);
    padding-left: 5px;
}

.footer-section i {
    color: var(--primary-color);
    margin-right: 10px;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom i {
    color: #e74c3c;
    animation: heartbeat 1.5s infinite;
}

/* Back to Top */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient);
    color: var(--white);
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-10px);
    }
    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    10%, 30% {
        transform: scale(1.1);
    }
    20%, 40% {
        transform: scale(1);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: var(--white);
        flex-direction: column;
        padding: 50px 20px;
        box-shadow: var(--shadow);
        transition: left 0.3s ease;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-toggle {
        display: flex;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .hero-cta {
        flex-direction: column;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .categories-grid {
        grid-template-columns: 1fr;
    }
    
    .location-grid {
        grid-template-columns: 1fr;
    }
    
    .location-map {
        height: 300px;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .btn {
        padding: 12px 25px;
        font-size: 0.9rem;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
}




