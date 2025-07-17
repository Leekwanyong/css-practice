import Card from "../../components/common/Card/Card";
import Description from "../../components/common/Text/Description";
import Title from "../../components/common/Text/Title";
import { BADGES_CARD } from "../../constance/card";

function AboutMe() {
    return (
        <article className="mt-44">
            <div>
                <Title>About 👨‍💼 Me</Title>
                <div className="grid grid-cols-2 gap-12 mt-16">
                    <div className="flex flex-col gap-12">
                        <Description>
                            I started as a frontend developer in college, and later I co-founded Aroliant Internet
                            Private Limited with a friend. As a director and a developer, I learned a lot about managing
                            a company, team, and projects.
                        </Description>
                        <Description>
                            And in two years, I found my passion for design. In 2020 for personal reasons, I became a
                            freelancer. Now, I’m selling digital goods on the web and working on freelance projects. I
                            love helping small businesses to create their online presence.
                        </Description>
                        <Description>
                            My design work ensures that it is developer-friendly as it passes through the lens of my
                            experience as a frontend developer. When I design, I make sure it is 100% implementable by a
                            frontend developer without any difficulties. I call it “Design for Code.”
                        </Description>
                        <Description className="mt-4">
                            ❤️ I love <span className="text-primary font-semibold">good design</span>, gaming, art,
                            netflix, and gadgets.
                        </Description>
                    </div>

                    <div className="flex flex-col  gap-10">
                        <div className="flex flex-col gap-2">
                            <Card card={BADGES_CARD} className="flex flex-col gap-6" imgClass="size-[31px]" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AboutMe;
