import { Dispatch, SetStateAction, useState } from "react";
import { productComment, productsItem } from "../../types/product";
import StarProduct from "../UI/components/StarProduct";
import { ArrayAvg, capitalize, handleDate } from "../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { User } from "../../types/user";
import axios from "axios";
import { URL_UPDATE_PRODUCT } from "../../constants/Constants";

const ProductComment = ({
  product,
  canComment,
  setCanComment,
  user,
}: {
  product: productsItem;
  canComment: boolean;
  setCanComment: Dispatch<SetStateAction<boolean>>;
  user: User;
}) => {
  console.log(canComment);
  const [indexStar, setIndexStar] = useState<number>(5);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const title: string = e.target.elements.title.value;
    const description: string = e.target.elements.description.value;

    axios
      .put(
        URL_UPDATE_PRODUCT + "/" + product._id,
        {
          title,
          description,
          email: user?.email,
          star: indexStar,
          name: user?.name,
          firstname: user?.firstname,
        },
        {
          headers: {
            Authorization: localStorage.getItem(
              process.env.NEXT_PUBLIC_USER_TOKEN!
            ),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-10">
        <h3 className="text-3xl">Avis</h3>
        {product.star.length !== 0 && (
          <p>
            Note moyenne :{" "}
            <span className="text-3xl">{ArrayAvg(product.star)} / 5</span>
          </p>
        )}
        <p>Nombre de notes : {product.star.length}</p>
      </div>
      <div className="mt-5">
        {canComment && (
          <>
            <h2 className="text-xl title">
              Vous pouvez donner votre avis sur cet article !
            </h2>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="border flex relative rounded-md p-5"
            >
              <div className="flex flex-col w-3/4 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="title" className="title">
                    Titre :
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    placeholder="Superbe produit !"
                    className="w-full bg-gray-200  border-2 rounded-md p-2 focus:border-main focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description" className="title">
                    Description :
                  </label>
                  <textarea
                    id="description"
                    placeholder="Ce produit est vraiment ..."
                    className="w-full bg-gray-200  border-2 rounded-md p-2 focus:border-main focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="note" className="title">
                    Note :
                  </label>
                  <div className="text-4xl">
                    {[...Array(5)].map((x, index) => (
                      <FontAwesomeIcon
                        key={index}
                        onClick={() => setIndexStar(index + 1)}
                        icon={fs.faStar}
                        className={`cursor-pointer ${
                          indexStar > index
                            ? "text-yellow-300"
                            : "text-gray-200"
                        } `}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button className="rounded-lg bg-main py-2 px-5 w-fit h-fit absolute right-10 bottom-5 hover:text-white">
                Ajouter l&apos;avis
              </button>
            </form>
          </>
        )}
        {product.comments.map(
          (el: productComment, index: React.Key | null | undefined) => (
            <div key={index} className="flex flex-col py-5">
              <hr />
              <h2 className="mt-5 font-medium">
                {capitalize(el.firstname)} {capitalize(el.name)}
              </h2>
              <p className="mb-5 italic">{handleDate(el.date.toString())}</p>

              <span>
                <StarProduct star={[el.star]} />
              </span>

              <p className="font-bold">{el.title}</p>
              <p>{el.description}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductComment;
