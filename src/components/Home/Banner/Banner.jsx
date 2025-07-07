import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Find Your Next Freelancer', 'Post Your Tasks', 'Get Your Projects Done'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1507358522-56006a3b625d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">
                            <span>{text}</span>
                            <Cursor cursorStyle='|' />
                        </h1>
                        <p className="text-lg">Connect with talented freelancers for your projects.</p>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1456513080510-7bf3a84b70da.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">
                            <span>{text}</span>
                            <Cursor cursorStyle='|' />
                        </h1>
                        <p className="text-lg">Post your tasks and get competitive bids from skilled professionals.</p>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1414694060485-f3aa2e29b0ae.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">
                            <span>{text}</span>
                            <Cursor cursorStyle='|' />
                        </h1>
                        <p className="text-lg">Efficiently manage your projects and achieve your goals.</p>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1414694060485-f3aa2e29b0ae.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <div>
                        <h1 className="text-5xl font-bold mb-4">
                            <span>{text}</span>
                            <Cursor cursorStyle='|' />
                        </h1>
                        <p className="text-lg">Your one-stop solution for all your freelance needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;