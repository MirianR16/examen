import { NavLink } from "react-router-dom";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/clases", texto: "Mis Clases" },
  { to: "/docentes", texto: "Docentes" },
];

export default function Sidebar({ usuario }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__user">Usuario: {usuario}</div>
      <nav className="sidebar__nav">
        {enlaces.map((e) => (
          <NavLink
            key={e.to}
            to={e.to}
            end={e.to === "/"}
            className={({ isActive }) =>
              "sidebar__link" + (isActive ? " sidebar__link--active" : "")
            }
          >
            {e.texto}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
