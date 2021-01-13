// import { useCallback, useEffect, useState } from 'react';
// import { useDataLayerValue } from '../DataLayer';

// const useContextMenu = () => {
//     const [xPos, setXPos] = useState('0px');
//     const [yPos, setYPos] = useState('0px');
//     const [{ showContextMenu }, dispatch] = useDataLayerValue();

//     const handleContextMenu = useCallback(
//         (e) => {
//             e.preventDefault();

//             setXPos(`${e.pageX}px`);
//             setYPos(`${e.pageY}px`);
//             dispatch({ type: 'SET_SHOW_CONTEXT_MENU', showContextMenu: true });
//         },
//         [setXPos, setYPos]
//     );

//     // const handleClick = useCallback(() => {
//     //     showContextMenu && dispatch({ type: 'SET_SHOW_CONTEXT_MENU', showContextMenu: false });
//     // }, [showContextMenu]);

//     useEffect(() => {
//         document
//             .querySelectorAll('.messageContainer')
//             .forEach((element) => element.addEventListener('contextmenu', handleContextMenu));

//         return () => {
//             document
//                 .querySelectorAll('.messageContainer')
//                 .forEach((element) =>
//                     element.removeEventListener('contextmenu', handleContextMenu)
//                 );
//         };
//     });

//     return { xPos, yPos, showContextMenu };
// };

// export default useContextMenu;

import { useCallback, useEffect, useState } from 'react';

const useContextMenu = () => {
    const [xPos, setXPos] = useState('0px');
    const [yPos, setYPos] = useState('0px');
    const [showMenu, setShowMenu] = useState(false);

    const handleContextMenu = useCallback(
        (e) => {
            e.preventDefault();

            setXPos(`${e.pageX}px`);
            setYPos(`${e.pageY}px`);
            setShowMenu(true);
        },
        [setXPos, setYPos]
    );

    const handleClick = useCallback(() => {
        showMenu && setShowMenu(false);
    }, [showMenu]);

    useEffect(() => {
        document
            .querySelectorAll('.messageContainer')
            .forEach((element) => element.addEventListener('click', handleClick));
        document
            .querySelectorAll('.messageContainer')
            .forEach((element) => element.addEventListener('contextmenu', handleContextMenu));
        return () => {
            document
                .querySelectorAll('.messageContainer')
                .forEach((element) => element.addEventListener('click', handleClick));
            document
                .querySelectorAll('.messageContainer')
                .forEach((element) =>
                    element.removeEventListener('contextmenu', handleContextMenu)
                );
        };
    });

    return { xPos, yPos, showMenu };
};

export default useContextMenu;
