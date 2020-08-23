import React, { useMemo } from 'react';
import queryString from "query-string";
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const { q = '' } = queryString.parse(useLocation().search);

    const [{ searchText }, handleInputChange] = useForm({ searchText: q });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmitHeroSearch = (e) => {

        e.preventDefault();
        history.push(`?q=${searchText}`);
    }


    return (
        <div className="container">
            <h1>Buscar Heroe</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Formulario de Busqueda</h4>
                    <hr />
                    <form >
                        <input type="text"
                            className="form-control"
                            placeholder="Encuentra un heroe"
                            name="searchText"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={searchText}
                        />

                        <button
                            type="submit"
                            className="btn mt-2 btn-sm btn-block btn-outline-primary"
                            onClick={handleSubmitHeroSearch}
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Buscando un heroe
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            No hay heroes con el patron de busqueda: <b>{searchText}</b>
                        </div>
                    }


                    {
                        heroesFiltered.map(hero => (
                            <div className="mt-3" key={hero.id} >
                                <HeroCard {...hero} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
