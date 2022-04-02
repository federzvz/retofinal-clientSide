import React from 'react';
import TablaVolantes from '../components/TablaVolantes';

function Volantes({ user }) {
    return (
        <>
          <div>
            <h1 className="shadow-sm mt-5 p-3 text-center rounded">
              Entrada de mercancía
            </h1>
            <TablaVolantes/>
          </div>
        </>
      );
};

export default Volantes;