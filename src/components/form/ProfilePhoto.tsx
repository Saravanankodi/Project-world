"use client";

import { Camera, Plus } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

export default function ProfilePhoto() {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8  shadow-lg shadow-[#00000034]">
      <div className="flex justify-center">
        <div className="relative">
          {/* Upload Circle */}
          <div className="flex h-36 w-36 sm:h-56 sm:w-56 items-center justify-center overflow-hidden rounded-full bg-[#EDF3EB]">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <Camera
                size={70}
                className="text-gray-500"
                strokeWidth={1.8}
              />
            )}
          </div>

          {/* Floating Upload Button */}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-4 right-4 flex h-10 w-10  sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition hover:bg-green-800"
          >
            <Camera size={20} />

            <Plus
              size={12}
              className="absolute right-0 top-0 sm:right-3 sm:top-3 rounded-full bg-green-700"
            />
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-lg md:text-3xl font-bold text-gray-900">
          Profile Photo
        </h2>

        <p className="mt-4 text-sm md:text-lg text-gray-500">
          Clear photos help members recognize
          <br />
          you (400×400px recommended).
        </p>
      </div>
    </div>
  );
}