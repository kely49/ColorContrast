import React from 'react';
import { mix } from 'polished';

interface EjemplosProps {
    currentColorFondo: string;
    currentColorTexto: string;
}

const Ejemplos: React.FC<EjemplosProps> = ({ currentColorFondo, currentColorTexto }) => {
    
    const handleLighterColor = (color: string,mezcla:string) => {
        return mix(0.85, mezcla, color); 
    };

    return (
    
    <div className='flex flex-wrap justify-center items-start'>
        <div className='w-full flex justify-center mb-20'></div>
        <div className='flex flex-col'>
            <div className="w-auto max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div  className='gap-6'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100"
                            height="100"
                            fill={currentColorTexto} 
                        >
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-1 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>

                        </svg>
                        <p style={{ color: currentColorTexto }}  className='font-bold text-xl mb-5'>Explorando el universo táctil, descubre un mundo de sensaciones</p>
                        <p style={{ color: currentColorTexto }}  className='text-sm mb-5'>Estás a un solo click de obtener los beneficios del touch</p>
                        <button style={{ color: currentColorFondo, backgroundColor: currentColorTexto}} className='w-full rounded-lg bg-red-500 text-white text-xl font-semibold p-1'>Pruebame</button>
                    </div>
                </div>
            </div>

            <div className="w-96 max-w-96 mb-5 ml-5 self-start">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl relative">
                    <div className="flex flex-col items-start">
                    <div className="relative" style={{ width: '350px', height: '130px', marginBottom: '10px' }}>
                        <img 
                        src="/imagenes/ufc.jpeg"
                        alt="banner UFC"
                        width="380px"
                        className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-0 left-8 rounded-full overflow-hidden border-4 border-red-600 w-16 h-16" style={{ borderColor: currentColorFondo, bottom: '-30px' }}>
                        <img 
                            src="/imagenes/perfilUfc.jpg"
                            alt="perfil UFC"
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    <p style={{ color: currentColorTexto }} className="ml-2 mt-8 font-bold text-xl">Illia Topuria</p>
                    <p style={{ color: currentColorTexto }} className="ml-2 mt-5 text-sm">Undefeated 15-0 · UFC World Champion</p>
                    </div>
                </div>
            </div>


            <div className="w-96 mb-5 ml-5 self-start">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className='flex flex-col items-center justify-center'>
                        <p style={{ color: currentColorTexto }} className='mb-8 font-bold text-xl'>Revisa tu ingreso diario</p>
                        <p style={{ color: currentColorTexto }} className='mb-3 font-bold text-3xl'>754,32 €</p>
                        <p style={{ color: currentColorTexto }} className='mb-10 text-sm'>Cambia el metodo de cobro en ajustes</p>
                    </div>
                    <button style={{ color: currentColorFondo, backgroundColor: currentColorTexto}} className='w-full rounded-lg bg-red-500 text-white text-xl font-semibold p-1'>Ajustes</button>

                </div>
            </div>

            <div className=" w-auto max-w-96 mb-5 ml-5 self-start">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className='flex flex-col'>
                        <p style={{ color: currentColorTexto }} className='text-sm ml-5 mb-3'>Videojuego PC</p>
                        <p style={{ color: currentColorTexto }} className='mb-1 text-3xl font-bold ml-5'>45.000 €</p>
                        <p style={{ color: currentColorTexto }} className='text-sm ml-5 mb-3'>Ahorros estimados</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 30" width="368" height="30">
                            <rect x="-20" y="5" width="320" height="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} rx="10" ry="10" />
                            
                            <rect x="-20" y="5" width="190" height="10" fill={currentColorTexto} rx="10" ry="10" />
                        </svg>
                        <div className='flex flex-row'>
                        <div className='flex flex-col ml-5'>
                                <p style={{ color: currentColorTexto }} className='font-semibold'>29.456 €/mes</p>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Total ahorrado</p>
                            </div>
                            <div className='flex flex-col ml-auto mr-3'>
                                <p style={{ color: currentColorTexto }} className='font-semibold'>15.544 €/mes</p>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Ahorro en progreso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='flex flex-col'>
        <div className='w-auto max-w-96 ml-5'>
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl px-14">
                    <div style={{ backgroundColor: handleLighterColor(currentColorTexto,currentColorFondo) }} className="w-20 h-20 rounded-full mb-6 flex justify-center items-center mx-auto mt-2">
                        <img 
                            src="/imagenes/memoji.png"
                            width="55"
                            height="55"
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p style={{ color: currentColorTexto }} className='font-bold text-xl mb-3'>Aleix Padron</p>
                        <p style={{ color: currentColorTexto }} className='text-sm mb-5'>Málaga, Andalucía</p>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='mr-4'>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Proyectos</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>13</p>
                            </div>
                        </div>
                        <div className='mr-4'>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Seguidores</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>880</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Siguiendo</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>43</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-auto max-w-96 mb-5 ml-5 mt-5 self-start">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className="flex flex-col items-center">
                        <div className="relative" style={{ width: '350px', height: '130px', marginBottom: '10px' }}>
                            <img 
                            src="/imagenes/valorant.jpeg"
                            alt="banner UFC"
                            width="380px"
                            className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 rounded-full overflow-hidden border-4 border-red-600 w-20 h-20" style={{ borderColor: currentColorTexto, bottom: '-30px', left: '39%' }}>
                            <img 
                                src="/imagenes/omen.jpg"
                                alt="perfil UFC"
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <p style={{ color: currentColorTexto }} className="font-bold text-xl">Omen</p>
                            <p style={{ color: currentColorTexto }} className="text-sm mt-2">Smoker en Valorant</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center mt-6'>
                        <div className='mr-6'>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Jugado</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>23 M</p>
                            </div>
                        </div>
                        <div className='mr-6'>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Normal</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>8 M</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center'>
                                <p style={{ color: currentColorTexto }} className='text-xs'>Ranked</p>
                                <p style={{ color: currentColorTexto }} className='font-semibold text-2xl'>16 M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" w-auto max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className='flex flex-col items-center justify-center'>
                        <p style={{ color: currentColorTexto }} className='text-sm'>Gastos Mayo</p>
                        <p style={{ color: currentColorTexto }} className='mb-14 text-3xl font-bold'>845,82 €</p>
                    </div>
                    
                    <div className='flex flex-row items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="50" width="20" height="50" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="40" width="20" height="60" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="75" width="20" height="25" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="10" width="20" height="90" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="65" width="20" height="35" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="35" width="20" height="65" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" viewBox="0 0 20 100">
                            <rect x="5" y="0" width="20" height="100" rx="10" ry="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} />
                            <rect x="5" y="50" width="20" height="50" rx="10" ry="10" fill={currentColorTexto} />
                        </svg>
                    </div>
                </div>
            </div>
            <div className=" w-96 max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className='flex flex-row mb-2'>
                        <p style={{ color: currentColorTexto }} className='ml-4 font-semibold'>Progreso del proyecto</p>
                        <p style={{ color: currentColorTexto }} className=' ml-32 text-sm mt-1'>80%</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 30" width="368" height="30">
                        <rect x="-20" y="5" width="320" height="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} rx="10" ry="10" />
                        
                        <rect x="-20" y="5" width="250" height="10" fill={currentColorTexto} rx="10" ry="10" />
                    </svg>
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className=" w-auto max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <p style={{ color: currentColorTexto }} className='text-base font-bold'>Descubre las tendencias de desarrollo de este 2024!🔥</p>
                            <svg
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 1272.000000 1280.000000"
                                preserveAspectRatio="xMidYMid meet"
                                fill={currentColorTexto} 
                                className='ml-10'
                            >
                                <g
                                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                                
                                stroke="none"
                                >
                                <path d="M10513 12790 c-106 -15 -253 -59 -348 -104 -132 -62 -227 -128 -340 -236 -242 -230 -818 -808 -831 -833 -8 -15 -12 -36 -9 -46 3 -10 566 -577 1250 -1260 1054 -1051 1249 -1241 1272 -1241 24 0 100 73 483 457 322 323 471 480 508 534 96 141 160 290 199 461 23 102 23 384 0 486 -39 170 -111 333 -207 472 -72 102 -963 994 -1079 1080 -121 88 -281 164 -426 201 -100 25 -145 31 -265 34 -80 2 -173 0 -207 -5z"/>
                                <path d="M8744 11367 c-12 -7 -1662 -1650 -3668 -3651 -2968 -2963 -3646 -3644 -3646 -3665 0 -21 237 -263 1248 -1274 1103 -1103 1252 -1248 1275 -1245 31 3 -117 -143 4360 4326 2493 2490 2977 2977 2977 3000 0 23 -206 233 -1242 1269 -684 682 -1252 1244 -1263 1247 -11 3 -30 0 -41 -7z"/>
                                <path d="M1197 3842 c-16 -18 -56 -141 -457 -1417 -105 -335 -231 -736 -280 -890 -422 -1336 -462 -1469 -454 -1494 21 -59 -14 -70 1125 332 585 206 1412 498 1838 648 826 291 803 281 788 341 -4 14 -523 538 -1251 1261 -972 967 -1249 1237 -1268 1237 -14 0 -32 -8 -41 -18z"/>
                                </g>
                            </svg>
                        </div>
                        <p style={{ color: currentColorTexto }} className='text-sm mb-5 mt-4'>Explore los beneficios de trabajar con React, Svelte, Angular y Vue en el desarrollo front-end. ¡No te lo pierdas!.<br/>
                            #frontend #react #svelte #angular #vue</p>
                        <div className='flex flex-row '>
                            <img 
                                src='/imagenes/perfil.png'
                                width='32px'
                                height='32px'
                            />
                            <button style={{ color: currentColorFondo, backgroundColor: currentColorTexto}} className='rounded-lg bg-red-500 text-white text-xl font-semibold p-1 ml-auto px-5'>Actualizame</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-auto max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl">
                    <button 
                        style={{ color: currentColorFondo, backgroundColor: currentColorTexto }} 
                        className='relative rounded-full w-8 h-8 flex items-center justify-center text-xl font-semibold'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={currentColorFondo} className="w-4 h-4">
                            <path fill-rule="evenodd" d="M3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm8-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div style={{ backgroundColor: handleLighterColor(currentColorTexto,currentColorFondo) }} className="w-24 h-24 rounded-full mb-6 flex justify-center items-center mx-auto mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
                            <path d="M10,55
                                    a20,20 0 0,1 40,0
                                    a20,20 0 0,1 -40,0
                                    M30,55
                                    a20,20 0 0,1 40,0
                                    a20,20 0 0,1 -40,0
                                    M50,55
                                    a20,20 0 0,1 40,0
                                    a20,20 0 0,1 -40,0
                                    M20,35
                                    a20,20 0 0,1 40,0
                                    a20,20 0 0,1 -40,0
                                    M40,35
                                    a20,20 0 0,1 40,0
                                    a20,20 0 0,1 -40,0" 
                                    fill={currentColorTexto} />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p style={{ color: currentColorTexto}} className="ml-2 mt-8 font-bold text-xl">Tu almacenamiento</p>
                        <p style={{ color: currentColorTexto}} className="ml-2 mt-3 mb-10 text-sm">Nunca fue tan facil compartir archivos</p>
                    </div>
                    <div className="flex flex-row">
                        <p style={{ color: currentColorTexto}} className="ml-5 mr-60 text-xs">20 Gb</p>
                        <p style={{ color: currentColorTexto}} className="text-xs">100 Gb</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 30" width="368" height="30">
                        <rect x="1" y="5" width="280" height="10" fill={ handleLighterColor(currentColorTexto,currentColorFondo)} rx="10" ry="10" />
                        
                        <rect x="1" y="5" width="200" height="10" fill={currentColorTexto} rx="10" ry="10" />
                    </svg>
                </div>
            </div>

            <div className=" w-auto max-w-96 mb-5 ml-5">
                <div style={{ backgroundColor: currentColorFondo }} className="pr-4 pt-4 border border-gray-300 rounded-xl">
                <button 
                        style={{ color: currentColorFondo, backgroundColor: currentColorTexto }} 
                        className='ml-auto relative rounded-full w-8 h-8 flex items-center justify-center text-xl font-semibold'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={currentColorFondo} className="w-4 h-4">
                            <rect x="2" y="4" width="4" height="16" fill={currentColorFondo}/>
                            <rect x="8" y="8" width="4" height="12" fill={currentColorFondo}/>
                            <rect x="14" y="12" width="4" height="8" fill={currentColorFondo}/>
                          </svg>
                    </button>
                    <div className='flex flex-col justify-center items-center '>
                        <p style={{ color: currentColorTexto}}>Ganancias para este mes</p>
                        <p style={{ color: currentColorTexto}} className='text-3xl font-bold my-2'>127,43 €</p>
                        <div className=' rounded-full p-2' style={{ backgroundColor: currentColorTexto }}>
                            <p style={{ color: currentColorFondo}}>+2,5 %</p>
                        </div>
                    </div>
                    <svg  fill="none" height="208" viewBox="0 0 840 208" width="604" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-70,60)">
                        <path d="M87.3319 59.0777C73.4002 67.4777 54.8245 60.2444 47.2782 55.5777L2 190.078L598.453 205.078C602.226 143.911 604.896 19.2777 585.392 10.0777C561.011 -1.4223 548.821 20.0777 544.467 26.5777C540.113 33.0777 525.311 38.0777 513.121 36.0777C500.93 34.0777 474.808 59.0777 456.523 65.0777C438.238 71.0777 412.986 38.0777 401.667 32.5777C390.347 27.0778 380.769 39.0777 376.416 38.0777C372.062 37.0777 353.776 5.5777 340.715 6.0777C327.654 6.5777 316.335 36.0777 306.757 32.5777C297.179 29.0778 286.73 55.5777 254.513 73.0777C222.296 90.5777 209.235 6.57772 191.82 2.57772C174.405 -1.42228 169.181 16.0777 151.766 32.5777C134.352 49.0777 126.515 36.5777 121.291 32.5777C116.066 28.5777 104.747 48.5777 87.3319 59.0777Z" fill="url(#paint0_linear_119_1190)" stroke={currentColorTexto} stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                        <path d="M87.3319 59.0777C73.4002 67.4777 54.8245 60.2444 47.2782 55.5777L2 190.078L598.453 205.078C602.226 143.911 604.896 19.2777 585.392 10.0777C561.011 -1.4223 548.821 20.0777 544.467 26.5777C540.113 33.0777 525.311 38.0777 513.121 36.0777C500.93 34.0777 474.808 59.0777 456.523 65.0777C438.238 71.0777 412.986 38.0777 401.667 32.5777C390.347 27.0778 380.769 39.0777 376.416 38.0777C372.062 37.0777 353.776 5.5777 340.715 6.0777C327.654 6.5777 316.335 36.0777 306.757 32.5777C297.179 29.0778 286.73 55.5777 254.513 73.0777C222.296 90.5777 209.235 6.57772 191.82 2.57772C174.405 -1.42228 169.181 16.0777 151.766 32.5777C134.352 49.0777 126.515 36.5777 121.291 32.5777C116.066 28.5777 104.747 48.5777 87.3319 59.0777Z" stroke={currentColorTexto} stroke-linecap="round" stroke-linejoin="round" stroke-width="4" ></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_119_1190" x1="302.403" x2="302.403" y1="-17.5" y2="164.578"><stop stop-color={currentColorTexto} stop-opacity="0.35" ></stop><stop offset="0.72165" stop-color={currentColorTexto} stop-opacity="0.1" ></stop></linearGradient></defs>
                    </g>
                    </svg>
                </div>
            </div>

            <div className="w-auto max-w-96 mb-5 ml-5 relative">
                <div style={{ backgroundColor: currentColorFondo }} className="p-4 border border-gray-300 rounded-xl relative">
                    <div className='flex flex-row items-center justify-center'>
                        <div style={{ backgroundColor: handleLighterColor(currentColorTexto,currentColorFondo) }} className="w-16 h-16 rounded-full flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="200" height="200">
                                <g transform="translate(11,-40)">
                                    <path d="M10 4a3 3 0 0 0-3 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3a3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1zm-6 7a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z" fill={currentColorTexto}></path>
                                </g>
                            </svg>
                        </div>
                        <div className='flex flex-col ml-5'>
                            <p style={{ color: currentColorTexto}} >Bienvenido!</p>
                            <p style={{ color: currentColorTexto}}  className='mt-2 text-sm'>Únete a nuestra comunidad. Te ayudará a mejorar como desarrollador</p>
                        </div>
                    </div>
                    <svg className='absolute top-0 right-0' fill="none" height="60" viewBox="0 0 54 81" width="40" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-8,-20)">
                            <path d="M32.7002 6.80787C37.656 18.7733 29.9084 34.9035 41.3047 44.952C47.8754 50.7456 57.7286 51.9261 67.7055 51.0387" stroke={currentColorTexto} strokeLinecap="round" strokeWidth="4"></path>
                            <path d="M17.2605 10.443C31.298 22.2685 17.1271 43.2831 30.8944 55.4221C40.2347 63.6577 56.2077 62.5718 69.7404 59.4751" stroke={currentColorTexto} strokeLinecap="round" strokeWidth="4"></path>
                            <path d="M2 15.5912C4.39599 16.5454 6.58754 17.7868 8.47393 19.376C22.5114 31.2014 8.34054 52.216 22.1078 64.355C34.1978 75.0151 57.4006 70.0575 72.0396 65.3369" stroke={currentColorTexto} strokeLinecap="round" strokeWidth="4"></path>
                        </g>
                    </svg>

                </div>
            </div>

        </div>
    </div>
    );
}

export default Ejemplos;
