import Counter from './Counter/Counter';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <Counter />
    </main>
  );
};

export default UserProfile;