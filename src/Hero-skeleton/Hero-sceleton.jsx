import React from 'react';
import Vision from '../img/vision.png'


export default function HeroSceleton() {
    return (
        <div className="hero-sceleton-container">
            <p>
                Please select a character to see information
            </p>
            <div class="skeleton">
                        <div class="pulse skeleton__header">
                            <div class="pulse skeleton__circle"></div>
                            <div class="pulse skeleton__mini"></div>
                        </div>
                        <div class="pulse skeleton__block"></div>
                        <div class="pulse skeleton__block"></div>
                        <div class="pulse skeleton__block"></div>
                        <img src={Vision} alt="Vision" className="bg-decoration" />
                    </div>
        </div>
    )
}
