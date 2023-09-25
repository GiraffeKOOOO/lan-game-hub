// libraries
import Card from 'react-bootstrap/Card';

const StartEndBlock = ({ start }) => {
  return (
    <Card className="w-[220px] ml-[30px] text-center my-auto">
      <Card.Body>
        <Card.Text className="font-semibold text-[30px]">LAN {start ? 'Start' : 'End'}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StartEndBlock;
