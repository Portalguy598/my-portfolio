import supremeScream from '../assets/supreme_scream.jpeg';
import xcelerator from '../assets/xcelerator.jpeg';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Blog() {

  // ensures top is scrolled to by default
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);


  return (
    <main className="section">
      <div className='blog-top'>
        <h2>My Blog</h2>
        <p>
        Welcome to my blog! This is where I’ll document
        my spring break adventures.
        </p>
      </div>
      
      <article className="blog-post">
        <h3>Spring Break 2026</h3>
        <p>It wasn't a highly eventful spring break, but I did get an opportunity to visit Knott's Berry Park!</p>
        <img src={supremeScream} alt="An image of the top of Supreme Scream at Knotts Berry Farm"></img>
        <p>
          I had hoped that the possibility of rain that day would act as a deterent for people, but I underestimated the effect that spring break had
          on the crowds. Although the park ended up being quite crowded, it took a while for everyone to spread out since it seemed like everyone wanted to get on
          Ghost Rider first. I instead opted to go to the quieter areas. I never had a chance to ride Sierra Sidewinder, a spinning rollercoaster,
          so it was nice to finally try it out. In addition to being a new experience, it served as a quick warmup for my favorite ride at the park: Xcelerator.
          The line was relatively short, so I was able to get on it multiple times in short succession. Below, you can see the aftermath of one of my rides.
        </p>
        <img src={xcelerator} alt="A selfie with Xcelerator in the background"></img>
        <p>
          Reaching 80 mph in 2 seconds is an incredible experience! Due to the speed it retained after the top hat, some of the turns were 
          forceful enough to cause me to gray out for a short period of time. Even if you are hesitant to ride it, I would recommend giving
          Xcelerator a chance if you have the opportunity to ride it; if you hate it, it will at least be over quick! <br></br> <br></br>

          Afterwards, I rode a couple more rides and ate some overpriced theme park food. I had intended to stay for longer, but I can't help
          but feel like it is time to leave when you end up waiting in line for a smaller ride like Coast Rider for an hour. As an upside, I 
          was able to escape before rush hour traffic started piling up. Overall, it was an enjoyable experience. 

        </p>
      </article>
    </main>
  );
}

export default Blog;