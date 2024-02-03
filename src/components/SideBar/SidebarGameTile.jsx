// libraries
import Card from 'react-bootstrap/Card';

const SidebarGameTime = ({ game }) => {
  const pathToAssets = '/images/';

  return (
    <>
      <Card className="my-[10px] mx-auto h-[85px] w-[240px]">
        <Card.Body className="grid grid-cols-2 py-2 px-1">
          <div className="grid grid-rows-3 justify-center text-left">
            <Card.Text className="my-auto row-span-2 text-[14px]">{game.game_name}</Card.Text>
            <Card.Text className="my-auto row-span-1 text-[13px]">{game.game_start_time}</Card.Text>
          </div>
          <div className="object-cover my-auto">
            <Card.Img src={`${pathToAssets}${game.game_image_string}`} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SidebarGameTime;
