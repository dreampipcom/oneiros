/* eslint   no-unreachable:0, @typescript-eslint/no-unused-vars:0, no-import-assign:0, import/no-unresolved:0, import/no-webpack-loader-syntax:0, jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/MapView.tsx
import clsx from 'clsx';
import Map, { Source, Layer, Popup as GLPop } from 'react-map-gl';
import bbox from '@turf/bbox';
import React, { useRef, useState, useEffect } from 'react';
import { workerClass } from 'mapbox-gl';
import workerLoader from 'mapbox-gl/dist/mapbox-gl-csp-worker?worker';
import { Button } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { Link } from '../../atoms/03_Link';
import { SystemIcon, ESystemIcon } from '../../atoms/05_SystemIcon';

import 'mapbox-gl/dist/mapbox-gl.css';

export const MapLocale = {
  default: {
    locale: 'en-us',
    view: 'View more',
    calendar: 'Add to calendar',
  },
  'it-it': {
    locale: 'it-it',
    view: 'Vedi altro',
    calendar: 'Aggiungi al calendario',
  },
  'pt-br': {
    locale: 'pt-pt',
    view: 'Veja mais',
    calendar: 'Adicionar ao calendário',
  },
  'es-es': {
    locale: 'es-es',
    view: 'Ver más',
    calendar: 'Añadir al calendario',
  },
  'de-de': {
    locale: 'de-de',
    view: 'Mehr anzeigen',
    calendar: 'Zum Kalender hinzufügen',
  },
  'fr-fr': {
    locale: 'fr-fr',
    view: 'Voir plus',
    calendar: 'Ajouter au calendrier',
  },
  ro: {
    locale: 'ro-ro',
    view: 'Vezi mai mult',
    calendar: 'Adaugă în calendar',
  },
  'pl-pl': {
    locale: 'pl-pl',
    view: 'Zobacz więcej',
    calendar: 'Dodaj do kalendarza',
  },
  'cs-cz': {
    locale: 'cs-cz',
    view: 'Zobrazit více',
    calendar: 'Přidat do kalendáře',
  },
  'sv-se': {
    locale: 'sv-se',
    view: 'Visa mer',
    calendar: 'Lägg till i kalendern',
  },
  'et-ee': {
    locale: 'et-ee',
    view: 'Vaata rohkem',
    calendar: 'Lisa kalendrisse',
  },
  'ja-jp': {
    locale: 'ja-jp',
    view: 'もっと見る',
    calendar: 'カレンダーに追加',
  },
};

export const MAP_CENTRES = {
  bologna: {
    coordinates: [44.4950954609241, 11.342671827389358],
    zoom: 13,
    slug: 'bologna',
    city: 'Bologna',
  },
  milan: {
    coordinates: [45.468964617372144, 9.185626132750581],
    zoom: 12,
    slug: 'milan',
    city: 'Milan',
  },
  rome: {
    coordinates: [41.89155469633848, 12.489295340697346],
    zoom: 10,
    slug: 'rome',
    city: 'Rome',
  },
  salvador: {
    coordinates: [-13.004604344148513, -38.508604693368525],
    zoom: 11,
    slug: 'salvador',
    city: 'Salvador',
  },
  //
  barcelona: {
    coordinates: [41.406545280288164, 2.1748619972294425],
    zoom: 10,
    slug: 'barcelona',
    city: 'Barcelona',
  },
  montevideo: {
    coordinates: [-34.87964393846871, -56.17967780626219],
    zoom: 11,
    slug: 'montevideo',
    city: 'Montevideo',
  },
  'buenos-aires': {
    coordinates: [-34.605404817586916, -58.44372023511807],
    zoom: 11,
    slug: 'buenos-aires',
    city: 'Buenos Aires',
  },
  'sao-paulo': {
    coordinates: [-23.539530638879445, -46.632974596201784],
    zoom: 9,
    slug: 'sao-paulo',
    city: 'São Paulo',
  },
  'rio-de-janeiro': {
    coordinates: [-22.896288364477716, -43.18010298590159],
    zoom: 9,
    slug: 'rio-de-janeiro',
    city: 'Rio de Janeiro',
  },
  'new-york': {
    coordinates: [40.78343167530586, -73.9649807684582],
    zoom: 9,
    slug: 'new-york',
    city: 'New York',
  },
  'los-angeles': {
    coordinates: [34.04280112429188, -118.27994380137976],
    zoom: 9,
    slug: 'los-angeles',
    city: 'Los Angeles',
  },
  london: {
    coordinates: [51.49707494166325, -0.11830187408555738],
    zoom: 9,
    slug: 'london',
    city: 'London',
  },
  amsterdam: {
    coordinates: [52.37300011627217, 4.89914502114092],
    zoom: 10,
    slug: 'amsterdam',
    city: 'Amsterdam',
  },
  berlin: {
    coordinates: [52.51558001390169, 13.405471175511197],
    zoom: 10,
    slug: 'berlin',
    city: 'Berlin',
  },
  paris: {
    coordinates: [48.85837373820162, 2.347719247553416],
    zoom: 10,
    slug: 'paris',
    city: 'Paris',
  },
  madrid: {
    coordinates: [40.419543366570025, -3.6980869726309074],
    zoom: 10,
    slug: 'madrid',
    city: 'Madrid',
  },
  lisbon: {
    coordinates: [38.72170956493803, -9.137077200346017],
    zoom: 11,
    slug: 'lisbon',
    city: 'Lisbon',
  },
  // 'brussels': {
  //   coordinates: [50.847942220069974, 4.359278621249498],
  //   zoom: 10,
  //   slug: 'brussels'
  // },
  // 'helsinki': {
  //   coordinates: [60.17060646408163, 24.9417479081061],
  //   zoom: 10,
  //   slug: 'helsinki'
  // },
  // 'stockholm': {
  //   coordinates: [59.3291904587081, 18.0747421483835],
  //   zoom: 10,
  //   slug: 'stockholm'
  // },
  // 'vienna': {
  //   coordinates: [48.205271439006324, 16.370205155676686],
  //   zoom: 11,
  //   slug: 'vienna'
  // },
  // 'malmo': {
  //   coordinates: [55.60429001203468, 13.002924043355616],
  //   zoom: 11,
  //   slug: 'malmo'
  // },
  // 'copenhagen': {
  //   coordinates: [55.67646697784446, 12.568415929865017],
  //   zoom: 11,
  //   slug: 'copenhagen'
  // },
  // 'tallinn': {
  //   coordinates: [59.43529132682876, 24.758830754731353],
  //   zoom: 11,
  //   slug: 'tallinn'
  // },
  // 'kassel': {
  //   coordinates: [51.31249663730745, 9.474345469392675],
  //   zoom: 11,
  //   slug: 'kassel'
  // },
  // 'warsaw': {
  //   coordinates: [52.2286176198592, 21.01380667963312],
  //   zoom: 11,
  //   slug: 'warsaw'
  // },
  // 'bucharest': {
  //   coordinates: [44.427254325634394, 26.10012813246689],
  //   zoom: 11,
  //   slug: 'bucharest'
  // },
  // 'prague': {
  //   coordinates: [50.075419900329166, 14.432655632695203],
  //   zoom: 11,
  //   slug: 'prague'
  // },
  // 'zurich': {
  //   coordinates: [47.3784801240796, 8.520658940136343],
  //   zoom: 11,
  //   slug: 'zurich'
  // },
  // 'cape-town': {
  //   coordinates: [-33.91965737680834, 18.433543390603305],
  //   zoom: 11,
  //   slug: 'cape-town'
  // },
  //
  // 'tokyo': {
  //   coordinates: [35.77884404494747, 139.74709804249656],
  //   zoom: 11,
  //   slug: 'tokyo'
  // },
  // 'sydney': {
  //   coordinates: [-33.86377138104712, 51.21894962803245],
  //   zoom: 11,
  //   slug: 'sydney'
  // },
  // 'vilnius': {
  //   coordinates: [54.68549232478511, 25.279117815293635],
  //   zoom: 11,
  //   slug: 'vilnius'
  // },
  // 'riga': {
  //   coordinates: [56.96603489318597, 24.10777947553373],
  //   zoom: 11,
  //   slug: 'riga'
  // },
  global: {
    coordinates: [0, 0],
    zoom: 7,
    slug: 'global',
    city: 'All cities',
  },
};

export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'molecule__MapView',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#fff',
      10,
      '#22cc00',
      30,
      '#cc2200',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 5, 30, 10, 40],
  },
};

export const clusterCountLayer = {
  id: 'molecule__MapView',
  type: 'symbol',
  source: 'molecule__MapView',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    // 'text-font': ['Comfortaa', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
};

export const unclusteredPointLayer = {
  id: 'point',
  type: 'circle',
  source: 'molecule__MapView',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#fff',
    'circle-radius': 10,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff',
  },
};

export const DEFAULT_EVENTS = {
  calData: [
    {
      id: '[musica, samba] Banda - Samba do São Lázaro',
      title: '[musica, samba] Banda - Samba do São Lázaro',
      url: 'https://instagram.com/samba_do_sl',
      location:
        'Largo de São Lázaro - Ondina, Salvador - BA, 40170-010, Brazil',
      start: '2024-08-09T17:00:00-03:00',
      end: '2024-08-09T20:00:00-03:00',
      classNames: ['musica', 'samba'],
      allDay: false,
      terms: ['musica', 'samba'],
      city: 'salvador',
      artists: ['Banda'],
      project: ['Samba do São Lázaro'],
      timeframe: 'W',
    },
  ],
  mapData: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-38.5120851, -13.0076901],
        },
        properties: {
          name: '[musica, samba] Banda - Samba do São Lázaro',
          terms: ['musica', 'samba'],
          city: 'salvador',
          artists: ['Banda'],
          project: ['Samba do São Lázaro'],
          starttime: '2024-08-09T17:00:00-03:00',
          endtime: '2024-08-09T20:00:00-03:00',
          location:
            'Largo de São Lázaro - Ondina, Salvador - BA, 40170-010, Brazil',
          link: 'https://instagram.com/samba_do_sl',
          timeframe: 'W',
          clusterId: 'molecule__MapView',
        },
      },
    ],
    timeframe: 'W',
  },
};

export enum EMapViewVariant {
  DEFAULT = 'default',
}

export interface IMapView {
  id?: string;
  className?: string;
  events?: any;
  locale?: string;
  mobile?: boolean;
  city?: string;
  settings?: any;
  timeframe?: string;
  mapBoxToken?: string;
  fetchNewData?: () => void;
  theme?: 'light' | 'dark';
}

export interface IMapPopup {
  id?: string;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
  locale?: string;
  feature?: any;
  theme?: 'light' | 'dark';
}

const Popup = function ({
  id = 'molecule__MapView',
  className,
  theme,
  feature,
  locale = 'en-US',
  onClose = () => {},
  onOpen = () => {},
}: IMapPopup) {
  const { name, starttime, endtime, link } = feature.properties;
  const coordinates = feature.geometry;
  const [lng, lat] = coordinates;
  const start = new Date(starttime).toLocaleString(locale || 'en-US', {});
  const end = new Date(endtime).toLocaleString(locale || 'en-US', {});

  const localization = MapLocale[locale] || MapLocale.default;
  // style={{ zIndex: 99999, width: '300px', position: 'absolute', bottom: '-128px', backgroundColor: '#1b1b1b', padding: '8px' }
  return (
    <GLPop
      id={id}
      className={`${className} mapbox-purizu-custom`}
      longitude={lng}
      latitude={lat}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div style={{ display: 'flex' }}>
        <Typography style={{ flex: '1 0 60%' }}>{name}</Typography>
        <Button
          onClick={() => {
            onClose();
          }}
          icon={ESystemIcon.close}
          size="small"
          sx={{ padding: '4px', width: '32px', height: '32px' }}
        />
      </div>
      <Typography>{`${start}—${end}`}</Typography>
      <div>
        <Link href={link} target="_blank" rel="noreferrer noopener">
          {localization.view}
        </Link>
      </div>
      <div>
        <Button
          sx={{ marginY: '4px' }}
          startIcon={<SystemIcon theme={theme} />}
          theme={theme}
          onClick={async () => {
            // to-do: event click action
            // const cal = await import('../lib/cal');
            // const { createICal } = cal;
            // const { download } = cal;
            // const invite = await createICal({
            //   start: starttime,
            //   end: endtime,
            //   title: name,
            //   url: link,
            //   location,
            //   locale,
            // });
            // await download(`purizu-external-${name}.ics`, invite, mobile);
          }}
        >
          {localization.calendar}
        </Button>
      </div>
    </GLPop>
  );
};

export const HMapView = function ({
  id = 'molecule__MapView',
  className = '',
  events = DEFAULT_EVENTS,
  locale,
  mobile,
  city,
  settings,
  timeframe,
  mapBoxToken,
  fetchNewData,
  theme = 'light',
}: IMapView) {
  console.log({ mapBoxToken });
  console.log({ events });
  const mapRef = useRef(null);
  const popup = useRef({ open: false, feature: undefined });
  const hoverPopup = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [hoverPopupOpen, setHoverPopupOpen] = useState(false);

  const gridSx = [
    {
      [`class04
        flex
        col-span-full col-start-0
        content-center
        items-center
        align-center
        justify-center
        `]: true,
    },
  ];

  const gridStyles = `${clsx(gridSx)} ${className}`;

  const onPopUpClose = () => {
    setPopupOpen(false);
    setHoverPopupOpen(false);
  };

  const onClickCluster = ({ target }) => {
    if (popupOpen || hoverPopupOpen) {
      setPopupOpen(false);
      setHoverPopupOpen(false);
      return;
    }
    const clusterId = target.properties.cluster_id;
    const mapboxSource = mapRef.current.getSource('molecule__MapView');
    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: target.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };

  const onClickPoint = ({ target, event }) => {
    if (popupOpen || hoverPopupOpen) {
      setPopupOpen(false);
      setHoverPopupOpen(false);
      return;
    }
    const { lngLat } = event;
    const geometry = target.geometry.coordinates;
    popup.current = {
      feature: { properties: target.properties, geometry, lngLat },
    };
    setPopupOpen(true);
  };

  useEffect(() => {
    if (events?.timeframe !== timeframe) {
      fetchNewData({ force: true });
    }
  }, [timeframe]);

  useEffect(() => {
    // if (!events?.mapData) return;
    if (mapRef?.current && events?.mapData?.features?.length) {
      const bounds = bbox(events?.mapData);

      if (bounds?.length) {
        try {
          mapRef.current.fitBounds(bounds, { padding: 200, maxZoom: 14 });
        } catch (e) {
          mapRef.current.fitBounds(bounds, { padding: 20, maxZoom: 14 });
        }
      }
    }
  }, [JSON.stringify(events?.mapData)]);

  const onClick = (event) => {
    const [target] = event.features;

    if (!target) return;

    if (target.layer.id === 'clusters') {
      onClickCluster({ target, event });
    }
    if (target.layer.id === 'point') {
      onClickPoint({ target, event });
    }
  };

  const onMouseEnter = (event) => {
    const [target] = event.features;
    const { clusterId } = target.properties;
    const mapboxSource = mapRef.current.getSource(clusterId);
    mapboxSource.getClusterLeaves(clusterId, 5, 0, (err, features) => {
      console.log({ err });
      if (err) return;
      hoverPopup.current = features;
      hoverPopup.current.coordinates = target.geometry.coordinates;
      setHoverPopupOpen(true);
    });
  };

  const onMouseLeave = () => {
    setHoverPopupOpen(false);
  };

  const centre = [settings?.where?.lon, settings?.where?.lat] || [0, 0];
  const zoom = settings?.zoom || 3;

  return (
    <div className="relative w-lvw h-lvh overflow-hidden">
      <Map
        mapLib={import('mapbox-gl')}
        initialViewState={{
          latitude: centre[1],
          longitude: centre[0],
          zoom,
        }}
        mapboxAccessToken={mapBoxToken}
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onZoomEnd={fetchNewData}
        onDragEnd={fetchNewData}
        cursor="auto"
        ref={mapRef}
        style={{ width: '100svw', height: '97svh' }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        <Source
          id="molecule__MapView"
          type="geojson"
          data={events?.mapData}
          cluster
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        {popupOpen ? (
          <Popup
            theme={theme}
            feature={popup.current.feature}
            locale={locale}
            mobile={mobile}
            city={city}
            onClose={onPopUpClose}
          />
        ) : undefined}
        {hoverPopupOpen && hoverPopup.current ? (
          <GLPop
            onClose={onPopUpClose}
            className="mapbox-purizu-custom"
            latitude={hoverPopup?.current?.coordinates[1]}
            longitude={hoverPopup?.current?.coordinates[0]}
          >
            {hoverPopup?.current?.length &&
              hoverPopup?.current?.map((feature) => (
                <span>
                  {feature?.properties?.name}
                  <br />
                </span>
              ))}
          </GLPop>
        ) : undefined}
      </Map>
    </div>
  );
};

export default HMapView;
