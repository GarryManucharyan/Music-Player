import { useEffect, useState } from 'react';

export const Icon: React.FC<{ path: string }> = ({ path }) => {
    let [icon, setIcon] = useState('');
    

    useEffect(() => {   
        (async function () {
            let importedIcon = await import(`../../images/icons/${path}`);
            setIcon(importedIcon.default);
        })()

    });

    return <img width="100%" height="100%" alt='' src={icon} />;
};