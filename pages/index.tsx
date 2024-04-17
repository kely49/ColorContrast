import React, { useState } from 'react';
import Header from '../components/Header';
import MenuConfig from '../components/MenuConfig';
import Ejemplos from '../components/Ejemplos';


const Home: React.FC = () => {
  const [currentColorFondo, setCurrentColorFondo] = useState("#ffffff");
  const [currentColorTexto, setCurrentColorTexto] = useState("#ffffff");

  const handleColorChange = (colorFondo: string, colorTexto: string) => {
    setCurrentColorFondo(colorFondo);
    setCurrentColorTexto(colorTexto);
  };

  return (
    <div className={'flex flex-col h-screen overflow-hidden'}>
      <Header />
      <main className="overflow-y-auto">
        <div className="lg:flex">
        <div >
            <MenuConfig onColorChange={handleColorChange} />
          </div>
          <section
            className="flex-1 bg-gray-200 overflow-y-auto">
            <Ejemplos currentColorFondo={currentColorFondo} currentColorTexto={currentColorTexto} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
