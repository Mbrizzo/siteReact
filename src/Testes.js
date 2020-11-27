import React from 'react';
import './Testes.css';
import Head from './Head';
import './Ferramentas.css';
import YouTube from 'react-youtube';
import './Testes.css';

export const Testes = () => {
  return (
    <>
      <div className="palcoTestes">
        <Head title="Testes" description="Essa é a página de testes" />
      </div>
      <h4 className="h4">
        Essa página será removida dia 27/11... ou talvez não... na verdade só
        Deus sabe!!! Mas se nem eu me importo com isso, imagina você. Portanto
        não se preocupe mais com isso... apenas contemple, assombrado, essa
        magnífica página de testes enquanto medita sobre sua vida ou os
        mistérios do mundo ou quem sabe sobre seu cachorro mesmo que não tenha
        um.
      </h4>

      <div className="youtube">
        <YouTube videoId="YgW86N4rtpk" />
      </div>
    </>
  );
};

export default Testes;
