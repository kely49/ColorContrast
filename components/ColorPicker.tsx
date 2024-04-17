import React, { useState, useEffect, useRef } from 'react';
import { ChromePicker  } from 'react-color';

interface ColorPickerProps {
  onColorChange: (fondoColor: string, textoColor: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [showPickerFondo, setshowPickerFondo] = useState(false);
  const buttonRefFondo = useRef<HTMLImageElement>(null);
  const pickerRefFondo = useRef<HTMLDivElement>(null);

  const [showPickerTexto, setshowPickerTexto ] = useState(false);
  const buttonRefTexto = useRef<HTMLImageElement>(null);
  const pickerRefTexto = useRef<HTMLDivElement>(null);

  const [fondoColor, setFondoColor] = useState("#FDFBF6");
  const [textoColor, setTextoColor] = useState("#242422");

  const [copiarColorPrimario, setCopiarColorPrimario] = useState('/imagenes/copiar.png');
  const [copiarColorSecundario, setCopiarColorSecundario] = useState('/imagenes/copiar.png');



  const handleChange = (color: string, type: string) => {   
    if (type === 'fondo') {
      setFondoColor(color);
      console.log("textoColor: "+textoColor);
      console.log("color: "+color);
      onColorChange(color, textoColor);
    } else {
      setTextoColor(color);
      onColorChange(fondoColor, color);
    }
  };

  useEffect(() => {
    const handleClickFueraFondo = (event: MouseEvent) => {
      if (pickerRefFondo.current && !pickerRefFondo.current.contains(event.target as Node) && !buttonRefFondo.current?.contains(event.target as Node)) {
        setshowPickerFondo(false);
      }
    };

    window.addEventListener('click', handleClickFueraFondo);

    return () => {
      window.removeEventListener('click', handleClickFueraFondo);
    };
  }, []);


  useEffect(() => {
    const handleClickFueraTexto = (event: MouseEvent) => {
      if (pickerRefTexto.current && !pickerRefTexto.current.contains(event.target as Node) && !buttonRefTexto.current?.contains(event.target as Node)) {
        setshowPickerTexto(false);
      }
    };

    window.addEventListener('click', handleClickFueraTexto);

    return () => {
      window.removeEventListener('click', handleClickFueraTexto);
    };
  }, []); 

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  const handleSwapColors = () => {
    setFondoColor(textoColor);
    setTextoColor(fondoColor);
    onColorChange(textoColor, fondoColor);
  };

  const handleCopyColorImagenes = (color: string, type: string) => {
    handleCopyColor(color);
    if (type === 'primario') {
      setCopiarColorPrimario('/imagenes/palomitaNegra.png');
      setTimeout(() => {
        setCopiarColorPrimario('/imagenes/copiar.png');
      }, 2000);
    } else {
      setCopiarColorSecundario('/imagenes/palomitaNegra.png');
      setTimeout(() => {
        setCopiarColorSecundario('/imagenes/copiar.png');
      }, 2000);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-md mr-4 border-2 border-gray-200 shadow-lg" style={{ backgroundColor: fondoColor  }}></div>

        <div className="flex flex-col items-start">
          <span className='text-gray-600 text-sm font-semibold'>Color de fondo</span>
          <span className='ml-1 font-bold text-2xl'>{fondoColor }</span>
        </div>
        <div className="ml-auto">
          <img
            ref={buttonRefFondo}
            src='/imagenes/dropper.png'
            alt="Seleccionar color"
            className="w-6 h-6 cursor-pointer relative"
            onClick={() => setshowPickerFondo(!showPickerFondo)}
          />
          <img
              src={copiarColorPrimario}
              alt="Copiar color"
              className="w-5 h-5 cursor-pointer mt-2"
              onClick={() => handleCopyColorImagenes(fondoColor,'primario')}
          />
        </div>
      </div>

      <div className="flex justify-center items-center"> 
        <img 
          src='/imagenes/intercambio.png'
          alt="Intercambiar colores"
          className="w-9 h-9 cursor-pointer mt-10 mb-10"
          onClick={handleSwapColors}
        />
      </div>

      <div className="flex items-center">
        <div className="w-16 h-16 rounded-md mr-4 border-2 border-gray-200 shadow-lg" style={{ backgroundColor: textoColor }}></div>

        <div className="flex flex-col items-start">
          <span className='text-gray-600 text-sm font-semibold'>Color de texto</span>
          <span className='ml-1 font-bold text-2xl'>{textoColor}</span>
        </div>
        <div className="ml-auto">
          <img
            ref={buttonRefTexto}
            src='/imagenes/dropper.png'
            alt="Seleccionar color"
            className="w-6 h-6 cursor-pointer relative"
            onClick={() => setshowPickerTexto(!showPickerTexto)}
          />
          <img
              src={copiarColorSecundario}
              alt="Copiar color"
              className="w-5 h-5 cursor-pointer mt-2"
              onClick={() => handleCopyColorImagenes(textoColor,'secundario')}
          />
        </div>
      </div>
        
      {showPickerFondo && (
        <div
            ref={pickerRefFondo}
            className="absolute"
            style={{
              top: (buttonRefFondo.current?.offsetTop ?? 0) + (buttonRefFondo.current?.offsetHeight ?? 0),
              left: buttonRefFondo.current?.offsetLeft
            }}
            onMouseDown={(e) => e.stopPropagation()}
        >
            <ChromePicker
            color={fondoColor }
            onChange={(color) => handleChange(color.hex, 'fondo')}
            className='chrome-picker'
            disableAlpha
            />
        </div>
        )}
        {showPickerTexto && (
        <div
            ref={pickerRefTexto}
            className="absolute"
            style={{
            top: (buttonRefFondo.current?.offsetTop ?? 0) + (buttonRefFondo.current?.offsetHeight ?? 0),
            left: buttonRefTexto.current?.offsetLeft
            }}
            onMouseDown={(e) => e.stopPropagation()}
        >
            <ChromePicker
            color={textoColor}
            onChange={(color) => handleChange(color.hex, 'texto')}
            className="chrome-picker"
            disableAlpha
            />
        </div>
    )}
    </>
  );
};


export default ColorPicker;
