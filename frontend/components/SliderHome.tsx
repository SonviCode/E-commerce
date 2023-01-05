import Image from "next/image";
import React from "react";

const dataImg = [
  {
    name: "veste Lafuma black",
    url: "/veste.png",
    width: 800,
    height: 800,
    like: false,
    price: 99,
    categorie: "clothes",
    type: "veste",
    smallDescription: "Doudoune mi-saison",
    star: [4],
  },
  {
    name: "veste Lafuma black",
    url: "/veste.png",
    width: 800,
    height: 800,
    like: false,
    price: 99,
    categorie: "clothes",
    type: "veste",
    smallDescription: "Doudoune mi-saison",
    star: [3],
  },
  {
    name: "veste Lafuma black",
    url: "/veste.png",
    width: 800,
    height: 800,
    like: false,
    price: 99,
    categorie: "clothes",
    type: "veste",
    smallDescription: "Doudoune mi-saison",
    star: [2],
  },
  {
    name: "veste Lafuma black",
    url: "/veste.png",
    width: 800,
    height: 800,
    like: false,
    price: 99,
    categorie: "clothes",
    type: "veste",
    smallDescription: "Doudoune mi-saison",
    star: [5, 3, 4, 1, 5, 5],
  },
];

const SliderHome = () => {
  const ArrayAvg = (myArray: number[]) => {
    let i = 0,
      summ = 0;
    while (i < myArray.length) {
      summ = summ + myArray[i++];
    }
    return parseFloat((summ / myArray.length).toFixed(1));
  };

  let avgStar: number[] = [];
  // let test = ArrayAvg(el.star);

  const toggleHeart = (el: any) => {
    el.like = !el.like;


    // console.log(ArrayAvg(el.star));


    // console.log(test);

    // for (let i = 0; i < 5; i++) {
    //   if (test - 1 >= 0) {
    //     avgStar.push(1);
    //   } else if (test - 0.5 >= 0) {
    //     avgStar.push(5);
    //   } else {
    //     avgStar.push(0);
    //   }

    //   test = test - 1;
    // }

    // console.log(avgStar);
  };

  return (
    <div className="px-[5%] mt-20 mb-20">
      <h2 className="uppercase after:block after:absolute after:w-40 after:h-1 after:bg-red-500 after:rounded-md">
        Les dernières nouveautés
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap sm:px-[5%] p-5 gap-5 max-w-7xl mx-auto mt-20">
        {dataImg.map((el, index) => (
          <>
            <div key={index}>
              <div className="relative overflow-hidden group cursor-pointer w-fit mx-auto rounded-md bg-gray-200 ">
                <i
                  onClick={() => toggleHeart(el)}
                  className={` text-sm p-1 rounded-full w-8 h-8 bg-white flex justify-center items-center absolute top-4 right-4 z-10  ${
                    el.like === true
                      ? `fa-solid fa-heart text-red-500`
                      : `fa-regular fa-heart `
                  }`}
                ></i>
                <Image
                  src={el.url}
                  width={el.width}
                  height={el.height}
                  alt={el.name}
                  className="group-hover:scale-75 duration-300 ease  object-center rounded-md p-10"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold">{el.name}</h3>
                <span className="text-sm font-bold">{el.price},00€</span>
              </div>
              <div className="text-xs">
                <p>{el.smallDescription}</p>
                <span>
                  {() => {
                    

                    

                    let test = ArrayAvg(el.star);

                    

                    for (let i = 0; i < 5; i++) {
                      if (test - 1 >= 0) {
                        avgStar.push(1);
                      } else if (test - 0.5 >= 0) {
                        avgStar.push(5);
                      } else {
                        avgStar.push(0);
                      }

                      test = test - 1;
                    }

                    // console.log(avgStar);

                    return (
                      {avgStar.map((el) => (
                        <>
                        <i></i>
                        </>
                      ))}
                    )
                    // arrayStar.push(ArrayAvg(el.star))
                    // console.log(arrayStar)
                    // if(arrayStar){

                    //   return (
                    //     <>
                    //   <p>ok</p>
                    //     </>
                    //   )

                    // } else {
                    //   return "nop"
                    // }

                    // if (ArrayAvg(el.star) > 4.5) {
                    //   return (
                    //     <>
                    //       <i className="fa-solid fa-star text-yellow-300 "></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //     </>
                    //   );
                    // } else if (ArrayAvg(el.star) >= 4) {
                    //   return (
                    //     <>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-gray-200"></i>
                    //     </>
                    //   );
                    // } else if (ArrayAvg(el.star) >= 3) {
                    //   return (
                    //     <>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //     </>
                    //   );
                    // } else if (ArrayAvg(el.star) >= 2) {
                    //   return (
                    //     <>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //     </>
                    //   );
                    // } else if (ArrayAvg(el.star) >= 1) {
                    //   return (
                    //     <>
                    //       <i className="fa-solid fa-star text-yellow-300"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //     </>
                    //   );
                    // } else {
                    //   return (
                    //     <>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //       <i className="fa-regular fa-star"></i>
                    //     </>
                    //   );
                    // }
                  }}
                </span>
                <span>({el.star.length})</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
