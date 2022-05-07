import { Tooltip } from 'reactstrap';

interface InfoTipProps {
  setTooltipOpen: (tooltipOpen: boolean) => void;
  target: string;
  tooltipOpen: boolean;
}

export default function InfoTip({
  setTooltipOpen,
  target,
  tooltipOpen
}: InfoTipProps) {
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
}
