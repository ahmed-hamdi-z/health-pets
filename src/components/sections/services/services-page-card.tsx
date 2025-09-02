import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import AboutUsCard from "../about/about-card";

const ServicesPageSection: React.FC = () => {
    return (
        <SectionContainer className="w-full bg-gray-50 mt-10">
            <div className="">
                <div className="space-y-6 md:space-y-8">
                    <AboutUsCard
                        title="Surgical operations"
                        content="The quick brown fox jumps over the lazy dog. Donec nec justo eget felis facilisis fermentum."
                        imageUrl="/images/about-mission.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title="Home Delevery"
                        content="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra."
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title="X-Rays"
                        content="Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat."
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title="24-hour emergency service"
                        content="Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title="boarding"
                        content="Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title="Specialized veterinarians"
                        content="Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate."
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title="Core Values"
                        content="Compassion: Treating pets as family. Excellence: Providing top-quality veterinary care Trust: Transparency and reliability. Innovation: Cutting-edge treatments "
                        imageUrl="/images/about-value.png"
                        imagePosition="left"
                        className="rounded-r-full bg-[#99D8E0]/70"
                    />
                    <AboutUsCard
                        title="Vision"
                        content="To be Riyadh's premier pet healthcare destination, offering state-of-the-artmedical services in a luxurious,nurturing environment"
                        imageUrl="/images/about-vision.png"
                        imagePosition="right"
                        className="rounded-l-full bg-[#F9EFA7]"
                    />
                    <AboutUsCard
                        title="Core Values"
                        content="Compassion: Treating pets as family. Excellence: Providing top-quality veterinary care Trust: Transparency and reliability. Innovation: Cutting-edge treatments "
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
