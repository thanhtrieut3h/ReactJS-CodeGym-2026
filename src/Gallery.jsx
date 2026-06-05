import { useState } from "react";
import { sculptureList } from "./fake_data/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    setIndex(index + 1); // cap nhat la gia tri cua state (index)
  };
  const handlePreviousClick = () => {
    setIndex(index - 1); // cap nhat la gia tri cua state (index)
  };
  const handleMoreClick = () => {
    setShowMore(!showMore);
    // cap nhat la gia tri cua state (showMore)
  };

  let sculpture = sculptureList[index];
  let checkIndexNext = sculptureList.length - 1;
  let checkIndexPrev = 0;
  return (
    <>
      {index === checkIndexPrev 
      ? (<button disabled> Previous </button>)
      : (<button onClick={handlePreviousClick}> Previous </button>)
      }

      {index === checkIndexNext 
      ? (<button disabled> Next </button>)
      : (<button onClick={handleNextClick}> Next </button>)
      }
      
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <br />
      <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
