import React from 'react'
import PopUpContent from './PopUpContent';

const CopyInput = () => {

    const [inputValue, setInputValue] = React.useState('');
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }


    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something to copy"
                style={{ width: '300px', padding: '8px', marginRight: '10px' }}
            />
            <button onClick={handleCopy} style={{ width: '100px', padding: '8px', marginRight: '10px' }}>Copy</button>
            <PopUpContent copied={copied} />

        </div>
    )
}

export default CopyInput