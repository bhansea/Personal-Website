"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { useEffect } from 'react';
import Head from 'next/head';

const Photos = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
          // Isotope and other JS vendor functionality
          const Isotope = require('isotope-layout');
          const imagesLoaded = require('imagesloaded');
      
          const iso = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
          });
      
          // Ensure Isotope is fully initialized after images are loaded
          imagesLoaded('.isotope-container', function () {
            iso.layout();
          });
      
          // Add click event listeners to filter buttons
          const filters = document.querySelectorAll('.portfolio-filters li');
          filters.forEach(filter => {
            filter.addEventListener('click', function() {
              // Remove active class from all buttons and add to the clicked one
              filters.forEach(btn => btn.classList.remove('filter-active'));
              this.classList.add('filter-active');
      
              // Get the filter value from the clicked button and apply it
              const filterValue = this.getAttribute('data-filter');
              iso.arrange({ filter: filterValue });
            });
          });
        }
      }, []);


  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Photos</title>
            <meta name="description" content="Photos from my recent travels" />
            <meta name="keywords" content="photos, photography, hong kong, japan, korea, vietnam" />
            <link href="/assets/img/favicon.png" rel="icon" />
            <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        </Head>

      <main className="main">
        {/* Photos Section */}
        <section id="portfolio" className="portfolio section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Photos</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-japan">Japan</li>
                <li data-filter=".filter-vietnam">Vietnam</li>
                <li data-filter=".filter-south-korea">South Korea</li>
                <li data-filter=".filter-hong-kong">Hong Kong</li>
              </ul>

              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                {/* Photos Items */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="/assets/img/photos/japan/EANG1614.png" className="img-fluid" alt="Japan 1" />
                    <div className="portfolio-info">
                    <h4>Tokyu Kabukicho Tower</h4>
                    <p>July 5, 2024</p>
                    <a href="/assets/img/photos/japan/EANG1614.png" title="Tokyu Kabukicho Tower" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="\assets\img\photos\south-korea\BGJM4828.JPEG" className="img-fluid" alt="South Korea 2" />
                    <div className="portfolio-info">
                    <h4>Myeongdong Night Market</h4>
                    <p>July 17, 2024</p>
                    <a href="\assets\img\photos\south-korea\BGJM4828.JPEG" title="Myeongdong Night Market" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam square">
                    <img src="/assets/img/photos/vietnam/FFMA3106.JPEG" className="img-fluid" alt="Vietnam 1" />
                    <div className="portfolio-info">
                    <h4>Ninh Xuân</h4>
                    <p>July 15, 2024</p>
                    <a href="/assets/img/photos/vietnam/FFMA3106.JPEG" title="Ninh Xuân" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="/assets/img/photos/south-korea/AEXY6203.JPEG" className="img-fluid" alt="South Korea 1" />
                    <div className="portfolio-info">
                    <h4>Starfield Library (COEX)</h4>
                    <p>July 18, 2024</p>
                    <a href="/assets/img/photos/south-korea/AEXY6203.JPEG" title="Starfield Library (COEX)" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam square">
                    <img src="\assets\img\photos\vietnam\LFQU8266.JPEG" className="img-fluid" alt="Vietnam 2" />
                    <div className="portfolio-info">
                    <h4>Lanterns</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\LFQU8266.JPEG" title="Lanterns" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="\assets\img\photos\japan\JIOO5904.png" className="img-fluid" alt="Japan 2" />
                    <div className="portfolio-info">
                    <h4>Spain-zaka Slope</h4>
                    <p>July 3, 2024</p>
                    <a href="\assets\img\photos\japan\JIOO5904.png" title="Spain-zaka Slope" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>



              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default Photos;
