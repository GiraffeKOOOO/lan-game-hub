// libraries
import Card from 'react-bootstrap/Card';
// files
import startFlag from '../../assets/start-flag.jpg';
import finishFlag from '../../assets/finish-flag.jpg';

const StartEndBlock = ({ start }) => {
  return (
    <Card className="shrink-0 w-[220px] m-[30px] ">
      <Card.Body className=" p-1 grid content-center mx-auto">
        <Card.Img
          variant="top"
          src={start ? startFlag : finishFlag}
          className="h-[60px] w-[50px] object-cover"
        />
        <Card.Text className="font-semibold text-[30px]">LAN {start ? 'Start' : 'End'}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StartEndBlock;
