// libraries
import Card from 'react-bootstrap/Card';

const StartEndBlock = ({ start }) => {
  return (
    <Card className="shrink-0 w-[220px] ml-[30px] ">
      <Card.Body className="text-center p-1">
        <Card.Text className="mt-[95px] font-semibold text-[30px]">
          LAN {start ? 'Start' : 'End'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StartEndBlock;
