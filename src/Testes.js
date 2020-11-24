import React from 'react';
import './Testes.css';
import Head from './Head';
//import axios from 'axios';
import './Ferramentas.css';

export const Testes = () => {
  return (
    <>
      <div className="palcoTestes">
        <Head title="Testes" description="Essa é a página de testes" />
      </div>
      <h4>
        Essa página será removida dia 27/11... ou talvez não... na verdade só
        Deus sabe!!! Mas se nem eu me importo com isso, imagina você. Portanto
        não se preocupe mais com isso... apenas contemple, assombrado, essa
        magnífica página de testes enquanto medita sobre sua vida ou os
        mistérios do mundo ou quem sabe sobre seu cachorro mesmo que não tenha
        um.
      </h4>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div class="transform scale-110 -rotate-6">1</div>
        <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          2
        </div>
        <div class="transform scale-150 translate-y-11">3</div>
        <div class="transform translate-y-24">4</div>
        <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          5
        </div>
      </div>
    </>
  );
};

export default Testes;
