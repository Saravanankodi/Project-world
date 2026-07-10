import BasicInfo from "@/components/form/BasicInfo"
import PaymentDetails from "@/components/form/PaymentDetails"
import PortfolioLinks from "@/components/form/PortfolioLinks"
import ProfilePhoto from "@/components/form/ProfilePhoto"
import ContactVerification from "@/components/ui/profile/ContactVerification"
import ProfileBanner from "@/components/ui/profile/ProfileBanner"
import ProfileInfo from "@/components/ui/profile/ProfileInfo"

const ProfilePage = () => {
    return (
    <>
    <section className="w-full h-auto bg-[#F3FCEF]">
        {/* <ProfileBanner/> */}
        {/* <main className="w-full grid grid-cols-12 gap-2">
            <div className="col-span-4 ">
                <h2 className="text-2xl">
                    hello
                </h2>
            </div>
            <div className="col-span-4 ">
                <h2 className="text-2xl">
                    hello
                </h2>
            </div>
            <div className="col-span-4 row-span-2 h-full">
                <h2 className="text-2xl">
                    hello
                </h2>
            </div>
            <div className="col-span-8">
                <ProfileInfo/>
            </div>

        </main> */}
        <PaymentDetails/>
        <PortfolioLinks/>
    </section>
    </>
    )
}

export default ProfilePage