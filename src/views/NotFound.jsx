import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const irAlHome = () => {
    navigate("/");
  };

  return (
    <main>
      <section className="not-found card card-body">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAKuutQ5QHsWA73eWMOJmjRBFYzG5FfV4TEl83fOD2znTronDv-NUfYj-ZyoiWls65No&usqp=CAU"
          alt="sad"
          aria-hidden="true"
        />
        <div>
          <h3>La página que buscas no existe</h3>
          <br />
          <button onClick={irAlHome} className="btn">
            Volver al Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
