"use client";

import { useRef } from "react";
import Image from "next/image";
import { Expand, Play } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import {
  Navigation,
  Thumbs,
  FreeMode,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

const gallery = [
  {
    id: 1,
    type: "image",
    src: "/preview/preview-1.jpg",
  },
  {
    id: 2,
    type: "image",
    src: "/preview/preview-2.jpg",
  },
  {
    id: 3,
    type: "image",
    src: "/preview/preview-3.jpg",
  },
  {
    id: 4,
    type: "video",
    src: "/images/video-thumbnail.jpg",
  },
];

export default function ImageGallery() {
  const thumbsSwiper = useRef<SwiperType | null>(null);
  const mainSwiper = useRef<SwiperType | null>(null);

  const handleFullscreen = () => {
    const el = document.getElementById("gallery-preview");

    if (el?.requestFullscreen) {
      el.requestFullscreen();
    }
  };

  return (
    <div className="w-full space-y-5">

      {/* Main Preview */}

      <div
        id="gallery-preview"
        className="relative overflow-hidden rounded-2xl"
      >
        <Swiper
          modules={[Navigation, Thumbs, EffectFade]}
          navigation
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(swiper) => (mainSwiper.current = swiper)}
          thumbs={{
            swiper:
              thumbsSwiper.current &&
              !thumbsSwiper.current.destroyed
                ? thumbsSwiper.current
                : null,
          }}
        >
          {gallery.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative aspect-video">
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handleFullscreen}
          className="absolute top-5 right-5 z-20 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
        >
          <Expand size={22} />
        </button>
      </div>

      {/* Thumbnails */}

      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
        watchSlidesProgress
        freeMode
        slidesPerView={4}
        spaceBetween={15}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={item.id}>
            <button
              onClick={() => mainSwiper.current?.slideTo(index)}
              className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-transparent transition hover:border-green-600"
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
              />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play
                    size={40}
                    className="fill-white text-white"
                  />
                </div>
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}