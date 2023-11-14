import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroesById(id), [id]); //la dependencia es el id

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1); //-1 devuelve a la pagina inmediatamente anterior
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h4>{hero.superhero}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt 3"> Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
