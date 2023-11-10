import React from 'react'

function Card() {
    return (
        <article>
            <div className='card p-4 flex-col flex-wrap text-center w-fit bg-gray-400 rounded-xl border border-gray-800'>
                <a href='#' ><img className='rounded-lg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1802183%2Fpexels-photo-1802183.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D750%26w%3D1260&f=1&nofb=1&ipt=3cb1cb493617be99d4644384a8520279b128a5affac06ab05419662fbbe20377&ipo=images' width="250rem" /> </a>
                <div className='card-body p-4'>
                    <h2>Project </h2>
                    <p> paragraph</p>
                    <a href='#'>Read more</a>
                </div>
            </div>
        </article>
    )
}

export default Card