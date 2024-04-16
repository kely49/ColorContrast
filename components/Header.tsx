import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white-800 text-black p-4 w-full flex items-center border-b border-gray-300">
      <img src="/imagenes/logo.png" alt="Descripción de la imagen" className="w-6 h-6 mr-2" />
      <h1 className="text-1xl font-bold">Contraste de Color</h1>
    </header>
  );
};

export default Header;
