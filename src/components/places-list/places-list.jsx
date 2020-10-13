import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card";
import {offersPropType} from "../../utils/common";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCard={() => {
              this.setState({activeCard: offer});
            }}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: offersPropType.isRequired,
};

export default PlacesList;
