import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";

export const Maps = ({ cardInfo }) => {
  return (
    <YMaps>
      <div className="container map-section__container yandex">
        <Map
          className="yandex-map"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            geometry={[53, 37]}
            modules={["geoObject.addon.balloon"]}
            properties={{
              balloonContentBody: "Местоположение автомобиля",
            }}
          ></Placemark>
        </Map>
      </div>
    </YMaps>
  );
};
