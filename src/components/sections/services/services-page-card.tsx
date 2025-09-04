import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import AboutUsCard from "../about/about-card";
import { useTranslation } from "react-i18next";

const ServicesPageSection: React.FC = () => {
   const { t } = useTranslation("services");
    return (
        <SectionContainer className="w-full bg-gray-50 mt-10">
            <div className="">
                <div className="space-y-6 md:space-y-8">
                    <AboutUsCard
                        title={t("ourConcepts.General.title")}
                        content={t("ourConcepts.General.description")}
                        imageUrl="/images/about-mission.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Vaccinations.title")}
                        content={t("ourConcepts.Vaccinations.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Surgeries.title")}
                        content={t("ourConcepts.Surgeries.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Dental-care.title")}
                        content={t("ourConcepts.Dental-care.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Grooming.title")}
                        content={t("ourConcepts.Grooming.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Laboratory.title")}
                        content={t("ourConcepts.Laboratory.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.X-Ray.title")}
                        content={t("ourConcepts.X-Ray.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Isolation.title")}
                        content={t("ourConcepts.Isolation.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Pharmacy.title")}
                        content={t("ourConcepts.Pharmacy.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Luxury.title")}
                        content={t("ourConcepts.Luxury.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Microchips.title")}
                        content={t("ourConcepts.Microchips.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Emergency.title")}
                        content={t("ourConcepts.Emergency.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.International.title")}
                        content={t("ourConcepts.International.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Nutrition.title")}
                        content={t("ourConcepts.Nutrition.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Passport.title")}
                        content={t("ourConcepts.Passport.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Pickup.title")}
                        content={t("ourConcepts.Pickup.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Session.title")}
                        content={t("ourConcepts.Session.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Pet-Shop.title")}
                        content={t("ourConcepts.Pet-Shop.description")}
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title={t("ourConcepts.Kennels.title")}
                        content={t("ourConcepts.Kennels.description")}
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                </div>
            </div>
        </SectionContainer>
    );
};

export default ServicesPageSection;
