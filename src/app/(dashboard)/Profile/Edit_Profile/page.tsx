"use client";

import Button from '@/components/Button/Button';
import BasicInfo from '@/components/form/BasicInfo'
import PaymentDetails from '@/components/form/PaymentDetails'
import PortfolioLinks from '@/components/form/PortfolioLinks'
import ProfilePhoto from '@/components/form/ProfilePhoto'
import RightArrow from '@/components/icons/cards/RightArrow';
import ContactVerification from '@/components/ui/profile/ContactVerification'
import PortfolioSocialsCard from '@/components/ui/profile/PortfolioSocialsCard'
import ProfileInfo from '@/components/ui/profile/ProfileInfo'
import FormTextarea from '@/components/ui/Upload_Project/FormTextarea'
import { auth } from '@/lib/firebase';
import { geist, inter } from '@/lib/fonts'
import { getUserProfile, saveUserProfile } from '@/services/user';
import { ArrowRightToLine } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function page() {
    const [loading, setLoading] = useState(false);
    // const [photo, setPhoto] = useState<File | null>(null);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        age: 18,
        gender: "none" as "none" | "male" | "female",
        userType: "student" as "student" | "professional",
        experience: 0,
        location: "",
        intro: "",
        profileImg: "",
        payment: {
            method: "bank" as "bank" | "upi",
            accountHolder: "",
            bankName: "",
            accountNumber: "",
            ifsc: "",
            upiId: "",
            phoneNumber: "",
        },
        portfolioLinks: {
            github: "",
            linkedin: "",
            website: "",
            behance: "",
        },
    });

    const handleSubmit = async () => {
        const user = auth.currentUser;

        if (!user) {
            alert("Please sign in first.");
            return;
        }

        try {
            setLoading(true);

            let profileImg = profile.profileImg;

            // Upload new image if selected
            // if (photo) {
            // profileImg = await uploadProfileImage(user.uid, photo);
            // }

            await saveUserProfile(user.uid, {
                ...profile,

                uid: user.uid,

                email: user.email ?? "",

                phone: user.phoneNumber ?? "",

                profileImg,
            });

            alert("Profile saved successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to save profile.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadProfile = async () => {
            const user = auth.currentUser;

            if (!user) return;

            const data = await getUserProfile(user.uid);

            if (data) {
                setProfile({
                    ...data,
                    payment: {
                        method: data.payment?.method ?? "bank",
                        accountHolder: data.payment?.accountHolder ?? "",
                        bankName: data.payment?.bankName ?? "",
                        accountNumber: data.payment?.accountNumber ?? "",
                        ifsc: data.payment?.ifsc ?? "",
                        upiId: data.payment?.upiId ?? "",
                        phoneNumber: data.payment?.phoneNumber ?? "",
                    },
                });
            }
        };

        loadProfile();
    }, []);
    return (
        <div className='px-5 py-4 bg-[#F3FCEF] space-y-5'>

            <div className={`${geist.className} mb-1 text-2xl lg:text-[32px] font-bold text-[#006E2F]`}>Tell us about yourself</div>

            <div className={`${inter.className} mb-3 text-sm xl:text-base font-normal text-[#3D4A3D]`}>Build trust with personalized recommendations and let the community know who you are.</div>


            <div className='flex  sm:flex-row flex-col gap-6'>
                <ProfilePhoto />

                <BasicInfo
                    profile={profile}
                    setProfile={setProfile} />
            </div>
            <div className='w-full grid sm:grid-cols-[3fr_2fr] gap-6'>
                <PaymentDetails
                    profile={profile}
                    setProfile={setProfile} />
                <PortfolioLinks
                    profile={profile}
                    setProfile={setProfile} />
            </div>

            <div className='w-full sm:flex gap-6 '>
                <ContactVerification />
                <div className='w-full flex flex-col mt-3 sm:mt-0 bg-white shadow-lg shadow-[#00000034] rounded-2xl p-3 sm:p-5'>
                    <FormTextarea
                        label='Short Introduction'
                        value={profile.intro}
                        onChange={(e) => (
                            setProfile(
                                (prev: any) => ({
                                    ...prev,
                                    intro: e.target.value
                                })
                            )
                        )}
                        placeholder='Tell the community about yourself, your goals, and what you`re looking for...'
                    />
                    <div className='flex items-center justify-end'>
                        <p className={`${inter.className} text-[#3D4A3D] text-[11px]`}>
                            Maximum 300 characters
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full flex items-center justify-end gap-5">
                <Button
                    className='bg-[#006E2F] text-white '
                    disabled={loading}
                    onClick={handleSubmit}
                    rightIcon={<ArrowRightToLine className='w-5 h-5 text-white' />}>
                    {loading ? "Saving..." : "Save Profile"}
                </Button>
            </div>
        </div>
    )
}

export default page