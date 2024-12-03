"use client"
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { fetchDataBahan, inputDataBahan } from "./service";


interface DataBahan {
    name: string;
    img: string;
    description: string;
    total: Number;
}

export default function Bahan() {
    const [dataBahan, setDataBahan] = useState<DataBahan[]>([])

    const fetchData = async () => {
        try {
            let resp: any = await fetchDataBahan();
            console.log("resp---", resp);

            setDataBahan(resp?.data)
        } catch (error) {
            console.log("error", error);

            // Handle the error
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const createDataBahan = async () => {
        try {
            const resp = await inputDataBahan({
                name: "kayu",
                img: "https://magetan.satujam.com/wp-content/uploads/2016/12/bahan-dasar-alumunium.jpg?strip=all&lossy=1&ssl=1",
                description: "Kayu adalah bagian batang atau cabang serta ranting tumbuhan yang mengeras karena mengalami lignifikasi (pengayuan).",
                total: 10
            });
            console.log("resp create", resp);

        } catch (error) {
            // Handle the error
        }
    };

    return (
        <div className={styles.page}>
            <button type="button" className="btn btn-danger mb-5" onClick={createDataBahan}>Danger</button>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {setDataBahan.length > 0 &&
                    dataBahan.map((data: any, index: any) => {
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <img src={data.img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">{data.description}</p>
                                                <p className="card-text"><small className="text-muted">Total: {data.total}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}