function about () {
    return <div className="text-sky-900 p-6">
        <h3 className="mb-6 font-bold text-4xl">About Us</h3>
        <div className="">
          <div className="flex justify-between mb-4 bg-white p-4 rounded-lg border-2 border-sky-100">
            <div className="w-1/2 gap-6">
              <h4 className="mb-6 font-bold text-3xl">Our Mission</h4>
              <p className="mb-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer"> Read More </button>
            </div>
            <div className="">
              <img src="./file.svg" width="400"></img>
            </div>
          </div>

          <div className="flex justify-between mb-4 bg-white p-4 rounded-lg border-2 border-sky-100">
            <div>
              <img src="./file.svg" width="400"></img>
            </div>
            <div className="w-1/2 gap-6"> 
              <h4 className="mb-6 font-bold text-3xl">Our Goal</h4>
              <p className="mb-6 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="mt-4 border-2 p-1 rounded-lg border-sky-700 text-lg text-white bg-sky-700 px-3 cursor-pointer"> Read More </button>
            </div>
          </div>

        </div>
     </div>
  }
  
  export default about;