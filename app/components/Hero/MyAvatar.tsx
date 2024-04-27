"use client"
import React, {useEffect, useState} from "react";
import Lottie from "lottie-react";
import Image from "next/image";

const MyAvatar = () => {

    const [animationData, setAnimationData] = useState(null);
    const jsonLink = "https://lottie.host/803b7b00-df77-4fab-97f8-74d46e2a03b1/f19fEdNo5N.json"

    useEffect(() => {
        const fetchAnimationData  = async () => {
            try {
                // const res = await fetch('https://assets5.lottiefiles.com/packages/lf20_q9bvzeej/data.json');
                const res = await fetch(jsonLink);
                const data = await res.json();
                setAnimationData(data);
            } catch (error) {
                console.error('Error fetching Lottie JSON:', error);
            }
        };

        fetchAnimationData();
    }, []);



    return (
        <div className="relative" style={{background: 'transparent', width: '500px', height: '500px', margin: 'auto'}}>
            <Lottie
                animationData={animationData}
                loop={true}
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>


    );
}

export default MyAvatar;