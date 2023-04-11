import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";

export const Maps = ({ cardInfo }) => {
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521],
  ];
  const coordinates2 = [55.684758, 37.738521];

  return (
    <YMaps>
      <div className="container map-section__container yandex">
        <Map
          // width="100%"
          // height="500px"
          className="yandex-map"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
        >
          {coordinates &&
            coordinates.map((item) => {
              <Placemark geometry={item} />;
            })}
          {/* <Placemark
            properties={cardInfo?.[6].latitude}
            geometry={[cardInfo?.[3].latitude, cardInfo?.[3].longitude]}
          /> */}
          <Placemark geometry={coordinates2}></Placemark>
        </Map>
      </div>
    </YMaps>
  );
};
