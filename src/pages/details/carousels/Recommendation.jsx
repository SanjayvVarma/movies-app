import React from "react";

import Carousel from "../../../components/carousel";
import useFetch from "../../../hooks";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;