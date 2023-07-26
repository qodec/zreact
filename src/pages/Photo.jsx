import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../data";

export default function Photo() {
  let { id } = useParams();
  // Queries
  const query = useQuery({ queryKey: ["photos"], queryFn: getPhotos });

  const photo = () => {
    if (query?.isSuccess) {
      return query.data.filter((photo) => photo.id == id)[0];
    }
  };

  return (
    <>
      <section className="banner bg-black text-white text-4xl py-8 text-center items-center justify-center">Photo - {id}</section>
      <section className="py-12 px-8 grid grid-cols-2 gap-5">
        {query?.isSuccess ? (
          <>
            <img src={photo().url} alt="" className="w-full rounded-lg" />
            <div className="text-4xl self-center">
              <div className="text-xs">PHOTO - {photo().id}</div>
              {photo().title}
            </div>
          </>
        ) : (
          <div className="col-span-4 text-center text-3xl"> No Data yet</div>
        )}
      </section>
    </>
  );
}
