import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style';
import { Link } from 'react-router-dom';
const NewsBlog = () => {

    const [posts, setPosts] = useState([]);

    let currentDate = new Date();
    let time = currentDate.getFullYear() + ":" + currentDate.getMonth() + ":" + currentDate.getDate();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=jobs&from=${time}&sortBy=publishedAt&apiKey=80cd263af25a4a139a2e5bf30c63c2d2&pagesize=20`)
            .then(response => {
                setPosts(response.data[['articles']]);
                console.log(posts);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <main className={` flex  justify-between flex-wrap ${styles.paddingX}`}>

            {
                posts.map((e, i) => (
                    <div className="my-5">
                        <div className="card w-72">
                            <img src={!e.urlToImage ? "https://images.mid-day.com/images/images/2022/aug/Cold-a_d.jpg" : e.urlToImage} className="card-img-top" style={{ width: '286px', height: '196px' }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-body text-xl  w-80">{e.title}...</h5>
                                <p className="card-text  w-72">{e.description}...</p>
                                <Link to={e.url} target="_blank" className="group inline-flex p-3 my-2 items-center justify-center rounded-full  font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-emerald-100 focus-visible:outline-emerald-600  text-sm">Read More</Link>
                            </div>
                        </div>
                    </div>

                ))
            }
        </main>

    );
}

export default NewsBlog;
