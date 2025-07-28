// App.jsx
// This is the primary app component that renders a StudentCard component. 
// It provides the StudentCard with specific student data as props.  
// This component only gives StudentCard data; it has no state of its own.

 // Open the local file and import the StudentCard component.
import StudentCard from './StudentCard';

function App() {
  // The App component returns JSX to render the UI
  return (
    <div>
      {/* Render the StudentCard component and provide student details via props */}
      <StudentCard
        name="Emily Carter"                          // Student's name passed as a prop
        major="Computer Science"                     // Student's major field of study
        year="Sophomore"                             // Student's academic year
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
                                                    // Student's short biography
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
                                                    // URL of the student's profile image
      />
    </div>
  );
}

export default App;
