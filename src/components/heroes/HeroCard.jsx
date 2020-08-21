import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }} >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} alt={superhero} className="card-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title"> {superhero} </div>
                        <p className="card-text" > {alter_ego} </p>
                        {
                            (characters !== alter_ego) && <p className="card-text" > {characters}  </p>
                        }
                        <p className="card-tex"> <small className="text-muted" > {first_appearance} </small> </p>
                        <Link to={`./hero/${id}`} className="btn btn-outline-primary btn-block btn-sm">
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
