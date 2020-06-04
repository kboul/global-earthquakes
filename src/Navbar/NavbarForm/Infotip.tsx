import React, { FC } from 'react';
import { Tooltip } from 'reactstrap';

interface IInfoTip {
    target: string;
    tooltipOpen: boolean;
    setTooltipOpen: (tooltipOpen: boolean) => void;
}

const InfoTip: FC<IInfoTip> = ({
    target,
    tooltipOpen,
    setTooltipOpen
}: IInfoTip) => {
    const openTooltip = () => setTooltipOpen(!tooltipOpen);
    return (
        <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target={target}
            toggle={openTooltip}>
            Please insert
            <span>{target === 'startTime' ? ' start ' : ' end '}</span>
            date in the form of MM-DD-YYYY
            {target === 'startTime' ? ' or  NOW - 3days or hours' : ''}
        </Tooltip>
    );
};

export default InfoTip;
