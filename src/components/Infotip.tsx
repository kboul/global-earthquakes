import React, { FC } from 'react';
import { Tooltip } from 'reactstrap';

export interface InfoTipProps {
    target: string;
    tooltipOpen: boolean;
    setTooltipOpen: (arg1: boolean) => void;
}

const InfoTip: FC<InfoTipProps> = ({ target, tooltipOpen, setTooltipOpen }) => {
    return (
        <Tooltip
            placement="bottom"
            isOpen={tooltipOpen}
            target={target}
            toggle={() =>
                tooltipOpen ? setTooltipOpen(false) : setTooltipOpen(true)
            }>
            Please insert {target === 'starttime' ? 'start' : 'end'} date in the
            form of YYYY-MM-DD
        </Tooltip>
    );
};

export default InfoTip;
