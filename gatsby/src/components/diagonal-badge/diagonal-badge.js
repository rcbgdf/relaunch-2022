import React from 'react';

import './diagonal-badge.scss';

function DiagonalBadge({ ribbonText }) {
    return (
        <div className="ribbon">
            <div className="ribbon-text">
                <a href="/zehnjahresfeier"  dangerouslySetInnerHTML={{__html: ribbonText}}></a>
            </div>
        </div>
    );
}

export default DiagonalBadge;
