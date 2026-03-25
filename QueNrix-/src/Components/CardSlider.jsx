import React, { useEffect, useRef, useState } from "react";
import "./CardSlider.css";

const FALLBACK_ITEMS = [1, 2, 3, 4, 5, 6, 7];

const CardSlider = ({
  items = FALLBACK_ITEMS,
  renderItem,
  ariaLabel = "Card slider",
  itemWidth = "clamp(260px, 30vw, 380px)",
}) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 0);

  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    updateButtons();

    const container = containerRef.current;
    if (!container) return undefined;

    const handleScroll = () => updateButtons();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateButtons);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateButtons);
    };
  }, [items]);

  const getScrollAmount = () => {
    const container = containerRef.current;
    if (!container) return 320;

    const firstCard = container.querySelector(".slider-item");
    if (!firstCard) return Math.max(container.clientWidth * 0.9, 280);

    const gap = Number.parseFloat(getComputedStyle(container).columnGap || getComputedStyle(container).gap || "0");
    return firstCard.clientWidth + gap;
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  };

  return (
    <div className="slider-wrapper" style={{ "--slider-item-width": itemWidth }}>
      <button
        className="nav-btn"
        onClick={scrollLeft}
        aria-label="Show previous cards"
        disabled={!canScrollLeft}
      >
        {"<"}
      </button>

      <div className="card-container" ref={containerRef} aria-label={ariaLabel}>
        {items.map((item, index) => {
          const objectKey = item && typeof item === "object" ? item.id || item.slug || item.name : item;

          return (
            <div className="slider-item" key={`${index}-${objectKey ?? "card"}`}>
              {renderItem ? (
                renderItem(item, index)
              ) : (
                <div className="card">
                  Card {item}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        className="nav-btn"
        onClick={scrollRight}
        aria-label="Show next cards"
        disabled={!canScrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default CardSlider;