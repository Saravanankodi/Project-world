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

interface ImageGalleryProps {
  images: string[];
  video?: string;
}

export default function ImageGallery({
  images,
  video,
}: ImageGalleryProps) {

  const thumbsSwiper = useRef<SwiperType | null>(null);
  const mainSwiper = useRef<SwiperType | null>(null);


  const gallery = [
    ...images.map((src, index) => ({
      id: `image-${index}`,
      type: "image",
      src,
    })),

    ...(video
      ? [
          {
            id: "video",
            type: "video",
            src: video,
          },
        ]
      : []),
  ];


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
          onSwiper={(swiper) =>
            (mainSwiper.current = swiper)
          }
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

                {item.type === "image" ? (

                  <Image
                    src={item.src}
                    alt="Project screenshot"
                    fill
                    className="object-cover"
                  />

                ) : (

                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />

                )}

              </div>

            </SwiperSlide>
          ))}

        </Swiper>


        <button
          onClick={handleFullscreen}
          className="absolute right-5 top-5 z-20 rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
        >
          <Expand size={22}/>
        </button>

      </div>



      {/* Thumbnails */}

      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={(swiper) =>
          (thumbsSwiper.current = swiper)
        }
        watchSlidesProgress
        freeMode
        slidesPerView={4}
        spaceBetween={15}
      >

        {gallery.map((item,index)=>(

          <SwiperSlide key={item.id}>

            <button
              onClick={() =>
                mainSwiper.current?.slideTo(index)
              }
              className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-transparent hover:border-green-600"
            >

              {item.type === "image" ? (

                <Image
                  src={item.src}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />

              ) : (

                <>
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play
                      size={40}
                      className="fill-white text-white"
                    />
                  </div>
                </>

              )}

            </button>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}