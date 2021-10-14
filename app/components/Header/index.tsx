import * as React from 'react';

import images from './images.jpg';
import './index.css';

function Header() {
  return (
    <div className="container py-3">
        <div className="card cardTItle">
            <div className="row ">
                <div className="col-md-2">
                    <img src={images} className="w-100" />
                </div>
                <div className="col-md-8 px-3">
                    <div className="card-block px-3">
                        <h4 className="card-title title">Police Departament of Berlin</h4>
                        <p className="card-text title">Stolen bykes</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Header;
