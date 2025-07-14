import Button from "../components/common/Button/Button";
import Description from "../components/common/Text/Description";
import Title from "../components/common/Text/Title";

function ProfileSection() {
    return (
        <article className="mt-[175px]">
            <div className="flex items-center justify-evenly">
                <div className="aspect-square">
                    <img src="/asset/photo/PhotoFrame.svg" alt="avatar" />
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <Title>Hi 👋, I'm Narendra</Title>
                    <Description className="font-bold">Freelance Full Stack Designer</Description>
                    <Description color="gray">“good design makes the world a better place.”</Description>
                    <div className="flex items-center gap-4 mt-14 font-bold ">
                        <Button size="sm" color="success" className="text-light rounded">
                            My Work
                        </Button>
                        <Button size="sm" color="primary" className="rounded">
                            Let`t Talk
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProfileSection;
