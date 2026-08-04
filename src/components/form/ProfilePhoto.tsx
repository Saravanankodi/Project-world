"use client";

import { Camera, Plus } from "lucide-react";
import { ChangeEvent, useRef } from "react";

interface ProfilePhotoProps {
  image: string;
  setImage: (image: string) => void;
  setPhoto: (photo: File | null) => void;
}

export default function ProfilePhoto({
  image,
  setImage,
  setPhoto,
}: ProfilePhotoProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPhoto(file);

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <div className="w-full max-w-100 rounded-2xl bg-white p-6 2xl:p-8 shadow-lg shadow-[#00000034]">
      <div className="flex justify-center">
        <div className="relative">
          <div className="flex h-36 w-36 md:h-42 md:w-42 xl:h-48 xl:w-48 2xl:h-56 2xl:w-56 items-center justify-center overflow-hidden rounded-full bg-[#EDF3EB]">
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

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-4 right-4 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg hover:bg-green-800"
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