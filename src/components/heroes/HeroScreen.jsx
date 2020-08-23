import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    //const hero = getHeroesById(heroId);
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero;

    if (!hero) {
        return <Redirect to='/' />
    }

    const publisherRoute = publisher.split(' ');

    const handleGoBack = () => {
        if (history.length <= 2) {
            history.push(`/${publisherRoute[0]}`);
        } else {
            history.goBack();
        }
    }

    return (

        <div style={{ marginLeft: 150, marginRight: 150 }}>
            <div className="row mt-5" >
                <div className="col-4">
                    <img src={`../assets/heroes/${heroId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" style={{ width: 250 }} />
                </div>
                <div className="col-8 animate__animated animate__slideInRight">
                    <h3> {superhero} </h3>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item"> <b>Alter-ego:</b> {alter_ego} </li>
                        <li className="list-group-item"> <b>Casa publicadora:</b> {publisher} </li>
                        <li className="list-group-item"> <b>Primera aparición:</b> {first_appearance} </li>
                        {
                            (characters !== alter_ego) && <li className="list-group-item">
                                <p><b>characters:</b> {characters}  </p>
                            </li>
                        }
                    </ul>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleGoBack}
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}
