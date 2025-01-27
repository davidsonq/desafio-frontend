import { useProvider } from "../../contexts/UserContext";
import { DivSearchS } from "./styled";

const SearchBrewery = () => {
  const { searchBrewery } = useProvider();

  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    country,
    website_url,
    phone,
    longitude,
    latitude,
  } = searchBrewery;

  return (
    <DivSearchS>
      <h3>{name}</h3>
      <address>
        {brewery_type && <p>Type: {brewery_type}</p>}
        {street && <p>Street: {street}</p>}
        {city && <p>City: {city}</p>}
        {state && <p>State: {state}</p>}
        {postal_code && <p>Postal code: {postal_code}</p>}
        {country && <p>Country: {country}</p>}
        {website_url && (
          <p>
            Website: <a href={website_url}>{website_url} </a>
          </p>
        )}
        {phone && <p>Phone: {phone}</p>}
        {latitude && longitude && (
          <p>
            Open in maps:{" "}
            <a href={`http://maps.google.com/maps?q=${latitude},${longitude}`}>
              {`${latitude},${longitude}`}
            </a>
          </p>
        )}
      </address>
    </DivSearchS>
  );
};

export default SearchBrewery;
