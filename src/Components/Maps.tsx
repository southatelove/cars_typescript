import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";

export const Maps = ({
  cardInfo,
}: {
  cardInfo: Record<string, number | string>[] | undefined;
}) => {
  return (
    <section id="maps">
      <YMaps>
        <div className="container map-section__container yandex">
          <Map
            className="yandex-map"
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 5,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={[
              "control.ZoomControl",
              "control.FullscreenControl",
              "geoObject.addon.hint",
            ]}
          >
            {cardInfo &&
              cardInfo.map((item) => (
                <Placemark
                  geometry={[item.latitude, item.longitude]}
                  properties={{
                    hintContent: item.name + " " + item.model,
                  }}
                />
              ))}
          </Map>
        </div>
      </YMaps>
    </section>
  );
};
