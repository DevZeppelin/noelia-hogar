import { RichText } from "prismic-reactjs";

export default function BlogLayout({ tag, title, blogs }) {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col md:w-2/3 ml-4 md:ml-24 mr-4 md:mr-20 text-center">
          <h1 className=" text-2xl font-bold md:text-3xl text-center my-8 mb-4 md:mb-16">
            {title}
          </h1>

          <div className="md:hidden mb-2 block text-left mx-12">
            <h1 className=" text-base uppercase font-bold opacity-60 text-primary text-center">
              Índice
            </h1>

            {blogs.results.map((article, index) => (
              <div key={article.uid}>
                
                  <span className="flex bold text-xs opacity-60">
                    •{RichText.render(article.data["articulo-title"])}
                  </span>
                
              </div>
            ))}
            
           
          </div>

          <div className="md:hidden mb-6">
            <h1 className=" text-xl uppercase">Artículos en venta</h1>
            <p> 👇</p>
          </div>

          {blogs.results.map((article, index) => (
            <div className=" mb-4 md:mb-10" key={article.uid}>
              
                <h1 className="bold uppercase text-xl md:text-2xl text-lowContrast mb-4">
                  {RichText.render(article.data["articulo-title"])}
                </h1>
              

              
                <img
                  className="w-2/3 flex  mx-auto border-gray-800 border-2 mb-2"
                  src={article.data["articulo-image"].url}
                  alt="img"
                />              
              

              <h1 className="mt-2 mb-4 px-4 text-2xl">
                {" "}
                {RichText.render(article.data["articulo-info"])}
              </h1>
              
              <span>PRECIO</span>
              <div  className="px-2 text-2xl font-bold flex justify-center">
               $ {RichText.render(article.data["articulo-price"])}
              </div>

              <hr className="mt-5" />
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col w-1/3">
          
          <h1
            className="text-xl uppercase font-bold text-primary mb-10 ml-24"
            
          >
            Índice
          </h1>

          {blogs.results.map((article, index) => (
            <div key={article.uid}>
              
                <h1 className="flex bold text-base mr-10 opacity-60 cursor-pointer">
                  {RichText.render(article.data["articulo-title"])}
                </h1>
              

              <hr className="mt-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
