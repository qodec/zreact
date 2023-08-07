import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../data";

export default function Photos() {
  // Queries
  const query = useQuery({ queryKey: ["photos"], queryFn: getPhotos });
  console.log({ query });

  return (
    <>
      <section className="banner bg-black text-white text-4xl py-8 text-center items-center justify-center">
        Photos
        {query?.isSuccess && <div className="text-sm">Total - {query.data.length}</div>}
      </section>
      <section className="py-12 px-8 grid grid-cols-4 gap-5">
        {query?.isSuccess ? (
          <>
            {query.data.slice(0, 20).map((photo) => (
              <Link to={`/photos/${photo.id}`} key={photo.id} className="">
                <img src={photo.url} alt="" className="w-full rounded-lg" />
                <div>{photo.title}</div>
              </Link>
            ))}
          </>
        ) : (
          <div className="col-span-4 text-center text-3xl"> No Data yet</div>
        )}
      </section>
    </>
  );
}
