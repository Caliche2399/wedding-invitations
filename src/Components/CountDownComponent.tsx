import Countdown from 'react-countdown';
import {Badge, Row} from "react-bootstrap";
import "../Styles/countdown.css";

interface RendererProps{
    hours: number;
    minutes: number;
    seconds: number;
    days: number;
    completed: boolean;
};

const renderer = (props: RendererProps) => {
    const { days, hours, minutes, seconds, completed } = props;

    if (completed) {
        return <span>¡Tiempo agotado!</span>;
    } else {
        return (
            <div className="d-flex justify-content-center py-5">
                <Row className="justify-content-md-center">
                    <Badge pill bg={"light"} text={"dark"} className="countdown-badge">{days} <br/> días</Badge>
                    <Badge pill bg={"light"} text={"dark"} className="countdown-badge">{hours} <br/> hrs</Badge>
                    <Badge pill bg={"light"} text={"dark"} className="countdown-badge">{minutes} <br/> min</Badge>
                    <Badge pill bg={"light"} text={"dark"} className="countdown-badge">{seconds} <br/> seg</Badge>
                </Row>
            </div>
        );
    }
};

export const CountDownComponent = () => {

    return (
        <Countdown
            date={new Date('2025-10-04T00:00:00')}
            renderer={renderer}
        />
    );
}