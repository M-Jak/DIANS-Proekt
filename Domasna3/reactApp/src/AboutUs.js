import 'bootstrap/dist/css/bootstrap.min.css';

import './AboutUs.css';



function AboutUs() {
    return (

        <div className="AboutUs-main">
            <div className="title">
                <h1>About Us</h1>
            </div>

            <div className="container">
                <div className="section">
                    <h2 className="NaslovNaParagraf">Project</h2>
                    <p className="opis">Во овој проект е интегриран систем за пребарување и преглед на историски и културни објекти.
                        Тој обезбедува функционалност за пребарување објекти според име, локација или категорија,
                        што ќе овозможи лесно наоѓање на релевантни информации. Корисниците имаат преглед на детални информации за секој објект,
                        вклучувајќи описи, историски контекст и работно време, што ќе ги поддржи во изборот на објекти за посета.

                    </p>
                </div>
                <div className="section">
                    <h2 className="NaslovNaParagraf">Map</h2>
                    <p className="opis"> Интегрираната интерактивна мапа со OpenStreetView функционалност овозможува визуелен преглед на сите културни
                        и историски објекти со соодветни обележувачи. Корисниците можат да кликаат на обележувачите за пристап до деталите за секој објект,
                        обогатени со контекстуални информации. Системот ги категоризира објектите според тип, вклучувајќи музеи, споменици, цркви,
                        што го олеснува филтрирањето и прецизирањето на пребарувањето за корисниците.</p>
                </div>
                <div className="section">
                    <h2 className="NaslovNaParagraf">Creators</h2>
                    <p className="opis">Марино Јакимоски - 211017 (M-Jak)<br/>

                       Никола Здравески - 211054 (zdrave123) <br/>

                       Андреј Андоноски - 211090 (SomalianBoi)<br/>

                       Кристијан Цветаноски - 211102 (k-cvet)<br/>

                       Никола Недески - 211208 (Nik0la23)<br/>
                    </p>
                </div>
            </div>

        </div>


    )
}

export default AboutUs;