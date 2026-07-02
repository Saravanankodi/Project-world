import Stepper from "@/components/ui/Upload_Project/Stepper";
import UploadHeader from "@/components/ui/Upload_Project/UploadHeader";
import ProjectInformation from "@/components/ui/Upload_Project/ProjectInformation";

export default function UploadProjectPage() {
    return (
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">

            <Stepper currentStep={1} />

            <UploadHeader
                title="Upload Your Project"
                description="Share your innovation with students and creators worldwide."
            />

            <ProjectInformation />

        </div>
    );
}