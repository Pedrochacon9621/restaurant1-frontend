import { useRef, useState, useEffect } from "react";

export function Slider1() {
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null); // referencia para controlar el intervalo
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: "slide-1", src: "/imgSlider/1 (1).jpg" },
    { id: "slide-2", src: "/imgSlider/1 (2).jpg" },
    { id: "slide-3", src: "/imgSlider/1 (3).jpg" },
    { id: "slide-4", src: "/imgSlider/1 (4).jpg" },
    { id: "slide-5", src: "/imgSlider/1 (5).jpg" },
  ];

  const startAutoplay = () => {
    const slider = sliderRef.current;
    if (!slider || autoplayRef.current) return;

    autoplayRef.current = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const atEnd = Math.round(slider.scrollLeft) >= maxScroll;

      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
      }
    }, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  };

  const handlePrev = () => {
    stopAutoplay();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    startAutoplay();
  };

  const handleImageClick = () => {
    stopAutoplay(); // pausa autoplay al hacer clic en la imagen
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);
    startAutoplay(); // inicia autoplay al montar

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      stopAutoplay(); // limpia autoplay al desmontar
    };
  }, []);

  return (
    <div>
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              id={slide.id}
              src={slide.src}
              alt={`Slide ${index + 1}`}
              onClick={handleImageClick}
            />
          ))}
        </div>

        <button className="slider-btn prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-btn next" onClick={handleNext}>
          &#10095;
        </button>

        <div className="slider-nav">
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={`#${slide.id}`}
              className={activeIndex === index ? "active" : ""}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
}
