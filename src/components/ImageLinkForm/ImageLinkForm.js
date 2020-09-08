import React from 'react';
import './ImageLinkForm.css'

function ImageLinkForm ({onInputChange, onButtonSubmit}) {
    return (
        <div>
            <p className='f3 center'>
                {'This Magic Brain will detect faces in your pictures. Git it a try'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='fa4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;