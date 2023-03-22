import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style';
const NewsBlog = () => {
    const [posts, setPosts] = useState([]);
    const date=new Date();
    console.log(date);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=jobs&from=2023-02-22&sortBy=publishedAt&apiKey=80cd263af25a4a139a2e5bf30c63c2d2&pagesize=10')
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
                posts.map((e,i)=>(
                    <div className="  w-80 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex w-80 justify-center">
                        <div
                            className="block  max-w-[20rem] rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                            <a href="#!">
                                <img
                                    className="rounded-t-lg w-96 h-52"
                                    src={e.urlToImage}
                                    alt="" />
                            </a>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {e.title.slice(10)}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {e.description.slice(20)}
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase bg-blue-600 leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                                    Success
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </main>

    );
}

export default NewsBlog;
