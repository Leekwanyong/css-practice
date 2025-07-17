import Description from "../../components/common/Text/Description";
import Title from "../../components/common/Text/Title";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

function ScheduleContent() {
    return (
        <article className="mt-44">
            <div>
                <Title>📅 Schedule a consult.</Title>
                <div className="flex items-center justify-between">
                    <div className="mt-8 flex flex-col flex-1">
                        <Description className="mb-12">
                            I am always open to discuss your <br />
                            project, improve your online presence or <br />
                            help with your UX/UI design challenges.
                        </Description>
                        <Description className="mb-4">📧 Email me at</Description>
                        <Description className="mb-12">hi@narendra.design</Description>
                        <Description>Follow</Description>
                        <div className="flex gap-2 mt-2">
                            <span className="border bg-sky-700 py-1 px-2 rounded-full text-white">1</span>
                            <span className="border bg-sky-700 py-1 px-2 rounded-full text-white">2</span>
                            <span className="border bg-sky-700 py-1 px-2 rounded-full text-white">3</span>
                        </div>
                    </div>
                    <form className="flex flex-1 flex-col gap-6">
                        <Input placeholder="Your name*" className="bg-gary-gary5 text-gary-gary2 border p-2" />
                        <Input placeholder="Your email*" className="bg-gary-gary5 text-gary-gary2 border p-2" />
                        <Input
                            placeholder="Your website (if exists)*"
                            className="bg-gary-gary5 text-gary-gary2 border p-2"
                        />
                        <Input
                            as="textarea"
                            placeholder="How can i help?*"
                            className="bg-gary-gary5 text-gary-gary2 border p-2"
                        />
                        <div className="flex items-center justify-end">
                            <Button size="md" color="primary" className="font-bold">
                                Get In Touch
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    );
}

export default ScheduleContent;
