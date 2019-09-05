// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ClusteredGoogleMap from 'clustered-react-gmap';

const MarkerComponent = ({ src, key }) => <img src={src} key={key} alt="" style={{ width: 35, height: 35 }} />;
const RADIUS = 50000;
const COUNT = 5000;
const demoImages = [
  'https://res.cloudinary.com/rwaves/image/upload/v1/alfresco/1bQFylsZQ5a_BP8JI0Qvkg',
  'https://alfresco.ripplenami.com/share/proxy/alfresco-noauth/api/internal/shared/node/fC4r_poZTP6_5a1miQDZKg/content',
  'https://res.cloudinary.com/rwaves/image/upload/v1/alfresco/j5g6hzUIQLeTCGdGtvG1Cw',
  'https://res.cloudinary.com/rwaves/image/upload/v1/alfresco/RHuKuTLXSZSQ7QxX579kkQ',
  'https://res.cloudinary.com/rwaves/image/upload/v1/alfresco/50ZC-mRXQleHn3LZ5TYUcw',
];

MarkerComponent.propTypes = {
  src: PropTypes.string,
  key: PropTypes.number
};

function generateRandomPoints(center, radius, count) {
  const points = [];
  for (let i = 0; i < count; i += 1) {
    points.push(generateRandomPoint(center, radius));
  }
  return points;
}

function generateRandomPoint(center, radius) {
  const x0 = center.lng;
  const y0 = center.lat;
  // Convert Radius from meters to degrees.
  const rd = radius / 111300;

  const u = Math.random();
  const v = Math.random();

  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const xp = x / Math.cos(y0);

  // Resulting point.
  return { lat: y + y0, lng: xp + x0 };
}

function renderMarker(item) {
  return (
    <MarkerComponent
      lat={item.location.latitude}
      lng={item.location.longitude}
      src={item.icon.uri}
      key={item.id + Math.random()}
    />
  );
}

export const GatekeeperMapComponent = ({ center, zoom }) => {
  const positions = generateRandomPoints(center, RADIUS, COUNT);
  const data = positions.map((point, idx) => {
    const index = Math.floor(Math.random() * demoImages.length);
    const imgUrl = demoImages[index];
    return {
      location: {
        latitude: point.lat,
        longitude: point.lng,
      },
      icon: {
        uri: imgUrl,
      },
      iconWidth: 35,
      iconHeight: 35,
      clusterType: index,
      id: idx,
    };
  });

  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <ClusteredGoogleMap
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
        clusteringEnabled
        renderMarker={renderMarker}
        data={data}
      />
    </div>
  );
};

GatekeeperMapComponent.propTypes = {
  center: PropTypes.objectOf(PropTypes.number),
  zoom: PropTypes.number
};

GatekeeperMapComponent.defaultProps = {
  center: {
    lat: 37.78825,
    lng: -122.4324
  },
  zoom: 11
};
