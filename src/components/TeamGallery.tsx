import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './TeamGallery.css';

export type TeamGalleryItem = {
  title: string;
  url: string;
  caption: string;
};

type TeamGalleryProps = {
  items: TeamGalleryItem[];
};

const TeamGallery = ({ items }: TeamGalleryProps) => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewIndex(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewIndex]);

  const activeItem = previewIndex !== null ? items[previewIndex] : null;

  return (
    <div className="team-gallery">
      <Swiper
        modules={[EffectCoverflow, Keyboard, Mousewheel]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        spaceBetween={24}
        speed={420}
        loop={false}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 0.6, releaseOnEdges: true }}
        coverflowEffect={{
          rotate: 28,
          stretch: 0,
          depth: 200,
          modifier: 1.1,
          slideShadows: false,
        }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="team-gallery__swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.url}-${index}`} className="team-gallery__slide">
            <div className="team-gallery__slide-inner">
              <button
                type="button"
                className="team-gallery__card border-gradient"
                onClick={() => setPreviewIndex(index)}
              >
                <div className="team-gallery__image">
                  <img
                    className="team-gallery__img"
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="team-gallery__content">
                  <h4 className="team-gallery__title">{item.title}</h4>
                  <p className="team-gallery__desc">{item.caption}</p>
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeItem && (
        <div
          className="team-gallery__modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="team-gallery__modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="team-gallery__modal-close"
              onClick={() => setPreviewIndex(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <img
              src={activeItem.url}
              alt={activeItem.title}
              className="team-gallery__modal-image"
            />
            <div className="team-gallery__modal-content">
              <h4 className="team-gallery__modal-title">{activeItem.title}</h4>
              <p className="team-gallery__modal-desc">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamGallery;
