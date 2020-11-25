import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import '../../../node_modules/leaflet/dist/leaflet.css';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }
  initMap() {
    const {offers, activeCardID, currentOffer} = this.props;

    const city = offers[0] ? [offers[0].city.location.latitude, offers[0].city.location.longitude] : [48.85661, 2.351499];

    let icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = offers[0] ? offers[0].city.location.zoom : 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);


    offers.forEach((offer) => {
      icon.options.iconUrl = offer.id === activeCardID ? `/img/pin-active.svg` : `/img/pin.svg`;

      leaflet
      .marker([offer.location.latitude, offer.location.longitude], {icon})
      .addTo(this.map);
    });

    if (currentOffer) {
      icon.options.iconUrl = `/img/pin-active.svg`;

      leaflet
      .marker([currentOffer.location.latitude, currentOffer.location.longitude], {icon})
      .addTo(this.map);
    }
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.initMap();
  }

  render() {
    return (
      <div id="map" style={{width: `512px`, height: `512px`, margin: `30px auto 0px`}}>

      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCardID: PropTypes.number.isRequired,
  currentOffer: PropTypes.object,
};

export default Map;
