/*
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const backupImageUrl = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

const Demo = () => {
    const { id } = useParams();
    const { store } = useContext(Context);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const character = store.characters.find(c => c.uid === id);
                const planet = store.planets.find(p => p.uid === id);
                const vehicle = store.vehicles.find(v => v.uid === id);
                
                if (character) {
                    setItem(character);
                } else if (planet) {
                    setItem(planet);
                } else if (vehicle) {
                    setItem(vehicle);
                } else {
                    setItem(null);
                }
            } catch (error) {
                console.error("Error fetching item details:", error);
            }
        };

        fetchItemDetails();
    }, [id, store.characters, store.planets, store.vehicles]);

    return (
        <div className="container mt-5">
            {item ? (
                <div className="detail-card">
                    <img 
                        src={item.imageUrl || backupImageUrl} 
                        alt={item.name} 
                        className="detail-card-img" 
                        onError={(e) => e.target.src = backupImageUrl} 
                    />
                    <div className="detail-card-body">
                        <h5 className="detail-card-title">{item.name}</h5>
                        <p className="detail-card-text">
                            {item.hair_color && <><strong>Hair Color:</strong> {item.hair_color} <br /></>}
                            {item.eye_color && <><strong>Eye Color:</strong> {item.eye_color} <br /></>}
                            {item.gender && <><strong>Gender:</strong> {item.gender} <br /></>}
                            {item.population && <><strong>Population:</strong> {item.population} <br /></>}
                            {item.terrain && <><strong>Terrain:</strong> {item.terrain} <br /></>}
                            {item.model && <><strong>Model:</strong> {item.model} <br /></>}
                            {item.manufacturer && <><strong>Manufacturer:</strong> {item.manufacturer} <br /></>}
                        </p>
                    </div>
                </div>
            ) : (
                <div>No details available.</div>
            )}
        </div>
    );
};

export default Demo; */