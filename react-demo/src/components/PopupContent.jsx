import React from 'react'
import { createPortal } from 'react-dom';

const PopUpContent = ({copied}) => {


    // using createPortal to render the popup in a different part of the DOM
    return createPortal(
        <section>
            {copied && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    zIndex: 1000
                }}>
                    Copied to clipboard!
                </div>
            )}
        </section>,
        document.querySelector('#portal')// appending to the body for better visibility
    );
    


    // return (
    //     <section>
    //         {copied && (
    //             <div style={{
    //                 position: 'fixed',
    //                 bottom: '20px',
    //                 right: '20px',
    //                 backgroundColor: '#4CAF50',
    //                 color: 'white',
    //                 padding: '10px 20px',
    //                 borderRadius: '5px',
    //                 boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    //                 zIndex: 1000
    //             }}>
    //                 Copied to clipboard!
    //             </div>
    //         )}
    //     </section>
    // )
}

export default PopUpContent