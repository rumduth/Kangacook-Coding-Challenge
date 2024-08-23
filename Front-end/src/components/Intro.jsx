import "../css/Intro.css";
export default function Intro({ name, id, dob, photo, address }) {
  return (
    <div className="identity-card">
      <div className="photo-container">
        <img src="/photo.jpeg" alt={`${name}'s photo`} className="photo" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Phone Number:</strong> {id}
        </p>
        <p>
          <strong>Date of Birth:</strong> {dob}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
}
