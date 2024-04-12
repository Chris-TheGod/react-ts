import CourseGoal from './components/CourseGoals.tsx';
import Header from './components/Header.tsx';
import goals from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{ src: goals, alt: 'Goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
