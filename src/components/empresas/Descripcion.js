import React from 'react';

const Tarjeta = () => {
    return (
        <div className="flex justify-center mt-8 space-x-28">
            <div className="w-64">
                <div className="max-w-xs">
                    <img className=" h-16" src="imgs/Riot.png" alt="Logo" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Riot Games</h2>
                        <p className="text-gray-700">Creadores de dos de los videojuegos con mayor cantidad de jugadores simultáneos,
                        como Valorant y League of Legends, también poseen títulos como Teamfight Tactics y Legends of Runeterra.
                        En el Campeonato Mundial de League of Legends anual participan los equipos clasificados de 12 ligas internacionales.
                        Se trata del torneo de esports más visto y uno de los eventos deportivos y de videojuegos más importantes y populares del mundo.</p>
                    </div>
                </div>
            </div>

            <div className="w-64">
                <div className="max-w-xs">
                    <img className="h-16" src="imgs/sony.png" alt="Logo" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Sony</h2>
                        <p className="text-gray-700">Se constituye como una de las empresas más grandes por facturación y es propietaria de varias desarrolladoras de videojuegos, como Naughty Dog (Crash Bandicoot y Uncharted),
                        Sucker Punch Productions (Infamous y Sly) y Polyphony Digital (Gran Turismo).
                        Además, Sony tiene las consolas PlayStation, PS Vita y PS Plus a través de las cuales ofrece el servicio de PSN, con millones de suscriptores en todo el mundo</p>
                    </div>
                </div>
            </div>

            <div className="w-64">
                <div className="max-w-xs">
                    <img className="h-16" src="imgs/nintendo.png" alt="Logo" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Nintendo</h2>
                        <p className="text-gray-700">Desde la compañía aseguran que su misión es poner sonrisas en los rostros de todas las personas a las que llegan con sus juegos,
                        entre los cuales se destacan los tradicionales: Super Mario Bros, Pokemon, Mario Kart y Wii Sports.
                        Su servicio de pago Nintendo Switch Online permite a los propietarios de una consola Nintendo Switch disfrutar de experiencias multijugador,
                        con juegos disponibles como Nintendo Switch™ Sports, LEGO® Star Wars™: The Skywalker Saga, y Kirby™ and the Forgotten Land.</p>
                    </div>
                </div>
            </div>

            <div className="w-64">
                <div className="max-w-xs">
                    <img className="h-16" src="imgs/ubisof.png" alt="Logo" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Ubisoft</h2>
                        <p className="text-gray-700">Empresa de origen francés con sedes en los cinco continentes y estudios de programación en nueve países diferentes,
                        distribuye sus juegos en 55 naciones. Entre sus franquicias de videojuegos más conocidas se destacan
                        Assassin ‘s Creed, Far Cry, Watch Dogs, Ghost Recon, Prince of Persia y Rayman.</p>
                    </div>
                </div>
            </div>

            <div className="w-64">
                <div className="max-w-xs">
                    <img className="h-16" src="imgs/blizzard.png" alt="Logo" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Activision Blizzard</h2>
                        <p className="text-gray-700">Cuenta con una larga lista de videojuegos de gran éxito como son Call of Duty, World of Warcraft,
                        Overwatch, Candy Crush, Farm Heroes y Pet Rescue. La marca surge a partir de la fusión de las empresas Activision
                        y Blizzard Entertainment, y actualmente está en proceso de ser adquirida por Microsoft.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;



