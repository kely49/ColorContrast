import React, { useEffect,useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import { contrastRatio,accesibilityRatingAASmallText,accesibilityRatingAAASmallText,accesibilityRatingAALargeText,accesibilityRatingAAALargeText } from '../pages/api/IAContraste';

const MenuConfig: React.FC = ({onColorChange}) => {
    const [contrastePredicho, setContrastePredicho] = useState(7.3);

    const [smalAA, setAccesibilityRatingAASmallText] = useState(7.3);
    const [largeAA, setAccesibilityRatingAALargeText] = useState(7.3);
    const [smalAAA, setAccesibilityRatingAAASmallText] = useState(7.3);
    const [largeAAA, setAccesibilityRatingAAALargeText] = useState(7.3);

    const [suggestedColors, setSuggestedColors] = useState([]);
    
    const [currentColorPair, setCurrentColorPair] = useState({
        fondo: "#FDFBF6",
        texto: "#242422",
      });
      const [copiedColor, setCopiedColor] = useState(null);
    
      const handleColorChange = (colorFondo, colorTexto) => {
        setCurrentColorPair({
          fondo: colorFondo,
          texto: colorTexto,
        });
        onColorChange(colorFondo, colorTexto);
      };

    useEffect(() => {
        const colorFondo = currentColorPair.fondo;
        const colorTexto = currentColorPair.texto;
        
        const contraste = contrastRatio(colorFondo, colorTexto);
        setAccesibilityRatingAASmallText( accesibilityRatingAASmallText(contraste));
        setAccesibilityRatingAALargeText(accesibilityRatingAALargeText(contraste));
        setAccesibilityRatingAAASmallText( accesibilityRatingAAASmallText(contraste));
        setAccesibilityRatingAAALargeText(accesibilityRatingAAALargeText(contraste));

        const contrasteRedondeado = Number(contraste.toFixed(2));
        setContrastePredicho(contrasteRedondeado);

        const contrastValue = document.getElementById('contrastValue');
        const iconoCarita = document.getElementById('iconoCarita');
        const puntuacion = document.getElementById('puntuacion');

        if (contrasteRedondeado < 4.45) {
            contrastValue.style.color = 'red';
            iconoCarita.src = '/imagenes/caritaRoja.png';
            puntuacion.innerText = "Malo";
            puntuacion.style.color = 'red';
        } else if (contrasteRedondeado < 7.14) {
            contrastValue.style.color = 'green';
            iconoCarita.src = '/imagenes/caritaVerde.png';
            puntuacion.innerText = "Bueno";
            puntuacion.style.color = 'green';
        } else {
            contrastValue.style.color = 'green';
            iconoCarita.src = '/imagenes/caritaSonriente.png';
            puntuacion.innerText = "Muy Bueno";
            puntuacion.style.color = 'green';
        }

        

    }, [currentColorPair]);

    useEffect(() => {
        const colorFondo = "#FDFBF6"; 
        const colorTexto = "#242422"; 

        handleColorChange(colorFondo,colorTexto);
        onColorChange(colorFondo, colorTexto);
    }, []); 

    const handleCopyColor = (color) => {
        console.log("copiedcolor"+copiedColor);
        setCopiedColor(color);
        console.log("copiedcolor"+copiedColor);
        setTimeout(() => {
          setCopiedColor(null);
        }, 2000);
      };

    return(
        <aside className="w-full h-full flex flex-col gap-6 border-r border-gray-400 px-5 py-5 lg:min-w-80 overflow-y-auto">
            <section>
                <div className='mb-8 text-lg font-semibold'>Relación de contraste</div>
                <div>
                    <div className='gap 8 flex flex-row justify-between'>
                        <div className='flex flex-col'>
                        <span id="puntuacion" className='font-semibold'>Very good</span>
                        <span id="contrastValue" className="text-6xl font-bold" >{contrastePredicho}</span>
                    </div>
                        <img id="iconoCarita" viewBox="0 0 24 24" src="/imagenes/caritaVerde.png" className='iconoCarita'/>
                    </div>
                    <ul className="flex flex-wrap mt-10 ">
                        <li className='mb-5 mr-10 '>
                            <span className='text-xs'>TEXTO NORMAL</span>
                            <div className="flex items-center">
                                <p className='mr-5 text-xl font-bold'>AA - 4.5:1</p>
                                <svg viewBox="0 0 24 24" className={!smalAA ? 'iconoPalomitaMal' : 'iconoPalomita'}></svg>
                            </div>
                        </li>
                        <li className='mb-5'>
                            <span className='text-xs'>TEXTO GRANDE</span>
                            <div className="flex items-center">
                                <p className='mr-12 text-xl font-bold'>AA - 3:1</p>
                                <svg viewBox="0 0 24 24" className={!largeAA ? 'iconoPalomitaMal' : 'iconoPalomita'}></svg>
                            </div>
                        </li>
                    </ul>
                    <ul className="flex flex-wrap mt-3 ">
                        <li className='mb-5 mr-10'>
                            <span className='text-xs'>TEXTO NORMAL</span>
                            <div className="flex items-center">
                                <p className='mr-5 text-xl font-bold'>AAA - 7:1</p>
                                <svg viewBox="0 0 24 24" className={!smalAAA  ? 'iconoPalomitaMal' : 'iconoPalomita'}></svg>
                            </div>
                        </li>
                        <li className='mb-5 '>
                            <span className='text-xs'>TEXTO GRANDE</span>
                            <div className="flex items-center">
                                <p className='mr-5 text-xl font-bold'>AAA - 4.5:1</p>
                                <svg viewBox="0 0 24 24" className={!largeAAA  ? 'iconoPalomitaMal' : 'iconoPalomita'}></svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="border-divider"></div>
            <section>
                <div className='mb-8 text-lg font-semibold'>Colores de entrada</div>
                <ColorPicker onColorChange={handleColorChange} onColorCopy={handleCopyColor}/>
            </section>
            {copiedColor && (
                <div className="fixed left-20 transform -translate-x-1/2 bottom-0 bg-green-500 text-white p-2 rounded-md">
                Color copiado
                </div>
            )}
            <div className="border-divider"></div>
          </aside>
    );
};

export default MenuConfig; 