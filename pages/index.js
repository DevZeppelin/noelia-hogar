import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiClothes, GiSonicShoes, GiHeartEarrings } from "react-icons/gi";



export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Noelia Hogar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Noelia hogar electrodomésticos ropa calzado artesanias Santa Rosa Mendoza"
        />
        <meta
          name="keywords"
          content="Noelia hogar electrodomésticos ropa calzado artesanias Santa Rosa Mendoza"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout>
        <div className="flex mb-12 flex-wrap-reverse md:flex-wrap mx-auto my-auto mt-16 md:mt-0">
          <div className="flex flex-col w-4/5 md:w-1/2 mt-10 ml-8 md:ml-16 md:mt-4">
            <div className="space-y-4 text-center">
              <div className=" pt-8 space-y-5">
                <h1 className=" w-full md:w-2/3 text-center text-2xl uppercase font-bold opacity-80 ml-2 md:ml-24">
                  ¡ Bienvenido a mi{" "}
                  <span className="text-secundary border-black">Tienda</span> !
                </h1>
                <h2 className="text-xl text-primary pb-6">
                  ¡Acá encontrarás <b>electrodomésticos</b>, ropa, calzado al mejor precio de Mendoza! Al final de la página tenés mi whatsapp, mi facebook y mi mail para que me contactes 😉
                </h2>
                <div className="md:grid grid-cols-2 gap-2">
                  <Link href="/electro">
                    <div className="indexItem1 border-primary border-2 border-opacity-25 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primary">
                      <CgSmartHomeRefrigerator className="mx-auto w-12 md:w-12  h-12 md:h-12  " />
                      <p>
                        ¿Necesitás renovar tu hogar? Entrá acá y mirá todo lo lindo que podés comprar para equipar tu hogar con lo último en electrodomésticos
                      </p>
                      <button className="border-2 border-primary text-primary py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-green-400">
                        Electrodomésticos
                      </button>
                    </div>
                  </Link>

                  <Link href="/ropa">
                    <div className="indexItem2 border-primary border-2 border-opacity-25 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primary">
                      <GiClothes className="mx-auto w-12 md:w-12  h-12 md:h-12 " />
                      <p>
                        ¿Necesitás renovar tu ropero? Acá encontrarás lo último en moda y todo lo que necesitás para vestir a toda tu familia
                      </p>
                      <button className="border-2 border-primary text-primary py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-red-400">
                        Ropa
                      </button>
                    </div>
                  </Link>

                  <Link href="/calzado">
                    <div className="indexItem3 border-primary border-2 border-opacity-25 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primary">
                      <GiSonicShoes className="mx-auto w-12 md:w-12  h-12 md:h-12 " />
                      <p>
                        ¿Como se encuentra el calzado de tu familia? Acá encontrarás zapatillas deportivas, zapatos y todo tipo de calzado
                      </p>
                      <button className="border-2 border-primary text-primary py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-red-400">
                        Calzado
                      </button>
                    </div>
                  </Link>
                  <Link href="/artesanias">
                    <div className="indexItem4 border-primary border-2 border-opacity-25 space-y-3 p-3 pb-4 mb-4 md:pb-4 rounded-lg cursor-pointer text-primary">
                      <GiHeartEarrings className="mx-auto w-12 md:w-12  h-12 md:h-12 " />
                      <p>
                        ¿Tu casa necesita un pequeño cambio? Te invito a ver mis <i>artesanías</i> y cositas para regalar, eventos o decorar tu casa
                      </p>
                      <button className="border-2 border-primary text-primary py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:bg-green-400">
                        Artesanías
                      </button>
                    </div>
                  </Link>

                  
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-auto items-center justify-center md:items-start md:pt-16 align-middle md:mr-6">
          <img src="logo.png" alt="hogar" className="logoMain" width="330" height="330" />            
          </div>
        </div>
        <div>
          
        </div>
        <style jsx>{`
        
          .indexItem1:hover {
            border: solid 1px #0e5203;
            box-shadow: 0px 0px 10px #2edc12;
            background-color: #a6ffb6;
            color: #0e5203;
          }
          .indexItem2:hover {
            border: solid 1px #ff727f;
            box-shadow: 0px 0px 10px #ff727f;
            background-color: #ffdadd;
            color: #ff3e50;
          }
          .indexItem3:hover {
            border: solid 1px #ff727f;
            box-shadow: 0px 0px 10px #ff727f;
            background-color: #ffdadd;
            color: #ff3e50;
          }
          .indexItem4:hover {
            border: solid 1px #0e5203;
            box-shadow: 0px 0px 10px #2edc12;
            background-color: #a6ffb6;
            color: #0e5203;
          }


          .logoMain {
            animation-name: infiniteScale;
            animation-duration: 3s;
            animation-iteration-count: infinite
          }

          @keyframes infiniteScale {
            from {
              transform: scale(1.0)
            }

            50% {
              transform: scale(0.9)
            }

            to {
              transform: scale(1.0)
            }
          }

        `}</style>
      </Layout>
    </div>
  );
}
