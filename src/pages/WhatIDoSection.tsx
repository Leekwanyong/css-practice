import Description from "../components/common/Text/Description";
import Title from "../components/common/Text/Title";

function WhatIDoSection() {
    return (
        <article className="mt-44">
            <div className="mb-20">
                <Title>What I do</Title>
            </div>
            <div className="flex gap-4 justify-between">
                <div className="flex flex-col items-start gap-4">
                    <img src="/asset/icon/mobile_web_design.svg" alt="mobile" />
                    <div className="flex flex-col gap-4">
                        <Description size="lg" color="primary" className="font-bold">
                            Mobile & Web Design
                        </Description>
                        <Description color="gray">
                            Need a website or mobile app? I can create <br /> beautiful websites or mobile apps based on{" "}
                            <br />
                            your content, or redesign your old website <br /> to improve user engagement or achieve
                            <br />
                            your business goals.
                        </Description>
                        <Description size="md">Get an estimate</Description>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <img src="/asset/icon/graphicdesign.svg" alt="mobile" />
                    <div className="flex flex-col gap-4">
                        <Description size="lg" color="primary" className="font-bold">
                            Graphic Design
                        </Description>
                        <Description color="gray">
                            Need a website or mobile app? I can create <br /> beautiful websites or mobile apps based on{" "}
                            <br />
                            your content, or redesign your old website <br /> to improve user engagement or achieve
                            <br />
                            your business goals.
                        </Description>
                        <Description size="md">Get an estimate</Description>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <img src="/asset/icon/Group1195.svg" alt="mobile" />
                    <div className="flex flex-col gap-4">
                        <Description size="lg" color="primary" className="font-bold">
                            Frontend Development
                        </Description>
                        <Description color="gray">
                            Need a website or mobile app? I can create <br /> beautiful websites or mobile apps based on{" "}
                            <br />
                            your content, or redesign your old website <br /> to improve user engagement or achieve
                            <br />
                            your business goals.
                        </Description>
                        <Description size="md">Get an estimate</Description>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default WhatIDoSection;
