import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <div className="container mt-3">
            <h1>Heroes Marvel</h1>
            <hr />
            <HeroesList publisher={"Marvel Comics"} />
        </div>
    )
}
