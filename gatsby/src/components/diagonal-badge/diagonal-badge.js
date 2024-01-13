import React from 'react';

import './diagonal-badge.scss';

function DiagonalBadge({ ribbonText }) {
    return (
        <div class="ribbon">
            <div class="ribbon-text" dangerouslySetInnerHTML={{__html: ribbonText}}></div>
        </div>
    );
}

export default DiagonalBadge;
