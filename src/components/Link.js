import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navaEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navaEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
};

export default Link;