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
          const Isotope = require('isotope-layout');
          const imagesLoaded = require('imagesloaded');
      
          const iso = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
          });
      
          imagesLoaded('.isotope-container', function () {
            iso.layout();
          });
      
          const filters = document.querySelectorAll('.portfolio-filters li');
          filters.forEach(filter => {
            filter.addEventListener('click', function() {
              filters.forEach(btn => btn.classList.remove('filter-active'));
              this.classList.add('filter-active');
      
              const filterValue = this.getAttribute('data-filter');
              iso.arrange({ filter: filterValue });
            });
          });
        }
      }, []);

      useEffect(() => {
        const lightbox = GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: true,
          zoomable: true,
          onOpen: () => {
            document.querySelectorAll('.gslide img').forEach((img) => {
              img.style.maxWidth = '80vw';
              img.style.maxHeight = '80vh';
            });
            document.querySelectorAll('.gdesc, .gslide-description, .gslide-title, .gdesc-inner').forEach((el) => {
                el.style.display = 'none';
              });
          },
          onSlideChanged: (slide) => {
            const img = slide.querySelector('img');
            if (img) {
              img.style.maxWidth = '80vw';
              img.style.maxHeight = '80vh';
              img.style.width = 'auto';
              img.style.height = 'auto';
            }
          },
        });
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
            <p>Here is a collection of photos from my recent travels! While I’m by no means a professional photographer, I greatly enjoy capturing moments that allow me to relive the diverse experiences and cultures I’ve encountered. From the bustling city streets of Hong Kong to the incredible natural landscapes of Vietnam, these memories hold significant meaning—they serve as a reminder of the beauty and diversity of the world, and the rich experiences that come from exploring new places. I hope these photos allow you to share in those moments with me!</p>
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
                {/* Row 1 */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="/assets/img/photos/japan/EANG1614.png" className="img-fluid" alt="Japan 1" />
                    <div className="portfolio-info">
                    <h4>Tokyu Kabukicho Tower</h4>
                    <p>July 5, 2024</p>
                    <a href="/assets/img/photos/japan/EANG1614.png" title="Tokyu Kabukicho Tower" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea short">
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
                    <h4>Ninh Xuân, Hoa Lư</h4>
                    <p>July 15, 2024</p>
                    <a href="/assets/img/photos/vietnam/FFMA3106.JPEG" title="Ninh Xuân, Hoa Lư" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row 2 */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea short">
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

                {/* Row 3 */}
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="\assets\img\photos\vietnam\LJOR8410.JPEG" className="img-fluid" alt="Vietnam 3" />
                    <div className="portfolio-info">
                    <h4>Koi Cafe</h4>
                    <p>July 10, 2024</p>
                    <a href="\assets\img\photos\vietnam\LJOR8410.JPEG" title="Koi Cafe" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="\assets\img\photos\japan\LPQX3425.png" className="img-fluid" alt="Japan 3" />
                    <div className="portfolio-info">
                    <h4>Hour Sushi</h4>
                    <p>July 3, 2024</p>
                    <a href="\assets\img\photos\japan\LPQX3425.png" title="Hour Sushi" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea square">
                    <img src="\assets\img\photos\south-korea\NXYC2228.JPEG" className="img-fluid" alt="South Korea 3" />
                    <div className="portfolio-info">
                    <h4>Buddha Shrine</h4>
                    <p>July 18, 2024</p>
                    <a href="\assets\img\photos\south-korea\NXYC2228.JPEG" title="Buddha Shrine" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row 4 */}
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="\assets\img\photos\japan\MPUE3449.png" className="img-fluid" alt="Japan 4" />
                    <div className="portfolio-info">
                    <h4>Sensō-ji</h4>
                    <p>July 2, 2024</p>
                    <a href="\assets\img\photos\japan\MPUE3449.png" title="Sensō-ji" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea square">
                    <img src="\assets\img\photos\south-korea\PAEE9631.JPEG" className="img-fluid" alt="South Korea 4" />
                    <div className="portfolio-info">
                    <h4>Palace Royal Guard Changing Ceremony</h4>
                    <p>July 19, 2024</p>
                    <a href="\assets\img\photos\south-korea\PAEE9631.JPEG" title="Palace Royal Guard Changing Ceremony" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="\assets\img\photos\vietnam\LMEH0848.JPEG" className="img-fluid" alt="Vietnam 4" />
                    <div className="portfolio-info">
                    <h4>Ninh Bình</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\LMEH0848.JPEG" title="Ninh Bình" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row 5 */}
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="\assets\img\photos\south-korea\PRNH5522.JPEG" className="img-fluid" alt="South Korea 5" />
                    <div className="portfolio-info">
                    <h4>Bongeunsa Temple</h4>
                    <p>July 18, 2024</p>
                    <a href="\assets\img\photos\south-korea\PRNH5522.JPEG" title="Bongeunsa Temple" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="\assets\img\photos\vietnam\MKJD2079.JPEG" className="img-fluid" alt="Vietnam 5" />
                    <div className="portfolio-info">
                    <h4>Rail Cafe</h4>
                    <p>July 14, 2024</p>
                    <a href="\assets\img\photos\vietnam\MKJD2079.JPEG" title="Rail Cafe" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan square">
                    <img src="\assets\img\photos\japan\OEWL1568.png" className="img-fluid" alt="Japan 5" />
                    <div className="portfolio-info">
                    <h4>Gas Science Museum Rooftop</h4>
                    <p>July 3, 2024</p>
                    <a href="\assets\img\photos\japan\OEWL1568.png" title="Gas Science Museum Rooftop" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                {/* Row 6 */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam short">
                    <img src="\assets\img\photos\vietnam\MPXX8011.JPEG" className="img-fluid" alt="Vietnam 6" />
                    <div className="portfolio-info">
                    <h4>Bai Dinh Pagoda</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\MPXX8011.JPEG" title="Bai Dinh Pagoda" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan short">
                    <img src="\assets\img\photos\japan\QSNH4741.png" className="img-fluid" alt="Japan 6" />
                    <div className="portfolio-info">
                    <h4>Taitō City Street</h4>
                    <p>July 2, 2024</p>
                    <a href="\assets\img\photos\japan\QSNH4741.png" title="Taitō City Street" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea square">
                    <img src="\assets\img\photos\south-korea\WVMS5850.JPEG" className="img-fluid" alt="South Korea 6" />
                    <div className="portfolio-info">
                    <h4>Myeong-dong Street</h4>
                    <p>July 17, 2024</p>
                    <a href="\assets\img\photos\south-korea\WVMS5850.JPEG" title="Myeong-dong Street" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                {/* Row 7 */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="\assets\img\photos\vietnam\NDHM8386.JPEG" className="img-fluid" alt="Vietnam 7" />
                    <div className="portfolio-info">
                    <h4>Tràng An Temple</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\NDHM8386.JPEG" title="Tràng An Temple" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="\assets\img\photos\japan\ROFX9665.png" className="img-fluid" alt="Japan 7" />
                    <div className="portfolio-info">
                    <h4>Shinjuku Godzilla Head</h4>
                    <p>July 5, 2024</p>
                    <a href="\assets\img\photos\japan\ROFX9665.png" title="Shinjuku Godzilla Head" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="\assets\img\photos\south-korea\XAAC8644.JPEG" className="img-fluid" alt="South Korea 7" />
                    <div className="portfolio-info">
                    <h4>Cheonggyecheon</h4>
                    <p>July 20, 2024</p>
                    <a href="\assets\img\photos\south-korea\XAAC8644.JPEG" title="Cheonggyecheon" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                {/* Row 8 */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea square">
                    <img src="\assets\img\photos\south-korea\XIQR5401.JPEG" className="img-fluid" alt="South Korea 8" />
                    <div className="portfolio-info">
                    <h4>In Gyeongbokgung Palace</h4>
                    <p>July 19, 2024</p>
                    <a href="\assets\img\photos\south-korea\XIQR5401.JPEG" title="In Gyeongbokgung Palace" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan square">
                    <img src="\assets\img\photos\japan\XOGU2150.png" className="img-fluid" alt="Japan 8" />
                    <div className="portfolio-info">
                    <h4>Shinjuku Street</h4>
                    <p>July 5, 2024</p>
                    <a href="\assets\img\photos\japan\XOGU2150.png" title="Shinjuku Street" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam short">
                    <img src="\assets\img\photos\vietnam\QBQA6981.JPEG" className="img-fluid" alt="Vietnam 8" />
                    <div className="portfolio-info">
                    <h4>Fishing Boat Vietnam</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\QBQA6981.JPEG" title="Fishing Boat Vietnam" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row 9 */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="\assets\img\photos\vietnam\VMHN4729.JPEG" className="img-fluid" alt="Vietnam 9" />
                    <div className="portfolio-info">
                    <h4>Hạ Long Bay</h4>
                    <p>July 11, 2024</p>
                    <a href="\assets\img\photos\vietnam\VMHN4729.JPEG" title="Hạ Long Bay" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam square">
                    <img src="\assets\img\photos\vietnam\YDKF7821.JPEG" className="img-fluid" alt="Vietnam 10" />
                    <div className="portfolio-info">
                    <h4>Lotus Fields</h4>
                    <p>July 15, 2024</p>
                    <a href="\assets\img\photos\vietnam\YDKF7821.JPEG" title="Lotus Fields" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="\assets\img\photos\south-korea\YBQJ4786.JPEG" className="img-fluid" alt="South Korea 9" />
                    <div className="portfolio-info">
                    <h4>In Changgyeonggung Palace</h4>
                    <p>July 19, 2024</p>
                    <a href="\assets\img\photos\south-korea\YBQJ4786.JPEG" title="In Changgyeonggung Palace" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row 10 */}
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hong-kong short">
                    <img src="\assets\img\photos\hong-kong\building.jpg" className="img-fluid" alt="Hong Kong 1" />
                    <div className="portfolio-info">
                    <h4>The Arch Skyscraper</h4>
                    <p>January 8, 2023</p>
                    <a href="\assets\img\photos\hong-kong\building.jpg" title="The Arch Skyscraper" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hong-kong">
                    <img src="\assets\img\photos\hong-kong\cow.jpg" className="img-fluid" alt="Hong Kong 2" />
                    <div className="portfolio-info">
                    <h4>Cow</h4>
                    <p>January 7, 2023</p>
                    <a href="\assets\img\photos\hong-kong\cow.jpg" title="Cow" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hong-kong">
                    <img src="\assets\img\photos\hong-kong\llama_island.jpg" className="img-fluid" alt="Hong Kong 3" />
                    <div className="portfolio-info">
                    <h4>Lamma Island</h4>
                    <p>January 8, 2023</p>
                    <a href="\assets\img\photos\hong-kong\llama_island.jpg" title="Lamma Island" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-hong-kong">
                    <img src="\assets\img\photos\hong-kong\temple.jpg" className="img-fluid" alt="Hong Kong 4" />
                    <div className="portfolio-info">
                    <h4>Ngong Ping Temple</h4>
                    <p>January 7, 2023</p>
                    <a href="\assets\img\photos\hong-kong\temple.jpg" title="Ngong Ping Temple" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                {/* Row Template */}
                {/*
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-south-korea">
                    <img src="xxx" className="img-fluid" alt="South Korea x" />
                    <div className="portfolio-info">
                    <h4></h4>
                    <p>July x, 2024</p>
                    <a href="xxx" title="xxx" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-vietnam">
                    <img src="xxx" className="img-fluid" alt="Vietnam x" />
                    <div className="portfolio-info">
                    <h4></h4>
                    <p>July x, 2024</p>
                    <a href="xxx" title="xxx" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-japan">
                    <img src="xxx" className="img-fluid" alt="Japan x" />
                    <div className="portfolio-info">
                    <h4></h4>
                    <p>July x, 2024</p>
                    <a href="xxx" title="xxx" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    </div>
                </div>
                */}

              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default Photos;
