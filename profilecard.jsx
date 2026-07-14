function ProfileCard({ name, role, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{city}</p>
    </div>
  );
}

export default ProfileCard;
