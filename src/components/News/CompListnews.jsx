import "../News/news.css"
const CompListnews = () => {
  
    return (
        <section className="list-news">
            <div className="page-header">
                <h1 className="text-center">NEWS</h1>
                <div className="text-center">
                    <a href="/">home</a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* <h1 className="text-center underline">2024</h1> */}
                    <div className="card-news col-xs-12 col-md-4">
                        <div className="content text-center">
                            <img className="" src="../img/news/GYIIFIYMIA29.jpg" alt="" />
                            <h4>Held for the Second Time at IPB, 14 Countries Compete in the GYIIF and IYMIA Eventss</h4>
                            <a href="">Opening 2024 with two competitions that could be considered new, IYSA and the Faculty of Food Science and Technology IPB successfully held GYIIF and IYMIA for...</a>
                        </div>
                        <div className="button">
                            <a href="/pagenews1" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                    <div className="card-news col-xs-12 col-md-4">
                        <div className="content text-center">
                            <img className="" src="../img/news/sma22.jpg" alt="" />
                            <h4>SMA NEGERI 2 CILACAP WINS SILVER MEDAL IN THE GLOBAL YOUTH INVENTION AND INNOVATION FAIR (GYIIF) 2024</h4>
                            <a href="">GYIIF (Global Youth Invention and Innovation Fair) organized by the Bogor Agricultural Institute (IPB) in collaboration with the Indonesian Young Scientist Association (IYSA) took place in...</a>
                        </div>
                        <div className="button">
                            <a href="/pagenews2" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                    {/* <div className="card-news col-xs-12 col-md-4">
                        <div className="content text-center">
                            <img className="" src="../img/news/sma22.jpg" alt="" />
                            <h4>SMA NEGERI 2 CILACAP WINS SILVER MEDAL IN THE GLOBAL YOUTH INVENTION AND INNOVATION FAIR (GYIIF) 2024</h4>
                            <a href="">GYIIF (Global Youth Invention and Innovation Fair) organized by the Bogor Agricultural Institute (IPB) in collaboration with the Indonesian Young Scientist Association (IYSA) took place in...</a>
                        </div>
                        <div className="button">
                            <a href="" className="btn btn-primary">Read more</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    );
  };
  
  export default CompListnews;