import Button from "../components/common/Button/Button";

function Home() {
    return (
        <section>
            <article className="mt-[175px]">
                <div className="flex items-center justify-evenly">
                    <div className="aspect-square">
                        <img src="/asset/photo/PhotoFrame.svg" alt="avatar" />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-[26px] font-bold">Hi 👋, I'm Narendra</h1>
                        <p className="font-bold">Freelance Full Stack Designer</p>
                        <p className="text-gary-gary2">“good design makes the world a better place.”</p>
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
        </section>
    );
}

export default Home;
