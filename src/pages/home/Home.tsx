import ProfileSection from "./ProfileSection";
import WhatIDoSection from "./WhatIDoSection";
import AboutMe from "./AboutMe";
import ScheduleContent from "./ScheduleContent";
import WhereToFind from "./WhereToFind";

function Home() {
    return (
        <section>
            <ProfileSection />
            <WhatIDoSection />
            <WhereToFind />
            <AboutMe />
            <ScheduleContent />
        </section>
    );
}

export default Home;
