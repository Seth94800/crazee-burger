// import { Link } from "react-router-dom";

// export default function ErrorPage() {
//   return (
//     <div>
//       <h1>ERROR PAGE</h1>
//         <Link to= "/"> 
//         <button>Retourner vers la page Accueil</button>
//         </Link>
//     </div>
//   )
// }

import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-semibold mb-8">ERROR PAGE</h1>
      <Link to="/" className="text-orange-500 hover:underline">
        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded transition-colors duration-300 ease-in-out">
          Retourner vers la page Accueil
        </button>
      </Link>
    </div>
  );
}

