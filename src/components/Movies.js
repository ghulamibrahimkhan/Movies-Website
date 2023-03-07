
const Movies = (props) => {
  return (
    <>
      <div className="w-1/6 text-center m-10 bg-slate-900 p-3 rounded">
        <img className="rounded border-white	border-2 w-full h-3/4" src={props.poster} alt="Batman" />
        <div className="text-white font-sans mt-3 bg-orange-400 flex justify-center flex-col h-20 p-3">
          <p>Movie : {props.title}</p>
          <p>Year : {props.year}</p>
        </div>
      </div>
    </>
  )
}

export default Movies