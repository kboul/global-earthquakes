import React, { FC } from 'react';
import { Tooltip } from 'reactstrap';

export interface InfoTipProps {
    target: string;
    tooltipOpen: boolean;
    setTooltipOpen: (tooltipOpen: boolean) => void;
}

const InfoTip: FC<InfoTipProps> = ({ target, tooltipOpen, setTooltipOpen }) => {
    return (
        <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target={target}
            toggle={() => setTooltipOpen(!tooltipOpen)}>
            Please insert {target === 'starttime' ? 'start' : 'end'} date in the
            form of MM-DD-YYYY{' '}
            {target === 'starttime' ? 'or  NOW - 3days or hours' : ''}
        </Tooltip>
    );
};

export default InfoTip;
