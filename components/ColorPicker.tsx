import React, { useState, useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ onColorChange, onColorCopy  } ) => {
  const [showPickerFondo, setshowPickerFondo] = useState(false);
  const buttonRefFondo = useRef(null);
  const pickerRefFondo = useRef(null);

  const [showPickerTexto, setshowPickerTexto] = useState(false);
  const buttonRefTexto = useRef(null);
  const pickerRefTexto = useRef(null);

  const [fondoColor, setFondoColor] = useState("#FDFBF6");
  const [textoColor, setTextoColor] = useState("#242422");
  const [selectedColor, setSelectedColor] = useState('#FDFBF6');


  const handleChange = (color, type) => {
    if (type === 'fondo') {
      setFondoColor(color);
      onColorChange(color, textoColor);
    } else {
      setTextoColor(color);
      onColorChange(fondoColor, color);
    }
  };

  useEffect(() => {
    const handleClickFueraFondo = (event) => {
      if (pickerRefFondo.current && !pickerRefFondo.current.contains(event.target) && !buttonRefFondo.current.contains(event.target)) {
        setshowPickerFondo(false);
      }
    };

    window.addEventListener('click', handleClickFueraFondo);

    return () => {
      window.removeEventListener('click', handleClickFueraFondo);
    };
  }, []);


  useEffect(() => {
    const handleClickFueraTexto = (event) => {
      if (pickerRefTexto.current && !pickerRefTexto.current.contains(event.target) && !buttonRefTexto.current.contains(event.target)) {
        setshowPickerTexto(false);
      }
    };

    window.addEventListener('click', handleClickFueraTexto);

    return () => {
      window.removeEventListener('click', handleClickFueraTexto);
    };
  }, []); 

  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);
    onColorCopy(selectedColor);
  };

  const handleSwapColors = () => {
    setFondoColor(textoColor);
    setTextoColor(fondoColor);
    onColorChange(textoColor, fondoColor);
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
              src='/imagenes/copiar.png'
              alt="Copiar color"
              className="w-5 h-5 cursor-pointer mt-2"
              onClick={() => handleCopyColor(fondoColor )}
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
              src='/imagenes/copiar.png'
              alt="Copiar color"
              className="w-5 h-5 cursor-pointer mt-2"
              onClick={() => handleCopyColor(textoColor)}
          />
        </div>
      </div>
        
      {showPickerFondo && (
        <div
            ref={pickerRefFondo}
            className="absolute"
            style={{
            top: buttonRefFondo.current.offsetTop + buttonRefFondo.current.offsetHeight,
            left: buttonRefFondo.current.offsetLeft
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
            top: buttonRefTexto.current.offsetTop + buttonRefTexto.current.offsetHeight,
            left: buttonRefTexto.current.offsetLeft
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
