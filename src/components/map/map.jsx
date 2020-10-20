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
    const {offers} = this.props;

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
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
      leaflet
      .marker(offer.coords, {icon})
      .addTo(this.map);
    });
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
};

export default Map;