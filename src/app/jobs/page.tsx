import styles from "./Jobs.module.css";

function jobs () {
    return <div className={styles.main}>
      <div className="mb-6 text-sky-950 ">
        <h3 className="pb-2 font-bold text-4xl">Get your dream Job Today</h3>
        <p className="text-2xl">Explore all the most exiting Job roles based on your interest and study major</p>
      </div>
      <h3 className="mb-2 font-bold text-3xl">Our Jobs</h3>
      <div className="mb-4 flex gap-2">      
        <div className="border-2 border-dashed rounded-lg border-rose-400 p-2 pb-3 w-1/3 bg-rose-100">
          <h4 className="pb-2 text-xl font-bold">UI/UX Design</h4>
          <p>Design Protofolio and Website</p>
          <button className="mt-4 border-2 p-1 rounded-lg border-rose-700 text-sm text-white bg-rose-700 px-3">Read More </button>
        </div>
        <div className="border-2 border-dashed rounded-lg border-rose-400 p-2 pb-3 w-1/3 bg-rose-100">
          <h4 className="pb-2 text-xl font-bold">Full Stack Developer</h4>
          <p>Design Protofolio and Website</p>
          <button className="mt-4 border-2 p-1 rounded-lg border-rose-700 text-sm text-white bg-rose-700 px-3">Read More </button>
        </div>
        <div className="border-2 border-dashed rounded-lg border-rose-400 p-2 pb-3 w-1/3 bg-rose-100">
          <h4 className="pb-2 text-xl font-bold">Tester Software</h4>
          <p>Design Protofolio and Website</p>
          <button className="mt-4 border-2 p-1 rounded-lg border-rose-700 text-sm text-white bg-rose-700 px-3">Read More </button>
        </div>
      </div>
    </div>
  }
  
  export default jobs;