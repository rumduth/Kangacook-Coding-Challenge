import "../css/Intro.css";
export default function FriendIntro({ name, phone, email }) {
  return (
    <div className="identity-card">
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Phone Number:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}
